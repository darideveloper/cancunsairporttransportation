# Refactor Pricing Cards to Hybrid Global/Local Model

## Goal
Update the pricing component (and translations) to source **images** and **prices** from the global translation scope, while keeping **titles** and **descriptions** page-specific. This ensures consistent pricing and imagery across the site while allowing for context-specific marketing copy.

## Requirements
- **Global Data**: The `price`, `bestSeller` status, `imageAlt`, and `imageTitle` for pricing cards (Luxury, Private, Group) must be sourced from `global.sections.pricingServices.cards`.
- **Page Data**: The `title` and `description` for these cards must be sourced from the specific page's translation (e.g., `pages.playaDelCarmen.pricing.cards`).
- **Standardized Component**: A reusable logic (likely in a `PricingSection` or updated usage) should handle this merging of data.

## Design
- **Translation Schema**:
    - `global`: Defines the "product" (Price + Visuals).
    - `pages`: Defines the "presentation" (Title + Copy).
- **Component**:
    - The component will map over a fixed list of card keys (private, luxury, group).
    - It will pull `t('global...price')` and `t('pages...title')`.
    - Images will be mapped internally in the component based on the key (since binary imports can't bein JSON), but their metadata (alt/title) will be global.

## Verification
- **Visual**: Verify Home (`/`) and Playa del Carmen (`/transportation...`) pages.
- **Data**: Ensure price matches the global value (Note: This change implies prices *become* uniform. If different prices were intended, this refactor enforces uniformity).
