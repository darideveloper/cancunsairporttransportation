# Capability: Modular Payment Methods

This capability focuses on refactoring the monolithic `PaymentMethod` component into a dynamic `PaymentMethods` molecule and a reusable `PaymentMethod` atom.

## ADDED Requirements

### Requirement: Centralized Payment State Management
The `PaymentMethods` (Plural, Molecule) component SHALL remain the single source of truth for the selected payment method and the orchestration of the individual options.

#### Scenario: Selection Update via Loop
- **Given**: A `PaymentMethods` molecule renders a list of `PaymentMethod` (Singular, Atom) components using a loop.
- **When**: A user clicks on a `PaymentMethod` atom.
- **Then**: The parent `PaymentMethods` molecule SHALL update the global store.
- **And**: The change SHALL be reflected across all mapped `PaymentMethod` atoms.

### Requirement: Simplified PaymentMethod Atom
A new `PaymentMethod` atom SHALL be created to encapsulate the visual and interactive logic of a single payment method's card-like interface.

#### Scenario: Dynamic Image Rendering
- **Given**: A `PaymentMethod` atom.
- **When**: It receives an `images` prop.
- **Then**: It SHALL render those images within its card container.
- **And**: It SHALL use the provided `imageAlt` for accessibility.

#### Scenario: Optional Label Support
- **Given**: A `PaymentMethod` atom.
- **When**: It receives a `label` prop.
- **Then**: It SHALL render the label alongside the image to provide more context.

#### Scenario: Active/Inactive State Styling
- **Given**: A `PaymentMethod` atom with `isSelected={true}`.
- **Then**: It SHALL display a blue border and light blue background.
- **When**: `isSelected={false}`, it SHALL display a light gray border and no background.
