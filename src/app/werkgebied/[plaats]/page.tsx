import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { places, getPlace, projectsInPlace } from "@/data/places";
import { BrandMark } from "@/components/brand-mark";
import { HeroBeeldmerk } from "@/components/hero-beeldmerk";

type Params = Promise<{ plaats: string }>;

export function generateStaticParams() {
  return places.map((p) => ({ plaats: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { plaats } = await params;
  const place = getPlace(plaats);
  if (!place) return { title: "Plaats niet gevonden" };

  const title = `Aannemer in ${place.name} — Bouwbedrijf Homan`;
  const description = `Bouwbedrijf Homan is uw aannemer in ${place.name}: woningbouw, utiliteitsbouw, verbouw, renovatie en onderhoud. ${place.intro}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.bouwbedrijfhoman.nl/werkgebied/${place.slug}`,
    },
    openGraph: { title, description },
  };
}

export default async function PlacePage({ params }: { params: Params }) {
  const { plaats } = await params;
  const place = getPlace(plaats);
  if (!place) notFound();

  const placeProjects = projectsInPlace(place.name);

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden px-3 pt-12 sm:px-6 sm:pt-20">
        <HeroBeeldmerk />
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <Link
            href="/werkgebied"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Heel ons werkgebied
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
            <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
            Werkgebied
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.02em]">
            Bouwbedrijf in
            <br />
            <span className="text-[var(--accent)]">{place.name}.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            {place.intro} Van eerste schets tot oplevering — woningbouw,
            utiliteit, verbouw en onderhoud in {place.name} en omgeving.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex h-[60px] items-center gap-2 rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              <span>Project in {place.name} starten</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
            <Link
              href="/diensten"
              className="inline-flex h-[60px] items-center gap-2 rounded-full border border-foreground/20 px-7 text-base font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              Bekijk onze diensten
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS IN PLACE */}
      <section className="px-3 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] inline-flex items-center gap-1.5">
            <BrandMark className="h-2.5 w-3 text-foreground" />
            Werk in {place.name}
          </p>
          <h2 className="font-display mt-3 text-4xl leading-tight tracking-tight sm:text-5xl">
            {placeProjects.length > 0
              ? `${placeProjects.length} project${placeProjects.length === 1 ? "" : "en"} in ${place.name}`
              : `Projecten in ${place.name}`}
          </h2>

          {placeProjects.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {placeProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projecten/${p.slug}`}
                  className="group relative block overflow-hidden rounded-[24px] bg-muted"
                >
                  <div className="relative aspect-[16/10]">
                    {p.photos[0] && (
                      <Image
                        src={p.photos[0]}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        quality={70}
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <div className="absolute inset-x-5 bottom-5">
                      <p className="text-lg font-semibold tracking-tight text-white">
                        {p.title}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                        {p.photos.length} foto
                        {p.photos.length === 1 ? "" : "'s"}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[24px] border border-foreground/10 bg-muted p-8 sm:p-12">
              <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
                We hebben nog geen project in {place.name} in ons online
                portfolio staan — maar we werken hier wel degelijk. Vraag
                gerust naar referenties in de buurt.
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex h-[60px] items-center gap-2 rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <span>Neem contact op</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* OTHER PLACES */}
      <section className="px-3 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
            <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
            Ook actief in
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {places
              .filter((p) => p.slug !== place.slug)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/werkgebied/${p.slug}`}
                    className="inline-flex items-center rounded-full border border-foreground/15 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[32px] bg-foreground px-8 py-20 text-center text-white sm:rounded-[40px] sm:px-16 sm:py-28">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
              Start een project
            </p>
            <h2 className="font-display mx-auto mt-6 max-w-3xl text-4xl leading-[1.02] tracking-tight sm:text-6xl">
              Bouwen in {place.name}?
              <br />
              <span className="text-[var(--accent)]">Laten we praten.</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-[60px] items-center gap-2 rounded-full bg-white pl-6 pr-2 text-base font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                <span>Plan een gesprek</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
              <a
                href="tel:0547381035"
                className="inline-flex h-[60px] items-center gap-2 rounded-full border border-white/20 px-7 text-base font-medium text-white transition-colors hover:bg-white/5"
              >
                Of bel 0547 38 10 35
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
