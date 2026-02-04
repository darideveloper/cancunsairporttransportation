# Tasks: Contact Form Submission

## Components
- [x] `src/components/atoms/form/Input.tsx` (React component created)
- [x] `src/components/atoms/form/Textarea.tsx` (React component created)
- [x] `src/components/organisms/ContactForm.tsx` (Use store, handle UI states)
- [x] `src/components/pages/general/Contact.astro` (Hydrate ContactForm)

## State Management
- [x] `src/store/contact-form.ts`: Implement Zod validation
- [x] `src/store/contact-form.ts`: Manage form state (Zustand)
- [x] `src/store/contact-form.ts`: Update API call to use `PUBLIC_LEGACY_API_URL`

## Configuration & Environment
- [x] `env.d.ts`: Add `PUBLIC_LEGACY_API_URL` definition
- [x] `.env`: Add `PUBLIC_LEGACY_API_URL=https://api.caribbean-transfers.com`

## Cleanup
- [x] Remove `src/pages/api/v1/contact.ts` (Local API endpoint)
