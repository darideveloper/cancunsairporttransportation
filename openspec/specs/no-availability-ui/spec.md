# no-availability-ui Specification

## Purpose
TBD - created by archiving change improve-empty-results-state. Update Purpose after archive.
## Requirements
### Requirement: No Availability Component
A new `NoAvailability` component MUST be implemented to display a user-friendly message and alternative contact options when vehicle search returns no results. It SHALL follow the provided design.

#### Scenario: Rendering the polite empty state
Given the `NoAvailability` component is rendered
Then it displays a centered layout with a light blue background (`bg-blue-50` or similiar)
And it shows a small paragraph text "Lo sentimos :(" above the main heading
And it shows an H1 heading with the main error message "Desafortunadamente no encontramos disponibilidad para la Zona / Horarios solicitados, descuida podemos resolverlo."
And the text is centered and responsive.

#### Scenario: Displaying contact options
Given the `NoAvailability` component is rendered
Then it displays four action buttons below the text
And the first button is "USA & Canada" with variant `black` (solid) and an icon
And the second button is "Mexico & Resto del mundo" with variant `blackGhost` and an icon
And the third button is "WhatsApp" with variant `blackGhost`
And the fourth button is "Chat" with variant `blackGhost`
And on mobile screens, the buttons stack vertically or in a 2x2 grid
And on desktop screens, the buttons align horizontally.

### Requirement: Vehicle Buy Cards integration
The `VehicleBuyCards` organism MUST be updated to use the new `NoAvailability` component instead of generic text when no results are found.

#### Scenario: No vehicles found
Given the `VehicleBuyCards` component has finished loading
When the `vehicles` list is empty
Then it renders the `NoAvailability` component instead of the simple "No vehicles found" text.

#### Scenario: API Error
Given the `VehicleBuyCards` component encounters an API error
When the error state is true
Then it renders the `NoAvailability` component to offer help.

