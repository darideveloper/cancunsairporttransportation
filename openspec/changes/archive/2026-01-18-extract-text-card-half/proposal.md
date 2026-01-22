# Extract TextCard Components

## Goal
Extract the repeated "TextCard with Image" patterns into two reusable components:
1. `TextCardHalf`: Side-by-side 50/50 Grid layout.
2. `TextCardSmall`: Flex layout with smaller image (approx 1/3 width).
These components will handle fetching translations dynamically based on the current page and section, reducing boilerplate in page files.

## Review Required
- **Layout Standardization**: The usage in `transportation-from-cancun-airport-to-playa-del-carmen.astro` varies between `grid` and `flex`. The new component will standardize on a `grid` layout (or flexible flex layout) to ensure consistency.
- **Translation Keys**: The component will default to looking up `title` and `description` under `pages.${page}.${section}`. A `contentKey` prop will be provided to handle variations like `content` or `text`.

## Proposed Changes
### src/components/organisms
#### [NEW] TextCardHalf.astro
- Wraps `TextCard`.
- Uses `grid` layout (50/50).
- Accepts `page`, `section`, `image`.
- Fetches translations for `title` and content.

#### [NEW] TextCardSmall.astro
- Wraps `TextCard`.
- Uses `flex` layout.
- Image takes ~1/3 width on large screens.
- Accepts `page`, `section`, `image`.
- Fetches translations for `title` and content.

### src/pages/[lang]
#### [MODIFY] transportation-from-cancun-airport-to-playa-del-carmen.astro
- Replace usage of `TextCard` + `Image` + `div` (50/50) with `<TextCardHalf ... />`.
- Replace usage of `TextCard` + `Image` + `div` (Small Image) with `<TextCardSmall ... />`.

#### [MODIFY] cancun-to-tulum-shuttle.astro
- Replace usage of `TextCard` + `Image` + `div` (50/50) with `<TextCardHalf ... />`.
- Replace usage of `TextCard` + `Image` + `div` (Small Image) with `<TextCardSmall ... />`.

#### [MODIFY] index.astro
- **Safe Trip Section**: Replace the existing `TextCard` grid implementation with `<TextCardHalf />`.
  - *Current*: Uses `global.sections.safeTrip.title` and `.text`.
  - *New*: Pass `baseKey="global.sections.safeTrip"` and `contentKey="text"`.
- **Why Choose Us Section**: Replace the `TextCard` flex implementation with `<TextCardSmall />`.
  - *Current*: Uses `global.sections.whyChooseUs.title` and `.text`.
  - *New*: Pass `baseKey="global.sections.whyChooseUs"` and `contentKey="text"`.

## Detailed Usage & Code Replacements
Refer to `design.md` for the exact code snippets and prop configurations for each page.

## Verification
### Automated Tests
- None (Visual changes).

### Manual Verification
- Verify the "Safe Trip" (Half) and "How to Move" (Small) sections on both pages render correctly.
- Verify translations work for both English and Spanish.
