# transportation-services-section Specification

## Purpose
This specification defines the "Transportation Services" section on the homepage, which showcases the range of transfer options available to customers.

## Requirements
### Requirement: Architecture: Separation of Concerns
The `TransportationServices.astro` organism MUST manage the section layout, retrieving its own data and translations. Individual services MUST be rendered using the `InfoIconCard.astro` molecule.

#### Scenario: Checking component responsibilities
Given I inspect the organism `TransportationServices.astro`
Then it should not depend on props for language or data
And it must retrieve translations internally using `useTranslations`
And it must render the `SectionHeading` and a loop of `InfoIconCard` molecules.

### Requirement: The homepage must display a "Transportation Services" section
The homepage MUST feature a dedicated section showcasing the various transportation services offered.

#### Scenario: Viewing the services section
Given a user visits the homepage
Then they should see a section titled "Cancun Airport Transportation Services" (or localized equivalent)
And the section should contain a description and 4 service cards.

### Requirement: InfoIconCard molecule usage
Each service card MUST be an instance of the `InfoIconCard` molecule, presenting the service title, a brief description, and a representing icon.

#### Scenario: Inspecting an InfoIconCard
Given the transportation services section is visible
When I inspect an `InfoIconCard`
Then it should be wrapped in an `article` tag
And it must contain an `h3` heading for the title
And it must contain a paragraph for the description
And it must contain a React Icon.

### Requirement: Explicit text translation
All user-facing text in the Transportation Services section MUST be localized.

#### Scenario: Verifying text retrieval
Given the transportation services section is rendered
Then all text content must be retrieved from the project's translation files (`en.json` or `es.json`) using the `t` function.

