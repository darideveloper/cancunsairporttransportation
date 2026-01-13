# Proposal: Update Playa del Carmen Page Content

## Goal
Update the "Safe Trip Booking", "Pricing", and "Why Choose Us" (to be renamed "How to move") sections on the Playa del Carmen specific destination page (`transportation-from-cancun-airport-to-playa-del-carmen.astro`) to align with the latest provided content and imagery, ensuring localized text for English and Spanish. Additionally, refactor the translation system to separate fixed/repetitive data from page-specific dynamic data.

## Context
The current section uses generic "Safe Trip Booking" text and a possibly incorrect image path. The user has provided specific HTML content for this section for both languages and a specific image path to use.

## Capabilities
- **Content:** Update translations and image reference for the Playa del Carmen page sections (Safe Trip, Pricing, How To Move).
- **Architecture:** Refactor translation JSON structure to support scalable, page-specific content vs. shared component labels.

## Implementation Strategy
1.  **Refactor Translations:** Create a new structure in `en.json` and `es.json`:
    -   `shared.pricingCard`: For repeated labels (e.g., "Price from", "Book now", "Most Popular", bullet points).
    -   `pages.playaDelCarmen.pricing`: For specific section titles, subtitles, and card details (titles, prices, descriptions, image paths/alts).
    -   `pages.playaDelCarmen.howToMove`: For the "How to move to Playa del Carmen" section title and content.
2.  **Update Content:** Populate `pages.playaDelCarmen` with the specific English and Spanish text provided by the user for all sections.
3.  **Update Component:** Modify `transportation-from-cancun-airport-to-playa-del-carmen.astro` to:
    -   Fetch page-specific data from `pages.playaDelCarmen.pricing`.
    -   Use `shared.pricingCard` for static labels.
    -   Render the "Pricing" section using the new data structure.
    -   Refactor "Why Choose Us" section to "How to move", using new content and `destination.webp`.
