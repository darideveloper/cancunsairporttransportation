- [x] 1. Update translation files
   - Modify `src/messages/en.json` to move image/button keys to `baseSections.bannerCta`.
   - Verify `src/messages/es.json` is already correct (read-only verification).

- [x] 2. Create BannerCta component
   - Create `src/components/organisms/BannerCta.astro`.
   - Implement props interface (`title`, `text`).
   - Import necessary dependencies (`marked`, `ButtonCta`, `H2`, `Image`, `cancunAirportTransportationImg`).
   - Implement rendering logic using `baseSections.bannerCta` for common elements.
   - Implement styling to match existing `index.astro` section.

- [x] 3. Refactor Index Page
   - Import `BannerCta` in `src/pages/[lang]/index.astro`.
   - Replace the manual section implementation with `<BannerCta ... />`.
   - Pass `title={t('cancunAirportTransportation.title')}` and `text={t('cancunAirportTransportation.text')}`.

- [x] 4. Verify
   - Run dev server.
   - Check English and Spanish versions of the home page.
   - Verify buttons, images, and text render correctly.
