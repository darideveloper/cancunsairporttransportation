# routing-system Specification

## Purpose
TBD - created by archiving change upgrade-i18n-routing. Update Purpose after archive.
## Requirements
### Requirement: Clean English URLs
- English pages MUST be served from the root path without a `/en/` prefix.
#### Scenario: Accessing the about page in English
- Given the site is deployed
- When I visit `/about-us`
- Then I see the English "About Us" page

#### Scenario: Accessing the home page in English
- Given the site is deployed
- When I visit `/`
- Then I see the English Home page

### Requirement: Localized Spanish Slugs
- Spanish pages MUST be served from the `/es/` prefix with localized slug names.
#### Scenario: Accessing the about page in Spanish
- Given the site is deployed
- When I visit `/es/sobre-nosotros`
- Then I see the Spanish "About Us" page

#### Scenario: Accessing the home page in Spanish
- Given the site is deployed
- When I visit `/es/`
- Then I see the Spanish Home page

### Requirement: Route Map Configuration
- The routing configuration MUST be stored in a centralized `src/lib/i18n/routes.ts` file.
- The configuration MUST be an object where keys are `pageKeys` and values are objects containing `en` and `es` paths.
- The configuration MUST no longer be stored in `src/messages/en.json` or `src/messages/es.json`.
#### Scenario: Contact page definition
- The `contact` page MUST be defined in `routes.ts` with both its English and Spanish URL paths.

### Requirement: Dynamic Utility Linking
- The `getLocalizedPath(pageKey, targetLang)` utility MUST return the correct URL for any given page and language.
#### Scenario: Components usage
- The `NavLinks`, `MenuBar` and `Logo` components MUST use `getLocalizedPath` to resolve their `href` attributes.
- Hardcoded string paths (e.g. `href="/contact"`) are FORBIDDEN in navigation components.

### Requirement: Intelligent Language Switcher
- The language switcher MUST detect the current `pageKey` and link to its counterpart in the other language using its localized slug.
#### Scenario: Switching from Spanish to English
- Given I am on `/es/sobre-nosotros`
- When I look at the language switcher
- Then it links to `/about-us`

### Requirement: SE0 Metadata Consistency
- All SEO related tags (canonical, hreflang, open-graph) MUST reflect the correct localized slugs.
#### Scenario: Checking hreflang on a Spanish page
- Given I am on `/es/taxi-aeropuerto-cancun`
- Then the `hreflang="en"` link MUST point to `/cancun-airport-taxi`.

### Requirement: Legacy Link Redirection
- The legacy redirects (e.g. `/en/` -> `/`) MUST be generated dynamically in `astro.config.ts` by importing the configuration from `src/lib/i18n/routes.ts`.
#### Scenario: Adding a new page
- When a new page is added to `routes.ts`, its legacy English redirect (`/en/new-page` -> `/new-page`) MUST automatically work without modifying `astro.config.ts`.

