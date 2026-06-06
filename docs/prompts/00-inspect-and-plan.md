# 00 Inspect And Plan

## Purpose

Inspect an existing static website project and produce a practical redesign or improvement plan before implementation begins.

## When To Use It

Use this first, especially when the current site works technically but may have template, design, content, or deployment issues.

## Prompt Text

```txt
You are working inside an existing static website project.

Do not implement yet.

First, inspect the project structure and identify:

1. Which files control the homepage
2. Which files control global layout, header, footer, metadata, and styling
3. Which components appear template-specific and should be replaced or heavily modified
4. Which CSS/theme files define colors, typography, spacing, dark mode, and reusable styles
5. Which pages currently exist
6. What build and validation scripts are available
7. What deployment constraints exist
8. What risks exist before redesigning

Then produce a concise implementation plan:

- Files to create
- Files to edit
- Files to stop using or replace
- Homepage section structure
- Reusable components needed
- Styling/theme strategy
- Dark mode strategy
- Validation commands to run

Do not write code yet. Only inspect and plan.
```

## Expected Output

- Project structure summary.
- Current page/component ownership.
- Risks and constraints.
- Concise implementation plan.
- Clear validation plan.

## Validation Requirements

No code validation is required because no implementation should occur. If commands are run, they should be inspection commands only.
