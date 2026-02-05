# search-persistence Specification

## Purpose
TBD - created by archiving change persist-search-state. Update Purpose after archive.
## Requirements
### Requirement: Search state persists across reloads
The booking form MUST persist user inputs (locations, dates, passengers) to local storage so that they are restored upon page reload or navigation.

#### Scenario: Reloading the page preserves search criteria
Given I am on the booking form
And I have selected "Playa del Carmen" as my destination
And I have selected a departure date of "2025-12-25"
When I reload the page
Then the destination should still be "Playa del Carmen"
And the departure date should still be "2025-12-25"

#### Scenario: No defaults applied for new users
Given I have never visited the site (or cleared my cache)
When I visit the homepage
Then the booking form should NOT show any default locations
And the fields should show their placeholders only

#### Scenario: Navigation preserves state
Given I have entered search details on the Homepage
When I navigate to the "Services" page (if it has the form)
Then my search details should be preserved

