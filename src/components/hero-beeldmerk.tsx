import type { SVGProps } from "react";

type Props = {
  /** On-dark hero variant — switches the grey tint to a light variant */
  onDark?: boolean;
  className?: string;
};

/**
 * Hero watermark of the Homan beeldmerk — a 1:1 replica of the tall
 * column-glyph from the live site (footerlogo.svg, viewBox 56.6 × 319.5),
 * rendered entirely in a monochrome grey tint.
 *
 * Shape breakdown:
 *  - Central 2×2 grid of four squares (the logo's red squares, here in grey)
 *  - Angled "crown" polygon above the top pair
 *  - Horizontal equator bar between the two rows of squares
 *  - Angled "V" polygon below the bottom pair
 *  - Light "totem" of ghost squares extending 5 rows above and 5 rows
 *    below the core — asymmetric per the original logo
 *
 * Positioning: the watermark is absolutely positioned relative to its
 * nearest `relative overflow-hidden` ancestor and horizontally aligned
 * with the same 1440px content container used across the site, so every
 * hero watermark lands in the exact same spot on every page.
 */
export function HeroBeeldmerk({ onDark = false, className = "" }: Props) {
  // Single grey tint used for the entire beeldmerk (no more brand red) —
  // the core squares are drawn at full strength; the ghost totem at α 0.35.
  const coreTint = onDark ? "rgba(255,255,255,0.10)" : "rgba(24,39,45,0.12)";
  const ghostTint = onDark ? "rgba(255,255,255,0.04)" : "rgba(24,39,45,0.05)";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 ${className}`.trim()}
    >
      <div className="relative mx-auto h-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        <svg
          viewBox="0 0 56.6 319.5"
          preserveAspectRatio="xMaxYMin meet"
          className="absolute right-3 -top-32 h-[min(95vw,820px)] w-auto sm:right-6 sm:-top-40 lg:right-8 lg:-top-48"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ─── GHOST TOTEM (α 0.05) — light-grey blokken boven en onder ─── */}
          <g fill={ghostTint}>
            {/* Left column */}
            <rect x="3.4" y="0" width="20.2" height="16.3" />
            <rect x="3.4" y="25.1" width="20.2" height="16.3" />
            <rect x="3.4" y="50.2" width="20.2" height="16.3" />
            <rect x="3.4" y="75.2" width="20.2" height="16.3" />
            <rect x="3.4" y="100.3" width="20.2" height="16.3" />
            <rect x="3.4" y="202.8" width="20.2" height="16.3" />
            <rect x="3.4" y="253" width="20.2" height="16.3" />
            <rect x="3.4" y="278.1" width="20.2" height="16.3" />
            {/* Right column */}
            <rect x="33.7" y="25.1" width="20.2" height="16.3" />
            <rect x="33.7" y="50.2" width="20.2" height="16.3" />
            <rect x="33.7" y="100.3" width="20.2" height="16.3" />
            <rect x="33.7" y="202.8" width="20.2" height="16.3" />
            <rect x="33.7" y="227.9" width="20.2" height="16.3" />
            <rect x="33.7" y="253" width="20.2" height="16.3" />
            <rect x="33.7" y="278.1" width="20.2" height="16.3" />
            <rect x="33.7" y="303.2" width="20.2" height="16.3" />
          </g>

          {/* ─── CORE BEELDMERK — grey tint ─── */}
          <g fill={coreTint}>
            {/* Crown (angled roof) */}
            <polygon points="0,135.8 0.9,137.4 28.3,123.4 55.7,137.4 56.6,135.8 28.3,121.3" />
            {/* Four squares — 2×2 grid (was red, now grey to match the
                monochrome watermark brief) */}
            <rect x="2.9" y="139.2" width="20.6" height="16.7" />
            <rect x="33" y="139.2" width="20.6" height="16.7" />
            <rect x="2.9" y="164.1" width="20.6" height="16.7" />
            <rect x="33" y="164.1" width="20.6" height="16.7" />
            {/* Horizontal equator bar */}
            <rect x="2.9" y="159.1" width="50.6" height="1.9" />
            {/* Bottom V (angled vent) */}
            <polygon points="28.3,196.6 0.9,182.6 0,184.3 28.3,198.7 56.6,184.3 55.7,182.6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/**
 * Smaller inline glyph variant — same beeldmerk shape at text-height.
 * Kept for callers that still render the full glyph (most now use
 * the dedicated `BrandMark` single-square inline marker instead).
 */
export function BeeldmerkGlyph({
  className,
  title,
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 56.6 80"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
      focusable="false"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g transform="translate(0, -120)">
        <g fill="currentColor">
          <polygon points="0,135.8 0.9,137.4 28.3,123.4 55.7,137.4 56.6,135.8 28.3,121.3" />
          <rect x="2.9" y="159.1" width="50.6" height="1.9" />
          <polygon points="28.3,196.6 0.9,182.6 0,184.3 28.3,198.7 56.6,184.3 55.7,182.6" />
        </g>
        <g fill="var(--accent)">
          <rect x="2.9" y="139.2" width="20.6" height="16.7" />
          <rect x="33" y="139.2" width="20.6" height="16.7" />
          <rect x="2.9" y="164.1" width="20.6" height="16.7" />
          <rect x="33" y="164.1" width="20.6" height="16.7" />
        </g>
      </g>
    </svg>
  );
}
