# transportation-services-section Delta

## MODIFIED Requirements

### Requirement: Architecture: Separation of Concerns
The `TransportationServices.astro` organism MUST be self-contained, retrieving its own data and translations. It is responsible for the section layout, including heading and decorations.

#### Scenario: Checking component initialization
Given I inspect the organism `TransportationServices.astro`
Then it should not depend on props for language or data
And it must retrieve translations internally using `getLangFromUrl` and `useTranslations`
And it must render the `SectionHeading` and `InfoIconCard` loop.

### Requirement: InfoIconCard molecule usage
Each service card MUST clearly present the service title, a brief description, and a representing icon using the `InfoIconCard` molecule.

#### Scenario: Inspecting a service card
Given the transportation services section is visible
When I inspect an `InfoIconCard`
Then it should be wrapped in an `article` tag
And it must contain an `h3` heading for the title
And it must contain a paragraph for the description
And it must contain a React Icon.
