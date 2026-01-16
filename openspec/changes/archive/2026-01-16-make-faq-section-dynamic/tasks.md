# Tasks: Make FAQ Section Dynamic

1.  **Preparation**
    - [x] Update `src/messages/en.json` to move FAQ content to `pages.home.faq` and `pages.playaDelCarmen.faq`.
    - [x] Update `src/messages/es.json` to move FAQ content to `pages.home.faq` and `pages.playaDelCarmen.faq`.
    - [x] Ensure `global.sections.faq.description` is correctly defined for shared use.

2.  **Component Implementation**
    - [x] Create `src/components/organisms/FaqSection.astro` following the `PricingSection` pattern.
    - [x] Use `Astro.props.page` to dynamically fetch `title` and `items`.
    - [x] Import and use `FaqItem.astro` within the section.

3.  **Refactoring**
    - [x] Replace manual FAQ implementation in `src/pages/[lang]/index.astro` with `<FaqSection page="home" />`.
    - [x] Replace manual FAQ implementation in `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro` with `<FaqSection page="playaDelCarmen" />`.
    - [x] Clean up unused local `faqs` and `faqKeys` variables in the page files.

4.  **Verification**
    - [x] Run `npm run build` to ensure no regressions.
    - [x] Verify content on both pages in the browser (Home and Playa del Carmen).
