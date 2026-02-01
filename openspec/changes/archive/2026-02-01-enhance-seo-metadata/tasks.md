# Tasks: SEO Metadata Enhancements

## Validation
- [x] Run `npm run build` locally to verify build success before changes
- [x] Verify current metadata state (reconfirming baseline)

## Translations
- [x] Add `keywords` key to `pages.home` (check if exists), `pages.contact`, `pages.privacy`, etc. in `src/messages/en.json`
- [x] Add `keywords` key to `pages.taxi`, `pages.akumal`, `pages.tulum`, `pages.destinations`, `pages.group`, `pages.luxury`, `pages.private`, `pages.playa`, `pages.merida` in `src/messages/en.json`
- [x] Repeat keyword additions for `src/messages/es.json` with Spanish terms

## Component Updates: Core
- [x] Refactor `src/components/utils/base/BaseSEO.astro` to conditionally construct `baseSchema` based on `jsonType`
- [x] Ensure `TouristDestination` schema excludes invalid properties (openingHours, priceRange, contact info)
- [x] Ensure `Service` schema includes `serviceType` and `provider`
- [x] Update `src/components/utils/PageSEO.astro` to accept and pass `jsonType` and `ogImage` props

## Component Updates: Destinations
- [x] Update `src/components/pages/destinations/Akumal.astro`: Pass `jsonType="TouristDestination"` and `ogImage={safeTripBookingImg.src}` to `<PageSEO>`
- [x] Update `src/components/pages/destinations/Tulum.astro`: Pass `jsonType="TouristDestination"` and `ogImage={safeTripBookingImg.src}` to `<PageSEO>`
- [x] Update `src/components/pages/destinations/Playa.astro`: Pass `jsonType="TouristDestination"` and `ogImage={safeTripBookingImg.src}` to `<PageSEO>`
- [x] Update `src/components/pages/destinations/Merida.astro`: Pass `jsonType="TouristDestination"` and `ogImage={safeTripBookingImg.src}` to `<PageSEO>`
- [ ] Update `src/components/pages/landing/Destinations.astro`: Pass `jsonType="TouristDestination"` and appropriate image to `<PageSEO>` (Optional - keeps LocalBusiness for landing page)

## Component Updates: Services
- [x] Update `src/components/pages/services/Taxi.astro`: Pass `jsonType="Service"` and `ogImage={standardImg.src}` to `<PageSEO>`
- [x] Update `src/components/pages/services/Group.astro`: Pass `jsonType="Service"` and `ogImage={standardImg.src}` to `<PageSEO>`
- [x] Update `src/components/pages/services/Luxury.astro`: Pass `jsonType="Service"` and `ogImage={luxuryImg.src}` to `<PageSEO>`
- [x] Update `src/components/pages/services/Private.astro`: Pass `jsonType="Service"` and `ogImage={standardImg.src}` to `<PageSEO>`

## Verification
- [x] Run `npm run build` - Build completed successfully
- [ ] Use `check_metadata.js` (or similar inspection) to verify `og:image` and `keywords` presence
- [x] Manually inspect generated HTML files to verify JSON-LD schema type (verified via build output)
