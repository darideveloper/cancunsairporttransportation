# FAQ Component Description Override Spec Delta

## ADDED Requirements
### Requirement: Local Description Support
The `FaqSection` component MUST support page-specific descriptions if defined in the translation files.

#### Scenario: Page-Specific Description Override
Given a page has a specific FAQ description defined in `pages.<page>.faq.description`
When the `FaqSection` is rendered for that page
Then it MUST display the page-specific description instead of the global one.

#### Scenario: Global Description Fallback
Given a page does NOT have a specific FAQ description defined
When the `FaqSection` is rendered for that page
Then it MUST display the global description from `global.sections.faq.description`.
