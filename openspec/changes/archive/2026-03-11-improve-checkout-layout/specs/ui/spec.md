# Specification: UI Improvements for Checkout

## ADDED Requirements

### Requirement: Sticky Sidebar Layout
The registration page SHALL implement a "sticky" layout for the summary and payment sidebar on desktop to maintain visibility during form completion.

#### Scenario: Sticky sidebar on desktop
- **Given**: The user is viewing the registration page on a screen with width >= 1024px (`lg` breakpoint).
- **When**: The user scrolls down to fill the arrival or passenger details on the left.
- **Then**: The right-side column (summary, price, payment selection, and submit button) SHALL remain fixed (sticky) at the top of the viewport.
- **And**: The column SHALL NOT overlap with the page footer.

### Requirement: Responsive Summary Placement
The service summary SHALL be placed strategically based on the screen size to optimize the user flow.

#### Scenario: Placement on mobile
- **Given**: The user is on a screen with width < 1024px.
- **Then**: The `SelectedVehicleCard` SHALL be rendered at the very top of the form area, before any input sections.
- **And**: The price summary and payment selection SHALL follow after the form sections.

#### Scenario: Placement on desktop
- **Given**: The user is on a screen with width >= 1024px.
- **Then**: The `SelectedVehicleCard` SHALL be rendered at the top of the right-side sticky column.
