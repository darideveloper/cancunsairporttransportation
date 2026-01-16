# translation-system Specification

## Purpose
TBD - created by archiving change centralize-translations. Update Purpose after archive.
## Requirements
### Requirement: Centralized Text Management
All user-facing strings MUST be defined in `src/messages/{lang}.json` and accessed via the `t()` helper function. Hardcoded strings in components are forbidden.

#### Scenario: Rendering Component Text
Given a component with text content
When the component is rendered
Then the text is retrieved from the translation file using a unique key
And the text matches the current language context

### Requirement: Mobile Menu Texts
The following UI elements in the Mobile Menu MUST be internationalized:
- **Menu Header**: `globalSections.menubar.topSection.text` ("Menu")
- **Translation Header**: "Translate website"
- **Language Switch**: "Español" (or target language name)
- **Customer Service Header**: "Customer service"
- **Customer Service Body**: "For more information about your reservation, please contact us, we will help you!"
- **Reservation CTA**: "My reservation" (Update existing "My Booking" if needed)

#### Scenario: Displaying Customer Service Info
Given the user opens the mobile menu
When they scroll to the customer service section
Then they see "Customer service" and the help text in their selected language

### Requirement: Global Translation Keys
The translation system MUST support a `global` top-level key for all shared content.

#### Scenario: Assessing Global content
Given I am editing a translation file
When I look at the `global` key
Then I should see `branding`, `topbar`, `footer`, `ratesTable`, and `sections`.
And I should NOT see page-specific content mixed in.

### Requirement: Page Translation Keys
The translation system MUST support a `pages` top-level key for page-specific content.

#### Scenario: Assessing Page content
Given I am editing a translation file
When I look at the `pages` key
Then I should see keys corresponding to specific routes (e.g., `home`, `playaDelCarmen`).
And I should find dynamic text that varies per page inside these keys.

### Requirement: Static vs Dynamic Split
Static text (repeated exactly across pages) MUST be in `global` or `global.sections`.
Dynamic text (changing contexts per page but same section layout) MUST be in `pages.<page>.<section>`.

#### Scenario: Reliable Service Section
Given the "Reliable Service" section appears on multiple pages
When the text is identical
Then it should be sourced from `global.sections.reliableService`.
When the description differs for `playaDelCarmen`
Then the overrides should be in `pages.playaDelCarmen.reliableService`.

