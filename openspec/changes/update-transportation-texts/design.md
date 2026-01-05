# Design: Transportation Texts Update

## Overview
The transportation texts are managed via JSON files in `src/messages/`. The current implementation in `src/pages/[lang]/index.astro` already supports dynamic loading of these texts based on the current language.

## Architecture
- **Data Source**: The `pricingTransportation` array in `index.astro` maps the vehicle keys (`luxury`, `private`, `group`) to their respective translations.
- **Translation Keys**:
    - `pricingTransportation.title`: Section title.
    - `pricingTransportation.text`: Section subtitle.
    - `pricingTransportation.cards.[key].title`: Card title.
    - `pricingTransportation.cards.[key].imageAlt`: Image alternative text.
    - `pricingTransportation.cards.[key].imageTitle`: Image title attribute.
    - `pricingTransportation.cards.[key].price`: Numeric price (USD for `en.json`, MXN for `es.json`).
    - `pricingTransportation.cards.[key].ctaText`: Button text.
    - `pricingTransportation.cards.[key].description`: Markdown description including lists.

## Decision: Numeric Prices
We will continue to store prices as numbers (or strings that can be parsed as floats) because the `PricingCard` component handles the currency formatting (`$`, `USD/MXN`, `.00`) based on the `currency` prop.

## Decision: Markdown in JSON
Descriptions will use Markdown syntax (e.g., `\n\n* Item 1\n* Item 2`) to leverage the existing `marked` parser in `index.astro`, ensuring that lists are rendered correctly using the site's global styles.
