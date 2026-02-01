# Enhance SEO and Metadata

## Summary
Extend the `BaseSEO` component and project configuration to achieve feature parity with the reference implementation described in `docs/seo.md`, while preserving existing functionality. This includes adding support for dynamic social images, correct `og:locale` handling, rich JSON-LD schemas (LocalBusiness, Product), and proper metadata hierarchy.

## Problem
The current `BaseSEO.astro` component functions correctly for basic needs but lacks advanced features required for the target SEO performance:
- Hardcoded `og:locale` (missing generic locale support).
- Static social images (always uses logo).
- Generic `LocalBusiness` schema without specific details (Address, Geo, Prices).
- Missing `robots` tag control.
- Hardcoded author/twitter handles.

## Solution
1. **Extend `BaseSEO.astro`**: Add optional props for `ogImage`, `robots`, and `locale` without breaking existing usages.
2. **Implement Global Configuration**: Create a centralized configuration for static site data (Address, Geo, Contacts) to inject into JSON-LD.
3. **Rich Snippets**: Implement full `LocalBusiness` schema matching the reference.
4. **Flexible Schema**: Allow pages to extend JSON-LD with `Product` or `Place` schemas.
5. **Content Synchronization**: Update `src/messages/{en,es}.json` and `src/content/legal/` to match the exact SEO titles and descriptions from the legacy documentation, ensuring critical keywords are present.

## Impact

- **SEO**: Improved checking by search engines due to rich snippets and correct locales.
- **Social**: Better sharing experience with page-specific images.
- **Brand**: Correct branding in metadata (Author, Titles).
