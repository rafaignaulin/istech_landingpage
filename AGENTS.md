# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, Antigravity, Codex) when working with code in this repository.

## Project Overview

Landing page for ISTech, a data platform and AI engineering firm founded by Rafael Ignaulin (Founder and Principal). Copy sells the company's fixed-scope packages, never Rafael as a seat; no client names anywhere. Built with Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS. Deployed on Vercel at istechdata.com (istech.ignaulin.com redirects). Part of the ignaulin.com ecosystem alongside blog.ignaulin.com (blog) and rafa.ignaulin.com (portfolio).

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
- `app/api/contact/route.ts` — contact form POST endpoint (validates name/email/message, sends via Resend to contact@istechdata.com)

### Theming

Dark/light mode via `lib/theme-provider.tsx` + `lib/locale-provider.tsx` (i18n support). Blocking inline script in layout sets theme from `localStorage` before paint. CSS variables in `globals.css`.

### SEO

- **Metadata API** — title, description, keywords, OG/Twitter cards (`summary_large_image`, image from `app/opengraph-image.tsx` + `app/twitter-image.tsx`), canonical URL, googleBot directives
- **JSON-LD** — Organization schema with founder Person (Founder and Principal), contactPoint, areaServed (`US`, `BR`), and `hasOfferCatalog` with the 5 fixed-scope packages A to E (audit, serving layer, agent pilot, pipeline sprint, retainer)
- **`app/sitemap.ts`** — single-page sitemap (homepage only, no fragment URLs)
- **Analytics** — Cloudflare Web Analytics beacon at the end of `<body>` in `app/layout.tsx` (token for the istechdata.com zone; cookieless, no consent banner). Verify SEO with `~/www/sites/seo-check.mjs` and `lighthouse-check.sh`.
- **`app/robots.ts`** — allow all, disallow `/api/`, sitemap URL
- **Security headers** in `next.config.mjs` — HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy

When adding new SEO features, maintain consistency with ignaulin-blog and portfolio-website.

### Components

Components live in `components/` — `Navbar` and `Footer` are loaded from layout. Section components are rendered by `app/page.tsx`.

### Path aliases

`@/*` maps to the project root (e.g. `@/lib/theme-provider`, `@/components/Navbar`).
