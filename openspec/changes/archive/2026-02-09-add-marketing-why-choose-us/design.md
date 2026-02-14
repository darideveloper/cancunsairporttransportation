# Design: Marketing Why Choose Us Section (Results Page)

## Component Architecture

### 1. `CheckListItem.astro` Enhancement
The component will be refactored to support dynamic icons, which is a requirement for the marketing design (e.g., star icons for experience).
- **Props**: Add `Icon?: any` (React component type).
- **Default**: `FaCheck` from `react-icons/fa`.
- **Implementation**: Use `clsx` for classes and render the passed `Icon` if present.

### 2. `WhyChooseUs.astro` (Organism)
This component will be integrated into the **Results page** to build trust during the booking process. It will follow the pattern of the `Includes.astro` organism but tailored for general marketing points.
- **Structure**:
  - `H2` title.
  - `div.image-container`: Centered GIF linked to Trip Advisor (reusing `trip-advisor.webp`).
  - `ul.items-grid`: Responsive grid of `CheckListItem` components.
- **Data Source**: It will fetch translations from `global.sections.whyChooseUs` (which will be expanded) or a new `pages.results.whyChooseUs` key.

## Localization Strategy
The section will use a structured object in `en.json` and `es.json`:
```json
"whyChooseUs": {
  "title": "Why choose us?",
  "imageAlt": "Trip Advisor 2024",
  "imageTitle": "2024 Traveller's Choice",
  "items": [
    { "text": "10 Years of Experience", "icon": "star" },
    { "text": "Certified Drivers", "icon": "check" },
    ...
  ]
}
```
A mapping function in the component will resolve strings like `"star"` to actual `react-icons` components.

## Styling
- Use **Tailwind CSS** via `clsx` and `@theme` variables.
- Maintain consistency with the `Includes.astro` layout: centered on mobile, balanced grid on desktop.
- The GIF should be optimized and have proper accessibility attributes (alt/title).
