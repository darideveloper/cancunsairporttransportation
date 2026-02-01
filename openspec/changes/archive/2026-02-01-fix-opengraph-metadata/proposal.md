# Fix Open Graph Metadata

## Problem
The current Open Graph metadata has several issues reported by opengraph.xyz:
-   **Image too small**: The default logo is used, which is 501x92px (recommended 1200x630px).
-   **Title/Description too long**: The home page title and description exceed recommended lengths, causing truncation on social platforms.
-   **Missing Image**: The user wants to use a specific high-quality image (`public/og-image.jpg`) which is already present but not used.

## Solution
1.  **Use High-Quality OG Image**: Update the SEO configuration to use `public/og-image.jpg` as the default Open Graph image instead of the small logo.
2.  **Optimize Metadata**: Shorten the home page titles and descriptions in both English and Spanish to meet SEO and social media best practices (Title ~60 chars, Description ~160 chars).

## Impact
-   Improved social sharing appearance (Facebook, Twitter/X, LinkedIn).
-   Better click-through rates due to clear, complete titles and descriptions.
-   Resolves reported errors from opengraph.xyz.
