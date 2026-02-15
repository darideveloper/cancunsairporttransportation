# Tasks: Add Payment Method Section

## Setup
- [x] Add `paymentMethod` and `setPaymentMethod` to `useSearchFormStore` in `src/store/search-form.ts`. <!-- id: 0 -->

## Translations
- [x] Add payment method translations to `src/messages/en.json`. <!-- id: 1 -->
  - `pages.register.paymentMethod.title`: "Payment method"
  - `pages.register.paymentMethod.securityInfo`: "We use SSL encryption for secure payments powered by"
  - `pages.register.paymentMethod.creditCard`: "Credit / Debit Card"
  - `pages.register.paymentMethod.stripeExtraInfo`: "By selecting this method, you will be redirected to a secure Stripe portal."
  - `pages.register.paymentMethod.termsInfo`: "By clicking on Submit, you accept the"
  - `pages.register.submit`: "BOOK YOUR TRIP NOW!"
- [x] Add payment method translations to `src/messages/es.json`. <!-- id: 2 -->
  - `pages.register.paymentMethod.title`: "Método de pago"
  - `pages.register.paymentMethod.securityInfo`: "Utilizamos cifrado SSL para pagos seguros impulsados por"
  - `pages.register.paymentMethod.creditCard`: "Tarjeta de Crédito / Débito"
  - `pages.register.paymentMethod.stripeExtraInfo`: "Al seleccionar este método, será redirigido a un portal seguro de Stripe."
  - `pages.register.paymentMethod.termsInfo`: "Al hacer clic en Enviar, aceptas los"
  - `pages.register.submit`: "¡RESERVA TU VIAJE AHORA!"

## UI Components
- [x] Create `src/components/molecules/booking/PaymentMethod.tsx` with the radio selection UI and correct image imports. <!-- id: 3 -->
- [x] Create `src/components/molecules/booking/PaymentBrands.tsx` for brand logos. <!-- id: 4 -->
- [x] Add conditional message rendering for `paymentMethod === 'stripe'`. <!-- id: 5 -->

## Integration
- [x] Import and render `<PaymentMethod client:load lang={lang} />` in `src/components/pages/store/Register.astro`. <!-- id: 6 -->
- [x] Add Submit Button and `<PaymentBrands />` to `Register.astro` under the PaymentMethod section. <!-- id: 7 -->

## Validation
- [x] Verify that switching payment methods updates the store. <!-- id: 8 -->
- [x] Verify that the Stripe info message appears/disappears correctly. <!-- id: 9 -->
- [x] Verify brand logos are grayscale and become colored on hover. <!-- id: 10 -->
- [x] Verify translations in both languages. <!-- id: 11 -->
