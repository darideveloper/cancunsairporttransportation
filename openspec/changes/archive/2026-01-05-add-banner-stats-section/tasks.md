# Tasks: Add Banner Stats Section

- [x] Define translation keys for `bannerStats` in `src/messages/en.json`
- [x] Define translation keys for `bannerStats` in `src/messages/es.json`
- [x] Create `src/components/organisms/BannerStats.astro` reusing `H2.astro` and implementing the required structure
- [x] Implement internal translation logic using `getLangFromUrl` and `useTranslations`
- [x] Verify semantic HTML and ARIA labels are correctly applied
- [x] Add `<BannerStats />` to `src/pages/[lang]/index.astro` to verify rendering (e.g. at the bottom of the main content)
- [x] Validate the new change using `openspec validate add-banner-stats-section --strict`
