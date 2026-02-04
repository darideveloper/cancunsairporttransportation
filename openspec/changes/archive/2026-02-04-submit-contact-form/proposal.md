---
description: Implement contact form submission using Mailjet API and Zustand state management.
---

# Contact Form Submission

This proposal outlines the implementation of the contact form submission logic, integrating with the Mailjet API. It introduces a Zustand store for state management, Zod for validation, and React components for the interactive form.

## Objectives
-   Enable users to submit the contact form.
-   Validate inputs (Name, Email, Phone, Subject, Message) using Zod.
-   Store form state using Zustand (`src/store/contact-form.ts`).
-   Provide UI feedback (loading, success, error).
-   Integrate with external API `POST https://api.caribbean-transfers.com/api/v1/contact`.
-   Use `PUBLIC_LEGACY_API_URL` environment variable (add to `.env` and `env.d.ts`).
-   Remove local API `src/pages/api/v1/contact.ts`.

## Approach
1.  **State Management**: Create a new Zustand store `useContactFormStore` to handle fields, validation errors, and submission status.
2.  **UI Components**:
    -   Create React versions of `Input` and `Textarea` atoms (`src/components/atoms/form/Input.tsx`, `Textarea.tsx`) to support controlled inputs.
    -   Create `ContactForm.tsx` (React) to replace the static HTML form in `Contact.astro`.
3.  **Integration**:
    -   The store will handle the `fetch` call to the external API using `PUBLIC_LEGACY_API_URL`.
    -   `Contact.astro` will hydrate `ContactForm` with `client:load`.
