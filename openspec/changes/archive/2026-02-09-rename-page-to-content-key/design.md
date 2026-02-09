# Design: Content Key Standardization

## Architecture Overview
The project uses a centralized routing system in `src/pages/[...path].astro` which passes a `pageKey` prop to page components. These page components then use a `page` variable (to be renamed to `contentKey`) to fetch data from translations and other data sources.

## Data Flow Changes
1.  **Incoming Props**: Page components in `src/components/pages/` receive `{ lang, pageKey }`.
2.  **Assignment**:
    - Old: `const page = "luxury";`
    - New: `const contentKey = pageKey;` (Defaulting)
3.  **Component Passing**:
    - Old: `<FaqSection page={page} />`
    - New: `<FaqSection contentKey={contentKey} />`
4.  **Translation Access**:
    - Old: `t("pages." + page + ".title")`
    - New: `t("pages." + contentKey + ".title")`

## Edge Cases
### Special Case: `LegalPage.astro`
The `LegalPage.astro` component handles multiple routes (`privacy`, `terms`). It currently uses `pageKey` to determine the slug. It doesn't use a `page` variable for translations in the same way as others, but it should still be reviewed for consistency.

### Case where `pageKey` != `page`
Currently, all pages seem to have a 1:1 mapping between their route key and their content key. If they ever diverge, the `contentKey` can be explicitly overridden:
```astro
const { pageKey } = Astro.props;
const contentKey = pageKey === 'old-route' ? 'new-content' : pageKey;
```

## Migration Strategy
1.  Update the components that consume the prop (organisms first).
2.  Update the page components that pass the prop.
3.  
## Component Interface Updates

All affected components must update their `Props` interface:

### Required Prop
For components like `FaqSection.astro`, `PricingSection.astro`, etc.:
```typescript
interface Props {
  contentKey: string; // New
  // page: string; // Removed
}
```

### Optional Prop
For components like `TransportationServices.astro`, `Testimonials.astro`:
```typescript
interface Props {
  contentKey?: string; // New
  // page?: string; // Removed
}
```

### Usage
```astro
const { contentKey } = Astro.props;
// or
const { contentKey = "default" } = Astro.props;
```

