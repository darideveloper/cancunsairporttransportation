# Proposal: Make FAQ Section Dynamic

Refactor the manual FAQ section in `index.astro` and `transportation-from-cancun-airport-to-playa-del-carmen.astro` into a reusable `FaqSection` component that fetches data dynamically based on a `page` prop.

## Goal
- Standardize the FAQ section across all pages.
- Move page-specific FAQ items and titles to the page translation scope.
- Maintain global text for the FAQ description.
- Align with the patterns established in `PricingSection.astro`.

## Proposed Changes
- Create `src/components/organisms/FaqSection.astro`.
- Update `en.json` and `es.json` with new translation structures.
- Refactor `src/pages/[lang]/index.astro` and `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro`.

## Verification Plan
### Automated Tests
- Run `openspec validate make-faq-section-dynamic --strict`.
- Check for build errors with `npm run build`.

### Manual Verification
- Verify that both Home and Playa del Carmen pages display the FAQ section with correct page-specific content and global description.
