## MODIFIED Requirements
### Requirement: vehicle-buy-card-props
The `VehicleBuyCard` component MUST accept dynamic props for vehicle details, pricing, and description.

#### Scenario: Display vehicle information
- Given a `VehicleBuyCard` component
- When props `vehicleName="Suburban"`, `maxPassengers=6`, `maxLuggage=5`, `price=105`, `originalPrice=150`, `rating=5` are passed
- Then the component renders the vehicle name, capacity icons with labels, star rating, and both prices.
- **AND** the star rating MUST show the numeric value next to the icons (e.g., "5/5").

### Requirement: vehicle-buy-card-accessibility
The `VehicleBuyCard` component MUST be accessible.

#### Scenario: ARIA labels for icons
- Given the passenger capacity icon
- Then it MUST have an `aria-label` indicating "Up to {maxPassengers} Passengers".
- Given the star rating
- Then it MUST have an `aria-label` like "{rating} out of 5 stars".
- **AND** the numeric rating text MUST be clear to screen readers or marked as presentation if redundant.
