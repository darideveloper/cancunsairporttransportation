## MODIFIED Requirements

### Requirement: Standardized Response Consumption
The system MUST handle the standardized backend response including the "hoisted" `paypal_id` and mandatory reservation IDs. There is no offline payment (cash) bypass; every checkout flow MUST initialize online payment (PayPal/Credit Card) credentials or links.

#### Scenario: Processing API response
- **Given** a successful `POST` to `/api/legacy/create/`
- **When** the response is received
- **Then** the system SHALL extract:
  - `paypal_id` (from the top-level property)
  - `reservation_id`
  - `uuid`
- **And** the `reservation_id` and `uuid` SHALL be stored in the persistent Zustand store.
- **And** the system SHALL proceed to initialize the online payment gateway (PayPal Smart Buttons or Stripe payment link redirect).
