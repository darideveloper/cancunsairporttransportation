# Tasks: Fix Collapsed Booking Inputs

- [x] Update `src/styles/global.css` to force input dimensions <!-- id: 0 -->
    - Change `.input-container` to `flex flex-col`.
    - Replace `min-w-0` with `width: 100% !important`, `min-width: 100% !important`, and `min-height: 3rem !important`.
- [x] Verify the layout on mobile viewport <!-- id: 1 -->
    - Ensure date and time inputs are full width.
    - Ensure they have consistent height.
