# Change: Centralize Contact Information in a Single Data File

## Why

Contact information (phone numbers, email, address, social links, Google Maps embed) is currently scattered across **11+ locations** in the codebase:

- **Hardcoded in components**: `TopBar.astro`, `MenuBar.astro`, `Contact.astro`, `GoogleMap.astro`
- **Duplicated in translation files**: `en.json`, `es.json` (footer, locations, contact page)
- **Partially centralized**: `src/lib/constants.ts` (only social links)
- **Embedded in legal content**: `terms-and-conditions.mdx`, `privacy-policy.mdx`

This duplication creates:
1. **Maintenance burden**: Updating a phone number requires changes in 6+ files
2. **Inconsistency risk**: Values can drift out of sync
3. **DRY violation**: Same data repeated in translation files and components

## What Changes

### New File: `src/lib/contact.ts`
A single source of truth for all contact data:
- Phone numbers (Mexico, USA/Canada) with raw and formatted versions
- Email address with `mailto:` href
- Physical address
- Social media links (moved from `constants.ts`)
- Google Maps embed URL
- Business hours

### Refactored Components
1. **`TopBar.astro`**: Import phones and socials from `contact.ts`
2. **`MenuBar.astro`**: Import phones from `contact.ts`
3. **`Footer.astro`**: Import socials from `contact.ts`
4. **`Contact.astro`**: Import phones and email from `contact.ts`
5. **`GoogleMap.astro`**: Import embed URL from `contact.ts`
6. **`Locations.astro`**: Use translation keys that reference contact data

### Refactored Translations
- Remove duplicated raw contact values from translation files
- Keep only **labels** (e.g., "From USA / Canada", "México & Rest of the world") in translations
- Components will combine labels (translated) with values (from `contact.ts`)

### Deprecated File
- **`src/lib/constants.ts`**: Remove and migrate `SOCIAL_LINKS` to `contact.ts`

## Impact

- **Affected specs**:
  - `contact-page` (contact cards use hardcoded values)
  - `content` (footer contact section)
  - `ui-utility-navigation` (top bar phone numbers)

- **Affected code**:
  - `src/lib/constants.ts` → **DELETED** (content moved to `contact.ts`)
  - `src/lib/contact.ts` → **NEW**
  - `src/components/molecules/TopBar.astro`
  - `src/components/organisms/MenuBar.astro`
  - `src/components/organisms/Footer.astro`
  - `src/components/pages/general/Contact.astro`
  - `src/components/atoms/GoogleMap.astro`
  - `src/components/organisms/Locations.astro`
  - `src/messages/en.json` (structure change in contact sections)
  - `src/messages/es.json` (structure change in contact sections)

## Out of Scope

- **Legal content (MDX files)**: The terms and privacy pages contain contact info embedded in prose. These will NOT be refactored as they require different handling (MDX imports or component slots).

## File Location Analysis

### Why `src/lib/contact.ts`?

| Option | Pros | Cons |
|--------|------|------|
| `src/lib/contact.ts` | ✅ Follows existing pattern (`constants.ts`), ✅ Co-located with utils, ✅ TypeScript support | None significant |
| `src/data/contact.ts` | Semantic "data" folder | ❌ Requires creating new directory, ❌ Breaks existing convention |
| `src/config/contact.ts` | Common pattern | ❌ Requires creating new directory |
| `src/lib/constants.ts` (extend) | No new file | ❌ File becomes too large, ❌ Poor separation of concerns |

**Decision**: Create `src/lib/contact.ts` and delete `src/lib/constants.ts` (migrate social links).

## Testing Requirements

Each component change MUST be verified:
1. **Build check**: `npm run build` passes without errors
2. **Dev server check**: `npm run dev` with visual inspection
3. **Import verification**: All imports resolve correctly
4. **Functionality check**: Click-to-call links work, social links open correctly
