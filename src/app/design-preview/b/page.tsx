import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PlaceholderBadge } from "@/components/placeholder-badge";

export const metadata: Metadata = {
  title: "Voorstel B — Craft & Material",
  robots: { index: false, follow: false },
};

const services = [
  { title: "Woningbouw", body: "Vrijstaande woningen en kleine complexen, afgestemd op de plek en de mensen." },
  { title: "Utiliteitsbouw", body: "Bedrijfspanden en kantoren die net zo lang meegaan als het bedrijf zelf." },
  { title: "Verbouwing", body: "Aanbouwen, uitbouwen en doorbouwen — ingebed in wat er al staat." },
  { title: "Renovatie", body: "Monumentaal en karakteristiek erfgoed, teruggebracht zonder glans-effectje." },
];

const projects = [
  {
    title: "Appartementen Markelo",
    loc: "Markelo",
    year: "2024",
    cat: "Woningbouw",
    img: "/images/projecten/utiliteitsbouw/appartementen-markelo.jpg",
  },
  {
    title: "Centrumplan Enter",
    loc: "Enter",
    year: "2023",
    cat: "Utiliteitsbouw",
    img: "/images/projecten/utiliteitsbouw/centrumplan-enter.jpg",
  },
  {
    title: "Restauratie Enter",
    loc: "Enter",
    year: "2022",
    cat: "Renovatie",
    img: "/images/projecten/utiliteitsbouw/restauratie-enter.jpg",
  },
];

// Subtle noise-paper background via inline SVG data URI (tiny, inline-cached)
const paperBg = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.85' numOctaves='2' seed='3'/%3E%3CfeColorMatrix values='0 0 0 0 0.12 0 0 0 0 0.1 0 0 0 0 0.08 0 0 0 0.045 0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function PreviewB() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "var(--font-geist-sans)",
        backgroundColor: "#EDE8DE",
        backgroundImage: paperBg,
        color: "#1F1A14",
      }}
    >
      {/* Return bar */}
      <div
        className="sticky top-0 z-50 border-b backdrop-blur"
        style={{
          backgroundColor: "rgba(237,232,222,0.85)",
          borderColor: "rgba(31,26,20,0.15)",
        }}
      >
        <div
          className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em]"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          <Link href="/design-preview" className="hover:opacity-60">
            ← Voorstellen
          </Link>
          <span className="opacity-60">Voorstel B — Craft & Material</span>
        </div>
      </div>

      {/* Nav */}
      <header className="mx-auto max-w-[1360px] px-6 pt-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              className="text-3xl italic"
            >
              Homan
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.25em]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#78604A" }}
            >
              Bouwbedrijf · Enter
            </span>
          </div>
          <ul
            className="hidden gap-8 text-sm md:flex"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            {["Werk", "Ambacht", "Bureau", "Vacatures", "Contact"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-[#A94B2B]">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="hidden rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-white md:inline-block"
            style={{ backgroundColor: "#A94B2B", fontFamily: "var(--font-geist-sans)" }}
          >
            Spreek ons
          </a>
        </nav>
      </header>

      {/* Hero split-screen */}
      <section className="mx-auto max-w-[1360px] px-6 pt-16 pb-28 md:pt-24 md:pb-40">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p
              className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#78604A" }}
            >
              <span className="h-px w-10" style={{ backgroundColor: "#78604A" }} />
              Est. 1982 — Enter, Twente
            </p>
            <h1
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              className="text-[clamp(3.5rem,10vw,8rem)] font-normal leading-[0.92] tracking-[-0.01em]"
            >
              Gebouwd door{" "}
              <em
                className="italic"
                style={{ color: "#A94B2B" }}
              >
                handen
              </em>{" "}
              die weten waar ze zijn.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed" style={{ color: "#4A3F32" }}>
              Drie generaties Twents vakmanschap. We leveren niet in glad blinken,
              maar in stilstaan als de rest is doorgetrokken.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#1F1A14" }}
              >
                Start een project →
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-[#1F1A14] hover:text-[#EDE8DE]"
                style={{ borderColor: "#1F1A14" }}
              >
                Bekijk werk
              </a>
            </div>
          </div>
          <div className="relative">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-sm"
              style={{
                boxShadow:
                  "0 1px 2px rgba(31,26,20,0.08), 0 12px 24px -8px rgba(31,26,20,0.25), 0 40px 64px -16px rgba(31,26,20,0.15)",
              }}
            >
              <Image
                src="/images/projecten/woningbouw/enter-1.jpg"
                alt="Project"
                fill
                className="object-cover"
                sizes="(min-width: 905px) 540px, 90vw"
              />
              <PlaceholderBadge label="Placeholder" />
            </div>
            {/* Corner stamp */}
            <div
              className="absolute -top-6 -right-6 flex h-28 w-28 -rotate-12 items-center justify-center rounded-full border-2 text-center text-[10px] uppercase leading-tight tracking-[0.14em] md:h-36 md:w-36 md:text-xs"
              style={{
                borderColor: "#A94B2B",
                color: "#A94B2B",
                backgroundColor: "rgba(237,232,222,0.9)",
                fontFamily: "var(--font-jetbrains-mono)",
              }}
            >
              Sinds
              <br />
              <span style={{ fontFamily: "var(--font-instrument-serif)" }} className="block text-2xl not-italic md:text-4xl">
                1982
              </span>
              Bouwend
            </div>
            {/* Floating meta */}
            <div
              className="absolute -bottom-4 -left-4 rounded-sm bg-white px-5 py-4 shadow-xl md:-bottom-6 md:-left-8"
            >
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#78604A" }}
              >
                Recent
              </p>
              <p
                className="mt-1 text-lg"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Woning Enter
              </p>
              <p className="text-xs text-neutral-500">2024 · Woningbouw</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section
        className="border-y"
        style={{
          borderColor: "rgba(31,26,20,0.15)",
          backgroundColor: "rgba(31,26,20,0.03)",
        }}
      >
        <div className="mx-auto grid max-w-[1360px] grid-cols-2 gap-6 px-6 py-14 md:grid-cols-4 md:py-20">
          {[
            { n: "40+", l: "Jaar vakmanschap" },
            { n: "700", l: "Projecten" },
            { n: "34", l: "Medewerkers" },
            { n: "3", l: "Generaties" },
          ].map((s) => (
            <div key={s.l} className="border-l pl-5 md:border-l-0 md:pl-0">
              <div
                style={{ fontFamily: "var(--font-instrument-serif)", color: "#A94B2B" }}
                className="text-[clamp(3rem,7vw,5.5rem)] leading-none"
              >
                {s.n}
              </div>
              <p
                className="mt-3 text-xs uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#78604A" }}
              >
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="mx-auto max-w-[1360px] px-6 py-24 md:py-32">
          <div className="mb-16 max-w-2xl">
            <p
              className="mb-4 text-xs uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#78604A" }}
            >
              — Wat we doen
            </p>
            <h2
              style={{ fontFamily: "var(--font-instrument-serif)" }}
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]"
            >
              Vier disciplines,{" "}
              <em className="italic">één hand</em>.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative rounded-sm border bg-white p-8 transition-all hover:-translate-y-1"
                style={{
                  borderColor: "rgba(31,26,20,0.12)",
                  boxShadow:
                    "0 1px 2px rgba(31,26,20,0.05), 0 8px 20px -8px rgba(31,26,20,0.12)",
                }}
              >
                <h3
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                  className="mb-3 text-3xl md:text-4xl"
                >
                  {s.title}
                </h3>
                <p className="mb-6 text-base leading-relaxed" style={{ color: "#4A3F32" }}>
                  {s.body}
                </p>
                <span
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#A94B2B" }}
                >
                  Bekijk →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section
        className="border-t"
        style={{ borderColor: "rgba(31,26,20,0.15)" }}
      >
        <div className="mx-auto max-w-[1360px] px-6 py-24 md:py-32">
          <div className="mb-14 flex items-end justify-between gap-10">
            <div>
              <p
                className="mb-4 text-xs uppercase tracking-[0.22em]"
                style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#78604A" }}
              >
                — Recent werk
              </p>
              <h2
                style={{ fontFamily: "var(--font-instrument-serif)" }}
                className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]"
              >
                Een kleine greep.
              </h2>
            </div>
            <a
              href="#"
              className="hidden shrink-0 rounded-full border px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[#1F1A14] hover:text-[#EDE8DE] md:inline-block"
              style={{ fontFamily: "var(--font-jetbrains-mono)", borderColor: "#1F1A14" }}
            >
              Alles zien
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {projects.map((p) => (
              <article key={p.title} className="group">
                <div
                  className="relative mb-5 aspect-[4/5] overflow-hidden rounded-sm"
                  style={{
                    boxShadow:
                      "0 1px 2px rgba(31,26,20,0.08), 0 10px 22px -6px rgba(31,26,20,0.18)",
                  }}
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 905px) 420px, 100vw"
                  />
                </div>
                <p
                  className="mb-1 text-[11px] uppercase tracking-[0.22em]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#78604A" }}
                >
                  {p.cat} — {p.loc} — {p.year}
                </p>
                <h3
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                  className="text-2xl leading-tight"
                >
                  {p.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section
        style={{ backgroundColor: "#1F1A14", color: "#EDE8DE" }}
      >
        <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
          <p
            className="mb-10 text-xs uppercase tracking-[0.22em]"
            style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#A88A70" }}
          >
            — Wat klanten zeggen
          </p>
          <blockquote
            style={{ fontFamily: "var(--font-instrument-serif)" }}
            className="text-[clamp(1.75rem,4vw,3rem)] leading-[1.2]"
          >
            &ldquo;<em className="italic">Geen</em> fratsen. Afspraak is afspraak.
            Werk is af als het af is — niet als de deadline dat zegt. Dat is in deze
            branche nog zeldzaam.&rdquo;
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/10" />
            <div className="text-left">
              <p className="text-sm">Harry Meinders</p>
              <p
                className="text-xs uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#A88A70" }}
              >
                Opdrachtgever · 2022
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-[1360px] px-6 py-24 md:py-32">
        <div
          className="relative overflow-hidden rounded-md p-12 md:p-20"
          style={{ backgroundColor: "#A94B2B", color: "#F4EFE4" }}
        >
          <div
            className="absolute inset-y-0 right-0 hidden w-1/3 opacity-10 md:block"
            style={{
              backgroundImage:
                "url(/images/projecten/woningbouw/stijlvol-landhuis.jpg)",
              backgroundSize: "cover",
            }}
          />
          <p
            className="mb-4 text-xs uppercase tracking-[0.22em]"
            style={{ fontFamily: "var(--font-jetbrains-mono)", opacity: 0.7 }}
          >
            — Laten we praten
          </p>
          <h2
            style={{ fontFamily: "var(--font-instrument-serif)" }}
            className="max-w-2xl text-[clamp(2rem,5vw,4rem)] leading-[1.05]"
          >
            Een idee voor een woning, een pand of een verbouwing? Loop gerust
            even binnen.
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium"
              style={{ color: "#A94B2B" }}
            >
              Plan afspraak →
            </a>
            <a
              href="tel:0547381035"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium hover:bg-white/10"
            >
              0547 381 035
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t"
        style={{ borderColor: "rgba(31,26,20,0.15)" }}
      >
        <div className="mx-auto max-w-[1360px] px-6 py-16">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div
                className="text-3xl italic"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Homan
              </div>
              <p className="mt-3 text-sm" style={{ color: "#4A3F32" }}>
                Bouwbedrijf uit Enter, Twente. Sinds 1982 in de familie.
              </p>
            </div>
            <div className="text-sm" style={{ fontFamily: "var(--font-geist-sans)" }}>
              <p className="mb-3 text-xs uppercase tracking-[0.2em]" style={{ color: "#78604A", fontFamily: "var(--font-jetbrains-mono)" }}>
                Kantoor
              </p>
              <p>Vonderweg 19</p>
              <p>7468 DC Enter</p>
            </div>
            <div className="text-sm">
              <p className="mb-3 text-xs uppercase tracking-[0.2em]" style={{ color: "#78604A", fontFamily: "var(--font-jetbrains-mono)" }}>
                Contact
              </p>
              <p>0547 381 035</p>
              <p>info@bouwbedrijfhoman.nl</p>
            </div>
            <div className="text-sm">
              <p className="mb-3 text-xs uppercase tracking-[0.2em]" style={{ color: "#78604A", fontFamily: "var(--font-jetbrains-mono)" }}>
                Volgen
              </p>
              <p>Instagram · LinkedIn · Facebook</p>
            </div>
          </div>
          <div
            className="mt-12 border-t pt-6 text-xs"
            style={{ borderColor: "rgba(31,26,20,0.15)", color: "#78604A", fontFamily: "var(--font-jetbrains-mono)" }}
          >
            © 2026 Bouwbedrijf Homan B.V. · KvK 08055832 · Bouwgarant
          </div>
        </div>
      </footer>
    </div>
  );
}
