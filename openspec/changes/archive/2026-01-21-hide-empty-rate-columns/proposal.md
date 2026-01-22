# Proposal: Hide Empty Rate Columns

## Why
When the `RatesTable` component is used with page-specific data (e.g., for the Merida page), some service tiers or specific columns (One Way / Round Trip) might not have available pricing, resulting in "N/A" values for all rows in that column. Showing these columns clutters the interface and can confuse users.

## What Changes
This proposal introduces logic to automatically hide columns (One Way, Round Trip) or entire service tiers (Private, Luxury, Group) if all their values for the current set of destinations are "N/A".

### Proposed Solution
Modify `src/components/organisms/RatesTable.astro` to:
1.  Analyze the `destinations` data before rendering.
2.  Determine which service tiers and which sub-columns (OW/RT) have at least one value that is not "N/A".
3.  Only render the columns and headers that contain valid data.
4.  Adjust header `colspan` dynamically based on the number of visible sub-columns in each tier.

## Scope
- `src/components/organisms/RatesTable.astro`: Logic for column visibility and dynamic header rendering.

## Out of Scope
- Changes to translation files (data is already "N/A" where appropriate).
- Changes to other components.
