# Proposal: Bold Text in No Availability Component

In the `NoAvailability` component, part of the message shown when no results are found needs to be emphasized. Specifically, the terms **"Zone / Times"** (EN) and **"Zona / Horarios"** (ES) should be bold.

Consistent with other parts of the project (like `Destinations.astro`), we will use Markdown syntax (`**text**`) in the translation files and use the `marked` library to parse it in the component.

## User Review Required

> [!IMPORTANT]
> The change requires adding `set:html` to the message container in `NoAvailability.tsx`, which replaces the simple text rendering.

## Proposed Changes

### i18n
- Update `pages.results.noAvailabilityMessage` in `en.json` to include Markdown bold tags.
- Update `pages.results.noAvailabilityMessage` in `es.json` to include Markdown bold tags.

### Components
- Modify `src/components/organisms/NoAvailability.tsx` to use `marked.parse` for the message and render it using `set:html` (or equivalent in React/Preact).
