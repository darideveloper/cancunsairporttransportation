# form-updates Specification

## Purpose
TBD - created by archiving change submit-reservation. Update Purpose after archive.
## Requirements
### Requirement: Visual Hint for Required Inputs

`src/components/atoms/form/Input.tsx` and `src/components/atoms/form/PhoneInput.tsx` **MUST** visually indicate required fields.

#### Scenario: Required Field Hint
Given an Input or PhoneInput component
When `required` prop is true
Then the label should append an asterisk `*`.

```typescript
// src/components/atoms/form/Input.tsx

// ... inside component render
      <label htmlFor={name} className="mb-2 block font-bold">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
// ...
```

```typescript
// src/components/atoms/form/PhoneInput.tsx

// ... inside component render
      <label htmlFor={name} className="mb-2 block font-bold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
// ...
```

### Requirement: Arrival Information Optional Fields

`src/components/molecules/booking/ArrivalInformation.tsx` **MUST** make flight number and airline optional.

#### Scenario: Optional Flight Number
Given the ArrivalInformation form
When rendered
Then the `flightNumber` and `airline` inputs should NOT be marked as required.

```typescript
// src/components/molecules/booking/ArrivalInformation.tsx

// ... inside map function for fields
          {
            label: t("pages.register.arrivalInformation.airline"),
            // ...
            required: false, // Changed from true
          },
          {
            label: t("pages.register.arrivalInformation.flightNumber"),
            // ...
            required: false, // Changed from true
          },
// ...
```

