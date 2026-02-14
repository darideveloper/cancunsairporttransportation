# Proposal: Convert VehicleBuyCard to React

## Overview
Convert `VehicleBuyCard.astro` and its atomic dependencies (`ButtonCta.astro`, `CheckListItem.astro`, `StarRating.astro`) into React components. This allows for better integration into React-based islands and ensures UI consistency.

## Capabilities
- `convert-atoms-to-react`: Convert base atomic components to React.
- `convert-vehicle-buy-card-to-react`: Convert the main molecule component to React.
- `update-usages`: Update all existing pages and components to use the new React versions.

## What Changes

> [!NOTE] Spec: convert-atoms-to-react
> - ADDED: Component `ButtonCta.astro` converted to React `ButtonCta.tsx`.
> - ADDED: Component `CheckListItem.astro` converted to React `CheckListItem.tsx`.
> - ADDED: Component `StarRating.astro` converted to React `StarRating.tsx`.

> [!NOTE] Spec: convert-vehicle-buy-card-to-react
> - ADDED: Main molecule `VehicleBuyCard` converted to React `VehicleBuyCard.tsx`.

> [!NOTE] Spec: update-usages
> - ADDED: Update all references to converted components across the codebase.

## Success Criteria
- [ ] `VehicleBuyCard` survives conversion to React without visual regressions.
- [ ] Atomic components are fully functional as React components.
- [ ] All previous `.astro` usages are successfully updated to `.tsx`.
- [ ] Schema.org metadata and SEO attributes are preserved.
