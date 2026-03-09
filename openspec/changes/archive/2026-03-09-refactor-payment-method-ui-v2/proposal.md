---
change_id: refactor-payment-method-ui-v2
title: Enhance PaymentMethod UI and Logic (PayPal, Card via PayPal, Cash)
description: Update UI with check marks and gradients, and refactor logic to support three distinct payment methods (PayPal, Card via PayPal, Cash) across the store, molecule, and API submission.
---

# Proposal: Enhance PaymentMethod UI and Logic

## Why
The current payment system is limited to "paypal" and "stripe" and lacks a polished UI. We need to transition to three distinct options:
1. **PayPal**: Using the user's PayPal account.
2. **Card**: Debit/Credit payments processed via PayPal (replacing Stripe).
3. **Cash**: Pay at arrival.

Each method requires its own state, visual identity (logo, name, check mark), and informative details to ensure user clarity and correct API integration.

## What Changes
This proposal covers the visual enhancement of the selection interface and the underlying logic to support the new payment method structure.

### Proposed Changes
- **Zustand Store**: Update `SearchFormState` to support `paymentMethod: "paypal" | "card" | "cash"`.
- **Custom UI Elements**:
    - **Check Marks**: Use `checked-on.svg` and `checked-off.svg` for selection states.
    - **Gradients**: Apply brand orange (`#ff8400`) gradients (10% unselected, 20% selected).
    - **Logos**: Use dedicated single logos for each method from `@src/assets/images/checkout/payment/`.
- **Modular Components**:
    - **PaymentMethod (Atom)**: Refactor to accept `imageSrc`, `label`, and handle the custom check mark and gradient.
    - **PaymentMethods (Molecule)**: Refactor to loop through the three options and render markdown-formatted details for the selected one.
- **Submission Logic**: Update `BookingSubmission.tsx` to map the new values (`PAYPAL`, `CARD`, `CASH`) to the API's `payment_method` field.
- **Translations**: Add markdown-formatted strings for `paypalInfo`, `cardInfo`, and `cashInfo` in English and Spanish.

## Impact
- **Store**: Updated `paymentMethod` type and initial state.
- **Molecule**: `src/components/molecules/booking/PaymentMethods.tsx` updated with loop rendering and markdown details.
- **Atom**: `src/components/atoms/booking/PaymentMethod.tsx` updated with new visual states.
- **Submission**: `src/components/organisms/booking/BookingSubmission.tsx` updated with new mapping logic.
- **Translations**: Updated `en.json` and `es.json`.
