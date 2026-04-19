"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduce(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

// Re-exports for legacy imports — server-component versions live in animations-css.tsx.
export { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "./animations-css";

export function AnimatedCounter({
  target,
  suffix = "",
  className = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (reduce) {
      setValue(target);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { rootMargin: "-80px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [target, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}

/**
 * KenBurnsHero
 * – First frame is rendered by next/image with preload + fetchPriority="high".
 * – Cross-fading frames mount only after first paint via requestIdleCallback.
 * – CSS keyframe crossfade — no JS animation library on the critical path.
 * – Respects prefers-reduced-motion (single static image).
 */
export function KenBurnsHero({
  images,
  className = "",
}: {
  images: { src: string; alt: string }[];
  className?: string;
}) {
  const reduce = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || reduce) return;
    const idle =
      "requestIdleCallback" in window
        ? (cb: () => void) => window.requestIdleCallback(cb, { timeout: 1500 })
        : (cb: () => void) => window.setTimeout(cb, 800);
    const id = idle(() => setMounted(true));
    return () => {
      if ("cancelIdleCallback" in window && typeof id === "number") {
        window.cancelIdleCallback(id);
      } else {
        clearTimeout(id as unknown as number);
      }
    };
  }, [images.length, reduce]);

  const first = images[0];
  const cycle = images.length * 6;

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Image
        src={first.src}
        alt={first.alt}
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
        quality={40}
      />

      {mounted && !reduce && images.length > 1 &&
        images.slice(1).map((img, i) => {
          const total = images.length;
          const slot = (i + 1) / total;
          return (
            <div
              key={img.src}
              className="hero-fade absolute inset-0"
              style={
                {
                  animationDuration: `${cycle}s`,
                  animationDelay: `${1.2 + slot * cycle - cycle * 0.02}s`,
                } as React.CSSProperties
              }
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                className="object-cover"
                loading="lazy"
                quality={40}
              />
            </div>
          );
        })}
    </div>
  );
}
