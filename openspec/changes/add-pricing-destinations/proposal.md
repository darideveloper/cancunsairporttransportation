# Add Pricing Destinations Section

## Goal
Add a new "Destinations" pricing section to the homepage (`src/pages/[lang]/index.astro`) following the existing design patterns but with specific content for popular destinations (Tulum, Playa del Carmen, Cancun Hotel Zone).

## Context
The user wants to display a list of popular destinations with pricing and descriptions, similar to the existing "Pricing transportation" section. The content is specific to the homepage but the design structure should be reusable. The section will be placed after the current "Pricing transportation" block (specifically "at the end of the button" which implies after the CTA of the previous section or strictly after the section).

## Implementation Strategy
-   Create a new `<section>` in `index.astro`.
-   Reuse the `PricingCard` component if compatible with the requested HTML structure, or create a matching structure using Tailwind CSS and semantic HTML.
-   **Hybrid Data Strategy**:
    -   **Static Data**: Define an array in `index.astro` containing invariant data like `id`, `image`, and `destinationName` (if used as a key).
    -   **Dynamic Data**: Use the project's translation system (`t()`) for localized fields: `title`, `description`, `priceLabel`, `priceValue`, and `ctaText`.
    -   This ensures images and structural keys are reused while text content adapts to the selected language (`/es` or `/en`).
-   Ensure the section is fully responsive and accessible (ARIA labels, semantic tags).
