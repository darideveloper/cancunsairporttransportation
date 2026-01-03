# Hero Localization Specs

## MODIFIED Requirements

### Requirement: Localization Support
The hero section MUST use the centralized translation system for its content.

#### Scenario: Hero Title Rendering
- **Given** the user is viewing the home page in English (`/en`)
- **When** the page renders
- **Then** the hero title MUST display "Cancun Airport Transportation" sourced from `en.json`.

#### Scenario: Hero Title Rendering (Spanish)
- **Given** the user is viewing the home page in Spanish (`/es`)
- **When** the page renders
- **Then** the hero title MUST display "Transporte Cancún Aeropuerto" sourced from `es.json`.
