# Proposal: Create Arrival Information Component

## Summary
Create a new `ArrivalInformation` React component for the `Register` page. This component will capture the user's flight details (Airline and Flight Number) and display read-only pickup information (Date and Time) sourced from the global store.

## Motivation
To complete the registration and booking process, we need to collect flight arrival details from the user. This ensures smooth pickup coordination. The component must also confirm the pickup schedule to the user.

## Proposed Solution

### 1. New Component: `src/components/molecules/ArrivalInformation.tsx`

This will be a React component that integrates with the Zustand store and uses the existing `Input` atom for consistent styling.

**Component Interface:**

```typescript
// src/components/molecules/ArrivalInformation.tsx
import { useSearchFormStore } from "../../store/search-form";
import { useTranslations } from "../../lib/i18n/utils";
import Input from "../atoms/form/Input";
import H2 from "../atoms/H2";
import { FaPlane, FaCalendarAlt, FaClock } from "react-icons/fa";

export interface ArrivalInformationProps {
  lang: "en" | "es";
}

export default function ArrivalInformation({ lang }: ArrivalInformationProps) {
  const {
    departureDate,
    departureTime,
    airline,
    flightNumber,
    setAirline,
    setFlightNumber,
  } = useSearchFormStore();

  const t = useTranslations(lang);

  return (
    <div className="space-y-6">
      <H2 className="text-gray-900">
        {t("pages.register.arrivalInformation.title")}
      </H2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pick-up Date (Read-only) */}
        <Input
          label={t("pages.register.arrivalInformation.pickupDate")}
          name="pickupDate"
          value={departureDate}
          readOnly
          disabled
          icon={FaCalendarAlt}
          className="bg-gray-100 cursor-not-allowed"
        />

        {/* Pick-up Time (Read-only) */}
        <Input
          label={t("pages.register.arrivalInformation.pickupTime")}
          name="pickupTime"
          value={departureTime}
          readOnly
          disabled
          icon={FaClock}
          className="bg-gray-100 cursor-not-allowed"
        />

        {/* Airline (Editable) */}
        <Input
          label={t("pages.register.arrivalInformation.airline")}
          name="airline"
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
          placeholder={t("pages.register.arrivalInformation.airlinePlaceholder")}
          icon={FaPlane}
          required
        />

        {/* Flight Number (Editable) */}
        <Input
          label={t("pages.register.arrivalInformation.flightNumber")}
          name="flightNumber"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          placeholder={t("pages.register.arrivalInformation.flightNumberPlaceholder")}
          icon={FaPlane}
          required
        />
      </div>
    </div>
  );
}
```

### 2. State Integration

The component will use the existing Zustand store (`src/store/search-form.ts`):

**Read-only fields (from store):**
- `departureDate: string` (line 29)
- `departureTime: string` (line 30)

**Editable fields (read/write to store):**
- `airline: string` (line 35) - via `setAirline` (line 47)
- `flightNumber: string` (line 36) - via `setFlightNumber` (line 48)

### 3. Translation Keys

Add the following keys to `src/messages/en.json` under `pages.register`:

```json
"register": {
  "title": "Register | Cancun Airport Transportation",
  "description": "Create an account with Cancun Airport Transportation to manage your bookings and access exclusive offers.",
  "keywords": "register cancun transportation, create account cancun airport shuttle",
  "arrivalInformation": {
    "title": "Arrival Information",
    "pickupDate": "Pick-up Date",
    "pickupTime": "Pick-up Time",
    "airline": "Airline",
    "flightNumber": "Flight Number",
    "airlinePlaceholder": "What is your airline?",
    "flightNumberPlaceholder": "What is your flight number?"
  }
}
```

Add Spanish translations to `src/messages/es.json`:

```json
"register": {
  "title": "Registro | Cancun Airport Transportation",
  "description": "Crea una cuenta con Cancun Airport Transportation para gestionar tus reservas y acceder a ofertas exclusivas.",
  "keywords": "registro transporte cancun, crear cuenta traslado aeropuerto cancun",
  "arrivalInformation": {
    "title": "Información de Llegada",
    "pickupDate": "Fecha de Recogida",
    "pickupTime": "Hora de Recogida",
    "airline": "Aerolínea",
    "flightNumber": "Número de Vuelo",
    "airlinePlaceholder": "¿Cuál es tu aerolínea?",
    "flightNumberPlaceholder": "¿Cuál es tu número de vuelo?"
  }
}
```

### 4. Page Integration

Update `src/components/pages/store/Register.astro` to include the component:

```astro
---
// ... existing imports
import ArrivalInformation from "../../molecules/ArrivalInformation";
---

<Layout pageKey={pageKey}>
  <PageSEO currentPage="register" slot="seo" />

  <div class="container py-24">
    <!-- ... existing content -->

    <!-- Add Arrival Information Component -->
    <div class="mt-12 flex justify-center">
      <div class="w-full max-w-4xl">
        <ArrivalInformation lang={lang} client:load />
      </div>
    </div>
  </div>
</Layout>
```

## Input Fields Specification

| Field | Type | State | Styling | Icon |
|-------|------|-------|---------|------|
| Pick-up Date | text | Read-only | `bg-gray-100 cursor-not-allowed` | `FaCalendarAlt` |
| Pick-up Time | text | Read-only | `bg-gray-100 cursor-not-allowed` | `FaClock` |
| Airline | text | Editable | Standard Input styling | `FaPlane` |
| Flight Number | text | Editable | Standard Input styling | `FaPlane` |

## Dependencies

- **Existing Components:** `src/components/atoms/form/Input.tsx` (verified to exist)
- **Existing Store:** `src/store/search-form.ts` (verified fields exist)
- **Icons:** `react-icons/fa` (already installed and in use)
- **Utilities:** `useTranslations` from `src/lib/i18n/utils.ts`

## Files to Create/Modify

1. **CREATE:** `src/components/molecules/ArrivalInformation.tsx`
2. **MODIFY:** `src/messages/en.json` (add translation keys)
3. **MODIFY:** `src/messages/es.json` (add translation keys)
4. **MODIFY:** `src/components/pages/store/Register.astro` (integrate component)

## Success Criteria

- [ ] Component renders with correct layout (2-column grid on desktop, 1-column on mobile)
- [ ] Read-only fields display data from Zustand store with gray background
- [ ] Editable fields update Zustand store on change
- [ ] All fields have appropriate icons
- [ ] Translations work for both English and Spanish
- [ ] Component is responsive and accessible

