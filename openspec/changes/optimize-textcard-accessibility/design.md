# TextCard Layout and Accessibility Design

## Layout Strategy
Instead of using `direction:rtl` to visually swap the image and text columns, we will use CSS Grid ordering.

-   **Current**: `grid-cols-2 [direction:rtl]` (Implicitly swaps columns 1 and 2).
-   **Proposed**: `grid-cols-2`. When `reverse={true}` is passed:
    -   Text container: `order-2` (on desktop/md)
    -   Image container: `order-1` (on desktop/md)
    -   Mobile behavior: Stacked naturally (Text first or Image first, depending on desired mobile UX, usually Image top or Text top).

## Accessibility Architecture
To associate the section with its heading:

1.  **TextCard** receives a unique `id` (e.g., `safe-trip-booking`).
2.  **H2** is updated to accept props, specifically `id`.
3.  **TextCard** generates `titleId` (e.g., `safe-trip-booking-title`).
4.  **TextCard** renders `<section aria-labelledby="safe-trip-booking-title">`.
5.  **TextCard** passes `id="safe-trip-booking-title"` to `H2`.
