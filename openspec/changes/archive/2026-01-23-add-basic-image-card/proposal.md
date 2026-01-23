# Proposal: Add BasicImageCard Component

Create a new reusable molecule component `BasicImageCard.astro` that renders an image on the left and content (title and text) on the right. This component serves as a horizontal counterpart to `BasicIconCard.astro` and supports both local/remote images and React icons.

## Motivation
The project currently has `BasicIconCard.astro` which is a vertical card with an icon. Several sections of the site require a horizontal layout where an image or icon is paired with a title and description. Providing a standard component for this ensures design consistency and reduces code duplication.

## Scope
- Create `src/components/molecules/BasicImageCard.astro`.
- Implement a responsive horizontal layout (image left, text right).
- Support `title`, `text`, and `image` (src, alt, title) props.
- Ensure compliance with SEO and accessibility standards (semantic HTML).

## Alternatives Considered
- Refactoring `BasicIconCard.astro`: Rejected because it would introduce excessive complexity to a simple vertical component and potentially break existing usage if not handled carefully. A separate horizontal component is cleaner.
- Using `TextCardHalf.astro`: This is an organism-level component designed for larger sections with full-width images, not for smaller list items.
