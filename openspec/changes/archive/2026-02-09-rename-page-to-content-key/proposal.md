# Proposal: Rename `page` to `contentKey` and Implement Defaulting

## Summary
Standardize the identifier used for content lookup across the codebase by renaming the variable/prop `page` to `contentKey`. This change aims to clarify the distinction between routing (`pageKey`) and content data (`contentKey`). Additionally, implement "Defaulting" in page components where `pageKey` can serve as the default value for `contentKey`.

## Problem Statement
The current codebase uses `page` as both a local variable in page components and a prop in organism components to identify which content (translations, FAQs, prices) to display. This name is somewhat ambiguous and can be confused with routing concepts. Furthermore, many page components hardcode the `page` value, even though it matches the `pageKey` prop passed from the router.

## Proposed Changes
1.  **Rename Prop**: Change `page: string` to `contentKey: string` in all components that receive it as a prop.
2.  **Rename Variable**: Change the local `const page = "..."` to `const contentKey = "..."` in all page components.
3.  **Implement Defaulting**: In page components that receive `pageKey` as a prop, use it to initialize `contentKey` (e.g., `const contentKey = pageKey;`) instead of hardcoding the string, where applicable.
4.  **Update References**: Update all usages of the variable/prop (e.g., `t("pages." + page + ".title")` becomes `t("pages." + contentKey + ".title")`).

## Impact
- **Developer Experience**: Clearer variable naming reduces cognitive load and confusion between routing and content data.
- **Maintainability**: Centralizing the source of truth for the content key (via `pageKey`) makes the components more robust.
- **Components**: Affects multiple organism components and almost all page components in `src/components/pages/`.

## Detailed Analysis & Affected Files

### Organisms (Prop Consumer)
These components currently accept a `page` prop that should be renamed to `contentKey`. The prop should match the type definitions below.

- `src/components/organisms/BannerCta.astro`
- `src/components/organisms/FaqSection.astro`
- `src/components/organisms/FeaturedDestinations.astro`
- `src/components/organisms/Includes.astro`
- `src/components/organisms/PopularHotels.astro`
- `src/components/organisms/PricingSection.astro`
- `src/components/organisms/PrivateDetails.astro`
- `src/components/organisms/TextCardHalf.astro`
- `src/components/organisms/TextCardSmall.astro`
- `src/components/organisms/Testimonials.astro`
- `src/components/organisms/TransportationServices.astro`

### Special Handling: TextCard Components
`src/components/organisms/TextCardSmall.astro` and `src/components/organisms/TextCardHalf.astro` already used a prop named `contentKey` for a different purpose (specifying the content field to use). To avoid collision:
- The existing `page` prop is renamed to `contentKey` (identifies the page/section context).
- The existing `contentKey` prop is renamed to `fieldKey` (identifies the specific text field to render).

### Page Components (Prop Provider & Local Usage)
These components define a local `page` variable or receive it and pass it down. This should be renamed to `contentKey`.

- `src/components/pages/destinations/Akumal.astro`
- `src/components/pages/destinations/Merida.astro`
- `src/components/pages/destinations/Playa.astro`
- `src/components/pages/destinations/Tulum.astro`
- `src/components/pages/landing/Destinations.astro`
- `src/components/pages/landing/Home.astro`
- `src/components/pages/services/Group.astro`
- `src/components/pages/services/Luxury.astro`
- `src/components/pages/services/Private.astro`
- `src/components/pages/services/Taxi.astro`
- `src/components/pages/store/Results.astro`

## Data Types & Interface Definitions

The `Props` interface for each component must be updated to use `contentKey`.

### 1. Required `contentKey`
The following components require the key to look up specific content.

**Interface:**
```typescript
interface Props {
  contentKey: string;
  // ... other props
}
```

**Components:**
- `src/components/organisms/BannerCta.astro`
- `src/components/organisms/FaqSection.astro`
- `src/components/organisms/FeaturedDestinations.astro`
- `src/components/organisms/Includes.astro`
- `src/components/organisms/PopularHotels.astro`
- `src/components/organisms/PricingSection.astro`
- `src/components/organisms/PrivateDetails.astro`
- `src/components/organisms/TextCardHalf.astro`
- `src/components/organisms/TextCardSmall.astro`

### 2. Optional `contentKey`
These components use a fallback (usuall "home" or generic) if the key is not provided.

**Interface:**
```typescript
interface Props {
  contentKey?: string;
  // ... other props
}
```

**Components:**
- `src/components/organisms/Testimonials.astro`
- `src/components/organisms/TransportationServices.astro`

### 3. Page Components (Variable Definition)
Page components do not export a Props interface for this purpose (they receive `pageKey` from the router), but they must define the local variable.

**Implementation:**
```typescript
// src/components/pages/landing/Home.astro
const { pageKey } = Astro.props;
const contentKey = pageKey || "home"; // Defaulting strategy
```

