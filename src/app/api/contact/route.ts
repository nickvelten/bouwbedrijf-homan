import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Inzendingen komen binnen op dit adres.
const TO_EMAIL = "l.velten@bouwbedrijfhoman.nl";
// Afzender op het eigen domein. Vereist dat bouwbedrijfhoman.nl als domein in
// Resend is geverifieerd (DNS-records). Het Resend-testadres onboarding@resend.dev
// mag alleen naar je eigen accountmail sturen en faalt dus naar andere adressen.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Bouwbedrijf Homan <website@bouwbedrijfhoman.nl>";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
// Minstens één letter (incl. accenten); botspam bestaat vaak uit enkel cijfers.
const HAS_LETTER_RE = /[a-zA-ZÀ-ɏ]/;

// Sneller dan dit kan geen mens het formulier invullen.
const MIN_FILL_MS = 3_000;
// Ouder dan dit is een verdacht (replayed) formulier.
const MAX_FILL_MS = 24 * 60 * 60 * 1000;

// Rate-limit per IP. In-memory en dus per serverless-instance; geen harde
// garantie, maar remt herhaalde inzendingen vanaf hetzelfde adres af.
const MAX_PER_WINDOW = 3;
const WINDOW_MS = 60 * 60 * 1000;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter(
    (ts) => now - ts < WINDOW_MS,
  );
  if (recent.length >= MAX_PER_WINDOW) {
    submissionsByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return false;
}

/**
 * Botdetectie op patroon. Bij een match doen we alsof het gelukt is, zodat
 * bots niets leren over de filtering (zelfde aanpak als de honeypot).
 */
function isSpam(payload: Record<string, unknown>, bericht: string): boolean {
  // Bericht zonder ook maar één letter (bijv. alleen een reeks cijfers).
  if (!HAS_LETTER_RE.test(bericht)) return true;

  // Tijdval: het formulier stuurt mee wanneer het geladen is. Ontbreekt die
  // waarde (directe API-post), of is de invultijd onmenselijk kort of juist
  // verdacht oud, dan is het geen mens.
  const t = Number(payload.t);
  if (!Number.isFinite(t)) return true;
  const elapsed = Date.now() - t;
  if (elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS) return true;

  return false;
}

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  // Honeypot: bots vullen dit verborgen veld; mensen niet.
  if (clean(payload.company)) {
    return Response.json({ ok: true });
  }

  const naam = clean(payload.naam);
  const email = clean(payload.email);
  const telefoon = clean(payload.telefoon);
  const onderwerp = clean(payload.onderwerp);
  const bericht = clean(payload.bericht);

  if (!naam || !email || !bericht) {
    return Response.json(
      { error: "Vul je naam, e-mailadres en bericht in." },
      { status: 422 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Vul een geldig e-mailadres in." },
      { status: 422 },
    );
  }

  if (isSpam(payload, bericht)) {
    return Response.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "onbekend";
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Te veel berichten achter elkaar. Probeer het over een uur nog eens, of bel ons gerust." },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY ontbreekt — contactformulier kan niet versturen.");
    return Response.json(
      { error: "Verzenden is nog niet geconfigureerd. Bel of mail ons gerust direct." },
      { status: 503 },
    );
  }

  const subject = onderwerp
    ? `Contactformulier: ${onderwerp}`
    : `Nieuw bericht via de website — ${naam}`;

  const text = [
    `Naam: ${naam}`,
    `E-mail: ${email}`,
    `Telefoon: ${telefoon || "-"}`,
    `Onderwerp: ${onderwerp || "-"}`,
    "",
    bericht,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      text,
    });
    if (error) {
      console.error("Resend-fout:", error);
      return Response.json(
        { error: "Versturen mislukt. Probeer het later opnieuw of bel ons." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Onverwachte fout bij versturen:", err);
    return Response.json(
      { error: "Versturen mislukt. Probeer het later opnieuw of bel ons." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
