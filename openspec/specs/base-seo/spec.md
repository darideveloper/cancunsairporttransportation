# base-seo Specification

## Purpose
TBD - created by archiving change enhance-seo-metadata. Update Purpose after archive.
## Requirements
### Requirement: Social Metadata
The component MUST support flexible social metadata including dynamic images and correct locales to improve sharing appearance.

#### Scenario: Dynamic Social Image
- **Given** a page passes a specific image via `ogImage` prop,
- **When** `BaseSEO` renders,
- **Then** `og:image` and `twitter:image` tags MUST use the provided URL (resolved to absolute URL).
- **And** if no prop is passed, it MUST default to the global logo/fallback.

#### Scenario: Locale Handling
- **Given** the current language is `es`,
- **When** `BaseSEO` renders,
- **Then** the `og:locale` tag MUST be `es-MX`.
- **And** if `en`, it SHOULD be `en_US` (or derived correctly).

### Requirement: Indexing Control
Individual pages SHALL be able to opt-out of search indexing.

#### Scenario: Robots Control
- **Given** the `noIndex` prop is true,
- **When** `BaseSEO` renders,
- **Then** a `<meta name="robots" content="noindex, nofollow" />` tag MUST be present.

### Requirement: Schema.org Structure
The system MUST enhance the JSON-LD generation to support rich snippets for LocalBusiness.

#### Scenario: Rich JSON-LD
- **Given** any page using `BaseSEO`,
- **When** the JSON-LD is generated with `LocalBusiness` type,
- **Then** it MUST include the full global business details (Address, Geo, etc.) merged with any `extraJson`.

### Requirement: Canonical URL Resolution
The `BaseSEO` component MUST generate correct canonical URLs by using the route key for path resolution, separate from translation key lookups.

#### Scenario: Canonical URL with pageKey
- **Given** a page passes `pageKey="akumal"` and `currentPage="cancunToAkumalShuttle"`,
- **When** `BaseSEO` renders,
- **Then** the canonical URL MUST be resolved using `getLocalizedPath("akumal", lang)`.
- **And** translation lookups MUST continue using `currentPage` for `t(\`pages.cancunToAkumalShuttle.title\`)`.

#### Scenario: Canonical URL fallback to currentPage
- **Given** a page passes only `currentPage="taxi"` without `pageKey`,
- **When** `BaseSEO` renders,
- **Then** the canonical URL MUST be resolved using `getLocalizedPath("taxi", lang)`.
- **And** this maintains backward compatibility with existing pages.

#### Scenario: Canonical URL fallback to pathname
- **Given** a page passes neither `pageKey` nor `currentPage`,
- **When** `BaseSEO` renders,
- **Then** the canonical URL MUST use `Astro.url.pathname` as the path.

#### Scenario: Spanish page canonical points to English equivalent
- **Given** the current language is `es` and `pageKey="akumal"`,
- **When** `BaseSEO` resolves the canonical URL,
- **Then** the canonical URL path MUST be the English version (`/cancun-to-akumal-shuttle`), not the Spanish version.
- **And** this ensures proper canonical URL behavior across language variants.

### Requirement: Route Key Prop Support
The SEO components MUST accept a `pageKey` prop to explicitly specify the route key for URL resolution.

#### Scenario: PageSEO forwards pageKey
- **Given** a component passes `pageKey="playa"` to `PageSEO`,
- **When** `PageSEO` renders `BaseSEO`,
- **Then** the `pageKey` prop MUST be forwarded to `BaseSEO`.
- **And** both `currentPage` and `pageKey` MUST be available for their respective purposes.

#### Scenario: Missing route key graceful degradation
- **Given** an invalid `pageKey` is passed (e.g., `"nonexistent-key"`),
- **When** `BaseSEO` attempts to resolve the canonical path,
- **Then** the system MUST fall back to `Astro.url.pathname` without throwing errors.

