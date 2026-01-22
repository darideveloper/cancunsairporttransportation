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

### Requirement: Merida Page Destinations Content
The Merida page destinations section MUST display correct localized content.

#### Scenario: English Content
When a user views the Merida page in English (`/transportation-from-cancun-to-merida`), the destinations section title is "Transfers to and from Merida and other destinations" and the description matches the provided copy.

#### Scenario: Spanish Content
When a user views the Merida page in Spanish (`/es/traslado-de-cancun-a-merida`), the destinations section title is "Traslados hacia y desde Mérida y otros destinos" and the description matches the provided copy.

#### Scenario: Destination Cards Content
The destination cards (Tulum, Playa del Carmen, Cancun) on the Merida page display the correct prices and descriptions.
- **Tulum**: $129.00 USD / $2322.00 MXN
- **Playa del Carmen**: $69.99 USD / $1259.82 MXN
- **Cancun**: $29.99 USD / $539.82 MXN

### Requirement: Update Cancun to Merida Transportation Services Title
The title for the transportation services section on the Cancun to Merida page MUST accurately reflect the destination.

#### Scenario: Spanish Translation
- **Given** the user is viewing the Cancun to Merida page in Spanish
- **When** the Transportation Services section is rendered
- **Then** the title should be "Traslado de Cancún a Mérida"

#### Scenario: English Translation
- **Given** the user is viewing the Cancun to Merida page in English
- **When** the Transportation Services section is rendered
- **Then** the title should be "Shuttle from Cancun to Mérida"

### Requirement: Display Private Page Specific Testimonials
The testimonials section on the private airport transfer page MUST display content specific to the private service.

#### Scenario: Private Page Testimonials Content
Given the private airport transfer page is loaded
When the user views the User Reviews/Testimonials section
Then the title should be "Private Transportation in Cancun - What our clients say about us" (EN) / "Transporte Privado en Cancun - Lo que nuestros clientes dicen de nosotros" (ES)
And the description should be "The opinion of our customers is the most important thing for us." (EN) / "La opinión de nuestros clientes es lo más importante para nosotros." (ES)
And there should be 3 testimonials with the specified text and new client names.

### Requirement: English Content Update
The `src/messages/en.json` file MUST be updated with the provided English content for the Private Details section key `pages.privateAirportTransfer.privateDetails`.

#### Scenario: Verify English Keys
- `pages.privateAirportTransfer.privateDetails.title` matches "Cancun Private Transportation".
- `pages.privateAirportTransfer.privateDetails.description` starts with "Our Private Transportation service in Cancun".
- `pages.privateAirportTransfer.privateDetails.table.rows` has 2 entries.
- First row One Way price is "$24.00 USD".

### Requirement: Spanish Content Update
The `src/messages/es.json` file MUST be updated with the provided Spanish content for the Private Details section key `pages.privateAirportTransfer.privateDetails`.

#### Scenario: Verify Spanish Keys
- `pages.privateAirportTransfer.privateDetails.title` matches "Transportación Privada en Cancún".
- `pages.privateAirportTransfer.privateDetails.description` starts with "Nuestro servicio de Transportación Privada en Cancún".
- `pages.privateAirportTransfer.privateDetails.table.headers.oneWay` matches "Ida".
- First row One Way price is "$539.82 MXN".

### Requirement: Add Private Transfer FAQs
The localization files SHALL contain specific FAQ entries for the Private Airport Transfer page.

#### Scenario: Display Private Transfer FAQs
When the user visits the Private Airport Transfer page, they should see FAQs specific to private transportation, not the generic home page FAQs.

**Files:** `src/messages/en.json`, `src/messages/es.json`

**Changes:**
- Add `faq` object under `pages.private`.
- Populate `faq` with `title` and `items` based on the user provided text.
- Use keys: `passengers`, `difference`, `booking`, `cost`.

**English Content (`src/messages/en.json`):**
```json
"pages": {
  "private": {
    "faq": {
      "title": "Private Transportation from Cancun Airport - FAQS",
      "items": {
        "passengers": {
          "question": "How many passengers can travel using the private transportation service?",
          "answer": "Our vehicles can accommodate up to 8 passengers."
        },
        "difference": {
          "question": "What is the difference between private transportation and other transfer services?",
          "answer": "Unlike other transfer services, private transportation does not require sharing the vehicle with strangers or making unnecessary stops at different hotels."
        },
        "booking": {
            "question": "How can I book the private transfer service?",
            "answer": "You can book our private transfer service through our website, phone, or email. Be sure to provide your flight and destination details for a quick and hassle-free booking experience."
        },
        "cost": {
            "question": "How much does the private transportation service cost?",
            "answer": "We offer affordable and competitive rates for private transportation services. Costs may vary depending on the destination and number of passengers. For an accurate quote, please visit our website or contact our customer service team."
        }
      }
    }
  }
}
```

**Spanish Content (`src/messages/es.json`):**
```json
"pages": {
  "private": {
    "faq": {
        "title": "Transportación Privada desde el Aeropuerto de Cancún - FAQS",
        "items": {
            "passengers": {
                "question": "¿Cuántos pasajeros pueden viajar utilizando el servicio de transportación privada?",
                "answer": "Nuestros vehículos pueden transportar hasta 8 pasajeros."
            },
            "difference": {
                "question": "¿Cuál es la diferencia entre la transportación privada y otros servicios de traslado?",
                "answer": "A diferencia de otros servicios de traslado, el transporte privado no requiere compartir el vehículo con extraños ni hacer paradas innecesarias en diferentes hoteles."
            },
            "booking": {
                "question": "¿Cómo puedo reservar el servicio de traslado privado?",
                "answer": "Puede reservar nuestro servicio de traslado privado a través de nuestra página web, teléfono o correo electrónico. Asegúrese de proporcionar los detalles de su vuelo y destino para una experiencia de reserva rápida y sin complicaciones."
            },
            "cost": {
                "question": "¿Cuánto cuesta el servicio de transporte privado?",
                "answer": "Ofrecemos tarifas asequibles y competitivas para los servicios de transporte privado. Los costes pueden variar en función del destino y del número de pasajeros. Para obtener un presupuesto exacto, visite nuestro sitio web o póngase en contacto con nuestro equipo de atención al cliente."
            }
        }
    }
  }
}
```

### Requirement: Update Private Transfer Page Component
The `PrivateAirportTransfer` page SHALL use the localized private FAQs.

#### Scenario: Pass private page key
The `FaqSection` component currently inherits `page="home"` from the `page` constant. It needs to be explicitly set to `"private"` to load the correct translations from `pages.private.faq`.

**Files:** `src/pages/[lang]/private-airport-transfer-cancun.astro`

**Changes:**
- Update `<FaqSection page={page} />` to `<FaqSection page="private" />`.

### Requirement: Update English Includes Content
The translation SHALL update the English includes section content.

#### Scenario: Apply new English text
- Given the `en.json` file
- When updating `global.sections.includes`
- Then the `title` SHALL be "All our Cancun Private Transfers include:"
- And the `imageAlt` and `imageTitle` SHALL be "Private service in Suburban"
- And the `items` SHALL be:
    - "Highly Trained Staff"
    - "Flight Monitoring"
    - "Travel Insurance"
    - "Reception at the airport"
    - "Free Schedule Changes (See our terms and conditions)"
    - "Vehicles in content maintenance"
    - "24-Hour Service"

### Requirement: Update Spanish Includes Content
The translation SHALL update the Spanish includes section content.

#### Scenario: Apply new Spanish text
- Given the `es.json` file
- When updating `global.sections.includes`
- Then the `title` SHALL be "Todos nuestros Traslados Privados en Cancún incluyen:"
- And the `imageAlt` and `imageTitle` SHALL be "Servicio privado en Suburban"
- And the `items` SHALL be:
    - "Personal Altamente Capacitado"
    - "Monitoreo de Vuelo"
    - "Seguro de Viaje"
    - "Recepción en el aeropuerto"
    - "Cambios de horario gratuitos (Consulte nuestros términos y condiciones)"
    - "Vehículos en mantenimiento de contenido"
    - "Servicio 24 horas"

### Requirement: Luxury Page Title
The Luxury Transportation page MUST display the correct title based on the selected language.

#### Scenario: Update English Title
Given the language is "en"
When the `pages.luxury.title` key is accessed
Then it should return `Luxury Airport Transfer Cancun`

#### Scenario: Update Spanish Title
Given the language is "es"
When the `pages.luxury.title` key is accessed
Then it should return `Transportación de lujo en Cancún Aeropuerto`

### Requirement: Luxury Transportation Translations

The Luxury Transportation page translations MUST match the latest approved content.

#### Scenario: Verify English content
Given the user is viewing the Luxury Transportation page in English
Then the "Private Details" section title should be "Cancun Luxury Transportation"
And the pricing table should use correct prices.

#### Scenario: Verify Spanish content
Given the user is viewing the Luxury Transportation page in Spanish
Then the "Private Details" section title should be "Transportación de lujo en Cancún"
And the pricing table should use correct prices.

