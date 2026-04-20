import {
  Geist,
  Inter_Tight,
  Instrument_Sans,
  Space_Grotesk,
  Archivo_Black,
} from "next/font/google";

const geist = Geist({ subsets: ["latin"], weight: ["700", "900"] });
const interTight = Inter_Tight({ subsets: ["latin"], weight: ["700", "900"] });
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["700"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400" });

const options = [
  {
    n: "00",
    name: "Huidige — Geist · font-bold",
    note: "Zoals nu op de site.",
    className: `${geist.className} font-bold`,
  },
  {
    n: "01",
    name: "Optie 1 — Geist · font-black",
    note: "Zwaarste Geist-weight, zelfde font, veel meer body.",
    className: `${geist.className} font-black`,
  },
  {
    n: "02",
    name: "Optie 2 — Inter Tight · 900",
    note: "Strakker, iets smaller, industrieel.",
    className: `${interTight.className} font-black`,
  },
  {
    n: "03",
    name: "Optie 3 — Space Grotesk · 700",
    note: "Geometrisch, brutalist, iets eigenzinniger.",
    className: `${spaceGrotesk.className} font-bold`,
  },
  {
    n: "04",
    name: "Optie 4 — Archivo Black · display",
    note: "Ultra-bold display font, maximale impact.",
    className: `${archivoBlack.className}`,
  },
  {
    n: "05",
    name: "Bonus — Instrument Sans · 700",
    note: "Mooie moderne grotesk, iets subtieler dan Archivo.",
    className: `${instrumentSans.className} font-bold`,
  },
];

export default function FontPreviewPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="px-6 pt-20 pb-10">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
            § Font preview — homepage hero
          </p>
          <h1 className="mt-4 text-2xl font-bold tracking-tight">
            Kies een optie voor de hero-font.
          </h1>
          <p className="mt-2 text-foreground/60">
            Dezelfde kop, zes verschillende fonts. Tracking/line-height
            identiek — alleen het font verschilt.
          </p>
        </div>
      </section>

      <div className="divide-y divide-foreground/10">
        {options.map((o) => (
          <section key={o.n} className="px-6 py-16">
            <div className="mx-auto max-w-[1440px]">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  §{o.n}
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
                  {o.name}
                </p>
              </div>
              <p className="mt-2 text-sm text-foreground/50">{o.note}</p>
              <h2
                className={`${o.className} mt-8 max-w-5xl text-[clamp(3rem,7.5vw,7rem)] leading-[0.9] tracking-[-0.035em]`}
              >
                Bouwen met vakmanschap,
                <br />
                <span className="text-[var(--accent)]">op uw manier.</span>
              </h2>
            </div>
          </section>
        ))}
      </div>

      <section className="px-6 pt-16 pb-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
            Laat weten welk nummer je wilt (00–05) — ik zet 'm dan door naar
            alle pagina's.
          </p>
        </div>
      </section>
    </div>
  );
}
