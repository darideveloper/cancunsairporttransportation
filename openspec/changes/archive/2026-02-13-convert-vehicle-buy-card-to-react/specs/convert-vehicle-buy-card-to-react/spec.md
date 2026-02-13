# Capability: convert-vehicle-buy-card-to-react

## ADDED Requirements

### Requirement: vehicle-buy-card-react-conversion
The `VehicleBuyCard` component MUST be converted to a React component.

#### Scenario: React Component Interface
- **WHEN** `VehicleBuyCard.tsx` is implemented
- **THEN** it MUST be an `export default function`.
- **AND** it MUST receive translations via props or a `labels` object to maintain purity.

#### Scenario: Visual and SEO parity
- **WHEN** rendered on a page
- **THEN** it MUST produce identical HTML structure and SEO attributes (Schema.org) as the original `.astro` version.
