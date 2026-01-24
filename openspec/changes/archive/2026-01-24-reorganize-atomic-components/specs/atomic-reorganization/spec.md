# Spec Delta: Atomic Reorganization

## ADDED Requirements

### Requirement: component-classification
Components MUST be classified based on their complexity and internal dependencies according to Atomic Design principles.
#### Scenario: Reorganizing misclassified components
- **GIVEN** a component library following Atomic Design
- **WHEN** a component contains complex logic and sub-components (like `MenuBar`)
- **THEN** it must be located in `src/components/organisms`
- **AND WHEN** a component is a basic building block (like `SubmitButton`)
- **THEN** it must be located in `src/components/atoms`
