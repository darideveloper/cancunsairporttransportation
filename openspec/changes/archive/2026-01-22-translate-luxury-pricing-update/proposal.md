# Proposal: Update Luxury Page Pricing Translations

## Problem
The pricing section on the luxury transportation page (`/luxury-transportation-cancun`) contains outdated titles and does not match the desired service offering structure shown in the provided HTML. Specifically, it should show "Private Transportation", "Taxi Service", and "Group Transportation" as alternative options to the luxury service.

## Solution
Update `src/messages/en.json` and `src/messages/es.json` to reflect the correct titles, prices, and descriptions for the pricing cards on the luxury page.

## Proposed Changes
- Update `pages.luxury.pricing.title` and `subtitle`.
- Update `pages.luxury.pricing.cards.luxury` to represent "Private Transportation".
- Update `pages.luxury.pricing.cards.private` to represent "Taxi Service".
- Update `pages.luxury.pricing.cards.group` to represent "Group Transportation".
- Ensure consistency between English and Spanish translations.
