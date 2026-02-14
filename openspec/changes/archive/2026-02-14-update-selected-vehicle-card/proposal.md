# Proposal: Update Selected Vehicle Card Component

## Why

Improve visual hierarchy and ensure that the transportation type is explicitly clear to the user. Using the `H2` React atom improves consistency across the store pages.

## What Changes

- Update the `SelectedVehicleCard` component to include "Private Transportation" branding.
- Remove the vehicle title from the card.
- Standardize on the `H2` React component for heading consistency.
- Migrate the `H2` atom to React to allow its integration into the vehicle card and registration flow.
- Update all `H2` instances in the codebase to the React version.

## Impact

- Affected specs: `selected-vehicle-card`
- Affected code: `SelectedVehicleCard.tsx`, `H2.tsx`, and various `.astro` files using `H2`.

## Success Criteria

- [x] "Private Transportation" text is displayed and bold.
- [x] Vehicle title removed from card.
- [x] `H2` React component used for passenger count and capacity.
- [x] All `H2` instances in the codebase migrated to the React version.
