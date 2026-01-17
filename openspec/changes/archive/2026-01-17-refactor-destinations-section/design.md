# Design

## `Destinations` Component

### Props
- `page`: string (required) - The key to look up in `pages.${page}.destinations`.

### Logic
1.  **Translations**:
    - Retrieve `t` using `useTranslations(lang)`.
    - Base path: `pages.${page}.destinations`.
    - Expected keys:
        - `title`: string
        - `text`: string
        - `viewMore`: string
        - `viewMoreLink`: string
        - `cards`: object (keys are destination IDs)

2.  **Images**:
    - Import local images for destinations: `tulum`, `playa`, `cancun`.
    - Create a mapping object:
      ```js
      const images = {
        tulum: tulumImg,
        playa: playaImg,
        cancun: cancunImg,
         // ... others if needed
      };
      ```
    - NOTE: If the translation system uses dynamic IDs not present in this map, a fallback or error handling might be needed, but strictly we expect known IDs.

3.  **Refactoring**:
    - The HTML structure will match the code snippet provided in the prompt.
    - `SectionHeading` and `PricingCard` components will be reused.
    - `ButtonCta` will be used for the "View More" button.

### Translation Updates
- `pages.playaDelCarmen.destinations` needs `viewMore` and `viewMoreLink` to match the schema if they are missing.
