# global-schema Specification

## Purpose
TBD - created by archiving change enhance-seo-metadata. Update Purpose after archive.
## Requirements
### Requirement: Global Config
The application MUST establish a centralized configuration file for all business-critical data to ensure consistency across the application.

#### Scenario: Centralized Business Data
- **Given** the application needs to render business info (Address, Geo, Contact) in JSON-LD and potentially UI,
- **When** accessing `src/data/site-config.ts`,
- **Then** it must export a `BUSINESS_DATA` object containing the strictly defined values from `docs/seo.md`:
  - Name: "Cancun Airport Transportation"
  - Address: "Av. Prol. La Luna 132, Cancun, CUN, 77533, MX"
  - Geo: 21.12865, -86.8546
  - Phone: "+52 998 212 7069"
  - OpeningHours: "00:00-23:59" (Mon-Sun)
  - PriceRange: "29 USD - 955 USD"

#### Scenario: Locale Mapping
- **Given** the site supports `en` and `es` paths,
- **When** generating metadata,
- **Then** the `en` path MUST map to `en_US` (or `en`) locale, and `es` path MUST map to `es-MX` (as per requirement).

