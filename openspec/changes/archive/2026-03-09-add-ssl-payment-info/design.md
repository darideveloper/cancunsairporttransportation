# Design: SSL Payment Info

## Architecture Overview
The change involves updating the translation messages and the `PaymentMethods` molecule component.

## UI Changes
- In `src/components/molecules/booking/PaymentMethods.tsx`, a new `<p>` tag will be added below the `<H2>` title.
- The text will be rendered using the `introInfo` translation key from `pages.register.paymentMethod`.

## Data Changes
- `src/messages/en.json` will have `pages.register.paymentMethod.introInfo` updated to "We use SSL encryption for secure payments backed by the best payment platforms."
- `src/messages/es.json` will have `pages.register.paymentMethod.introInfo` updated to "Utilizamos encriptación SSL para pagos seguros respaldados por las mejores plataformas de pago."

## Dependencies
- `react` (used by `PaymentMethods.tsx`)
- `lib/i18n/utils` (used for translations)
