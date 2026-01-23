# Capability: Code Structure

## ADDED Requirements

### Requirement: Page components MUST be organized by layout type
The project structure for pages MUST reflect the layout used by the component to improve discoverability.

#### Scenario: locating a service page
Given a developer looks for the `Private.astro` component
Then they should find it in `src/components/pages/services/Private.astro`
And not in the root `src/components/pages/` folder.
