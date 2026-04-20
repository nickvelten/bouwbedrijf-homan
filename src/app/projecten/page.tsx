import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { projects } from "@/data/projects";

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
      <section className="px-3 pt-12 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
            § Portfolio — {projects.length} projecten
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.02em]">
            Een greep uit
            <br />
            <span className="text-[var(--accent)]">ons werk.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Van luxe villa's tot bedrijfspanden en centrumplannen — elk
            project is anders, maar de aanpak blijft hetzelfde. Vakmanschap,
            heldere communicatie, en oog voor detail.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            <a
              href="#woningbouw"
              className="inline-flex items-center rounded-full border border-foreground/15 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
            >
              Woningbouw · {woningbouw.length}
            </a>
            <a
              href="#utiliteit"
              className="inline-flex items-center rounded-full border border-foreground/15 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
            >
              Utiliteit · {utiliteit.length}
            </a>
          </div>
        </div>
      </section>

      {/* WONINGBOUW */}
      <section className="px-3 pt-16 sm:px-6 sm:pt-24" id="woningbouw">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                §01
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
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  §02
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
                className="group inline-flex items-center gap-2 rounded-full bg-foreground py-2.5 pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
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
