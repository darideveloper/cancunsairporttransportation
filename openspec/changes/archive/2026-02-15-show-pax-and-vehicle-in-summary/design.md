# Design: Booking Summary UI Enhancement

## Problem Statement
The `BookingSummary` currently shows a generic vehicle description. The user wants to see the selected passenger count and specific vehicle info in a specific format: "X 1 Van with capacity for up to 8 passengers".

## Architecture
- **State Management**: Zustand (`useSearchFormStore`) provides `passengers` and `selectedVehicle`.
- **Translations**: `useTranslations` (i18n) provides the localized string template.

## Data Mapping
- `{count}`: From `state.passengers`.
- `{vehicleName}`: From `state.selectedVehicle.name`.
- `{maxPassengers}`: From `state.selectedVehicle.maxPassengers`.

## User Interface
- Location: `BookingSummary.tsx` inside the `<div className="flex items-center gap-2 text-sm text-gray-300">`.
- Format: `X {passengers} {vehicleName} with capacity for up to {maxPassengers} passengers`.
