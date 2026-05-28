## MODIFIED Requirements

### Requirement: Store Interface Updates
The `SearchFormState` interface MUST include fields for first name, last name, email, phone, notes, and a constrained `paymentMethod`.

#### Scenario: Interface contains required fields
   - **Given** a developer inspects `SearchFormState`
   - **Then** `firstName` is present as a string
   - **And** `lastName` is present as a string
   - **And** `email` is present as a string
   - **And** `phone` is present as a string
   - **And** `notes` is present as a string
   - **And** `paymentMethod` is present and restricted to `"paypal" | "card"` (excluding `"cash"`)
   - **And** the `bookingRegistrationSchema` Zod validation schema MUST explicitly enforce `paymentMethod` is one of `["paypal", "card"]`.
