# submission Specification

## Purpose
TBD - created by archiving change submit-reservation. Update Purpose after archive.
## Requirements
### Requirement: Reservation Service

The application **SHALL** include `src/services/reservation.ts` to handle the API request.

#### Scenario: Successful Reservation Creation
Given a valid reservation payload
When `createReservation` is called
Then it should POST to `/legacy/create/` and return the reservation data.

```typescript
// src/services/reservation.ts

export interface CreateReservationPayload {
  service_token: string;
  first_name: string;
  last_name: string;
  email_address: string;
  phone: string;
  flight_number?: string;
  arrival_date?: string;
  comments?: string;
  pay_at_arrival?: number; // 1 for true
  referral_code?: string;
}

export interface ReservationResponse {
  reservation_id?: string;
  status?: string;
  total?: number;
  currency?: string;
  customer?: {
    name: string;
    email: string;
  };
  error?: {
    code: string;
    message: string;
  } | string;
}

export async function createReservation(
  payload: CreateReservationPayload
): Promise<ReservationResponse> {
  const response = await fetch("/legacy/create/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    // Handle HTTP errors
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || response.statusText);
  }

  return response.json();
}
```

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

### Requirement: Register Page

`src/components/pages/store/Register.astro` **MUST** be updated to use the new component.

#### Scenario: Replace Submit Button
Given the Register page
When rendered
Then it should display `BookingSubmission` instead of the static HTML form elements.

```astro
// src/components/pages/store/Register.astro

// ... imports
import BookingSubmission from '../../organisms/booking/BookingSubmission';

// ... inside template

    {/* Remove old manual Submit button div */}
    
    <BookingSubmission
      lang={lang}
      client:load
    />

    <!-- Payment brands -->
    <PaymentBrands />
```

