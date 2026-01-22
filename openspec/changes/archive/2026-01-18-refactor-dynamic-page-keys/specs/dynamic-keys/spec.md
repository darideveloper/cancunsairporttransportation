# Spec: Dynamic Translation Keys

## ADDED Requirements

### Requirement: Pages MUST use dynamic keys for page-specific translations using the `page` variable
All content pages that define a `page` variable MUST utilize it for constructing translation keys to ensure maintainability and consistency.

#### Scenario: The `cancun-to-tulum-shuttle.astro` page renders text
- **Given** the `page` variable is set to `"cancunToTulumShuttle"`
- **When** the page fetches translations for sections like `safeTrip` or `howToMove`
- **Then** it should use `t(\`pages.${page}.[section].[key]\`)` instead of hardcoded strings.

#### Scenario: The `index.astro` page renders text
- **Given** the `page` variable is set to `"home"`
- **When** the page fetches translations for page-specific content (e.g., banner title)
- **Then** it should use `t(\`pages.${page}.[key]\`)`.

#### Scenario: The `transportation-from-cancun-airport-to-playa-del-carmen.astro` page renders text
- **Given** the `page` variable is set to `"playaDelCarmen"`
- **When** the page fetches translations
- **Then** it should use `t(\`pages.${page}.[key]\`)`.
