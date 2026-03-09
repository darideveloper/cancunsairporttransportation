# Spec Delta: Payment Information Security

## MODIFIED Requirements

### Requirement: Secure Payment Signage
The `PaymentMethods` component MUST include a short text explaining the SSL encryption and security of the payment process.
#### Scenario: Show SSL encryption message under Payment Methods title
- GIVEN the user is on the payment stage of the booking process
- AND the `PaymentMethods` component is rendered
- WHEN the component loads
- THEN a message describing SSL encryption for secure payments should be displayed below the title in the user's selected language.
- AND the text should use the `pages.register.paymentMethod.introInfo` translation key.

## Data Updates

### Translation Keys
- `pages.register.paymentMethod.introInfo` (English): "We use SSL encryption for secure payments backed by the best payment platforms."
- `pages.register.paymentMethod.introInfo` (Spanish): "Utilizamos encriptación SSL para pagos seguros respaldados por las mejores plataformas de pago."
