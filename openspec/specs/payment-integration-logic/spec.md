# payment-integration-logic Specification

## Purpose
TBD - created by archiving change fix-payment-integration. Update Purpose after archive.
## Requirements
### Requirement: Standardized Field Mapping for Legacy API
The registration payload MUST use the snake_case keys expected by the legacy backend.

#### Scenario: Submitting registration form
- **Given** the user has filled the registration form (camelCase UI state)
- **When** the form is submitted
- **Then** the payload SHALL map:
  - `firstName` -> `first_name`
  - `lastName` -> `last_name`
  - `email` -> `email_address`
  - `notes` -> `comments`
  - `flightNumber` -> `flight_number` (The backend also accepts `flightNumber` for robustness)
- **And** all keys MUST be snake_case (while the backend may accept fallbacks).

### Requirement: Absolute Redirection URLs
All redirection callback URLs (`success_url`, `cancel_url`) MUST be absolute URLs.

#### Scenario: Generation of success/cancel links
- **Given** the user is in a specific language (e.g., English)
- **When** the `BookingSubmission.tsx` generates redirection URLs
- **Then** they SHALL include the full origin (e.g., `https://domain.com/thank-you`).

### Requirement: Standardized Response Consumption
The system MUST handle the standardized backend response including the "hoisted" `paypal_id` and mandatory reservation IDs.

#### Scenario: Processing API response
- **Given** a successful `POST` to `/api/legacy/create/`
- **When** the response is received
- **Then** the system SHALL extract:
  - `paypal_id` (from the top-level property)
  - `reservation_id`
  - `uuid`
- **And** the `reservation_id` and `uuid` SHALL be stored in the persistent Zustand store.

### Requirement: Persistent Reservation Tracking
The `useSearchFormStore` MUST persist the `reservation_id` and `uuid` to allow summary fetching on the `/thank-you` page or after payment completion.

#### Scenario: Handling post-submission persistence
- **Given** the backend has returned `reservation_id` and `uuid`
- **When** the store updates
- **Then** these values SHALL be included in the persisted `search-form-storage`.

