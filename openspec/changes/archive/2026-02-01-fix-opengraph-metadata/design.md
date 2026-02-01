# Design

## Content Strategy

### English (en.json)
-   **Title**: `Cancun Airport Transportation | Private & Shuttle Transfers` (59 chars)
-   **Description**: `Book reliable Cancun Airport Transportation to Cancun Hotel Zone, Playa del Carmen, Tulum & Riviera Maya. Private shuttles, taxis & VIP options available 24/7.` (159 chars)

### Spanish (es.json)
-   **Title**: `Transporte Aeropuerto Cancún | Traslados Privados y Shuttles` (60 chars)
-   **Description**: `Reserve transporte seguro en el Aeropuerto de Cancún hacia Zona Hotelera, Playa del Carmen y Tulum. Taxis privados y shuttles disponibles 24/7.` (145 chars)

## Technical Implementation

### `site-config.ts`
Add `ogImage` property pointing to `/og-image.jpg`.

### `BaseSEO.astro`
Logic update:
```typescript
const socialImage = ogImage || BUSINESS_DATA.ogImage || BUSINESS_DATA.logo;
```
