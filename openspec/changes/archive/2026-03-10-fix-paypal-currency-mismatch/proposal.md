# Proposal: Fix PayPal Currency Mismatch via Dynamic SDK Loading

Fix the `smart_button_validation_error_incorrect_currency` error by dynamically loading the PayPal SDK with the correct currency selected by the user.

## Why
The current implementation hardcodes the PayPal SDK to `currency=USD` in a static script tag within `Register.astro`. If a user selects `MXN` in the search form, the backend creates an order in `MXN`, but the PayPal SDK (loaded for `USD`) rejects the transaction due to the currency mismatch.

## What Changes

### 1. Register Page
- Removed the static `<script>` tag that loads the PayPal SDK in `src/components/pages/store/Register.astro`.

### 2. Booking Submission Component
- **Dynamic SDK Loading**: Implemented a `useEffect` hook to load the PayPal SDK script dynamically.
- **Currency Synchronization**: The hook monitors the `currency` state from the store and reloads the SDK with the matching currency parameter.
- **Initialization Guard**: Added `isSdkLoaded` state to ensure buttons only render when the script is ready.
- **Cleanup**: Added cleanup logic to remove old script tags when switching currencies or unmounting.

## Impact
- **Accuracy**: Ensures the payment currency always matches the order currency.
- **Reliability**: Resolves the validation error that blocks payments when `MXN` is selected.
- **Performance**: The SDK is only loaded when needed on the Register page.
