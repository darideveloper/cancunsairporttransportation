# Content Alignment

## ADDED Requirements

### Requirement: SEO Content Consistency
The application MUST serve exact SEO metadata strings (Title, Description) as defined in the legacy documentation to maintain search ranking and brand consistency.

#### Scenario: Home Page Metadata
- **Given** the user lands on the Home Page (`/` or `/es`),
- **When** the page meta tags are inspected,
- **Then** the `<title>` and `<meta name="description">` MUST match the exact text specified in `design.md` (Section 4) / `docs/seo.md` for the corresponding language.
- **And** specifically, the English title MUST be "Cancun Airport Transportation | Private & Shuttle Transfers to Cancun and Riviera Maya".

#### Scenario: Service Pages Metadata
- **Given** the user is on a service page (e.g., `/destinations`, `/transportation-to-playa-del-carmen`),
- **When** the SEO tags are rendered,
- **Then** they MUST match the exact strings from `docs/seo.md` "Metric" sections.
- **And** any discrepancy between the current `src/messages/` values and `docs/seo.md` MUST be resolved in favor of `docs/seo.md`.
