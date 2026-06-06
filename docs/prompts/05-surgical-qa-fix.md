# 05 Surgical QA Fix

## Purpose

Fix one specific visual, copy, spacing, or alignment issue without causing unrelated changes.

## When To Use It

Use late in the project when screenshots reveal a precise issue.

## Prompt Text

```txt
Fix only the issue described below.

Do not redesign the section.
Do not alter unrelated files.
Do not change copy, layout, or components outside the affected area unless required to fix this exact issue.

Issue:
[describe the issue clearly]

Screenshot/context:
[paste screenshot or describe viewport/page]

Expected result:
[describe what should look correct after the fix]

After the change:

- Run the smallest relevant validation command.
- If source code changed in a way that could affect the build, run npm run check.
- Report exactly what changed.
```

## Expected Output

- Narrow fix.
- Exact files changed.
- Validation result.
- No unrelated redesign.

## Validation Requirements

Use the smallest appropriate validation. For layout/CSS changes, run:

```bash
npm run check
```

Run `npm run build` if routing, assets, config, or source structure changed.
