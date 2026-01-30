# Tasks: Centralize Contact Data

## 1. Create Contact Data File
- [x] 1.1 Create `src/lib/contact.ts` with all contact constants (PHONES, EMAIL, ADDRESS, SOCIAL_LINKS, GOOGLE_MAPS, BUSINESS_HOURS)
- [x] 1.2 Verify TypeScript compilation: `npx tsc --noEmit`
- [x] 1.3 Verify exports are accessible: create a simple test import

## 2. Refactor TopBar Component
- [x] 2.1 Update `src/components/molecules/TopBar.astro`:
  - Change import from `../../lib/constants` to `../../lib/contact`
  - Replace hardcoded phone values with `PHONES.mexico.formatted` and `PHONES.usa.formatted`
- [x] 2.2 Verify TopBar still renders correctly: `npm run dev`, check top bar on homepage
- [x] 2.3 Verify phone links are clickable and have correct `tel:` href

## 3. Refactor MenuBar Component
- [x] 3.1 Update `src/components/organisms/MenuBar.astro`:
  - Add import: `import { PHONES } from "../../lib/contact";`
  - Replace `contactPhones` array to use `PHONES.mexico` and `PHONES.usa`
- [x] 3.2 Verify mobile menu still renders correctly: test on mobile viewport
- [x] 3.3 Verify phone links in mobile menu are clickable

## 4. Refactor Footer Component
- [x] 4.1 Update `src/components/organisms/Footer.astro`:
  - Add import: `import { SOCIAL_LINKS } from "../../lib/contact";`
  - Replace hardcoded social URLs with `SOCIAL_LINKS.facebook` and `SOCIAL_LINKS.instagram`
- [x] 4.2 Verify Footer social links render correctly
- [x] 4.3 Verify social links open in new tab with correct URLs

## 5. Refactor Contact Page Component
- [x] 5.1 Update `src/components/pages/general/Contact.astro`:
  - Add import: `import { PHONES, EMAIL } from "../../../lib/contact";`
  - Replace hardcoded `href: "tel:+19299991258"` with `PHONES.usa.href`
  - Replace hardcoded `href: "tel:+529983870435"` with `PHONES.mexico.href`
  - Replace hardcoded `href: "mailto:bookings@gotransfers.us"` with `EMAIL.href`
- [x] 5.2 Verify Contact page renders correctly: navigate to `/contact`
- [x] 5.3 Verify all 3 contact cards have correct links

## 6. Refactor GoogleMap Component
- [x] 6.1 Update `src/components/atoms/GoogleMap.astro`:
  - Add import: `import { GOOGLE_MAPS } from "../../lib/contact";`
  - Replace hardcoded `MAP_SRC` with `GOOGLE_MAPS.embedUrl`
- [x] 6.2 Verify Google Map iframe loads correctly on Contact page
- [x] 6.3 Verify Google Map iframe loads correctly in Locations section

## 7. Refactor Locations Component
- [x] 7.1 Update `src/components/organisms/Locations.astro`:
  - Add import: `import { PHONES } from "../../lib/contact";`
  - Update `contactItems` to use `PHONES.usa.href` and `PHONES.mexico.href` for href generation
- [x] 7.2 Verify Locations section renders correctly on homepage
- [x] 7.3 Verify phone number links are correct

## 8. Delete Legacy Constants File
- [x] 8.1 Search for remaining imports of `constants.ts`: `rg "from.*constants" src/`
- [x] 8.2 If no remaining imports, delete `src/lib/constants.ts`
- [x] 8.3 Verify build still passes: `npm run build`

## 9. Update Translation Files (Optional Cleanup)
- [x] 9.1 Review `src/messages/en.json` for duplicated contact values
- [x] 9.2 Review `src/messages/es.json` for duplicated contact values
- [x] 9.3 Document which translation keys still contain contact values (for future cleanup)

**Note**: Translation files still contain duplicated contact values in these locations:
- `global.footer.columns.contact.email` (lines 96-98)
- `global.footer.columns.contact.phones` (lines 103-108)
- `global.locations.contacts` (lines 353-361)
- `pages.contact.cards` (lines 583-591)

These are intentionally kept for backward compatibility with components that still read display text from translations. Consider refactoring these in a future change.

## 10. Final Verification
- [x] 10.1 Run full build: `npm run build`
- [x] 10.2 Run dev server and manually verify:
  - [x] Homepage loads (TopBar, Footer, Locations visible)
  - [x] Contact page loads (cards, map visible)
  - [x] Mobile menu works (phone numbers visible)
  - [x] Language switching works (labels update, values stay same)
- [x] 10.3 Verify all `tel:` links work (click on mobile or inspect href)
- [x] 10.4 Verify all `mailto:` links work
- [x] 10.5 Verify all social links open correct URLs

## Rollback Plan

If issues are found:
1. Revert `contact.ts` changes
2. Restore `constants.ts` if deleted
3. Revert component imports

---

## Dependencies

- Tasks 2-7 depend on Task 1 (contact.ts must exist first)
- Task 8 depends on Tasks 2-7 (all imports must be migrated)
- Task 10 depends on all previous tasks

## Parallelizable Work

Tasks 2, 3, 4, 5, 6, and 7 can be done in parallel after Task 1 is complete.

---

## Implementation Summary

**Files Created:**
- `src/lib/contact.ts` - Single source of truth for all contact data

**Files Modified:**
- `src/components/molecules/TopBar.astro` - Imports PHONES, SOCIAL_LINKS from contact.ts
- `src/components/organisms/MenuBar.astro` - Imports PHONES from contact.ts
- `src/components/organisms/Footer.astro` - Imports SOCIAL_LINKS from contact.ts
- `src/components/pages/general/Contact.astro` - Imports PHONES, EMAIL from contact.ts
- `src/components/atoms/GoogleMap.astro` - Imports GOOGLE_MAPS from contact.ts
- `src/components/organisms/Locations.astro` - Imports PHONES from contact.ts

**Files Deleted:**
- `src/lib/constants.ts` - Migrated SOCIAL_LINKS to contact.ts
