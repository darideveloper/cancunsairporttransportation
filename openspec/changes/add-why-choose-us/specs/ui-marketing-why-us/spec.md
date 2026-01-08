# Spec: UI Marketing - Why Us Section

## ADDED Requirements

### Requirement: Display "Why Choose Us" section on homepage
The homepage MUST include a new marketing section titled "Why use Cancun Airport Transportation by Go Transfers" to highlight value propositions.
#### Scenario: Section content and layout
- **Given** the user is viewing the homepage (English or Spanish)
- **Then** a "Why Choose Us" section should be visible
- **And** it should display an image on the left (desktop)
- **And** it should display the heading and description text on the right
- **And** the content should be fully localized matching the provided text

#### Scenario: TextCard Integration
- **Given** the "Why Choose Us" section is rendered
- **Then** it should use the `TextCard` component
- **And** it should use `reverse={true}` to position the image on the left
- **And** it should utilize the `SectionHeading` internally for the title
