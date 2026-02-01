# Tasks

## Phase 1: Foundation

- [ ] Define blog types in `src/types/blog.ts` <!-- id: 0 -->
- [ ] Create `src/lib/blog/api.ts` with `getPosts` and `getPostBySlug` functions <!-- id: 1 -->
- [ ] Add `blog` route to `src/lib/i18n/routes.ts` <!-- id: 2 -->

## Phase 2: Translation Integration

- [ ] Add `pages.blog` translations to `src/messages/en.json` (title, description, keywords, UI strings) <!-- id: 3 -->
- [ ] Add `pages.blog` translations to `src/messages/es.json` (title, description, keywords, UI strings) <!-- id: 4 -->

## Phase 3: Language Switching

- [ ] Update `src/components/atoms/LangLink.astro` to support `translatedPath` prop <!-- id: 5 -->
- [ ] Update `src/components/molecules/TopBar.astro` to pass `translatedPath` to `LangLink` <!-- id: 6 -->
- [ ] Update `src/components/organisms/Header.astro` to accept and pass `translatedPath` <!-- id: 7 -->
- [ ] Update `src/layouts/Layout.astro` to accept and propagate `translatedPath` prop <!-- id: 8 -->

## Phase 4: Components

- [ ] Create `src/components/molecules/PostCard.astro` using `ButtonCta` for read more link <!-- id: 9 -->
- [ ] Create `src/components/pages/blog/BlogListing.astro` using `SectionHeading`, `PostCard`, `ButtonCta` <!-- id: 10 -->
- [ ] Create `src/components/pages/blog/BlogDetail.astro` using `BannerImage`, `marked` for content <!-- id: 11 -->

## Phase 5: Pages

- [ ] Create `src/pages/blog/[...page].astro` (English listing with `BlogSEO`) <!-- id: 12 -->
- [ ] Create `src/pages/es/blog/[...page].astro` (Spanish listing with `BlogSEO`) <!-- id: 13 -->
- [ ] Create `src/pages/blog/[slug].astro` (English detail with `BlogPostSEO` using API data) <!-- id: 14 -->
- [ ] Create `src/pages/es/blog/[slug].astro` (Spanish detail with `BlogPostSEO` using API data) <!-- id: 15 -->

## Phase 6: Validation

- [ ] Verify build completes without errors <!-- id: 16 -->
- [ ] Verify SEO metadata is correctly rendered on listing pages <!-- id: 17 -->
- [ ] Verify SEO metadata from API is correctly rendered on detail pages <!-- id: 18 -->
- [ ] Verify language switching works correctly on blog posts <!-- id: 19 -->
