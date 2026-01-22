# Update Private Transfer FAQs

## Summary
Update the FAQ section on the Private Airport Transfer page (`private-airport-transfer-cancun.astro`) with new, specific content in English and Spanish. Currently, the page reuses the generic "home" FAQs. This change will decouple the FAQs for this page, allowing for specific questions and answers related to private transportation.

## Motivation
The user requested specific FAQs for the Private Airport Transportation service to better address customer doubts about this specific service (e.g., passenger capacity, difference from other services).

## Design
- **Component Update**: Modify `src/pages/[lang]/private-airport-transfer-cancun.astro` to pass `page="private"` to the `<FaqSection>` component.
- **Translation Keys**: Add `pages.private.faq` to `src/messages/en.json` and `src/messages/es.json` containing the new Title, Subtitle, and FAQ items.
- **Guardrails**: Ensure `pages.private` key structure in JSON does not conflict with existing `testimonials` data.
