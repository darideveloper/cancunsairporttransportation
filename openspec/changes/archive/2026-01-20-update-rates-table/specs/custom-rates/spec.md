# Custom Rates Table Logic

## ADDED Requirements

### Requirement: Optional Page Prop
The `RatesTable` component MUST accept an optional `page` prop.

#### Scenario: Page Prop Provided
- **Given** the `RatesTable` is included in `cancun-to-akumal-shuttle.astro`
- **When** the developer adds `page="cancunToAkumalShuttle"` to the component props
- **Then** the component receives the page identifier.

### Requirement: Page Specific Destinations
The `RatesTable` component MUST prioritize page-specific destinations data when `page` is provided.

#### Scenario: Page Data Exists
- **Given** `page` is set to "cancunToAkumalShuttle"
- **And** the translation key `pages.cancunToAkumalShuttle.ratesTable.destinations` exists in the current language
- **When** the table renders
- **Then** it displays the rows defined in the page-specific destinations.

### Requirement: Fallback to Global Destinations
The `RatesTable` component MUST fallback to global destinations data when `page` is missing or data is unavailable.

#### Scenario: Page Prop Missing
- **Given** `page` prop is undefined
- **When** the table renders
- **Then** it displays the rows defined in `global.ratesTable.destinations`.

#### Scenario: Page Data Missing
- **Given** `page` is set to "someNewPage"
- **And** the translation key `pages.someNewPage.ratesTable.destinations` does NOT exist
- **When** the table renders
- **Then** it displays the rows defined in `global.ratesTable.destinations`.

### Requirement: Global Headers
The `RatesTable` component MUST ALWAYS use global headers.

#### Scenario: Always Global Headers
- **Given** `page` is either set or unset
- **When** the table renders the `<thead>`
- **Then** it displays headers from `global.ratesTable.headers`.
