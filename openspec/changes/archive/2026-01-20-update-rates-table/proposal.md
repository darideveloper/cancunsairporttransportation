# Update RatesTable for Page-Specific Data

## Goal
Update `RatesTable.astro` to accept an optional `page` prop, allowing it to display destination data specific to that page while maintaining global table headers.

## Context
Currently, `RatesTable` pulls all its data (headers and destinations) from `global.ratesTable` in the translation files. The "Cancun to Akumal" page (and potentially others) requires a subset or different set of destinations in its rates table, specific to that context.

## Solution
1. Modify `RatesTable.astro` to accept `page?: string` prop.
2. Inside `RatesTable`, use the `page` prop to attempt fetching destinations from `pages.{page}.ratesTable.destinations`.
3. If page-specific destinations are found, use them.
4. If not found (or if `page` is undefined), fallback to `global.ratesTable.destinations`.
5. Always uses `global.ratesTable.headers` for table headers.

## Risks
- Missing keys in `pages.{page}` might return `undefined`, handled by fallback logic.
- Ensure `useTranslations` behaves as expected (returns `undefined` for missing keys or falls back to default lang).
