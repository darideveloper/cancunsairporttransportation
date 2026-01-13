# Tasks: Make Testimonials Dynamic

1.  **Generate Images**
    - [ ] Generate `src/assets/images/clients/playa-client-1.webp` (Portrait of John P.).
    - [ ] Generate `src/assets/images/clients/playa-client-2.webp` (Portrait of Ana G.).
    - [ ] Generate `src/assets/images/clients/playa-client-3.webp` (Portrait of Carlos R.).

2.  **Update Translations**
    - [ ] Add English translations for Playa del Carmen testimonials to `src/messages/en.json`.
    - [ ] Add Spanish translations for Playa del Carmen testimonials to `src/messages/es.json`.

3.  **Refactor Testimonials Component**
    - [ ] specific: `src/components/organisms/Testimonials.astro`
    - [ ] Modify component to accept props `title`, `description`, `items`.
    - [ ] Update logic to use props if available, else fallback to default.
    - [ ] Update JSON-LD generation to use the active data source.

4.  **Update Playa del Carmen Page**
    - [ ] specific: `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro`
    - [ ] Import new client images.
    - [ ] Fetch translations for the new section.
    - [ ] Create data array using translations and images.
    - [ ] Pass data to `<Testimonials />`.

5.  **Validation**
    - [ ] Verify Playa del Carmen page shows new testimonials.
    - [ ] Verify Index page (and others) still shows default testimonials.
