# Fix Canonical URLs

## Summary
Fix broken canonical URLs by enforcing consistency between translation keys and route keys (DRY Principle), ensuring the `currentPage` identifier correctly resolves both content and routes without additional props or complex logic.

## Why
Currently, irregular naming conventions cause canonical URL resolution to fail. Content keys (e.g., `cancunToAkumalShuttle`) do not match Route keys (e.g., `akumal`), causing `BaseSEO` to fall back to the homepage URL (`/`).
Fixing this by adding more props (`pageKey`) adds unnecessary complexity. The DRY solution is to align the keys.

## What Changes
1. **Refactor Translation Keys**: Rename divergent keys in `en.json` and `es.json` to match their Route keys (e.g., `cancunToAkumalShuttle` -> `akumal`).
2. **Update Page Constants**: Update the `page` constant in affected Astro components to match the normalized Route key.
3. **Spec Update**: Mandate strict alignment between Translation identifiers and Route keys in `base-seo`.

## Impact
- Fixes canonical URLs for Akumal, Tulum, Playa, and Merida.
- Simplifies the codebase (removes "magic strings" like `cancunToAkumalShuttle`).
- No changes required to `BaseSEO` or `PageSEO` logic.
