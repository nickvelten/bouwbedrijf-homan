import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectGallery } from "@/components/project-gallery";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project niet gevonden" };

  const description = `${project.title} — gerealiseerd door Bouwbedrijf Homan${
    project.opdrachtgever ? ` in opdracht van ${project.opdrachtgever}` : ""
  }${project.architect ? `, ontworpen door ${project.architect}` : ""}.`;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: `https://www.bouwbedrijfhoman.nl/projecten/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description,
      images: project.photos[0] ? [project.photos[0]] : undefined,
    },
  };
}

const categoryLabel: Record<string, string> = {
  woningbouw: "Woningbouw",
  utiliteit: "Utiliteit",
  beide: "Woningbouw · Utiliteit",
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const sameCategory = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-3 pt-12 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <Link
            href="/projecten"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Alle projecten
          </Link>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
            § {categoryLabel[project.category] ?? project.category}
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.02em]">
            {project.title}
          </h1>

          <dl className="mt-10 grid gap-6 border-t border-foreground/10 pt-10 sm:grid-cols-3">
            {project.opdrachtgever && (
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                  Opdrachtgever
                </dt>
                <dd className="mt-2 text-lg font-semibold tracking-tight">
                  {project.opdrachtgever}
                </dd>
              </div>
            )}
            {project.architect && (
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                  Architect
                </dt>
                <dd className="mt-2 text-lg font-semibold tracking-tight">
                  {project.architect}
                </dd>
              </div>
            )}
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                Galerij
              </dt>
              <dd className="mt-2 text-lg font-semibold tracking-tight">
                {project.photos.length} foto
                {project.photos.length === 1 ? "" : "'s"}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-3 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <ProjectGallery title={project.title} photos={project.photos} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[32px] bg-foreground px-8 py-16 text-white sm:rounded-[40px] sm:px-16 sm:py-24">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              Start een project
            </p>
            <h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Zin om samen iets
              <br />
              <span className="text-[var(--accent)]">moois te bouwen?</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                <span>Plan een gesprek</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
              <a
                href="tel:0547381035"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Of bel 0547 381 035
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MEER PROJECTEN */}
      {sameCategory.length > 0 && (
        <section className="px-3 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                  § Meer werk
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Vergelijkbare projecten
                </h2>
              </div>
              <Link
                href="/projecten"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
              >
                Alle projecten
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {sameCategory.map((p) => (
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
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
          </div>
        </section>
      )}
    </div>
  );
}
