# Proposal: Move Booking React Components to Booking Subfolder

## Summary
Refactor the codebase by moving React components used exclusively for the booking flow into dedicated `booking` subfolders within `src/components/molecules` and `src/components/organisms`.

## Motivation
To improve project organization and maintainability by grouping components related to a specific domain (booking/store) together, separating them from general-purpose UI components. This also clarifies which components are specialized versus which are global.

## Technical Intent
- Relocate 6 React (TSX) components to `molecules/booking` and `organisms/booking`.
- Update all internal relative imports within the moved components to account for the new directory depth.
- Update import statements in consumer pages (`Results.astro` and `Register.astro`).
- Ensure no Astro components are moved, as per user instructions.

## Affected Areas
- `src/components/molecules/`
- `src/components/organisms/`
- `src/components/pages/store/`
