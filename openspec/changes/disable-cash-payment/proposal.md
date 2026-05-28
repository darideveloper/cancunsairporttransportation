## Why

The goal is to fully disable the "Cash on Arrival" payment option to strictly require online payments (PayPal or Card). This ensures that every reservation has a corresponding payment intent or record before being processed as successful, improving security and consistency in the booking flow.

## What Changes

- **UI**: Remove the "Cash" payment method selection card from the booking interface. **BREAKING**
- **Logic**: Remove the branch in the submission logic that allows skipping payment gateways when "cash" is selected. **BREAKING**
- **State & Schema**: Restrict the `paymentMethod` state and its corresponding Zod schema to only allow "paypal" and "card". **BREAKING**

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- `payment-method-components`: Remove "Cash" from the list of selectable payment methods.
- `booking-store`: Update state types and validation schema to exclude "cash".
- `payment-integration-logic`: Remove the dedicated submission flow for cash payments.

## Impact

- **Security**: Hardens the booking process by requiring a valid payment gateway response.
- **Components**: `PaymentMethods.tsx` and `BookingSubmission.tsx` will be modified.
- **State**: `src/store/search-form.ts` will have type and schema changes.
- **User Experience**: Users will no longer see or be able to select the "Cash on Arrival" option.
