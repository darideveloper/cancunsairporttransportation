# Proposal: Update Playa del Carmen FAQs

## Problem
The current FAQ section for the Playa del Carmen page is minimal and lacks the detailed information provided in the latest marketing content.

## Solution
Update the translation files (`en.json` and `es.json`) with the complete set of FAQs for the Playa del Carmen page, following the existing dynamic structure used by the `FaqSection` component.

## Scope
- `src/messages/en.json`: Update `pages.playaDelCarmen.faq.items`.
- `src/messages/es.json`: Update `pages.playaDelCarmen.faq.items`.
- Review `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro` to ensure it correctly renders the new items (it should, as it uses `FaqSection`).

## Proposed Changes
### Translations
- Replace the 3 current FAQs with the 9 new FAQs provided by the user in English.
- Replace the 3 current FAQs with the 8 new FAQs provided by the user in Spanish.
  - *Note: The user provided 9 English FAQs and 8 Spanish FAQs. I should verify if one is missing or if it's intentional.*

## Verification Plan
1. Run `npm run dev` and navigate to `/en/transportation-from-cancun-airport-to-playa-del-carmen` and `/es/transportacion-cancun-a-playa-del-carmen`.
2. Manually verify that all 9 (EN) / 8 (ES) FAQs are visible and correctly formatted.
3. Validate with `openspec validate update-pdc-faqs --strict`.
