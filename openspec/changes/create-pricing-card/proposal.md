# Change: Create PricingCard Component

## Why
We need a reusable `PricingCard` component to display product information (tours, services) with consistent styling, "Best Seller" highlighting, and clear pricing, while adhering to SEO and accessibility best practices.

## What Changes
- Create a new `PricingCard` molecule component.
- Implement props for image, title, price, CTA, and layout options (reverse).
- Integrate `ButtonCta` and `react-icons`.

## Impact
- Affected specs: `render-pricing-card` (new capability)
- Affected code: `src/components/molecules/PricingCard.astro`
