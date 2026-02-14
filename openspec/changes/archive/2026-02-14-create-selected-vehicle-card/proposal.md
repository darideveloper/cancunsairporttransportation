# Create Selected Vehicle Summary Card

## Why
Users need to see a summary of the vehicle they selected, along with their trip details (origin, destination, passengers), to confirm their choice before proceeding with registration or payment. This component will serve as a reusable summary card.

## What Changes
- Create a new component `SelectedVehicleCard` in `src/components/organisms/`.
- The component will consume `useSearchFormStore` directly to retrieve vehicle and trip data.
- It will only accept `lang` as a prop.
- Integration of `react-icons` for visual cues (passengers, location, trip type).
- Add new translation keys to `src/messages/en.json` and `src/messages/es.json` under `global.booking.summary`.

## Risks
- Low risk. Purely additive UI component.
