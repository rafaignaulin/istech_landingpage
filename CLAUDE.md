# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for isTech, a B2B data engineering consultancy founded by Rafael Ignaulin. Built with Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS. Deployed on Vercel at istech.ignaulin.com. Part of the ignaulin.com ecosystem alongside blog.ignaulin.com (blog) and rafa.ignaulin.com (portfolio).

## Commands

- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — run ESLint (`next/core-web-vitals` config)

There is no test suite configured.

## Architecture

### App structure

- `app/layout.tsx` — root layout with Inter font via `next/font/google`, site-wide metadata, Organization JSON-LD with service catalog, theme initialization script
- `app/page.tsx` — single-page landing page (sections rendered by components)
- `app/not-found.tsx` — custom 404 page
- `app/api/contact/route.ts` — contact form POST endpoint (validates name/email/message, email sending not yet integrated — marked with TODO)

### Theming

Dark/light mode via `lib/theme-provider.tsx` + `lib/locale-provider.tsx` (i18n support). Blocking inline script in layout sets theme from `localStorage` before paint. CSS variables in `globals.css`.

### SEO

- **Metadata API** — title, description, keywords, OG/Twitter cards (summary, not summary_large_image), canonical URL, googleBot directives
- **JSON-LD** — Organization schema with founder Person, contactPoint, areaServed (`US`, `AU`, `NZ`, `EU`), and `hasOfferCatalog` with 4 service offerings (Data Platform Architecture, Cloud & Infrastructure, AI & LLM Integration, Enterprise Consulting)
- **`app/sitemap.ts`** — single-page sitemap (homepage only, no fragment URLs)
- **`app/robots.ts`** — allow all, disallow `/api/`, sitemap URL
- **Security headers** in `next.config.mjs` — HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy

When adding new SEO features, maintain consistency with ignaulin-blog and portfolio-website.

### Components

Components live in `components/` — `Navbar` and `Footer` are loaded from layout. Section components are rendered by `app/page.tsx`.

### Path aliases

`@/*` maps to the project root (e.g. `@/lib/theme-provider`, `@/components/Navbar`).
