import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import { services, getService, projectsForService } from "@/data/services";
import { BrandMark } from "@/components/brand-mark";
import { HeroBeeldmerk } from "@/components/hero-beeldmerk";

type Params = Promise<{ dienst: string }>;

export function generateStaticParams() {
  return services.map((s) => ({ dienst: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { dienst } = await params;
  const service = getService(dienst);
  if (!service) return { title: "Dienst niet gevonden" };

  const title = `${service.title} in Twente — Bouwbedrijf Homan`;
  const description = `${service.title}: ${service.description}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.bouwbedrijfhoman.nl/diensten/${service.id}`,
    },
    openGraph: { title, description, images: [service.image] },
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { dienst } = await params;
  const service = getService(dienst);
  if (!service) notFound();

  const related = projectsForService(service.id).slice(0, 6);
  const others = services.filter((s) => s.id !== service.id);

  const BASE = "https://www.bouwbedrijfhoman.nl";
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Diensten", item: `${BASE}/diensten` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${BASE}/diensten/${service.id}` },
    ],
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* HERO */}
      <section className="relative overflow-hidden px-3 pt-12 sm:px-6 sm:pt-20">
        <HeroBeeldmerk />
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Alle diensten
          </Link>
          <p className="mt-8 flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            <BrandMark className="h-2.5 w-3 text-foreground" />
            {service.tag} · Diensten
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.02em]">
            {service.title}
          </h1>
          <p className="mt-6 text-lg font-medium text-foreground/60">
            {service.subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            {service.description}
          </p>
        </div>
      </section>

      {/* IMAGE + FEATURES */}
      <section className="px-3 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] sm:rounded-[36px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={70}
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:pt-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
                <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
                Wat we doen
              </p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground py-2.5 pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <span>Vrijblijvende offerte</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {related.length > 0 && (
        <section className="px-3 pt-24 sm:px-6 sm:pt-32">
          <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] inline-flex items-center gap-1.5">
                  <BrandMark className="h-2.5 w-3 text-foreground" />
                  Portfolio
                </p>
                <h2 className="font-display mt-3 text-4xl leading-tight tracking-tight sm:text-5xl">
                  {service.title} in de praktijk
                </h2>
              </div>
              <Link
                href="/projecten"
                className="group hidden shrink-0 items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5 sm:inline-flex"
              >
                Alle projecten
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
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
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OTHER SERVICES */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
            <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
            Andere diensten
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.id}
                href={`/diensten/${s.id}`}
                className="group flex items-center justify-between gap-4 rounded-[24px] border border-foreground/10 bg-muted p-6 transition-colors hover:border-foreground/25 hover:bg-foreground/5"
              >
                <span className="text-xl font-semibold tracking-tight">
                  {s.title}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[32px] bg-foreground px-8 py-20 text-center text-white sm:rounded-[40px] sm:px-16 sm:py-28">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
              Plan een gesprek
            </p>
            <h2 className="font-display mx-auto mt-6 max-w-3xl text-4xl leading-[1.02] tracking-tight sm:text-6xl">
              Aan de slag met
              <br />
              <span className="text-[var(--accent)]">
                {service.title.toLowerCase()}?
              </span>
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
