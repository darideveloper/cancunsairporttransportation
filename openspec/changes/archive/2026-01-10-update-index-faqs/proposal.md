# Update Index FAQs

Update the FAQs section on the index page with the new provided texts in Spanish and English. This includes updating the translation files and ensuring all 7 FAQs are displayed.

## User Review Required

> [!IMPORTANT]
> The implementation in `index.astro` currently uses a hardcoded list of keys (`howToBook`, `rates`, `flightDelay`, `meetingPoint`). To display the 7 new FAQs, the `faqKeys` array in `index.astro` will be updated.

## Proposed Changes

### Translations

#### [MODIFY] [en.json](file:///develop/astro/cancunsairporttransportation/src/messages/en.json)
Update `baseSections.faqSection` with the new titles, descriptions, and 7 FAQ items.

#### [MODIFY] [es.json](file:///develop/astro/cancunsairporttransportation/src/messages/es.json)
Update `baseSections.faqSection` with the new titles, descriptions, and 7 FAQ items.

### Landing Page

#### [MODIFY] [index.astro](file:///develop/astro/cancunsairporttransportation/src/pages/[lang]/index.astro)
Update `faqKeys` to include the new translation keys for the 7 FAQs.

## Verification Plan

### Automated Tests
- Run `openspec validate update-index-faqs --strict` to ensure the proposal follows conventions.

### Manual Verification
- Verify that the FAQ section on the home page displays the new titles and descriptions.
- Verify that all 7 FAQs are rendered correctly in both English and Spanish.
- Verify that the FAQ accordion functionality still works as expected.
