# Tasks: Refactor PaymentMethod component

This task list outlines the steps to refactor the monolithic `PaymentMethod` component into a modular architecture using plural/singular naming conventions and loop rendering.

## Phase 1: Component Reorganization

### [x] Create `PaymentMethod` Atom
Create a new file `src/components/atoms/booking/PaymentMethod.tsx` to serve as the singular building block for each payment option.
- [x] Implement `PaymentMethodProps` (value, isSelected, onSelect, images, imageAlt, label).
- [x] Implement conditional styling for selected states.
- [x] Add radio button logic linked to the `value` prop.

### [x] Rename and Refactor Parent Molecule
Rename the current `src/components/molecules/booking/PaymentMethod.tsx` to `src/components/molecules/booking/PaymentMethods.tsx`.
- [x] Rename the export to `PaymentMethods`.
- [x] Define an array of payment method configurations (PayPal, Stripe/Card).
- [x] Refactor the `return` statement to use `map()` to render `PaymentMethod` atoms.

## Phase 2: Implementation Refinement

### [x] Update Parent Logic
- [x] Import `PaymentMethod` from `@atoms/booking/PaymentMethod`.
- [x] Ensure `useSearchFormStore` is correctly integrated.
- [x] Pass the necessary props to each `PaymentMethod` instance in the loop.

## Phase 3: Validation

### [x] Manual verification
- [x] Verify that the UI looks identical to the current implementation.
- [x] Confirm that selecting an option correctly updates the global state.
- [x] Ensure that selecting the Card option still displays the additional Stripe information text.
