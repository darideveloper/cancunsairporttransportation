# Update Banner Stats Content

## Problem
The current `BannerStats` component uses placeholder text and images that do not match the desired branding and content strategy. The text needs to be updated in both English and Spanish, and the images should be replaced with specific icons.

## Solution
1. Update `en.json` and `es.json` with the new text for the Banner Stats section.
2. Update `BannerStats.astro` to use the correct icons (`happy-clients.svg`, `office.svg`, `map-point.svg`) from `src/assets/images/icons`.
3. Map the content correctly in the mapped array within `BannerStats.astro`.

## Risks
- Minor risk of typo in translation content.
- SVG imports in Astro might require specific handling if `astro:assets` image optimization is strictly enforced, but SVGs generally work fine.
