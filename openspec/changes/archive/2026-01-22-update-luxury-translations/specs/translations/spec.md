# Translations

## ADDED Requirements

### Requirement: Luxury Transportation Translations

The Luxury Transportation page translations MUST match the latest approved content.

#### Scenario: Verify English content
Given the user is viewing the Luxury Transportation page in English
Then the "Private Details" section title should be "Cancun Luxury Transportation"
And the pricing table should use correct prices.

#### Scenario: Verify Spanish content
Given the user is viewing the Luxury Transportation page in Spanish
Then the "Private Details" section title should be "Transportación de lujo en Cancún"
And the pricing table should use correct prices.
