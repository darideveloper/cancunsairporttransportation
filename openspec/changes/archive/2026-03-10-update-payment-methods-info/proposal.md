# Update Payment Methods Info

**Change ID**: `update-payment-methods-info`
**Status**: `Draft`
**Author**: `Gemini CLI`
**Date**: `2026-03-09`

## Summary
The current info text for payment methods is outdated and lacks important details. This change updates the English and Spanish translations for PayPal, Card, and Cash payment methods. It also consolidates the translation keys by removing the redundant `creditCardInfo` key and ensuring only `cardInfo` is used for the Credit/Debit Card method.

## Motivation
To improve user confidence during the checkout process and ensure they have all the necessary information about their chosen payment method. Consolidating the keys will also improve the maintainability of the translation files.

## Why
The current info text for payment methods is outdated and lacks important details. Improving the clarity and transparency of payment requirements and benefits increases user trust and reduces friction during the checkout process.

## What Changes
Updates the English and Spanish translations for PayPal, Credit/Debit Card, and Cash payment methods. Removes the redundant `creditCardInfo` key to simplify the translation structure.

## Capabilities
- **payment-info**: Updates the markdown-formatted info text for PayPal, Credit/Debit Card, and Cash payment methods in both English and Spanish.
- **translation-cleanup**: Removes redundant translation keys (`creditCardInfo`) from the `paymentMethod` section in English and Spanish.

## Architecture
This change only affects the translation files (`src/messages/en.json` and `src/messages/es.json`). The `PaymentMethods.tsx` component already uses `cardInfo` and `marked` to parse these strings, so no logic changes are required.

## Proposed Changes
- Modify `src/messages/es.json` to update `cardInfo`, `paypalInfo`, and `cashInfo`.
- Modify `src/messages/en.json` to update `cardInfo`, `paypalInfo`, and `cashInfo`.
- Remove `creditCardInfo` from both `src/messages/es.json` and `src/messages/en.json`.
