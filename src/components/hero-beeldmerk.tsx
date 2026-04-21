import type { SVGProps } from "react";

type Props = {
  /** On-dark hero variant — switches the outline/bar tint to light */
  onDark?: boolean;
  className?: string;
};

/**
 * Hero-size watermark of the Homan beeldmerk — a 1:1 replica of the
 * tall column-glyph from the live site (footerlogo.svg, viewBox 56.6 × 319.5).
 *
 * Shape breakdown:
 *  - Central 2×2 grid of four brand-red squares
 *  - Angled "crown" polygon above the top pair
 *  - Horizontal bar between the two rows of red squares
 *  - Angled "V" polygon below the bottom pair
 *  - Light-grey (α 0.1) "totem" of ghost squares extending 5 rows above
 *    and 5 rows below the red core — asymmetric per the original logo
 *
 * Place inside any hero `<section>` that already has `relative overflow-hidden`.
 * It is absolutely positioned to the right edge and ignores pointer events.
 */
export function HeroBeeldmerk({ onDark = false, className = "" }: Props) {
  const mark = onDark ? "#FFFFFF" : "#18272d";
  const ghostOpacity = 0.1;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 right-[-25%] z-0 flex items-center justify-end sm:right-[-12%] lg:right-[-4%] ${className}`.trim()}
    >
      <svg
        viewBox="0 0 56.6 319.5"
        className="h-[min(140vw,1080px)] w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ───────────────────── GHOST SQUARES (α 0.1) ─────────────────────
            Replicates the light-grey "totem" column above and below the red
            core. Positions lifted directly from the original logo SVG. */}
        <g fill={mark} fillOpacity={ghostOpacity}>
          {/* Left column — ghosts above core */}
          <rect x="3.4" y="0" width="20.2" height="16.3" />
          <rect x="3.4" y="25.1" width="20.2" height="16.3" />
          <rect x="3.4" y="50.2" width="20.2" height="16.3" />
          <rect x="3.4" y="75.2" width="20.2" height="16.3" />
          <rect x="3.4" y="100.3" width="20.2" height="16.3" />
          {/* Left column — ghosts below core */}
          <rect x="3.4" y="202.8" width="20.2" height="16.3" />
          <rect x="3.4" y="253" width="20.2" height="16.3" />
          <rect x="3.4" y="278.1" width="20.2" height="16.3" />
          {/* Right column — ghosts above core */}
          <rect x="33.7" y="25.1" width="20.2" height="16.3" />
          <rect x="33.7" y="50.2" width="20.2" height="16.3" />
          <rect x="33.7" y="100.3" width="20.2" height="16.3" />
          {/* Right column — ghosts below core */}
          <rect x="33.7" y="202.8" width="20.2" height="16.3" />
          <rect x="33.7" y="227.9" width="20.2" height="16.3" />
          <rect x="33.7" y="253" width="20.2" height="16.3" />
          <rect x="33.7" y="278.1" width="20.2" height="16.3" />
          <rect x="33.7" y="303.2" width="20.2" height="16.3" />
        </g>

        {/* ───────────────────── CORE BEELDMERK ──────────────────────── */}
        <g fill={mark}>
          {/* Top crown (angled roof) */}
          <polygon points="0,135.8 0.9,137.4 28.3,123.4 55.7,137.4 56.6,135.8 28.3,121.3" />
          {/* Horizontal equator bar */}
          <rect x="2.9" y="159.1" width="50.6" height="1.9" />
          {/* Bottom V (angled vent) */}
          <polygon points="28.3,196.6 0.9,182.6 0,184.3 28.3,198.7 56.6,184.3 55.7,182.6" />
        </g>

        {/* Four red squares — brand accent, 2×2 grid */}
        <g fill="var(--accent)">
          <rect x="2.9" y="139.2" width="20.6" height="16.7" />
          <rect x="33" y="139.2" width="20.6" height="16.7" />
          <rect x="2.9" y="164.1" width="20.6" height="16.7" />
          <rect x="33" y="164.1" width="20.6" height="16.7" />
        </g>
      </svg>
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
