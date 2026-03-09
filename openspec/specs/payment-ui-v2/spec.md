# payment-ui-v2 Specification

## Purpose
TBD - created by archiving change refactor-payment-method-ui-v2. Update Purpose after archive.
## Requirements
### Requirement: Separate Payment Method State
The `SearchFormStore` SHALL handle three distinct payment method states: `paypal`, `card`, and `cash`.

#### Scenario: Selection Update
- **Given**: A user selects a payment method in the UI.
- **Then**: The `paymentMethod` state in the Zustand store SHALL be updated with the corresponding value (`paypal`, `card`, or `cash`).

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

#### Scenario: Cash Configuration
- **Given**: The "Cash" option is rendered.
- **Then**: It SHALL use the Cash logo (`cash.png`).
- **And**: It SHALL display the translated Cash label.
- **And**: When selected, it SHALL show the translated `cashInfo` markdown.

### Requirement: Custom Check Mark Visual Feedback
The `PaymentMethod` atom SHALL display a custom SVG check mark representing its selected or unselected state.

#### Scenario: Selected Check Mark
- **Given**: A `PaymentMethod` atom with `isSelected={true}`.
- **Then**: It SHALL render `checked-on.svg`.

#### Scenario: Unselected Check Mark
- **Given**: A `PaymentMethod` atom with `isSelected={false}`.
- **Then**: It SHALL render `checked-off.svg`.

### Requirement: Dynamic Gradient Background
The `PaymentMethod` atom SHALL have a gradient background using the brand orange color (`#ff8400`) at specific opacities.

#### Scenario: Default Gradient (10% Opacity)
- **Given**: A `PaymentMethod` atom with `isSelected={false}`.
- **Then**: It SHALL display a gradient from `#ff84001a` (10%) to transparent (left to right).

#### Scenario: Selected Gradient (20% Opacity)
- **Given**: A `PaymentMethod` atom with `isSelected={true}`.
- **Then**: It SHALL display a gradient from `#ff840033` (20%) to transparent (left to right).

### Requirement: API Mapping for Payment Methods
The `BookingSubmission` molecule SHALL map the internal payment method values to uppercase strings for the legacy API.

#### Scenario: Submission Mapping
- **Given**: The user submits a booking.
- **Then**: The `payment_method` sent to the API SHALL be `PAYPAL`, `CARD`, or `CASH`.

