# Design: Banner Stats Section

## Overview
The `BannerStats` component will be a self-contained section that displays trust-building statistics. It will handle its own translations by detecting the current language from the URL.

## Component Structure
- **Path**: `src/components/organisms/BannerStats.astro`
- **Internal Logic**:
  - Get `lang` using `getLangFromUrl(Astro.url)`.
  - Initialize `t` using `useTranslations(lang)`.
- **Integration**:
  - Component will be imported and placed in `src/pages/[lang]/index.astro`.
  - Position: After `BannerCta` / before Footer area.
- **HTML Layout**:
  - `<section>` with `id="banner-stats"`.
  - `div` container for layout.
  - `<H2>` (Component) for the section title.
  - `p` for the introductory text.
  - A grid/flex wrapper for the 3 stat items.
  - Each stat item:
    - Wrapper for the icon (using `react-icons`).
    - Subtitle (the counter/number).
    - Paragraph (the descriptive text).

## Dependencies
- `src/components/atoms/H2.astro`
- `react-icons` (e.g. `FaUsers`, `FaRegCalendarAlt`, `BiSupport`)
- `src/lib/i18n/utils`

## Translation Schema
```json
{
  "baseSections": {
    "bannerStats": {
      "title": "...",
      "description": "...",
      "stats": [
        {
          "counter": "...",
          "text": "..."
        },
        ...
      ]
    }
  }
}
```

## SEO & Accessibility
- **ARIA**: The section will have `aria-labelledby="banner-stats-title"`.
- **Semantic Tags**: Correct use of heading levels and text elements.
- **Icons**: Icons will be treated as decorative or have appropriate `aria-label` if they convey meaning. Given they are paired with text, they will likely be `aria-hidden="true"`.
