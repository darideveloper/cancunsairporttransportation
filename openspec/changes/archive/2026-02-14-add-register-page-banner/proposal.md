# Proposal: Add Banner to Register Page

## Summary
Implement a high-impact visual banner on the `Register` page using the existing `BannerImage` atom and the `process.png` asset. This will replace the simple `SectionHeading` at the top of the page.

## Motivation
To provide a premium first impression on the registration page, consistent with the rest of the site's landing pages (like Home). A visual banner with a background image and overlay text is more engaging than a plain text heading.

## Proposed Solution

### 1. Asset Integration
Use the background image located at `src/assets/images/banners/process.png`.

### 2. Component Implementation: `src/components/pages/store/Register.astro`

The `SectionHeading` will be replaced with the `BannerImage` component. The title and description from translations will be passed as children to be rendered over the image.

**Changes required:**
- Import `BannerImage` from `../../atoms/BannerImage.astro`.
- Import `processBannerImg` from `../../../assets/images/banners/process.png`.
- Replace the `SectionHeading` block with `BannerImage`.
- Wrap the remaining content in a container if needed (the banner itself has a container for its children).

**Proposed Code Snippet:**

```astro
---
// src/components/pages/store/Register.astro

// ... existing imports
import BannerImage from '../../atoms/BannerImage.astro'
import processBannerImg from '../../../assets/images/banners/process.png'

// ...
---

<Layout pageKey={pageKey}>
  <PageSEO currentPage='register' slot='seo' />

  <!-- New Banner Section -->
  <BannerImage
    src={processBannerImg}
    alt={t('pages.register.title')}
    title={t('pages.register.title')}
    class="-mt-6"
  >
    <h1 class="mx-auto w-11/12 text-4xl font-bold md:text-5xl">
      {t('pages.register.title')}
    </h1>
    <p class="mt-4 text-lg text-white/90">
      {t('pages.register.description')}
    </p>
  </BannerImage>

  <div class='container py-24'>
    <!-- Remaining content (Form, Vehicle Card, etc.) -->
    ...
  </div>
</Layout>
```

### 3. Styling Details
- **-mt-6**: Added to `BannerImage` to negate the `mb-6` from the global `Header`, allowing the banner to site flush against the navigation.
- **text-white/90**: Used for the description to ensure readability against the background image while maintaining a premium feel.

## Verification Plan
1. **Visual Check**: Ensure the banner renders correctly on both desktop and mobile.
2. **Translation Check**: Verify that the title and description are correctly localized in both English and Spanish.
3. **Responsive Check**: Confirm the background image covers the area appropriately and text remains centered.
4. **Asset Check**: Ensure `process.png` is correctly optimized via the `BannerImage` component's use of `astro:assets`.

## Dependencies
- **`BannerImage.astro`**: Verified to exist in `src/components/atoms/`.
- **`process.png`**: Verified to exist in `src/assets/images/banners/`.
- **`Layout.astro`**: Verified for header margin behavior.
