# translations Specification

## Purpose
TBD - created by archiving change update-transportation-texts. Update Purpose after archive.
## Requirements
### Requirement: Localized Service Details
The system MUST provide localized titles, descriptions, prices, and image metadata for each transportation service type.

#### Scenario: English Content Rendering
Given the language is English
When the pricing section is rendered
Then the service titles MUST be "Luxury Transportation", "Private Transportation", and "Group Transportation"
And the prices MUST be "$84.00 USD", "$29.99 USD", and "$84.00 USD" respectively
And the descriptions MUST match the provided marketing copy including bullet points.

#### Scenario: Spanish Content Rendering
Given the language is Spanish
When the pricing section is rendered
Then the service titles MUST be "Transporte de Lujo", "Transporte privado", and "Transporte de grupos"
And the prices MUST be "$1,512.00 MXN", "$539.82 MXN", and "$1,512.00 MXN" respectively
And the descriptions MUST match the provided Spanish marketing copy including bullet points.

### Requirement: Descriptors for Accessibility
Each service image MUST have a localized `alt` and `title` attribute for SEO and accessibility.

#### Scenario: Image Metadata
Given a service like "Luxury Transportation"
When viewed in English
Then the `alt` and `title` tags MUST be "Private service in Suburban"
When viewed in Spanish
Then the `alt` and `title` tags MUST be "Servicio privado en Suburban"

### Requirement: Use updated destinations and prices
The rates table MUST be updated to include 19 specific destinations with their corresponding prices. Each price MUST be formatted with the currency code as a suffix (" USD" for English and " MXN" for Spanish).

#### Scenario: English Rates
The English rates table must display the following 19 destinations with their respective prices ending in " USD":
- Cancun Downtown
- Cancun Hotel Zone
- Puerto Morelos
- Playa Mujeres
- Puerto Juárez
- Playa del Carmen
- Costa Mujeres
- Cozumel
- Puerto Aventuras
- Akumal
- Tulum
- Mahahual
- Holbox
- Valladolid
- Merida
- Bacalar
- Coba
- Tulum Hotel Zone
- Tulum Airport

#### Scenario: Spanish Rates
The Spanish rates table must display the following 19 destinations with their respective prices ending in " MXN":
- Cancun Centro
- Zona Hotelera de Cancún
- Puerto Morelos
- Playa Mujeres
- Puerto Juárez
- Playa del Carmen
- Costa Mujeres
- Cozumel
- Puerto Aventuras
- Akumal
- Tulum
- Mahahual
- Holbox
- Valladolid
- Merida
- Bacalar
- Coba
- Tulum Hotel Zone
- Tulum Aeropuerto

