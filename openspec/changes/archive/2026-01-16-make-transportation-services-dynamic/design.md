# Design: Dynamic Transportation Services

## Architecture
The component will follow the "Hybrid Translation" pattern already used in `PricingSection.astro`.

### Data Flow
1. `page` prop is passed to `TransportationServices.astro`.
2. Component fetches global configuration (card titles and icon mapping).
3. Component fetches page-specific content (section title, optional description, card descriptions).
4. Component merges these data sources and renders `InfoIconCard` instances.

### Translation Schema
```json
{
  "pages": {
    "home": {
      "transportationServices": {
        "title": "...",
        "description": "...",
        "items": {
          "airportToHotel": { "text": "..." },
          "hotelToHotel": { "text": "..." },
          "hotelToRestaurant": { "text": "..." },
          "hotelToPark": { "text": "..." }
        }
      }
    }
  }
}
```

### Components
- `TransportationServices.astro`: Reacts to the `page` prop.
- `InfoIconCard.astro`: (No changes expected, just receives props).
