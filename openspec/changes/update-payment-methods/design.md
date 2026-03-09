# Design: Update Payment Logic

## Store Updates (`src/store/search-form.ts`)
- Update `SearchFormState` to reflect the three available payment methods.
- **Old Type**: `"paypal" | "stripe"`
- **New Type**: `"paypal" | "card" | "cash"`
- **Initial State**: `"card"`

## UI Updates (`src/components/molecules/booking/PaymentMethod.tsx`)
- Update the layout to accommodate three options. A responsive grid or list of cards will be used.
- **First Card**: PayPal (existing logo).
- **Second Card**: Card (Credit / Debit) - uses Visa/Mastercard icons, backed by Stripe.
- **Third Card**: Cash (uses a money/bill icon).
- **Translations**: Updated keys for the three labels and their respective instructional texts.

## Submission Mapping (`src/components/organisms/booking/BookingSubmission.tsx`)
The submission payload will be updated to map the UI selection to the correct backend fields:

| Selection | `payment_method` | `pay_at_arrival` |
|-----------|------------------|------------------|
| `paypal`  | `"PAYPAL"`       | (Omitted)        |
| `card`    | `"STRIPE"`       | (Omitted)        |
| `cash`    | `"CASH"`         | `1`              |

- **Logic**:
  - `payment_method` set to the corresponding uppercase key.
  - `pay_at_arrival` set to `1` only if `paymentMethod` is `"cash"`. For all other methods, the field must be excluded from the final API payload.
- **Success Redirect**: Ensure that if `payment_link` is absent (for Cash), the user is redirected to the `success_url`.

## Translation Updates
The `paymentMethod` section in `en.json` and `es.json` will be updated to include labels and instructional info for "PayPal", "Card", and "Cash".
