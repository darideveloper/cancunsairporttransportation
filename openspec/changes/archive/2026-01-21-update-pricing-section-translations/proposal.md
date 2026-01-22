# Proposal: Update Pricing Section Translations

## Description
Update the translations for the Pricing Section in the `private-airport-transfer-cancun` page (and `home` page) to match the provided text.
This includes updating the main title, subtitle, and the content for Luxury, Private, and Group transportation cards in both English and Spanish.
Also updates a global UI string for "taxes included" to match the requested "tasas" terminology in Spanish.

## Motivation
The user has provided verified copy for the pricing section that better reflects the services and pricing structure.

## Proposed Changes
### Spanish (`src/messages/es.json`)
- Update `pages.home.pricing.title` and `subtitle`.
- Update `pages.home.pricing.cards` (luxury, private, group) titles, prices, and descriptions.
- Update `global.ui.pricingCard.features.taxesIncluded` to use "tasas" instead of "impuestos".
- Update `global.sections.pricingServices.cards` (luxury, private, group) alt/titles and ctaText if needed (User provided specific Alt texts).

### English (`src/messages/en.json`)
- Update `pages.home.pricing.title` and `subtitle`.
- Update `pages.home.pricing.cards` (luxury, private, group) titles, prices, and descriptions.
