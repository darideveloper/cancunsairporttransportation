# pricing-card-i18n Specification

## ADDED Requirements

### Requirement: Shared Checklist Content
The pricing card description SHALL include a standard checklist of features appended to the page-specific description content, ensuring consistent feature listing across all pages.

#### Scenario: Displaying pricing card description
Given the user is viewing the "Private Transportation" pricing card on the Playa del Carmen page
When the description is rendered
Then it should display the page-specific text "Our transportation service..."
And followed by the shared checklist items "- Private Service", "- Includes airport taxes...", "- 24H service hours"
