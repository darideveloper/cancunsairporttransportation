# Text Card Slots Spec

## ADDED Requirements

### Requirement: Support Image Slot
The `TextCard` component MUST support a named `image` slot for passing image content while respecting the layout direction (reversed or standard).

#### Scenario: Rendering Image Slot
Given a `TextCard` with content in the `image` slot
When the component renders
Then the slot content is displayed.

#### Scenario: Reversed Layout Logic
Given a `TextCard` with `reverse={true}` and an `image` slot
When the component renders
Then the image slot is positioned visually swapped with the content (e.g. using flex/grid order).

### Requirement: Remove Image Props
The `TextCard` component MUST remove support for the legacy `image`, `alt`, `width`, `height`, and `classImage` props.

#### Scenario: Legacy Props Removal
Given the `TextCard` component definition
When inspecting the Props interface
Then `image`, `alt`, `width`, `height`, and `classImage` are not present.
