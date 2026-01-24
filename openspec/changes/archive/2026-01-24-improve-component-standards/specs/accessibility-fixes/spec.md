## ADDED Requirements

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
