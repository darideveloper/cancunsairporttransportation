# DRY Implementation for RatesTable

## ADDED Requirements

### Requirement: Service Category Abstraction
The component MUST define the service categories (Private, Luxury, Group) as a structured configuration to enable iteration.

#### Scenario: Configuration definition
Given the `RatesTable` component is loading
Then a configuration array object (e.g., `SERVICE_TIERS`) should be defined
And it should contain:
  - `id`: string (e.g., 'private', 'luxury', 'group')
  - `label`: string (localized label)
  - `pax`: string (localized pax info)
  - `owKey`: string (property key for One Way price)
  - `rtKey`: string (property key for Round Trip price)

### Requirement: Dynamic Header Rendering
The component MUST render table headers dynamically based on the configuration.

#### Scenario: Main Headers
Given the table headers are being rendered
Then it should iterate over the configuration to render the category headers (Private, Luxury, Group)
And each header should assume the correct `colspan`, `classes`, and content including the pax count span.

#### Scenario: Subheaders
Given the second row of headers (One Way / Round Trip) is being rendered
Then it should iterate over the configuration to render the pair of subheaders for each category
And it should maintain the `border-l` class logic (typically applied to the start of a new category group).

### Requirement: Dynamic Body Rendering
The component MUST render the rate cells dynamically.

#### Scenario: Rate Cells
Given a destination row is being rendered
Then it should iterate over the configuration to render the cells
And it should access the correct price data from the destination object using the keys defined in the configuration
And it should maintain specific styling (e.g., blue text for Round Trip, border-left for the first column of a group).

