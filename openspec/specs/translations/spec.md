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

### Requirement: Update Akumal Shuttle Translations
The translations for the Cancun to Akumal Shuttle page MUST be updated in both English and Spanish to reflect the new provided content.

#### Scenario: Update English Translations
The `src/messages/en.json` file MUST be updated for `cancunToAkumalShuttle` key:
- Update `cancunToAkumalShuttle.faq.title` to "Transfer from Cancun to Akumal"
- Update `cancunToAkumalShuttle.faq.description` to "Rates for Transfer Services in Akumal and the Riviera Maya" (Note: This text was provided in the context of the FAQ section)
- Update/Add `cancunToAkumalShuttle.faq.items` with keys:
    - `cost`: "How much does transportation from Cancun to Akumal cost? ..."
    - `safe`: "Is transportation from Cancun Airport to Akumal safe? ..."
    - `benefits`: "What are the benefits of a shuttle to Akumal from Cancun? ..."
    - `howToGet`: "How do I get from Cancun Airport to Akumal? ..."
    - `distance`: "What is the distance between Akumal and Cancun Airport? ..."
    - `placesToVisit`: "What places can I visit in Akumal with a shuttle from Cancun? ..."
    - `uber`: "Is Uber available in Akumal? ..."
    - `cheapest`: "What is the cheapest transfer from Cancun Airport to Akumal? ..."
    - `otherDestinations`: "To which other destinations can I book my transfer service? ..."
    - Note: The provided "Frequently Asked Questions..." header item in the list will be omitted as it duplicates the section intent and breaks the Q&A format, unless strictly required (which would require a `header` key that renders weirdly).

#### Scenario: Update Spanish Translations
The `src/messages/es.json` file MUST be updated for `cancunToAkumalShuttle` key:
- Update `cancunToAkumalShuttle.faq.title` to "Preguntas frecuentes sobre el servicio de Transportación a Akumal"
- Update `cancunToAkumalShuttle.faq.description` to "Te ayudamos a despejar todas tus dudas sobre nuestro servicio de traslado"
- Update/Add `cancunToAkumalShuttle.faq.items` with keys:
    - `cost`: "¿Cuánto cuesta el transporte de Cancún a Akumal? ..."
    - `safe`: "¿Es seguro el transporte desde el Aeropuerto de Cancún a Akumal? ..."
    - `benefits`: "¿Qué beneficios obtengo con un shuttle a Akumal desde Cancún? ..."
    - `howToGet`: "¿Cómo llego del Aeropuerto de Cancún a Akumal? ..."
    - `distance`: "¿Qué distancia hay entre Akumal y el Aeropuerto de Cancún? ..."
    - `placesToVisit`: "¿Qué lugares puedo visitar en Akumal con un shuttle desde Cancún? ..."
    - `uber`: "¿Hay Uber en Akumal? ..."
    - `cheapest`: "¿Cuál es el traslado más barato del Aeropuerto de Cancún a Akumal? ..."
    - `otherDestinations`: "¿A qué otros destinos puedo reservar mi servicio de traslado? ..."

### Requirement: Merida Page Content Localization
The `cancunToMerida` page MUST correctly display localized content for the Pricing (Services) section.

#### Scenario: Update English Translations
- GIVEN the `en.json` translation file
- WHEN the user views the Cancun to Merida page in English
- THEN the Pricing section should show the updated services (Luxury, Private, Group) with prices $995, $525, and $995 respectively.

#### Scenario: Update Spanish Translations
- GIVEN the `es.json` translation file
- WHEN the user views the Cancun to Merida page in Spanish
- THEN the Pricing section should show the updated services with prices in MXN (17910, 9450, 17910).

