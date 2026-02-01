# contact-data Specification

## Purpose
TBD - created by archiving change centralize-contact-data. Update Purpose after archive.
## Requirements
### Requirement: Single Source of Truth for Contact Data
The application MUST provide a single TypeScript file (`src/lib/contact.ts`) that contains all contact information used across the website.

#### Scenario: Phone Numbers Availability
- **GIVEN** a component needs to display a phone number
- **WHEN** it imports from `src/lib/contact.ts`
- **THEN** it MUST have access to `PHONES.mexico` and `PHONES.usa` objects
- **AND** each phone object MUST contain `raw`, `formatted`, and `href` properties
- **AND** `PHONES.mexico.formatted` MUST equal `+52 (998) 387-0435`
- **AND** `PHONES.usa.formatted` MUST equal `+1 (929) 999-1258`

#### Scenario: Email Availability
- **GIVEN** a component needs to display the contact email
- **WHEN** it imports from `src/lib/contact.ts`
- **THEN** it MUST have access to `EMAIL` object
- **AND** `EMAIL.address` MUST equal `bookings@gotransfers.us`
- **AND** `EMAIL.href` MUST equal `mailto:bookings@gotransfers.us`

#### Scenario: Social Links Availability
- **GIVEN** a component needs to display social media links
- **WHEN** it imports from `src/lib/contact.ts`
- **THEN** it MUST have access to `SOCIAL_LINKS` object
- **AND** `SOCIAL_LINKS.facebook` MUST equal `https://www.facebook.com/gotransfers.us`
- **AND** `SOCIAL_LINKS.instagram` MUST equal `https://www.instagram.com/gotransfers.us/`

#### Scenario: Google Maps Embed Availability
- **GIVEN** a component needs to embed a Google Map
- **WHEN** it imports from `src/lib/contact.ts`
- **THEN** it MUST have access to `GOOGLE_MAPS` object
- **AND** `GOOGLE_MAPS.embedUrl` MUST be a valid Google Maps embed URL

#### Scenario: Address Availability
- **GIVEN** a component needs to display the business address
- **WHEN** it imports from `src/lib/contact.ts`
- **THEN** it MUST have access to `ADDRESS` object
- **AND** `ADDRESS.full` MUST contain the complete address string

### Requirement: Type Safety for Contact Data
All contact data exports MUST be typed as `const` to provide TypeScript autocompletion and prevent accidental modification.

#### Scenario: Immutable Exports
- **GIVEN** a developer imports contact data
- **WHEN** they attempt to modify a value (e.g., `PHONES.mexico.formatted = "new"`)
- **THEN** TypeScript MUST raise a compile-time error

### Requirement: No Duplicate Contact Values in Components
Components MUST NOT contain hardcoded contact information (phone numbers, email addresses, social URLs, or map embed URLs).

#### Scenario: TopBar Uses Centralized Data
- **GIVEN** the TopBar component displays phone numbers
- **WHEN** the component source is inspected
- **THEN** phone values MUST be imported from `src/lib/contact.ts`
- **AND** no hardcoded phone strings (e.g., `"+52 (998) 387-0435"`) MUST exist in the component

#### Scenario: MenuBar Uses Centralized Data
- **GIVEN** the MenuBar component displays phone numbers in mobile menu
- **WHEN** the component source is inspected
- **THEN** phone values MUST be imported from `src/lib/contact.ts`

#### Scenario: Footer Uses Centralized Data
- **GIVEN** the Footer component displays social media links
- **WHEN** the component source is inspected
- **THEN** social URLs MUST be imported from `src/lib/contact.ts`
- **AND** no hardcoded social URLs MUST exist in the component

#### Scenario: Contact Page Uses Centralized Data
- **GIVEN** the Contact page displays phone numbers and email
- **WHEN** the component source is inspected
- **THEN** all contact values MUST be imported from `src/lib/contact.ts`

#### Scenario: GoogleMap Uses Centralized Data
- **GIVEN** the GoogleMap component displays an embedded map
- **WHEN** the component source is inspected
- **THEN** the embed URL MUST be imported from `src/lib/contact.ts`

