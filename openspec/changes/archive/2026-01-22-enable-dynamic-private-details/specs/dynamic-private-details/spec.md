# Spec: Dynamic PrivateDetails Capability

## ADDED Requirements

### Requirement: Render Group Transfer Details
The system SHALL render the Private Details component with content specific to Group Transfers when the page context is "group".

#### Scenario: Rendering Group Transfers Details
Given the user visits the Group Transfers page
And the translations have valid content for `pages.group.privateDetails`
When the page renders the `PrivateDetails` component
Then it should display the title, description, and table specific to Group Transfers.

### Requirement: Render Luxury Transfer Details
The system SHALL render the Private Details component with content specific to Luxury Transfers when the page context is "luxury".

#### Scenario: Rendering Luxury Transfers Details
Given the user visits the Luxury Transportation page
And the translations have valid content for `pages.luxury.privateDetails`
When the page renders the `PrivateDetails` component
Then it should display the title, description, and table specific to Luxury Transportation.

### Requirement: Render Private Transfer Details
The system SHALL render the Private Details component with content specific to Private Transfers when the page context is "private".

#### Scenario: Rendering Private Transfers Details
Given the user visits the Private Airport Transfer page
And the translations have valid content for `pages.private.privateDetails`
When the page renders the `PrivateDetails` component
Then it should display the title, description, and table specific to Private Transfers (migrated from legacy key).
