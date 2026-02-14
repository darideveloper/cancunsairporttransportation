# Proposal: Hide Van Plus Vehicle

## Problem
The vehicle with ID "5" (Van Plus) is currently appearing in the search results page. The business requirement is to hide this specific vehicle type from the results shown to the user.

## Proposed Solution
Modify the `getVehicles` function in `src/lib/transportation/api.ts` to filter out any vehicles with `id === "5"` or `id === 5` after fetching them from the legacy API.

## Impact
- **Functionality**: Users will no longer see the "Van Plus" (ID 5) option in the search results.
- **Files Affected**:
  - `src/lib/transportation/api.ts`: Logic to filter the vehicle list.
  - `openspec/specs/vehicle-list-api/spec.md`: Update specification to include filtering requirements.

## Acceptance Criteria
- Vehicle with ID "5" is strictly ignored/filtered from the final array returned by `getVehicles`.
- All other vehicles are returned and rendered as usual.
- Unit tests or manual verification confirms ID 5 is absent from the results.
