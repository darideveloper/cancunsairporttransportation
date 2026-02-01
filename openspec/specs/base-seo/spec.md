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
The `BaseSEO` component MUST generate correct canonical URLs by relying on consistent naming between Page Identifiers and Route Keys.

#### Scenario: Self-referencing Canonical
- **Given** a page component defines `const page = "akumal"`,
- **When** `BaseSEO` renders,
- **Then** `currentPage` MUST be `"akumal"`.
- **And** the canonical path lookup `getLocalizedPath("akumal", lang)` MUST return the correct URL.
- **And** the translation lookup `t("pages.akumal.title")` MUST return the correct content.

#### Scenario: Spanish page canonical
- **Given** the current language is `es` and `currentPage="akumal"`,
- **When** `BaseSEO` resolves the canonical URL,
- **Then** the canonical URL path MUST be the Spanish version (`/es/transporte-cancun-akumal`), ensuring self-referencing correctness.

