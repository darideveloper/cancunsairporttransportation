# Design: Destinations Page Enhancement

## Architectural Reasoning
The project uses a structured i18n system where translations are nested under `pages.[pageKey]`. The `Destinations` organism is designed to be reusable by passing a `page` prop, which it uses to prefix its translation lookups. 

To support the `Destinations` page, we will:
1.  **I18n Structure**: Create a new entry `pages.destinations` in the translation JSON files. Inside this, we will follow the schema expected by `Destinations.astro`:
    ```json
    "destinations": {
      "destinations": {
        "title": "...",
        "text": "...",
        "viewMore": "...",
        "viewMoreLink": "...",
        "cards": {
          "tulum": { ... },
          "playa": { ... },
          "cancun": { ... }
        }
      }
    }
    ```
2.  **Component Integration**: The `src/components/pages/landing/Destinations.astro` will render the `Destinations` organism after the existing content.

## User-Provided Data Mapping
- **English**:
  - Tulum: $129.00 USD
  - Playa: $69.99 USD
  - Cancun: $29.99 USD
- **Spanish**:
  - Tulum: $2322.00 MXN
  - Playa: $1259.82 MXN
  - Cancun: $539.82 MXN

Note: The `currency` is handled dynamically by the organism based on the language.

## Patterns and Conventions
- Use `useTranslations` for localized strings.
- Reuse `PricingCard` via the `Destinations` organism.
- Maintain SEO standards by ensuring unique IDs and semantic HTML.
