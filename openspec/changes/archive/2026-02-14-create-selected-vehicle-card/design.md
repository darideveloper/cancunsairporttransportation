# Design: Selected Vehicle Card

## Component Structure

The component will be a functional React component `SelectedVehicleCard` located in `src/components/organisms/`.

### Props Interface

```typescript
export interface SelectedVehicleCardProps {
  lang: "en" | "es";
}
```

### Data Integration (Store Connection)

The component is responsible for retrieving all necessary data from the Zustand store internally:

```typescript
import { useSearchFormStore } from "../../store/search-form";

export default function SelectedVehicleCard({ lang }: SelectedVehicleCardProps) {
  const { 
    selectedVehicle, 
    locationFrom, 
    locationTo, 
    passengers, 
    tripType 
  } = useSearchFormStore();

  if (!selectedVehicle) return null; // Or render a placeholder / redirect logic

  // Render logic...
}
```

### Layout

- **Container**: Flexbox, `bg-white`, `rounded-lg`, `shadow-sm`, `p-4`, `items-center`.
- **Image**: Left side, `w-32` or similar, `object-contain`.
- **Content**: Flex column, `ml-4`, `flex-1`.
  - **Header**: Flex row, `justify-between` or `justify-end`?
    - The design shows Name left-ish but aligned right of image?
    - Actually looks like: `[Image] [Title + Capacity]` row 1
    - `[Image] [Details Row]` row 2
    - Or better: `Flex Row` -> `[Image]` `[col: Header, Details]`
  - **Header**: `text-xl font-bold`, with `text-gray-600` for capacity.
  - **Details Row**:
    - Flex row, `gap-4`, `text-sm`, `text-gray-500`.
    - Items:
      - Icon + `Passengers: {n}`
      - Icon + `Origin: {loc}`
      - Icon + `Destination: {loc}`
      - Icon + `{TripType}`

### Translations

New keys in `global.booking.summary`:

```json
"summary": {
  "capacity": "Capacity {maxPassengers} passengers.",
  "passengers": "Passengers: {count}",
  "origin": "Origin: {location}",
  "destination": "Destination: {location}"
}
```

Spanish:
```json
"summary": {
  "capacity": "Capacidad {maxPassengers} pasajeros.",
  "passengers": "Pasajeros: {count}",
  "origin": "Origen: {location}",
  "destination": "Destino: {location}"
}
```

### Icons
- User: `FaUser` (from `react-icons/fa`)
- Location: `FaMapMarkerAlt`
- Trip Type: `FaThumbsUp` (as seen in image) or `FaExchangeAlt` (more standard? Image shows thumbs up, so use `FaThumbsUp` or similar). Let's stick to `FaThumbsUp` if that's what the design mandates, or maybe it's just a generic icon. The image description says "Thumbs Up".

### Location
`src/components/organisms/SelectedVehicleCard.tsx`
