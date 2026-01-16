# Proposal: Dynamic BannerCta Content

## Goal
The goal of this change is to make the `BannerCta` component dynamic per page by moving its content from global translations to page-specific translations. Additionally, the component will be refactored to read the language directly from `Astro.params` and accept a `page` prop to identify the correct content.

## Reasoning
- **Consistency**: Other sections like `TransportationServices` and `Locations` already read `lang` from `Astro.params`.
- **Flexibility**: Moving content to page-specific translation keys allows for specialized marketing copy on different pages (e.g., Home vs. Playa del Carmen).
- **Simplicity**: Reducing props passed from pages makes the component easier to use.

## Proposed Changes
- Refactor `src/components/organisms/BannerCta.astro` to:
  - Take a `page` prop instead of `title` and `text`.
  - Read `lang` from `Astro.params`.
  - Fetch `title` and `text` from `pages.${page}.bannerCta`.
- Update `src/messages/en.json` and `src/messages/es.json` to move `airportTransportIntro` content to `pages.home.bannerCta` and `pages.playaDelCarmen.bannerCta`.
- Update `src/pages/[lang]/index.astro` and `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro` to use the new `BannerCta` syntax.

## Impact
This change will improve the maintainability and flexibility of the `BannerCta` component across the site.
