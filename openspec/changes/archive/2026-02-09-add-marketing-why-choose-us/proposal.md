# Proposal: Add Marketing Why Choose Us Section

Improve the "Why Choose Us" section on the new Results page using a design that leverages existing components and includes a list of value propositions with dynamic icons.

## Why
The new Results page needs a "Why Choose Us" section to reinforce trust and value propositions. The current components (like `TextCardSmall`) are available but we want a specific layout that highlights features effectively using the existing `CheckListItem` atom.

## What Changes
1. **Update `CheckListItem.astro`**: Modify the component to accept an optional `Icon` prop from `react-icons`, defaulting to `FaCheck` if not provided. This makes the checklist atoms more flexible.
2. **Create `WhyChooseUs.astro` Organism**: Implement a new organism component that matches the requested HTML structure, featuring:
   - A title using the `H2` atom.
   - A middle section with the "Traveller's Choice 2024" GIF linked to Trip Advisor.
   - A bottom section displaying a list of features using the enhanced `CheckListItem` components.
3. **Update Results Page**: Integrate the `WhyChooseUs` organism into the `src/components/pages/store/Results.astro` page.
4. **Localization**: Add the extracted English and Spanish texts to the respective `i18n` message files.

## Scope
- `src/components/atoms/CheckListItem.astro`: Update props and rendering logic.
- `src/components/organisms/WhyChooseUs.astro`: New component creation.
- `src/components/pages/store/Results.astro`: Integration of the new section.
- `src/messages/en.json` & `src/messages/es.json`: Translation updates.
