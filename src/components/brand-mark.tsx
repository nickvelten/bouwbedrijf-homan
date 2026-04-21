import type { SVGProps } from "react";

/**
 * Inline section marker — a single solid red square taken from the four
 * squares inside the Homan beeldmerk. Used as the prefix glyph for mono-caps
 * section labels across the site (replacing the previous `§` symbol and the
 * full beeldmerk glyph).
 *
 * The colour comes from the brand accent (var(--accent)). Size and
 * positioning are controlled by the caller via className.
 */
export function BrandMark({
  className,
  title,
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 21 17"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
      focusable="false"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {/* Proportions match the Homan logo's red rectangle: 20.6 × 16.7 */}
      <rect x="0" y="0" width="21" height="17" fill="var(--accent)" />
    </svg>
  );
}
