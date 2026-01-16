# Testimonials Component Spec

## ADDED Requirements

### Requirement: Page Specific Testimonials
The Testimonials component MUST be able to display different content based on the page it is used on.

#### Scenario: Displaying Playa del Carmen testimonials
Given I am on the "Playa del Carmen" page
When I view the Testimonials section
Then I should see testimonials fetched from `pages.playaDelCarmen.testimonials`
And the default global testimonials should not be shown

### Requirement: Global Fallback (Home Page)
The Testimonials component MUST support a default mode for pages where no specific testimonials are defined (e.g. Home).

#### Scenario: Displaying Home/Global testimonials
Given I am on the Home page (or any page without specific testimonials defined)
And no `page` prop is passed to the component
Then I should see testimonials fetched from `pages.home.testimonials` (formerly global)


### Requirement: Testimonials Component Logic
The `Testimonials.astro` component logic MUST be updated to support dynamic paths.

#### Scenario: Constructing translation path
Given the `Testimonials` component is rendered
When a `page` prop is provided (e.g. "playaDelCarmen")
Then the translation path should be `pages.playaDelCarmen.testimonials`
When no `page` prop is provided
Then the translation path should be `pages.home.testimonials`

### Requirement: Translation Structure
The translation files MUST be reorganized to support page-specific testimonials.

#### Scenario: Translation keys location
The `global.sections.testimonials` key should be moved to `pages.home.testimonials`.
A new key `pages.playaDelCarmen.testimonials` should be added.
