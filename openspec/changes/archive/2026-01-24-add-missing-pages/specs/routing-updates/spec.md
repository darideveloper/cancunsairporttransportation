# routing-updates Specification

## Purpose
Register the new pages in the centralized i18n routing system to enable URL generation and static path creation.

## Requirements

## ADDED Requirements
### Requirement: Register Privacy Route
The system SHALL define the `privacy` route key in the i18n routes collection.

#### Scenario: Privacy Slugs
Given the routing system initialization
Then the `privacy` key should map to `privacy` in English
And the `privacy` key should map to `es/privacidad` in Spanish

### Requirement: Register Reservation Route
The system SHALL define the `reservation` route key in the i18n routes collection.

#### Scenario: Reservation Slugs
Given the routing system initialization
Then the `reservation` key should map to `my-reservation` in English
And the `reservation` key should map to `es/mi-reservacion` in Spanish

### Requirement: Centralized Mapping
The `[...path].astro` entry point SHALL map the new route keys to their respective page components.

#### Scenario: Page Component Mapping
Given a request for a localized path
When the `pageKey` is `contact`, `privacy`, or `reservation`
Then the system should render the corresponding component from `COMPONENT_MAP`
