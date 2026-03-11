# Change: Improve Checkout Layout

## Why
Currently, the registration page uses a full-width header for the vehicle summary, which pushes the main form down. Additionally, the right-hand sidebar feels empty on large screens and doesn't utilize the space effectively. When the user reaches the payment step (especially for Card payments), the sidebar expands vertically, potentially causing the user to lose context of their service summary.

## What Changes
1.  **Relocate Service Summary**: Move the `SelectedVehicleCard` from the top of the page into the right-hand sidebar.
2.  **Sticky Sidebar**: Implement a sticky sidebar layout on desktop (`lg` screens) to keep the service summary and price total visible at all times.
3.  **Visual Balance**: Switch from a top-heavy layout to a side-by-side layout that distributes information more evenly across the screen.
4.  **Responsive Adaptation**: Ensure the summary card adapts its layout (from horizontal to vertical) when placed in the narrower sidebar.

## Impact
- **Affected specs**: `ui`, `registration`
- **Affected code**: `RegisterForm.tsx`, `SelectedVehicleCard.tsx`
