# Tasks: Consolidate Site Config

- [x] Update `src/data/site-config.ts` to include all exported constants from `src/lib/contact.ts` (`PHONES`, `EMAIL`, `ADDRESS`, `SOCIAL_LINKS`, `GOOGLE_MAPS`, `BUSINESS_HOURS`). <!-- id: 0 -->
- [x] Refactor `BUSINESS_DATA` in `src/data/site-config.ts` to use the newly added constants, ensuring data consistency. <!-- id: 1 -->
- [x] Update `src/components/molecules/TopBar.astro` to import from `src/data/site-config`. <!-- id: 2 -->
- [x] Update `src/components/atoms/GoogleMap.astro` to import from `src/data/site-config`. <!-- id: 3 -->
- [x] Update `src/components/organisms/MenuBar.astro` to import from `src/data/site-config`. <!-- id: 4 -->
- [x] Update `src/components/organisms/Locations.astro` to import from `src/data/site-config`. <!-- id: 5 -->
- [x] Update `src/components/pages/general/Contact.astro` to import from `src/data/site-config`. <!-- id: 6 -->
- [x] Update `src/components/organisms/Footer.astro` to import from `src/data/site-config`. <!-- id: 7 -->
- [x] Verify `src/components/utils/base/BaseSEO.astro` still works correctly with the updated `BUSINESS_DATA`. <!-- id: 8 -->
- [x] Delete `src/lib/contact.ts`. <!-- id: 9 -->
- [x] Run `npm run build` to verify no import errors exist. <!-- id: 10 -->
