# Proposal: Dynamic Includes Component

## Problem
The `Includes` component is currently static, fetching its title and image metadata from a global translation key (`global.sections.includes`). This prevents different pages (like Luxury Transportation and Private Airport Transfer) from having specific titles and images while sharing the same list of service features.

## Proposed Solution
Refactor the `Includes` component to be strictly dynamic by:
1.  **Mandatory Props**: Define a `Props` interface where `page: string` and `image: ImageMetadata` are **required**.
2.  **No Fallbacks**: The component will fetch `title`, `imageAlt`, and `imageTitle` strictly from `pages.[page].includes`. It will NOT provide default values or fallbacks to global keys for these specific fields.
3.  **Dynamic Translation Keys**: Construct keys using the required `page` prop:
    -   Title: `t(`pages.${page}.includes.title`)`
    -   Image Alt: `t(`pages.${page}.includes.imageAlt`)`
    -   Image Title: `t(`pages.${page}.includes.imageTitle`)`
4.  **Global Items**: Continue fetching the feature list from `global.sections.includes.items` as it remains universal.
5.  **Page Implementation**: All pages using the component MUST be updated to pass the specific `page` key and the imported `image` asset.

## Migration Steps
1.  **Identify all usages**: Locate every `.astro` page currently rendering `<Includes />`.
2.  **Update Translations**: Ensure `en.json` and `es.json` have the `includes` object under the corresponding `pages.[page]` key.
3.  **Refactor component call**:
    -   Import the required vehicle image in the page.
    -   Pass the `page` name and the `image` object to the component.

## Impact
- **Luxury Transportation Page**: Will show "All our Cancun Luxury Transfers include:" with a suburban/luxury vehicle image.
- **Private Airport Transfer Page**: Will maintain its current content but through the new dynamic structure.
- **Maintainability**: New pages can easily use the `Includes` component with custom titles and images without modifying the component itself.
