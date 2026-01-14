# Design: Hybrid Pricing Translation Strategy

## Problem
Currently, pricing cards duplicate "product" data (images, prices) across pages, leading to inconsistency. The user wants to centralize this while keeping marketing copy (title, description) specific to the landing page.

## Solution
1. **Schema Separation**:
   - `global.sections.pricingServices.cards.<type>`: `price`, `imageAlt`, `imageTitle`, `bestSeller`.
   - `pages.<page>.pricing.cards.<type>`: `title`, `description`.

2. **Component Logic**:
   - The component will accept a `pageKey` prop.
   - It will iterate over `['luxury', 'private', 'group']`.
   - `price` = `t(global...price)`
   - `title` = `t(pages.${pageKey}...title)`
   - Images: Imported statically in the component and mapped by key:
     ```js
     const images = { luxury: luxuryImg, ... }
     ```

## Implications
- **Price Uniformity**: This strictly enforces that the designated "price" in global is used. If Playa del Carmen has a different price than Cancun, this refactor will make them identical unless an override prop is added.
- **Assumption**: The user explicitly requested "price should be in the global section", implying uniformity is desired or acceptable.
