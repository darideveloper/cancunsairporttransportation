# Spec Delta: Footer Attribution Link

## MODIFIED Requirements

### Requirement: Bottom Bar Inclusion
A distinct bottom-bar section MUST exist for copyright and legal links.

#### Scenario: Component Rendering
- **Given** the footer is rendered
- **Then** there must be a `BottomBar` section at the end of the footer
- **And** it must contain the copyright notice and a link to "Terms and Conditions"
- **And** it MUST contain an attribution link "Powered by DariDeveloper" next to the copyright text.
- **And** the attribution link must point to `https://wa.me/5214493402622`.
