## ADDED Requirements

### Requirement: Unique ID Generation
All components generating DOM IDs MUST guarantee uniqueness, even when multiple instances have identical content.

#### Scenario: Duplicate Title Cards
- **WHEN** two `InfoIconCard` components are rendered with the title "Safe Transfer"
- **THEN** each card's `id` and `aria-labelledby` attributes MUST be distinct (e.g., `info-card-safe-transfer-a1b2`)

### Requirement: Strict Prop Typing
Component props representing standard HTML attributes MUST use strict library types instead of `any` or `string`.

#### Scenario: Input Type
- **WHEN** an `Input` component accepts a `type` prop
- **THEN** it MUST allow only valid HTML input values (text, email, tel, etc.) enforced by TypeScript.
