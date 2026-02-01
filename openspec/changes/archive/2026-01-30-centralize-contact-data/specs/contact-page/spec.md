# contact-page Specification Delta

## MODIFIED Requirements

### Requirement: Regional Contact Cards
The contact page MUST display three contact cards at the bottom for specific regions and email. Contact values MUST be sourced from the centralized contact data file.

#### Scenario: Additional Contact Info
- **Given** the user is at the bottom of the Contact page (below the main form/map)
- **When** the page renders
- **Then** a new container (grid or flex) must be visible.
- **And** it must contain 3 `BasicIconCard` components using the new variants.
- **And** Card 1 must use the `phone` icon, title "From USA / Canada", text from `PHONES.usa.formatted`, and `white` (default) variant logic.
- **And** Card 2 must use the `phone` icon, title "México & Rest of the world", text from `PHONES.mexico.formatted`, and `orange` variant logic.
- **And** Card 3 must use the `envelope` icon, title "Send us an email at:", text from `EMAIL.address`, and `black` variant logic.
- **And** Card 1 href MUST equal `PHONES.usa.href` from the contact data file.
- **And** Card 2 href MUST equal `PHONES.mexico.href` from the contact data file.
- **And** Card 3 href MUST equal `EMAIL.href` from the contact data file.

#### Scenario: Spanish Translations
- **Given** the user views the page in Spanish
- **When** the cards render
- **Then** Card 1 title must be "Desde USA / Canada".
- **And** Card 2 title must be "México & Resto del mundo".
- **And** Card 3 title must be "Mándanos un email a:".
- **And** all contact values (phone numbers, email) MUST remain unchanged (not translated).

#### Scenario: Contact Data Import Verification
- **Given** the Contact page component source code
- **When** inspected for hardcoded contact values
- **Then** there MUST be an import statement: `import { PHONES, EMAIL } from "../../../lib/contact";`
- **And** there MUST NOT be any hardcoded strings matching phone number patterns (e.g., `+1 (929)`, `+52 (998)`)
- **And** there MUST NOT be any hardcoded email addresses (e.g., `bookings@gotransfers.us`)
