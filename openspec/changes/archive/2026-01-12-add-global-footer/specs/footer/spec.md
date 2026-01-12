# Spec: Global Footer

## ADDED Requirements

### Requirement: Structural Consistency
The component MUST be implemented using semantic HTML5 tags and accessible patterns.

#### Scenario: Verify Semantic Tags
- **Given** the website is rendered
- **When** the footer area is inspected
- **Then** it must be contained within a `<footer>` tag
- **And** navigation groups must use `<nav>` with `aria-label`
- **And** all links must have descriptive `title` attributes

### Requirement: Responsive Layout
The footer MUST adapt its column structure based on the viewport size.

#### Scenario: Desktop Viewport
- **Given** a viewport width >= 1024px
- **Then** the footer main content must display in 4 columns

#### Scenario: Tablet Viewport
- **Given** a viewport width between 768px and 1023px
- **Then** the footer main content must display in 2 columns

#### Scenario: Mobile Viewport
- **Given** a viewport width < 768px
- **Then** the footer main content must display in 1 column

### Requirement: Internationalization Support
All text within the footer MUST be retrieved from the translation JSON files.

#### Scenario: Language Switching
- **Given** the user switches the language to Spanish (`es`)
- **Then** all footer labels, links, and descriptions must update to their Spanish equivalents

### Requirement: Bottom Bar Inclusion
A distinct bottom-bar section MUST exist for copyright and legal links.

#### Scenario: Component Rendering
- **Given** the footer is rendered
- **Then** there must be a `BottomBar` section at the end of the footer
- **And** it must contain the copyright notice and a link to "Terms and Conditions"
