# Spec: Reservation UI Conversion

## MODIFIED Requirements

### Requirement: Client-Side Data Loading
The Reservation Detail page SHALL load reservation data on the client side to bypass SSG limitations for user-specific data.

#### Scenario: Client-Side Rendering
Given the user is on the Reservation Detail page
When the page loads
Then it should initially show a loading state
And then display the `ReservationDetailClient` component with data fetched for the stored user

### Requirement: Component Parity
Converted React components MUST match the original Astro components in appearance and behavior.

#### Scenario: React Component Conversion
Given the existing Astro components (`ReservationHeader`, etc.)
When converted to React
Then they should maintain the exact same visual design and `clsx` usage
And accept the same props (typed strictly) as the original components
