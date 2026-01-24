# Update SectionHeading for H1 Support

## Problem
The `SectionHeading` component currently hardcodes the heading level to `<h2>`. Some pages (e.g., standard content pages, contact page) need to use this component for the main page title, which should strictly be an `<h1>` for proper SEO and document structure.

## Solution
Update the `SectionHeading.astro` component to accept an optional `isH1` boolean prop.
- If `isH1` is true, render an `<h1>`.
- If `false` or undefined, render an `<h2>` (backwards compatible).
- maintain `font-bold` and other base styles, but allow class overrides/additions as existing behavior.

## Impact
- `src/components/molecules/SectionHeading.astro`
