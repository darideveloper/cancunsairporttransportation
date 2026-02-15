# booking-summary Specification

## Purpose
TBD - created by archiving change create-booking-summary-component. Update Purpose after archive.
## Requirements
### Requirement: Booking Summary Component Display

The `BookingSummary` component MUST be implemented to display persistent information about the selected vehicle during the booking process.

#### Scenario: Display Selected Vehicle

Given a selected vehicle in the store (e.g., price: 29.99, currency: "USD", name: "Van", maxPassengers: 8), the component renders:
- A dark card container (`bg-neutral-900`, `rounded-lg`).
- The price formatted as "$29.99 USD" in yellow (`text-yellow-400`, `font-bold`).
- A car icon and descriptive text "X 1 {vehicleName} with capacity for up to {maxPassengers} passengers".
- A checked radio button indicator on the right.

**Component Path**: `src/components/molecules/booking/BookingSummary.tsx`

**Code Structure**:
```tsx
import type { FC } from "react";
import { useSearchFormStore } from "../../../store/search-form";
import { useTranslations } from "../../../lib/i18n/utils";
import { FaCar } from "react-icons/fa";
import clsx from "clsx";

interface BookingSummaryProps {
  lang: "en" | "es";
}

export default function BookingSummary({ lang }: BookingSummaryProps) {
  const { selectedVehicle, currency } = useSearchFormStore();
  const t = useTranslations(lang);

  if (!selectedVehicle) return null;

  const formattedPrice = new Intl.NumberFormat(lang === "es" ? "es-MX" : "en-US", {
    style: "currency",
    currency: currency,
  }).format(selectedVehicle.price);

  return (
    <div className={clsx("flex items-center justify-between rounded-lg bg-neutral-900 p-4 text-white shadow-md")}>
      <div className="flex flex-col gap-1">
        <span className="text-xl font-bold text-yellow-400">
          {formattedPrice} {currency}
        </span>
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <FaCar />
          <span>
            {t("booking.summary.vehicleDescription", {
              vehicleName: selectedVehicle.name,
              maxPassengers: selectedVehicle.maxPassengers,
            })}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="h-5 w-5 rounded-full border-2 border-gray-500 bg-transparent p-0.5">
           <div className="h-full w-full rounded-full bg-gray-500/50" />
        </div>
      </div>
    </div>
  );
}
```

**Translation Updates**:
- `src/messages/en.json`:
  - `booking.summary.vehicleDescription`: "X 1 {vehicleName} with capacity for up to {maxPassengers} passengers"
- `src/messages/es.json`:
  - `booking.summary.vehicleDescription`: "X 1 {vehicleName} con capacidad de hasta {maxPassengers} pasajeros"

### Requirement: Render Booking Summary on Register Page

The `BookingSummary` component MUST be rendered at the bottom of the registration page.

#### Scenario: Register Page Integration

When viewing the registration page:
1.  The `BookingSummary` appears below other form sections.
2.  It uses the current language prop.

**Component Path**: `src/components/pages/store/Register.astro`

### Requirement: Display detailed vehicle and passenger info
The booking summary SHALL display the number of selected passengers, the vehicle name, and the maximum capacity in a specific format.

#### Scenario: Selected 2 passengers for a Van
- **GIVEN** the user has selected 2 passengers in the search form
- **AND** the user has selected a 'Van' vehicle with max capacity of 8
- **WHEN** the `BookingSummary` is rendered
- **THEN** it should display "X 2 Van with capacity for up to 8 passengers" in English
- **AND** it should display "X 2 Van con capacidad de hasta 8 pasajeros" in Spanish

