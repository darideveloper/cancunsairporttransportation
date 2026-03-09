---
change_id: update-payment-methods
title: Update payment logic to PayPal, Card, and Cash
description: Update the booking flow to offer PayPal, Card (Stripe), and Cash options, ensuring correct API mapping and UI representation for all three.
---

# Proposal: Update payment logic to PayPal, Card, and Cash

The current payment flow offers "PayPal" and "Stripe" (Credit Card) as options. The requirement is to update the flow to offer three options: "PayPal", "Card (Credit or Debit)", and "Cash". This change involves updating the frontend store, the UI components, and the API submission logic to correctly map these selections to the backend's expected values.

## Current State
- **Store**: `paymentMethod` is `"paypal" | "stripe"`.
- **UI**: Two interactive cards for PayPal and Credit Card.
- **API**: Maps `paymentMethod` to uppercase (`PAYPAL`, `STRIPE`). `pay_at_arrival` is disabled.

## Proposed Changes
- **Store**: Update `paymentMethod` type to `"paypal" | "card" | "cash"`.
- **UI**: 
  - Provide three interactive cards for "PayPal", "Card", and "Cash".
  - "PayPal" uses the official PayPal branding.
  - "Card" uses Credit/Debit card icons (Stripe-backed).
  - "Cash" uses a money/bill icon.
- **API Mapping**:
  - `paypal` -> `payment_method: "PAYPAL"`, `pay_at_arrival` omitted.
  - `card` -> `payment_method: "STRIPE"`, `pay_at_arrival` omitted.
  - `cash` -> `payment_method: "CASH"`, `pay_at_arrival: 1`.
- **Translations**: Update English and Spanish labels and instructional text for all three payment methods.
- **Success Flow**: Ensure that cash payments correctly redirect to the success page, while card/paypal payments follow the standard redirect to the payment link.

## Impact
- **Store**: Minimal schema change in `search-form.ts`.
- **UI**: Visual change to labels and icons in `PaymentMethods.tsx`.
- **API**: Updated payload in `BookingSubmission.tsx`.
