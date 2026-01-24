# Standardize Legal Pages

## Summary
Refactor the individual `Privacy.astro` and `Terms.astro` components into a single, reusable `LegalPage.astro` component. This component will handle content fetching from the `legal` content collection and rendering using the existing `LegalLayout`.

## Motivation
The current implementation duplicates logic between `Privacy.astro` and `Terms.astro`. As new legal pages might be added in the future, maintaining separate identical components is inefficient. Standardizing this ensures consistent layout and logic across all legal documentation.

## Proposed Changes
1.  Create `src/components/pages/legal/LegalPage.astro`.
2.  Update `src/pages/[...path].astro` to usage `LegalPage` for both privacy and terms routes.
3.  Remove legacy `Privacy.astro` and `Terms.astro` files.
