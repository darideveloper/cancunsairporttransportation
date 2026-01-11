# Proposal: Refactor Transportation Services and InfoIconCard

## Problem
The `InfoIconCard` component is currently an organism that handles both the section heading and the loop of cards. This makes it less flexible and mixes responsibilities. The user wants to move the single-card logic to a molecule named `InfoIconCard` and have the `TransportationServices` organism manage the section structure and data looping.

## Proposed Solution
1. Move `InfoIconCard.astro` to molecules and refactor it to represent a single card.
2. Update `TransportationServices.astro` to act as the primary container, rendering the section heading and looping through the `InfoIconCard` molecules.
3. Remove the redundant `ServiceCard.astro` molecule.

## Scope
- `src/components/molecules/InfoIconCard.astro` (refactored)
- `src/components/organisms/TransportationServices.astro` (refactored)
- `src/components/molecules/ServiceCard.astro` (deleted)
- `openspec/specs/transportation-services-section/spec.md` (updated via delta)
