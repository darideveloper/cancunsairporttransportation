# Tasks: Update Banner Stats Images

- [x] Update `src/messages/en.json` to include `imageAlt` and `imageTitle` for all 3 stats in `bannerStats`
- [x] Update `src/messages/es.json` to include `imageAlt` and `imageTitle` for all 3 stats in `bannerStats`
- [x] Modify `src/components/organisms/BannerStats.astro` to import `Image` from `astro:assets` and remove `react-icons`
- [x] Update the `stats` data structure in `BannerStats.astro` to use imported images (use `src/assets/images/logo.svg` as a placeholder for now if no specific icons exist, or reuse `reliable-company.webp`)
- [x] Implement the rendering loop using `<Image />` with dynamic `alt` and `title` props
- [x] Validate the changes using `openspec validate update-banner-stats-images --strict`
