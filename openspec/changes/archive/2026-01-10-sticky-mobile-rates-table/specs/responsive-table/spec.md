# Responsive Rates Table Spec

## ADDED Requirements

### Requirement: Sticky First Column
The first column of the Rates Table MUST remain fixed in position when scrolling horizontally on mobile devices.

#### Scenario: User scrolls table horizontally
- **Given** I am viewing the Rates Table on a mobile device where horizontal scrolling is active
- **When** I scroll the table horizontally to view pricing tiers
- **Then** the "Destination" header and all destination names in the first column should remain visible at the left edge
- **And** the pricing data cells should scroll normally

#### Scenario: Visual Layering and Backgrounds
- **Given** the first column is sticky
- **When** content scrolls
- **Then** the sticky column cells must have a solid background color (white or gray) to prevent underlying content from being visible through them
- **And** the z-index should be set such that the column stays above row content

### Requirement: Header Interaction
The table header MUST coordinate with the sticky column.

#### Scenario: Corner Cell Fixed Position
- **Given** the table has both vertical (header) and horizontal (column) sticky elements
- **When** I scroll both vertically and horizontally
- **Then** the top-left "Destination" header cell must remain fixed in the top-left corner
- **And** it must have a z-index higher than both the rest of the header and the rest of the first column to stay on top
