# Design: Arrival Information Component

## UI/UX
The `ArrivalInformation` component is a form section designed to capture flight details while displaying confirmed pickup information.

### Layout
-   **Heading**: `H2` component with `text-gray-900`.
-   **Structure**: Responsive Grid.
    -   Mobile: Stacked inputs.
    -   Desktop: 4 columns `grid-cols-1 md:grid-cols-4 gap-4`.
-   **Inputs**:
    -   Using `Input` from `src/components/atoms/form/Input.tsx`.
    -   Read-only fields use `bg-gray-100/50 cursor-not-allowed text-gray-700`.

## Component Implementation

### `ArrivalInformation.tsx`

```tsx
import React from 'react';
import { useSearchFormStore } from '../../../store/search-form';
import Input from '../../atoms/form/Input';
import H2 from '../../atoms/H2';

interface ArrivalInformationProps {
  title: string; // "Arrival information"
  pickupDateLabel: string; // "Pick-up date"
  pickupTimeLabel: string; // "Pick-up time"
  airlineLabel: string; // "Airline"
  airlinePlaceholder: string; // "What is your airline?"
  flightNumberLabel: string; // "Flight number"
  flightNumberPlaceholder: string; // "What is your flight number?"
}

export default function ArrivalInformation({
  title,
  pickupDateLabel,
  pickupTimeLabel,
  airlineLabel,
  airlinePlaceholder,
  flightNumberLabel,
  flightNumberPlaceholder,
}: ArrivalInformationProps) {
  const {
    departureDate,
    departureTime,
    airline,
    flightNumber,
    setAirline,
    setFlightNumber
  } = useSearchFormStore();

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <H2 className="text-gray-900">{title}</H2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Input
          label={pickupDateLabel}
          name="pickupDate"
          value={departureDate}
          readOnly
          className="bg-gray-100/50 cursor-not-allowed text-gray-700"
        />

        <Input
          label={pickupTimeLabel}
          name="pickupTime"
          value={departureTime}
          readOnly
          className="bg-gray-100/50 cursor-not-allowed text-gray-700"
        />

        <Input
          label={airlineLabel}
          name="airline"
          value={airline}
          placeholder={airlinePlaceholder}
          onChange={(e) => setAirline(e.target.value)}
        />

        <Input
          label={flightNumberLabel}
          name="flightNumber"
          value={flightNumber}
          placeholder={flightNumberPlaceholder}
          onChange={(e) => setFlightNumber(e.target.value)}
        />
      </div>
    </div>
  );
}
```

## Translations

### English (`en.json`)
```json
"pages": {
  "register": {
    "arrivalInformation": {
      "title": "Arrival information",
      "pickupDate": "Pick-up date",
      "pickupTime": "Pick-up time",
      "airline": "Airline",
      "airlinePlaceholder": "What is your airline?",
      "flightNumber": "Flight number",
      "flightNumberPlaceholder": "What is your flight number?"
    }
  }
}
```

### Spanish (`es.json`)
```json
"pages": {
  "register": {
    "arrivalInformation": {
      "title": "Información de llegada",
      "pickupDate": "Fecha de recogida",
      "pickupTime": "Hora de recogida",
      "airline": "Aerolínea",
      "airlinePlaceholder": "¿Cuál es tu aerolínea?",
      "flightNumber": "Número de vuelo",
      "flightNumberPlaceholder": "¿Cuál es tu número de vuelo?"
    }
  }
}
```

## Integration in `Register.astro`

```astro
// ... imports
import ArrivalInformation from '../../molecules/ArrivalInformation';

// ... usage
<ArrivalInformation
  client:load
  title={t("pages.register.arrivalInformation.title")}
  pickupDateLabel={t("pages.register.arrivalInformation.pickupDate")}
  pickupTimeLabel={t("pages.register.arrivalInformation.pickupTime")}
  airlineLabel={t("pages.register.arrivalInformation.airline")}
  airlinePlaceholder={t("pages.register.arrivalInformation.airlinePlaceholder")}
  flightNumberLabel={t("pages.register.arrivalInformation.flightNumber")}
  flightNumberPlaceholder={t("pages.register.arrivalInformation.flightNumberPlaceholder")}
/>
```
