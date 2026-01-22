# Proposal: Responsive Private Details Table

## Problem
The `PrivateDetails` component's table currently overflows or compresses on mobile devices due to a lack of responsive scrolling and fixed column logic. The user wants to replicate the behavior found in `RatesTable.astro` where the first column remains fixed while the rest of the table scrolls horizontally on smaller screens.

## Solution
We will update `src/components/organisms/PrivateDetails.astro` to implement a responsive table layout:
1. Wrap the table in a scrollable container.
2. Fix the first column (Arrival) using sticky positioning (`sticky left-0`).
3. Add a minimum width to the table to force scrolling on narrow viewports.
4. Apply consistent styling and shadow indicators for the sticky column.

## Scope
- File: `src/components/organisms/PrivateDetails.astro`
- No changes to data fetching or logic, only presentation.

## Risks
- Sticky positioning can be tricky with parent `overflow` properties; we must ensure the overflow is applied to the direct parent of the table.
- Background colors on sticky cells must be solid to prevent transparency issues when scrolling.
