# includes-component-refactor Specification

## Purpose
Update the `Includes` organism component to use the new `CheckListItem` atom component, improving code reusability and maintainability.

## ADDED Requirements

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
