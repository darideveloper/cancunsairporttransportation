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
Modal navigation interfaces (like Mobile Menus) MUST trap focus within the active container when open.

#### Scenario: Mobile Menu Focus Trap
- **WHEN** the mobile menu is opened via the toggle button
- **THEN** keyboard focus MUST move to the first interactive element inside the menu
- **AND** focus MUST NOT escape the menu container to the background page until the menu is closed

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

