# payment-ui Specification

## Purpose
TBD - created by archiving change add-payment-method-section. Update Purpose after archive.
## Requirements
### Requirement: Payment Method Selection
The system MUST allow the user to choose between PayPal and Credit/Debit Card.

#### Scenario: Switching Payment Methods
Given the user is on the payment section of the Register page
When the user clicks on the "PayPal" option
Then the PayPal radio button should be selected
And the Stripe info message should be hidden.

#### Scenario: Selecting Card
When the user clicks on the "Credit / Debit Card" option
Then the Card radio button should be selected
And a security/info message should appear below the options.

### Requirement: Secure Payment Signage
The `PaymentMethods` component MUST include a short text explaining the SSL encryption and security of the payment process.
#### Scenario: Show SSL encryption message under Payment Methods title
- GIVEN the user is on the payment stage of the booking process
- AND the `PaymentMethods` component is rendered
- WHEN the component loads
- THEN a message describing SSL encryption for secure payments should be displayed below the title in the user's selected language.
- AND the text should use the `pages.register.paymentMethod.introInfo` translation key.

### Requirement: Submission
The system MUST provide a clear call to action to submit the reservation.

#### Scenario: Submit Button
Given the user has filled the form
Then they should see a large green button with the text "BOOK YOUR TRIP NOW!" (or localized equivalent).

### Requirement: Bilingual Support
The Payment Method section MUST be fully translated into English and Spanish.

#### Scenario: Language Switch
Given the page is in Spanish
Then the section title should be "Método de pago"
And all options, info messages, and the submit button should be in Spanish.

