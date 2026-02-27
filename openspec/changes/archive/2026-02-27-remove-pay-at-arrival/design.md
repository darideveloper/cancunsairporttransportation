# Design: Remove `pay_at_arrival` from Reservation Submission

## Overview
This change aims to simplify the API request payload by removing `pay_at_arrival`. Since all current payments are handled online via Stripe or PayPal, this field is always set to `0` in practice. To maintain forward compatibility and ease of future re-integration, the code and type definitions will retain the field as a commented-out section rather than being deleted entirely from the codebase.

## Key Changes

### 1. Payload Structure
The `CreateReservationPayload` interface will have `pay_at_arrival` commented out:
```typescript
export interface CreateReservationPayload {
  // ...
  // pay_at_arrival?: number; // 1 for true (Commented out until cash payments are supported)
  // ...
}
```

### 2. Submission Implementation
In `BookingSubmission.tsx`, the logic that calculated `pay_at_arrival` based on the payment method will be removed from the active payload object but kept as a comment for future reference.

```typescript
const payload = {
  service_token: selectedVehicle!.token,
  // ...
  // pay_at_arrival: paymentMethod === "stripe" || paymentMethod === "paypal" ? 0 : 1, // Commented out
  arrival_date: `${departureDate} ${departureTime}`,
  // ...
};
```

## Considerations
### Backend Compatibility
By omitting the field entirely, the backend should assume its default value (likely 0) or handle its absence correctly, given that only online payment methods are currently exposed in the UI. 

### Future Re-integration
Should cash payments ("pay at arrival") be re-introduced, the field can be easily uncommented and the logic restored with minimal effort.
