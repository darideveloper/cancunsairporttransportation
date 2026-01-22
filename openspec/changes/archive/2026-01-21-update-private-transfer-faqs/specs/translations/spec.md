# Translations Spec

## ADDED Requirements

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
