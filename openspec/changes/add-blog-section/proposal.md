# Add Blog Section with Dynamic Content

## Description
Implement a blog section that fetches content from an external API, supports pagination, detailed post views, and multilingual content (English/Spanish).

## Goals
- Fetch blog posts from external API.
- Create a paginated blog listing page.
- Create a detailed blog post page.
- Support English and Spanish content.
- Implement correct language switching for blog posts using `related_post` data.
- Ensure the system is SSG (Static Site Generation).

## Scope
- `src/lib/api.ts`: API client for fetching posts.
- `src/types/blog.ts`: Type definitions for blog data.
- `src/pages/blog/[...page].astro`: Blog listing page.
- `src/pages/blog/[slug].astro`: Blog detail page.
- `src/pages/es/blog/[...page].astro`: Spanish blog listing page (or unified if possible).
- `src/pages/es/blog/[slug].astro`: Spanish blog detail page (or unified).
- Update `LangLink.astro` and `Layout.astro` to support dynamic translated URLs for blog posts.
- Add `blog` to `src/lib/i18n/routes.ts` for the main listing page.
- **Strictly use** `src/components/utils/BlogSEO.astro` and `src/components/utils/BlogPostSEO.astro` for SEO management.
