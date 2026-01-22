# Tasks: Dynamic Includes Component

- [x] Update translation files (`en.json`, `es.json`) with page-specific includes metadata <!-- id: 0 -->
  - [x] Add `includes` section to `pages.luxury` with titles and image metadata
  - [x] Add `includes` section to `pages.private` with original global titles and image metadata
  - [x] Ensure `global.sections.includes.items` remains available
- [x] Refactor `src/components/organisms/Includes.astro` <!-- id: 1 -->
  - [x] Add `Props` interface with `page` and `image` as required fields
  - [x] Remove all hardcoded imports and global key dependencies for title/image
  - [x] Implement logic to fetch `title`, `imageAlt`, and `imageTitle` from `pages.[page].includes`
- [x] Update documentation and existing pages <!-- id: 2 -->
  - [x] Update `src/pages/[lang]/luxury-transportation-cancun.astro`: pass `page="luxury"` and luxury image
  - [x] Update `src/pages/[lang]/private-airport-transfer-cancun.astro`: pass `page="private"` and standard image
- [x] Validate strictly <!-- id: 4 -->
  - [x] Verify both pages show correct titles and images
  - [x] Ensure the component fails or breaks if props are missing (strict typing)
  - [x] Verify both pages show the same list of items from global
