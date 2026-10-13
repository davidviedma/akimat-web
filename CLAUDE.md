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

**akiMAT** (Akimat Servicios Integrales, S.L.) is a plumbing, air-conditioning
and gas-boiler company in Zizur Mayor (Navarra). The site is a Spanish-language
marketing site: a home page, one landing page per service and the legal pages.
It mirrors the stack and look of the Iruman site (dark theme, island nav,
rounded buttons) with akiMAT's branding: cyan `#0099D6` and ink `#111016`.

## Tech Stack

- Next.js 16.3 (App Router, Turbopack) · React 19.2 · TypeScript 5.9 (strict)
- Tailwind CSS 4 with tokens in `app/globals.css` (`@theme inline`)
- shadcn/ui `Button` (`components/ui/button.tsx`), HugeIcons (free set)
- `motion` (needed by some React Bits components)
- Fonts via `next/font`: Inter (body, `font-sans`) and Sora (`font-heading`)

## Structure

```
app/
  layout.tsx                 fonts, metadata, LocalBusiness JSON-LD
  page.tsx                   home = composition of sections + FAQ JSON-LD
  fontaneria/ aire-acondicionado/ calderas-de-gas/   service landings
  aviso-legal/ politica-de-privacidad/ politica-de-cookies/
  icon.svg apple-icon.png favicon.ico sitemap.ts robots.ts not-found.tsx
components/
  nav.tsx                    island navigation (client)
  logo.tsx                   vectorised logo (aki + tagline use currentColor)
  illustrations.tsx          SVG art: FaucetArt, AirConditionerArt, BoilerArt
  sections/                  home sections, one file each
  landing.tsx                building blocks for the service landings
  legal-page.tsx             layout for the legal pages
  frigorias-calculator.tsx   AC sizing calculator (uses CountUp)
  reactbits/                 components copied from reactbits.dev
lib/
  site.ts                    business data, services, service area, helpers
  utils.ts                   cn()
```

## Conventions

- **Business data lives only in `lib/site.ts`** (phones, WhatsApp, address,
  hours, CIF, service list, towns on the map). Never hardcode it elsewhere.
- Copy is Spanish (Spain). Avoid unverifiable claims (response times, years of
  experience, reviews, official brand partnerships) unless the client confirms them.
- Section headings follow the pattern: uppercase cyan eyebrow + `font-heading`
  title with the key words in `text-brand-primary` and a trailing period.
- Buttons: default variant = white, `variant="secondary"` = brand cyan with dark
  text (`brand-primary-foreground`) for contrast.
- Dark backgrounds use the `ink-*` scale (`ink-950` … `ink-600`).
- `components/reactbits/` keeps upstream formatting (Prettier ignores it) and its
  "latest ref" pattern (ESLint `react-hooks/refs` is off for that folder only).
  Mark local changes with an `akiMAT:` comment and keep the license header.
- The site sets no cookies and embeds no third-party content. Adding analytics
  requires a consent banner and updating `/politica-de-cookies`.
