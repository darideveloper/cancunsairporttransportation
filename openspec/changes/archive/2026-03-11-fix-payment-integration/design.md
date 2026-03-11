# Design: Standardize Payment Integration

## Overview
This design aligns the frontend's interaction with the `/api/legacy/create/` endpoint to match the backend's standardized response structure (hoisted `paypal_id`) and ensures correct data mapping from the UI store to the API payload.

## Architecture Changes

### 1. Data Store Update (`src/store/search-form.ts` & `src/store/reservation.ts`)
The `SearchFormState` will be extended to include `reservationId` and `uuid`. Additionally, the `BookingSubmission.tsx` component will be updated to populate BOTH the `useSearchFormStore` (for current flow persistence) and `useReservationStore` (which is the source of truth for the Reservation Detail page).

**Reasoning**: Storing these values in the persistent Zustand store ensures they are available if the user refreshes the page during payment. Updating the `useReservationStore` ensures that the user can immediately access their reservation details without manual entry of their email/code.

### 2. API Data Mapping (`src/components/organisms/booking/BookingSubmission.tsx`)
The payload mapping will be explicitly transformed from camelCase (UI state) to snake_case (Legacy API) to avoid inconsistencies.

| UI State Variable | API Payload Key |
| :--- | :--- |
| `firstName` | `first_name` |
| `lastName` | `last_name` |
| `email` | `email_address` |
| `notes` | `comments` |
| `flightNumber` | `flight_number` (Backend accepts both `flightNumber` and `flight_number`) |

**Robustness**: The backend maintains a mapping layer that transforms `flight_number` (incoming) to `flight` (outgoing to legacy API). To ensure robustness, the backend also accepts the original camelCase `flightNumber` as a valid source for this mapping.

### 3. Response Standardized Handling
The `BookingSubmission.tsx` logic will be updated to prioritize the hoisted `paypal_id` from the backend response, removing the need for a fallback to `payment_data.url`.

### 4. Redirection Logic & Thank You Page
- **Absolute URLs**: `success_url` and `cancel_url` will be generated as absolute URLs using the `origin` property of the `window.location` object.
- **Dynamic Parameters**: The `success_url` will have the `code` parameter appended (e.g., `.../thank-you?code=12345`).
- **ThankYou Page**: `src/components/pages/store/ThankYou.astro` will be updated to extract this `code` from the URL and pass it to the `TransactionStatus` component, allowing the "View my reservation" button to correctly link to the reservation detail page.

## Security & Reliability
- **Persistence**: Using Zustand's `persist` middleware to keep the reservation ID/UUID safe across reloads.
- **Strict Typing**: Updating `Legacy-api.types.ts` to reflect the hoisted structure and mandatory `reservation_id` / `uuid` fields.
