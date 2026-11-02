@AGENTS.md

# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Quick Start

```bash
pnpm install
pnpm dev          # http://localhost:3000 (Turbopack)
pnpm build        # production build, every route is static
pnpm lint         # ESLint (flat config)
pnpm typecheck    # tsc --noEmit
pnpm format       # Prettier (+ Tailwind plugin)
```

## Project Overview

**akiMAT** (Akimat Servicios Integrales, S.L., since 2006) is a plumbing,
boiler, aerothermal and air-conditioning company in Mutilva (Navarra), serving
Pamplona and its area. The site is a Spanish-language marketing site: a home
page, one page per service and the legal pages. Design brief: minimalist,
visual (large client photos), little text. Brand: cyan `#0099D6` and ink
`#111016` from the logo; the vans are red (`brand-heat`, used sparingly).

## Tech Stack

- Next.js 16.3 (App Router, Turbopack) · React 19.2 · TypeScript 5.9 (strict)
- Tailwind CSS 4 with tokens in `app/globals.css` (`@theme inline`)
- shadcn/ui `Button` (`components/ui/button.tsx`), HugeIcons (free set)
- `motion` (Reveal wrapper and some React Bits components)
- Fonts via `next/font`: Inter (body, `font-sans`) and Sora (`font-heading`)

## Structure

```
app/
  layout.tsx                 fonts, metadata, LocalBusiness JSON-LD
  page.tsx                   home = composition of sections
  fontaneria/ calderas-de-gas/ aerotermia/ aire-acondicionado/
  aviso-legal/ politica-de-privacidad/ politica-de-cookies/
  icon.svg apple-icon.png favicon.ico sitemap.ts robots.ts not-found.tsx
components/
  nav.tsx                    top bar (white over photos, ink after scroll)
  logo.tsx                   vectorised logo (aki + tagline use currentColor)
  reveal.tsx                 motion whileInView wrapper
  illustrations.tsx          SVG art (AC unit, boiler, faucet) used as fallbacks
  sections/                  home sections, one file each
  landing.tsx                building blocks for the service pages
  legal-page.tsx             layout for the legal pages
  frigorias-calculator.tsx   AC sizing calculator (uses CountUp)
  reactbits/                 components copied from reactbits.dev
lib/
  site.ts                    business data, services, brands, photos, helpers
  utils.ts                   cn()
public/fotos/                client photos (max 2000 px)
public/calderas/, public/marcas/   Sime product renders, brand logos
```

## Conventions

- **Business data lives only in `lib/site.ts`** (phones, WhatsApp, email,
  address, hours, CIF, services, brands, gallery photos). Never hardcode it.
- Copy is Spanish (Spain), short. Avoid unverifiable claims unless the client
  confirms them; "Desde 2006" and the electric fleet come from their own signage.
- Section pattern: uppercase eyebrow in `text-brand-text`, `font-heading` title
  ending in a period, at most one line of intro.
- Layout utility: `container-x` (max-w-7xl + responsive padding).
- Buttons: `default` = black pill, `light` = white (over photos), `secondary` =
  cyan, `outline` = white with border.
- Backgrounds: `bg-white`, `bg-paper-2` (soft gray) and `bg-ink` (dark bands).
- `components/reactbits/` keeps upstream formatting (Prettier ignores it); the
  lint rules `react-hooks/refs`, `react-hooks/exhaustive-deps` and
  `no-explicit-any` are off for that folder only. Mark local changes with an
  `akiMAT:` comment and keep the license header. WebGL components must not call
  `loseContext()` on cleanup (breaks under React Strict Mode).
- The site sets no cookies and embeds no third-party content. Adding analytics
  requires a consent banner and updating `/politica-de-cookies`.
