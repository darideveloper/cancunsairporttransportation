# legal-pages Specification

## Purpose
TBD - created by archiving change standardize-legal-pages. Update Purpose after archive.
## Requirements
### Requirement: Generic Content Fetching
The system SHALL provide a single mechanism to load content for any legal page type based on the route identifier.

#### Scenario: Fetching Privacy Policy
- **Given** a visitor navigates to the privacy policy page
- **When** the page loads
- **Then** the component MUST resolve the correct content content based on the "privacy" identifier.
- **And** it MUST fetch the `privacy-policy` content from the `legal` content collection.

#### Scenario: Fetching Terms and Conditions
- **Given** a visitor navigates to the terms page
- **When** the page loads
- **Then** the component MUST resolve the correct content content based on the "terms" identifier.
- **And** it MUST fetch the `terms-and-conditions` content from the `legal` content collection.

### Requirement: Unified Layout
All legal pages MUST share the exact same structural layout and metadata handling.

#### Scenario: Layout Consistency
- **Given** any legal page (Privacy, Terms, or future ones)
- **When** displayed
- **Then** it MUST use the `LegalLayout` component.
- **And** the title and description MUST be populated from the markdown frontmatter.

### Requirement: Robust Error Handling
The system MUST handle cases where requested legal content is missing.

#### Scenario: Missing Content
- **Given** a requested legal page does not exist in the content collection
- **When** the component attempts to load it
- **Then** it SHOULD throw a clear error indicating the missing content ID and language (consistent with current behavior).

