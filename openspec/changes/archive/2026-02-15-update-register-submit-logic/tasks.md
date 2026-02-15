# Tasks: Update Register Submit Behavior

## 1. Environment and Dependencies
- [x] Install `sweetalert2` dependency.
    - **Validation**: Check `package.json` and ensure it's available in `node_modules`.

## 2. API Types and Contracts
- [x] Update `src/lib/transportation/legacy-api.types.ts`.
    - [x] Add `payment_method`, `success_url`, `cancel_url`, and `language` to `CreateReservationPayload`.
    - [x] Add `payment_link` to `ReservationResponse`.
    - **Validation**: Run `npm run astro check` to ensure no type errors in existing code.

## 3. Implementation of Submission Logic
- [x] Refactor `src/components/organisms/booking/BookingSubmission.tsx`.
    - [x] Import `Swal` from `sweetalert2`.
    - [x] Retrieve `paymentMethod` from `useSearchFormStore`.
    - [x] Implement dynamic `success_url` and `cancel_url` generation.
    - [x] Map `paymentMethod` to uppercase for the API payload.
    - [x] Update `handleSubmit` to perform a top-level redirect if `payment_link` is present.
    - [x] Replace `alert()` and simple `<p>` error tags with `Swal.fire()`.
    - **Validation**: Manually test the "Submit" button with a mock API response or by inspecting the outgoing request payload in the Network tab.

## 4. Polishing and Translations
- [x] Ensure translation keys for error titles and common messages exist in `src/lib/i18n/locales/`.
    - **Validation**: Check both `en.json` and `es.json`.
