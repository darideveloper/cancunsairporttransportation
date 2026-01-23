# Proposal: Upgrade Translation & Routing System

## Summary
Upgrade the project's internationalization system to support "Clean English URLs" (root-level English pages) and "Localized Spanish Slugs" (e.g., `/es/sobre-nosotros` instead of `/es/about-us`).

## Scope
- Modify `en.json` and `es.json` to inclu   de route mapping and update all internal hardcoded links.
- Implement a catch-all router in `src/pages/[...path].astro`.
- Update i18n utilities in `src/lib/i18n/utils.ts`.
- Refactor `BaseSEO.astro` to ensure correct canonical and hreflang tags for localized slugs.
- Update `Header`, `Footer`, and `LangLink` components.
- Implement 301 redirects for legacy `/en/` content to the new root paths.
- Clean up legacy route-based files.

## Rationale
- **SEO**: Localized slugs are better for SEO in target languages.
- **User Experience**: English as the default at the root is cleaner and more standard for international sites.
- **Maintainability**: Centralized routing reduces duplication across language folders.

## Risk Assessment
- **Breaking Links**: Existing `/en/` links will redirect or break. We should consider redirects if possible, though this is a build-time refactor.
- **Route Conflicts**: Need to ensure slugs don't overlap with static assets or other root-level files.
