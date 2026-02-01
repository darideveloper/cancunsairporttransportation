# ui-utility-navigation Specification

## Purpose
TBD - created by archiving change add-top-bar. Update Purpose after archive.
## Requirements
### Requirement: Global Top Bar Visibility
The website MUST display a utility bar at the very top of every page containing essential contact and configuration options. Social links MUST be sourced from the centralized contact data file.

#### Scenario: Displaying the Top Bar
- **GIVEN** a user navigates to any page on the site
- **THEN** they see an orange-tinted or white bar at the top
- **AND** it contains the language selector, contact numbers, and social links
- **AND** contact numbers are sourced from `PHONES.mexico.formatted` and `PHONES.usa.formatted`
- **AND** social links are sourced from `SOCIAL_LINKS.facebook` and `SOCIAL_LINKS.instagram`

#### Scenario: TopBar Social Links Import Verification
- **Given** the TopBar component source code
- **When** inspected for social link URLs
- **Then** social URLs MUST be sourced from `SOCIAL_LINKS` object
- **And** social URLs MUST NOT be hardcoded in the component

### Requirement: Route-based Language Switching
The language selector MUST allow users to switch between English and Spanish.

#### Scenario: Switching from English to Spanish
- **GIVEN** the user is at `/en/`
- **WHEN** the user clicks "Español" in the Top Bar
- **THEN** they are redirected to `/es/`

### Requirement: Click-to-Call Contact Numbers
Phone numbers in the top bar MUST be clickable on mobile devices. Phone values MUST be sourced from the centralized contact data file.

#### Scenario: Calling the Mexico support line
- **GIVEN** a user on a mobile device
- **WHEN** they tap the Mexico phone number
- **THEN** the device's dialer opens with the value from `PHONES.mexico.raw` (currently `+529983870435`)

#### Scenario: Calling the USA support line
- **GIVEN** a user on a mobile device
- **WHEN** they tap the USA/Canada phone number
- **THEN** the device's dialer opens with the value from `PHONES.usa.raw` (currently `+19299991258`)

#### Scenario: TopBar Phone Import Verification
- **Given** the TopBar component source code
- **When** inspected for phone number values
- **Then** there MUST be an import statement: `import { PHONES, SOCIAL_LINKS } from "../../lib/contact";`
- **And** phone numbers MUST NOT be hardcoded as string literals in the component
- **And** the component MUST use `PHONES.mexico.formatted` for display
- **And** the component MUST use `PHONES.usa.formatted` for display

### Requirement: Screen Reader Compatibility
All non-text elements (icons) MUST have descriptive ARIA labels to ensure accessibility and SEO clarity.

#### Scenario: Navigating with a Screen Reader
- **GIVEN** a visually impaired user using a screen reader
- **WHEN** they focus on the Facebook icon in the top bar
- **THEN** the screen reader announces "Follow us on Facebook"

### Requirement: Mobile Menu Contact Numbers
The mobile menu MUST display contact phone numbers using centralized contact data.

#### Scenario: Mobile Menu Phone Display
- **GIVEN** a user opens the mobile menu
- **WHEN** the menu renders
- **THEN** phone numbers are displayed from `PHONES.mexico.formatted` and `PHONES.usa.formatted`
- **AND** phone links use `PHONES.mexico.href` and `PHONES.usa.href`

#### Scenario: MenuBar Phone Import Verification
- **Given** the MenuBar component source code
- **When** inspected for phone number values
- **Then** there MUST be an import statement: `import { PHONES } from "../../lib/contact";`
- **And** phone numbers MUST NOT be hardcoded as string literals in the component

