import type { SVGProps } from "react";

type Props = {
  /** On-dark hero variant — switches the outline/bar tint to light */
  onDark?: boolean;
  className?: string;
};

/**
 * Large "beeldmerk" watermark for hero sections — exact replica of the
 * Homan logo glyph: pointy-top/bottom hexagon outline, horizontal bar
 * across the middle, and four brand-red squares in a 2×2 grid.
 *
 * Place inside any hero `<section>` that already has `relative overflow-hidden`.
 * It is absolutely positioned to the right edge and ignores pointer events.
 */
export function HeroBeeldmerk({ onDark = false, className = "" }: Props) {
  const line = onDark ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.10)";
  const squareOpacity = 0.38;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 right-[-20%] z-0 flex items-center justify-end sm:right-[-10%] lg:right-[-3%] ${className}`.trim()}
    >
      <svg
        viewBox="0 0 220 220"
        className="h-[min(120vw,920px)] w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon outline (pointy top & bottom, flat sides) */}
        <polygon
          points="110,8 210,56 210,164 110,212 10,164 10,56"
          fill="none"
          stroke={line}
          strokeWidth="8"
          strokeLinejoin="round"
        />
        {/* Horizontal bar across the equator */}
        <rect x="10" y="102" width="200" height="16" fill={line} />
        {/* Four red squares — top-left, top-right, bottom-left, bottom-right */}
        <g fill="var(--accent)" fillOpacity={squareOpacity}>
          <rect x="50" y="48" width="46" height="46" />
          <rect x="124" y="48" width="46" height="46" />
          <rect x="50" y="126" width="46" height="46" />
          <rect x="124" y="126" width="46" height="46" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Smaller inline glyph version — use wherever a section label currently
 * reads "§ Label". Uses the same geometry and colors as the hero watermark
 * but rendered at text-height so it sits inline with mono-caps.
 */
export function BeeldmerkGlyph({
  className,
  title,
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
      focusable="false"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <polygon
        points="110,8 210,56 210,164 110,212 10,164 10,56"
        fill="none"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinejoin="round"
      />
      <rect x="10" y="102" width="200" height="16" fill="currentColor" />
      <g fill="var(--accent)">
        <rect x="50" y="48" width="46" height="46" />
        <rect x="124" y="48" width="46" height="46" />
        <rect x="50" y="126" width="46" height="46" />
        <rect x="124" y="126" width="46" height="46" />
      </g>
    </svg>
  );
}
