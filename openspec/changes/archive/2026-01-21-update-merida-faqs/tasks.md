# Tasks: Update Merida FAQ Content

1.  [ ] **Update Translation Files**
    - [ ] Update `src/messages/es.json` with the new Merida FAQ title, description, and items.
    - [ ] Update `src/messages/en.json` with the new Merida FAQ title, description, and items.
    - [ ] **Validation**: Verify that the JSON files are valid and the keys match.

2.  [ ] **Update FaqSection Component**
    - [ ] Modify `src/components/organisms/FaqSection.astro` to prioritize `pages.${page}.faq.description` over `global.sections.faq.description`.
    - [ ] **Validation**: Ensure the FAQ section on the Home page still shows the global description, and the Merida page shows the new specific description.

3.  [ ] **Verify Changes on Merida Page**
    - [ ] Check `/es/transportacion-cancun-a-merida` (or matching route) to see the translated FAQs.
    - [ ] Check `/en/transportation-from-cancun-to-merida` (or matching route) to see the translated FAQs.

4.  [ ] **Update Specifications**
    - [ ] Update `openspec/specs/merida-page-translations/spec.md` to include the new FAQ requirements.
    - [ ] Update `openspec/specs/faq-section/spec.md` to reflect the support for local descriptions.
