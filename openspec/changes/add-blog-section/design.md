# Blog System Design

## Architecture

The blog system will use Astro's Static Site Generation (SSG) features. Content will be fetched from the provided external API at build time.

### 1. Data Layer (`src/lib/blog/api.ts`)

- `getPosts(lang)`: Fetches list of posts. Uses `Accept-Language` header to get localized content.
- `getPostBySlug(slug, lang)`: Fetches a single post with full details.
- The API returns `related_post` which represents the ID of the post in the other language.

```typescript
// src/lib/blog/api.ts
export interface Post {
  id: number;
  title: string;
  slug: string;
  lang: 'es' | 'en';
  banner_image_url: string;
  description: string;
  author: string;
  created_at: string;
  updated_at: string;
}

export interface PostDetail extends Post {
  related_post: number | null;
  content: string;
  keywords: string;
}

export async function getPosts(lang: string = 'es'): Promise<Post[]> {
  const headers = new Headers();
  headers.append('Accept-Language', lang);
  if (import.meta.env.API_TOKEN) {
    headers.append('Authorization', `Token ${import.meta.env.API_TOKEN}`);
  }

  const response = await fetch(`${import.meta.env.API_BASE}/api/posts/?page-size=1000`, {
    headers
  });
  const result = await response.json();
  return result?.results as Post[];
}

export async function getPostBySlug(slug: string, lang: string): Promise<PostDetail | null> {
  const headers = new Headers();
  headers.append('Accept-Language', lang);
  if (import.meta.env.API_TOKEN) {
    headers.append('Authorization', `Token ${import.meta.env.API_TOKEN}`);
  }

  const response = await fetch(`${import.meta.env.API_BASE}/api/posts/${slug}/?details=true`, {
    headers
  });
  if (!response.ok) return null;
  return await response.json() as PostDetail;
}
```

### 2. Routing & Pages

**English Routes:**
- Listing: `/blog/[...page]` -> `src/pages/blog/[...page].astro`
- Detail: `/blog/[slug]` -> `src/pages/blog/[slug].astro`

**Spanish Routes:**
- Listing: `/es/blog/[...page]` -> `src/pages/es/blog/[...page].astro`
- Detail: `/es/blog/[slug]` -> `src/pages/es/blog/[slug].astro`

### 3. Translation System Integration

The project uses a JSON-based translation system with:
- `src/messages/en.json` and `src/messages/es.json` for static UI text.
- `src/lib/i18n/utils.ts` with `useTranslations(lang)` function.

**For Blog Listing Page:**
Add to JSON files under `pages.blog`:
```json
{
  "pages": {
    "blog": {
      "title": "Blog | Cancun Airport Transportation",
      "description": "Read our latest articles about travel tips, destinations, and airport transportation in Cancun and Riviera Maya.",
      "keywords": "cancun blog, travel tips, riviera maya, airport transportation articles",
      "heading": "Our Blog",
      "readMore": "Read more",
      "noPostsFound": "No posts found.",
      "pagination": {
        "previous": "Previous",
        "next": "Next",
        "page": "Page {current} of {total}"
      },
      "meta": {
        "author": "Written by",
        "date": "Published on"
      }
    }
  }
}
```

**For Blog Detail Page:**
- SEO metadata (title, description, keywords) comes **directly from the API post data**.
- Static UI labels (author, date format) use `useTranslations(lang)`.

### 4. SEO System Integration

The project has SEO wrapper components:

- **`BlogSEO.astro`**: For blog listing. Uses `currentPage` and sets `jsonType="Blog"`.
- **`BlogPostSEO.astro`**: For blog posts. Accepts explicit props for title, description, keywords, author, date, image, slug.

**Usage in Blog Listing:**
```astro
---
import BlogSEO from "../../../components/utils/BlogSEO.astro";
---
<Layout>
  <BlogSEO currentPage="blog" slot="seo" />
  <!-- ... -->
</Layout>
```

**Usage in Blog Detail (SEO from API):**
```astro
---
import BlogPostSEO from "../../../components/utils/BlogPostSEO.astro";
const post = /* fetched post from API */;
---
<Layout>
  <BlogPostSEO
    slot="seo"
    postTitle={post.title}
    postExcerpt={post.description}
    postKeywords={post.keywords}
    postAuthor={post.author}
    postDate={post.created_at}
    postImageUrl={post.banner_image_url}
    postSlug={post.slug}
  />
  <!-- ... -->
</Layout>
```

### 5. Language Switching Integration

**Current `LangLink.astro` Logic:**
- Uses `pageKey` to determine the alternate language URL via `getLocalizedPath(pageKey, targetLang)`.

**Required Changes:**
- Add `translatedPath` prop that, when provided, overrides the default behavior.
- For blog posts, pass the `related_post` slug as the `translatedPath`.

**Updated LangLink Logic:**
```astro
---
interface Props {
  pageKey?: string;
  translatedPath?: string; // NEW: Direct path to translated version
}

const { pageKey, translatedPath } = Astro.props;
const lang = getLangFromUrl(Astro.url);
const targetLang = lang === 'es' ? 'en' : 'es';

// Priority: translatedPath > pageKey > fallback
let targetUrl: string;
if (translatedPath) {
  targetUrl = translatedPath;
} else if (pageKey) {
  targetUrl = getLocalizedPath(pageKey, targetLang);
} else {
  targetUrl = targetLang === 'es' ? '/es' : '/';
}
---
```

**Prop Propagation Chain:**
1. Blog detail page calculates `translatedPath` based on `related_post`.
2. Passes it to `Layout` -> `Header` -> `TopBar` -> `LangLink`.

### 6. Reusable Components

| Component | Usage in Blog |
|-----------|---------------|
| `Layout` | Wrapper for all pages |
| `SectionHeading` | Page title on listing (title from `pages.blog.heading`) |
| `ButtonCta` | "Read more" buttons (`variant="blueGhost"`), pagination (`variant="gray"`) |
| `BannerImage` | Hero on detail page with `post.banner_image_url` |
| `H2` | Section headings |

### 7. New Components

**`PostCard.astro`:**
```astro
---
interface Props {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  author: string;
  date: string;
  lang: 'en' | 'es';
}
---
<article>
  <img src={image} alt={title} />
  <h3>{title}</h3>
  <p>{excerpt}</p>
  <span>{author} • {date}</span>
  <ButtonCta href={`/${lang === 'es' ? 'es/' : ''}blog/${slug}`} variant="blueGhost">
    {t('pages.blog.readMore')}
  </ButtonCta>
</article>
```

## Considerations

- **API Limits**: Fetching all posts at build time with `page-size=1000`.
- **Images**: API provides absolute URLs. Use directly in `<img>` or external Image component.
- **Styling**: Use existing Tailwind classes and project conventions.
- **Fallback for Missing Translation**: If `related_post` is null, language link falls back to `/blog` or `/es/blog`.
