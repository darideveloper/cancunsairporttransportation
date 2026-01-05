# Optimization of TextCard Component

## Summary
Refactor the `TextCard` component to improve SEO, accessibility, and maintainability. Replace the current `direction:rtl` CSS hack with proper Flexbox/Grid ordering logic and ensure semantic HTML structure with correct ARIA attributes.

## Background
The current `TextCard` implementation uses `[direction:rtl]` to reverse the layout of the image and text. This causes:
1.  **Accessibility Issues**: Screen readers may interpret the content flow incorrectly.
2.  **SEO Issues**: Semantic structure is compromised.
3.  **Maintenance Issues**: "Hack" classes are harder to maintain than explicit props.

Additionally, the `H2` component does not modify the `id` attribute, preventing proper `aria-labelledby` usage.

## Goals
-   Remove `direction:rtl` usage in favor of a `reverse` prop.
-   Enable `id` attribute propagation on `H2` for accessibility.
-   Ensure `TextCard` uses semantic `aria-labelledby`.
-   Verify changes in `index.astro`.
