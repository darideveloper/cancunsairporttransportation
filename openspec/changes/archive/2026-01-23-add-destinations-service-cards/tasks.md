# Tasks: Add Destinations Service Cards

## Task 1: Add Translation Keys ✅
**Description**: Add new translation keys for the 3 service cards to both English and Spanish translation files.

**Files to modify**:
- `src/messages/en.json`
- `src/messages/es.json`

**Changes**:
- ✅ Add `serviceCards` object under `pages.destinations` with 3 card entries (confidence, transportation, comfort)
- ✅ Each card includes: `title`, `text`, `imageAlt`, `imageTitle`

**Validation**: 
- ✅ Verify JSON syntax is valid
- ✅ Confirm keys match between en.json and es.json
- ✅ Test translation retrieval with `t()` function

---

## Task 2: Import Service Card Images ✅
**Description**: Import the 3 PNG images needed for the service cards in the Destinations.astro component.

**File to modify**:
- `src/components/pages/landing/Destinations.astro`

**Changes**:
- ✅ Add imports for `pyramid.png`, `excursion.png`, and `car-seat.png` from `src/assets/images/destinations/`
- ✅ Follow existing import pattern (lines 22-27)

**Validation**:
- ✅ Verify images exist in the specified directory
- ✅ Confirm imports follow TypeScript conventions

---

## Task 3: Add BasicImageCard Components ✅
**Description**: Add 3 new `BasicImageCard` components to render the service highlights on the Destinations page.

**File to modify**:
- `src/components/pages/landing/Destinations.astro`

**Changes**:
- ✅ Add a container section after the existing "Contact" BasicImageCard (after line 152)
- ✅ Render 3 BasicImageCard components in a grid layout
- ✅ Each card uses: translated title, image with alt/title, and translated text content
- ✅ Apply responsive grid classes (similar to destinations cards pattern)

**Validation**:
- ✅ Visual inspection in browser (both English and Spanish)
- ✅ Verify responsive layout on mobile/tablet/desktop
- ✅ Check accessibility with screen reader
- ✅ Validate HTML semantics

---

## Task 4: Validate and Test ✅
**Description**: Run validation and manual testing to ensure the implementation meets all requirements.

**Actions**:
- ✅ Run `openspec validate add-destinations-service-cards --strict`
- ✅ Test page in both `/destinations` (English) and `/es/destinos` (Spanish)
- ✅ Verify SEO metadata (alt text, titles, semantic HTML)
- ✅ Check responsive design across breakpoints
- ✅ Validate against existing spec requirements (basic-image-card, translation-system, seo-improvements)

**Validation**:
- ✅ OpenSpec validation passes
- ✅ No console errors
- ✅ Images load correctly
- ✅ Translations display properly in both languages
- ✅ Accessibility standards met
