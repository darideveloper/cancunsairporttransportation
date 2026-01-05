# Proposal: Update Transportation Texts

Update the transportation service texts in both English and Spanish to match the provided real-world content. This includes updating service titles, descriptions (with Markdown formatting for lists), prices, and image metadata (alt and title).

## Problem
The current transportation texts are dummy data and do not reflect the actual service offerings, pricing, or descriptions required for the production site. The images also lack descriptive alt and title texts in the localization files.

## Proposed Solution
- Update `src/messages/en.json` with the real English texts:
  - Title: "Our Transportation Services"
  - Subtitle: "List of our transportation services"
  - Services: Luxury ($84.00), Private ($29.99), Group ($84.00).
- Update `src/messages/es.json` with the real Spanish texts:
  - Title: "Nuestros Servicios de Transporte"
  - Subtitle: "Transporte privado"
  - Services: Lujo ($1512.00 MXN), Privado ($539.82 MXN), Grupos ($1512.00 MXN).
- Ensure descriptions use Markdown (`*` for lists) to maintain consistent styling through the `marked` library.
- Keep the numeric price format so the `PricingCard` component can handle currency formatting.
- Update image `alt` and `title` keys in the JSON files to match the provided snippets (e.g., "Private service in Suburban", "Servicio privado en Suburban").

## Impact
- Better SEO through more descriptive image alts and titles.
- Accurate information for users in both supported languages.
- Consistency between the provided design/content and the implementation.
