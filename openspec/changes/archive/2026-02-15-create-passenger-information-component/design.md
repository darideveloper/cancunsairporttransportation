# Design: Passenger Information Component

## Problem Statement
The user needs a dedicated UI section to collect passenger data during the booking process. The layout must be responsive and premium, matching a specific grid-based design.

## Architecture
- **State**: Zustand `useSearchFormStore`.
- **UI Components**:
    - `H2` for headers.
    - `Input` for standard text fields.
    - `Textarea` for the additional requirements field.
- **Layout**:
    - Container: `rounded-2xl bg-white px-4 py-6 shadow-xl` (matching `ArrivalInformation`).
    - Grid: `grid grid-cols-1 md:grid-cols-2 gap-6`.

## Data Binding
| Field | Label | Store Key |
|-------|-------|-----------|
| Full name | Full name | `firstName` |
| Last name | Last name | `lastName` |
| E-mail | E-mail | `email` |
| Phone | Phone | `phone` |
| Notes | Notes / Additional requirements | `notes` |

## Detailed Layout
```tsx
<div className="rounded-2xl bg-white px-4 py-6 shadow-xl">
  <H2>Passenger information</H2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <Input label="Full name" name="firstName" />
    <Input label="Last name" name="lastName" />
    <Input label="E-mail" name="email" type="email" />
    <Input label="Phone" name="phone" type="tel" />
    <div className="md:col-span-2">
      <Textarea label="Notes / Additional requirements" name="notes" />
    </div>
  </div>
</div>
```
