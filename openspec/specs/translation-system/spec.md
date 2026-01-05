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

