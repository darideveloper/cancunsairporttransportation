# Update Merida Rates

## Summary
Update the rates table content for the Cancun to Merida transportation page, correcting prices and handling the specific service tiers available for this route (Private and Luxury only).

## Motivation
The current rates table relies on global data which may be inaccurate or formatted incorrectly for this specific page. The user provided updated HTML content with specific prices and tiers (excluding Group transportation) that needs to be reflected on the site.

## Proposed Solution
- Update `src/pages/[lang]/transportation-from-cancun-to-merida.astro` to pass the page key to the `RatesTable` component.
- Add page-specific rate data to `src/messages/en.json` and `src/messages/es.json` under `pages.cancunToMerida.ratesTable.destinations`.
- The data will include "Private" and "Luxury" tiers as specified, and omit "Group" to result in empty/hidden columns for that tier (or N/A behavior as existing).
