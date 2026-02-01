# Base SEO Specification (Delta)

## MODIFIED Requirements

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

## REMOVED Requirements

### Requirement: Route Key Prop Support
The requirement for a separate `pageKey` prop is REMOVED in favor of the DRY principle where `currentPage` acts as the single source of truth for both Routing and Content.
