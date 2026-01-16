# Proposal: Make Transportation Services Dynamic

## Motivation
Currently, the `TransportationServices` component uses hardcoded values from a global translation scope. To improve reusability and allow page-specific content (especially descriptions for different destinations), the component needs to be dynamic, similar to `FaqSection` and `PricingSection`.

## Proposed Solution
- Update `TransportationServices.astro` to accept a `page` prop.
- Use the `page` prop to construct translation keys for section title, description, and item-specific text.
- Merge page-specific text with global titles and icons.

## Impact
- **Translation System**: New keys added to `pages.[page].transportationServices`.
- **Components**: `TransportationServices` signature changes.
- **Pages**: existing pages using `TransportationServices` must pass the `page` prop.
