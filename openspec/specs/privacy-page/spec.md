# privacy-page Specification

## Purpose
TBD - created by archiving change add-missing-pages. Update Purpose after archive.
## Requirements
### Requirement: Privacy Page Layout
The Privacy Policy page SHALL use the `LegalLayout` to ensure a consistent appearance with other legal documents.

#### Scenario: Rendering Privacy Page
Given a user visits the Privacy page
When the page loads
Then it should be rendered within the `LegalLayout`
And it should display the privacy policy text retrieved from the translation files
And it should have a proper SEO title and description

### Requirement: MDX Content Section Headings
The Privacy Policy MDX content MUST include `<h2>` section headings to structure the legal text before footer H3s appear.

#### Scenario: Privacy Policy Has H2 Sections
Given the Privacy Policy page is rendered (`/privacy` or `/es/privacidad`)
When viewing the page content
Then there MUST be at least one `<h2>` heading within the article content
And these H2s appear before the footer navigation H3s
And the heading hierarchy is: H1 (title) → H2 (sections) → H3 (footer)

#### Scenario: Privacy Policy Content Structure
Given the Privacy Policy MDX file
When parsing the markdown content
Then major sections like "Data Collection", "Use of Information", "Data Transfer", "ARCO Rights" SHOULD be marked with `## ` (H2)
And subsections MAY use `### ` (H3) if needed

#### Scenario: Spanish Version Consistency
Given the Spanish Privacy Policy (`/es/privacidad`)
When viewing the page content
Then the H2 section structure MUST mirror the English version
And both versions MUST pass heading hierarchy validation

