# Spec Delta: Merida Page Translations

## ADDED Requirements

### Requirement: Merida Page Content Localization
The `cancunToMerida` page MUST correctly display localized content for the Pricing (Services) section.

#### Scenario: Update English Translations
- GIVEN the `en.json` translation file
- WHEN the user views the Cancun to Merida page in English
- THEN the Pricing section should show the updated services (Luxury, Private, Group) with prices $995, $525, and $995 respectively.

#### Scenario: Update Spanish Translations
- GIVEN the `es.json` translation file
- WHEN the user views the Cancun to Merida page in Spanish
- THEN the Pricing section should show the updated services with prices in MXN (17910, 9450, 17910).
