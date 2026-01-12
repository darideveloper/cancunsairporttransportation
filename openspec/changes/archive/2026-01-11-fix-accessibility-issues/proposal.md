# Fix Accessibility Issues

Address accessibility issues identified in Lighthouse/A11y audits, focusing on ARIA attribute usage and color contrast.

## Proposed Changes

### [Molecules]

#### [MODIFY] [Testimonial.astro](file:///develop/astro/cancunsairporttransportation/src/components/molecules/Testimonial.astro)
- Add `role="img"` to the rating `div` to properly support `aria-label`.
- Update date text color from `text-gray` to `text-gray-dark` (or a higher contrast variant) to meet WCAG AA standards.
- Ensure the testimonial text has sufficient contrast.

### [Layouts]

#### [MODIFY] [Layout.astro](file:///develop/astro/cancunsairporttransportation/src/layouts/Layout.astro)
- Apply a default high-contrast text color (e.g., `text-gray-dark` or `text-black`) to the `body` or `main` element to fix inherited contrast issues.

### [Styles]

#### [MODIFY] [global.css](file:///develop/astro/cancunsairporttransportation/src/styles/global.css)
- Set a default text color for the `body` to ensure all children inherit a high-contrast color by default.

## Verification Plan

### Automated Tests
- Run `openspec validate fix-accessibility-issues --strict`.

### Manual Verification
- Use a color contrast checker (like Chrome DevTools A11y tab) to verify that the date text and body text meet WCAG AA (at least 4.5:1).
- Verify that screen readers correctly announce the "5 out of 5 stars" rating now that the role is properly defined.
