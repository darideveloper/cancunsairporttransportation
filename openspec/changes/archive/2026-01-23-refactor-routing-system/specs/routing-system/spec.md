# Routing System Spec Delta

## MODIFIED Requirements

### Requirement: Route Map Configuration
- The routing configuration MUST be stored in a centralized `src/lib/i18n/routes.ts` file.
- The configuration MUST be an object where keys are `pageKeys` and values are objects containing `en` and `es` paths.
- The configuration MUST no longer be stored in `src/messages/en.json` or `src/messages/es.json`.
#### Scenario: Contact page definition
- The `contact` page MUST be defined in `routes.ts` with both its English and Spanish URL paths.

### Requirement: Legacy Link Redirection
- The legacy redirects (e.g. `/en/` -> `/`) MUST be generated dynamically in `astro.config.ts` by importing the configuration from `src/lib/i18n/routes.ts`.
#### Scenario: Adding a new page
- When a new page is added to `routes.ts`, its legacy English redirect (`/en/new-page` -> `/new-page`) MUST automatically work without modifying `astro.config.ts`.

