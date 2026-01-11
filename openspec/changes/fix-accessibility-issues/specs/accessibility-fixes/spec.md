# Capability: Accessibility Fixes

Requirements for accessibility fixes in the testimonial component and general layout.

## MODIFIED Requirements

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
