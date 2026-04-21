import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import type { CSSProperties } from "react";
import type { projects as allProjects } from "@/data/projects";

type Project = (typeof allProjects)[number];

const categoryLabel: Record<Project["category"], string> = {
  woningbouw: "Woningbouw",
  utiliteit: "Utiliteit",
  beide: "Woningbouw · Utiliteit",
};

export function RecentWorkSlider({ projects }: { projects: Project[] }) {
  // Duplicate so the -50% marquee translates back to a visually identical start
  const loop = [...projects, ...projects];
  // Duration scales with content: ~9s per unique card for a slow, readable drift
  const duration = `${Math.max(45, projects.length * 9)}s`;

  return (
    <div
      className="marquee-viewport -mx-6 sm:-mx-10 lg:-mx-16"
      style={{ "--marquee-duration": duration } as CSSProperties}
    >
      <ul className="marquee-track px-6 pb-4 sm:px-10 lg:px-16" role="list">
        {loop.map((p, i) => (
          <li
            key={`${p.slug}-${i}`}
            aria-hidden={i >= projects.length ? "true" : undefined}
            className="shrink-0"
          >
            <Link
              href={`/projecten/${p.slug}`}
              tabIndex={i >= projects.length ? -1 : undefined}
              className="group relative block w-[82vw] overflow-hidden rounded-[24px] bg-white/5 sm:w-[58vw] lg:w-[38vw] xl:w-[520px]"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={p.photos[0]}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 38vw, (min-width: 640px) 58vw, 82vw"
                  quality={72}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0" />
                <div className="pointer-events-none absolute inset-x-5 top-5 flex items-start justify-between">
                  <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
                    {categoryLabel[p.category]}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--accent)] shadow-sm transition-transform group-hover:rotate-90"
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                      {p.title}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
                      {p.photos.length} foto{p.photos.length === 1 ? "" : "'s"}
                      {p.architect ? ` · ${p.architect}` : ""}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
