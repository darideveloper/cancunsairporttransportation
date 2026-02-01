# not-found-page Specification

## Purpose
TBD - created by archiving change create-404-page. Update Purpose after archive.
## Requirements
### Requirement: 404 Page Display
The system MUST render a custom "Not Found" page when a user attempts to access a non-existent route, maintaining site branding and providing recovery options.

#### Scenario: User visits a non-existent URL
- **Given** the user navigates a URL that does not map to any existing route (e.g. `/foo/bar`)
- **When** the server processes the request
- **Then** the `404` page is displayed
- **And** the page contains the global header and footer
- **And** the page content includes the site Logo
- **And** the page includes a clearly visible "Go Back" button/link that returns the user to their previous context

#### Scenario: User clicks the Go Back button
- **Given** the user is on the 404 page
- **When** they click the "Go Back" button
- **Then** the browser navigates to the previous page in history

#### Scenario: SEO Metadata
- **Given** the 404 page is rendered
- **Then** the document title starts with "404" or "Page Not Found"
- **And** the page uses a single `h1` tag for the main error message

### Requirement: 404 Page Subtitle
The 404 page SHALL include an `<h2>` subtitle to provide additional context and maintain heading hierarchy.

#### Scenario: 404 Page Has H2 Subtitle
Given the 404 page is rendered
When viewing the error content section
Then there SHOULD be an `<h2>` subtitle after the `<h1>` "Page Not Found" heading
And the subtitle provides helpful guidance (e.g., "Let's get you back on track")
And the heading hierarchy becomes: H1 → H2 → H3 (footer)

#### Scenario: 404 Page Language Detection
Given the 404 page with client-side language detection
When the URL path starts with `/es/`
Then the H2 subtitle MUST be displayed in Spanish
And when the URL is in English, the subtitle MUST be in English

#### Scenario: Utility Page Exception
Given the 404 page is a utility/error page
When no H2 subtitle is added
Then this MAY be acceptable as a documented exception
And the violation is considered low priority

