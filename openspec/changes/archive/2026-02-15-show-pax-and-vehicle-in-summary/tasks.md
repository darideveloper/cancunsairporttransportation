# Tasks

- [x] Update English translation `booking.summary.vehicleDescription` in `src/messages/en.json` to `"X {count} {vehicleName} with capacity for up to {maxPassengers} passengers"`
- [x] Update Spanish translation `booking.summary.vehicleDescription` in `src/messages/es.json` to `"X {count} {vehicleName} con capacidad de hasta {maxPassengers} pasajeros"`
- [x] In `src/components/molecules/booking/BookingSummary.tsx`:
    - Fetch `passengers` from `useSearchFormStore`
    - Update `t("booking.summary.vehicleDescription", ...)` to include `count: String(passengers)`
- [x] Verify the UI in the browser
