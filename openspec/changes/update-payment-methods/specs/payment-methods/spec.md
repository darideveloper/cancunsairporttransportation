# Capability: Payment Methods

This capability defines the selection and processing of different payment methods during the booking flow.

## MODIFIED Requirements

### Req: Payment Method Selection
The system MUST allow the user to choose between **PayPal**, **Card (Credit/Debit Card)**, and **Cash** as their preferred payment method.

#### Scenario: User selects PayPal
- **Given** the user is in the payment section of the booking form
- **When** the user clicks on the "PayPal" option
- **Then** the PayPal radio button should be selected
- **And** the `paymentMethod` in the store should be set to `"paypal"`

#### Scenario: User selects Card
- **Given** the user is in the payment section of the booking form
- **When** the user clicks on the "Card" (Credit Card) option
- **Then** the Card radio button should be selected
- **And** the `paymentMethod` in the store should be set to `"card"`

#### Scenario: User selects Cash
- **Given** the user is in the payment section of the booking form
- **When** the user clicks on the "Cash" option
- **Then** the Cash radio button should be selected
- **And** the `paymentMethod` in the store should be set to `"cash"`

### Req: API Payload Mapping
The system MUST map the user's payment selection to the backend's expected `payment_method` and `pay_at_arrival` fields.

#### Scenario: Mapping for PayPal selection
- **Given** the user has selected "PayPal"
- **When** the booking is submitted
- **Then** the API payload `payment_method` should be `"PAYPAL"`
- **And** the API payload `pay_at_arrival` should be **OMITTED**

#### Scenario: Mapping for Card selection
- **Given** the user has selected "Card"
- **When** the booking is submitted
- **Then** the API payload `payment_method` should be `"STRIPE"`
- **And** the API payload `pay_at_arrival` should be **OMITTED**

#### Scenario: Mapping for Cash selection
- **Given** the user has selected "Cash"
- **When** the booking is submitted
- **Then** the API payload `payment_method` should be `"CASH"`
- **And** the API payload `pay_at_arrival` should be `1`
- **And** if no `payment_link` is provided by the API, the user should be redirected to the success page.
