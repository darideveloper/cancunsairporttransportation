# UI Specification: PayPal SDK Integration
## ADDED Requirements



### Requirement: Update `BookingSubmission` handle submit
The `BookingSubmission` component SHALL handle `paypal` and `card` payment methods by initializing the PayPal SDK buttons instead of immediate redirection.

#### Scenario: `BookingSubmission` handles `paypal` and `card` methods
- GIVEN the user selects `paypal` or `card`
- WHEN they click "Submit"
- THEN `createReservation` is called with the corresponding payment method
- AND if a `paypal_id` is received, the PayPal SDK buttons are rendered in `#paypal-button-container`
- AND the "Submit" button is hidden.

### Requirement: SDK `onApprove` calls capture
The frontend SHALL call the `capturePayment` endpoint after the user approves the payment via the PayPal SDK interface.

#### Scenario: PayPal approval triggers capture
- GIVEN the user approves the payment in the SDK UI
- WHEN the `onApprove` callback is executed
- THEN it must call `capturePayment` with the `orderID`
- AND if successful, redirect to the success page.



### Requirement: PayPal JS SDK Script Injection
The `Register.astro` page SHALL include the PayPal JS SDK script tag with the appropriate `client-id` and `currency`.

#### Scenario: SDK script in `Register.astro`
- GIVEN the `Register.astro` layout
- WHEN the page is rendered
- THEN it must include the `<script>` for the PayPal SDK with `client-id` and `currency=USD`
