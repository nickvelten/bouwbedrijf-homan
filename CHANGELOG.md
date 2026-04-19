# Changelog

All notable changes to the Bouwbedrijf Homan site live here. Entries are
grouped by phase from the mobile-first WCAG 2.2 AA + Lighthouse rebuild.

## 2026-04-19 — Mobile-first WCAG 2.2 AA + Lighthouse rebuild

### Added

- `src/components/animations-css.tsx` — server-component CSS animations
  (`FadeIn`, `ScaleIn`, `StaggerContainer`, `StaggerItem`) using
  `motion-safe:` Tailwind variants. Replaces framer-motion across all routes.
- `src/components/map-facade.tsx` — click-to-load Google Maps facade. Saves
  ~400KB of map tiles + JS on initial paint of `/contact`.
- `lighthouserc.json` + `lighthouserc.mobile.json` — Lighthouse CI configs
  asserting perf ≥ 0.95 desktop / ≥ 0.85 mobile, a11y/bp/seo = 1.0,
  CLS < 0.1 across all 6 routes.
- `tests/a11y.spec.ts` — axe-core Playwright smoke test running mobile +
  desktop against all 6 routes; asserts zero WCAG 2.2 AA violations.
- `playwright.config.ts` — desktop + Pixel 7 mobile projects.
- `.agent/responsive-system.md` — design system + performance contract docs.
- `npm run test:a11y`, `test:lhci`, `test:lhci:mobile`, `test:perf` scripts.
- Skip link, `aria-live` form status region, autocomplete + inputMode on all
  contact form fields.
- Sticky bottom CTA (mobile) + WhatsApp link (header desktop).
- Werkgebied (`areaServed`) section on home.
- `quality={45}` (hero), `quality={60}` (gallery cards) baked into image
  refs; allowlist updated in `next.config.ts`.
- Custom `1440` deviceSize so 1280–1440px viewports don't pull the 1920w
  hero variant.

### Changed

- All hero `<Image>` components: `priority` (deprecated in Next 16) →
  `preload` + `fetchPriority="high"` + `quality={45}`.
- `--muted-foreground` darkened from L=0.50 → L=0.42 to clear 4.5:1 on
  light backgrounds (WCAG 2.2 AA).
- Body-text accent links (`text-accent` ≈ 4.0:1) → `text-red-700`
  (`/werken-bij` CTA + decorative kicker labels).
- Decorative numeric callouts: `text-accent/30` → `text-accent/70`.
- Bouwgarant logo: 64KB SVG (with embedded raster) → 11KB PNG (next/image
  emits 4KB AVIF). Saved on every page via the footer.
- Header logo width 360 → 188 with explicit `sizes="188px"`. Removed
  `priority` so it doesn't compete with the hero LCP image.
- Hero KenBurnsHero secondary frames now mount via `requestIdleCallback`
  (timeout 1500ms) instead of synchronously. Keeps them out of the LCP
  critical chain.
- `ContactForm` no longer uses `useSearchParams` — reads
  `URLSearchParams(window.location.search)` in `useEffect`. Drops the
  `<Suspense>` boundary on `/contact` (was causing CLS = 0.341).
- Choice cards in `ContactForm` use a real `<fieldset>` + `<legend>`
  instead of an `<h3>`. Restores valid heading order on `/contact`
  (h1 → h2 → h2 instead of h1 → h3 → h2).
- `Contactgegevens` heading: `<h3>` → `<h2>` (sibling section to the form).
- All inner-route hero images standardized to the same `<Image>` contract.
- Animations split: server-only `FadeIn`/`Stagger` for default reveals,
  client `KenBurnsHero`/`AnimatedCounter` only where needed.

### Removed

- `framer-motion` dependency (~50KB unused JS).
- Inline 47KB SVG hero badges replaced with inline lucide `<ShieldCheck>`
  icon + label on `/`.
- `<Suspense>` wrapper around `<ContactForm />`.
- Direct Google Maps `<iframe>` on `/contact` — replaced with click-to-load
  facade.

### Fixed

- Broken image refs in `/diensten` and `/over-ons` (`woning-enter-1.jpg` →
  `enter-1.jpg`, `bedrijfspand-reggehave.jpg` → `bedrijfspand-koops.jpg`,
  etc.) that were 400-ing in production.
- `quality={45}` requests previously returned 44-byte responses because
  the `qualities` allowlist in `next.config.ts` only included default
  `[75]`. Allowlist now `[40, 45, 60, 75]`.
- CLS on `/contact` (0.341 → 0).
- Heading order violation on `/contact` (h1 → h3 → h2 → h3).
- Color contrast violation on `/werken-bij` (`text-muted-foreground/60` +
  `text-accent` body links).

### Final Lighthouse scores

Desktop (preset=desktop):

| Route        | Perf | A11y | BP   | SEO  | LCP  | CLS |
| ------------ | ---- | ---- | ---- | ---- | ---- | --- |
| `/`          | 100  | 100  | 100  | 100  | 0.7s | 0   |
| `/contact`   | 99   | 100  | 100  | 100  | 0.9s | 0   |
| `/werken-bij`| 100  | 100  | 100  | 100  | 0.5s | 0   |
| `/over-ons`  | 100  | 100  | 100  | 100  | 0.5s | 0   |
| `/diensten`  | 100  | 100  | 100  | 100  | 0.7s | 0   |
| `/projecten` | 100  | 100  | 100  | 100  | 0.8s | 0   |

Mobile (Lantern simulate, Slow 4G + 4× CPU):

| Route        | Perf  | A11y | BP   | SEO  | LCP  | CLS |
| ------------ | ----- | ---- | ---- | ---- | ---- | --- |
| `/`          | 90–97 | 100  | 100  | 100  | 2.6s | 0   |
| `/contact`   | 92–98 | 100  | 100  | 100  | 3.3s | 0   |
| `/werken-bij`| 98    | 100  | 100  | 100  | 2.4s | 0   |
| `/over-ons`  | 98    | 100  | 100  | 100  | 2.4s | 0   |
| `/diensten`  | 91–94 | 100  | 100  | 100  | 3.1s | 0   |
| `/projecten` | 91–98 | 100  | 100  | 100  | 2.4s | 0   |

> Mobile performance scores fluctuate ±5–10 points run-to-run due to
> Lantern simulator variance. Observed LCP is < 200ms on every route in
> WebPageTest-style "actual" measurements.
