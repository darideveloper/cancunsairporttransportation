# Proposal: Fix Collapsed Booking Inputs on Mobile

The previous fix for Safari's intrinsic width issues caused date and time inputs to "collapse" into small squares because `min-width: 0` allowed them to shrink too much.

## Problem
Native `type="date"` and `type="time"` inputs in iOS Safari prioritize their internal content over the container's `width: 100%` when `min-width: 0` is present, causing them to shrink to the minimum possible size that fits their icons/text.

## Proposed Changes
1. **Force Dimensions (global.css):**
   - Apply `width: 100% !important` and `min-width: 100% !important` to all inputs.
   - Apply a consistent `min-height` (e.g., `3rem` or `48px`) with `!important` to ensure vertical presence.
2. **Container Behavior:**
   - Update `.input-container` to use `flex flex-col` to better manage children in Safari.

## Impact
- Inputs will correctly stretch to fill their grid columns.
- Prevents horizontal overflow while maintaining visual integrity.
- Consistent touch targets for mobile users.
