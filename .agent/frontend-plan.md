# Frontend Rebuild Plan — Checkpoint 0

## Stack snapshot
Next.js 16.2.2 (App Router) · React 19.2.4 · Tailwind v4 · shadcn 4 + base-ui · framer-motion · Geist font · Turbopack dev.

## Baseline Lighthouse

| | Perf | A11y | BP | SEO |
|---|---|---|---|---|
| Desktop | 97 | 100 | 100 | 100 |
| **Mobile** | **74** | **94** | 100 | 100 |
| Mobile LCP | **11.3s** | TBT 120ms | CLS 0 | |

Desktop is essentially there. **Mobile perf is the real gap** — and a single missing `aria-label` on the floating helper drops a11y to 94.

## Top 5 worst baseline audits (mobile)

1. `largest-contentful-paint` — 11.3s (Ken Burns hero, no `priority`/preload)
2. `button-name` — FloatingHelper sticky trigger has no accessible name
3. `mainthread-work-breakdown` + `bootup-time` — framer-motion + base-ui hydration
4. `render-blocking-insight` + `network-dependency-tree-insight` — font + LCP image not preloaded
5. `bf-cache` — page blocked from back/forward cache (likely motion lib listener)

## Numbers

- 6 routes · 13 shadcn primitives · 7 app-level components · ~4,234 LOC
- Current responsive: **mobile-first via Tailwind utilities** (correct foundation)
- No fluid type/spacing tokens · no `@container` · no `prefers-reduced-motion` block

## Proposed approach (5 bullets)

1. **Foundation (Phase 1)** — Add fluid type/spacing tokens, `--tap`, `--measure`, `prefers-reduced-motion` block in `globals.css`. Expose via Tailwind v4 `@theme` so utilities like `text-fluid-xl`, `p-fluid-m` exist. Codify the 600/905/1240/1440 breakpoint ladder in `@theme` to override Tailwind's defaults.
2. **LCP fix first (Phase 2)** — Replace Ken Burns multi-image hero on mobile with single `priority` LCP image + `<link rel="preload">` injected via `next/head` or `metadata.other`. Lazy-mount the cross-fade only after LCP. Defer framer-motion off the critical path. Self-host one Geist weight, preload it, `font-display: swap`.
3. **Mobile-first rebuild (Phase 2)** — Sticky bottom CTA bar (Bel + WhatsApp) replacing FloatingHelper on small screens, header CTA on `md+`. Add `werkgebied` (areaServed) section with city pills + map. Convert Service/Project/Process cards to `@container` so the same component adapts in 4-up grid, 3-up, hero context. Native `<details>`/`<summary>` for FAQ.
4. **A11y pass (Phase 3)** — Fix the FloatingHelper button (`aria-label="Stel een vraag"`). Add skip link, audit focus-visible globally with explicit ring (≥3:1 contrast against bg via `--ring`), enforce 44×44 tap targets via `--tap`, `autocomplete` on contact form, `aria-live` on form status, alt text audit, full keyboard pass.
5. **Verify + guard (Phases 4–5)** — Loop: Lighthouse on each route (mobile + desktop) → fix highest-impact diagnostic → re-run. Stop only at 100/100/100/100 on every route, both profiles. Add `@lhci/cli` config (fail < 95 mobile), `@axe-core/cli` smoke check, `responsive-system.md` docs. Test against `npm run build && npm start` for true production numbers — dev-server distortion accounts for ~10–15 perf points.

## My-suggested fixes folded into rebuild

The earlier "fix alles" list (sticky WhatsApp, werkgebied, JSON-LD, header phone, lazy-load LCP, `prefers-reduced-motion`, FAQ, project detail pages) maps cleanly into Phases 2 + 3:

- ✅ JSON-LD `LocalBusiness`-equivalent (`GeneralContractor`) **already present** in `layout.tsx:68-129` with address, openingHours, areaServed — only needs verification, not creation.
- WhatsApp sticky → Phase 2 step 4 (sticky bottom CTA bar)
- Werkgebied / city pills → Phase 2 step 3 (new `<AreaServed>` component, fed from same coords as JSON-LD)
- Header phone link → Phase 2 step 4
- LCP not lazy → Phase 2 step 2 (single most-impactful Lighthouse fix)
- `prefers-reduced-motion` → Phase 1 token block
- FAQ → Phase 2 (deferred to a "polish" sub-phase if scope creeps)
- Project detail pages (`/projecten/[slug]`) → **out of scope** for this audit; flagged separately because it requires content modeling, not responsive/a11y work.

## Open questions — none blocking

I can determine everything else from the codebase. **Stopping here per the prompt's Checkpoint 0 instruction. Awaiting ack to proceed to Phase 1.**
