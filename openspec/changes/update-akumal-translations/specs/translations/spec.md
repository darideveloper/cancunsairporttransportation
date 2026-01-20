# Update Akumal Translations

## MODIFIED Requirements

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
