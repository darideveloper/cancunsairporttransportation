# Tasks: Enhance Payment Logic and UI

This task list outlines the steps to refactor the payment system into three distinct methods (PayPal, Card, Cash) and enhance the UI with visual feedback.

## Phase 1: Logic and Content Preparation

### [x] Update Zustand Store
- [x] Update `src/store/search-form.ts` to support `paymentMethod: "paypal" | "card" | "cash"`.
- [x] Set the initial state to `"card"`.
- [x] Update the `setPaymentMethod` function.

### [x] Update Translations
Add distinct labels and markdown-formatted details for each method in `en.json` and `es.json`.
- [x] Update `en.json`: Add `paypal`, `card`, `cash` labels and `paypalInfo`, `cardInfo`, `cashInfo` markdown.
- [x] Update `es.json`: Add `paypal`, `card`, `cash` labels and `paypalInfo`, `cardInfo`, `cashInfo` markdown.

## Phase 2: Component Refinement

### [x] Update `PaymentMethod` Atom
Update `src/components/atoms/booking/PaymentMethod.tsx` with enhanced UI logic.
- [x] Replace standard radio with `checked-on.svg` / `checked-off.svg`.
- [x] Implement brand-aligned gradient (10% unselected, 20% selected Brand Orange `#ff8400`).
- [x] Ensure name (label) and single logo are aligned side-by-side.

### [x] Update `PaymentMethods` Molecule
Update `src/components/molecules/booking/PaymentMethods.tsx` to handle loop rendering and markdown details for the three options.
- [x] Define configuration array: `paypal`, `card`, `cash`.
- [x] Use `flex flex-col gap-4` for the container.
- [x] Implement markdown rendering for the selected method's detail text.

## Phase 3: Integration

### [x] Update API Submission Logic
- [x] Update `src/components/organisms/booking/BookingSubmission.tsx` to map `paymentMethod` values to uppercase strings (`PAYPAL`, `CARD`, `CASH`) in the API payload.

## Phase 4: Validation

### [x] Manual verification
- [x] Verify that each method (PayPal, Card, Cash) shows its unique logo, name, and markdown detail when selected.
- [x] Confirm that selecting a method correctly updates the Zustand store.
- [x] Verify the custom check mark and gradient background states.
- [x] Confirm the correct payload is sent to the API upon submission.
