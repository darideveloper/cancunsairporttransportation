# Design: Fix className Props

## Context
Astro allows using the `class` attribute on its own components. However, when an Astro component imports and uses a React component, props are passed directly to the React component. React requires the `className` attribute for styling.

## Strategy
We will perform a project-wide search for usages of the converted React components (`ButtonCta`, `CheckListItem`, `StarRating`, `VehicleBuyCard`) in `.astro` files and rename any `class` or `class:list` attributes to `className`.

### Components to Audit
- `src/components/atoms/ButtonCta.tsx`
- `src/components/atoms/CheckListItem.tsx`
- `src/components/atoms/StarRating.tsx`
- `src/components/molecules/VehicleBuyCard.tsx`

### Files to Update
Based on initial research, the following files contain incorrect prop usage:
- `src/components/organisms/MenuBar.astro`
- `src/components/organisms/PrivateDetails.astro`
- `src/components/pages/store/Results.astro`
- `src/components/organisms/BannerCta.astro`
- `src/components/pages/landing/Home.astro`
- `src/components/organisms/PopularHotels.astro`
- `src/components/molecules/PostCard.astro`
- `src/components/molecules/PricingCard.astro`
- `src/components/pages/landing/Destinations.astro`
- `src/components/organisms/WhyChooseUs.astro`
