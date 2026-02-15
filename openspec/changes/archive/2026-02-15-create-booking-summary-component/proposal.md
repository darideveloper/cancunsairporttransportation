# Create Booking Summary Component

## Goal
Implement a `BookingSummary` component to display the selected vehicle's price and capacity details during the booking flow.

## Motivation
Users need clear visual confirmation of their selected service (vehicle type, capacity, and price) as they proceed through the booking steps (e.g., entering arrival information). This component will serve as a persistent summary.

## Summary of Changes
1.  Add new translation keys for the vehicle summary.
2.  Create `src/components/molecules/booking/BookingSummary.tsx`.
3.  The component will subscribe to the `search-form` store to retrieve `selectedVehicle`.
