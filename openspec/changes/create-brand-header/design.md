# Design: Brand Header

## Architecture

### Component Structure
- **Atoms**:
  - `Logo.astro`: Renders the brand logo as an SVG or optimized image, linked to the homepage.
  - `Button.astro`: A global utility component for brand buttons (e.g., CTA "My Booking").
  - `MenuToggle.tsx`: A client-side component (React) to manage the mobile menu open/close state.
- **Organisms**:
  - `Header.astro`: The main container. It will include the desktop navigation and the mobile menu trigger.
  - `MobileMenu.tsx`: The overlay content for mobile, sharing links with the desktop view.

### State Management
The mobile menu state (open/closed) will be managed locally using React `useState`. This ensures smooth transitions and avoids complex global state for a simple UI toggle.

### Responsive Breakpoints
- **Mobile (`< lg`)**: Hamburger menu on the right. Overlay menu includes:
  - Navigation links.
  - "Translate website" section with language links.
  - "Customer service" section with phone numbers.
  - Large bottom CTA.
- **Desktop (`>= lg`)**: Inline navigation and CTA button.

### Styling
- **Fonts**: Metropolis for navigation links and titles; Inter for body text in mobile menu.
- **Colors**: 
  - Nav Links: Brownish gold (from image, approximately `--color-accent`).
  - CTA Button: Orange (similar to logo accent).
  - Background: White.
  - Overlay: Semi-transparent or solid white as seen in the mockup.

### Internationalization

#### Translation System
The project uses a custom i18n system located in `src/lib/i18n/`:
- **Configuration**: `src/lib/i18n/ui.ts` - Defines supported languages (en, es) and imports translation files
- **Utilities**: `src/lib/i18n/utils.ts` - Provides `getLangFromUrl()` and `useTranslations()` functions
- **Translation Files**: `src/messages/en.json` and `src/messages/es.json`

#### Implementation Pattern
```astro
---
import { getLangFromUrl, useTranslations } from '../../lib/i18n/utils'

const lang = getLangFromUrl(Astro.url)
const t = useTranslations(lang)
---

<a href="#">{t('globalSections.header.nav.airportTransportation')}</a>
```

#### Required Translation Keys
All header strings must be added to both `src/messages/en.json` and `src/messages/es.json` under the `globalSections.header` namespace:

**Navigation:**
- `globalSections.header.nav.airportTransportation`
- `globalSections.header.nav.playaDelCarmen`
- `globalSections.header.nav.tulumShuttle`

**CTA & Actions:**
- `globalSections.header.cta.myBooking`
- `globalSections.header.logoAriaLabel`

**Mobile Menu:**
- `globalSections.header.mobile.translateWebsite`
- `globalSections.header.mobile.customerService`
- `globalSections.header.mobile.menuAriaLabel`
- `globalSections.header.mobile.closeMenuAriaLabel`
- `globalSections.header.mobile.openMenuAriaLabel`

**Note**: The translation system supports:
- Nested key access with dot notation
- Automatic fallback to English if key is missing
- Variable interpolation with `{placeholder}` syntax
