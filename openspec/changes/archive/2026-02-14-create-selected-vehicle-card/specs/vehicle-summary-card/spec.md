# Vehicle Summary Card

## ADDED Requirements

### Requirement: Display Vehicle Summary
- The application MUST provide a component to display a summary of the selected vehicle and trip.
#### Scenario: Viewing summary
- Given a selected vehicle and trip details
- When the `SelectedVehicleCard` is rendered
- Then it should show the vehicle image, name, and capacity.
- And it should show the passenger count, origin, destination, and trip type with icons.

### Requirement: Responsive Layout
- The component MUST be responsive.
#### Scenario: Mobile view
- Given a small screen
- The layout should stack elements appropriately (e.g., image on top or smaller side-by-side).
