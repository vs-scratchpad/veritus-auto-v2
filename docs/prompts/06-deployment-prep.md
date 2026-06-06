# 06 Deployment Prep

## Purpose

Prepare the static website for deployment after the visual and content work is approved.

## When To Use It

Use after the site feels launch-ready and before pushing to the deployment repository.

## Prompt Text

```txt
Prepare this static website for deployment.

Do not redesign the site.
Do not commit or push anything.

Deployment target:

- Repository: [repo URL]
- Final URL: [deployed URL]
- Static site base path if needed: [base path]

Tasks:

1. Inspect current project configuration.
2. Update site/base deployment values where required.
3. Search for old hardcoded paths and local URLs.
4. Ensure internal links and public assets are deployment-safe.
5. Create or update the deployment workflow if needed.
6. Confirm .gitignore is safe.
7. Run:
   npm run check
   npm run build
8. Fix any failures.

Do not initialize git.
Do not commit.
Do not push.

Final report should include:

- Files changed
- Exact config values set
- Workflow changes
- Hardcoded paths replaced
- Validation results
- Remaining manual steps before push
```

## Expected Output

- Deployment-safe config.
- Workflow file if needed.
- Path audit summary.
- Validation results.
- Manual next steps.

## Validation Requirements

Run:

```bash
npm run check
npm run build
```
