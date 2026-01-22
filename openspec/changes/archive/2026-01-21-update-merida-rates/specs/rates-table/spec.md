# Rates Table Specification

## ADDED Requirements

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
