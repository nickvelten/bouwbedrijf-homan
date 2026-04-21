import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { articles } from "@/data/articles";
import { BrandMark } from "@/components/brand-mark";
import { HeroBeeldmerk } from "@/components/hero-beeldmerk";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Actueel",
  description:
    "Nieuws, interviews en updates van Bouwbedrijf Homan. Blijf op de hoogte van onze projecten en ontwikkelingen in Twente.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/actueel" },
};

const categoryLabels: Record<string, string> = {
  algemeen: "Algemeen",
  utiliteit: "Utiliteit",
  woningbouw: "Woningbouw",
  vacature: "Vacature",
};

const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ActueelPage() {
  const [featured, ...rest] = sorted;

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden px-3 pt-12 sm:px-6 sm:pt-20">
        <HeroBeeldmerk />
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
            <BrandMark className="h-3 w-[0.65rem] text-foreground" />
            Actueel
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.02em]">
            Nieuws &amp;
            <br />
            <span className="text-[var(--accent)]">interviews.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Updates over opleveringen, interviews met onze vakmensen en
            verhalen van achter de steigers. Zo blijft u op de hoogte van wat
            er bij ons speelt.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/bouwbedrijfhoman/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[60px] items-center gap-2.5 rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              <InstagramIcon className="h-5 w-5" />
              <span>Volg @bouwbedrijfhoman</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
              Dagelijkse updates vanaf de bouwplaats
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="px-3 pt-14 sm:px-6 sm:pt-20">
          <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
            <Link
              href={`/actueel/${featured.slug}`}
              className="group relative block overflow-hidden rounded-[28px] bg-muted sm:rounded-[40px]"
            >
              <div className="relative aspect-[21/9]">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 1440px, 100vw"
                  quality={75}
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0" />
                <div className="absolute inset-x-6 top-6 flex items-start justify-between sm:inset-x-10 sm:top-10">
                  <span className="rounded-full bg-white/90 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
                    {categoryLabels[featured.category] ?? featured.category}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--accent)] shadow-sm"
                  >
                    <Plus className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                </div>
                <div className="absolute inset-x-6 bottom-6 max-w-3xl sm:inset-x-10 sm:bottom-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
                    {formatDate(featured.date)}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {featured.title}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* GRID */}
      <section className="px-3 pt-16 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <Link
                key={a.slug}
                href={`/actueel/${a.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-foreground/10 bg-white transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={a.cover}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    quality={70}
                  />
                  <div className="absolute inset-x-4 top-4 flex items-start justify-between">
                    <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
                      {categoryLabels[a.category] ?? a.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                    {formatDate(a.date)}
                  </p>
                  <h3 className="text-xl font-semibold leading-tight tracking-tight">
                    {a.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                    Lees bericht
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[32px] bg-foreground px-8 py-16 text-center text-white sm:rounded-[40px] sm:px-16 sm:py-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              Volg ons
            </p>
            <h2 className="font-display mx-auto mt-5 max-w-3xl text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Liever elke week
              <br />
              <span className="text-[var(--accent)]">een update?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Volg ons op Instagram, Facebook of LinkedIn voor foto's van de
              bouwplaats en nieuws tussen de artikelen door.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.instagram.com/bouwbedrijfhoman/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[60px] items-center gap-2.5 rounded-full bg-white pl-6 pr-2 text-base font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                <InstagramIcon className="h-5 w-5" />
                <span>@bouwbedrijfhoman</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/bouwbedrijf-homan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[60px] items-center gap-2 rounded-full border border-white/20 px-7 text-base font-medium text-white transition-colors hover:bg-white/5"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
