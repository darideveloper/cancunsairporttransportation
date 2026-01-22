# Content Updates Specification

## ADDED Requirements

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
