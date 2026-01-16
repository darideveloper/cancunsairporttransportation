# Destinations Section Spec

## ADDED Requirements

### Requirement: reusable-destinations-component
The `Destinations` component MUST be a reusable organism that renders the "Destinations" list based on the **mandatory** `page` prop context.

#### Scenario: Rendering Destinations
- **Given** the component is passed a `page` prop (e.g., "home" or "playaDelCarmen")
- **When** the component renders
- **Then** it MUST display 3 pricing cards for Tulum, Playa del Carmen, and Cancun/Hotel Zone
- **And** it MUST use translation keys from `pages.{page}.destinations.cards.{id}` for title, price, description, link, and CTA text
- **And** it MUST display the images associated with each destination (Tulum, Playa, Cancun)

#### Scenario: View More CTA
- **Given** the component is rendered
- **Then** it MUST display a "View More" button at the bottom
- **And** the button link MUST be sourced from `t("pages.{page}.destinations.viewMoreLink")`
- **And** the button text MUST be sourced from `t("pages.{page}.destinations.viewMore")`

### Requirement: playa-del-carmen-translations
The Playa del Carmen page specific translations MUST support the new component structure.

#### Scenario: Missing Keys
- **Given** the `Destinations` requires `viewMore` and `viewMoreLink` keys
- **When** using the component on the Playa del Carmen page
- **Then** `pages.playaDelCarmen.destinations` in the translation files MUST contain these keys (copied from home or specific for PDC)
