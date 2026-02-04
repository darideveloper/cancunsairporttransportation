## Context
The project is a static Astro site with Blog (Content Collections) and Service Pages (hardcoded routes). We need a search solution that is SEO-friendly (doesn't hide content), fast, and requires no external subscription (like Algolia) for now.

## Goals / Non-Goals
- **Goals**:
  - Instant client-side search.
  - Support for English and Spanish indices explicitly.
  - Work seamlessly in `npm run dev` with HMR (content updates reflect instantly).
  - static generation at build time for production.
- **Non-Goals**:
  - Full-text indexing of long page bodies (initially just title/description/excerpt to keep JSON size low).
  - Fuzzy matching (standard substring matching is sufficient for v1).

## Decisions
- **Decision: Astro Server Endpoint (`.json.ts`)**
  - We will use a dynamic route `src/pages/[lang]/search.json.ts` rather than a post-build script.
  - **Why**:
    - **Dev Experience**: In `dev` mode, the endpoint is "live", meaning changes to blog posts are instantly searchable without restarting the server.
    - **Build Consistency**: Astro automatically builds these endpoints into static JSON files during `astro build`.
    - **Access to Data**: We can import `getCollection` and `routes.ts` directly, reusing the project's logic source of truth.

- **Decision: Manual Static Page Mapping**
  - Unlike Blog posts (which are structured data), static pages (`.astro`) are code. We cannot easily "read" them at runtime without complex parsing.
  - **Strategy**: We will iterate over the `routes.ts` file (which defines our canonical URLs) and manually map them to Title/Description in the search generator. This ensures the search index matches the Menu exactly.

- **Decision: React for UI**
  - We will use an Island (`client:idle`) for the Search Bar.
  - **Why**: We need state management for the input and filtered results. React is already configured.

## Data Schema
The JSON response will follow this structure:

```typescript
type SearchItem = {
  title: string;
  description: string;
  url: string;
  type: 'blog' | 'page';
  // Optional: weighted keywords or tags
};

type SearchIndex = SearchItem[];
```

## Risks / Trade-offs
- **Risk**: JSON Size. If the blog grows to 1000s of posts, `search.json` could become too large > 300KB.
- **Mitigation**: We only index metadata (Title/Description). If it grows too large later, we can implement pagination or switch to a server function (Lambda) or Algolia.

## Migration Plan
None. This is a net-new feature.
