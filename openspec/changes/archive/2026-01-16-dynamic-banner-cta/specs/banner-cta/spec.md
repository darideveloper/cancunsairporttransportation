# banner-cta Specification Delta

## MODIFIED Requirements

### Requirement: Index Page Usage
The index page MUST use the `BannerCta` component with the `page` prop set to "home".

#### Scenario: Index Page Usage
Given `src/pages/[lang]/index.astro`
When the component is used
Then it MUST be called as `<BannerCta page="home" />`
And it MUST NOT pass `title`, `text`, or `lang` props.

## ADDED Requirements

### Requirement: Dynamic Page Content
The `BannerCta` component MUST fetch its `title` and `text` content from the `pages.${page}.bannerCta` translation namespace.

#### Scenario: Home Page Content
Given `page="home"`
When the component renders
Then it retrieves `title` from `pages.home.bannerCta.title`
And it retrieves `text` from `pages.home.bannerCta.text`.

### Requirement: Language Detection
The `BannerCta` component MUST read the current language directly from `Astro.params`.

#### Scenario: Auto Language Detection
Given the URL `/en/`
When `BannerCta` renders
Then it uses "en" as the language for translations without receiving it via props.

### Requirement: Translation Structure Migration
The `bannerCta` content MUST be moved from `global.sections.airportTransportIntro` to page-specific namespaces.

#### Scenario: Migration to Home
Given `src/messages/en.json`
When the migration is applied
Then the content of `global.sections.airportTransportIntro` is moved to `pages.home.bannerCta`.
