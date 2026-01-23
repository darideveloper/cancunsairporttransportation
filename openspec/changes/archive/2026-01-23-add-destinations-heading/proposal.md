# Add Destinations Heading and Content

## Summary
Render the `SectionHeading` component on the `Destinations.astro` page with a tagline, title, and description, using the provided content.

## Motivation
The Destinations page requires a proper introduction with localized content to improve user engagement and SEO.

## Proposed Changes

### 1. Translation Updates (`src/messages/{lang}.json`)
- Add a new `destinations` object under the `pages` key in both `en.json` and `es.json`.
- Define `tagline`, `title`, and `description` keys.

**English (`en.json`):**
```json
"pages": {
  "destinations": {
    "tagline": "Reach any corner of the Riviera Maya",
    "title": "Cancun Airport Transportation - Rates for Popular destinations",
    "description": "With years of experience in the tourist transportation industry, we guarantee an exceptional trip. Our professional drivers know every corner of the Riviera Maya, assuring you not only efficient transportation but also a smooth and hassle-free experience."
  }
}
```

**Spanish (`es.json`):**
```json
"pages": {
  "destinations": {
    "tagline": "Llega a cualquier rincón de la Riviera Maya",
    "title": "Cancun Airport Transportation - Tarifas para destinos populares",
    "description": "Con años de experiencia en la industria del transporte turístico, le garantizamos un viaje excepcional. Nuestros conductores profesionales conocen cada rincón de la Riviera Maya, asegurando no sólo un transporte eficiente, sino también una experiencia sin complicaciones."
  }
}
```
*Note: The Spanish tagline was inferred as "Llega a cualquier rincón de la Riviera Maya" since the provided input contained English text for that segment.*

### 2. Component Update (`src/components/pages/landing/Destinations.astro`)
- Render a `<p>` tag for the tagline *before* the `SectionHeading`.
  - Apply distinct styling to the tagline (e.g., `text-accent`, `font-semibold`) to match the "eyebrow" visual hierarchy implied by the `left` class grouping.
- Render `SectionHeading` passing the localized `.title`.
- Render the localized `.description` inside the `SectionHeading` slot.

**Structure Concept:**
```astro
<div class="mb-8"> <!-- Container for spacing -->
  <p class="text-accent font-bold uppercase tracking-wider text-sm mb-2">{t("pages.destinations.tagline")}</p>
  <SectionHeading title={t("pages.destinations.title")}>
    <p>{t("pages.destinations.description")}</p>
  </SectionHeading>
</div>
```

## Design Considerations
- **Localization**: All text content is moved to JSON files.
- **Hierarchy**: Tangline -> H1 (Title via SectionHeading) -> Description.
