# Proposal: Enhance SEO Metadata

## Why
Recent analysis against `docs/seo.md` revealed gaps in the current SEO implementation:
1.  Social images (`og:image`) incorrectly default to the generic logo for destination pages.
2.  JSON-LD schemas are uniformly set to `LocalBusiness` instead of using more specific types like `TouristDestination` or `Service`.
3.  Keywords are missing from the translation files (`src/messages`), limiting SEO metadata richness.

Addressing these will align the project with documented best practices and improve search engine understanding and social media presentation.

## What Changes

### Translation Files
- Updated `src/messages/en.json` and `src/messages/es.json` to include keyword fields for all pages (contact, privacy, private, taxi, luxury, group, destinations, playa, akumal, tulum, merida).

### Page Components
- Updated destination pages (Tulum, Akumal, Playa, Merida) to pass `jsonType="TouristDestination"` and page-specific `ogImage` to `PageSEO`.
- Updated service pages (Taxi, Private, Luxury, Group) to pass `jsonType="Service"` and page-specific `ogImage` to `PageSEO`.

### Schema Logic
- Refactored `BaseSEO.astro` to conditionally construct JSON-LD schemas based on `jsonType`:
  - `LocalBusiness`: Includes all business properties (contact, openingHours, priceRange, sameAs)
  - `TouristDestination`: Excludes business properties, includes `touristType` and `containedInPlace`
  - `Service`: Includes `provider`, `serviceType`, and `areaServed`
- Updated `PageSEO.astro` to accept and forward `jsonType` and `ogImage` props.

## Success Criteria
-   Destination pages (e.g., Tulum, Akumal) render unique `og:image` tags pointing to their respective banner images. ✅
-   Service pages (e.g., Luxury, Group) output `Service` JSON-LD schemas. ✅
-   Destination pages output `TouristDestination` JSON-LD schemas. ✅
-   All pages render populated `<meta name="keywords">` tags based on locale. ✅
