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
The section MUST display the client photos image (`client-app-es.png` or `webp`) via the `TextCard` image slot.

#### Scenario: Image Display
Given I inspect the section
Then I should see the client photos image rendered in the image slot
And it should have an appropriate alt text

### Requirement: CTA Button
The section MUST use `ButtonCta` for the "Client Photos" link.
Start with a `react-icons` photo icon (e.g., `FaImages`).
Display the label and sublabel in a flex column.

#### Scenario: Verify CTA Layout
Given I verify the button
Then I should see a photo icon
And I should see the main label text
And I should see the sublabel text

### Requirement: Markdown Content
The description text MUST be rendered using markdown to support multiple paragraphs.

#### Scenario: Verify Content Formatting
Given I inspect the description
Then it should be rendered as HTML from markdown content
