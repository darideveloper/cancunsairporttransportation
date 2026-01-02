# Tasks: Add Top Bar Component

## 1. i18n Setup
- [x] Add translation strings to `src/messages/en.json`
- [x] Add translation strings to `src/messages/es.json`

## 2. Component Implementation
- [x] Create Atoms in `src/components/atoms/`:
    - [x] `LangLink.astro`
    - [x] `SocialIcon.astro` (using `react-icons`)
    - [x] `ContactItem.astro`
- [x] Create `TopBar.astro` Molecule in `src/components/molecules/`
- [x] Implement layout with three columns (Left, Center, Right) using Atoms
- [x] Implement language switching logic based on current route

## 3. Integration
- [x] Import and place `TopBar` in `src/layouts/Layout.astro` above the main content
- [x] Verify responsive behavior

## 4. Validation
- [x] Check links for phone numbers (`tel:`)
- [x] Verify language switcher correctly redirects to corresponding language root
- [x] Visual regression check against provided mockup image
- [x] Verify ARIA labels and semantic tags for SEO compliance
