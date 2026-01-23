# Proposal: Rename Destinations Organism

## Problem
The component `src/components/organisms/Destinations.astro` has the same name as the page component `src/components/pages/landing/Destinations.astro`, which causes confusion during development and when searching for files.

## Proposed Solution
Rename `src/components/organisms/Destinations.astro` to `src/components/organisms/FeaturedDestinations.astro` and update all references in the codebase.

## Scope
- Rename the file `src/components/organisms/Destinations.astro`.
- Update all imports and usages of this component.
- Ensure the component functionality remains unchanged.
