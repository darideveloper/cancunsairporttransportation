# Design: Refactor Transportation Services

## Architecture Changes

### Old Structure
- `TransportationServices.astro` (Organism): Defines data, passes it to `InfoIconCard`.
- `InfoIconCard.astro` (Organism): Renders `SectionHeading` and loops through `ServiceCard`.
- `ServiceCard.astro` (Molecule): Renders a single card.

### New Structure
- `TransportationServices.astro` (Organism): 
    - Defines data.
    - Renders `SectionHeading` (Title/Description).
    - Renders `TopIcon` / `BottomIcon` decorations.
    - Loops through `InfoIconCard`.
- `InfoIconCard.astro` (Molecule):
    - Renders a single card (replacing `ServiceCard`).
    - Moved from `organisms` to `molecules`.

## Rationale
This aligns with the Atomic Design principles where organisms are responsible for layout and composition of molecules, while molecules are discrete functional units. Moving the section-level logic (heading, container) to `TransportationServices` makes both components more reusable.
