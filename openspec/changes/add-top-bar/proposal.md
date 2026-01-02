# Proposal: Add Top Bar Component

## Problem
The website lacks a high-level navigation bar for utility links like language selection, contact information, and social media links, which are standard for transportation service providers.

## Proposed Solution
Create a `TopBar` Astro component and integrate it into the main `Layout.astro`.

### Features
- **Language Selector**: Displays the current language and provides a link to switch (e.g., between /en/ and /es/).
- **Contact Information**: Displays phone numbers for Mexico and USA/Canada.
- **Social Media Links**: Icons for Facebook and Instagram.
- **SEO & Accessibility**: Semantic HTML markers, ARIA labels for social icons, and screen-readable language labels.
- **Design**: Minimalist, responsive bar at the very top of the page using brand colors.

## Scope
- New atomic components: `src/components/atoms/`
- New molecule component: `src/components/molecules/TopBar.astro`
- Translation updates: `src/messages/en.json` and `src/messages/es.json`
- Layout integration: `src/layouts/Layout.astro`
