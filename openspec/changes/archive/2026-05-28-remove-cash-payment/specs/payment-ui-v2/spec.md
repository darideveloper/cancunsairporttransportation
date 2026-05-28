## MODIFIED Requirements

### Requirement: Separate Payment Method State
The `SearchFormStore` SHALL handle two distinct payment method states: `paypal` and `card`.

#### Scenario: Selection Update
- **Given**: A user selects a payment method in the UI.
- **Then**: The `paymentMethod` state in the Zustand store SHALL be updated with the corresponding value (`paypal` or `card`).

### Requirement: Dynamic UI Elements per Payment Method
Each payment method SHALL have its own set of dedicated UI assets, labels, and informational text.

#### Scenario: PayPal Configuration
- **Given**: The "PayPal" option is rendered.
- **Then**: It SHALL use the PayPal logo (`paypal.png`).
- **And**: It SHALL display the translated PayPal label.
- **And**: When selected, it SHALL show the translated `paypalInfo` markdown.

#### Scenario: Card Configuration
- **Given**: The "Card" option is rendered.
- **Then**: It SHALL use the Credit Card logo (`credit-card.webp`).
- **And**: It SHALL display the translated Card label.
- **And**: When selected, it SHALL show the translated `cardInfo` markdown.

### Requirement: API Mapping for Payment Methods
The `BookingSubmission` molecule SHALL map the internal payment method values to uppercase strings for the legacy API.

#### Scenario: Submission Mapping
- **Given**: The user submits a booking.
- **Then**: The `payment_method` sent to the API SHALL be `PAYPAL` or `CARD` (represented as `credit_card` in active payload).
