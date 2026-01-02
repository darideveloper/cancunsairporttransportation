# Semantic Navigation

## ADDED Requirements

### Requirement: Unique Accessible Names for Buttons
All buttons, especially icon-only buttons, MUST have a descriptive and non-empty accessible name.

#### Scenario: Menu Toggle Buttons
**Given** the `menu-open-button` and `menu-close-button`  
**Then** they MUST have a valid `aria-label` attribute describing their action (e.g., "Open main menu", "Close menu").

### Requirement: Distinguishable Navigation Links
Links that navigate to the same destination but appear multiple times (e.g., in responsive menus) MUST be distinguishable or properly hidden when not in use.

#### Scenario: Dual Navigation Menus
**Given** the Desktop and Mobile navigation menus coexist in the DOM  
**When** one is visually hidden  
**Then** it MUST be hidden from screen readers using `display: none`, `visibility: hidden`, or `aria-hidden="true"`, OR the links MUST have distinct accessible names to clarify their context.
