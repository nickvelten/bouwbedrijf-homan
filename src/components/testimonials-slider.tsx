import { Quote } from "lucide-react";
import type { CSSProperties } from "react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialsSlider({ items }: { items: Testimonial[] }) {
  const loop = [...items, ...items];
  const duration = `${Math.max(45, items.length * 9)}s`;

  return (
    <div
      className="marquee-viewport -mx-3 sm:-mx-6 lg:-mx-8"
      style={{ "--marquee-duration": duration } as CSSProperties}
    >
      <ul className="marquee-track pb-4" role="list">
        {loop.map((t, i) => (
          <li
            key={`${t.author}-${i}`}
            aria-hidden={i >= items.length ? "true" : undefined}
            className="shrink-0"
          >
            <figure className="relative flex h-full w-[85vw] flex-col justify-between rounded-[28px] border border-white/10 bg-foreground p-8 text-white sm:w-[60vw] sm:p-10 lg:w-[38vw] xl:w-[520px]">
              <Quote
                className="h-8 w-8 text-[var(--accent)]"
                aria-hidden="true"
              />
              <blockquote className="mt-6 text-base leading-relaxed text-white/90">
                &ldquo;{t.quote.length > 260 ? `${t.quote.slice(0, 260).trim()}…` : t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {t.role ?? "Opdrachtgever"}
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-white">
                  {t.author}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
