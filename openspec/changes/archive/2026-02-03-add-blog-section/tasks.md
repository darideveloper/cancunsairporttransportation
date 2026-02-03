# Tasks

## Phase 1: Foundation

- [x] Define blog types in `src/types/blog.ts` <!-- id: 0 -->
- [x] Create `src/lib/blog/api.ts` with `getPosts` and `getPostBySlug` functions <!-- id: 1 -->
- [x] Add `blog` route to `src/lib/i18n/routes.ts` <!-- id: 2 -->
- [x] Update `src/pages/rss.xml.js` to use `getPosts` from blog API instead of `getCollection` <!-- id: 20 -->

## Phase 2: Translation Integration

- [x] Add `pages.blog` translations to `src/messages/en.json` (title, description, keywords, UI strings) <!-- id: 3 -->
- [x] Add `pages.blog` translations to `src/messages/es.json` (title, description, keywords, UI strings) <!-- id: 4 -->

## Phase 3: Language Switching

- [x] Update `src/components/atoms/LangLink.astro` to support `translatedPath` prop <!-- id: 5 -->
- [x] Update `src/components/molecules/TopBar.astro` to pass `translatedPath` to `LangLink` <!-- id: 6 -->
- [x] Update `src/components/organisms/Header.astro` to accept and pass `translatedPath` <!-- id: 7 -->
- [x] Update `src/layouts/Layout.astro` to accept and propagate `translatedPath` prop <!-- id: 8 -->
- [x] Update `src/components/utils/base/BaseSEO.astro` to support optional `alternateUrls` prop <!-- id: 22 -->
- [x] Update `src/components/utils/BlogPostSEO.astro` to accept and pass `alternateUrls` to `BaseSEO` <!-- id: 23 -->

## Phase 4: Components

- [x] Create `src/components/molecules/PostCard.astro` using `ButtonCta` for read more link <!-- id: 9 -->
- [x] Create `src/components/pages/blog/BlogListing.astro` using `SectionHeading`, `PostCard`, `ButtonCta` <!-- id: 10 -->
- [x] Create `src/components/pages/blog/BlogDetail.astro` using `BannerImage`, `marked` for content <!-- id: 11 -->

## Phase 5: Pages

- [x] Create `src/pages/blog/[...page].astro` (English listing with `BlogSEO`) <!-- id: 12 -->
- [x] Create `src/pages/es/blog/[...page].astro` (Spanish listing with `BlogSEO`) <!-- id: 13 -->
- [x] Create `src/pages/blog/[slug].astro` (English detail with `BlogPostSEO` using API data) <!-- id: 14 -->
- [x] Create `src/pages/es/blog/[slug].astro` (Spanish detail with `BlogPostSEO` using API data) <!-- id: 15 -->

## Phase 6: Validation

- [x] Verify build completes without errors <!-- id: 16 -->
- [x] Verify SEO metadata is correctly rendered on listing pages <!-- id: 17 -->
- [x] Verify SEO metadata from API is correctly rendered on detail pages <!-- id: 18 -->
- [x] Verify language switching works correctly on blog posts <!-- id: 19 -->
- [x] Verify RSS feed is generated with correct post data from API <!-- id: 21 -->
