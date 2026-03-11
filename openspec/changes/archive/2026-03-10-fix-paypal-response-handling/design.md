# Design: PayPal Response Field Support

The backend responds with the PayPal Order ID inside a nested `payment_data.url` property when `payment_method` is `paypal` or `credit_card`. The current frontend logic only checks for a root-level `paypal_id` or `payment_link`.

## Changes

### 1. Update `ReservationResponse` Type
The interface must be updated to include the `payment_data` object.

```typescript
// src/lib/transportation/legacy-api.types.ts
export interface ReservationResponse {
  reservation_id?: string;
  paypal_id?: string;
  uuid?: string;
  payment_link?: string;
  payment_data?: {
    url: string;
  };
  // ... other properties
}
```

### 2. Update `handleSubmit` in `BookingSubmission.tsx`
The logic will be updated to fall back to `payment_data.url` if `paypal_id` is not present.

```typescript
// src/components/organisms/booking/BookingSubmission.tsx

const paypalId = response.paypal_id || response.payment_data?.url;

if (paypalId) {
  setPaypalId(paypalId);
  renderPayPalButtons(paypalId, paymentMethod);
} else if (response.payment_link) {
  window.location.href = response.payment_link;
} else {
  throw new Error("No payment method initialization data received");
}
```

## Trade-offs
- **Minimal Change**: This is a direct fix for the reported issue with minimal logic changes.
- **Support for Both Formats**: Ensures that if the backend ever returns `paypal_id` at the root, it will still work.
