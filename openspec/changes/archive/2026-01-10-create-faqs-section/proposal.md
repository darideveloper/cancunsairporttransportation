# Create FAQs Section

## Goal Description
Create a new FAQs section for the project to display frequently asked questions. This section will improve user experience and SEO by providing quick answers to common queries.

## User Review Required
None.

## Proposed Changes
### Components

#### [NEW] [FaqItem.tsx](file:///develop/astro/cancunsairporttransportation/src/components/molecules/FaqItem.tsx)
- A React component for individual FAQ items.
- Manages open/close state.
- Uses semantic HTML (likely `<details>` and `<summary>` or accessible button/div/aria pattern) for accessibility.
- **Critical Requirement**: Must be loaded by default in Astro for SEO (server-side rendered initial state).
- **Style Requirement**: Do not add any styles, just empty 'class' or 'className' attributes.

#### [NEW] [FaqSection.astro](file:///develop/astro/cancunsairporttransportation/src/components/organisms/FaqSection.astro)
- An Astro component that acts as the container for the FAQ section.
- **Props**: Accepts a list of FAQ items (object with question/answer keys) and title/description props.
- **Implementation**:
  - Uses `SectionHeading` for the title/text.
  - Renders the list of `FaqItem` components via a map loop.
- **Rationale**: Encapsulates the section layout (heading + list) while allowing data to be passed from the parent page.


### Content & Translations
- **Translations**: Text content (questions, answers) will be stored in `src/messages/en.json` and `src/messages/es.json`.
- **Data Definition**: The list of FAQs (keys) will be defined in the page script (e.g., `index.astro`) as an array of objects.
- **Rendering**: The page will pass this data to the FAQ section (or map over it directly) which will use the translation function `t()` to resolve the text before passing it to the `FaqItem` component.


## Verification Plan
### Automated Tests
- None specified for this visual change.

### Manual Verification
- Verify the section appears on the page.
- Check that the title and description are correct and translated.
- Click FAQ items to verify open/close behavior.
- Disable JavaScript to ensure content is visible (for SEO/Accessibility).
- Inspect HTML to ensure correct semantic tags and aria labels are used.
