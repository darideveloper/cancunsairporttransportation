---
change_id: refactor-payment-method-ui
title: Refactor PaymentMethod component into modular subcomponents
description: Decompose the monolithic PaymentMethod component into reusable PaymentMethod atoms, while centralizing state management in a new PaymentMethods molecule.
---

# Proposal: Refactor PaymentMethod component into modular subcomponents

## Why
The current `PaymentMethod` component is a monolithic molecule that handles both state logic and the rendering of all payment options in a single file. This leads to code duplication for radio button logic and UI across different payment options. It also makes the component harder to maintain and scale as more payment methods are added.

## What Changes
This proposal refactors the monolithic component by extracting individual payment options into a reusable `PaymentMethod` atom and renaming the parent container to `PaymentMethods` (molecule).

### Proposed Changes
- **Rename Parent**: `PaymentMethod.tsx` -> `PaymentMethods.tsx` (Molecule).
- **New Child Component**: `PaymentMethod.tsx` (Atom) in `src/components/atoms/booking/`.
- **Simplification**: The child `PaymentMethod` atom accepts dynamic props like `images`, `imageAlt`, and `label`.
- **Loop Rendering**: The parent `PaymentMethods` molecule uses an array of payment method configurations to render the options dynamically using a `map()` loop.
- **Centralized Logic**: `PaymentMethods.tsx` continues to manage the global state (`useSearchFormStore`) and provides necessary callbacks to the children.

## Current State
- `src/components/molecules/booking/PaymentMethod.tsx` is a monolithic molecule.
- Radio button logic and UI for each payment option (PayPal, Stripe/Card) are duplicated.
- Hardcoded rendering makes it difficult to add new payment methods (e.g., "Cash").

## Benefits
- **Clean Architecture**: Clear separation between the container (molecule) and the building blocks (atoms).
- **Extensibility**: Adding a new payment method only requires adding an entry to the data array.
- **Dry Code**: Eliminates duplicated JSX for radio buttons and card styling.

## Impact
- **Molecule**: `src/components/molecules/booking/PaymentMethods.tsx` (Renamed and refactored).
- **Atom**: `src/components/atoms/booking/PaymentMethod.tsx` (New component).
