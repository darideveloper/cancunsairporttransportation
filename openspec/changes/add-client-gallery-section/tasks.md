# Tasks: Add Client Gallery Section

1. Create `ClientGallery` component
   - [ ] Create `src/components/organisms/ClientGallery.astro`.
   - [ ] Implement props interface (`title`, `subtitle`, `images`).
   - [ ] Implement layout using `SectionHeading` and Tailwind Grid.
   - [ ] Ensure `astro:assets` Image component usage.

2. Update Translations
   - [ ] Add `clientGallery` section keys to `src/messages/en.json`.
   - [ ] Add `clientGallery` section keys to `src/messages/es.json`.
   - [ ] Include `title` and `subtitle`.

3. Integrate into Page
   - [ ] Import images in `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro`.
   - [ ] Import `ClientGallery` component.
   - [ ] Add component markup with props after "Why Choose Us" section.

4. Validation
   - [ ] Verify standard grid layout (4 cols desktop).
   - [ ] Verify responsive beavhiour.
   - [ ] Verify correct images and text are displayed.
