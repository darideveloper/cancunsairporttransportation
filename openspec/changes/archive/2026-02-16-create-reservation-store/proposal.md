# Proposal: Create Reservation Store

## Overview
Implement a client-side store using Zustand to persist reservation query data (code and email) and integrate it with the `Reservation.astro` page.

## Motivation
Currently, the reservation query form in `Reservation.astro` does not persist user input in the client-side state. By introducing a Zustand store, we can:
- Persist user input across sessions.
- Facilitate data sharing between the query page and the detail page.
- Enable a more dynamic and reactive user interface for reservation management.

## Scope
- Create a new Zustand store `useReservationStore` in `src/store/reservation.ts`.
- Create a new React component `ReservationForm.tsx` to handle the form logic and store integration.
- Update `Reservation.astro` to use the new `ReservationForm.tsx`.
- Ensure the store persists to `localStorage`.

## Out of Scope
- Implementing the actual API call to fetch reservation details (this is part of a different effort).
- Styling changes to the existing reservation page beyond structural integration.

## Deliverables
- `src/store/reservation.ts`: The new Zustand store.
- `src/components/organisms/store/ReservationForm.tsx`: New interactive form component.
- `src/components/pages/store/Reservation.astro`: Updated to use the new form.
- Spec deltas and tasks for implementation.
