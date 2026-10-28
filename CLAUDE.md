# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for **sentioLogic**, a software engineering company, plus the product site for its restaurant POS, **Sentio POS**. Built with **Astro** as a fully static, pre-rendered site (no client framework; only small vanilla scripts).

## Architecture

- `src/pages/` — one file per URL (`trailingSlash: "always"`):
  - `index.astro` — company home (Hero, Sentio POS teaser, Services, Industries, About, Approach, Contact CTA)
  - `contact/index.astro` — enquiry form (Formspree + reCAPTCHA). `?topic=pos-demo` pre-selects the Sentio POS demo topic
  - `pos/index.astro`, `pos/terminal/index.astro`, `pos/admin/index.astro` — Sentio POS module
  - `404.astro`
- `src/layouts/` — `BaseLayout` (document head, SEO, fonts) → `SiteLayout` (company shell) / `PosLayout` (POS brandbar, product nav, dialogs)
- `src/components/` — `Seo.astro` (title/description/canonical/OG/JSON-LD), company header/footer, `pos/*` (header, footer, `Screen` lightbox figure, `DemoLink`, `DemoCta`, dialogs)
- `src/data/schema.ts` — shared JSON-LD (Organization, SoftwareApplication, breadcrumbs)
- `src/scripts/form-handler.js` — contact form: validation, reCAPTCHA v3 token, AJAX POST to Formspree, topic pre-select
- `src/scripts/product.js` — POS mobile menu, screenshot lightbox, demo dialog (demo CTAs are real links to `/contact/?topic=pos-demo`, so they work without JS)
- `src/styles/` — `tokens.css` (fonts + `:root` tokens), `site.css` (company), `product.css` (POS), `cta.css` (shared button typography). `company.css` / `pos.css` are the layout entry files; they import `cta.css` **last** on purpose so its `.btn` rules override the page styles
- `public/` — static files (copied to `dist/` as-is): `assets/` (logos, WebP product screenshots, subset WOFF2 fonts, OG image), `favicon/`, `robots.txt`, `site.webmanifest`
- Brand masters (official files): `public/assets/logo-primary.svg`, `public/assets/logo-primary.png` (2025×500), `public/favicon/favicon.svg` (= `public/assets/symbol.svg`). The favicon PNGs/`.ico` and `og-image.png` are derived from them with sharp

## Key Integrations

- **Formspree** (`https://formspree.io/f/xreaallb`) — contact form backend
- **Google reCAPTCHA v3** (site key: `6LcWsJAsAAAAAEDbhLEDGfbNHrCn_fQNSNXaOdDN`) — loaded only on `/contact/`. It does not work on localhost (domain not registered)

## SEO

- Each page passes `title`, `description` and `jsonLd` to its layout. `Seo.astro` derives the canonical URL from `site` in `astro.config.mjs`
- `src/pages/sitemap.xml.ts` builds a flat `/sitemap.xml` from every page in `src/pages` (404 excluded); `robots.txt` points to it. New pages are picked up automatically

## Hosting

- Live at **https://sentiologic.site**, served by a **Cloudflare Worker with static assets** (`sentio-website`, Workers Builds), deployed from the `main` branch of https://github.com/slkasun/sentio-web.git
- Workers Builds settings: build command `npm run build`, deploy command `npx wrangler deploy`, root `/`; Node version from `.node-version`
- `wrangler.jsonc` uploads `dist/` as assets (unknown URLs serve `404.html`). `public/_headers` sets long cache headers for `/_astro/*` and fonts

## Development

```
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/
```

## Design Conventions

- Brand tokens in `src/styles/tokens.css`: `--navy #132638`, `--teal #00a99d`, `--deep #00776f`, `--paper #f5f7f4`, `--muted #526473`, `--line #dce5e3`
- Fonts: `Brand` (DejaVu Sans, regular/bold) and `CTA Sans` (buttons/links), self-hosted as Latin-subset WOFF2
- Responsive breakpoints: company 1000px / 740px; POS 1050px / 760px
- Mobile menus use a small JS toggle with `aria-expanded`
- `prefers-reduced-motion` is respected
