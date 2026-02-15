## MODIFIED Requirements
### Requirement: Reservation Service

The application **SHALL** include `src/lib/transportation/api.ts` (proxied via `legacy-api.types.ts`) to handle the API request.

#### Scenario: Successful Reservation Creation (V2)
Given a valid reservation payload including `payment_method`
When `createReservation` is called
Then it should POST to `/legacy/create/` and return the reservation data or a `payment_link`.

```typescript
// src/lib/transportation/legacy-api.types.ts

export interface CreateReservationPayload {
  service_token: string;
  first_name: string;
  last_name: string;
  email_address: string;
  phone: string;
  flight_number?: string;
  arrival_date?: string;
  comments?: string;
  pay_at_arrival?: number; 
  payment_method: 'STRIPE' | 'PAYPAL' | 'CASH' | 'WIRE';
  success_url?: string;
  cancel_url?: string;
  language?: string;
  referral_code?: string;
}

export interface ReservationResponse {
  reservation_id?: string;
  payment_link?: string;
  status?: string;
  // ... other fields
}
```

## MODIFIED Requirements
### Requirement: Booking Submission Component

The application **SHALL** include `src/components/organisms/booking/BookingSubmission.tsx` to handle UI interactions, validation, and redirection.

#### Scenario: User Clicks Submit with Digital Payment
Given the user has selected "Stripe" or "PayPal"
When they click "Book Your Trip Now"
Then the component MUST generate dynamic `success_url` and `cancel_url`
AND it MUST call `createReservation` with the mapped uppercase payment method
AND it MUST redirect to `payment_link` if returned by the API.

#### Scenario: Error Handling with SweetAlert2
Given an error occurs during submission (API error or validation)
When the submission is processed
Then the system MUST display a SweetAlert2 modal with the error message.




