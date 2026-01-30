## 1. Preparation
- [x] 1.1 Verify presence of `Input.astro` and `ButtonCta.astro`
- [x] 1.2 Identify required translations in `en.json` and `es.json`

## 2. Implementation
- [x] 2.1 Update `src/messages/en.json` with `pages.reservation.form.*` keys (based on user's request)
- [x] 2.2 Update `src/messages/es.json` with `pages.reservation.form.*` keys (based on user's request)
- [x] 2.3 Import `Input` from `../../../components/atoms/form/Input.astro` in `Reservation.astro`
- [x] 2.4 Implement the form in `src/components/pages/store/Reservation.astro` inside a `section`
- [x] 2.5 Ensure the form action is dynamic based on `lang` prop (`/my-reservation` or `/es/mi-reservacion`)
- [x] 2.6 Add CSRF token placeholder if necessary (matching user's `<input type="hidden" name="_token">`)



## 3. Validation
- [x] 3.1 Run `npm run dev` and verify form rendering
- [x] 3.2 Verify accessibility (labels, ARIA attributes)
- [x] 3.3 Run `openspec validate add-reservation-search-form --strict`
