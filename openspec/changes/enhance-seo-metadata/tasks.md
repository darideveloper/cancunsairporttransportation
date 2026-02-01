# Tasks: SEO Metadata Enhancements

## Validation
- [ ] Run `npm run build` locally to verify build success before changes
- [ ] Verify current metadata state (reconfirming baseline)

## Translations
- [ ] Add `keywords` key to `pages.home` (check if exists), `pages.contact`, `pages.privacy`, etc. in `src/messages/en.json`
- [ ] Add `keywords` key to `pages.taxi`, `pages.akumal`, `pages.tulum`, `pages.destinations`, `pages.group`, `pages.luxury`, `pages.private`, `pages.playa`, `pages.merida` in `src/messages/en.json`
- [ ] Repeat keyword additions for `src/messages/es.json` with Spanish terms

## Component Updates: Core
- [ ] Refactor `src/components/utils/base/BaseSEO.astro` to conditionally construct `baseSchema` based on `jsonType`
- [ ] Ensure `TouristDestination` schema excludes invalid properties (openingHours, priceRange, contact info)
- [ ] Ensure `Service` schema includes `serviceType` and `provider`

## Component Updates: Destinations
- [ ] Update `src/components/pages/destinations/Akumal.astro`: Pass `jsonType="TouristDestination"` and `ogImage={safeTripBookingImg.src}` to `<PageSEO>`
- [ ] Update `src/components/pages/destinations/Tulum.astro`: Pass `jsonType="TouristDestination"` and `ogImage={safeTripBookingImg.src}` to `<PageSEO>`
- [ ] Update `src/components/pages/destinations/Playa.astro`: Pass `jsonType="TouristDestination"` and `ogImage={safeTripBookingImg.src}` to `<PageSEO>`
- [ ] Update `src/components/pages/destinations/Merida.astro`: Pass `jsonType="TouristDestination"` and `ogImage={safeTripBookingImg.src}` to `<PageSEO>`
- [ ] Update `src/components/pages/landing/Destinations.astro`: Pass `jsonType="TouristDestination"` and appropriate image to `<PageSEO>`

## Component Updates: Services
- [ ] Update `src/components/pages/services/Taxi.astro`: Pass `jsonType="Service"` and `ogImage={standardImg.src}` to `<PageSEO>`
- [ ] Update `src/components/pages/services/Group.astro`: Pass `jsonType="Service"` and `ogImage={vanImg.src}` (verify var name) to `<PageSEO>`
- [ ] Update `src/components/pages/services/Luxury.astro`: Pass `jsonType="Service"` and `ogImage={suburbanImg.src}` (verify var name) to `<PageSEO>`
- [ ] Update `src/components/pages/services/Private.astro`: Pass `jsonType="Service"` and `ogImage={vanImg.src}` (verify var name) to `<PageSEO>`

## Verification
- [ ] Run `npm run build`
- [ ] Use `check_metadata.js` (or similar inspection) to verify `og:image` and `keywords` presence
- [ ] Manually inspect a few generated HTML files to verify JSON-LD schema type
