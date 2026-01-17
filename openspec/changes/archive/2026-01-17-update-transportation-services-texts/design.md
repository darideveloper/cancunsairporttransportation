# Design: Page-Specific Transportation Service Titles

## Problem
The current `TransportationServices` component iterates over a fixed list of keys (`airportToHotel`, `hotelToHotel`, etc.) and fetches the *title* from `global.sections.transportationServicesList.items.{key}.title`.
It fetches the *text* (description) from `pages.{page}.transportationServices.items.{key}.text`.

The user wants to customize the *title* for the Playa del Carmen page (e.g., "De Hotel a Hotel" instead of "Hotel a Hotel").

## Solution
Modify the `services` mapping logic in `TransportationServices.astro`.

### Logic
Current:
```javascript
const services = serviceKeys.map(({ key, Icon }) => ({
  title: t(`global.sections.transportationServicesList.items.${key}.title`),
  text: t(`pages.${page}.transportationServices.items.${key}.text`),
  Icon,
}));
```

New:
```javascript
const services = serviceKeys.map(({ key, Icon }) => ({
  // Try page specific title first, if it returns the key (meaning missing), use global.
  // OR simply: define a new key convention.
  // Since our t() function usually returns the key if missing, we need to check if the translation exists.
  // However, simple override logic is:
  // If `pages.{page}.transportationServices.items.{key}.title` exists in JSON, use it.
  
  // Implementation detail:
  // We can just try to fetch the page specific title. 
  // If the translation returns the key, we assume it's missing and fallback? 
  // NO, `t()` in this project might validly return a string that looks like a key if we are unlucky, but usually not.
  // Better approach: 
  // Just ALWAYS check `pages.{page}.transportationServices.items.{key}.title`.
  // AND in the JSON, we only populate provided titles.
  // BUT if `t` returns the key when missing, we will see the key on the UI if we don't fallback.
  
  // Check if `i18n` utility supports fallback. 
  // If not, we can implement manual fallback: 
  // const pageTitle = t(`pages.${page}...title`);
  // const hasPageTitle = pageTitle !== `pages.${page}...title`; // Assuming t returns key on miss
  // title: hasPageTitle ? pageTitle : t(`global...title`)
  
  // Actually, standard i18next does this. Our simple utils might not.
  // We will assume for now we need to implement the fallback check.
  
  title: getPageSpecificTitle(page, key) || t(`global.sections.transportationServicesList.items.${key}.title`),
  text: t(`pages.${page}.transportationServices.items.${key}.text`),
  Icon,
}));
```


### Translation Structure
`src/messages/en.json`:
```json
"pages": {
  "playaDelCarmen": {
    "transportationServices": {
      "title": "Shuttle from Cancun to Playa del Carmen",
      "items": {
        "airportToHotel": {
          "title": "Airport to Hotel",
          "text": "You have come to enjoy the Caribbean and surely you need transportation to your Hotel or Airport, this service is ideal for you."
        },
        "hotelToHotel": {
          "title": "Hotel to Hotel", 
          "text": "Need to change from one hotel to another while in Cancun? We help you with this transportation from hotel to hotel."
        },
        "hotelToRestaurant": {
          "title": "Hotel to Restaurant",
          "text": "When you relax on your vacation, probably the least you want to do is drive, and even more, if you plan to drink! We can take you to your restaurant and return to your hotel."
        },
        "hotelToPark": {
          "title": "Hotel to Park",
          "text": "Are you visiting Xcaret or Xel Ha? Or probably Xoximilco or the Mayan Museum in Cancun. At Cancun Airport Transportation we can take you to any of these parks."
        }
      }
    }
  }
}
```

`src/messages/es.json`:
```json
"pages": {
  "playaDelCarmen": {
    "transportationServices": {
      "title": "Traslado de Cancún a Playa del Carmen",
      "items": {
        "airportToHotel": {
          "title": "Aeropuerto a Hotel",
          "text": "Has venido a disfrutar del Caribe y seguramente necesitas transportación a tu Hotel o Aeropuerto, este servicio es ideal para ti."
        },
        "hotelToHotel": {
          "title": "De Hotel a Hotel",
          "text": "¿Necesitas cambiar de un hotel a otro mientras estás en Cancún? Nosotros le ayudamos con este transporte de Hotel a Hotel."
        },
        "hotelToRestaurant": {
          "title": "De Hotel a Restaurante",
          "text": "Cuando se relaja en sus vacaciones, probablemente lo menos que quiere hacer es conducir, y aún más, ¡si planea beber! Podemos llevarlo a su restaurante y regresar a su hotel."
        },
        "hotelToPark": {
          "title": "Hotel a Parque",
          "text": "¿Vas a visitar Xcaret o Xel Ha? O probablemente Xoximilco o el Museo Maya en Cancún. En Transportación del Aeropuerto de Cancún podemos llevarte a cualquiera de estos parques."
        }
      }
    }
  }
}
```

