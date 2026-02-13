## Context
The current implementation of `Results.astro` manually renders a single `VehicleBuyCard`. The user wants to scale this to 3 cards using dummy data and encapsulate the rendering logic into a new `VehicleBuyCards` organism.

## Goals
- Encapsulate vehicle list rendering logic.
- Enhance visual feedback with numeric ratings.
- Standardize dummy data for testing the results page layout.

## Decisions
- **Decision: Numeric Rating Display**
  - Use the existing `showNumeric` prop in `StarRating` atom.
  - Rationale: Avoids duplicating rendering logic and leverages existing implementation.
  
- **Decision: VehicleBuyCards Organism**
  - Create `VehicleBuyCards.tsx` as a functional React component.
  - Props: `vehicles: VehicleBuyCardProps[]`, `labels: VehicleBuyCardLabels`, `currencyCode: string`.
  - Rationale: Moving the loop logic out of Astro into a dedicated component makes it easier to test and potentially make it interactive later if needed.

- **Decision: Dummy Data Location**
  - Define the dummy data in `Results.astro` frontmatter.
  - Rationale: Keeps the "source of truth" for the page content at the page level while allowing easy modification.

## Risks / Trade-offs
- **Redundancy**: If the numeric rating is too close to the stars, it might look cluttered on small screens.
- **Maintenance**: Dummy data in the page might need to be kept in sync with actual API data later.
