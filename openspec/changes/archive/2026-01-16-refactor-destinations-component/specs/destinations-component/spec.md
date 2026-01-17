# Destinations Component Specification

## ADDED Requirements

### Requirement: `Destinations` Reusability
The destinations section MUST be encapsulated in a reusable component that adapts its content based on the current page.

#### Scenario: Home Page Rendering
Given the `Destinations` is used on the "home" page
When the component renders
Then it should display the title, text, and destination cards defined in `pages.home.destinations`
And it should display a "View More" button linking to `/destinations`.

#### Scenario: Playa del Carmen Page Rendering
Given the `Destinations` is used on the "playaDelCarmen" page
When the component renders
Then it should display the title, text, and destination cards defined in `pages.playaDelCarmen.destinations`
And it should display a "View More" button linking to the appropriate destination list (e.g., `/destinations` or specific link).
