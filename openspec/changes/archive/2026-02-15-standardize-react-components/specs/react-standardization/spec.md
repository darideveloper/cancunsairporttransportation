# Capability: React Component Standardization

## ADDED Requirements

### Requirement: Component Definition Pattern
All React components in the project MUST use the standard `export default function` declaration.

#### Scenario: Defining a new React component
- **Given** a new UI interaction that requires a React component
- **When** the developer creates the `.tsx` file
- **Then** they MUST use `export default function ComponentName() { ... }`
- **And** they MUST NOT use `React.FC` or arrow function constants for the component definition.

### Requirement: removal of FC types
Imports of `FC` or `React.FC` from the `react` package MUST be removed if not needed for other specific utility purposes.

#### Scenario: Refactoring an existing component
- **Given** a component using `React.FC`
- **When** refactoring to standard function declaration
- **Then** the `FC` import MUST be removed from the file.
