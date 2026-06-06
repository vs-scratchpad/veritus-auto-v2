# Veritus Design Baseline

## Purpose

This document captures the settled Veritus website design baseline so future work does not rediscover the same decisions from scratch. Use it as the reference before changing pages, components, visuals, copy, or deployment-facing content.

## Typography

- Use Geist Sans across the site.
- Keep one consistent sans-serif system for headings, body, nav, buttons, forms, cards, and footer.
- Do not use retro thin uppercase labels.
- Do not use monospaced uppercase public labels.
- Small labels should feel restrained, public-facing, and readable.

## Logo

- Use a text-only `Veritus` wordmark.
- The wordmark should be slightly larger and bolder than nav text.
- Do not use the old square `V` icon.
- Do not add a decorative logo mark until a real brand identity is approved.

## Color And Surface System

- White-first visual system.
- Primary page backgrounds should be white or near-white.
- Use subtle neutral contrast only where it helps section rhythm.
- Cards and panels should generally stay white with thin neutral borders.
- Use blue as a restrained accent, not as a loud theme color.
- Avoid grey-on-grey layering that makes the site feel like an admin dashboard.

## Dark Mode

- Keep dark mode simple, legible, and restrained.
- Avoid neon effects and excessive glow.
- Preserve readable text, clear borders, and usable forms.
- Visuals should remain understandable in dark mode.

## Hero Pattern

- First viewport: centered text-only statement.
- Hero content includes eyebrow, headline, subtext, and CTA group.
- Do not force the full workspace visual into the first viewport.
- Next section: deliberate Veritus automation workspace reveal.
- The workspace visual should feel like a real product/control surface, not a generic AI illustration.

## Page Structure

Primary navigation:

- Home
- Solutions
- Process
- Use Cases
- Company
- Contact

Secondary pages may include:

- Campaign pages
- Blog/resources
- Collateral
- Terms
- Privacy
- 404

Each primary page should have a distinct job and rhythm. Avoid making every page the same hero plus card grid.

## CTA Rules

- Keep one primary CTA style.
- Keep one secondary CTA style.
- Primary CTA should point users toward starting a conversation or sharing a workflow.
- Secondary CTA should support exploration, such as solutions or use cases.
- Avoid too many competing CTA styles.
- Any CTA-looking element should have a real destination.

## Card Rules

- Cards should be minimal, readable, and intentional.
- Use consistent padding and hierarchy.
- Use subtle hover lift, border change, or arrow movement.
- Do not make every card feel like the same bordered box.
- Avoid unnecessary inner boxes or decorative lines unless they communicate something useful.
- Card actions should be clear and accessible.

## Motion And Interaction

- Motion should be restrained and professional.
- Use subtle button hover states, card hover states, focus states, and slow strip movement.
- Respect reduced-motion preferences where animation is meaningful.
- Avoid bouncing, spinning, flashy reveal effects, or animation overload.

## Images And Visuals

- Use system/interface visuals that support the AI automation business.
- Prefer product-like workspace UI, operating surfaces, workflow panels, and software/data-layer imagery.
- Do not use generic stock photos of people, offices, robots, AI hands, or cliché futuristic imagery.
- Do not overload pages with diagrams.
- Do not use random visuals only to fill space.
- Images should align with adjacent content and stay sharp at their displayed size.

## Core Components

Core Veritus components live in `src/components/veritus/`:

- `SiteHeader.astro`
- `SiteFooter.astro`
- `AutomationVisual.astro`
- `Button.astro`
- `Section.astro`
- `SectionHeader.astro`
- `ImagePanel.astro`
- `IntegrationStrip.astro`
- `Capabilities.astro`
- `ProcessShift.astro`
- `ProcessSteps.astro`
- `UseCases.astro`
- `ProofMetrics.astro`
- `FinalCta.astro`
- `ContactSection.astro`
- `PageHero.astro`
- `CampaignPage.astro`

Global layout and metadata live in:

- `src/layouts/`
- `src/components/common/`
- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

## Asset Locations

- Main public images: `public/assets/images/`
- Tool and logo SVGs: `public/assets/logos/`
- Favicons: `src/assets/favicons/`
- Default OpenGraph image: `src/assets/images/default.png`

Use base-safe helpers for public assets and internal links when editing source.

## Placeholder Items To Replace

Replace or approve these before public launch:

- Business address and company contact details.
- Social links.
- Proof metrics and evidence claims.
- Case-study language.
- Placeholder services/content details.
- Legal copy if it is not final.
- Contact form handling expectations.
- Any noindex/nofollow launch policy decision.

## Avoid List

- Generic AstroWind-looking final sections.
- Fake trust or client claims.
- Copied reference-site content.
- Random diagrams.
- Random AI images.
- Stock people, offices, robots, or AI hands.
- Overly grey page backgrounds.
- Too many CTA styles.
- Internal labels such as "static build" or "static preview."
- Judging quality only by build success.
