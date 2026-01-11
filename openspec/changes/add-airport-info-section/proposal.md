# Proposal: Locations

## Why
Users need quick access to contact information, the physical location of the Cancun Airport Transportation office, and estimated travel times to major destinations. This information improves user trust and provides essential logistics for their trip.

## What Changes
- Update `InfoIconCard.astro` to support an optional `buttomText` prop rendered before to the bottom icon.
- Create a new organism `Locations.astro` that includes:
    - Contact details (USA/Canada, México, Address) using `InfoIconCard`.
    - Google Maps embed using an `<iframe>`.
    - Transportation times to major destinations (Cancun, Isla Mujeres, Playa del Carmen, Tulum) using `InfoIconCard`.
- Add necessary translation strings to `src/messages/en.json` and `src/messages/es.json`.
- Integrate the `Locations` component into the landing page.

## Translation Data

### English (`en.json`)
```json
"locations": {
    "title": "Information about Cancun Airport Transportation Location",
    "contacts": {
        "usaCanada": {
            "label": "From USA / Canada",
            "value": "+1 (929) 999-1258"
        },
        "address": {
            "label": "Address",
            "value": "Av. Prol. La Luna 132, 77533 Cancún, Q.R."
        },
        "mexicoRest": {
            "label": "México & Rest of the world",
            "value": "+52 (998) 387-0435"
        }
    },
    "transportationTimes": {
        "title": "Transportation Time to the main locations",
        "items": [
            {
                "id": "cancun",
                "title": "Cancun",
                "text": "The transportation time from Cancun Airport to downtown Cancun is approximately 20 minutes. Travel times may vary due to traffic conditions.",
                "buttomText": "Distance: 21 km"
            },
            {
                "id": "isla-mujeres",
                "title": "Isla Mujeres",
                "text": "The transportation time from Cancun Airport to the Isla Mujeres Ferry is approximately 35 minutes. Travel times may vary due to traffic conditions.",
                "buttomText": "Distance: 24 km"
            },
            {
                "id": "playa-del-carmen",
                "title": "Playa del Carmen",
                "text": "The transportation time from Cancun Airport to Playa del Carmen is approximately 55 minutes. Travel times may vary due to traffic conditions.",
                "buttomText": "Distance: 54 km"
            },
            {
                "id": "tulum",
                "title": "Tulum",
                "text": "The transportation time from Cancun Airport to Tulum is approximately 2 hours. Travel times may vary due to traffic conditions.",
                "buttomText": "Distance: 119 km"
            }
        ]
    }
}
```

### Spanish (`es.json`)
```json
"locations": {
    "title": "Información sobre la ubicación de Cancun Airport Transportation",
    "contacts": {
        "usaCanada": {
            "label": "Desde USA / Canada",
            "value": "+1 (929) 999-1258"
        },
        "address": {
            "label": "Dirección",
            "value": "Av. Prol. La Luna 132, 77533 Cancún, Q.R."
        },
        "mexicoRest": {
            "label": "México & Resto del mundo",
            "value": "+52 (998) 387-0435"
        }
    },
    "transportationTimes": {
        "title": "Tiempo de transporte a los principales lugares",
        "items": [
            {
                "id": "cancun",
                "title": "Cancún",
                "text": "El tiempo de transporte desde el Aeropuerto de Cancún hasta el centro de Cancún es de aproximadamente 20 minutos. Los tiempos de viaje pueden variar debido a las condiciones del tráfico.",
                "buttomText": "Distancia: 21 km"
            },
            {
                "id": "isla-mujeres",
                "title": "Isla Mujeres",
                "text": "El tiempo de transporte desde el Aeropuerto de Cancún hasta el Ferry de Isla Mujeres es de aproximadamente 35 minutos. Los tiempos de viaje pueden variar debido a las condiciones del tráfico.",
                "buttomText": "Distancia: 24 km"
            },
            {
                "id": "playa-del-carmen",
                "title": "Playa del Carmen",
                "text": "El tiempo de transporte desde el Aeropuerto de Cancún a Playa del Carmen es de aproximadamente 55 minutos. Los tiempos de viaje pueden variar debido a las condiciones del tráfico.",
                "buttomText": "Distancia: 54 km"
            },
            {
                "id": "tulum",
                "title": "Tulum",
                "text": "El tiempo de transporte desde el Aeropuerto de Cancún a Tulum es de aproximadamente 2 horas. Los tiempos de viaje pueden variar debido a las condiciones del tráfico.",
                "buttomText": "Distancia: 119 km"
            }
        ]
    }
}
```

## Impact
- **SEO**: Improved local SEO by including address and proximity information. Use of semantic tags (`<section>`, `<article>`, `<h2>`, `<address>`).
- **UX**: One-stop section for all essential locations and transportation logistics.
- **Accessibility**: ARIA labels for the map and icons, semantic heading hierarchy.
