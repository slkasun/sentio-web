# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static corporate website for **sentioLogic** — a software engineering company. No build tools, frameworks, or package manager. The site is plain HTML/CSS/JS served as static files.

## Architecture

- `index.html` — Single-page site with anchor-linked sections (Home, Services, Industries, About, Mission, Contact)
- `styles.css` — All styles in one file, organized by section with CSS custom properties for theming (see `:root` tokens)
- `form-handler.js` — Contact form logic: client-side validation, reCAPTCHA v3 token fetch, AJAX submission to Formspree
- `favicon/` — Favicon assets in multiple sizes

## Key Integrations

- **Formspree** (`https://formspree.io/f/xreaallb`) — Contact form backend
- **Google reCAPTCHA v3** (site key: `6LcWsJAsAAAAAEDbhLEDGfbNHrCn_fQNSNXaOdDN`) — Spam protection on contact form

## Development

No build step. Open `index.html` in a browser or serve with any static server:

```
python3 -m http.server 8000
```

## CSS Conventions

- Design tokens defined as CSS custom properties in `:root` (colors, typography, spacing, shadows, radii)
- Color palette: navy primary (`--color-primary: #0c2d6b`), blue accent (`--color-accent: #1a6bcc`)
- Mobile navigation uses a CSS-only checkbox toggle pattern (no JS)
- Responsive breakpoints: 1024px (tablet), 768px (tablet portrait), 480px (small mobile)
- `prefers-reduced-motion` media query is respected
