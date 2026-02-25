# Tasks: Fix Booking Menu Responsiveness

- [ ] Update `src/styles/global.css` to fix input shrink behavior <!-- id: 0 -->
    - Change `.input-container` to `block`.
    - Add `min-w-0` (or `min-width: 0`) to global inputs.
- [ ] Update `src/components/organisms/booking/BookingForm.tsx` to reduce mobile padding <!-- id: 1 -->
    - Change `form` class `px-8` to `px-4 sm:px-8`.
- [ ] Verify the layout on mobile viewport <!-- id: 2 -->
    - Use browser devtools to simulate iPhone width (e.g., 390px - 430px).
    - Ensure date/time inputs do not overflow the orange form container.
