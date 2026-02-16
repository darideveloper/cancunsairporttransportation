# Proposal: Reservation Detail Layout

Implement the detailed layout for the Reservation Detail page based on the provided design screenshot.

## Why
The current `/my-reservation-detail` page is a placeholder. Users need a professional and clear view of their reservation data, status, and payment summary to feel confident about their booking.

## What Changes
- **Design System**: Extend `ButtonCta.tsx` with `red` and `redGhost` variants to support high-visibility destructive actions (like "Log out") and status-specific styling.
- **Reuse Components**: Utilize the newly refactored `BookingSummary` component to display the payment summary sidebar, ensuring consistency with the checkout flow.
- **Page Component**: Update `src/components/pages/store/ReservationDetail.astro` with the full layout using these new variants and components.
- **Styling**: Implement a responsive two-column grid for reservation details and payment summary.

## Affected Areas
- `src/components/pages/store/ReservationDetail.astro`
- `src/components/atoms/ButtonCta.tsx`
- `src/messages/en.json`
- `src/messages/es.json`
