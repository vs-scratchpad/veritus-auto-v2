# Veritus Automation Website

This repository contains the static marketing website for **Veritus Automation**, a technology company focused on AI automation systems, custom software projects, and automated pipeline solutions for business teams.

The website source lives inside:

```txt
veritus-auto/
```

The repository root is kept clean for project documentation, deployment configuration, and repository-level files.

## Live Site

Deployed on GitHub Pages:

```txt
https://vs-scratchpad.github.io/veritus-auto-v2/
```

## Repository

```txt
https://github.com/vs-scratchpad/veritus-auto-v2
```

### Root-level files and folders

```txt
README.md   -> project overview and setup guide
docs/       -> process, design, QA, and deployment documentation
.github/    -> GitHub Actions deployment workflow
.gitignore  -> repository ignore rules
LICENSE.md  -> license file
```

### Website app folder

```txt
veritus-auto/
```

This contains the actual Astro website project: source code, pages, components, styles, public assets, Astro config, package files, and build tooling.

## Project Purpose

The project has two purposes:

1. **Website delivery**  
   Provide a public static website for Veritus Automation with a premium, minimal, white-first design direction.

2. **Process baseline**  
   Preserve the repeatable process used to create this kind of website so future static business websites can be produced with less trial-and-error.

## Design Direction

The final design direction is:

- Minimal and white-first
- Calm, professional, and technical
- Inspired by the restraint of Apple, OpenAI, Vercel, Linear, and Stripe
- Text-only `Veritus` wordmark
- Geist Sans typography
- Clear CTAs
- Product/system-style visuals instead of generic stock images
- Custom automation workspace visual
- Reusable Veritus component system
- Static GitHub Pages deployment

## Tech Stack

- Astro 6
- AstroWind-derived project structure
- Tailwind CSS 4
- TypeScript
- MDX / Markdown content
- Geist Sans via `@fontsource-variable/geist`
- GitHub Pages deployment through GitHub Actions

## Main Routes

Primary pages:

```txt
/               -> Home
/capabilities   -> Solutions
/process        -> Process
/examples       -> Use Cases
/about          -> Company
/contact        -> Contact
```

Secondary pages include:

```txt
/collateral
/blog
/campaigns/sales-automation
/campaigns/support-automation
/campaigns/document-processing
/campaigns/ai-agent-readiness
/privacy
/terms
/404
```

## Local Setup

```bash
cd veritus-auto
```

```bash
npm install
```

```bash
npm run dev
```

The local site will usually be available at:

```txt
http://localhost:4321/veritus-auto-v2/
```

If port `4321` is already in use, Astro may choose another port.

---

# Documentation Guide

The `docs/` folder contains both process documentation and technical documentation.

Recommended reading order:

### 1. Start here

```txt
docs/veritus-process-index.md
```

This is the entry point. It explains what the documentation package contains and how to read it.

### 2. Understand the repeatable website process

```txt
docs/veritus-static-website-delivery-pipeline.md
```

This is the main process document. Read this to understand how the Veritus website process can be reused for future premium static business websites.

It explains:

- why the early attempts were trial-and-error
- how references should be studied
- how to define a design direction
- how to structure pages
- how to guide Codex
- how to run visual QA
- how to prepare deployment

### 3. Understand the final design baseline

```txt
docs/veritus-design-baseline.md
```

This captures the settled visual and UI decisions.

Read this before changing:

- typography
- logo
- colors
- hero section
- cards
- CTAs
- visuals
- assets
- dark mode
- core components

### 4. Understand reference websites

```txt
docs/veritus-reference-websites.md
```

This explains which websites influenced the project and how they were used.

References were used for design quality, layout, spacing, typography, and presentation patterns. They were not used for copying content or branding.

### 5. Use the Codex prompt pack

```txt
docs/prompts/
```

This folder contains reusable prompts for future website work:

```txt
00-inspect-and-plan.md
01-design-direction-contract.md
02-first-implementation-pass.md
03-brand-polish-pass.md
04-visual-system-correction.md
05-surgical-qa-fix.md
06-deployment-prep.md
```

These prompts are intended to guide Codex through a controlled website delivery process instead of using vague instructions like “make it look better.”

### 6. Use the checklists before review or deployment

```txt
docs/checklists/
```

Included checklists:

```txt
visual-qa-checklist.md
deployment-checklist.md
handoff-checklist.md
```

Use these before showing the site to stakeholders or deploying meaningful changes.

### 7. Read the engineering appendix only if needed

```txt
docs/veritus-engineering-white-paper.md
```

This is the technical architecture document. It explains how the Astro build, routes, metadata, sitemap, robots file, content, assets, and GitHub Pages deployment work.

Most business or design reviewers do not need to start here.

## Important Project Notes

- The website is static.
- There is no backend database.
- The contact form is currently static-compatible.
- Some business details, address, social links, proof metrics, and service details may be placeholders until approved.
- The site currently uses `noindex/nofollow` behavior to reduce search visibility until indexing is intentionally enabled.
- The Astro app is inside `veritus-auto/`, not the repository root.
- Do not commit `node_modules/`, `dist/`, `.astro/`, or local environment files.

## Useful Commands

Run these from inside the `veritus-auto/` directory:

```bash
cd veritus-auto
```

```bash
npm run dev       # Start local development server
npm run check     # Run Astro, ESLint, and Prettier checks
npm run build     # Build static production output
npm run preview   # Preview production build locally
npm run fix       # Run formatting/lint fixes where configured
```

## Recommended Workflow For Future Changes

1. Read `docs/veritus-process-index.md`.
2. Check `docs/veritus-design-baseline.md` before changing visuals.
3. Use the relevant prompt from `docs/prompts/` if working with Codex.
4. Make source changes inside `veritus-auto/`.
5. Run validation from inside `veritus-auto/`:

```bash
npm run check
```

6. For meaningful source changes, also run:

```bash
npm run build
```

7. Use the visual QA checklist before stakeholder review.
8. Use the deployment checklist before pushing release changes.
9. Push to `main` and confirm GitHub Actions passes.

## Current Status

The Veritus Automation website is deployed and the reusable process documentation has been added to the repository.

The repository has been reorganized so the Astro website project lives in `veritus-auto/`, while the process documentation remains in `docs/` at the repository root.

Future work should focus on replacing placeholder business details, approved content, social links, proof points, legal copy, and any final stakeholder-directed design or content changes.
