# Proposal: Update Merida Form Title

Update the translation keys for the "Transportation from Cancun to Merida" page to show the correct title in both English and Spanish, replacing the current placeholder text (which refers to Tulum).

## User Review Required

> [!NOTE]
> This change only affects the translation files. No code changes are required in the Astro page as it already points to the correct key `cancunToMerida`.

## Proposed Changes

### Translations

#### [MODIFY] [en.json](file:///develop/astro/cancunsairporttransportation/src/messages/en.json)
- Update `pages.cancunToMerida.title` to "Transportation from Cancun to Merida".

#### [MODIFY] [es.json](file:///develop/astro/cancunsairporttransportation/src/messages/es.json)
- Update `pages.cancunToMerida.title` to "Transporte de Cancún a Mérida".

## Verification Plan

### Automated Tests
- Run `openspec validate update-merida-form-title --strict` to ensure the proposal is valid.

### Manual Verification
- Verify the change in the translation files.
- (In apply stage) Check the page `/transportation-from-cancun-to-merida` (English) and `/es/transporte-de-cancun-a-merida` (if exists) or the corresponding lang route to ensure the form title is correct.
