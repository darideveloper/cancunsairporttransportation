# results-integration Specification

## Purpose
TBD - created by archiving change add-marketing-why-choose-us. Update Purpose after archive.
## Requirements
### Requirement: Integrate new `WhyChooseUs` section in Results Page
The Results page MUST include the new `WhyChooseUs` organism to provide reassurance to users during the booking process.

#### Scenario: Results Page Section Display
- **Given** the user is viewing the Results page
- **When** scrolling to the relevant section (e.g., below the results or at the bottom)
- **Then** they MUST see the new "Why Choose Us" component with the list of items and the GIF

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

