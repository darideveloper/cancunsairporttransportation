

## ADDED Requirements

### Requirement: Contact Form Layout and Icons
The contact form MUST use a data-driven approach to render inputs and include icons.

#### Scenario: Rendering inputs with icons
- **Given** I am on the Contact page
- **When** I view the contact form
- **Then** I see fields for Name, Email, Phone, Subject, and Comment
- **And** each field has an appropriate icon on the left side inside the input box
- **And** the fields are rendered using a looped structure in the code (DRY)
- **And** the labels and placeholders match the provided English/Spanish content

#### Scenario: Icon placement
- **Given** an input field with an icon
- **When** the page renders
- **Then** the icon is positioned purely with CSS or a wrapper
- **And** text entered in the input does not overlap with the icon

#### Scenario: Form Responsiveness
- **Given** the form has multiple fields
- **When** viewed on a large screen
- **Then** Name/Email and Phone/Subject should be paired in rows (2 columns) if space permits
- **When** viewed on mobile
- **Then** fields stack strictly vertically
