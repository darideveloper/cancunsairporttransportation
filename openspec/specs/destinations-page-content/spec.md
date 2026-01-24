# destinations-page-content Specification

## Purpose
TBD - created by archiving change add-destinations-to-destinations-page. Update Purpose after archive.
## Requirements
### Requirement: Localization Support
The `destinations` page MUST have its own localized content to ensure flexibility in marketing text that might differ from the home page.

#### Scenario: English Content
- **Given** I am on the Destinations page in English
- **Then** the page should display "Cancun Airport Transportation to Tulum" with price "$129.00 USD"
- **And** it should display "Cancun Airport Transportation to Playa del Carmen" with price "$69.99 USD"
- **And** it should display "Cancun Airport Transportation to Cancun Hotel Zone" with price "$29.99 USD"

#### Scenario: Spanish Content
- **Given** I am on the Destinations page in Spanish
- **Then** the page should display "Transporte del Aeropuerto de Cancun a Tulum" with price "$2322.00 MXN"
- **And** it should display "Transporte del Aeropuerto de Cancun a Playa del Carmen" with price "$1259.82 MXN"
- **And** it should display "Transportación del Aeropuerto de Cancún a la Zona Hotelera de Cancún" with price "$539.82 MXN"

### Requirement: Sidebar Benefits Checklist
The Destinations page sidebar MUST include a checklist highlighting "Affordable travel" and "Low rates" (or localized equivalents) to emphasize service value.

#### Scenario: Rendering checklist items in English
- **Given** I am on the Destinations page in English (`/en/destinations`)
- **When** I view the sidebar
- **Then** I should see a checklist containing "Affordable travel" and "Low rates"
- **And** these items MUST use the `CheckListItem` atom component
- **And** they MUST be positioned between the "Travel with Confidence" and "Transportation Service" cards

#### Scenario: Rendering checklist items in Spanish
- **Given** I am on the Destinations page in Spanish (`/es/destinos`)
- **When** I view the sidebar
- **Then** I should see a checklist containing "Viaje accesible" and "Tarifas bajas"
- **And** these items MUST be translated via the i18n system using keys under `pages.destinations.checklist`

