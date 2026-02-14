# Proposal: Add Green Branding and Button Variants

This proposal introduces a new green color to the brand identity and implements it within the `ButtonCta` component through two new variants: `green` and `greenGhost`.

## Problem
The current branding system lacks a green color despite it being used in utility contexts (like success messages and search badges). There is a need for a consistent brand green that can be used for affirmative primary and secondary actions.

## Proposed Changes
1. **Global Tokens**: Add `#2e8e1f` as `--color-green` in the Tailwind v4 `@theme` block within `global.css`.
2. **Button Variants**:
   - `green`: A solid green button with white text.
   - `greenGhost`: An outlined green button with a subtle green background (10% opacity) and green text.

## Impact
- **Consistency**: Centralizes the green color definition.
- **Flexibility**: Provides developers with more high-visibility variants for call-to-action buttons.
- **Standardization**: Follows the existing pattern of solid and ghost variants established for orange, blue, and black.
