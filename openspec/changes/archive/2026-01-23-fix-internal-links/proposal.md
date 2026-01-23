# Fix Internal Links

## Problem
The current internal linking system in `NavLinks.astro` and `MenuBar.astro` uses hardcoded English URLs. This breaks navigation for Spanish users, forcing them back to the English site when clicking menu items or CTA buttons. Additionally, the `contact` page is missing from the centralized route definitions in `en.json` and `es.json`.

## Solution
1.  Add the `contact` route to `src/messages/en.json` and `src/messages/es.json`.
2.  Refactor `NavLinks.astro` to use the `getLocalizedPath` utility instead of hardcoded strings.
3.  Refactor `MenuBar.astro` to use `getLocalizedPath` for the CTA button.
4.  Refactor `Logo.astro` to correctly point to the root `/` for English instead of `/${lang}/` (which results in `/en/`).
5.  Enforce the usage of `getLocalizedPath` for all internal component links.
