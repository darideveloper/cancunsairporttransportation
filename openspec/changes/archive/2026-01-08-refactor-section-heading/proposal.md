# Refactor Section Headings

## Goal
Standardize the "Heading + Text" pattern across the application by introducing a reusable `SectionHeading` component. This will reduce code duplication and ensure consistent styling and alignment (left or center) for section headers.

## Context
Currently, `src/pages/[lang]/index.astro` manually implements section headings with inconsistent styling:
- "Pricing transportation" uses a plain `div` wrapper.
- "Destinations" uses a `div` with `text-center` and specific H2 classes.
- Both follow the pattern of an H2 followed by a description paragraph.
- `src/components/molecules/TextCard.astro` implements a similar pattern internally.
- `src/components/organisms/BannerCta.astro` implements this pattern with a dark theme/white text.

## Capabilities
- **Unified Component**: A single `SectionHeading` component that handles title rendering, styling, and description text.
- **Consistent Styling**: Enforce the same base H2 classes (`text-3xl font-bold` or similar) while allowing customization through `class` prop.
- **Flexibility**: Support alignment, text color, and other styles via standard CSS classes (e.g., `text-center`, `text-white`).

## Plan
Refactor the following to use `SectionHeading`:
1. `src/pages/[lang]/index.astro` (Pricing and Destination sections)
2. `src/components/molecules/TextCard.astro`
3. `src/components/organisms/BannerCta.astro`

## Users
- Developers seeking to add new sections with consistent headers.
- End users perceiving a more consistent UI.
