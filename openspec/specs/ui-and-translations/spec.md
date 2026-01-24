# ui-and-translations Specification

## Purpose
TBD - created by archiving change add-missing-pages. Update Purpose after archive.
## Requirements
### Requirement: Global Navigation Updates
The Header and Footer SHALL be updated to correctly link to the new pages using localized paths.

#### Scenario: Menu Bar CTA
Given the `MenuBar` component
Then the "My Booking" button should link to the `reservation` route key

#### Scenario: Bottom Bar Privacy Link
Given the `BottomBar` component
Then it should include a link to the `privacy` route key next to the Terms and Conditions link

### Requirement: i18n Content
The system SHALL provide localized content for all new pages in both English and Spanish.

#### Scenario: Contact Translations
Given the translation files
Then they must contain `pages.contact` with `title`, `description`, `formLabels`, and `infoLabels`.

#### Scenario: Privacy Translations
Given the translation files
Then they must contain `pages.privacy` with the full legal text content.

