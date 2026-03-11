# Design: Multi-Payment Checkout Implementation

## Current Logic
1. User selects a payment method in the store.
2. User clicks "Submit" in `BookingSubmission`.
3. `createReservation` is called.
4. If `payment_link` is returned, redirect to it (old PayPal).
5. If not, redirect to the success page (cash).

## Proposed Implementation
The new implementation uses a **Hybrid Flow** based on `docs/checkout-paypal-frontend.md`.

### 1. Payment Method Mapping
Store values must be mapped to backend values:
- `paypal` -> `paypal`
- `card` -> `credit_card`
- `cash` -> `cash`

### 2. PayPal JS SDK Integration
The script will be injected into `src/components/pages/store/Register.astro`. It should include the client ID and specify `USD` as currency to match the backend expectation.

```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD&components=buttons&disable-funding=paylater,venmo"></script>
```

### 3. Updated `BookingSubmission` Workflow
The component will maintain an `orderMetadata` state:
- When "Submit" is clicked:
  - If `cash`, call `createReservation` with `payment_method: "cash"` and redirect to success.
  - If `paypal` or `card`:
    - Call `createReservation` with `payment_method: "paypal" | "credit_card"`.
    - Receive `paypal_id` and store it.
    - Render `<div id="paypal-button-container">`.
    - Initialize the PayPal SDK buttons.

### 4. SDK Event Handlers
- **`createOrder`**: Returns the `paypal_id` from our backend response.
- **`onApprove`**: Calls our `/api/legacy/capture/` endpoint.
- **`onError`**: Shows an error message using SweetAlert2.

## API Specification

### Endpoint: `POST /api/legacy/create/`
Updated payload includes `payment_method`.
Response includes:
- `paypal_id`: Used for the SDK.
- `reservation_id`: For tracking.
- `uuid`: For analytics/logging.

### Endpoint: `POST /api/legacy/capture/`
New endpoint for confirming the payment after the user approves via PayPal.
- **Payload**: `{ id: string }`
- **Response**: `{ status: "COMPLETED" | ... }`
