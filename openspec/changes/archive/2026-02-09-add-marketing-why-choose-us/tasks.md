# Tasks: Add Marketing Why Choose Us Section

## 1. Setup & Localization
- [x] Add translation strings to `src/messages/en.json`
- [x] Add translation strings to `src/messages/es.json`
- [x] Verify translations are correctly indexed by the i18n system

## 2. Component Refactoring
- [x] Update `src/components/atoms/CheckListItem.astro` to accept a dynamic `Icon` prop
- [x] Set `FaCheck` as the default icon in `CheckListItem.astro`
- [x] Ensure `clsx` is used for conditional classes as per project rules

## 3. Section Development
- [x] Create `src/components/organisms/WhyChooseUs.astro`
- [x] Implement the title section using `H2` atom
- [x] Implement the middle section with the "Traveller's Choice 2024" GIF and Trip Advisor link
- [x] Implement the list section using enhanced `CheckListItem` atoms
- [x] Map icons from translation data to `react-icons`

## 4. Results Page Integration
- [x] Import and render the new `WhyChooseUs` organism in `src/components/pages/store/Results.astro`
- [x] Verify responsive behavior and styling on mobile/desktop

## 5. Validation
- [x] Run `openspec validate add-marketing-why-choose-us --strict`
- [x] Manually verify the section renders correctly in English and Spanish
