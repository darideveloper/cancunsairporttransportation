# Spec: Destinations Page Content

## ADDED Requirements

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
