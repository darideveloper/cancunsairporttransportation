# Design: Centralized Routing

## New Architecture

We are moving away from "routes as translations" to "routes as configuration".

### Data Structure (`src/lib/i18n/routes.ts`)

```typescript
export const routes = {
  home: {
    en: "",
    es: "es",
  },
  taxi: {
    en: "cancun-airport-taxi",
    es: "es/taxi-aeropuerto-cancun",
  },
  // ...
} as const;
```

This ensures strong typing if we export `typeof routes` or similar helpers.

### Dynamic Redirects (`astro.config.ts`)

We will rename `astro.config.mjs` to `.ts` and generate redirects programmatically:

```typescript
import { routes } from './src/lib/i18n/routes';

const redirects = Object.values(routes).reduce((acc, route) => {
  // Redirect /en/slug -> /slug (root)
  if (route.en) {
    acc[`/en/${route.en}`] = `/${route.en}`;
  } else {
     acc['/en'] = '/';
  }
  return acc;
}, {});

export default defineConfig({
  redirects,
  // ...
});
```

### Component Updates

-   **Router (`[...path].astro`)**: Instead of two passes (one for en, one for es), it will do a single pass over `Object.entries(routes)`.
-   **Utils (`getLocalizedPath`)**: Will import `routes` directly. This decouples link resolution from the massive `ui` translation object.


## Trade-offs
-   **Pros**: Centralized view, type safety potential, less prone to async errors (forgetting one language).
-   **Cons**: None significant. Slightly increases bundle size of specific chunks if not tree-shaken, but since it's core routing it's always needed.
