# Change: Add Missing Title Attributes to All Image Components

## Why
Several `<Image>` components are missing the `title` attribute, which negatively impacts SEO and accessibility. The `title` attribute provides additional context for screen readers and displays as a tooltip on hover, improving user experience and search engine discoverability.

## What Changes
- Add `title` attribute to `TextCardSmall.astro` Image component
- Add `title` attribute to `TextCardHalf.astro` Image component  
- Add `title` attribute to `FeaturedDestinations.astro` Image component
- Add `title` attribute to `Home.astro` reliable service Image
- Add `title` attribute to `Destinations.astro` destination cards Images
- Use the same value for `title` as `alt` since they serve similar descriptive purposes

## Impact
- **Affected specs**: `seo-image-accessibility` (new capability)
- **Affected code**:
  - `src/components/organisms/TextCardSmall.astro`
  - `src/components/organisms/TextCardHalf.astro`
  - `src/components/organisms/FeaturedDestinations.astro`
  - `src/components/pages/landing/Home.astro`
  - `src/components/pages/landing/Destinations.astro`

## Audit Summary

### ✅ Components Already Compliant (9 files)
| File | Status |
|------|--------|
| `atoms/Logo.astro` | ✅ Has both `alt` and `title` |
| `atoms/BannerImage.astro` | ✅ Has both `alt` and `title` |
| `molecules/Testimonial.astro` | ✅ Has both `alt` and `title` |
| `molecules/BasicImageCard.astro` | ✅ Has both `alt` and `title` |
| `organisms/PricingSection.astro` | ✅ Has both `alt` and `title` |
| `organisms/Includes.astro` | ✅ Has both `alt` and `title` |
| `organisms/ClientGallery.astro` | ✅ Has both `alt` and `title` |
| `organisms/BannerStats.astro` | ✅ Has both `alt` and `title` |
| `organisms/BannerCta.astro` | ✅ Has both `alt` and `title` |

### ⚠️ Components Requiring Fix (5 files)
| File | Line | Issue |
|------|------|-------|
| `organisms/TextCardSmall.astro` | 46 | Missing `title` |
| `organisms/TextCardHalf.astro` | 46 | Missing `title` |
| `organisms/FeaturedDestinations.astro` | 73 | Missing `title` |
| `pages/landing/Home.astro` | 141 | Missing `title` |
| `pages/landing/Destinations.astro` | 119 | Missing `title` |
