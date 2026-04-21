"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  title: string;
  photos: string[];
};

export function ProjectGallery({ title, photos }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length,
      ),
    [photos.length],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, prev, next]);

  return (
    <>
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className={`group relative overflow-hidden rounded-[20px] bg-muted ${
              i === 0 ? "md:col-span-2 lg:col-span-3" : ""
            }`}
          >
            <div
              className={`relative ${
                i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={src}
                alt={`${title} – foto ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes={
                  i === 0
                    ? "(min-width: 1024px) 1440px, 100vw"
                    : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                }
                quality={75}
                priority={i === 0}
              />
            </div>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — foto ${openIndex + 1} van ${photos.length}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Sluiten"
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Vorige foto"
            className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Volgende foto"
            className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="pointer-events-none relative z-10 h-full w-full max-w-[1600px]"
          >
            <Image
              src={photos[openIndex]}
              alt={`${title} – foto ${openIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              quality={85}
              priority
            />
          </div>

          <p className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
            {openIndex + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
