# Rates Table Spec

## ADDED Requirements

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
