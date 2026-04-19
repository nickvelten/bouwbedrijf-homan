# Frontend Inventory — Bouwbedrijf Homan

_Generated 2026-04-19 (Phase 0)_

## Stack

| Concern | Choice | Source |
|---|---|---|
| Framework | **Next.js 16.2.2** (App Router) | `package.json:14` |
| React | **19.2.4** | `package.json:16` |
| Bundler | **Turbopack** (`next dev`) | dev-server log |
| CSS | **Tailwind v4** + `@tailwindcss/postcss` | `package.json:24-26`, `globals.css:1` |
| Component library | **shadcn 4.1.2** + base-ui/react 1.3.0 | `package.json:11,21` |
| Animation | **framer-motion 12.38.0** | `package.json:13` |
| Icons | **lucide-react 1.7.0** | `package.json:14` |
| Theme | `next-themes 0.4.6` | `package.json:15` |
| Font | Geist (`next/font/google`) | `layout.tsx:8` |

No `next.config.ts` options set yet (file is empty). No `tailwind.config.*` — Tailwind v4 uses `@theme inline` block in `globals.css`.

## Routes (6)

| Path | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Hero (Ken Burns), stats, services, process, projects, testimonials, CTA |
| `/diensten` | `src/app/diensten/page.tsx` | Services detail |
| `/projecten` | `src/app/projecten/page.tsx` | Project gallery |
| `/over-ons` | `src/app/over-ons/page.tsx` | About |
| `/werken-bij` | `src/app/werken-bij/page.tsx` | Careers |
| `/contact` | `src/app/contact/page.tsx` | Contact + form |

## Components

**UI primitives (shadcn, 13):** `accordion`, `badge`, `button`, `card`, `dropdown-menu`, `input`, `label`, `navigation-menu`, `select`, `separator`, `sheet`, `skeleton`, `tabs`, `textarea`.

**App-level (7):** `header`, `footer`, `contact-form`, `link-button`, `choice-helper`, `animations` (FadeIn, StaggerContainer, KenBurnsHero, AnimatedCounter), `floating-helper`.

Total source files: 30 · ~4,234 LOC.

## Existing global CSS

- `globals.css` — design tokens via `oklch()`, three custom utilities (`noise-texture`, `angle-top/bottom/both`).
- No `@media` queries in app code (Tailwind handles via `sm:`, `md:`, `lg:` prefixes).
- All `max-width` references are inside Next `<Image sizes="…">` — correct usage.
- `scroll-smooth` on `<html>`.

## SEO + structured data already present

- Full `metadata` export in `layout.tsx:13-58` (title template, OG, Twitter, canonical, robots).
- JSON-LD `GeneralContractor` schema with address, openingHours, areaServed, sameAs (`layout.tsx:68-129`).
- `lang="nl"` set.

## Baseline Lighthouse (running `next dev` on :3004)

> ⚠ Caveat: tested against dev server. Production build will fix `unminified-javascript`, `unused-javascript`, `legacy-javascript-insight`, `valid-source-maps`. The mobile LCP/main-thread numbers will improve too, but **structural issues remain** (LCP image strategy, button accessibility, bf-cache, render-blocking).

| Profile | Perf | A11y | BP | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| **Desktop** | 97 | 100 | 100 | 100 | 1.2s | 0ms | 0 |
| **Mobile**  | **74** | **94** | 100 | 100 | **11.3s** | 120ms | 0 |

### Top 5 worst mobile audits (real fixes needed)

1. **`largest-contentful-paint` (0)** — 11.3s. Hero `KenBurnsHero` cycles 3 large images, none have `priority`/`fetchPriority="high"`/preload. LCP element is likely the H1 text behind the gradient overlay, but the hero image network/decode dominates. **Root cause: no LCP-prioritization strategy.**
2. **`button-name` (0, A11y)** — `FloatingHelper` sticky trigger has no accessible name. Visible only on small screens (passes desktop). Single broken button drops a11y from 100 → 94.
3. **`mainthread-work-breakdown` (0)** & **`bootup-time` (0)** — Heavy framer-motion usage everywhere (FadeIn, Stagger, AnimatedCounter, KenBurns) plus shadcn/base-ui hydration cost. Will partially improve in production but warrants splitting motion to client islands only where needed.
4. **`render-blocking-insight` (50)** & **`network-dependency-tree-insight` (0)** — Critical chain too long. Geist font fetched render-blocking, no `<link rel="preload">` for the LCP image, no critical CSS inlining strategy beyond Next default.
5. **`bf-cache` (0)** — Page can't restore from back/forward cache. Likely a `unload`/`beforeunload` listener (often from third-party or motion library) — needs DevTools BFCache panel to confirm.

### Other notable gaps

- `legacy-javascript-insight (50)` — production-only fix via SWC modern targets.
- `image-delivery-insight (50)` — not all images served as AVIF/WebP, some missing explicit dimensions.
- No `viewport` zoom restrictions but no `theme-color` meta either (PWA polish).
- No `prefers-reduced-motion` handling in `globals.css` despite heavy motion.
- No `:focus-visible` overrides — relies on browser default ring (acceptable but inconsistent across components).
- `outline-ring/50` in `@layer base` applies to **everything**, not just focus — likely overpaints.

## Responsive strategy (current)

**Mobile-first** by default (Tailwind's `sm:`/`md:`/`lg:` are `min-width`). No desktop-first `max-width` CSS. ✅ Foundation is correct; what's missing is:

- No fluid typography (everything is discrete Tailwind sizes like `text-3xl sm:text-4xl lg:text-5xl`).
- No fluid spacing tokens — relies on Tailwind static scale.
- No `@container` queries despite cards/services living in multiple layout contexts.
- No design-token layer for `--tap`, `--measure`, motion easings.
