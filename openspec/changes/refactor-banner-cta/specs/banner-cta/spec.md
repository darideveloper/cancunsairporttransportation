# Refactor Banner CTA

## ADDED Requirements

### Requirement: Dynamic Content Rendering
The `BannerCta` component MUST render dynamic title and text provided via props while maintaining a consistent visual structure.

#### Scenario: Display Dynamic Content
Given the `BannerCta` component is used
When a `title` and `text` are provided via props
Then the component renders the specific title and markdown-parsed text
And the component renders the common image and buttons from `baseSections.bannerCta` translation structure.

### Requirement: Consistent Visuals
The component MUST enforce consistent usage of the "Cancun Airport Transportation" image and button configuration.

#### Scenario: Consistent Buttons and Image
Given the `BannerCta` component
When rendered
Then it essentially displays `cancunAirportTransportationImg` (reliable-company.webp)
And it displays the primary and secondary buttons defined in `baseSections.bannerCta.buttons`.

## MODIFIED Requirements

### Requirement: English Translation Structure
The English translation file MUST match the Spanish file's structure regarding `bannerCta` common elements.

#### Scenario: English Translation Structure
Given `src/messages/en.json`
When the refactor is applied
Then `cancunAirportTransportation` keys (imageAlt, imageTitle, buttons) are moved to `baseSections.bannerCta`
And `cancunAirportTransportation` only contains `title` and `text`.

### Requirement: Index Page Usage
The index page MUST use the new `BannerCta` component instead of the hardcoded section.

#### Scenario: Index Page Usage
Given `src/pages/[lang]/index.astro`
When the refactor is applied
Then the explicit `<section id='cancun-airport-transportation'>` HTML is replaced with `<BannerCta />`
And the `title` and `text` are passed from the `cancunAirportTransportation` translation namespace.
