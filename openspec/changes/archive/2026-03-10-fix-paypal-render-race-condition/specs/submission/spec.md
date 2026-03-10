# submission Specification Delta (Race Condition Fix)

## MODIFIED Requirements

### Requirement: Booking Submission Component

The application **SHALL** include `src/components/organisms/booking/BookingSubmission.tsx` to handle UI interactions, validation, and redirection.

#### Scenario: User Clicks Submit with Digital Payment (Corrected Flow)
Given the user has selected "card" or "paypal"
When they click "Book Your Trip Now"
Then the component MUST call `createReservation` with the mapped payment method
AND it MUST extract the PayPal ID from either `response.paypal_id` or `response.payment_data.url`
AND it MUST NOT call `renderPayPalButtons` directly in the `handleSubmit` function.
AND it MUST call `renderPayPalButtons` only after React has updated the DOM with the `#paypal-button-container` element.

```typescript
// src/components/organisms/booking/BookingSubmission.tsx

// 1. setPaypalId triggered after API call
if (paypalId) {
  setPaypalId(paypalId);
}

// 2. renderPayPalButtons called via useEffect ONLY after paypalId is set and DOM is updated
useEffect(() => {
  if (paypalId && paymentMethod) {
    const container = document.getElementById("paypal-button-container");
    if (container) {
      renderPayPalButtons(paypalId, paymentMethod);
    }
  }
}, [paypalId, paymentMethod]);
```
