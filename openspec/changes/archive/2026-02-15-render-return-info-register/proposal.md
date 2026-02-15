# Proposal: Render Return Information on Register Page

## Why
To improve user trust and clarity by showing the confirmed return details for round-trip bookings during the registration process. This ensures users can review their selected return date and time before completing the booking.

## What Changes
1.  **New Component**: Create `ReturnInformation.tsx` to handle the conditional rendering of return details.
2.  **Internationalization**: Add translations for "Return Information", "Return Date", and "Return Time" in both English and Spanish.
3.  **UI Integration**: Integrate the `ReturnInformation` component into the `Register.astro` page, positioned after the Arrival Information.
