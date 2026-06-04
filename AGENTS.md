# Veritus Automation Agent Instructions

# AGENTS.md — Veritus Automation AstroWind Project

## Project Context

This repository is an AstroWind-based static marketing website for Veritus Automation.

Veritus Automation is a demo AI automation company focused on AI agents, workflow automation, document processing, internal knowledge assistants, sales/support automation, and business process automation.

This is not an industrial automation site.

Do not position the site around PLC/SCADA, factory control systems, electrical panels, robotics hardware, or manufacturing-only automation.

## Primary Objective

Customize AstroWind into a polished, minimal, airy, Apple-like AI automation company website.

Use the project brief at:

docs/veritus-project-brief.md

Also use the consolidated project context at:

docs/project-context.md

Read both files before making implementation decisions.

## Working Rules

- Work in small, reviewable steps.
- Prefer editing existing AstroWind components/pages before creating unnecessary new abstractions.
- Keep the site polished and content-rich, but avoid visual clutter.
- Do not strip the site down to an empty landing page.
- Preserve useful AstroWind structure where it supports the project.
- Remove or rewrite AstroWind demo content from public-facing primary pages.
- Do not introduce paid themes or paid dependencies.
- Do not add backend requirements.
- Do not add analytics.
- Do not copy text, logos, screenshots, images, diagrams, pricing, testimonials, customer names, or case studies from competitor/reference websites.
- Do not crawl, scrape, or fetch competitor websites.
- Preserve noindex/nofollow behavior; GitHub Pages is public hosting and noindex/nofollow is not privacy.
- Use only original Veritus content based on the project brief.

## Required Commands

Run these after meaningful changes:

```bash
npm run build
```

For local development:

```bash
npm run dev
```

For production preview:

```bash
npm run preview
```

Before declaring completion, confirm that `npm run build` passes.

**Stack:** Astro v6 | Tailwind CSS v4 | TypeScript 5.9 | MDX | Sharp

## Quick Reference

| Command           | Purpose                             |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start dev server at localhost:4321  |
| `npm run build`   | Production build to `./dist/`       |
| `npm run preview` | Preview production build locally    |
| `npm run check`   | Run astro check + ESLint + Prettier |
| `npm run fix`     | Auto-fix ESLint + Prettier issues   |

**Node.js requirement:** >= 22.12.0

## Architecture

### Directory Structure

```
src/
  assets/styles/tailwind.css   # Tailwind v4 config (themes, utilities, plugins)
  components/
    common/        # Shared: Image, Metadata, Analytics, ToggleTheme
    ui/            # Primitives: Button, Headline, WidgetWrapper, ItemGrid
    widgets/       # Page sections: Hero, Features, Pricing, Header, Footer
    blog/          # Blog: SinglePost, List, Pagination, Tags
    CustomStyles.astro  # CSS variables for colors and fonts
  content.config.ts    # Content Collections schema (Astro v6 location)
  data/post/           # Blog posts (.md, .mdx)
  layouts/             # Layout.astro, PageLayout.astro, MarkdownLayout.astro
  pages/               # File-based routing
  utils/               # blog.ts, images.ts, permalinks.ts, frontmatter.ts
  config.yaml          # Site configuration (loaded as virtual module)
  navigation.ts        # Navigation structure
  types.d.ts           # TypeScript type definitions
vendor/integration/    # Custom Astro integration for config loading
```

### Path Aliases

Use `~/` to import from `src/`:

```typescript
import Image from '~/components/common/Image.astro';
import { SITE } from 'astrowind:config';
```

### Configuration System

Site config lives in `src/config.yaml` and is loaded as a Vite virtual module `astrowind:config` by the custom integration in `vendor/integration/`. Exports: `SITE`, `I18N`, `METADATA`, `APP_BLOG`, `UI`, `ANALYTICS`.

## Tailwind CSS v4

Configuration is CSS-first in `src/assets/styles/tailwind.css`:

- **Theme tokens:** `@theme { --color-primary: var(--aw-color-primary); ... }`
- **Custom utilities:** `@utility bg-page { ... }`
- **Dark mode:** Class-based via `@variant dark (&:where(.dark, .dark *))`
- **Plugins:** `@plugin "@tailwindcss/typography"`
- **Custom variant:** `@custom-variant intersect (&:not([no-intersect]))`

CSS variables for colors/fonts are defined in `src/components/CustomStyles.astro` with light/dark theme variants.

The Vite plugin `@tailwindcss/vite` is configured in `astro.config.ts` (not as an Astro integration).

### Class Merging

Components use `twMerge` from `tailwind-merge` v3 for conditional class composition.

## Content Collections

Defined in `src/content.config.ts` using the Astro v6 Content Layer API with `glob()` loader. Posts are in `src/data/post/` as `.md` or `.mdx` files.

Post frontmatter: `title` (required), `publishDate`, `updateDate`, `draft`, `excerpt`, `image`, `category`, `tags`, `author`, `metadata`.

## Component Patterns

- Props extend interfaces from `~/types`
- Use `class:list` for conditional classes
- Use `twMerge()` when accepting className overrides
- Use named slots for layout composition
- Widget components accept standardized props (see `~/types`)

## Image Handling

`src/components/common/Image.astro` supports:

- Local images via `astro:assets` (optimized by Sharp)
- Remote images via Unpic CDN
- Allowed domains (for providers Unpic can't detect, processed by Sharp): `cdn.pixabay.com`

Hero images use `loading="eager"` and `fetchpriority="high"`.

## Verification Checklist

After changes, always verify:

1. `npm run build` succeeds
2. `npm run check` passes (astro check + ESLint + Prettier)
3. Visual check in browser: homepage, blog, dark mode, mobile menu
