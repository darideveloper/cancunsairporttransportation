# Proposal: Improve Card Payment Layout

## Why
Currently, when a user selects "Credit / Debit Card" and clicks "Continue," the PayPal SDK renders a card payment button and subsequently an inline form within the `#paypal-button-container`. This form is vertically long and often overflows at the bottom of the registration page, especially on mobile or in the sidebar layout. The presence of the original payment method selection options above the form pushes it further down.

## What Changes
1.  **Shared State**: Move the `paypalId` state from local component state in `BookingSubmission.tsx` to the `useSearchFormStore` to allow other components to react to it.
2.  **Conditional UI in `PaymentMethods`**:
    *   If `paymentMethod === 'card'` AND a `paypalId` is present, hide the title and the list of payment methods.
    *   Display a "Back" button that allows the user to return to the method selection screen.
3.  **Automatic Scrolling**: When the card payment method becomes active (method is 'card' and `paypalId` is present), automatically scroll the window to the `SelectedVehicleCard` summary at the top to ensure the payment form is positioned optimally on the screen.
4.  **Layout Fix**: By hiding the `PaymentMethods` list, the `BookingSubmission` component (and the PayPal container) will shift to the top of its parent container, providing more vertical space for the card form and preventing overflow.

## Design Highlights
- **Architecture**: Move `paypalId` to `useSearchFormStore` for cross-component coordination.
- **Logic**: Implement a "compact view" in `PaymentMethods.tsx` triggered by the presence of a `paypalId`.
- **UI/UX**: Add a "Back" button to reset the payment initialization state.

## Specs
- [MODIFIED] `ui` specification to include requirements for shared state, conditional visibility, and the "Back" button logic.

## Tasks
- Update `SearchFormState` to include `paypalId` and `setPaypalId`.
- Refactor `BookingSubmission.tsx` to use store state.
- Add "Back" button translations.
- Implement conditional rendering and "Back" button in `PaymentMethods.tsx`.
