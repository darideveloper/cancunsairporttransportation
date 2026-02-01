# Blog System Design

## Architecture

The blog system will use Astro's Static Site Generation (SSG) features. Content will be fetched from the provided external API at build time.

### 1. Data Layer (`src/lib/api.ts`)
- `getPosts(lang)`: Fetches list of posts. Supports pagination query params if needed, but for SSG we usually fetch all to generate paths. The user provided `page-size=1000` in the example, suggesting we can fetch all for the build.
- `getPost(slug, lang)`: Fetches a single post details (though `getPosts` might return enough for listing, detailed content might need a separate call or we filter from the big list if it includes everything).
- The API returns `related_post` which represents the ID or simplified object of the post in the other language. We need to resolve this to a slug for the language switcher.

### 2. Routing & Pages

We will stick to Astro's standard routing for SSG.

**English Routes:**
- Listing: `/blog/[...page]` -> `src/pages/blog/[...page].astro`
- Detail: `/blog/[slug]` -> `src/pages/blog/[slug].astro`

**Spanish Routes:**
- Listing: `/es/blog/[...page]` -> `src/pages/es/blog/[...page].astro`
- Detail: `/es/blog/[slug]` -> `src/pages/es/blog/[slug].astro`

*Alternative*: We could use dynamic routing `[lang]/blog/[...page]` but the current project structure seems to use explicit `es` folder or mapping. The `src/pages/[...path].astro` handles mostly "static" pages defined in `routes.ts`.
Given the project has `src/pages/[...path].astro` which likely handles root English pages and `es/...` paths if they are in `routes.ts`, we need to be careful.
However, since `blog` will be a dedicated section, explicit folders might be cleaner or we can use `src/pages/blog/[...page].astro` and handle logic there?
But `es` is usually a prefix.
If I make `src/pages/blog/[...page].astro`, it handles `/blog/...`.
For `/es/blog/...`, I need `src/pages/es/blog/...`.

### 3. Internationalization (i18n)

**Listing Page:**
- The "Blog" link in the nav should point to `/blog` or `/es/blog`. We will add this to `routes.ts`.
- Language switcher on listing page: Swaps between `/blog` and `/es/blog`.

**Detail Page:**
- Each post object has `related_post`.
- When generating the page for `post-en`, we know its `related_post` (e.g., `post-es`).
- We pass this `translatedSlug` to the `Layout` -> `Header` -> `LangLink`.
- `LangLink` needs to be updated to accept a direct URL or strict path override instead of just `pageKey`.

### 4. Components

- **PostCard**: For the listing grid.
- **PostLayout**: Or just modify `Layout.astro` to accept the new props.
- **Pagination**: Re-use or create a pagination component.

### 5. SEO Integration

We must use the existing SEO components in `src/components/utils/`:

- **Listing Page**: Use `BlogSEO.astro`.
  ```astro
  <BlogSEO currentPage="blog" />
  ```
- **Detail Page**: Use `BlogPostSEO.astro`.
  ```astro
  <BlogPostSEO
    postTitle={post.title}
    postExcerpt={post.description}
    postKeywords={post.keywords}
    postAuthor={post.author}
    postDate={post.created_at}
    postImageUrl={post.banner_image_url}
    postSlug={post.slug}
  />
  ```

## API Integration

```typescript
interface Post {
  id: number;
  title: string;
  slug: string;
  lang: 'es' | 'en';
  banner_image_url: string;
  description: string;
  author: string;
  created_at: string;
  related_post: number | null; // or object if expanded
}

interface PostDetail extends Post {
  content: string;
  keywords: string;
}
```

## Considerations

- **API Limits**: Fetching all posts at build time.
- **Images**: API provides absolute URLs. We will use them directly in `<img>` tags.
- **Styling**: Use existing Tailwind classes and utility components.
