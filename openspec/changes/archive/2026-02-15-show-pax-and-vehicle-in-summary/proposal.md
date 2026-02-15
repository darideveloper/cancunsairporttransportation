# Proposal: Show Passenger and Vehicle Info in Booking Summary

Show selected passenger count and vehicle type next to the icon in the `BookingSummary` component.

## Why

To provide users with more accurate feedback about their selection in the booking summary, showing both the passenger count and the vehicle capacity.

## What Changes

- Modify `BookingSummary.tsx` to include `passengers` count from store.
- Update i18n keys to include placeholders for `count`, `vehicleName`, and `maxPassengers`.

## User Review Required

> [!IMPORTANT]
> The text will be formatted as "X {passengers} {vehicleName} with capacity for up to {maxPassengers} passengers" (or its Spanish equivalent).

## Proposed Changes

### Summary
Update `BookingSummary.tsx` to display dynamic data from Zustand and static vehicle data.

### Components

#### [BookingSummary.tsx](../../../src/components/molecules/booking/BookingSummary.tsx) MODIFIED
- Import `passengers` from `useSearchFormStore`.
- Update the text span to use the `booking.summary.vehicleDescription` translation with the dynamic `passengers` count.

### Translations

#### [en.json](../../../src/messages/en.json) MODIFIED
- Ensure `booking.summary.vehicleDescription` matches the requirement: `"X {count} {vehicleName} with capacity for up to {maxPassengers} passengers"`.

#### [es.json](../../../src/messages/es.json) MODIFIED
- Ensure `booking.summary.vehicleDescription` matches the requirement: `"X {count} {vehicleName} con capacidad de hasta {maxPassengers} pasajeros"`.

## High-Level Tasks
1. Update translations in `en.json` and `es.json`.
2. Update `BookingSummary.tsx` to fetch `passengers` and apply the translation.
