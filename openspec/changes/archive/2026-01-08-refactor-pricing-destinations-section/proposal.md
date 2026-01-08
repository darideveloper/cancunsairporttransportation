# Refactor Pricing and Destinations Sections

## Goal
Refactor the "Pricing transportation" and "Destinations" sections in `src/pages/[lang]/index.astro` to use a single, reusable `CardGridSection` component. This will apply DRY principles, ensure consistent styling and SEO practices, and simplify future additions of similar sections.

## Problem
Currently, `index.astro` contains two nearly identical sections that iterate over a list of items (`pricingTransportation` and `destinations`) and render a grid of `PricingCard` components.
- Both have a `section` container with a header (`h2`, `p`).
- Both have a `ul` grid.
- Both map over data to render `PricingCard`.
- There is logic duplication regarding translation lookups (`t(...)`) and layout structures.
- Use of `marked.parse` is repeated.

## Solution
Create a new organism component `CardGridSection.astro` that encapsulates this pattern.
It will accept:
- Section Metadata: `id`, `ariaLabelledBy`.
- Content: `title`, `description`.
- Data: `cards` array (containing keys/ids and images).
- Configuration: `translationScope` (base key for card translations), `cardConfig` (props to pass through to `PricingCard`), `gridConfig` (classes for the grid).
- Optional: `viewMore` configuration for the bottom button.

This component will handle:
- Rendering the semantic `section` and headings.
- Iterating over cards.
- Constructing translation keys dynamically: `${translationScope}.${card.key}.title`.
- SEO attributes (ARIA).

## Risks
- **CSS Specificity**: Need to ensure the passed classes or internal styles match the existing specific tweaks (e.g. `items-end` in pricing vs `items-start` default).
- **Image Handling**: "Destinations" uses specific aspect ratios and explicit width/height in some places, while "Pricing" uses standard flow. The component needs to support flexible image styling.
