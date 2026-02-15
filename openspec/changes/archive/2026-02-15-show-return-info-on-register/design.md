# Design: Show Return Information on Register Page

## Component Architecture

### `ReturnInformation.tsx` (New)
A functional React component that:
- Connects to `useSearchFormStore`.
- Reads `returnDate`, `returnTime`, and `tripType`.
- Renders only if `tripType === 'roundTrip'`.
- Displays two read-only `Input` fields for Date and Time.
- Follows the grid layout of `ArrivalInformation.tsx`.

### `Register.astro` (Modified)
- Import `ReturnInformation`.
- Render `<ReturnInformation client:load lang={lang} />` after `ArrivalInformation`.

## Localization
New keys in `pages.register.returnInformation`:
- `title`: "Return Information" / "Información de Regreso"
- `returnDate`: "Return Date" / "Fecha de Regreso"
- `returnTime`: "Return Time" / "Hora de Regreso"
