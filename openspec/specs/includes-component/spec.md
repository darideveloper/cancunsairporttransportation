# includes-component Specification

## Purpose
TBD - created by archiving change create-includes-organism. Update Purpose after archive.
## Requirements
### Requirement: Global Includes Data
The application MUST have a global data structure in translation files to store the content of the "Includes" section.
#### Scenario: Data Availability
- GIVEN the translation files `en.json` and `es.json`
- WHEN the application loads
- THEN the `global.sections.includes` object MUST contain:
  - A `title` string
  - An `image` path string
  - An `imageAlt` string (descriptive alt text for accessibility)
  - An `imageTitle` string (additional context)
  - An `items` array of strings (list of included features)

### Requirement: Includes Component Structure
The Includes component MUST follow a specific HTML structure with proper semantic HTML and accessibility attributes.
#### Scenario: Component Rendering
- GIVEN the `Includes.astro` component
- WHEN rendered on a page
- THEN it MUST contain:
  - A `<section>` element with `id="service-includes"` and `aria-labelledby="includes-title"`
  - An `<h2>` element with `id="includes-title"` for the title
  - An Astro `Image` component with `alt`, `title`, `width`, `height`, and `loading="lazy"` attributes
  - A `<ul>` element containing list items with proper semantic structure
  - Tailwind CSS utility classes for styling (NO `<style>` blocks)

### Requirement: SEO and Accessibility Compliance
The Includes component MUST meet SEO and accessibility standards.
#### Scenario: SEO Optimization
- GIVEN the `Includes.astro` component
- WHEN rendered on a page
- THEN it MUST:
  - Use semantic HTML5 elements (`<section>`, `<h2>`, `<ul>`, `<li>`)
  - Have unique `id` attributes for major elements
  - Include ARIA labels (`aria-labelledby`) for screen reader support
  - Use descriptive alt text for images
  - Implement lazy loading for images
  - Specify explicit image dimensions to prevent layout shift (CLS)
  - Use proper heading hierarchy (H2, not H1)

### Requirement: Performance Optimization
The Includes component MUST be optimized for performance.
#### Scenario: Core Web Vitals
- GIVEN the `Includes.astro` component
- WHEN the page loads
- THEN it MUST:
  - Use Astro's `Image` component for automatic format optimization
  - Implement lazy loading for below-fold images
  - Have explicit width and height attributes to prevent CLS
  - Use WebP or optimized image formats
  - Require no client-side JavaScript (static component)

### Requirement: Responsive Design
The Includes component MUST be responsive across all device sizes.
#### Scenario: Mobile-First Layout
- GIVEN the `Includes.astro` component
- WHEN viewed on different screen sizes
- THEN it MUST:
  - Display in a single column on mobile devices
  - Display in a two-column grid on desktop (lg breakpoint)
  - Use responsive typography (text-3xl on mobile, text-5xl on desktop)
  - Maintain proper spacing and readability on all devices

### Requirement: Private Airport Transfer Page Integration
The Includes component MUST be integrated into the private-airport-transfer-cancun page.
#### Scenario: Page Placement
- GIVEN the `private-airport-transfer-cancun.astro` page
- WHEN the page is rendered
- THEN the `Includes` component MUST be present in the main content area
- AND it MUST be imported from `src/components/organisms/Includes.astro`

### Requirement: Use CheckListItem atom for list items
The `Includes` component MUST use the `CheckListItem` atom component to render each item in the includes list, replacing inline markup.

#### Scenario: Rendering items with CheckListItem atom
Given I use the `Includes` component with a `page` prop
And the translation data contains an array of include items
When the component renders the list
Then it should import `CheckListItem` from `../atoms/CheckListItem.astro`
And it should map over the items array
And for each item, it should render `<CheckListItem text={item} />`
And it should NOT contain inline `<li>` markup with checkmark icons
And it should NOT directly import `FaCheck` from `react-icons/fa`

#### Scenario: Maintaining existing functionality
Given I use the `Includes` component on a service page
And I provide `page` and `image` props
When the component renders
Then it should display the same visual output as before the refactor
And all existing props should work identically
And the translation system should function unchanged
And the responsive layout should remain intact

---

### Requirement: Maintain clean imports
The `Includes` component MUST only import components and utilities that it directly uses, removing unused imports.

#### Scenario: Verifying import cleanliness
Given I inspect the `Includes` component source code
Then it should import `CheckListItem` from `../atoms/CheckListItem.astro`
And it should NOT import `FaCheck` from `react-icons/fa`
And all other existing imports should remain unchanged
And there should be no unused imports

