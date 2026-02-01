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

### Requirement: Legacy Link Redirection
- The legacy redirects (e.g. `/en/` -> `/`) MUST be generated dynamically in `astro.config.ts` by importing the configuration from `src/lib/i18n/routes.ts`.
#### Scenario: Adding a new page
- When a new page is added to `routes.ts`, its legacy English redirect (`/en/new-page` -> `/new-page`) MUST automatically work without modifying `astro.config.ts`.

### Requirement: SEO Metadata Consistency
All SEO related tags (canonical, hreflang, open-graph) MUST reflect the correct localized slugs using the route key, not translation keys.

#### Scenario: Checking hreflang on a Spanish page
- **Given** I am on `/es/taxi-aeropuerto-cancun`,
- **Then** the `hreflang="en"` link MUST point to `/cancun-airport-taxi`.

#### Scenario: Canonical URL on destination pages
- **Given** I am on `/cancun-to-akumal-shuttle`,
- **When** the canonical URL is generated,
- **Then** it MUST be `https://cancunsairporttransportation.com/cancun-to-akumal-shuttle`.
- **And** it MUST NOT fall back to the homepage URL.

#### Scenario: Canonical URL consistency across languages
- **Given** I am on the Spanish version at `/es/transporte-cancun-akumal`,
- **When** the canonical URL is generated,
- **Then** it MUST be self-referencing to the Spanish URL `https://cancunsairporttransportation.com/es/transporte-cancun-akumal`.
- **And** the `hreflang="es"` alternate MUST point to `/es/transporte-cancun-akumal`.

#### Scenario: Open Graph URL matches canonical
- **Given** any page with SEO metadata,
- **When** the page renders,
- **Then** the `og:url` meta tag MUST match the canonical URL exactly.
- **And** the `twitter:url` meta tag MUST also match.

### Requirement: Route Key Propagation
The routing system MUST propagate the route key (`pageKey`) from the router to SEO components for accurate URL resolution.

#### Scenario: Layout receives pageKey from router
- **Given** the `[...path].astro` router resolves a page with `props: { pageKey: "akumal" }`,
- **When** the Layout renders,
- **Then** the `pageKey` MUST be available to child components for SEO purposes.

#### Scenario: Destination components use pageKey for SEO
- **Given** a destination component receives `pageKey` from props,
- **When** it renders `PageSEO`,
- **Then** it MUST pass `pageKey` to ensure correct canonical URL generation.
- **And** it MAY use a separate `page` variable for translation lookups.

