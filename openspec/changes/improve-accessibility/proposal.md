# Improve Accessibility Compliance

## Summary
This proposal addresses accessibility issues identified in a recent audit, focusing on contrast ratios, missing accessible names for buttons, and identical links with ambiguous purposes. The goal is to improve the site's WCAG compliance and user experience for assistive technologies.

## Motivation
Accessibility is a core standard for the project. Recent automated checks highlighted:
- Low contrast on menu elements.
- Potential issues with button labeling.
- Redundant links in the navigation menu (desktop vs. mobile).

## Proposed Changes
1.  **Contrast**: Introduce darker color variants or adjust current color usage for menu icons and text to meet AA standards.
2.  **Semantic Navigation**: Differentiate desktop and mobile navigation links to avoid "Identical links" warnings, likely by strictly managing `aria-hidden` or adding descriptive labels.
3.  **Button Labels**: Ensure all icon-only buttons have robust, localized `aria-label` attributes.

## Impact
- **Codebase**: Updates to `MenuBar.astro`, `NavLinks.astro`, and potentially `global.css`.
- **User Experience**: Improved legibility and screen reader navigation.
