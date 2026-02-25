# Proposal: Fix Booking Menu Responsiveness on Mobile

The booking form currently suffers from layout overflow on mobile devices, particularly iOS Safari (iPhone 16), due to the intrinsic minimum width of native date/time inputs and excessive cumulative padding.

## Problem
1. **iOS Safari Intrinsic Width:** Native `type="date"` and `type="time"` inputs in Safari have a minimum intrinsic width that prevents them from shrinking below a certain point, causing them to overflow their containers when space is restricted.
2. **Cumulative Padding:** The current padding structure (`container` + `section px-4` + `form px-8`) consumes 128px of horizontal space on mobile, leaving only ~265px for inputs on an iPhone 16.
3. **Inline-Block Container:** The `.input-container` uses `inline-block`, which can sometimes cause elements to resist shrinking in grid/flex layouts.

## Proposed Changes
1. **Input Styling (global.css):**
    - Change `.input-container` from `inline-block` to `block`.
    - Add `min-width: 0` to `input`, `textarea`, and `select` to force them to respect container constraints in Safari.
2. **Form Layout (BookingForm.tsx):**
    - Reduce the `form` horizontal padding from `px-8` to `px-4` on mobile, increasing available space by 32px.
    - Adjust the `section` padding to be more consistent on mobile.

## Impact
- Improved layout stability on mobile devices.
- Prevents horizontal overflow in the booking form on narrow screens.
- Better consistency across browsers.
