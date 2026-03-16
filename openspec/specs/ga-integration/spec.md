# ga-integration Specification

## Purpose
TBD - created by archiving change add-ga-conversion-tracking. Update Purpose after archive.
## Requirements
### Requirement: GA Global Initialization
The application MUST initialize Google Analytics in the global layout to ensure availability across all pages.

#### Scenario: Script Injection
- **Given** any page in the application is visited.
- **Then** the `gtag.js` script with ID `AW-18013613191` MUST be present in the `<head>`.
- **And** the `gtag('config', 'AW-18013613191')` command MUST execute.

### Requirement: Conversion Event Tracking
The application MUST fire a conversion event when a user reaches the "Thank You" or "Gracias" page after a successful booking.

#### Scenario: Successful Conversion Firing
- **Given** a user arrives at the `/thank-you` or `/es/gracias` page.
- **And** the `code` parameter is present in the URL.
- **And** the `useSearchFormStore` contains valid booking data matching the `code`.
- **Then** `gtag('event', 'conversion', ...)` MUST be called with:
  - `send_to`: `AW-18013613191/6zn0CPCz6occEIfZx41D`
  - `value`: The price from `selectedVehicle.price` (or `1.0` if unavailable).
  - `currency`: The currency from `currency` (or `MXN` if unavailable).
  - `transaction_id`: The `reservationId` from the store (or the `code` from the URL).

#### Scenario: Navigation Compatibility
- **Given** the user navigates to the Thank You page via a client-side transition.
- **Then** the conversion event MUST still fire correctly.

