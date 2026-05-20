import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { projects } from "@/data/projects";
import { BrandMark } from "@/components/brand-mark";
import { HeroBeeldmerk } from "@/components/hero-beeldmerk";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Bekijk alle gerealiseerde projecten van Bouwbedrijf Homan: woningbouw, utiliteitsbouw, verbouwingen en renovaties in Twente.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/projecten" },
};

const woningbouw = projects.filter(
  (p) => p.category === "woningbouw" || p.category === "beide",
);
const utiliteit = projects.filter(
  (p) => p.category === "utiliteit" || p.category === "beide",
);
// Verbouwingen/renovaties: projects whose title mentions verbouw/renovat.
// Same source data — these are shown as a separate filter view on top of
// woning- and utiliteitsbouw, mirroring how the service is split on the
// diensten page.
const verbouw = projects.filter((p) =>
  /(verbouw|renovat)/i.test(p.title),
);
// Onderhoud: no tagged projects yet — the section renders an empty-state
// CTA card that links to contact so prospects still know this is offered.
const onderhoud: typeof projects = [];

function ProjectCard({
  project,
  categoryLabel,
  onDark = false,
}: {
  project: (typeof projects)[number];
  categoryLabel: string;
  onDark?: boolean;
}) {
  const cover = project.photos[0];
  return (
    <Link
      href={`/projecten/${project.slug}`}
      className={`group relative block overflow-hidden rounded-[24px] ${
        onDark ? "bg-white/5" : "bg-muted"
      }`}
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          quality={70}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        <div className="pointer-events-none absolute inset-x-5 top-5 flex items-start justify-between">
          <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
            {categoryLabel}
          </span>
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--accent)] shadow-sm"
          >
            <Plus className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </div>
        <div className="absolute inset-x-5 bottom-5">
          <p className="text-lg font-semibold tracking-tight text-white">
            {project.title}
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
            {[project.opdrachtgever, project.architect].filter(Boolean).join(" · ")}
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
            {project.photos.length} foto{project.photos.length === 1 ? "" : "'s"}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectenPage() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden px-3 pt-12 sm:px-6 sm:pt-20">
        <HeroBeeldmerk />
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
            <BrandMark className="h-2.5 w-3 text-foreground" />
            Portfolio
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.02em]">
            Een greep uit
            <br />
            <span className="text-[var(--accent)]">ons werk.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Van luxe villa&apos;s tot bedrijfspanden en centrumplannen — elk
            project is anders, maar de aanpak blijft hetzelfde. Vakmanschap,
            heldere communicatie, en oog voor detail.
          </p>
          <div className="mt-10 flex flex-wrap gap-2.5">
            <a
              href="#woningbouw"
              className="inline-flex items-center rounded-full border border-foreground/20 bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/5"
            >
              Woningbouw
            </a>
            <a
              href="#utiliteit"
              className="inline-flex items-center rounded-full border border-foreground/20 bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/5"
            >
              Utiliteitsbouw
            </a>
            <a
              href="#verbouw"
              className="inline-flex items-center rounded-full border border-foreground/20 bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/5"
            >
              Verbouw &amp; renovatie
            </a>
            <a
              href="#onderhoud"
              className="inline-flex items-center rounded-full border border-foreground/20 bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/5"
            >
              Onderhoud
            </a>
          </div>
        </div>
      </section>

      {/* WONINGBOUW */}
      <section className="px-3 pt-16 sm:px-6 sm:pt-24" id="woningbouw">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] inline-flex items-center gap-1.5">
                <BrandMark className="h-2.5 w-3 text-foreground" />
                01
              </p>
              <h2 className="font-display mt-3 text-4xl leading-tight tracking-tight sm:text-5xl">
                Woningbouw
              </h2>
              <p className="mt-3 text-foreground/60">
                {woningbouw.length} gerealiseerde woningen
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {woningbouw.map((p) => (
              <ProjectCard key={p.slug} project={p} categoryLabel="Woningbouw" />
            ))}
          </div>
        </div>
      </section>

      {/* UTILITEITSBOUW */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32" id="utiliteit">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[32px] bg-foreground px-6 py-16 text-white sm:rounded-[40px] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] inline-flex items-center gap-1.5">
                  <BrandMark className="h-2.5 w-3 text-white" />
                  02
                </p>
                <h2 className="font-display mt-3 text-4xl leading-tight tracking-tight sm:text-5xl">
                  Utiliteit
                </h2>
                <p className="mt-3 text-white/60">
                  {utiliteit.length} bedrijfs- en centrumprojecten
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {utiliteit.map((p) => (
                <ProjectCard
                  key={p.slug}
                  project={p}
                  categoryLabel="Utiliteit"
                  onDark
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VERBOUW & RENOVATIE */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32" id="verbouw">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] inline-flex items-center gap-1.5">
                <BrandMark className="h-2.5 w-3 text-foreground" />
                03
              </p>
              <h2 className="font-display mt-3 text-4xl leading-tight tracking-tight sm:text-5xl">
                Verbouw &amp; renovatie
              </h2>
              <p className="mt-3 max-w-xl text-foreground/60">
                {verbouw.length > 0
                  ? `${verbouw.length} verbouw- en renovatieproject${verbouw.length === 1 ? "" : "en"} — van uitbreiding tot volledige metamorfose.`
                  : "Van uitbreiding tot volledige metamorfose — we renoveren bestaande panden met respect voor het origineel."}
              </p>
            </div>
          </div>

          {verbouw.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {verbouw.map((p) => (
                <ProjectCard
                  key={`verbouw-${p.slug}`}
                  project={p}
                  categoryLabel="Verbouw"
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[24px] border border-foreground/10 bg-muted p-8 sm:p-12">
              <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
                We laten binnenkort verbouw- en renovatieprojecten zien.
                Ondertussen: bel of stuur een bericht — we kijken graag
                mee bij uw verbouwplannen.
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

      {/* ONDERHOUD */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32" id="onderhoud">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] inline-flex items-center gap-1.5">
                <BrandMark className="h-2.5 w-3 text-foreground" />
                04
              </p>
              <h2 className="font-display mt-3 text-4xl leading-tight tracking-tight sm:text-5xl">
                Onderhoud
              </h2>
              <p className="mt-3 max-w-xl text-foreground/60">
                Houtrot, voegwerk, schilderwerk, kleine reparaties — we
                houden uw pand in topconditie, ook na oplevering.
              </p>
            </div>
          </div>

          {onderhoud.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {onderhoud.map((p) => (
                <ProjectCard
                  key={`onderhoud-${p.slug}`}
                  project={p}
                  categoryLabel="Onderhoud"
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[24px] border border-foreground/10 bg-muted p-8 sm:p-12">
              <p className="max-w-2xl text-lg leading-relaxed text-foreground/70">
                Onderhoud vindt meestal plaats achter de schermen en komt
                niet altijd in het portfolio. Vraag gerust naar
                referenties — we helpen graag met groot en klein
                onderhoud.
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex h-[60px] items-center gap-2 rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <span>Vraag vrijblijvend aan</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] tracking-tight lg:col-span-8">
              Wordt uw project de volgende?
            </h2>
            <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex h-[60px] items-center gap-2 rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <span>Start uw project</span>
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
