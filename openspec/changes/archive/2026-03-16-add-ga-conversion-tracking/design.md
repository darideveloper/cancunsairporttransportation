# Design: Google Analytics Integration

Define the architecture and patterns for integrating Google Analytics and conversion tracking.

## Architecture
- **Global Provider**: GA must be initialized once in the root `<head>` to avoid double-firing or script missing on navigation.
- **Client-Side Trigger**: Conversion tracking is a client-side responsibility, as it relies on:
  1. The browser's navigation state (arriving at the success page).
  2. The browser's local storage (accessing the specific booking details like price).

## Technical Implementation Details

### Initialization
The GA tag (`AW-18013613191`) will be added to `Layout.astro`. To ensure availability across navigations without re-loading the script, it will be placed outside of any transition-sensitive blocks but inside the `<head>`.

### Data Flow for Conversions
1. **Source of Truth**: The `useSearchFormStore` (Zustand) contains the `selectedVehicle.price`, `currency`, and `reservationId` from the booking session.
2. **Validation**: The script will verify that the URL's `?code=...` matches the store's `reservationId` before firing. This prevents tracking historical bookings when a user visits the page through an old link.
3. **Event Timing**: Since Astro uses `<ClientRouter />`, scripts must listen for `astro:page-load` to execute correctly after navigation.

## Trade-offs
- **Store Reliance**: If a user clears their cache during the booking process, the conversion value will fallback to a default (1.0). This is a known trade-off of client-side tracking but avoids the complexity of an extra server-side lookup for every visitor.
- **Privacy**: No PII (Personally Identifiable Information) like names or emails will be sent to Google Analytics.

## Edge Cases
- **Duplicate Firing**: GA's `transaction_id` helps with deduplication, but we will also ensure the script only fires once per session on the Thank You page.
- **Missing Script**: The tracking logic will check for the existence of `window.gtag` before execution to prevent errors.
