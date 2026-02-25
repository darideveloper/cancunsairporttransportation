# Proposal: Fix Booking Input Alignment and Overflow

Despite previous attempts, native date and time inputs in Safari still exhibit height inconsistencies and horizontal overflow.

## Problem
1. **Height Inconsistency:** Native pickers ignore `min-height` and `padding` differently than text inputs, leading to a "thinner" appearance.
2. **Horizontal Overflow:** Inputs are exceeding their container width, likely due to `box-sizing` defaults or internal padding in native Safari elements.
3. **Internal Alignment:** Native pickers often misalign text vertically when custom heights are applied.

## Proposed Changes
1. **Standardize Dimensions (global.css):**
   - Use fixed `height: 3rem !important` (48px) for all `input`, `textarea`, and `select` elements.
   - Force `box-sizing: border-box !important` to ensure padding doesn't add to the width.
   - Set `max-width: 100% !important` to strictly bound the inputs.
2. **Remove System Defaults:**
   - Apply `-webkit-appearance: none` and `appearance: none` to reset restrictive browser styling.
3. **Vertical Alignment:**
   - Use `flex` and `align-items: center` specifically for date and time inputs to ensure internal content is centered.

## Impact
- Perfectly uniform input heights across all types (text, date, time, select).
- No horizontal overflow on any mobile device.
- Improved visual polish and accessibility.
