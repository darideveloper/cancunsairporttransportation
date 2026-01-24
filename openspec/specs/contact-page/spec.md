# contact-page Specification

## Purpose
TBD - created by archiving change add-missing-pages. Update Purpose after archive.
## Requirements
### Requirement: Contact Page Structure
The Contact page SHALL use the main site layout and provide a clear heading and description.

#### Scenario: Rendering Contact Page
Given a user visits the Contact page
When the page loads
Then it should display the title and description from the translation files
And it should include a contact form with fields for Name, Email, and Message
And it should display the business contact information (Phone, Email, Address)

### Requirement: UI Consistency
The Contact page SHALL follow the project's design system and spacing conventions.

#### Scenario: Design System Alignment
Given the Contact page structure
Then it should use the standard container classes
And it should use the consistent color palette (blue/accent/white)
And it should be optimized for mobile responsiveness

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

### Requirement: The contact page must display the correct main heading and description
The main heading of the contact page MUST be updated to use the `<h1>` tag and display the correct localized text.

#### Scenario: Viewing the contact page in English
Given the user visits the contact page in English
Then the main heading should be "Contact Us"
And the description should be "We’ll be happy to assist you, please contact us in any of the next options."
And the main heading tag should be `<h1>`.

#### Scenario: Viewing the contact page in Spanish
Given the user visits the contact page in Spanish
Then the main heading should be "Contactanos"
And the description should be "Estaremos encantados de atenderle, póngase en contacto con nosotros en cualquiera de las siguientes opciones."
And the main heading tag should be `<h1>`.

### Requirement: The contact page must display a "Stay in touch" section
A new section heading MUST be added to the contact page, encouraging users to get a quote.

#### Scenario: Viewing the contact page in English
Given the user visits the contact page in English
Then there should be a section heading "Stay in touch with us"
And the description should be "If you would like a quote for a special transportation service, do not hesitate to contact us, fill out the following form and we will contact you as soon as possible."

#### Scenario: Viewing the contact page in Spanish
Given the user visits the contact page in Spanish
Then there should be a section heading "Mantente en contacto con nosotros"
And the description should be "Si deseas una cotización de un servicio especial de transporte, no dudes en consultarnos, llena el siguiente formulario y nos pondremos en contacto lo más pronto posible."

### Requirement: Regional Contact Cards
The contact page MUST display three contact cards at the bottom for specific regions and email.

#### Scenario: Additional Contact Info
- **Given** the user is at the bottom of the Contact page (below the main form/map)
- **When** the page renders
- **Then** a new container (grid or flex) must be visible.
- **And** it must contain 3 `BasicIconCard` components using the new variants.
- **And** Card 1 must use the `phone` icon, title "From USA / Canada", text "+1 (929) 999-1258", and `white` (default) variant logic.
- **And** Card 2 must use the `phone` icon, title "México & Rest of the world", text "+52 (998) 387-0435", and `orange` variant logic.
- **And** Card 3 must use the `envelope` icon, title "Send us an email at:", text "bookings@gotransfers.us", and `black` variant logic.

#### Scenario: Spanish Translations
- **Given** the user views the page in Spanish
- **When** the cards render
- **Then** Card 1 title must be "Desde USA / Canada".
- **And** Card 2 title must be "México & Resto del mundo".
- **And** Card 3 title must be "Mándanos un email a:".

