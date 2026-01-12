# terms-page Specification

## Purpose
TBD - created by archiving change add-legal-pages-layout-and-terms. Update Purpose after archive.
## Requirements
### Requirement: Terms and Conditions Page
The system SHALL provide a Terms and Conditions page accessible via localized URLs.

#### Scenario: Viewing Terms and Conditions
Given a user visits `/en/terms-and-conditions` or `/es/terms-and-conditions`
When the page loads
Then it should display the content from the corresponding MDX file in `src/content/legal`
And the layout should be the LegalLayout
And the page title should correspond to the frontmatter title of the MDX

