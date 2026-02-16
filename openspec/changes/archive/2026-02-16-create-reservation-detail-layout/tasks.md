# Tasks: Create Reservation Detail Layout

Implementation steps for the Reservation Detail UI.

- [x] **Task 1: Extend ButtonCta**
  - Add `red` and `redGhost` variants to `src/components/atoms/ButtonCta.tsx`.
  - Use `bg-red-600` for `red` and a transparent red for `redGhost`.

- [x] **Task 2: Add Translations**
  - Update `src/messages/en.json` and `src/messages/es.json`.
  - Add detailed labels for user greeting, reservation status, detail table headers, and payment summary.

- [x] **Task 3: Implement Layout Header**
  - Update `src/components/pages/store/ReservationDetail.astro`.
  - Add the status checkmark icon.
  - Add the user info row (name, phone, email).
  - Add the status and logout button row.

- [x] **Task 4: Implement Detail Table and Sidebar**
  - Create the responsive grid structure.
  - Implement the "Status of your reservation" status box.
  - Implement the reservation details table.
  - Reuse `BookingSummary.tsx` for the payment summary area.
  - Add security badges (Stripe, Visa, Mastercard, etc.) below the summary.

- [x] **Task 5: Final Polish and QA**
  - Verify responsiveness on mobile.
  - Check accessibility (aria-labels for icons).
  - Ensure colors match the design screenshot.
