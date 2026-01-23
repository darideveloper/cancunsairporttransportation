# Capability: Taxi Translations

## ADDED Requirements

### Requirement: Taxi Private Details Translation
The `taxi` page SHALL display specific information about the taxi service, including capacity for 3 passengers and accurate pricing in both English and Spanish.

#### Scenario: English Taxi Private Details
Given the user is on the English `/cancun-airport-taxi` page
When the `PrivateDetails` component renders
Then it should show:
- Title: "Cancun Airport Taxi"
- Description: "Our Cancun Airport Taxi service is the ideal choice..."
- Table Title: "Taxi Cancun Airport - Prices"
- Row 1 One Way: "$34.99 USD"
- Row 1 Round Trip: "$69.99 USD"
- Capacity: "Up to 3 passengers"

#### Scenario: Spanish Taxi Private Details
Given the user is on the Spanish `/es/taxi-aeropuerto-cancun` page (or appropriate localized route)
When the `PrivateDetails` component renders
Then it should show:
- Title: "Taxi Aeropuerto Cancun"
- Description: "Nuestro servicio de Taxi Aeropuerto Cancún es la opción ideal..."
- Table Title: "Taxi Aeropuerto Cancún - Precios"
- Row 1 One Way: "$664.81 MXN"
- Row 1 Round Trip: "$1,329.81 MXN"
- Capacity: "Hasta 3 pasajeros"
