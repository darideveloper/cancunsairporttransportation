# Enhance SEO and 404 UX

## Summary
This proposal aims to implementations several SEO and UX improvements identified during the review of the 404 page and global layout. Specifically, it addresses hardcoded language attributes in the main layout and refines the 404 error page to be more user-friendly and accessible.

## Problem Statement
1. **Hardcoded Language**: The global `Layout.astro` currently hardcodes `<html lang="en">`. This negatively impacts SEO and accessibility for Spanish pages, as search engines and screen readers will incorrectly interpret the content as English.
2. **404 Page UX/Accessibility**:
   - The "Go Back" button uses `history.back()`, which is unreliable and can trap users or send them off-site.
   - Redundant ARIA labels exist where visible text is sufficient.
   - Minor styling redundancies code cleanliness.

## Proposed Solution
1. **Dynamic HTML Language**: Update `Layout.astro` to dynamically set the `lang` attribute on the `<html>` tag based on the current route or a prop.
2. **Refine 404 Page**:
   - Change the primary action to "Return to Home" (`/`).
   - Remove the `aria-label` from the button as the text is descriptive.
   - Clean up CSS classes.
