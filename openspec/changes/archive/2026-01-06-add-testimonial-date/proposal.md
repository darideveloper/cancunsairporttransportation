# Proposal: Add Testimonial Date

## Goal
Add a date display to testimonials to provide context on when the review was written. The date should be formatted as `MM/YYYY` (e.g., `01/2026`) and appear before the reviewer's name.

## Scope
- Modify `Testimonial` molecule to accept and display a `date` prop.
- Modify `Testimonials` organism to provide the `date` data.
- Ensure the date is sourced from the component logic/data, not the translation system.

## Out of Scope
- Internationalization of the date format (fixed format requested).
- Adding dates to the JSON-LD (unless required for validation).
