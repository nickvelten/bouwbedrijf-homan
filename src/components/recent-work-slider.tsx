"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import type { projects as allProjects } from "@/data/projects";

type Project = (typeof allProjects)[number];

const categoryLabel: Record<Project["category"], string> = {
  woningbouw: "Woningbouw",
  utiliteit: "Utiliteit",
  beide: "Woningbouw · Utiliteit",
};

// px per second — slow, ambient drift
const AUTO_SCROLL_SPEED = 22;

export function RecentWorkSlider({ projects }: { projects: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const pausedRef = useRef(false);

  // Duplicate children so the RAF-driven scroll can loop seamlessly
  // by wrapping scrollLeft back when it crosses half of scrollWidth.
  const loop = [...projects, ...projects];

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  // Auto-scroll loop
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    let last = performance.now();

    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current) {
        el.scrollLeft += AUTO_SCROLL_SPEED * dt;
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.9;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <div
      onPointerEnter={pause}
      onPointerLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div className="mb-8 flex items-center gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label="Vorige projecten"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-white/30 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="Volgende projecten"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-white/30 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-6 flex snap-x gap-5 overflow-x-auto scroll-smooth px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16"
      >
        {loop.map((p, i) => (
          <Link
            key={`${p.slug}-${i}`}
            href={`/projecten/${p.slug}`}
            data-slide
            aria-hidden={i >= projects.length ? "true" : undefined}
            tabIndex={i >= projects.length ? -1 : undefined}
            className="group relative block shrink-0 basis-[82%] snap-start overflow-hidden rounded-[24px] bg-white/5 sm:basis-[58%] lg:basis-[38%]"
          >
            <div className="relative aspect-[3/2]">
              <Image
                src={p.photos[0]}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 58vw, 82vw"
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
        ))}
      </div>
    </div>
  );
}
