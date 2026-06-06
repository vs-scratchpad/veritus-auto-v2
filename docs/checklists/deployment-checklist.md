# Deployment Checklist

Use this after visual approval and before pushing to the deployment repository.

## Before Push

- Change into the app directory: `cd veritus-auto`.
- Run `npm run check`.
- Run `npm run build`.
- Confirm the project has the correct `site` value.
- Confirm the project has the correct `base` value, if required.
- Confirm any separate site config matches the same deployment values.
- Search for old base paths.
- Search for local URLs such as `localhost:4321` and `127.0.0.1:4321`.
- Confirm public assets are base-safe.
- Confirm internal links are base-safe.
- Confirm `robots.txt` and sitemap point to the correct deployed URL.
- Confirm `.gitignore` ignores build output and local files.
- Confirm the deployment workflow exists.
- Do not commit `dist/` unless the deployment strategy explicitly requires it.

## After Deployment

- Open the deployed URL.
- Test navigation.
- Test direct page refresh on inner routes.
- Test dark mode.
- Test mobile.
- Inspect key images.
- Confirm no obvious broken assets.
- Confirm no old deployment path appears in page source.
- Confirm stakeholders know which content is still placeholder.
