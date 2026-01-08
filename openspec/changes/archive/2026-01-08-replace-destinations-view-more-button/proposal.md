# Proposal: Use ButtonCta for Destinations View More Link

**Change ID**: `replace-destinations-view-more-button`

## Summary
Replace the hardcoded `<a>` tag in the Destinations section of `src/pages/[lang]/index.astro` with the `ButtonCta` component, using the `blue` variant to match the design requirements.

## Motivation
- **Consistency**: Use the standard `ButtonCta` component instead of inline styles.
- **Maintainability**: Centralize button styling logic.
- **Requirement**: User specifically requested the `blue` variant.

## Impact
- **Modified**: `src/pages/[lang]/index.astro`
- **Visual**: The button will change appearance to match the `ButtonCta` blue variant style.

## Plan
1.  Import `ButtonCta` in `src/pages/[lang]/index.astro`.
2.  Replace existing `<a>` tag with `<ButtonCta variant="blue" ...>`.
