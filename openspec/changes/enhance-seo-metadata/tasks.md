# Tasks: SEO & Metadata Enhancement

## 1. Foundation & Configuration
- [ ] Create `src/data/site-config.ts` to store global business data (Address, Contact, Geo, Socials) matching `docs/seo.md`.
- [ ] Create/Confirm `src/consts.ts` or similar for locale mapping (e.g. `LOCALE_MAP`).
- [ ] **Content Update**: Update `src/messages/{en,es}.json` and `src/content/legal/*.md` with the exact titles and descriptions defined in `design.md` section 4 (Metadata Content Map). Ensure JSON keys (e.g. `pages.cancunToTulumShuttle`) match the existing code usage.

## 2. BaseSEO Component Refactor
- [ ] Update `src/components/utils/base/BaseSEO.astro`:
  - [ ] Add props: `ogImage`, `noIndex`, `locale`, `alternates`.
  - [ ] Implement `og:locale` logic (derive from lang + map or override).
  - [ ] Implement `robots` meta tag logic.
  - [ ] Implement Dynamic social image logic (prop -> fallback).
  - [ ] Refactor JSON-LD generation to use `site-config.ts`.

## 3. SEO Wrappers Update
- [ ] Update `src/components/utils/PageSEO.astro`:
  - [ ] Remove hardcoded/incorrect data (Merida coords).
  - [ ] Ensure it passes through new props from its parent or defaults correctly.
- [ ] Review `BlogPostSEO.astro` and `BlogSEO.astro` for similar updates (ensure they use the new BaseSEO props).

## 4. Verification
- [ ] Run `npm run build` to ensure types map correctly.
- [ ] Manual inspection of generated HTML (via `view_file` or browser) to match `docs/seo.md` requirements.
