# Client Details in Booking Store

The booking store must capture all personal client information required for a reservation.

## ADDED Requirements

### Requirement: Store Interface Updates
The `SearchFormState` interface MUST include fields for first name, last name, email, phone, and notes.

#### Scenario: Interface contains required fields
   - **Given** a developer inspects `SearchFormState`
   - **Then** `firstName` is present as a string
   - **And** `lastName` is present as a string
   - **And** `email` is present as a string
   - **And** `phone` is present as a string
   - **And** `notes` is present as a string

### Requirement: Store Actions
The store MUST provide setter actions for each new field.

#### Scenario: Updating client information
   - **Given** the store is initialized
   - **When** `setFirstName("John")` is called
   - **Then** `firstName` state is "John"
   - **When** `setLastName("Doe")` is called
   - **Then** `lastName` state is "Doe"
   - **When** `setEmail("john@example.com")` is called
   - **Then** `email` state is "john@example.com"
   - **When** `setPhone("555-1234")` is called
   - **Then** `phone` state is "555-1234"
   - **When** `setNotes("Fragile luggage")` is called
   - **Then** `notes` state is "Fragile luggage"

### Requirement: Data Persistence
The persistence layer MUST save these new fields.

#### Scenario: Client info persists across sessions
   - **Given** a user sets their `firstName` and `email`
   - **When** the user refreshes the page (simulated by re-initializing store from storage)
   - **Then** `firstName` and `email` retain their values
