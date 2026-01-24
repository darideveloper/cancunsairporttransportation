# Component Creation Checklist

Use this checklist before, during, and after creating a new component to ensure quality and compliance.

## Pre-Creation Phase

### Requirements Analysis
- [ ] Clearly understand what the component should do
- [ ] Identify if it's an atom, molecule, or organism
- [ ] Determine if the component is global or page-specific
- [ ] Know what props the component will accept

### Existing Component Review
- [ ] Searched `src/components/atoms/` for reusable atoms
- [ ] Searched `src/components/molecules/` for reusable molecules
- [ ] Searched `src/components/organisms/` for similar organisms
- [ ] Confirmed that creating a new component is necessary
- [ ] Identified existing components that can be reused/composed

### Translation Planning
- [ ] Determined if translations are global or page-specific
- [ ] Identified all text content that needs translation
- [ ] Identified all metadata that needs translation (alt text, aria-labels, etc.)
- [ ] Planned translation key structure

## Creation Phase

### HTML Structure
- [ ] Used semantic HTML5 elements (`<section>`, `<article>`, `<nav>`, etc.)
- [ ] Avoided generic `<div>` where semantic alternatives exist
- [ ] Used proper heading hierarchy (h1 → h2 → h3, no skipping)
- [ ] Added empty `class=""` attributes for future styling
- [ ] Used HTML comments to document structure sections

### Accessibility (ARIA)
- [ ] Added `aria-label` for interactive elements without visible text
- [ ] Used `aria-labelledby` to reference heading IDs
- [ ] Added `aria-hidden="true"` for decorative icons
- [ ] Included `role` attributes when semantic HTML isn't sufficient
- [ ] Ensured all interactive elements are keyboard accessible

### Unique IDs
- [ ] Generated unique IDs for all interactive elements
- [ ] Used descriptive, kebab-case naming for IDs
- [ ] Ensured IDs are unique across the component
- [ ] Used ID generation logic for dynamic content

### Images
- [ ] Imported Astro Image component: `import { Image } from "astro:assets";`
- [ ] Used `<Image>` instead of `<img>` for all images
- [ ] Added `alt` attribute with descriptive text
- [ ] Added `title` attribute for additional context
- [ ] Specified `width` and `height` for performance
- [ ] Added `loading="lazy"` for below-fold images
- [ ] Used `loading="eager"` only for above-fold critical images

### Icons
- [ ] Imported icons from `react-icons`
- [ ] Used appropriate icon library (FaCheck, IoMdClose, etc.)
- [ ] Added `aria-hidden="true"` for decorative icons
- [ ] Used `className` instead of `class` for React components
- [ ] Added `client:visible` directive if icons need interactivity

### Translation Integration
- [ ] Imported translation utilities: `import { getLangFromUrl, useTranslations } from "../../lib/i18n/utils";`
- [ ] Got current language: `const lang = getLangFromUrl(Astro.url);`
- [ ] Created translation function: `const t = useTranslations(lang);`
- [ ] Used translation keys for all visible text
- [ ] Used translation keys for all metadata (alt, title, aria-label)
- [ ] No hardcoded strings in the component
- [ ] Created dummy translation data in both `en.json` and `es.json`

### Props and Types
- [ ] Defined TypeScript interface for props
- [ ] Documented all props with comments
- [ ] Destructured props from `Astro.props`
- [ ] Validated required vs optional props
- [ ] Used appropriate types (string, ImageMetadata, etc.)

### Component Composition
- [ ] Imported and reused existing components
- [ ] Used slots for flexible content insertion
- [ ] Avoided duplicating functionality
- [ ] Followed atomic design principles

## Post-Creation Phase

### SEO Validation
- [ ] Only one `<h1>` per page (if applicable)
- [ ] Proper heading hierarchy throughout
- [ ] All images have descriptive alt text
- [ ] All links have descriptive text or aria-labels
- [ ] Semantic HTML used throughout
- [ ] No accessibility warnings in browser console

### Code Quality
- [ ] No hardcoded strings
- [ ] No duplicate code (DRY principle)
- [ ] Clean, readable code structure
- [ ] Proper indentation and formatting
- [ ] Meaningful variable and function names

### Integration
- [ ] Component imported in target page
- [ ] Component added to page in correct location
- [ ] All required props passed correctly
- [ ] Component renders without errors
- [ ] Responsive design works on mobile and desktop

### Testing
- [ ] Component displays correctly in browser
- [ ] All text appears in both English and Spanish
- [ ] Images load correctly
- [ ] Icons display properly
- [ ] No console errors or warnings
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility (if applicable)

### Documentation
- [ ] Component purpose is clear from filename
- [ ] Props are documented in TypeScript interface
- [ ] Complex logic has explanatory comments
- [ ] Usage examples provided (if complex component)

### OpenSpec Compliance
- [ ] Component name matches OpenSpec proposal name
- [ ] Translation keys match proposal naming
- [ ] All proposal requirements implemented
- [ ] Component added to correct page as specified

## Final Review

Before marking the component as complete:

- [ ] Run the `component-validator` skill to check for issues
- [ ] Verify all checklist items are complete
- [ ] Test the component in the browser
- [ ] Confirm translations work in both languages
- [ ] Ensure no build errors or warnings

## Common Mistakes to Avoid

❌ **Don't**:
- Use `<div>` when semantic HTML exists
- Hardcode text strings in the component
- Skip ARIA labels for accessibility
- Use `<img>` instead of Astro `<Image>`
- Create new components without checking existing ones
- Add styles during initial HTML structure creation
- Skip translation integration
- Forget to add `loading="lazy"` for below-fold images

✅ **Do**:
- Use semantic HTML5 elements
- Get all text from translation files
- Add proper ARIA labels
- Use Astro `<Image>` component
- Reuse existing components
- Create HTML structure first, style later
- Integrate translations from the start
- Optimize images with lazy loading
