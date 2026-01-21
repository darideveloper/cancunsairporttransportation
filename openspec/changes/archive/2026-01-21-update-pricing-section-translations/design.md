# Design: Pricing Translation Updates

## Translation Keys Update

### `src/messages/es.json`

#### Global UI
```json
"global": {
  "ui": {
    "pricingCard": {
      "features": {
        "taxesIncluded": "Incluye tasas de aeropuerto y seguro del viajero"
      }
    }
  },
  "sections": {
    "pricingServices": {
      "cards": {
         "luxury": {
             "imageAlt": "Servicio privado en Suburban",
             "imageTitle": "Servicio privado en Suburban",
             "ctaText": "Reservar"
         },
         "private": {
             "imageAlt": "Servicio privado en Minivan",
             "imageTitle": "Servicio privado en Minivan",
             "ctaText": "Reservar",
             "bestSeller": "Más Vendido"
         },
         "group": {
             "imageAlt": "Servicio privado para Grupos",
             "imageTitle": "Servicio privado para Grupos",
             "ctaText": "Reservar"
         }
      }
    }
  }
}
```
*Note: `bestSeller` is boolean in `sections.pricingServices.cards` but the user text says "Más Vendido". `PricingCard.astro` uses `globalData.bestSeller` which seems to expect a boolean?*
Let's check `PricingCard.astro`.
`src/components/organisms/PricingSection.astro`:
```typescript
ctaText={globalData.ctaText}
bestSeller={globalData.bestSeller}
```
`src/components/molecules/PricingCard.astro` (I should check this).
If `bestSeller` prop is boolean, where does "Más Vendido" come from?
It might be hardcoded in `PricingCard` or it uses another key.
Let's assume for now I should only update strings. If `bestSeller` in JSON is `true`/`false`, I keep it that way.
The user provided HTML has `<p class="popular">Más Vendido</p>`.
Wait, looking at `es.json`:
```json
"ui": {
    "pricingCard": {
        "mostPopular": "Más Vendido",
```
So "Más Vendido" comes from `global.ui.pricingCard.mostPopular`.
The user text matches existing "Más Vendido". So no change needed there.

#### Pages Home Pricing
```json
"pages": {
  "home": {
    "pricing": {
      "title": "Otros servicios similares al transporte privado en Cancún",
      "subtitle": "Lista de nuestros servicios de transporte",
      "cards": {
        "luxury": {
          "title": "Transportación de Lujo",
          "price": "1512.00",
          "description": "Mejore su experiencia de viaje con nuestro servicio de traslado premium, proporcionando transporte sin problemas entre el aeropuerto de Cancún y su hotel en Cancún o la Riviera Maya. Nuestro servicio de primer nivel atiende de 1 a 5 pasajeros en una Suburban o un vehículo de lujo comparable, garantizando comodidad y estilo durante todo su viaje."
        },
        "private": {
          "title": "Servicio de Taxi",
          "price": "664.81",
          "description": "Viaje cómodamente en un servicio privado totalmente equipado para un máximo de 3 pasajeros. El servicio es privado, sin esperas ni paradas continuas."
        },
        "group": {
          "title": "Transporte de grupos",
          "price": "1512.00",
          "description": "¿Viaja con un grupo de más de 8 pasajeros? Ahorre dinero reservando nuestro servicio de transporte para grupos. Nuestros espaciosos y seguros vehículos pueden acomodar hasta 16 pasajeros, asegurando que todos disfruten juntos de un viaje cómodo y conveniente."
        }
      }
    }
  }
}
```

### `src/messages/en.json`

#### Pages Home Pricing
```json
"pages": {
  "home": {
    "pricing": {
      "title": "Other services similar to private transportation in Cancun",
      "subtitle": "List of our transportation services",
      "cards": {
        "luxury": {
          "title": "Luxury Transportation",
          "price": "84.00",
          "description": "Enhance your travel experience with our premium transfer service, providing seamless transportation between Cancun Airport and your hotel in Cancun or the Riviera Maya. Our top-tier service caters to 1 to 5 passengers in a Suburban or a comparable luxury vehicle, ensuring comfort and style throughout your journey."
        },
        "private": {
          "title": "Taxi Service",
          "price": "34.99",
          "description": "Travel comfortably in a fully equipped private service for up to 3 passengers. The service is private, with no waiting time or continuous stops."
        },
        "group": {
          "title": "Group Transportation",
          "price": "84.00",
          "description": "Traveling with a group of more than 8 passengers? Save money by booking our group transportation service. Our spacious and secure vehicles can accommodate up to 16 passengers, ensuring everyone enjoys a comfortable and convenient journey together."
        }
      }
    }
  }
}
```
*Note: Global image titles/alts in English seemed to match existing or require minor updates. User provided: "Private service in Suburban", "Private service in a Minivan", "Private service for Groups". JSON has "Private service in Suburban", "Private service in a Minivan", "Private service for Groups". So only `en` global update is `Private service in Suburban` (matches). Actually `en` JSON is already correct mostly. I will verify exact strings.*
User English Img Alt:
- "Private service in Suburban" -> JSON: "Private service in Suburban" (Match)
- "Private service in a Minivan" -> JSON: "Private service in a Minivan" (Match)
- "Private service for Groups" -> JSON: "Private service for Groups" (Match)

User Spanish Img Alt:
- "Servicio privado en Suburban" -> JSON: "Servicio privado en Suburban" (Match)
- "Servicio privado en Minivan" -> JSON: "Servicio privado en Minivan" (Match)
- "Servicio privado para Grupos" -> JSON: "Servicio privado para Grupos" (Match)

So `global.sections.pricingServices.cards` alts/titles do NOT need changes if they match.
Wait, User Spanish Private Img Alt: "Servicio privado en Minivan" (from HTML `alt`).
JSON: "Servicio privado en Minivan". Match.
So I only need to update `pages.home.pricing` and `global.ui.pricingCard.features.taxesIncluded` (ES only).
