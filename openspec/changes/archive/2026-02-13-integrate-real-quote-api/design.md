# API Integration Design

## Overview
The goal is to bridge the gap between the frontend state (`SearchFormStore`) and the backend API (`/api/legacy/quote/`), then transform the backend response into the frontend component props (`VehicleBuyCardProps`).

## Data Flow
1. **Trigger**: `VehicleBuyCards` component mounts and calls `getVehicles(lang)`.
2. **Input Gathering**: 
   - `getVehicles` accesses `useSearchFormStore.getState()` to retrieve trip details (locations, dates, passengers).
   - `lang` argument provides the language context.
3. **API Request**:
   - Helper function `buildQuotePayload(state, lang)` constructs the JSON body.
   - `fetch` request sent to `${import.meta.env.PUBLIC_API_BASE}/legacy/quote/`.
   - Note: `.env` `PUBLIC_API_BASE` includes `/api` suffix. So full URL is `.../api/legacy/quote/`.
4. **Response Handling**:
   - **Success (200)**: Response implementation parsed.
     - `items` array mapped using a configuration object to add missing UI fields (description, features list, rating) usually static for vehicle types.
   - **Error (404/500)**: Throws error to be caught by component state handling.
   - **No Availability (404)**: Specifically checks for `error.code === "availability"` in response body (if 404 returns body) and returns empty array to trigger `NoAvailability` component.

## Data Mapping Strategy
Since the API response lacks some UI-specific fields (description, features list, rating), we will implement a mapping layer keyed by **vehicle ID** using a static data file `src/data/vehicle-features.ts`.

### Static Data Structure (`src/data/vehicle-features.ts`)
```typescript
export const vehicleFeatures = {
  vehicles: {
    "1": {
      name: "Private Standard",
      rating: "5/5",
      features: {
        en: {
          description: "Travel comfortably in a fully equipped private service for up to {pax} passengers. The service is private, with no waiting time or continuous stops.",
          items: [
            "Private Service",
            "Includes airport taxes and traveler's insurance",
            "This service is available every day 24/7",
            "Courtesy stop at convenience store on the route"
          ]
        },
        es: {
          description: "Viaje cómodamente en un servicio totalmente privado, equipado, para hasta {pax} pasajeros. El servicio es privado, sin tiempo de espera, ni paradas continuas.",
          "items": [
            "Servicio Privado",
            "Incluye impuestos del Aeropuerto y Seguro de Viajero",
            "Este servicio esta disponible todos los días 24/7",
            "Parada de cortesía en tienda de conveniencia en el camino"
          ]
        }
      }
    },
    "4": {
      name: "Private Standard (Same as ID 1)",
      rating: "5/5",
      features: {
        en: {
          description: "Travel comfortably in a fully equipped private service for up to {pax} passengers. The service is private, with no waiting time or continuous stops.",
          items: [
            "Private Service",
            "Includes airport taxes and traveler's insurance",
            "This service is available every day 24/7",
            "Courtesy stop at convenience store on the route"
          ]
        },
        es: {
          description: "Viaje cómodamente en un servicio totalmente privado, equipado, para hasta {pax} pasajeros. El servicio es privado, sin tiempo de espera, ni paradas continuas.",
          items: [
            "Servicio Privado",
            "Incluye impuestos del Aeropuerto y Seguro de Viajero",
            "Este servicio esta disponible todos los días 24/7",
            "Parada de cortesía en tienda de conveniencia en el camino"
          ]
        }
      }
    },
    "2": {
      name: "Luxury Suburban",
      rating: "5/5",
      features: {
        en: {
          description: "Travel in a luxury Suburban. Ideal for small groups, couples or families up to 5 people. Fully equipped, the best option for your transfer from the airport to your hotel.",
          items: [
            "Includes airport taxes and insurance",
            "Private service, no waiting time, no continuous stops.",
            "Includes a free child seat, when requested",
            "Vehicle subject to availability",
            "Courtesy stop at convenience store on the way"
          ]
        },
        es: {
          description: "Viaje en una Suburban de lujo. Ideal para grupos pequeños, parejas o familias de hasta 5 personas. Totalmente equipada, la mejor opción para su traslado de aeropuerto a su hotel.",
          items: [
            "Incluye impuestos del Aeropuerto y Seguros",
            "Servicio Privado, sin tiempos de espera, ni paradas continuas",
            "Incluye una silla para niños gratis, cuando es solicitada",
            "Vehículo sujeto a disponibilidad",
            "Parada de cortesía en tienda de conveniencia en el camino"
          ]
        }
      }
    },
    "3": {
      name: "Group Van",
      rating: "5/5",
      features: {
        en: {
          description: "Travel in a Crafter Ideal for large groups, couples or families up to 15 people. Fully equipped, the best option for your transfer from the airport to your hotel.",
          items: [
            "Includes airport taxes and insurance",
            "Private service, no waiting time, no continuous stops.",
            "Includes a free child seat, when requested",
            "Service available every day, 24/7",
            "Courtesy stop at convenience store on the way"
          ]
        },
        es: {
          description: "Viaje en una Crafter Ideal para grupos grandes, parejas o familias de hasta 15 personas. Totalmente equipada, la mejor opción para su traslado de aeropuerto a su hotel.",
          items: [
            "Incluye impuestos del Aeropuerto y Seguros",
            "Servicio Privado, sin tiempos de espera, ni paradas continuas",
            "Incluye una silla para niños gratis, cuando es solicitada",
            "Servicio disponible todos los días, 24/7",
            "Parada de cortesía en tienda de conveniencia en el camino"
          ]
        }
      }
    }
  }
};
```

### Input Mapping
| Frontend State | API Field | Format/Notes |
|----------------|-----------|--------------|
| `tripType`     | `type`    | `oneWay` -> `one-way`, `roundTrip` -> `round-trip` |
| `lang`         | `language`| - |
| `passengers`   | `passengers` | - |
| `currency`     | `currency`| - |
| `locationFrom` | `start`   | structure: `{ place, lat, lng, pickup: "YYYY-MM-DD HH:mm" }` |
| `locationTo`   | `end`     | structure: `{ place, lat, lng }` |

### Output Mapping & Enrichment
| API Field | Component Prop | Notes |
|-----------|----------------|-------|
| `image`   | `vehicleImage` | - |
| `name`    | `vehicleName`  | - |
| `passengers`| `maxPassengers`| - |
| `luggage` | `maxLuggage`   | - |
| `price`   | `price`        | Parse string to number |
| `currency`| `currencyCode` | - |
| (missing) | `formattedPrice`| computed via existing `getFormattedPrice` |
| **Data File** | `description`  | lookup via `vehicleFeatures.vehicles[id].features[lang].description`. **Note**: supports `{pax}` interpolation. |
| **Data File** | `items`        | lookup via `vehicleFeatures.vehicles[id].features[lang].items` |
| **Data File** | `rating`       | lookup via `vehicleFeatures.vehicles[id].rating` |
