# Tasks for FeatureBanner Refactor

- [x] Create `src/components/organisms/FeatureBanner.astro` based on `specs/ui/feature-banner.md`.
- [x] Replace `TextCardHalf` and `TextCardSmall` with `FeatureBanner` in `src/components/pages/destinations/Akumal.astro`.
  - Use `layout="grid"` (or default) for `TextCardHalf` replacements.
  - Use `layout="flex"` for `TextCardSmall` replacements.
- [x] Replace `TextCardHalf` and `TextCardSmall` with `FeatureBanner` in `src/components/pages/destinations/Merida.astro`.
- [x] Replace `TextCardHalf` and `TextCardSmall` with `FeatureBanner` in `src/components/pages/destinations/Playa.astro`.
- [x] Replace `TextCardHalf` and `TextCardSmall` with `FeatureBanner` in `src/components/pages/destinations/Tulum.astro`.
- [x] Replace `TextCardHalf` and `TextCardSmall` with `FeatureBanner` in `src/components/pages/landing/Home.astro`.
- [x] Delete `src/components/organisms/TextCardHalf.astro`.
- [x] Delete `src/components/organisms/TextCardSmall.astro`.
- [x] Verify build and visual check of a destination page and home page.
