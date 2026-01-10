# Transportation Services Section Spec

## ADDED Requirements

### Requirement: Architecture: Self-contained Components
The `TransportationServices.astro` organism MUST be self-contained, retrieving its own data and translations.

#### Scenario: Checking component initialization
Given I inspect the organism `TransportationServices.astro`
Then it should not depend on props for language or data
And it must retrieve translations internally using `getLangFromUrl` and `useTranslations`.

### Requirement: The homepage must display a "Transportation Services" section
The homepage MUST feature a dedicated section showcasing the various transportation services offered.

#### Scenario: Viewing the services section
Given a user visits the homepage
Then they should see a section titled "Cancun Airport Transportation Services" (or localized equivalent)
And the section should contain introductory text and 4 service cards.

### Requirement: Service Cards must display title, description, and icon
Each service card MUST clearly present the service title, a brief description, and a representing icon.

#### Scenario: Inspecting a service card
Given the transportation services section is visible
When I inspect a service card
Then it should be wrapped in an `article` tag
And it must contain an `h3` heading for the title
And it must contain a paragraph for the description
And it must contain a React Icon.

### Requirement: Explicit text translation
All user-facing text in the Transportation Services section MUST be localized.

#### Scenario: Verifying text retrieval
Given the transportation services section is rendered
Then all text content must be retrieved from the project's translation files (`en.json` or `es.json`) using the `t` function.
