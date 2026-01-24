# Legal Page Standardization Design

## Architecture

### Component Strategy
We will introduce a `LegalPage.astro` component that acts as a generic renderer for any content within the `legal` content collection.

**Current Pattern:**
- `Privacy.astro` -> hardcodes fetching `privacy-policy` content.
- `Terms.astro` -> hardcodes fetching `terms-and-conditions` content.

**New Pattern:**
- `LegalPage.astro` -> accepts a `slug` (e.g., `privacy-policy`, `terms-and-conditions`) prop.
- It queries the `legal` collection for `${lang}/${slug}`.
- It renders the content inside `LegalLayout`.

### Routing Integration
`src/pages/[...path].astro` currently maps:
```typescript
const COMPONENT_MAP = {
  // ...
  terms: Terms,
  privacy: Privacy,
};
```

We will change this to:
```typescript
const COMPONENT_MAP = {
  // ...
  terms: LegalPage, // We might need to wrap or pass props differently
  privacy: LegalPage, 
};
```
However, `COMPONENT_MAP` values are used as `<PageComponent lang={lang} pageKey={pageKey} />`.
The `LegalPage` needs to know *which* legal document to fetch.
We can map `pageKey` to the specific document ID inside `LegalPage.astro`, or we can pass a mapped prop.
Given `pageKey` is available (`privacy` or `terms`), `LegalPage` can contain a mapping:
```typescript
const PAGE_KEY_TO_SLUG = {
  privacy: 'privacy-policy',
  terms: 'terms-and-conditions'
};
const slug = PAGE_KEY_TO_SLUG[pageKey];
```
This keeps the routing logic simple and centralizes the mapping in the LegalPage component (or a config file).

### UX/UI Changes
None. The output HTML should remain identical.

### Data Flow
1.  Route match -> `pageKey` ('privacy' | 'terms') + `lang`.
2.  `LegalPage` receives `pageKey`.
3.  Resolves `pageKey` to content slug.
4.  `getCollection('legal')` -> find unique entry `${lang}/${slug}`.
5.  Render `LegalLayout` with entry metadata.
6.  Render `Content` component.
