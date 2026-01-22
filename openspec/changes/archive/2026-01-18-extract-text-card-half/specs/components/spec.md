# Component Specs

## ADDED Requirements

### Requirement: TextCardHalf Component
The system MUST provide a `TextCardHalf` component for rendering 50/50 image and text sections.

#### Scenario: Rendering TextCardHalf
Given a usage `<TextCardHalf page="playaDelCarmen" section="safeTrip" image={img} />`
Then it should render `TextCard` with `grid-cols-2`
And it should fetch translated title and content based on the page/section.

### Requirement: TextCardSmall Component
The system MUST provide a `TextCardSmall` component for rendering sections with a smaller image (approx 1/3) using Flexbox.

#### Scenario: Rendering TextCardSmall
Given a usage `<TextCardSmall page="playaDelCarmen" section="howToMove" image={img} />`
Then it should render `TextCard` with `flex` layout
And the image should have width classes constrained (e.g., `md:w-1/2 lg:w-1/3`).
