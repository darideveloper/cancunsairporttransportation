# rates-table Specification

## Purpose
TBD - created by archiving change implement-rates-table. Update Purpose after archive.
## Requirements
### Requirement: Display Rates Table
The system MUST display a responsive rates table for transportation services.

#### Scenario: Display Rates Table content
- **Given** a user is on the homepage (English or Spanish)
- **When** they scroll to the rates section
- **Then** they should see a table titled "Cancun Airport Transportation Rates"
- **And** the table should have columns for Destination, Private Taxi (1-8 pax), Luxury Taxi (1-5 pax), and Taxi for Groups (1-16 pax)
- **And** each service type should show prices for "One Way" and "Round Trip"
- **And** the prices should match the provided data (e.g., Cancun Downtown $29.99 USD)

#### Scenario: Responsive Design
- **Given** the user is viewing on a mobile device
- **Then** the table should be scrollable horizontally or formatted to fit the screen without breaking layout
- **And** text should be readable

#### Scenario: Accessibility
- **Then** the table headers should have `scope="col"` or `row`
- **And** the table should have a caption
- **And** cells should have `data-label` for mobile context if using a stacked layout (optional, but good for SEO/Mobile)

#### Scenario: Translations
- **Given** the user switches language
- **Then** the table headers, caption, and static text should update (e.g., "One Way" -> "Sencillo", "Round Trip" -> "Redondo")

### Requirement: Table Usability
The rates table MUST provide context-preserving navigation for users on all device sizes.

#### Scenario: Sticky Headers
Given a long list of destinations in the Rates Table
When the user scrolls vertically down the list
Then the column headers (Service Tiers) MUST remain fixed at the top of the table view
And the destination names (Left Column) MUST remain fixed at the left when scrolling horizontally.

#### Scenario: Intersection Handling
Given the table is scrolled both vertically and horizontally
Then the Top-Left corner cell (Destination Header) MUST remain fixed and always visible above both the row headers and column headers.

### Requirement: Update Merida Rates
The rates table on the Cancun to Merida page MUST reflect the specific pricing for Private and Luxury tiers as provided by the business, overriding the global defaults.

#### Scenario: Verify Merida Page Rates
Given I am on the Cancun to Merida page
When I view the Rates Table
Then I should see a row for "Merida" (or "Mérida" in Spanish)
And the Private One Way price should be "$525 USD" (en) or "$9,975 MXN" (es)
And the Private Round Trip price should be "$1,045 USD" (en) or "$19,855 MXN" (es)
And the Luxury One Way price should be "$995 USD" (en) or "$18,905 MXN" (es)
And the Luxury Round Trip price should be "$1,960 USD" (en) or "$37,240 MXN" (es)

### Requirement: Dynamic Column Visibility
The table MUST only display columns (Service Tiers and Trip Types) that contain valid pricing data for at least one destination in the current set.

#### Scenario: Hiding an entire Service Tier
- **Given** a `RatesTable` showing destinations where Group transportation is unavailable ("N/A") for both One Way and Round Trip.
- **When** the table renders.
- **Then** the "Taxi for Groups" column and its sub-columns MUST be hidden entirely.

#### Scenario: Hiding a specific Trip Type within a Tier
- **Given** a `RatesTable` where Luxury transportation only offers One Way service ("N/A" for all Round Trip values).
- **When** the table renders.
- **Then** the "Round Trip" sub-column for Luxury MUST be hidden, and the "Luxury Taxi" header `colspan` MUST be 1.

#### Scenario: Displaying columns with partial data
- **Given** a `RatesTable` where at least one destination has a valid price for a column.
- **When** the table renders.
- **Then** that column MUST be visible for all destinations, even if some of them show "N/A".

