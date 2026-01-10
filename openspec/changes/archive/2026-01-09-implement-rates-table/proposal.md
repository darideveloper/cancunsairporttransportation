# Implement Rates Table

## Goal
Create a responsive, SEO-optimized pricing rates table for transportation services, integrated with the project's translation system.

## Proposed Changes
### Components
#### [NEW] [RatesTable.astro](file:///develop/astro/cancunsairporttransportation/src/components/molecules/RatesTable.astro)
- Create a new Astro component `RatesTable` in `src/components/molecules`.
- Use semantic HTML `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`, `<caption>`.
- Implement responsive styling using Tailwind CSS (simulating `table-striped` and `table-responsive`).
- Use `aria-label` and `scope` attributes for accessibility.
- Fetch translations from `src/messages/`.

### Translations
#### [MODIFY] [en.json](file:///develop/astro/cancunsairporttransportation/src/messages/en.json)
- Add entries for table headers and row content (destinations, prices).
- Structure:
  ```json
  "ratesTable": {
    "title": "Cancun Airport Transportation Rates",
    "caption": "Transportation Service Prices by Destinations",
    "headers": { ... },
    "destinations": { ... }
  }
  ```

#### [MODIFY] [es.json](file:///develop/astro/cancunsairporttransportation/src/messages/es.json)
- Add corresponding Spanish translations.

### Pages
#### [MODIFY] [index.astro](file:///develop/astro/cancunsairporttransportation/src/pages/[lang]/index.astro)
- Import and render `RatesTable.astro` in the appropriate section.

## Verification Plan
### Automated Tests
- Build verification: `npm run build`
- Check for accessibility issues in the generated HTML.

### Manual Verification
- Start dev server: `npm run dev`
- Verify the table renders correctly on desktop and mobile.
- Verify translations switch correctly between English and Spanish.
- Verify accessible attributes are present.
