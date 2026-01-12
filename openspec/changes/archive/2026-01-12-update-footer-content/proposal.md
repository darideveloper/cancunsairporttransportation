# Update Footer Content

## Why
The user has provided specific HTML snippets for the footer in both English and Spanish, containing updated links, texts, and contact information. The goal is to update the existing `Footer.astro` component and the corresponding translation files (`src/messages/*.json`) to match this new content.

## Goal
Update the visible text, links, and metadata (alt texts, aria/title labels) in the global footer to align with the provided requirements.

## Impact
- **Files**: `src/components/organisms/Footer.astro`, `src/messages/en.json`, `src/messages/es.json`.
- **User Experience**: Users will see updated contact info, new links, and corrected translations.
- **SEO/Accessibility**: Alt texts and titles will be updated as per the new content.

## Risk
Low. Content update only. Structure remains largely similar (responsive grid).

# Resulting Translation Keys
## English (`src/messages/en.json`)
```json
"footer": {
    "tagline": "More than a decade of experience, we offer the safest, fastest and most reliable transfer in Cancun.",
    "social": {
        "facebook": "Facebook",
        "instagram": "Instagram"
    },
    "columns": {
        "destinations": {
            "title": "Destinations",
            "links": [
                { "text": "Cancun Airport Transportation", "href": "/" },
                { "text": "Playa del Carmen Transfers", "href": "/transportation-from-cancun-airport-to-playa-del-carmen" },
                { "text": "Cancun to Tulum Shuttle", "href": "/cancun-to-tulum-shuttle" },
                { "text": "Cancun to Akumal", "href": "/cancun-to-akumal-shuttle" },
                { "text": "Transportation from Cancun to Merida", "href": "/transportation-from-cancun-to-merida" },
                { "text": "Destinations", "href": "/destinations" }
            ]
        },
        "services": {
            "title": "Services",
            "links": [
                { "text": "Standar Transportation", "href": "/private-airport-transfer-cancun" },
                { "text": "Luxury Trasportation", "href": "/luxury-transportation-cancun" },
                { "text": "Small Group Trasportation", "href": "/group-transfers-cancun" },
                { "text": "Cancun Airport Taxi", "href": "/cancun-airport-taxi" }
            ]
        },
        "information": {
            "title": "Information",
            "links": [
                { "text": "Contact us", "href": "/contact" },
                { "text": "Terms and conditions", "href": "/terms-and-conditions" },
                { "text": "Privacy policies", "href": "/privacy" }
            ]
        },
        "contact": {
            "title": "Contact",
            "email": { "label": "bookings@gotransfers.us", "value": "bookings@gotransfers.us", "href": "mailto:bookings@gotransfers.us" },
            "phones": [
                { "label": "From USA & Canada", "value": "+1 (929) 999-1258", "href": "tel:+19299991258" },
                { "label": "Mexico & Rest of the world", "value": "+52 (998) 387-0435", "href": "tel:+529983870435" }
            ]
        },
        "moreServices": { "text": "Caribbean Transfers Cancun", "href": "https://caribbean-transfers.com" }
    },
    "bottomBar": {
        "copyright": "Copyright © 2026 All Rights Reserved.",
        "terms": "Terms and conditions"
    }
}
```

## Spanish (`src/messages/es.json`)
```json
"footer": {
    "tagline": "Más de una década de experiencia, ofrecemos el traslado más seguro, veloz y confiable en Cancún.",
    "social": {
        "facebook": "Facebook",
        "instagram": "Instagram"
    },
    "columns": {
        "destinations": {
            "title": "Destinos",
            "links": [
                { "text": "Taxi Aeropuerto Cancún", "href": "/es" },
                { "text": "Cancun a Playa del Carmen", "href": "/es/transportacion-cancun-a-playa-del-carmen" },
                { "text": "Cancun a Tulum", "href": "/es/traslado-cancun-tulum" },
                { "text": "Cancun a Akumal", "href": "/es/transporte-cancun-akumal" },
                { "text": "Transporte de Cancún a Mérida", "href": "/es/traslado-de-cancun-a-merida" },
                { "text": "Destinos", "href": "/es/destinos" }
            ]
        },
        "services": {
            "title": "Servicios",
            "links": [
                { "text": "Transportación estándar", "href": "/es/transporte-privado-cancun" },
                { "text": "Transportación de lujo", "href": "/es/transporte-de-lujo-cancun" },
                { "text": "Trasportation para grupos pequeños", "href": "/es/transporte-para-grupos-cancun" },
                { "text": "Taxi Aeropuerto Cancún", "href": "/es/taxi-aeropuerto-cancun" }
            ]
        },
        "information": {
            "title": "Información",
            "links": [
                { "text": "Contactanos", "href": "/es/contacto" },
                { "text": "Términos y condiciones", "href": "/es/terminos-y-condiciones" },
                { "text": "Políticas de privacidad", "href": "/es/privacidad" }
            ]
        },
        "contact": {
            "title": "Contáctanos",
            "email": { "label": "bookings@gotransfers.us", "value": "bookings@gotransfers.us", "href": "mailto:bookings@gotransfers.us" },
            "phones": [
                { "label": "Desde USA & Canada", "value": "+1 (929) 999-1258", "href": "tel:+19299991258" },
                { "label": "México & Resto del múndo", "value": "+52 (998) 387-0435", "href": "tel:+529983870435" }
            ]
        },
        "moreServices": { "text": "Caribbean Transfers Cancun", "href": "https://caribbean-transfers.com/es" }
    },
    "bottomBar": {
        "copyright": "Copyright © 2026 All Rights Reserved.",
        "terms": "Términos y condiciones"
    }
}
```
