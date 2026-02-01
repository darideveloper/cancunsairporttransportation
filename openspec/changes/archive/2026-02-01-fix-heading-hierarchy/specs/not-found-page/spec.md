# not-found-page Specification Delta

## Purpose
Updates to the 404 page to optionally fix heading hierarchy.

## ADDED Requirements

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
