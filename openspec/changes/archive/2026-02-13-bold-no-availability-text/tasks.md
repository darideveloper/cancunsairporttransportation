# Tasks: Bold Text in No Availability Component

- [x] Update English translations <!-- id: 0 -->
    - Update `pages.results.noAvailabilityMessage` in `src/messages/en.json` to: `"Unfortunately we found no availability for the **Zone / Times** requested, but don't worry, we can solve it."`
- [x] Update Spanish translations <!-- id: 1 -->
    - Update `pages.results.noAvailabilityMessage` in `src/messages/es.json` to: `"Desafortunadamente no encontramos disponibilidad para la **Zona / Horarios** solicitados, descuida podemos resolverlo."`
- [x] Implement Markdown parsing in `NoAvailability.tsx` <!-- id: 2 -->
    - Import `marked`
    - Wrap `t("pages.results.noAvailabilityMessage")` with `marked.parse`
    - Update `h2` to use `dangerouslySetInnerHTML` or equivalent
- [x] Validation <!-- id: 3 -->
    - Verify component renders bold text correctly in both languages
