# faq-section Specification

## Purpose
TBD - created by archiving change create-faqs-section. Update Purpose after archive.
## Requirements
### Requirement: FAQ Section Structure
The FAQ section MUST be implemented as a distinct organism component.

#### Scenario: Using SectionHeading
The FAQ section MUST use the `SectionHeading` molecule for its title and introductory text.
#### Scenario: Rendering Loop
The `FaqSection` component (or the page implementation) MUST iterate over a provided list of FAQ items and render a `FaqItem` component for each.
It MUST NOT use a separate React list component (`FaqList`) to wrap the items.

### Requirement: FAQ Item Component
Individual FAQ items MUST be implemented as React components to handle interactivity.

#### Scenario: React Component for Interactivity
A `FaqItem` React component MUST be created to display a single question and answer.
It MUST manage its own open/close state (e.g., using `useState` or `<details>` native behavior wrapped in a component).

#### Scenario: Server-Side Rendering
The `FaqItem` component MUST be loaded using an Astro client directive that ensures the content is rendered on the server (e.g., `client:load`).
The initial HTML rendered by the server MUST contain the answer text.

#### Scenario: No Inline Styles
The `FaqItem` component MUST NOT appear with any specific classes in the proposal.
It MUST use empty `className=""` or `class=""` attributes where applicable.

### Requirement: FAQ Content and Translations
All content for the FAQ section MUST be sourced from translation files, but structured via the page.

#### Scenario: 7 FAQ Items
The FAQ section MUST display precisely 7 items on the index page, covering:
- Why book with the service.
- Booking instructions.
- Vehicle types.
- Cost factors.
- Safety assurance.
- Reservation changes.
- Flight delay/cancellation protocol.

#### Scenario: Specific Titles and Descriptions
The FAQ section title and description MUST be updated in the translation files to match the latest provided copy.
- **English Title**: "Cancun Airport Transportation Faqs"
- **Spanish Title**: "Preguntas frecuentes sobre el transporte en el aeropuerto de Cancún"
- **English Description**: "We help you to clear your doubts about our transportation services"
- **Spanish Description**: "Te ayudamos a despejar tus dudas sobre nuestros servicios de transporte"

### Requirement: SEO and Accessibility
The FAQ implementation MUST follow best practices for SEO and accessibility.

#### Scenario: Semantic HTML
The implementation MUST use appropriate HTML tags (e.g., `button` for triggers, `dl/dt/dd` or `<details>/<summary>` for lists).

#### Scenario: ARIA Attributes
Interactive elements MUST use `aria-expanded` and `aria-controls` attributes if custom JavaScript is used for the accordion effect.
If `<details>` is used, verifying browser default accessibility is sufficient.

### Requirement: The FAQ section must support dynamic content loading based on the current page.
The system SHALL provide a reusable FAQ component that dynamically loads content from page-specific translation paths while sharing a global description.

#### Scenario: Render FAQ on Home Page
- **Given** I am on the home page.
- **And** the translations for `pages.home.faq` are defined.
- **When** the `FaqSection` component is rendered with `page="home"`.
- **Then** it must display the title from `pages.home.faq.title`.
- **And** it must display the global description from `global.sections.faq.description`.
- **And** it must iterate over the items in `pages.home.faq.items` and render `FaqItem` for each.

#### Scenario: Render FAQ on Destination Page
- **Given** I am on the Playa del Carmen page.
- **And** the translations for `pages.playaDelCarmen.faq` are defined.
- **When** the `FaqSection` component is rendered with `page="playaDelCarmen"`.
- **Then** it must display the title from `pages.playaDelCarmen.faq.title`.
- **And** it must display the global description from `global.sections.faq.description`.
- **And** it must iterate over the items in `pages.playaDelCarmen.faq.items` and render `FaqItem` for each.



