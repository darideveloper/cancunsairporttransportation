# responsive-layout Specification

## Purpose
TBD - created by archiving change update-private-details-responsive-table. Update Purpose after archive.
## Requirements
### Requirement: Responsive Scroll Container
The table MUST be wrapped in a container that allows horizontal scrolling on mobile devices without breaking the page layout.

#### Scenario: Mobile Viewport
- **Given** I am viewing the Private Details section on a mobile device (e.g., width < 768px)
- **When** the table content exceeds the screen width
- **Then** I should be able to scroll the table horizontally to see all columns
- **And** the page itself should not scroll horizontally (no layout shift)

### Requirement: Fixed First Column
The first column (Arrival) MUST remain fixed (sticky) on the left side while scrolling horizontally to maintain context.

#### Scenario: Horizontal Scroll
- **Given** I am scrolling the table horizontally
- **When** I scroll to the right
- **Then** the "Arrival" column should stay anchored to the left edge of the table view
- **And** the other columns (Departure, Capacity, Prices) should slide under or beside it
- **And** the sticky column should have a solid background so the scrolling content is not visible through it
- **And** a shadow or visual separator should distinguish the fixed column from the scrolling content

