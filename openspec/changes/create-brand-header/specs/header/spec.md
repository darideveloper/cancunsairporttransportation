# Spec: Brand Header

## ADDED Requirements

### Requirement: Global Navigation Links
The header MUST provide navigation links to "Cancun Airport Transportation", "Playa del Carmen Transfers", and "Cancun to Tulum Shuttle".

#### Scenario: Desktop View Layout
- **GIVEN** a viewport width of 1024px or greater
- **THEN** the links MUST be displayed horizontally in the center of the header
- **AND** the "My Booking" CTA button MUST be visible on the far right

#### Scenario: Mobile View Layout
- **GIVEN** a viewport width less than 1024px
- **THEN** the horizontal links MUST be hidden
- **AND** a hamburger menu icon MUST be visible on the far right

### Requirement: Full-Screen Mobile Overlay
The header MUST include a toggleable mobile menu that displays an overlay with all essential site links and information.

#### Scenario: Mobile Overlay Content
- **GIVEN** the mobile menu is open
- **THEN** it MUST display the navigation links stacked vertically
- **AND** it MUST display a "Translate website" section with a link to the alternative language
- **AND** it MUST display a "Customer service" section with phone numbers: +52 (998) 387-0435 and +1 (929) 999-1258
- **AND** it MUST display a large "My reservation" button at the bottom

### Requirement: Primary Brand Identity
The header MUST display the brand logo on the far left, acting as a shortcut to the homepage.

#### Scenario: Logo Redirection
- **GIVEN** the user is on any internal page
- **WHEN** the user clicks the logo
- **THEN** the user MUST be redirected to the root homepage (`/en/` or `/es/`)
