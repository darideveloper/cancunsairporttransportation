# Spec: SEO Improvements

## MODIFIED Requirements

### Requirement: Layout Language Attribute
The global layout MUST dynamically reflect the active language in the HTML tag to ensure correct locale detection by browsers and assistive technology.

#### Scenario: Spanish Content Declaration
- **Given** I am viewing a page under the `/es/` route (e.g., Terms and Conditions in Spanish)
- **When** the page renders
- **Then** the `<html>` tag MUST have the attribute `lang="es"`
- **And** it must NOT remain hardcoded to "en"

#### Scenario: Default Language Fallback
- **Given** I am viewing a page without a specific language param (like the root or 404)
- **Then** the `<html>` tag SHOULD default to `lang="en"` (or the site's default locale)

### Requirement: 404 Page Accessibility & UX
The 404 error page MUST provide a safe, accessible, and user-friendly path back to the main site content, avoiding dead ends or confusing patterns.

#### Scenario: Safe Navigation
- **Given** I am on the 404 page
- **When** I click the primary action button
- **Then** I MUST be navigated to the home page (`/`)
- **And** no `history.back()` JavaScript execution should occur

#### Scenario: Accessible Labels
- **Given** the "Return to Home" button has clear visible text
- **Then** it MUST NOT have a redundant `aria-label` attribute that repeats the visible text
