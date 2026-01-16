# Refactor Pricing Translations

**Goal**: Decouple the pricing card descriptions from the common checklist items in the translation files to allow for page-specific descriptions while maintaining a global checklist source.

## User Review Required
None.

## Proposed Changes

### Translations
#### [MODIFY] [en.json](src/messages/en.json)
-   Remove the checklist bullet points from `global.sections.pricingServices.cards.*.description`.
-   (Verify) `global.ui.pricingCard.features` contains `privateService`, `taxesIncluded`, `service24h` which match the checklist items.

#### [MODIFY] [es.json](src/messages/es.json)
-   Remove the checklist bullet points from `global.sections.pricingServices.cards.*.description`.

### Pages
#### [MODIFY] [transportation-from-cancun-airport-to-playa-del-carmen.astro](src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro)
-   Update `PricingCard` description logic to usage `pages.playaDelCarmen.pricing.cards.${card.key}.description`.
-   Append the global checklist items (`global.ui.pricingCard.features`) to the description before passing to `marked.parse`.

#### [MODIFY] [index.astro](src/pages/[lang]/index.astro)
-   Update `PricingCard` description logic to append the global checklist items (`global.ui.pricingCard.features`) to the description (which comes from `global.sections.pricingServices.cards.${card.key}.description`).

## Verification Plan

### Automated Tests
-   Build the project: `npm run build`.

### Manual Verification
-   Run `npm run dev` and visit:
    -   `/` (Home): Ensure pricing cards show the description AND the checklist.
    -   `/transportation-from-cancun-airport-to-playa-del-carmen`: Ensure pricing cards show the page-specific description AND the checklist.
    -   Switch languages (EN/ES) and verify correct translations for both description and checklist.
