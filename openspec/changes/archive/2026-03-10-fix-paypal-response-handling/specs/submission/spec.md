# submission Specification Delta

## MODIFIED Requirements

### Requirement: Booking Submission Component

The application **SHALL** include `src/components/organisms/booking/BookingSubmission.tsx` to handle UI interactions, validation, and redirection.

#### Scenario: User Clicks Submit with Digital Payment
Given the user has selected "card" or "paypal"
When they click "Book Your Trip Now"
Then the component MUST call `createReservation` with the mapped payment method
AND it MUST extract the PayPal ID from either `response.paypal_id` or `response.payment_data.url`
AND it MUST call `renderPayPalButtons` with the extracted ID.

```typescript
// src/components/organisms/booking/BookingSubmission.tsx

const paypalId = response.paypal_id || response.payment_data?.url;

if (paypalId) {
  setPaypalId(paypalId);
  renderPayPalButtons(paypalId, paymentMethod);
}
```
