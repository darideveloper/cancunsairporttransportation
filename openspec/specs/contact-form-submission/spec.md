# contact-form-submission Specification

## Purpose
TBD - created by archiving change submit-contact-form. Update Purpose after archive.
## Requirements
### Requirement: State Management
The contact form state MUST be managed via a global Zustand store (`useContactFormStore`) to ensure state persistence and separation of logic.
#### Scenario: User types in a field
Store updates immediately.
#### Scenario: User navigates away and back
Form data is preserved (optional, but side effect of global store unless reset).

### Requirement: Input Validation
All fields MUST be validated before submission using Zod schema matching API constraints.
#### Scenario: Name greater than 75 chars
Error toast or inline error is shown.
#### Scenario: Invalid email
Error indication is shown.
#### Scenario: Empty required fields
Submission is blocked.

### Requirement: API Submission
The form MUST submit data to the external API `POST https://api.caribbean-transfers.com/api/v1/contact` (configured via `PUBLIC_LEGACY_API_URL`).
#### Scenario: Submission Success (200)
Show success message/toast, reset form.
#### Scenario: Validation Error (422)
Show "Validation failed" message.
#### Scenario: Server Error (404/500)
Show "Server error" message.

### Requirement: Interactive UI Components
The form MUST use React components for interactivity while maintaining the existing visual design (Tailwind classes).
#### Scenario: Input focuses
Highlight styles apply (same as current Astro implementation).

