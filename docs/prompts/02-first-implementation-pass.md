# 02 First Implementation Pass

## Purpose

Implement the first complete version of the redesigned static website using the approved direction contract.

## When To Use It

Use after the design direction, page architecture, and core content model are approved.

## Prompt Text

```txt
Implement the full website improvement pass in one go.

Keep:

- Existing static website framework
- Existing deployment constraints
- Existing noindex/nofollow behavior if present
- Placeholder content where real business details are not approved
- Broad navigation structure unless improvement is clearly needed

Do not:

- Make the site flashy
- Use generic stock photos, robots, happy people, or cliché AI imagery
- Create fake trust, partnership, or client claims
- Leave template-looking sections as the final design
- Expose developer/internal text publicly

Use the approved design direction:
[paste design direction contract]

Implement:

- Homepage structure
- Main pages
- Global layout/header/footer
- Typography system
- CTA/button system
- Card system
- Visual/image system
- Contact section/form
- Dark mode support
- Responsive behavior

After implementation, run:
npm run check
npm run build

Fix any failures.
```

## Expected Output

- Implemented website pass.
- Changed file summary.
- Page/content summary.
- Visual system summary.
- Validation results.
- Remaining risks.

## Validation Requirements

Run:

```bash
npm run check
npm run build
```
