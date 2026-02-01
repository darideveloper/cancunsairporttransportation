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

### New Files

- `src/lib/blog/api.ts`: API client for fetching posts.
- `src/types/blog.ts`: Type definitions for blog data.
- `src/pages/blog/[...page].astro`: English blog listing page.
- `src/pages/blog/[slug].astro`: English blog detail page.
- `src/pages/es/blog/[...page].astro`: Spanish blog listing page.
- `src/pages/es/blog/[slug].astro`: Spanish blog detail page.
- `src/components/molecules/PostCard.astro`: Post card for listing grid.
- `src/components/pages/blog/BlogListing.astro`: Blog listing page component.
- `src/components/pages/blog/BlogDetail.astro`: Blog detail page component.

### Modified Files

- `src/lib/i18n/routes.ts`: Add `blog` route for the main listing page.
- `src/components/atoms/LangLink.astro`: Add `translatedPath` prop for custom translated URLs.
- `src/components/molecules/TopBar.astro`: Pass `translatedPath` to `LangLink`.
- `src/components/organisms/Header.astro`: Add `translatedPath` prop and pass to `TopBar`.
- `src/layouts/Layout.astro`: Add `translatedPath` prop support and pass to `Header`.
- `src/messages/en.json`: Add `pages.blog` translations for listing page SEO and UI.
- `src/messages/es.json`: Add `pages.blog` translations for listing page SEO and UI.

### SEO Integration (STRICT REQUIREMENT)

- **Listing Pages**: Use `src/components/utils/BlogSEO.astro` with `currentPage="blog"`.
  - This component reads SEO metadata from `pages.blog.title`, `pages.blog.description`, `pages.blog.keywords` in the JSON translation files.
- **Detail Pages**: Use `src/components/utils/BlogPostSEO.astro` with post-specific data FROM THE API:
  - `postTitle` ← `post.title` (from API)
  - `postExcerpt` ← `post.description` (from API)
  - `postKeywords` ← `post.keywords` (from API)
  - `postAuthor` ← `post.author` (from API)
  - `postDate` ← `post.created_at` (from API)
  - `postImageUrl` ← `post.banner_image_url` (from API)
  - `postSlug` ← `post.slug` (from API)

### Translation System Integration (STRICT REQUIREMENT)

- **Static UI Text**: All static UI text (buttons, labels, headings) MUST use `useTranslations(lang)` from `src/lib/i18n/utils.ts`.
- **Dynamic Content**: Blog post titles, descriptions, content, and SEO metadata come from the API (already localized via `Accept-Language` header).
- **SEO Metadata for Listing Page**: Add `pages.blog.title`, `pages.blog.description`, `pages.blog.keywords` to both `en.json` and `es.json`.

### Reusable Components (MUST USE)

The following existing components MUST be reused:

| Component | Location | Usage |
|-----------|----------|-------|
| `Layout` | `src/layouts/Layout.astro` | Main layout wrapper for all blog pages |
| `SectionHeading` | `src/components/molecules/SectionHeading.astro` | Page headings with optional description slot |
| `ButtonCta` | `src/components/atoms/ButtonCta.astro` | "Read more" buttons, pagination buttons |
| `H2` | `src/components/atoms/H2.astro` | Section titles within pages |
| `BannerImage` | `src/components/atoms/BannerImage.astro` | Hero banner on blog detail page (with post banner image) |
| `BlogSEO` | `src/components/utils/BlogSEO.astro` | SEO for listing pages |
| `BlogPostSEO` | `src/components/utils/BlogPostSEO.astro` | SEO for detail pages |

### New Component Details

**`PostCard.astro`** (for listing grid):
- Display: thumbnail image, title, excerpt, date, author
- Link: to `/blog/{slug}` or `/es/blog/{slug}`
- "Read more" text from `useTranslations(lang)` → `pages.blog.readMore`
- Use `ButtonCta` with `variant="blueGhost"` for the read more link

**`BlogListing.astro`** (page component):
- Use `Layout` with `BlogSEO` in the `seo` slot
- Use `SectionHeading` for the page title from `pages.blog.heading`
- Display grid of `PostCard` components
- Pagination controls using `ButtonCta` with `variant="gray"`

**`BlogDetail.astro`** (page component):
- Use `Layout` with `BlogPostSEO` in the `seo` slot (data from API)
- Use `BannerImage` for the hero section with post banner
- Display: title (H1), author, date, full content (`set:html`)
- Pass `translatedPath` to `Layout` for language switching
