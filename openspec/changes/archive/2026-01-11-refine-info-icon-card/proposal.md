# Proposal: Refine InfoIconCard with Optional Icons

## Problem
The `InfoIconCard` molecule currently only supports a single main icon at the top. The user wants to add two optional icons: one next to the title and one at the bottom of the card.

## Proposed Solution
1. Add `TitleIcon` and `BottomIcon` optional props to `InfoIconCard.astro`.
2. Update the template to render these icons if provided.
3. Ensure the layout remains clean and responsive.

## Scope
- `src/components/molecules/InfoIconCard.astro`
- `openspec/specs/transportation-services-section/spec.md` (updated via delta)
