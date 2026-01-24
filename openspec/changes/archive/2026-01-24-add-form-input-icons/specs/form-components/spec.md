# Form Component Icons

## ADDED Requirements

### Requirement: Icon Support
The form components `Input` and `Textarea` MUST support an optional icon to be displayed within the field using **React Icons**.

#### Scenario: Input with React Icon
- **Given** I use the `Input` component
- **When** I pass a React Icon component (e.g., `FaUser` from `react-icons/fa`) to the `icon` prop
- **Then** the icon is rendered as a SVG within the input wrapper on the left
- **And** the input element has `padding-left` (e.g., `pl-10`) to ensure text does not collide with the icon
- **And** the icon container is `pointer-events-none` so it doesn't interfere with typing

#### Scenario: Input without Icon
- **Given** I use the `Input` component
- **When** I do not pass an `icon` prop
- **Then** no icon is rendered
- **And** the input element has standard `padding-left` (e.g., `pl-3`)

#### Scenario: Textarea with React Icon
- **Given** I use the `Textarea` component
- **When** I pass a React Icon component to the `icon` prop
- **Then** the icon is rendered in the top-left area of the textarea wrapper
- **And** the textarea has sufficient left padding to accommodate the icon
