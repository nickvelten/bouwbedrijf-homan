# Responsive System & Performance Contract

This document describes the design system, breakpoints, image strategy, animation
strategy, and accessibility contract for the Bouwbedrijf Homan site. Read this
before changing tokens, hero images, animations, or anything that affects
LCP/CLS/a11y.

## Stack

- **Next.js 16.2.2** (App Router, Turbopack, `experimental.inlineCss`)
- **React 19.2.4**
- **Tailwind v4** with `@theme inline` token block in `src/app/globals.css`
- All pages are statically prerendered (`○ (Static)`)

> The Next 16 docs in `node_modules/next/dist/docs/` are the source of truth for
> framework conventions. `priority` is deprecated → use `preload` +
> `fetchPriority="high"` together. `images.qualities` must whitelist any
> non-default `quality={N}` value.

## Breakpoints

Mobile-first, defined in `src/app/globals.css` (`@theme inline`):

```
sm  600px   large phones / small tablets portrait
md  905px   tablets / small laptops
lg  1240px  desktops
xl  1440px  large desktops
```

These override Tailwind's default ladder. Do not write code against the default
ladder (640/768/1024/1280); always pair `sm:`/`md:`/`lg:`/`xl:` prefixes with
the values above.

## Fluid type & spacing

`--text-fluid-*` and `--spacing-fluid-*` use `clamp(min, midpoint + Nvw, max)`
to scale between 320px and 1440px viewports. Use these for hero copy and
section padding rather than hand-coded breakpoint jumps.

## Color & contrast

All semantic colors are oklch tokens in `:root` of `globals.css`. Notable
contrast tweaks made for WCAG 2.2 AA compliance:

- `--muted-foreground` is darkened from L=0.50 → L=0.42 to clear 4.5:1 on
  `--background` and `--muted`.
- Body-text accent links use `text-red-700` (not `text-accent`, which is
  oklch L=0.52 and lands at ~4.0:1 on white).
- Decorative kicker labels in muted sections use `text-red-700` on
  `--background` (and `text-red-400` on `--primary` dark sections).
- Numeric callouts (e.g. process steps) use `text-accent/70` minimum, not
  `/30` or `/40` (those fail contrast).

## Touch targets

`--tap: 44px` (WCAG 2.5.5 / iOS HIG). Use one of:

- `.tap` utility — applies `min-height` and `min-width`
- `min-h-[var(--tap)]` for inline tap targets
- `.tap-expand` for icon-only buttons that visually appear smaller — adds an
  invisible hit area pseudo-element

## Image strategy

### Hero (LCP element)

Above-the-fold hero images on every route follow this exact contract:

```tsx
<Image
  src="/images/hero/..."
  alt="..."
  fill
  className="object-cover opacity-15"   // dark hero, opacity sufficient
  preload                                // adds <link rel="preload"> in head
  sizes="100vw"
  fetchPriority="high"                   // browser-level priority hint
  quality={45}                           // hero-specific quality
/>
```

`preload` alone does NOT set `fetchPriority` on the `<img>` element — you
must pass it explicitly. Both are required for LCP performance.

### Below-fold images

Use `quality={60}` for project gallery cards and service cards (already in
allowlist). Default `loading="lazy"` is sufficient since Next.js Image
lazy-loads by default unless `preload` is set.

### Map / iframe embeds

Never include the Google Maps embed iframe directly. Use `<MapFacade />`
(`src/components/map-facade.tsx`) — a click-to-load placeholder that saves
~400KB of map tiles + JS on first paint.

### `next.config.ts`

```ts
images: {
  formats: ["image/avif", "image/webp"],
  minimumCacheTTL: 60 * 60 * 24 * 30,
  qualities: [40, 45, 60, 75],
  deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
}
```

The custom `1440` deviceSize prevents 1280–1440px viewports from reaching
for the 1920w bucket, cutting hero bytes by ~25% on common laptop screens.

## Animations

All animations live in two files:

- `src/components/animations-css.tsx` — server components using
  `motion-safe:animate-in` / `motion-safe:fade-in` / `motion-safe:slide-in-from-bottom-3`.
  These are CSS-only and do not require client hydration. Default for all
  page-level fade-in / stagger reveals.
- `src/components/animations.tsx` — client components for interactive
  animations: `AnimatedCounter` (IntersectionObserver + rAF),
  `KenBurnsHero` (CSS keyframe crossfade, secondary frames mounted via
  requestIdleCallback to keep them out of the LCP critical chain).

`framer-motion` is **not** installed. Do not reintroduce it. The `motion-safe:`
variants are how we honor `prefers-reduced-motion` automatically.

For above-the-fold sections, prefer `FadeIn` from `animations-css` (server) over
any client-only animator.

## CLS prevention checklist

CLS = 0 across all routes. To preserve that:

- Every `next/image` uses either `fill` inside an `aspect-[X/Y]` container or
  has explicit `width` + `height`.
- Don't wrap deferred client components in a `<Suspense>` without a fallback
  that reserves the right height. The original contact page used
  `<Suspense>` with no fallback and shipped CLS=0.341 because the form
  popped in post-hydration.
- Don't use `useSearchParams` if `URLSearchParams(window.location.search)`
  inside a `useEffect` will do — `useSearchParams` forces a Suspense
  boundary, which means either CLS or a load-time reservation of
  ~1100px of empty space.

## Accessibility contract

- Every interactive element has a min 44×44px target (or `.tap-expand`
  invisible hit area).
- Form fields use proper `<Label htmlFor>`, `autoComplete`, `inputMode`,
  `aria-required`, and an `aria-live` status region.
- Form choice cards use a real `<fieldset>` + `<legend>` (not a heading)
  so the form's `<h2>` stays at the top of its sequential heading order.
- Skip link (`.skip-link`) targets `<main id="main">`.
- Focus-visible ring is 2px solid `var(--ring)` with 2px offset on every
  focusable element.
- `prefers-reduced-motion` disables all transitions/animations globally
  via the `@media` block in `globals.css`.

## Verification

Two regression suites guard the system:

```bash
# 1. Axe-core a11y smoke (mobile + desktop, all 6 routes, must pass clean)
npm run test:a11y

# 2. Lighthouse CI (asserts perf + a11y + best-practices + seo + CLS)
npm run test:perf      # runs both desktop and mobile configs
```

Lighthouse Lantern's mobile simulator is pessimistic — production-ready apps
typically score 85–98 on mobile due to its bandwidth assumptions, even with
sub-300ms observed LCP. Targets:

| Form factor | perf | a11y | bp | seo | CLS |
| ----------- | ---- | ---- | -- | --- | --- |
| Desktop     | ≥0.95 (most routes 1.00) | 1.00 | 1.00 | 1.00 | < 0.1 |
| Mobile      | ≥0.85 (most routes 0.95+) | 1.00 | 1.00 | 1.00 | < 0.1 |

Don't tighten the mobile perf threshold above 0.85 without first verifying
multiple Lantern runs — single-run variance is typically 5–10 points.

## Files of record

- `src/app/globals.css` — design tokens, breakpoints, base layer
- `src/components/animations-css.tsx` — server animations (default)
- `src/components/animations.tsx` — client animations (KenBurnsHero, counter)
- `src/components/map-facade.tsx` — click-to-load map
- `next.config.ts` — image qualities + deviceSizes + inlineCss
- `lighthouserc.json` / `lighthouserc.mobile.json` — perf assertions
- `tests/a11y.spec.ts` — axe smoke test
