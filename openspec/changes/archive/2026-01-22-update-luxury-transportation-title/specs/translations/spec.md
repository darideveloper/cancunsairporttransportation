# Capability: Page Translations

## ADDED Requirements

### Requirement: Luxury Page Title
The Luxury Transportation page MUST display the correct title based on the selected language.

#### Scenario: Update English Title
Given the language is "en"
When the `pages.luxury.title` key is accessed
Then it should return `Luxury Airport Transfer Cancun`

#### Scenario: Update Spanish Title
Given the language is "es"
When the `pages.luxury.title` key is accessed
Then it should return `Transportación de lujo en Cancún Aeropuerto`
