# Proposal: Add Vehicle Buy Card Component

This proposal introduces a new component for the results page called `VehicleBuyCard`. This component will be used to display transportation options (vehicles) with their details, pricing, and a call-to-action to book.

## Problem Statement

The results page needs a clean, information-rich card to present various vehicle options to the user. Each card must display the vehicle's image, name, capacity, rating, description, service inclusions, and pricing.

## Proposed Solution

Create a new molecule component `VehicleBuyCard.astro` that follows the project's design system and i18n patterns.

### Component Details: VehicleBuyCard (Molecule)

- **Location**: `src/components/molecules/VehicleBuyCard.astro`
- **Props**:
  ```typescript
  interface Props {
    vehicleImage: string;
    vehicleName: string;
    maxPassengers: number;
    maxLuggage: number;
    price: number;
    originalPrice: number;
    rating: number; // 1 to 5
    description: string;
    items: string[];
    currency?: string;
  }
  ```
- **SEO Features**:
  - Image `title` and `alt` tags auto-generated based on vehicle name and keywords.
  - Semantic HTML structure (`article`, `header`, `footer`).
  - ARIA labels for ratings and capacity icons.

## Relationship with other changes

- This component will be integrated into the `Results.astro` page.
- It will use existing atoms like `ButtonCta` and `CheckListItem` (or refactored version).

## Risks & Mitigations

- **Complexity**: The card has many data points. Mitigation: Use a clear grid/flex layout and sub-components.
- **Responsiveness**: Needs to look good on mobile and desktop. Mitigation: Follow Tailwind's mobile-first approach.
