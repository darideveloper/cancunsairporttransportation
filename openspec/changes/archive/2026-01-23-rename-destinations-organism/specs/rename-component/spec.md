# Capability: Rename Destinations Component

## MODIFIED Requirements

### Requirement: Use FeaturedDestinations for the destinations section
The component previously known as `Destinations` in the organisms folder MUST now be renamed to `FeaturedDestinations` to differentiate it from the Destinations page.

#### Scenario: Update import in Home page
- **Given** I am editing `src/components/pages/landing/Home.astro`
- **When** I look for the `Destinations` import from organisms
- **Then** It should be updated to `FeaturedDestinations` from `./FeaturedDestinations.astro` (or the appropriate relative path)
- **And** The component tag `<Destinations />` should be updated to `<FeaturedDestinations />`
