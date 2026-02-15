# payment-ui Specification

## Purpose
The payment UI allows users to select a preferred payment method during the registration process, ensuring a secure and transparent checkout experience.

## ADDED Requirements

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
The system MUST display a security badge and text indicating secure payments, as well as brand logos under the submit button.

#### Scenario: Displaying Security Info
Given the user is looking at the Payment Method section
Then they should see a shield icon and the text "We use SSL encryption for secure payments powered by stripe" (or localized equivalent).

#### Scenario: Displaying Brand Logos
Given the user is at the bottom of the registration form
Then they should see a row of logos including Safe Travels, Cancun, SCT, Mexico, PayPal, Stripe, and Let's Encrypt.
And these logos SHOULD be grayscale by default and colored on hover.

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
