"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialsSlider({ items }: { items: Testimonial[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

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

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.9;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-8 flex items-center gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label="Vorige quotes"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-background text-foreground transition-all hover:border-foreground/30 hover:bg-foreground/5 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="Volgende quotes"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-background text-foreground transition-all hover:border-foreground/30 hover:bg-foreground/5 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-3 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-3 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        {items.map((t, i) => (
          <figure
            key={t.author}
            data-slide
            className={`relative flex shrink-0 basis-[85%] snap-start flex-col justify-between rounded-[28px] border p-8 sm:basis-[60%] sm:p-10 lg:basis-[38%] ${
              i === 0
                ? "border-white/10 bg-foreground text-white"
                : "border-foreground/10 bg-white"
            }`}
          >
            <Quote
              className={`h-8 w-8 ${
                i === 0 ? "text-[var(--accent)]" : "text-foreground/20"
              }`}
              aria-hidden="true"
            />
            <blockquote
              className={`mt-6 text-base leading-relaxed ${
                i === 0 ? "text-white/90" : "text-foreground/80"
              }`}
            >
              &ldquo;{t.quote.length > 260 ? `${t.quote.slice(0, 260).trim()}…` : t.quote}&rdquo;
            </blockquote>
            <figcaption
              className={`mt-8 border-t pt-6 ${
                i === 0 ? "border-white/10" : "border-foreground/10"
              }`}
            >
              <p
                className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                  i === 0 ? "text-white/50" : "text-foreground/50"
                }`}
              >
                {t.role ?? "Opdrachtgever"}
              </p>
              <p
                className={`mt-2 text-lg font-semibold tracking-tight ${
                  i === 0 ? "text-white" : "text-foreground"
                }`}
              >
                {t.author}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
