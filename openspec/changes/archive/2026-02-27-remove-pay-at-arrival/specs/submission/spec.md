# submission Specification

## MODIFIED Requirements
### Requirement: Reservation Service

The application **SHALL** include `src/lib/transportation/legacy-api.types.ts` (mapped in `src/services/reservation.ts`) to handle the API request. The `pay_at_arrival` field is removed from the active payload for the current version.

#### Scenario: Successful Reservation Creation
Given a valid reservation payload
When `createReservation` is called
Then it should POST to `/legacy/create/` and return the reservation data.

```typescript
// src/lib/transportation/legacy-api.types.ts (CreateReservationPayload)
export interface CreateReservationPayload {
  service_token: string;
  first_name: string;
  last_name: string;
  email_address: string;
  phone: string;
  flight_number?: string;
  arrival_date?: string;
  comments?: string;
  // pay_at_arrival?: number; // 1 for true (Commented out)
  payment_method?: string;
  success_url?: string;
  cancel_url?: string;
  language?: string;
}
```

### Requirement: Booking Submission Component

The application **SHALL** include `src/components/organisms/booking/BookingSubmission.tsx` to handle UI interactions, validation, and redirection.

#### Scenario: User Clicks Submit with Digital Payment
Given the user has selected "Stripe" or "PayPal"
When they click "Book Your Trip Now"
Then the component MUST generate dynamic `success_url` and `cancel_url`
AND it MUST call `createReservation` with the mapped uppercase payment method
AND it MUST NOT include the `pay_at_arrival` field in the active payload (keep it commented).
AND it MUST redirect to `payment_link` if returned by the API.

```typescript
// src/components/organisms/booking/BookingSubmission.tsx

const payload = {
  service_token: selectedVehicle!.token,
  first_name: firstName,
  last_name: lastName,
  email_address: email,
  phone: phone,
  flight_number: flightNumber,
  comments: notes,
  // pay_at_arrival: paymentMethod === "stripe" || paymentMethod === "paypal" ? 0 : 1, // Commented out
  arrival_date: `${departureDate} ${departureTime}`,
  payment_method: paymentMethod.toUpperCase(),
  success_url,
  cancel_url,
  language: lang,
};
```
