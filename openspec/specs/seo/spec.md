# seo Specification

## Purpose
TBD - created by archiving change fix-opengraph-metadata. Update Purpose after archive.
## Requirements
### Requirement: Global Open Graph Image Configuration
The system SHALL use a high-quality default Open Graph image.

#### Scenario: Global Open Graph Image
Given the application is configured
When the SEO metadata is generated
Then it should use `public/og-image.jpg` as the default Open Graph image
And fall back to the logo only if `ogImage` is not defined.

### Requirement: Optimized Home Page Metadata
The system SHALL provide optimized titles and descriptions for the home page in all supported languages.

#### Scenario: Optimized Home Page Metadata
Given I am on the home page
When the page metadata is rendered
Then the title should be under 60 characters
And the description should be under 160 characters
And this should apply to both English and Spanish versions.

