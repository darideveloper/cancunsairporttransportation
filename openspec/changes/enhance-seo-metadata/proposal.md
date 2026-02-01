# Proposal: Enhance SEO Metadata

## Goal
Improve the SEO and social sharing capabilities of the website by implementing dynamic social images, specific JSON-LD schemas for different page types (Destinations, Services), and populating missing keywords in translation files.

## Motivation
Recent analysis against `docs/seo.md` revealed gaps in the current SEO implementation:
1.  Social images (`og:image`) incorrectly default to the generic logo for destination pages.
2.  JSON-LD schemas are uniformly set to `LocalBusiness` instead of using more specific types like `Place` or `Product`.
3.  Keywords are missing from the translation files (`src/messages`), limiting SEO metadata richness.

Addressing these will align the project with documented best practices and improve search engine understanding and social media presentation.

## Scope
-   **Translation Files**: Update `src/messages/en.json` and `src/messages/es.json` to include keyword fields for all pages.
-   **Page Components**: Update destination and service pages to pass specific `og:image` and `jsonType` props to the `PageSEO` component.
-   **Schema Logic**: Ensure `PageSEO` and `BaseSEO` correctly handle the new schema types.

## Success Criteria
-   Destination pages (e.g., Tulum, Akumal) render unique `og:image` tags pointing to their respective banner images.
-   Service pages (e.g., Luxury, Group) output `Product` or `Service` JSON-LD schemas.
-   Destination pages output `Place` or `TouristDestination` JSON-LD schemas.
-   All pages render populated `<meta name="keywords">` tags based on locale.
