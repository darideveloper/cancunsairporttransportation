# submission Specification

## Purpose
TBD - created by archiving change submit-reservation. Update Purpose after archive.
## Requirements
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

#### Scenario: User Selects Currency and Payment Method
Given the user selects a currency (`USD` or `MXN`)
When the component mounts or the currency changes
Then the component MUST dynamically load the PayPal SDK with the matching `currency` parameter.
AND it MUST clear any previously loaded PayPal SDK instances to avoid currency conflicts.

#### Scenario: User Clicks Submit with Digital Payment (Currency Sync)
Given the user has selected "card" or "paypal"
When they click "Book Your Trip Now"
Then the component MUST call `createReservation`
AND it MUST wait for BOTH the `paypalId` state to be set AND the PayPal SDK to be fully loaded.
AND it MUST then call `renderPayPalButtons` to display the payment UI.

```typescript
// src/components/organisms/booking/BookingSubmission.tsx

// Dynamic SDK Loading Logic
useEffect(() => {
  const loadSdk = () => {
    // 1. Remove old script if exists
    // 2. Inject new script with current currency
    // 3. setSucceeded(true) on script.onload
  };
  loadSdk();
}, [currency]);

// Render Logic with SDK Guard
useEffect(() => {
  if (paypalId && isSdkLoaded && (paymentMethod === "paypal" || paymentMethod === "card")) {
    renderPayPalButtons(paypalId, paymentMethod);
  }
}, [paypalId, isSdkLoaded, paymentMethod]);
```

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

