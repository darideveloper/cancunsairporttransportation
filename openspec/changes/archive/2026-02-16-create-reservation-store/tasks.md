# Tasks: Create Reservation Store

## Setup
1. [x] Create the Zustand store file `src/store/reservation.ts`
   - Implement `ReservationState` interface.
   - Use `persist` middleware with name `reservation-storage`.
   - Add `setCode`, `setEmail`, and `reset` actions.

## Components
2. [x] Create `src/components/organisms/store/ReservationForm.tsx`
   - Use `useReservationStore` to bind `code` and `email` to input fields.
   - Implement `handleSubmit` to handle form submission (preventing default if necessary for store sync).
   - Use existing `Input` and `ButtonCta` components from `src/components/atoms/`.
   - Ensure translations are handled via props passed from the Astro parent.

## Integration
3. [x] Update `src/components/pages/store/Reservation.astro`
   - Replace the static HTML form with the `ReservationForm` React component.
   - Pass necessary translations and props to the `ReservationForm`.
   - Ensure `client:load` is used to enable interactivity.

## Validation
4. [x] Verify store persistence
   - Enter values in the form, refresh the page, and ensure they remain.
5. [x] Verify build and lint
   - Run `npm run build` and ensure no errors related to the new store or components.
