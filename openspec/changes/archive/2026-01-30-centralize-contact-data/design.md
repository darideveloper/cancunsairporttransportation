# Design: Centralize Contact Data

## Context

The project currently stores contact information in multiple locations, violating the DRY principle. This design document outlines the technical approach to centralize this data.

## Goals / Non-Goals

### Goals
- Single source of truth for all contact data
- Type-safe access to contact information
- Backward-compatible refactoring (no breaking changes to UI)
- Maintain i18n support for labels

### Non-Goals
- Refactoring legal MDX content (out of scope)
- Creating a CMS or admin interface for contact data
- Server-side fetching of contact data

## Decisions

### Decision 1: File Structure

Create `src/lib/contact.ts` with the following structure:

```typescript
/**
 * Centralized contact information for Cancun Airport Transportation.
 * Single source of truth for all contact data across the application.
 */

// =============================================================================
// PHONE NUMBERS
// =============================================================================

export const PHONES = {
  mexico: {
    raw: '+529983870435',
    formatted: '+52 (998) 387-0435',
    href: 'tel:+529983870435',
  },
  usa: {
    raw: '+19299991258',
    formatted: '+1 (929) 999-1258',
    href: 'tel:+19299991258',
  },
} as const;

// =============================================================================
// EMAIL
// =============================================================================

export const EMAIL = {
  address: 'bookings@gotransfers.us',
  href: 'mailto:bookings@gotransfers.us',
} as const;

// =============================================================================
// ADDRESS
// =============================================================================

export const ADDRESS = {
  full: 'Blvd. Luis Donaldo Colosio Km 7.5, Zona Hotelera, 77500 Cancún, Q.R.',
  street: 'Blvd. Luis Donaldo Colosio Km 7.5',
  zone: 'Zona Hotelera',
  city: 'Cancún',
  state: 'Quintana Roo',
  postalCode: '77500',
  country: 'Mexico',
} as const;

// =============================================================================
// SOCIAL LINKS
// =============================================================================

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/gotransfers.us',
  instagram: 'https://www.instagram.com/gotransfers.us/',
} as const;

// =============================================================================
// GOOGLE MAPS
// =============================================================================

export const GOOGLE_MAPS = {
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5966047271118!2d-86.85725502440039!3d21.12864288433976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2bb0419c6491%3A0x145800cb5703a989!2sCancun%20Airport%20Transportation!5e0!3m2!1ses-419!2smx!4v1721079619885!5m2!1ses-419!2smx',
  placeId: '0x8f4c2bb0419c6491:0x145800cb5703a989',
  coordinates: {
    lat: 21.12864288433976,
    lng: -86.85725502440039,
  },
} as const;

// =============================================================================
// BUSINESS HOURS
// =============================================================================

export const BUSINESS_HOURS = {
  start: '07:00',
  end: '23:00',
  timezone: 'America/Cancun',
  display: '7:00 AM to 11:00 PM',
} as const;
```

**Rationale**:
- Grouped by concern (phones, email, address, socials, maps, hours)
- `as const` for type safety and autocomplete
- Both raw and formatted values for flexibility
- Pre-computed `href` values to avoid runtime string concatenation

### Decision 2: Translation File Changes

**Before** (duplicated values):
```json
{
  "global": {
    "footer": {
      "columns": {
        "contact": {
          "email": {
            "label": "bookings@gotransfers.us",
            "value": "bookings@gotransfers.us",
            "href": "mailto:bookings@gotransfers.us"
          }
        }
      }
    }
  }
}
```

**After** (labels only):
```json
{
  "global": {
    "footer": {
      "columns": {
        "contact": {
          "title": "Contact Us",
          "emailLabel": "Email",
          "usaPhoneLabel": "From USA / Canada",
          "mexicoPhoneLabel": "México & Rest of the world"
        }
      }
    }
  }
}
```

**Rationale**:
- Translation files contain only translatable text (labels)
- Actual contact values come from `contact.ts`
- Reduces duplication and sync issues

### Decision 3: Component Refactoring Pattern

Each component will:
1. Import constants from `src/lib/contact.ts`
2. Import labels from translation system
3. Combine them at render time

**Example** (`TopBar.astro`):

```astro
---
import { PHONES, SOCIAL_LINKS } from "../../lib/contact";
import { useTranslations } from "../../lib/i18n/utils";

const t = useTranslations(lang);
---

<ContactItem
  label={t("global.topbar.mexicoPhone")}
  phone={PHONES.mexico.formatted}
/>
```

### Decision 4: Delete `constants.ts`

The current `src/lib/constants.ts` only contains `SOCIAL_LINKS`. After migration to `contact.ts`, this file will be deleted to avoid confusion.

**Migration Path**:
1. Create `contact.ts` with all constants
2. Update all imports from `constants.ts` to `contact.ts`
3. Verify no remaining imports
4. Delete `constants.ts`

## Risks / Trade-offs

| Risk | Impact | Mitigation |
|------|--------|------------|
| Breaking imports | Build failure | Task includes import verification step |
| Missing usage | Runtime error | Grep search before deletion |
| Translation key mismatch | UI shows keys instead of text | Visual verification in dev |

## Component-Specific Changes

### 1. `TopBar.astro`
- **Current**: Hardcoded `phone="+52 (998) 387-0435"`
- **New**: `phone={PHONES.mexico.formatted}`
- **Import**: `import { PHONES, SOCIAL_LINKS } from "../../lib/contact";`

### 2. `MenuBar.astro`
- **Current**: `contactPhones` array with hardcoded values
- **New**: Build array from `PHONES` constant
- **Import**: `import { PHONES } from "../../lib/contact";`

### 3. `Footer.astro`
- **Current**: Hardcoded social URLs in `socialLinks` array
- **New**: Use `SOCIAL_LINKS` constant
- **Import**: `import { SOCIAL_LINKS } from "../../lib/contact";`

### 4. `Contact.astro`
- **Current**: Hardcoded `href: "tel:+19299991258"`, `href: "mailto:bookings@gotransfers.us"`
- **New**: Use `PHONES` and `EMAIL` constants
- **Import**: `import { PHONES, EMAIL } from "../../../lib/contact";`

### 5. `GoogleMap.astro`
- **Current**: Hardcoded `MAP_SRC` constant
- **New**: Use `GOOGLE_MAPS.embedUrl`
- **Import**: `import { GOOGLE_MAPS } from "../../lib/contact";`

### 6. `Locations.astro`
- **Current**: Uses translation values for phone numbers
- **New**: Uses `PHONES` for values, translations for labels only
- **Import**: `import { PHONES } from "../../lib/contact";`

## Open Questions

1. **Address format**: Should we store the address as a single string or structured object? → Decision: Structured object for flexibility, but provide `full` for convenience.

2. **Future CMS integration**: Will this data eventually come from a CMS? → Out of scope for this change, but the centralized file makes future migration easier.
