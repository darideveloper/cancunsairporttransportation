# Reliable Service Section Spec

## ADDED Requirements

### Requirement: Display Reliable Transportation Service Section
The homepage MUST display a "Reliable Transportation Service" section at the bottom, before the footer.

#### Scenario: Verify Section Content
Given I am on the homepage
Then I should see a section titled "Reliable Transportation Service"
And it should contain the text describing 10 years of experience
And it should contain a "Client Photos" button
And it should display an image related to the service

### Requirement: Use TextCard Component
The section MUST be implemented using the `TextCard` component.

#### Scenario: Code Usage
Given I inspect the codebase
Then I should see `TextCard` component being used in `index.astro` for the reliable service section

### Requirement: Localization
All text content (title, paragraphs, button label) MUST be localized using the project's translation system (`en.json` and `es.json`).

#### Scenario: Verify English Translations
Given I view the English version of the site
Then the section should display text in English

#### Scenario: Verify Spanish Translations
Given I view the Spanish version of the site
Then the section should display text in Spanish

### Requirement: Image
The section MUST display an appropriate image (e.g., `reliable-company.webp` or similar) via the `TextCard` image slot.

#### Scenario: Image Display
Given I inspect the section
Then I should see an image rendered in the image slot
And it should have an appropriate alt text
