# Proposal: Update Reservation Detail Texts

## Problem
The current texts in `ReservationDetail.astro` and `BookingSummary` do not match the desired copy provided by the design/HTML. Specifically, the labels for "From", "To", "Status", and the payment summary description need to be updated to match the latest requirements.

## Solution
Update the localization files (`en.json`, `es.json`) with the correct texts extracted from the provided HTML. Update the `ReservationDetail` component and `BookingSummary` component to use these new texts.

## Implementation Details

### 1. Update Localization Files
Update `src/messages/en.json` and `src/messages/es.json`:

**`pages.reservationDetail`**:
- `heading`: "Reservations data" / "Datos de reservación"
- `user.statusLabel`: "Status of your reservation" / "Estatus de tu reservación"
- `updatePayment.text`: Update Spanish to "Si ya ha realizado el pago y aún no se ha reflejado, haga clic en el botón para actualizar"
- `details.from`: "From" / "Desde" (remove colon)
- `details.to`: "To" / "Hacia" (remove colon)
- Add `payment.vehicleDescription`: "X {count} private transportation services" / "X {count} servicios de transportación privada"

### 2. Update `BookingSummary.tsx`
- Add an optional `customDescription` prop (string).
- If `customDescription` is provided, render it instead of the default `vehicleDescription`.

### 3. Update `ReservationDetail.astro`
- Pass `customDescription` to `BookingSummary` using the new `pages.reservationDetail.payment.vehicleDescription` key.
- Ensure other keys are used correctly (they map 1:1 generally, just value changes).

## Risks
- Affecting `RegisterForm` if `BookingSummary` default behavior is changed (it won't be, as we use an optional prop).
- Text alignment/layout might change slightly due to text length (minimal risk).
