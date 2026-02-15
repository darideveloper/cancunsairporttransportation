# Refactor TextCardHalf and TextCardSmall into FeatureBanner

## Summary
This proposal aims to consolidate two redundant components, `TextCardHalf.astro` and `TextCardSmall.astro`, into a single, versatile component named `FeatureBanner.astro`. This new component will support different layout modes via a prop, eliminating code duplication while maintaining the existing visual design.

## Motivation
Currently, `TextCardHalf` and `TextCardSmall` share:
- Identical prop interfaces (9 props).
- Identical logic for translation lookup and markdown parsing.
- Identical internal structure (image + text content).

The only difference is the CSS layout:
- `TextCardHalf` uses a CSS Grid layout (`grid-cols-1 md:grid-cols-2`).
- `TextCardSmall` uses a Flexbox layout (`flex-col md:flex-row`).

maintaining two separate files for this minor stylistic difference violates DRY principles and increases the maintenance burden.

## Proposed Solution
Create `src/components/organisms/FeatureBanner.astro` which accepts a new `layout` prop:
- `layout="grid"` (default, replaces `TextCardHalf`)
- `layout="flex"` (replaces `TextCardSmall`)
- `reverse={true/false}` (existing prop, supported in both modes)

This allows us to delete the two old components and standardize usage across the codebase.
