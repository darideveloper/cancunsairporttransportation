# checklist-item-atom Specification

## Purpose
TBD - created by archiving change extract-checklist-item-atom. Update Purpose after archive.
## Requirements
### Requirement: Render checkmark list item with text
The `CheckListItem` component MUST render a list item (`<li>`) containing a checkmark icon and text content with consistent styling.

#### Scenario: Rendering a basic checkmark item
Given I use the `CheckListItem` component
And I provide a `text` prop with value "Free cancellation"
When the component renders
Then it should display a `<li>` element with class `rounded-2xl bg-white px-4 py-2`
And it should contain a blue checkmark icon (`FaCheck`) with classes `inline-block mr-2 text-blue`
And the icon should have `aria-hidden="true"` for accessibility
And it should display the text "Free cancellation" after the icon
And the text should be wrapped in a `<span>` with class `inline-block text-left`

---

### Requirement: Accept text as a prop
The `CheckListItem` component MUST accept a `text` prop of type `string` to display the item content.

#### Scenario: Using different text values
Given I use the `CheckListItem` component
And I provide a `text` prop with value "24/7 customer support"
When the component renders
Then it should display "24/7 customer support" as the item text

#### Scenario: Using text in a mapped list
Given I have an array of strings `["Item 1", "Item 2", "Item 3"]`
And I map over the array to render `CheckListItem` components
When the components render
Then each item should display its corresponding text with a checkmark icon

---

### Requirement: Maintain consistent styling with Tailwind
The `CheckListItem` component MUST use only Tailwind CSS classes for styling, with no inline styles or `<style>` blocks, following project conventions.

#### Scenario: Verifying Tailwind-only styling
Given I inspect the `CheckListItem` component source code
Then it should contain no `<style>` blocks
And it should contain no inline `style` attributes
And all visual styling should be applied via Tailwind utility classes

---

### Requirement: Support semantic HTML structure
The `CheckListItem` component MUST use semantic HTML with proper list item structure for accessibility and SEO.

#### Scenario: Semantic HTML validation
Given I use the `CheckListItem` component within a `<ul>` element
When the component renders
Then it should render a valid `<li>` element as the root
And the icon should have `aria-hidden="true"` to hide it from screen readers
And the text content should be accessible to assistive technologies

