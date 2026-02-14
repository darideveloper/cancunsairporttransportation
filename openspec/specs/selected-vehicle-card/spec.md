# selected-vehicle-card Specification

## Purpose
TBD - created by archiving change update-selected-vehicle-card. Update Purpose after archive.
## Requirements
### Requirement: Selected Vehicle Summary Branding
The `SelectedVehicleCard` SHALL display "Private Transportation" branding prominently to ensure the service type is clear.

#### Scenario: Display Private Transportation
- **WHEN** the `SelectedVehicleCard` is rendered
- **THEN** it MUST show the "Private Transportation" label (localized) in bold.

### Requirement: Simplified Vehicle Heading
The `SelectedVehicleCard` SHALL NOT display the vehicle model name (e.g., "Toyota Hiace") to simplify the UI, focusing instead on capacity and service type.

#### Scenario: Remove Vehicle Title
- **WHEN** the `SelectedVehicleCard` is displayed
- **THEN** the `selectedVehicle.name` string MUST NOT be visible as a heading.

### Requirement: Standardized H2 React Atom
The system SHALL provide an `H2` React component that replaces the previous `H2.astro` atom to allow for consistent heading styles across both Astro and React components.

#### Scenario: H2 Usage in React
- **WHEN** a React organism needs an H2 heading
- **THEN** it SHALL use the `H2.tsx` component with `clsx` for classes.

#### Scenario: H2 Usage in Astro
- **WHEN** an Astro page needs an H2 heading
- **THEN** it SHALL import and use the `H2.tsx` component.

