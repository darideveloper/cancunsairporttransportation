# Capability: Taxi Translations

## ADDED Requirements

### Requirement: Taxi Includes Translation
The "Includes" section on the Cancun Airport Taxi page SHALL use language specific to the taxi service.

#### Scenario: Displaying Taxi Includes in English
- Given the user is on the English Cancun Airport Taxi page
- When the "Includes" section is rendered
- Then the heading should read: "All our Taxi Cancun include:"
- And the vehicle image alt/title should read: "Private service in Suburban"

#### Scenario: Displaying Taxi Includes in Spanish
- Given the user is on the Spanish Cancun Airport Taxi page
- When the "Includes" section is rendered
- Then the heading should read: "Todos nuestros Taxis en Cancún incluyen:"
- And the vehicle image alt/title should read: "Servicio privado en Suburban"
