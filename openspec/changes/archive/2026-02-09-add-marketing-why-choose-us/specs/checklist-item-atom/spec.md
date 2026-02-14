# Capability: checklist-item-atom

## ADDED Requirements
### Requirement: `CheckListItem` MUST support dynamic icons
The `CheckListItem` atom component MUST allow passing a custom icon component via props while maintaining a checkmark as the default.

#### Scenario: Dynamic Icon Rendering
- **Given** a developer is using `CheckListItem`
- **When** they pass an `Icon` prop (e.g., `FaStar`)
- **Then** that icon should be rendered instead of the default checkmark
- **And** it should maintain the same size and styling as the default icon

#### Scenario: Default Icon Rendering
- **Given** a developer is using `CheckListItem`
- **When** they do NOT pass an `Icon` prop
- **Then** the `FaCheck` icon from `react-icons/fa` MUST be rendered by default
