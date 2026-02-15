# Design: Store Structure for Client Information

The client's booking information acts as supplemental data to the existing search parameters. We are opting to flatten this into the `search-form` store for simplicity, maintaining single-source-of-truth for the entire booking context.

## State Changes

### Interface

```typescript
export interface SearchFormState {
  // Existing...
  tripType: "oneWay" | "roundTrip";
  // ...

  // Client Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;

  // Setters
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setNotes: (notes: string) => void;
}
```

### Initial State

```typescript
{
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  notes: "",
}
```

### Persistence

The persistence middleware (`persist` and `partialize`) will ensure these fields survive page reloads or navigation.
