# Update Merida Destinations Content

## Summary
Update the content of the "Destinations" section on the "Transportation from Cancun to Merida" page to accurately reflect the service and provide correct destination details (Tulum, Playa del Carmen, Cancun) with updated prices and descriptions in both English and Spanish.

## Problem
The current "Destinations" section on the Merida page (`cancunToMerida`) contains copy-pasted content referring primarily to Tulum ("Shuttle from Cancun to Tulum") and uses incorrect descriptions and prices for the cross-sell destinations. This confuses users looking for Merida transportation or related options.

## Solution
Update the `pages.cancunToMerida.destinations` translation keys in `src/messages/en.json` and `src/messages/es.json` with the following content, which has been verified against the provided HTML.

### English (`src/messages/en.json`)

```json
"destinations": {
    "title": "Transfers to and from Merida and other destinations",
    "text": "We provide the most comprehensive transportation service to any hotel or destination in Merida. Whether you're coming from anywhere in the Yucatán Peninsula or Cancun Airport, we offer a complete service ready to take you to your hotel, preferred attraction, or any spot in Merida with ease and comfort.",
    "viewMore": "View more destinations",
    "viewMoreLink": "/destinations",
    "cards": {
        "tulum": {
            "title": "Transportation to Tulum from Cancun",
            "price": "129.00",
            "description": "Enjoy a safe, fast, and reliable transfer service to Tulum. The estimated transfer time from Cancun to Tulum is 1 hour and 45 minutes.",
            "ctaText": "Book now",
            "link": "/cancun-to-tulum-shuttle"
        },
        "playa": {
            "title": "Transportation to Playa del Carmen from Cancun",
            "price": "69.99",
            "description": "Enjoy a safe, fast, and reliable transfer service to Playa del Carmen. The estimated transfer time from Cancun is 55 minutes.",
            "ctaText": "Book now",
            "link": "/transportation-from-cancun-airport-to-playa-del-carmen"
        },
        "cancun": {
            "title": "Transportation to Cancun Hotel Zone from Cancun",
            "price": "29.99",
            "description": "Enjoy a safe, fast, and reliable transfer service to the Hotel Zone. The estimated transfer time from the Airport to the Hotel Zone is 30 minutes.",
            "ctaText": "Book now",
            "link": "/"
        }
    }
}
```

### Spanish (`src/messages/es.json`)

```json
"destinations": {
    "title": "Traslados hacia y desde Mérida y otros destinos",
    "text": "Ofrecemos el servicio de transporte más completo a cualquier hotel o destino en Mérida. Ya sea que vengas desde cualquier punto de la península de Yucatán o desde el Aeropuerto de Cancún, brindamos un servicio completo listo para llevarte a tu hotel, atracción preferida o cualquier lugar en Mérida con facilidad y comodidad.",
    "viewMore": "Ver más destinos",
    "viewMoreLink": "/es/destinos",
    "cards": {
        "tulum": {
            "title": "Transporte a Tulum desde Cancún",
            "price": "2322.00",
            "description": "Disfruta de un servicio de traslado seguro, rápido y confiable a Tulum. El tiempo estimado de traslado desde Cancún a Tulum es de 1 hora y 45 minutos.",
            "ctaText": "Reservar",
            "link": "/es/traslado-cancun-tulum"
        },
        "playa": {
            "title": "Transporte a Playa del Carmen desde Cancún",
            "price": "1259.82",
            "description": "Disfruta de un servicio de traslado seguro, rápido y confiable a Playa del Carmen. El tiempo estimado de traslado desde Cancún es de 55 minutos.",
            "ctaText": "Reservar",
            "link": "/es/transportacion-cancun-a-playa-del-carmen"
        },
        "cancun": {
            "title": "Transporte a la Zona Hotelera de Cancún desde Cancún",
            "price": "539.82",
            "description": "Disfruta de un servicio de traslado seguro, rápido y confiable a la Zona Hotelera. El tiempo estimado de traslado desde el Aeropuerto a la Zona Hotelera es de 30 minutos.",
            "ctaText": "Reservar",
            "link": "/es"
        }
    }
}
```

## Impact
- **User Experience**: Improved clarity and relevance of content for users on the Merida page.
- **SEO**: Better relevance of content.
- **Codebase**: purely content update in JSON files; no component changes required.
