# Tasks: SEO & Metadata Enhancement

## 1. Foundation & Configuration
- [x] Create `src/data/site-config.ts` to store global business data (Address, Contact, Geo, Socials) matching `docs/seo.md`.
- [x] Create/Confirm `src/consts.ts` or similar for locale mapping (e.g. `LOCALE_MAP`).
- [x] **Content Update**: Update `src/messages/{en,es}.json` and `src/content/legal/*.md` with the exact titles and descriptions defined in `design.md` section 4 (Metadata Content Map). Ensure JSON keys (e.g. `pages.cancunToTulumShuttle`) match the existing code usage.

## 2. BaseSEO Component Extension
- [x] Update `src/components/utils/base/BaseSEO.astro`:
    - Add optional props: `ogImage` (string), `noIndex` (boolean), `locale` (string), `alternates` (object).
    - **Logic**: Use `ogImage` if provided, else fall back to `logo.webp`.
    - **Logic**: Render `robots` meta tag if `noIndex` is true.
    - **Logic**: Use `locale` prop if provided, else use existing `lang` (mapped to `es-MX`/`en-US`).
    - **JSON-LD**: Import `BUSINESS_DATA`. Merge it with `extraJson` to fill in missing fields (e.g. `address`, `geo`) while allowing `extraJson` to override specific fields. Keep existing `jsonLd` structure as the base.
- [x] Update `src/components/utils/PageSEO.astro`:
  - [x] Remove hardcoded/incorrect data (Merida coords).
  - [x] Ensure it passes through new props from its parent or defaults correctly.
- [x] Review `BlogPostSEO.astro` and `BlogSEO.astro` for similar updates (ensure they use the new BaseSEO props).

## 4. Verification
- [x] Run `npm run build` to ensure types map correctly.
- [x] Manual inspection of generated HTML (via `view_file` or browser) to match `docs/seo.md` requirements.
