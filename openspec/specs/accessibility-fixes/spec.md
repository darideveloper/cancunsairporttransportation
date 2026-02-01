# accessibility-fixes Specification

## Purpose
TBD - created by archiving change fix-accessibility-issues. Update Purpose after archive.
## Requirements
### Requirement: Proper ARIA Role for Rating
The rating `div` in the `Testimonial` component MUST use `role="img"` to properly support the `aria-label` attribute.

#### Scenario: Rating accessibility
- Given a `Testimonial` component with a rating
- When the component is rendered
- Then the rating `div` has `role="img"` and a descriptive `aria-label`.

### Requirement: Sufficient Contrast for Date
The publication date in the `Testimonial` component MUST have a contrast ratio of at least 4.5:1 against its background.

#### Scenario: Date contrast
- Given a `Testimonial` component
- When the date is rendered
- Then the text color is `text-gray-dark` (or equivalent high-contrast color).

### Requirement: Default High-Contrast Body Text
The application MUST have a default text color on the `body` or `main` element that ensures at least 4.5:1 contrast against a white background.

#### Scenario: Body text contrast
- Given any page using the main `Layout`
- When standard text (e.g., in a `p` tag) is rendered without explicit overrides
- Then it inherits a high-contrast color like `text-gray-dark` or `text-black`.

### Requirement: Interactive Focus Management
Modal navigation interfaces (like Mobile Menus) MUST trap focus within the active container when open. All interactive elements within the container MUST have proper ARIA attributes.

#### Scenario: Mobile Menu Focus Trap
- **WHEN** the mobile menu is opened via the toggle button
- **THEN** keyboard focus MUST move to the first interactive element inside the menu
- **AND** focus MUST NOT escape the menu container to the background page until the menu is closed
- **AND** all links and buttons within the menu MUST have descriptive accessible names

### Requirement: Decorative Icon Accessibility
All icons used purely for visual decoration MUST be hidden from assistive technologies.

#### Scenario: Decorative Icon Rendering
- **WHEN** an icon component (React Icon or SVG) is rendered next to descriptive text
- **THEN** the icon element MUST include `aria-hidden="true"`
- **AND** it MUST NOT have a focusable tab index

### Requirement: Accessible Color Contrast
Text and interactive elements MUST meet WCAG AA contrast ratios (4.5:1 for normal text).

#### Scenario: Placeholder Text
- **WHEN** an input field displays placeholder text
- **THEN** the text color MUST meet minimum contrast ratios against the input background (avoiding faint grays).

### Requirement: ARIA Labels for Interactive Links
All link elements (`<a>`) that perform actions or navigate to important destinations MUST have descriptive accessibility labels when the visible text alone does not provide sufficient context.

#### Scenario: Phone link accessibility
- **WHEN** a phone link is rendered (e.g., `tel:` href)
- **THEN** it MUST include an `aria-label` describing the call action and phone type
- **AND** the aria-label MUST be translatable (e.g., "Call Mexico: +52 998 123 4567")

#### Scenario: Navigation link accessibility
- **WHEN** a navigation link is rendered with concise visible text
- **THEN** it MAY include a `title` attribute with expanded context
- **AND** the `title` SHOULD describe the destination or action

### Requirement: ARIA Labels for CTA Buttons
Call-to-action buttons and link-buttons MUST support optional `aria-label` props to provide context when visible text is insufficient.

#### Scenario: ButtonCta with aria-label
- **WHEN** a `ButtonCta` component is used with an `ariaLabel` prop
- **THEN** the rendered element MUST include `aria-label` with the provided value
- **AND** the aria-label MUST override any auto-generated accessible name

#### Scenario: ButtonCta without aria-label
- **WHEN** a `ButtonCta` component is used without an `ariaLabel` prop
- **THEN** it MUST rely on the slot content for the accessible name
- **AND** no redundant aria-label MUST be added

### Requirement: Form Accessibility Labels
Form containers and submit buttons MUST have proper ARIA labeling for screen reader users.

#### Scenario: Booking form labeling
- **WHEN** the `BookingForm` component is rendered
- **THEN** the `<form>` element MUST include `aria-label` describing the form purpose
- **OR** it MUST include `aria-labelledby` pointing to the form title element

#### Scenario: Submit button labeling
- **WHEN** a `SubmitButton` component is used
- **THEN** it MAY accept an optional `ariaLabel` prop for additional context
- **AND** if provided, the button MUST include the `aria-label` attribute

### Requirement: Card Link Accessibility
Interactive card components that function as links MUST have accessible labels describing their purpose.

#### Scenario: BasicIconCard link accessibility
- **WHEN** a `BasicIconCard` component is rendered with an `href` prop
- **THEN** the link container MUST have an `aria-label` or `aria-labelledby` describing the card action
- **AND** the aria-label SHOULD combine the card title with the action context

#### Scenario: InfoIconCard text link
- **WHEN** an `InfoIconCard` component contains a text link (via `href` prop)
- **THEN** the link MUST have an `aria-label` if the visible text does not describe the action

### Requirement: Legal Navigation Link Accessibility
Legal and policy links in footers and navigation MUST have `title` attributes for enhanced accessibility and SEO.

#### Scenario: Terms and Privacy links
- **WHEN** Terms and Conditions or Privacy Policy links are rendered
- **THEN** each link MUST include a `title` attribute describing the destination
- **AND** the title MUST be translatable for i18n support

