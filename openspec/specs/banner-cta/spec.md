# banner-cta Specification

## Purpose
TBD - created by archiving change refactor-banner-cta. Update Purpose after archive.
## Requirements
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

