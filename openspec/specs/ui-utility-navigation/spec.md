# ui-utility-navigation Specification

## Purpose
TBD - created by archiving change add-top-bar. Update Purpose after archive.
## Requirements
### Requirement: Global Top Bar Visibility
The website MUST display a utility bar at the very top of every page containing essential contact and configuration options.

#### Scenario: Displaying the Top Bar
- **GIVEN** a user navigates to any page on the site
- **THEN** they see an orange-tinted or white bar at the top
- **AND** it contains the language selector, contact numbers, and social links

### Requirement: Route-based Language Switching
The language selector MUST allow users to switch between English and Spanish.

#### Scenario: Switching from English to Spanish
- **GIVEN** the user is at `/en/`
- **WHEN** the user clicks "Español" in the Top Bar
- **THEN** they are redirected to `/es/`

### Requirement: Click-to-Call Contact Numbers
Phone numbers in the top bar MUST be clickable on mobile devices.

#### Scenario: Calling the Mexico support line
- **GIVEN** a user on a mobile device
- **WHEN** they tap the Mexico phone number
- **THEN** the device's dialer opens with `+529983870435`

### Requirement: Screen Reader Compatibility
All non-text elements (icons) MUST have descriptive ARIA labels to ensure accessibility and SEO clarity.

#### Scenario: Navigating with a Screen Reader
- **GIVEN** a visually impaired user using a screen reader
- **WHEN** they focus on the Facebook icon in the top bar
- **THEN** the screen reader announces "Follow us on Facebook"

