import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { places, projectsInPlace } from "@/data/places";
import { BrandMark } from "@/components/brand-mark";
import { HeroBeeldmerk } from "@/components/hero-beeldmerk";

export const metadata: Metadata = {
  title: "Werkgebied — Bouwbedrijf Homan in heel Twente",
  description:
    "Bouwbedrijf Homan werkt in heel Twente en omstreken. Bekijk per plaats welke woningen, bedrijfspanden en renovaties we realiseerden.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/werkgebied" },
};

export default function WerkgebiedPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden px-3 pt-12 sm:px-6 sm:pt-20">
        <HeroBeeldmerk />
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
            <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
            Werkgebied
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.02em]">
            Thuis in
            <br />
            <span className="text-[var(--accent)]">heel Twente.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Vanuit ons kantoor in Enter werken we binnen een straal van 50 km.
            Kies uw plaats en bekijk welk werk we daar realiseerden.
          </p>
        </div>
      </section>

      <section className="px-3 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {places.map((place) => {
              const count = projectsInPlace(place.name).length;
              return (
                <Link
                  key={place.slug}
                  href={`/werkgebied/${place.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-[24px] border border-foreground/10 bg-muted p-7 transition-colors hover:border-foreground/25 hover:bg-foreground/5"
                >
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      {place.name}
                    </h2>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/50">
                      {count > 0
                        ? `${count} project${count === 1 ? "" : "en"}`
                        : "Werkgebied"}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-3 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] tracking-tight lg:col-span-8">
              Staat uw plaats er niet bij?
            </h2>
            <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex h-[60px] items-center gap-2 rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <span>Vraag het ons</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
