# transportation-services-section Specification

## Purpose
This specification defines the "Transportation Services" section on the homepage, which showcases the range of transfer options available to customers.
## Requirements
### Requirement: Architecture: Separation of Concerns
The `TransportationServices.astro` organism MUST be self-contained, retrieving its own data and translations. It is responsible for the section layout, including heading and decorations.

#### Scenario: Checking component initialization
Given I inspect the organism `TransportationServices.astro`
Then it should not depend on props for language or data
And it must retrieve translations internally using `getLangFromUrl` and `useTranslations`
And it must render the `SectionHeading` and `InfoIconCard` loop.

### Requirement: The homepage must display a "Transportation Services" section
The homepage MUST feature a dedicated section showcasing the various transportation services offered.

#### Scenario: Viewing the services section
Given a user visits the homepage
Then they should see a section titled "Cancun Airport Transportation Services" (or localized equivalent)
And the section should contain a description and 4 service cards.

### Requirement: InfoIconCard molecule usage
Each service card MUST be an instance of the `InfoIconCard` molecule, presenting the service title, a brief description, and a representing icon. It MAY also include optional icons next to the title and/or at the bottom.

#### Scenario: Inspecting an InfoIconCard with optional icons
Given the transportation services section is visible
When an `InfoIconCard` is rendered with `TitleIcon` and `BottomIcon`
Then the `TitleIcon` should appear next to the `h3` heading
And the `BottomIcon` should appear at the end of the `article` content.

### Requirement: Explicit text translation
All user-facing text in the Transportation Services section MUST be localized.

#### Scenario: Verifying text retrieval
Given the transportation services section is rendered
Then all text content must be retrieved from the project's translation files (`en.json` or `es.json`) using the `t` function.

