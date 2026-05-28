## Why

The current "Cash on Arrival" payment option allows users to skip online payment gateways and successfully book transportation. To ensure payment security, prevent fraudulent/manual state manipulation, and require all reservations to be secured via online payment (PayPal or Credit Card), the cash option must be fully removed.

## What Changes

- **UI**: Remove "Pay in Cash" option from the payment method selection UI in the checkout booking form.
- **Logic**: Remove the submission logic branch in `BookingSubmission.tsx` that bypasses payment capture and proceeds directly to thank-you pages.
- **State/Types**: Restrict the `paymentMethod` type in the search form store to only accept `"card"` or `"paypal"`.
- **Security Validation**: Update the frontend registration schema (`bookingRegistrationSchema`) to validate and restrict the payment method strictly to `"card"` and `"paypal"`.

## Capabilities

### New Capabilities
<!-- Capabilities being introduced. Replace <name> with kebab-case identifier (e.g., user-auth, data-export, api-rate-limiting). Each creates specs/<name>/spec.md -->

### Modified Capabilities
<!-- Existing capabilities whose REQUIREMENTS are changing (not just implementation).
     Only list here if spec-level behavior changes. Each needs a delta spec file.
     Use existing spec names from openspec/specs/. Leave empty if no requirement changes.
-->
- `payment-ui-v2`: Remove the cash option representation and selection behavior from the payment methods UI component.
- `payment-integration-logic`: Remove the cash payment bypass submission handling and ensure all bookings require online payment integration.
- `booking-store`: Restrict the `paymentMethod` state and its schema to exclude "cash" as a valid payment option.

## Impact

- **Affected UI**: `src/components/molecules/booking/PaymentMethods.tsx`
- **Affected Submission Flow**: `src/components/organisms/booking/BookingSubmission.tsx`
- **Affected State & Types**: `src/store/search-form.ts`
