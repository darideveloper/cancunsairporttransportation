# Design: Vehicle Buy Card Component

## Architecture Overview

The `VehicleBuyCard` will be a molecule component that composes several atoms and uses conditional logic for pricing and ratings.

## Layout Structure

The card will be divided into four main functional areas as requested:

1.  **Vehicle Overview (Left/Top)**:
    - Vehicle Image (using `Image` from `astro:assets`)
    - Vehicle Name (`h3`)
    - Rating (Star system)
    - Capacity Icons (Passengers and Luggage)

2.  **Description and Features (Center)**:
    - Narrative description text
    - Bullet points for service inclusions (using `CheckListItem` atom)

3.  **Pricing Information (Right/Middle)**:
    - Original Price (Strikethrough)
    - Current Price (Bolded)
    - Pricing Unit ("Price per vehicle")

4.  **Action Element (Bottom Right)**:
    - "Book now" Button (using `ButtonCta` atom)

## Translation Strategy

The component will support dynamic props but will also use global translation keys for common labels:
- `global.ui.vehicleCard.maxPassengers`
- `global.ui.vehicleCard.maxLuggage`
- `global.ui.vehicleCard.priceFrom`
- `global.ui.vehicleCard.pricePerVehicle`
- `global.ui.vehicleCard.bookNow`

## SEO & Optimization

- **Image Optimization**: The `Image` component will be used with proper `width`, `height`, and `loading="lazy"`.
- **Generated Alt/Title**: `alt` and `title` for the image will be strings like "{vehicleName} Private Transportation from Cancun Airport".
- **Semantic HTML**:
  - `article` for the card container.
  - `h3` for the vehicle name.
  - `ul` for the item list.
  - `span` with `aria-label` for icons.

## Implementation Details

- **clsx**: Used for all conditional and complex classes.
- **Icon Library**: `react-icons` (FaUserFriends, FaSuitcase, FaStar).
- **Styles**: Initially, elements will have empty `class=""` as requested, focusing on HTML structure.
