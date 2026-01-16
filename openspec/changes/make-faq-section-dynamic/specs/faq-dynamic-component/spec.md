# Spec: Dynamic FAQ Section

## MODIFIED Requirements
### [faq-section](file:///develop/astro/cancunsairporttransportation/openspec/specs/faq-section/spec.md)

### Requirement: The FAQ section must support dynamic content loading based on the current page.
The system SHALL provide a reusable FAQ component that dynamically loads content from page-specific translation paths while sharing a global description.

#### Scenario: Render FAQ on Home Page
- **Given** I am on the home page.
- **And** the translations for `pages.home.faq` are defined.
- **When** the `FaqSection` component is rendered with `page="home"`.
- **Then** it must display the title from `pages.home.faq.title`.
- **And** it must display the global description from `global.sections.faq.description`.
- **And** it must iterate over the items in `pages.home.faq.items` and render `FaqItem` for each.

#### Scenario: Render FAQ on Destination Page
- **Given** I am on the Playa del Carmen page.
- **And** the translations for `pages.playaDelCarmen.faq` are defined.
- **When** the `FaqSection` component is rendered with `page="playaDelCarmen"`.
- **Then** it must display the title from `pages.playaDelCarmen.faq.title`.
- **And** it must display the global description from `global.sections.faq.description`.
- **And** it must iterate over the items in `pages.playaDelCarmen.faq.items` and render `FaqItem` for each.
