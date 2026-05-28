## Context

Currently, the booking system allows a "Cash on Arrival" option alongside online card and PayPal payments. This cash flow bypasses active payment capture and allows booking completion without a verified transaction or pre-authorization. To streamline operations and secure payments, we need to completely remove the "Cash on Arrival" option from the user interface and secure the booking submission and state schema against any cash-related options.

## Goals / Non-Goals

**Goals:**
- Hide and completely disable "Cash on Arrival" selection in `PaymentMethods.tsx`.
- Remove the cash submission branch in `BookingSubmission.tsx` that bypasses online payments.
- Update the Zustand search store interface and default schema validations to reject any attempt to submit or store `"cash"`.

**Non-Goals:**
- Deleting unused cash-related translation strings (to minimize localization diff churn).
- Modifying legal terms or pages in this change (handled as a separate content updates task).
- Refactoring the server API endpoints (this is a client-side hardening and UI removal task).

## Decisions

- **Decision 1: Restrict `paymentMethod` State Type to `"paypal" | "card"`**
  - *Alternatives considered:* Keeping `"cash"` in the typescript type but throwing an error in the component, or leaving it as a general `string`.
  - *Rationale:* Hardening the typescript type ensures at compile-time that no cash-related state transitions are possible.
- **Decision 2: Update `bookingRegistrationSchema` to Validate Payment Method**
  - *Alternatives considered:* Only validating fields in the form, and doing payment method checks as ad-hoc logic.
  - *Rationale:* Placing the validation inside `bookingRegistrationSchema` using Zod (`z.enum(["paypal", "card"])`) provides strong validation safety during the submit phase.
- **Decision 3: Keep Translation Strings Unchanged**
  - *Alternatives considered:* Deleting `cashInfo` and other cash-related labels from the translation JSON files.
  - *Rationale:* Leaving translation keys reduces localization file churn and avoids breaking code if those keys are referenced or fallback checked elsewhere in the codebase.

## Risks / Trade-offs

- **[Risk] State Persistence Compatibility**: Users with a previously saved `search-form-storage` state containing `paymentMethod: "cash"` might load the invalid state, causing validation failure or rendering an unselected payment options card.
- **[Mitigation]**: 
  1. The store initializes with a default value of `"card"`.
  2. A proactive `useEffect` hook will be added to the `PaymentMethods.tsx` component to automatically sanitize any legacy `"cash"` state to `"card"` immediately upon mounting, ensuring seamless backward compatibility.

