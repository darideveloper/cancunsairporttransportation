# Tasks: Add Popular Hotels Section

1. [ ] Update `src/messages/en.json` with `popularHotels` data.
2. [ ] Update `src/messages/es.json` with `popularHotels` data.
3. [ ] Create `src/components/molecules/BasicIconCard.astro`.
   - [ ] Implement component logic (title, icon, href).
   - [ ] Style as per design (h3 + icon).
4. [ ] Create `src/components/organisms/PopularHotels.astro`.
   - [ ] Implement `PopularHotels` component structure.
   - [ ] Integrate `BasicIconCard` and `SectionHeading`.
   - [ ] Implement grid layout.
5. [ ] Modify `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro`.
   - [ ] Import `PopularHotels`.
   - [ ] Add `PopularHotels` to the template.
   - [ ] Ensure `BookingForm` acts as a valid anchor target.
6. [ ] Verify changes in browser.
7. [ ] Validate with `openspec validate`.
