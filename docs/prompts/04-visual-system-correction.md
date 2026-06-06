# 04 Visual System Correction

## Purpose

Correct weak visual patterns after the site has a direction but still feels inconsistent, diagram-heavy, dull, or misaligned.

## When To Use It

Use when the site needs visual discipline rather than more sections.

## Prompt Text

```txt
Do not redesign the site from scratch.
Do not add more sections just to fill space.

Correct the visual system so the website feels premium, calm, sharp, and launch-ready.

Focus on:

- White-first page surfaces
- Cleaner section rhythm
- Better split-section alignment
- Removing or replacing weak diagrams
- Improving image/visual quality
- Reducing repetitive card patterns
- Fixing awkward spacing
- Fixing overflow and responsive issues
- Improving tools/logo strips if present
- Keeping dark mode simple and legible

Keep:

- Existing approved direction
- Existing framework
- Existing navigation labels unless clearly broken
- Existing static site/deployment constraints
- Existing contact form

Avoid:

- Generic stock photos
- Random AI art
- Decorative diagrams that do not clarify content
- Excessive grey backgrounds
- Noisy animations
- Fake claims

Run responsive visual QA at desktop, laptop, tablet, and mobile widths.

After implementation, run:
npm run check
npm run build

Fix any failures.
```

## Expected Output

- Visual system corrections.
- Removed or rebuilt weak components.
- Responsive fixes.
- Changed file summary.
- Validation results.
- Remaining risks.

## Validation Requirements

Run:

```bash
npm run check
npm run build
```

Also inspect key pages visually across common viewport sizes.
