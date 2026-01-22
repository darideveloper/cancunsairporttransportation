# content-updates Specification

## Purpose
TBD - created by archiving change update-banner-stats-content. Update Purpose after archive.
## Requirements
### Requirement: Content and Image Accuracy
The banner stats section MUST display accurate text and images as per the new design.
#### Scenario: Displaying correct English content
- **Given** the user is viewing the page in English
- **Then** the Banner Stats title should be "With more than a decade of experience"
- **And** the description should be "Offering you the best transportation service for you and your family, so you can enjoy the Riviera Maya."
- **And** the stats should display:
    - "21k+" / "Happy Clients" with `happy-clients.svg`
    - "21,517" / "Operated Transportation" with `office.svg`
    - "10,622" / "Available destinations" with `map-point.svg`

#### Scenario: Displaying correct Spanish content
- **Given** the user is viewing the page in Spanish
- **Then** the Banner Stats title should be "Con más de una década de experiencia"
- **And** the description should be "Ofreciendo el mejor servicio de transportación para ti y tu familia, para que disfrutes de la Riviera Maya."
- **And** the stats should display:
    - "21k+" / "Clientes satisfechos"
    - "21,517" / "Transportes Operados"
    - "10,622" / "Destinos disponibles"

### Requirement: Update Translation Text
The translation text for the Group Transfers page MUST be updated in both English and Spanish to reflect the new pricing, capacity, and descriptions.

#### Scenario: Update Spanish Group Page Content
- **Given** the user visits the Spanish version of the Group Transfers page
- **Then** the title should be "Transportación para grupos en Cancún"
- **And** the description should contain "Con una capacidad de hasta 15 pasajeros"
- **And** the pricing table should show "$539.82 MXN" for Arrival/One Way
- **And** the pricing table should show "$1,079.82 MXN" for Arrival/Round Trip

#### Scenario: Update English Group Page Content
- **Given** the user visits the English version of the Group Transfers page
- **Then** the title should be "Cancun Group Transportation"
- **And** the description should contain "With a capacity for up to 15 passengers"
- **And** the pricing table should show "$124.00 USD" for One Way
- **And** the pricing table should show "$241.00 USD" for Round Trip

