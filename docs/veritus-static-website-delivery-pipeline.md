# Veritus Static Website Delivery Pipeline

## Purpose

This document explains the repeatable process used to turn the Veritus website from a working AstroWind-based site into a more premium static business website. It is written for technical and business stakeholders who want to understand the delivery process, not the low-level Astro build internals.

For detailed build topology, route generation, metadata handling, and deterministic node behavior, use [veritus-engineering-white-paper.md](./veritus-engineering-white-paper.md) as the engineering appendix.

## Executive Summary

The Veritus website became successful when the work moved from open-ended template customization to a staged delivery pipeline: define the business, audit references for presentation patterns, lock the design direction, design the page system, implement with focused Codex prompts, review visually, then prepare deployment. The repeatable lesson is that premium static websites are not created by adding more sections or passing a build check; they are created by making clear design decisions, applying them consistently, and using human review gates before each major stage moves forward.

```mermaid
flowchart LR
  A["Business brief"] --> B["Reference audit"]
  B --> C["Design direction contract"]
  C --> D["Page architecture"]
  D --> E["Content model"]
  E --> F["Component and visual system"]
  F --> G["Codex implementation"]
  G --> H["Visual QA loop"]
  H --> I["Deployment prep"]
  I --> J["Final handoff"]
```

## Why The First Attempts Were Trial-And-Error

The early Veritus website attempts were not wrong because the site failed technically. The site built, deployed, and the pages worked. The problem was that the process was solving the wrong layer of the project.

The original instruction was interpreted as a content and services reference task: look at companies in the AI automation space, understand what they offer, and adapt similar service language for Veritus. The actual expectation was different. The reference websites were meant to teach presentation: layout, visual hierarchy, spacing, navigation, page rhythm, typography, interface quality, CTA behavior, form design, and how a serious technology company presents itself.

That mismatch created several trial-and-error loops:

- The site looked like a customized free template instead of a tailored company website.
- Build success was treated as progress even when the visual standard was still weak.
- Generic AstroWind sections were used as if they were finished design components.
- Content was expanded before the design system was strong enough to carry it.
- Diagrams were added before the visual language was clear, which made some sections feel like filler.
- Images and visuals were judged individually instead of as part of a complete page rhythm.
- The process relied on broad prompts like "make it look better" instead of a design contract.

The main lesson is simple: for a premium launch website, the first deliverable is not content volume or route count. The first deliverable is a clear design direction and a repeatable visual system.

## What The Final Version Taught Us

The successful direction became clear after the work shifted from template customization to brand-system construction.

The final Veritus version works better because it follows a small set of consistent decisions:

- It uses a premium, technical typeface instead of a rounded or generic template font.
- It uses a text-only wordmark instead of a placeholder icon.
- It starts with a calm centered statement instead of trying to fit every visual into the first fold.
- It separates the hero message from the product/system visual reveal.
- It uses white-first surfaces, restrained contrast, and subtle blue accents.
- It avoids generic stock photos, robots, happy-people imagery, and random AI illustrations.
- It uses custom system/interface visuals that feel related to automation work.
- It reduces diagram overload and uses larger, more realistic visual assets where diagrams become weak.
- It keeps CTAs, cards, forms, and sections consistent across pages.
- It treats visual QA as part of the build process, not an optional final glance.

The biggest lesson: a premium static site is built through constraints. Once typography, spacing, color, component behavior, image style, CTA rules, and section rhythm are locked, the site stops feeling like a collection of parts and starts feeling like a company.

## The Repeatable Pipeline

Each stage should produce a concrete artifact before the next stage begins:

- Business brief: audience, offer, positioning, constraints, and claims policy.
- Reference website audit: presentation notes, useful patterns, and anti-patterns to avoid.
- Design direction contract: typography, tone, surface system, image rules, motion rules, and CTA rules.
- Page architecture: page list, purpose of each page, and section order.
- Content model: public-facing labels, placeholder copy rules, and proof/claim boundaries.
- Component and visual system: reusable header, footer, hero, cards, CTAs, visual panels, forms, and section primitives.
- Codex implementation prompts: focused prompts with keep/do-not-change constraints and validation requirements.
- Visual QA loop: screenshots, issue notes, viewport findings, and narrow correction prompts.
- Deployment prep: base-path-safe links, local validation, workflow configuration, and launch checks.
- Final handoff: changed files, remaining placeholders, operating instructions, and risks.

### 1. Business Brief

Start by defining the business clearly before touching design.

The brief should answer:

- What does the company do?
- Who is the buyer or visitor?
- What problem should the website make obvious?
- What action should the visitor take?
- What tone should the company project?
- What content is real, and what must remain placeholder?
- What claims must be avoided?

For Veritus, the business brief became:

Veritus builds AI automation systems, custom software projects, and automated pipeline solutions for business teams. The site should feel like a serious launch website for a premium automation company, even while some content remains placeholder.

### 2. Reference Website Audit

Reference websites should be audited for presentation patterns, not copied content.

Review top-tier sites for:

- Navigation structure.
- Hero composition.
- Typography scale.
- CTA placement and language.
- Section spacing.
- Card hierarchy.
- Forms and contact flows.
- Product visuals.
- Motion restraint.
- Mobile behavior.
- Footer density.
- Page-to-page variety.

For Veritus, the useful inspiration was not "copy Apple" or "copy OpenAI." The useful lesson was restraint: strong typography, clean surfaces, deliberate whitespace, minimal CTAs, and visuals that feel like product or system surfaces.

### 3. Design Direction Contract

Before implementation, write a short design contract. This prevents the project from drifting into random visual experiments.

For Veritus, the contract was:

- Minimal.
- White-first.
- Premium.
- Calm.
- Technical.
- Sharp.
- Serious.
- No flashy animation.
- No generic AI imagery.
- No fake trust claims.
- No template-looking sections.

The contract should also define what the site must not become. For Veritus, it must not become a trendy SaaS template, a diagram-heavy prototype, or a stock-photo agency site.

### 4. Page Architecture

Define the required pages and their role before designing sections.

For Veritus:

- Home: first impression, positioning, system visual, capabilities, process, use cases, proof placeholders, CTA.
- Solutions: what Veritus can build and what clients receive.
- Process: how work moves from discovery to production automation.
- Use Cases: example automation systems, not fake case studies.
- Company: point of view, principles, focus areas, restraint.
- Contact: direct workflow-sharing form and practical next step.

Each page should have a distinct purpose. If every page has the same hero, same card grid, and same CTA rhythm, the site will feel templated even if it looks clean.

### 5. Content Model

Content should support the interface, not overwhelm it.

For early launch websites, use placeholder content only where necessary, but keep it realistic:

- Use concrete business language.
- Mention workflows, handoffs, approvals, queues, dashboards, document processing, CRM updates, human review, audit trails, and system updates.
- Avoid vague AI hype.
- Avoid fake customer claims.
- Avoid internal labels that sound like project notes.

Good public-facing labels:

- Solutions.
- Operating stack.
- How Veritus works.
- What clients receive.
- Use cases.
- Results measurement.
- Contact.

Weak internal labels to avoid:

- Capability detail.
- Delivery surface.
- Operating timeline.
- Case study model.
- Static preview.
- Static build.

### 6. Component And Visual System

Build a small reusable visual system before expanding pages.

The Veritus component system includes:

- Text-only wordmark.
- Minimal sticky header.
- Theme toggle.
- Centered hero.
- Workspace visual reveal.
- Section headers.
- CTA buttons.
- Minimal cards.
- Image panels.
- Logo/tool strip.
- Contact section.
- Footer.

The visual system should define:

- Font family.
- Heading scale.
- Body copy scale.
- CTA style.
- Card padding.
- Card hover behavior.
- Section spacing.
- Border color.
- Accent color.
- Image treatment.
- Dark mode behavior.

For Veritus, the most important visual correction was replacing weak diagrams with stronger system/interface images and a product-like automation workspace component.

### 7. Codex Implementation Prompts

Codex should be given specific implementation contracts, not vague aesthetic wishes.

Useful prompt structure:

```txt
Context:
You are working inside an existing Astro static website for [company].

Goal:
Transform the site into a premium launch website for [business type].

Keep:
[framework, routes, deployment constraints, noindex behavior, existing good direction]

Do not:
[stock photos, fake claims, flashy animation, template sections, random gradients]

Design direction:
[minimal, white-first, premium, calm, technical, etc.]

Required changes:
[specific component/page/style/content changes]

Validation:
Run npm run check and npm run build.

Report:
Files changed, visual changes, content changes, validation results, risks.
```

Codex works best when each pass has a clear acceptance standard. For example:

- "The site should no longer feel like AstroWind."
- "The homepage should feel launch-ready, not like a clean prototype."
- "Do not add more sections; simplify weak visual patterns."
- "Only fix alignment in this section; do not alter anything else."

That kind of prompt prevents unnecessary rewrites and keeps implementation focused.

### 8. Visual QA And Correction Loop

Visual QA is where the Veritus site improved the most.

The correction loop should be:

1. Run the site locally.
2. Inspect desktop, tablet, and mobile.
3. Take screenshots of weak sections.
4. Identify the exact issue: spacing, hierarchy, image size, alignment, overflow, copy, interaction, or visual style.
5. Give Codex a narrow correction prompt.
6. Re-check the same viewport.
7. Repeat until the section feels intentional.

The key is to avoid broad redesign prompts once the direction is working. Late-stage prompts should be surgical:

- "Fix only this alignment."
- "Reduce only this vertical spacing."
- "Replace only this visual."
- "Do not alter anything else."

## Human Review Gates

Human review is required at the points where taste, business accuracy, or launch risk matters more than code completion.

- After the business brief: confirm the company positioning, audience, and claims policy.
- After the reference audit: confirm the selected presentation direction matches stakeholder expectations.
- After the design direction contract: approve typography, tone, visual rules, and what must be avoided.
- After the first implementation pass: review whether the site feels like a real company, not just a working template.
- After visual QA: approve screenshots across desktop, tablet, mobile, and dark mode.
- Before deployment: confirm placeholder content, address, social links, forms, noindex policy, and launch URL.
- Before final public use: replace any fake or placeholder claims with approved business content.

### 9. Deployment Prep

Deployment prep should happen only after the site feels visually acceptable.

For GitHub Pages, confirm:

- `site` uses the GitHub Pages account URL.
- `base` uses the repository path.
- Internal links are base-safe.
- Public assets are base-safe.
- Old local or previous deployment paths are removed.
- The dev toolbar is disabled for visual QA.
- `noindex/nofollow` behavior is preserved if the site is not ready for indexing.
- The GitHub Actions workflow builds from source and deploys to Pages.

For Veritus, the deployment target became:

```txt
https://vs-scratchpad.github.io/veritus-auto-v2/
```

### 10. Final Handoff

The final handoff should include:

- What changed.
- Which pages exist.
- Which content is placeholder.
- Which visuals are custom.
- Which assets are local.
- How to run the site.
- How to deploy the site.
- Remaining risks.
- What should be reviewed by the business owner before public launch.

For engineering-level details, the handoff can reference the white paper appendix instead of repeating build internals.

## Reusable Process Vs Veritus-Specific Choices

The reusable part of this work is the pipeline: brief, reference audit, design contract, page architecture, content model, component system, prompt-driven implementation, visual QA, deployment prep, and handoff. That sequence can be reused for many premium static business websites.

The Veritus-specific part is the brand expression chosen inside that pipeline: AI automation positioning, Geist Sans, text-only Veritus wordmark, white-first surfaces, workspace visual reveal, automation/interface imagery, GitHub Pages defaults, and placeholder business details. Future projects should reuse the process, then replace these brand choices with decisions that fit that company.

## Reusable Veritus Decisions

These decisions can be reused for future premium static business websites, especially technical service companies.

### Typography

Use Geist Sans or a similar premium technical sans-serif. Keep one consistent family across headings, body, nav, buttons, cards, forms, and footer.

Avoid playful rounded fonts, retro thin uppercase labels, and heavy monospace styling for public-facing labels.

### Logo

Use a simple text-only wordmark when the brand identity is not finalized.

This prevents weak placeholder icons from making the site feel unfinished. The wordmark should be slightly larger and bolder than navigation text so it feels deliberate.

### Visual Surface

Use a white-first visual system:

- White base.
- Very light neutral contrast only where useful.
- Thin borders.
- Strong black or near-black headings.
- Muted body text.
- Subtle blue accent.
- Dark sections only for intentional contrast.

### Hero Structure

Use a centered text-only hero for the first viewport, then reveal the system/product visual in the next section.

For Veritus, this solved the problem of trying to fit headline, CTAs, and a large workspace visual into one crowded or awkward fold.

### Motion

Use restrained motion:

- Button hover polish.
- Card lift.
- Subtle border changes.
- Slow logo strip movement.
- Smooth theme toggle.

Avoid bouncing, spinning, excessive fade-up, and animation that becomes the point of the section.

### Visuals

Prefer system/interface visuals over stock photography.

For Veritus, the best visual direction was:

- Automation workspace UI.
- Operating surface images.
- Workflow and data layer images.
- Software/dashboard-like panels.
- Clean AI/system architecture imagery without cliché robots or people.

### CTA, Cards, And Sections

Use a consistent CTA hierarchy:

- Primary CTA for the main business action.
- Secondary CTA for exploration.
- Minimal card actions such as "View solution" or "Explore pattern."

Cards should feel useful, not decorative. They need clear hierarchy, consistent padding, subtle hover states, and working links where they imply action.

### Deployment Defaults

For GitHub Pages static sites:

- Use `output: 'static'`.
- Set `site` to the GitHub Pages account URL.
- Set `base` to the repository name.
- Use a GitHub Actions deployment workflow.
- Keep `dist/`, `.astro/`, `node_modules/`, and local environment files ignored.

## What Should Not Be Repeated

Avoid these patterns in future projects:

- Starting from "make it look good" without a design direction contract.
- Treating reference websites as content sources instead of presentation references.
- Copying content, claims, layouts, or branding from reference sites.
- Using generic AstroWind sections as the final design.
- Adding random diagrams just because the company is technical.
- Adding random AI images just to make the site less text-heavy.
- Using stock photos of people, offices, robots, or artificial AI hands for a serious automation company.
- Letting every page become the same hero plus card grid.
- Judging success only by `npm run build`.
- Ignoring mobile/tablet visual QA.
- Leaving internal-facing copy on public pages.
- Creating fake trust, partnership, or client claims.

## Suggested Codex Prompt Sequence For Future Projects

Use this sequence instead of one large vague prompt.

### Prompt 1: Inspect And Plan

```txt
Inspect the existing static website project. Do not implement yet.

Identify homepage files, layout files, header/footer files, style/theme files, existing pages, build scripts, and deployment constraints.

Then produce a concise redesign plan for a premium static business website.
```

### Prompt 2: Brand And Design Direction

```txt
Create a design direction contract for this website.

The target is minimal, premium, white-first, calm, and credible.
Reference top-tier company websites for presentation patterns only.
Do not copy content.

Define typography, logo treatment, color system, spacing, CTA rules, card rules, image/visual rules, and motion rules.
Do not implement yet.
```

### Prompt 3: First Full Implementation Pass

```txt
Implement the full redesign direction in one pass.

Keep the project static and preserve deployment constraints.
Create the homepage, page structure, reusable components, typography, header, footer, cards, CTAs, contact form, and initial visual system.

Run npm run check and npm run build.
```

### Prompt 4: Brand Polish Pass

```txt
The site is cleaner but still feels like a polished wireframe.

Improve typography, spacing, visual depth, interaction, page variety, card hierarchy, and public-facing copy.
Do not redesign from scratch.
Run validation.
```

### Prompt 5: Visual System Correction

```txt
Do not add more sections.

Correct weak visual patterns, simplify diagrams, restore white-first surfaces, improve responsive behavior, and make the site feel like a premium launch website.
Run validation.
```

### Prompt 6: Image And Visual Asset Pass

```txt
Replace weak diagrams with relevant custom system/interface images.

Do not use generic stock photos, robots, happy people, or cliché AI imagery.
Use local optimized assets.
Apply images where they improve page rhythm.
```

### Prompt 7: Surgical QA Fixes

```txt
Only fix the issue shown in this screenshot.

Do not alter anything else.
The problem is [alignment / spacing / overflow / image sizing / copy / CTA logic].
```

### Prompt 8: Deployment Configuration

```txt
Prepare the static site for GitHub Pages deployment.

Set site and base correctly.
Audit hardcoded paths.
Create the GitHub Actions workflow.
Run npm run check and npm run build.
Do not commit or push.
```

### Prompt 9: Documentation

```txt
Write a concise delivery/process document for stakeholders and a technical appendix for engineers.

Keep process guidance separate from low-level build internals.
```

## Visual QA Checklist

Run this before calling the site launch-ready.

### Global

- Header feels aligned and intentional.
- Logo is clear and not placeholder-like.
- Theme toggle has subtle accessible focus states.
- Navigation labels are public-facing.
- CTA hierarchy is consistent.
- Footer looks intentional and not like a leftover template.
- No developer-facing copy appears publicly.

### Homepage

- First viewport feels complete, not empty or overcrowded.
- Hero headline size is controlled.
- Hero spacing feels intentional.
- Workspace visual reveal appears deliberately after the hero.
- Visuals are sharp at their displayed size.
- Page rhythm alternates text, visuals, cards, and CTAs naturally.

### Pages

- Pages do not all feel identical.
- Each page has a clear job.
- Inner pages have enough substance without becoming bloated.
- Content labels sound public-facing.
- Placeholder content does not create fake claims.

### Cards

- Cards are readable at a glance.
- Card padding is consistent.
- Cards do not all feel like identical boxes.
- Hover states are subtle.
- Any card action that looks clickable actually links somewhere useful.

### Images And Visuals

- Images are relevant to the business.
- No generic office, robot, or fake AI stock imagery is used.
- Images are not reused so often that the site feels repetitive.
- Image heights align with adjacent content in split sections.
- No diagram or visual has overlapping text.
- No visual creates horizontal overflow.

### Responsive

Check at least:

- 390px mobile.
- 768px tablet.
- 1024px laptop.
- 1440px desktop.

Confirm:

- Mobile nav works.
- Hero text fits.
- CTAs stack cleanly.
- Forms are usable.
- Image panels crop intentionally.
- Footer columns stack cleanly.
- Logo/tool strips do not clip awkwardly.
- No horizontal scrolling appears.

### Dark Mode

- Text remains readable.
- Borders remain visible.
- Cards and forms retain hierarchy.
- Images still look appropriate.
- No excessive glow or neon effects appear.

## Deployment Checklist

Before pushing:

- Run `npm run check`.
- Run `npm run build`.
- Confirm `astro.config` has the correct `site`.
- Confirm `astro.config` has the correct `base`.
- Confirm site config, if separate, matches the same deployment values.
- Search for old base paths.
- Search for local URLs such as `localhost:4321` and `127.0.0.1:4321`.
- Confirm public assets are base-safe.
- Confirm internal links are base-safe.
- Confirm `robots.txt` and sitemap point to the correct deployed URL.
- Confirm `.gitignore` ignores build output and local files.
- Confirm GitHub Actions workflow exists.
- Do not commit `dist/`.

After deployment:

- Open the GitHub Pages URL.
- Test navigation.
- Test direct page refresh on inner routes.
- Test dark mode.
- Test mobile.
- Inspect key images.
- Confirm no obvious broken assets.
- Confirm no old deployment path appears in page source.

## Final Takeaway

The Veritus website became successful when the work stopped being "customize a template" and became "define a premium website system, then implement it consistently."

That same process can be reused for future static business websites:

1. Understand the business.
2. Audit references for presentation patterns.
3. Lock the design direction.
4. Define the page architecture.
5. Build a reusable component and visual system.
6. Use Codex with precise implementation prompts.
7. Use screenshots for visual QA.
8. Prepare deployment only after the site feels launch-ready.

The build pipeline matters, but the process pipeline matters more. A static website can pass every technical check and still fail as a business website. The repeatable Veritus process is designed to prevent that.
