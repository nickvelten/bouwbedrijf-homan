import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design voorstellen",
  robots: { index: false, follow: false },
};

const proposals = [
  {
    slug: "a",
    name: "Editorial-Architectural",
    tagline: "Portfolio van een architect",
    palette: ["#F3F0EA", "#141410", "#2D3B30", "#8B7B5E"],
    chars: [
      "Display serif (Fraunces) + Geist + JetBrains Mono",
      "Cream background, near-black ink, moss accent",
      "Genummerde secties §01 §02, asymmetrisch grid",
      "Projecten als magazine-index met hover-reveal",
    ],
  },
  {
    slug: "b",
    name: "Craft & Material",
    tagline: "Familiebedrijf met karakter",
    palette: ["#EDE8DE", "#1F1A14", "#A94B2B", "#78604A"],
    chars: [
      "Instrument Serif italic + Geist body",
      "Warm papier, diepbruine ink, terracotta accent",
      "Split-screen hero, grote cijferstatistieken",
      "Tactiele paper-shadow blokken, EST. stempel",
    ],
  },
  {
    slug: "c",
    name: "Digital-native Bold",
    tagline: "Premium, strak, contemporary",
    palette: ["#0A0A0A", "#EEEEE8", "#E5FF3C", "#8C8C83"],
    chars: [
      "Geist zwaar, geen serifs, tabular mono",
      "Color-blocked cream ↔ near-black secties",
      "Oversized typografie als layout-element",
      "Horizontal scroll project-galerij",
    ],
  },
];

export default function DesignPreviewIndex() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="mb-16 md:mb-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
            Design voorstellen — 2026-04
          </p>
          <h1 className="mb-6 text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-tight">
            Drie richtingen
            <br />
            voor Bouwbedrijf Homan.
          </h1>
          <p className="max-w-2xl text-lg text-neutral-600">
            Elke mockup toont dezelfde inhoud in een andere visuele taal. Klik door,
            vergelijk op gevoel, en kies de richting die past. Placeholder-beelden
            zijn gemarkeerd voor nieuwe fotografie.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {proposals.map((p) => (
            <Link
              key={p.slug}
              href={`/design-preview/${p.slug}`}
              className="group block rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-900 hover:shadow-xl"
            >
              <div className="mb-5 flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
                  Voorstel {p.slug.toUpperCase()}
                </span>
                <div className="flex gap-1">
                  {p.palette.map((c) => (
                    <span
                      key={c}
                      style={{ backgroundColor: c }}
                      className="h-5 w-5 rounded-full border border-neutral-200"
                    />
                  ))}
                </div>
              </div>
              <h2 className="mb-2 text-2xl font-semibold leading-tight tracking-tight">
                {p.name}
              </h2>
              <p className="mb-5 text-sm text-neutral-500">{p.tagline}</p>
              <ul className="mb-6 space-y-2 text-sm text-neutral-700">
                {p.chars.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neutral-900" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-neutral-900 transition-colors group-hover:text-black">
                Bekijk mockup →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 border-t border-neutral-200 pt-8 font-mono text-xs uppercase tracking-[0.18em] text-neutral-500">
          <Link href="/" className="hover:text-neutral-900">
            ← Terug naar de live site
          </Link>
        </div>
      </div>
    </div>
  );
}
