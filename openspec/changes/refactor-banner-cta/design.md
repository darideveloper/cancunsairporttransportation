# Design: BannerCta Component

## Architecture
The `BannerCta` will be an "Organism" level component (or "Molecule" if deemed simple enough, but likely Organism due to complexity and specific business logic with translations).

### Component Structure
`src/components/organisms/BannerCta.astro`

#### Props
```typescript
interface Props {
  title: string;
  text: string; // Markdown content
  // Optional: We could make image/buttons overrideable in the future,
  // but for this specific request, they are "always the same".
}
```

#### Internal Logic
-   Retrieve `lang` from `Astro.params` or `Astro.props` (or pass it in).
-   Use `useTranslations(lang)`.
-   Access shared translation keys:
    -   `baseSections.bannerCta.imageAlt`
    -   `baseSections.bannerCta.imageTitle`
    -   `baseSections.bannerCta.buttons` (array/object iteration)
-   Render `H2` for title.
-   Render `marked.parse(text)` for the body.
-   Render `ButtonCta` components based on the shared configuration.
-   Render `Image` component.

### Translation Schema
**es.json** (Reference):
```json
"baseSections": {
  "bannerCta": {
    "imageAlt": "...",
    "imageTitle": "...",
    "buttons": { "primary": {...}, "secondary": {...} }
  }
},
"cancunAirportTransportation": {
  "title": "...",
  "text": "..."
}
```

**en.json** (Target):
-   Extract `buttons`, `imageAlt`, `imageTitle` from `cancunAirportTransportation` and move to `baseSections.bannerCta`.

### Considerations
-   **Markdown Parsing**: The component needs to handle markdown parsing for the `text` prop, consistent with the current implementation.
-   **Styling**: Copy existing Tailwind classes.
-   **Responsive Design**: Maintain existing mobile/desktop visibility and layout.
