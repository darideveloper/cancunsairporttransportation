# Design: Dynamic FAQ Section

## Architectural Reasoning
Currently, the FAQ section is manually implemented on each page. This creates duplication and makes it harder to maintain or extend (e.g., if we want to change the FAQ layout).

By componentizing the FAQ section into `FaqSection.astro` and following the pattern used by `PricingSection.astro`, we:
1.  **Reduce boilerplate**: Pages only need to call `<FaqSection page="..." />`.
2.  **Centralize data**: Content is managed solely through translation files.
3.  **Improve consistency**: All pages will share the same FAQ layout and global description.

## Data Structure
The `FaqSection` will expect translations at:
- `pages.<page>.faq.title`: Page-specific title.
- `pages.<page>.faq.items`: An object where each key contains `question` and `answer`.
- `global.sections.faq.description`: A shared description for all FAQ sections.

## Component Interface
```astro
---
interface Props {
  page: string; // Used to fetch keys from pages.[page].faq
}
---
```
