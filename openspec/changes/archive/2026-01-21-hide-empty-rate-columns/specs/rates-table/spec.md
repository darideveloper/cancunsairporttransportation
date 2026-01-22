# Spec: Dynamic Column Visibility in Rates Table

## ADDED Requirements

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
