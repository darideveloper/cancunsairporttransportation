# Refactor TransactionStatus Component

## Summary
Refactor the `TransactionStatus.astro` component to use existing reusable project components (`ButtonCta.tsx`, `SectionHeading.astro`) instead of hardcoded HTML elements. This improves consistency (DRY) and maintainability across the project.

## Motivation
The current `TransactionStatus.astro` implementation duplicates logic for buttons and headings that already exist in the codebase. By reusing established components, we ensure consistent styling, behavior, and reduce the maintenance burden of duplicate code.

## Solution Overview
Values like `isH1` and `variant` props will utilize existing component APIs to match the current design as closely as possible while adhering to the design system.

- **Headings**: Replace manual `<h1>` and `<p>` with `SectionHeading.astro`.
- **Buttons**: Replace manual `<a>` tags with `ButtonCta.tsx`.
