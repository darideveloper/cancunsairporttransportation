# payment-info Specification

## Purpose
TBD - created by archiving change update-payment-methods-info. Update Purpose after archive.
## Requirements
### Requirement: Update PayPal Info Text
The info text displayed when selecting the "PayPal" payment method MUST reflect the new marketing and security content.

#### Scenario: PayPal method is selected
- **Input**: `pages.register.paymentMethod.paypalInfo` translation key.
- **English**:
  ```markdown
  We accept payments with **PayPal**, one of the most trusted platforms worldwide.

  * ✅ Guaranteed security
  * ✅ Pay with PayPal account
  * ✅ Hassle-free

  ---

  **Important!** Please make sure the PayPal account holder is present and brings a valid ID when starting the transfer.
  ```
- **Spanish**:
  ```markdown
  Aceptamos pagos con **PayPal**, una de las plataformas más confiables a nivel mundial.

  * ✅ Seguridad garantizada
  * ✅ Paga with cuenta PayPal
  * ✅ Sin complicaciones

  ---

  **¡Importante!** Por favor, asegúrese de que el titular de la cuenta de PayPal esté presente y lleve una identificación válida al iniciar la transferencia.
  ```

### Requirement: Update Card Info Text
The info text displayed when selecting the "Credit / Debit Card" payment method MUST reflect the new marketing and security content using the single `cardInfo` key.

#### Scenario: Card method is selected
- **Input**: `pages.register.paymentMethod.cardInfo` translation key.
- **English**:
  ```markdown
  We accept payments with **PayPal**, one of the most trusted platforms worldwide.

  * ✅ Guaranteed security
  * ✅ Pay with card
  * ✅ Hassle-free

  ---

  **Important!** You have to present the debit or credit card with which you made the payment when starting your shuttle.
  ```
- **Spanish**:
  ```markdown
  Aceptamos pagos con **PayPal**, una de las plataformas más confiables a nivel mundial.

  * ✅ Seguridad garantizada
  * ✅ Paga con tarjeta
  * ✅ Sin complicaciones

  ---

  **¡Importante!** Debe presentar la tarjeta de débito o crédito con la que realizó el pago al iniciar su transportación.
  ```

### Requirement: Update Cash Info Text
The info text displayed when selecting the "Pay in Cash" payment method MUST reflect the new service fee content.

#### Scenario: Cash method is selected
- **Input**: `pages.register.paymentMethod.cashInfo` translation key.
- **English**: `Tax service **$5.00 USD**, you can save this fee prepaying online.`
- **Spanish**: `Tarifa de servicio por **$5.00 USD**, usted puede ahorrar esta cuota pagando en línea.`

### Requirement: Remove Redundant Credit Card Info Key
The redundant `creditCardInfo` key MUST be removed from all translation files.

#### Scenario: Clean up translation files
- **Key**: `pages.register.paymentMethod.creditCardInfo` MUST be removed from all translation files.

