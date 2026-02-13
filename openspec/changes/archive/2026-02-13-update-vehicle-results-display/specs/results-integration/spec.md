## ADDED Requirements
### Requirement: Render Vehicle Results with Organism
The Results page SHALL render vehicle options using the `VehicleBuyCards` organism for better structure and maintainability.

#### Scenario: Display 3 dummy vehicles
- **GIVEN** the `Results.astro` page
- **WHEN** the page is loaded
- **THEN** it MUST render 3 vehicle cards based on fixed dummy data defined in the frontmatter.
- **AND** these cards MUST be rendered through the `VehicleBuyCards` organism component.

### Requirement: Dummy Data Structure
The dummy data defined in `Results.astro` MUST include at least:
- Vehicle image URL
- Vehicle name
- Capacity (passengers and luggage)
- Pricing (current and original)
- Rating
- Description and highlight items.

#### Scenario: Verify Dummy Data usage
- **GIVEN** 3 vehicles defined as an array in `Results.astro`
- **WHEN** passed to `VehicleBuyCards`
- **THEN** the organism MUST iterate over the array and render each `VehicleBuyCard` correctly.
