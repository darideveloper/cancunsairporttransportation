# pricing-card-i18n Specification

## Purpose
TBD - created by archiving change extract-pricing-text. Update Purpose after archive.
## Requirements
### Requirement: Localized Badge Text
The "Most Popular" badge on the pricing card SHALL display text localized to the current page language, sourced from translation files.

#### Scenario: Displaying "Most Popular" badge
Given the user is viewing a pricing card marked as a best seller
When the page language is "es"
Then the badge should read "Más Popular" (or equivalent translation)
And when the page language is "en"
Then the badge should read "Most Popular"

### Requirement: Localized Price Label
The "Price from" label on the pricing card SHALL display text localized to the current page language, sourced from translation files.

#### Scenario: Displaying "Price From" label
Given the user is viewing a pricing card
When the page language is "es"
Then the label should read "Precio desde"
But when the page language is "en"
Then the label should read "Price from"

### Requirement: Shared Checklist Content
The pricing card description SHALL include a standard checklist of features appended to the page-specific description content, ensuring consistent feature listing across all pages.

#### Scenario: Displaying pricing card description
Given the user is viewing the "Private Transportation" pricing card on the Playa del Carmen page
When the description is rendered
Then it should display the page-specific text "Our transportation service..."
And followed by the shared checklist items "- Private Service", "- Includes airport taxes...", "- 24H service hours"

