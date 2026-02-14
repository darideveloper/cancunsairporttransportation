# Tasks: Rename `page` to `contentKey`

- [x] **Phase 1: Update Organisms & Molecules (Prop Consumer)**
    - [x] `src/components/organisms/FaqSection.astro`: Rename `page` to `contentKey`.
    - [x] `src/components/organisms/PricingSection.astro`: Rename `page` to `contentKey`.
    - [x] `src/components/organisms/Includes.astro`: Rename `page` to `contentKey`.
    - [x] `src/components/organisms/Testimonials.astro`: Rename `page` to `contentKey`.
    - [x] `src/components/organisms/PrivateDetails.astro`: Rename `page` to `contentKey`.
    - [x] `src/components/organisms/BannerCta.astro`: Rename `page` to `contentKey`.
    - [x] `src/components/organisms/FeaturedDestinations.astro`: Rename `page` to `contentKey`.
    - [x] `src/components/organisms/PopularHotels.astro`: Rename `page` to `contentKey`.
    - [x] `src/components/organisms/TransportationServices.astro`: Rename `page` to `contentKey`.
    - [x] `src/components/organisms/TextCardSmall.astro`: Rename `page` to `contentKey`.
    - [x] `src/components/organisms/TextCardHalf.astro`: Rename `page` to `contentKey`.

- [x] **Phase 2: Update Page Components (Prop Provider & Local Usage)**
    - [x] `src/components/pages/landing/Home.astro`: Rename `page` -> `contentKey` and use `pageKey` as default.
    - [x] `src/components/pages/services/Luxury.astro`: Rename `page` -> `contentKey` and use `pageKey` as default.
    - [x] `src/components/pages/services/Taxi.astro`: Rename `page` -> `contentKey` and use `pageKey` as default.
    - [x] `src/components/pages/services/Private.astro`: Rename `page` -> `contentKey` and use `pageKey` as default.
    - [x] `src/components/pages/services/Group.astro`: Rename `page` -> `contentKey` and use `pageKey` as default.
    - [x] `src/components/pages/destinations/Akumal.astro`: Rename `page` -> `contentKey` and use `pageKey` as default.
    - [x] `src/components/pages/destinations/Tulum.astro`: Rename `page` -> `contentKey` and use `pageKey` as default.
    - [x] `src/components/pages/destinations/Playa.astro`: Rename `page` -> `contentKey` and use `pageKey` as default.
    - [x] `src/components/pages/destinations/Merida.astro`: Rename `page` -> `contentKey` and use `pageKey` as default.
    - [x] `src/components/pages/landing/Destinations.astro`: Rename `page` -> `contentKey` and use `pageKey` as default.
    - [x] `src/components/pages/store/Results.astro`: Rename `page` -> `contentKey` and use `pageKey` as default.

- [x] **Phase 3: Validation**
    - [x] Run `npm run dev` and verify translations work on all pages.
    - [x] Verify FAQs and pricing sections display correct data for each page.
    - [x] Run `openspec validate rename-page-to-content-key --strict`
