# Design: Convert VehicleBuyCard to React

## Strategy
We will perform a leaf-to-root conversion. First, the simplest atomic components will be converted to React, then the molecule that uses them.

### Atomic Components (`src/components/atoms/`)
- **ButtonCta.tsx**:
    - Prop `href` determines if it renders an `<a>` or `<button>`.
    - Uses `children` instead of `<slot />`.
    - Maintains the same variant styling.
- **CheckListItem.tsx**:
    - Receives `text` and `Icon`.
- **StarRating.tsx**:
    - Renders stars based on `rating`.
    - Supports `withSchema` for microdata.

### Molecule Component (`src/components/molecules/`)
- **VehicleBuyCard.tsx**:
    - Converts `VehicleBuyCard.astro` logic to React.
    - Receives labels/translations as props:
        - `paxLabel` (e.g., "Passengers")
        - `luggageLabel` (e.g., "Luggage")
        - `priceFromLabel` (e.g., "Price From")
        - `perVehicleLabel` (e.g., "per vehicle")
        - `saveLabel` (e.g., "Save")
        - `bookNowLabel` (e.g., "Book Now")
    - This approach keeps the component "pure" and decoupled from Astro-specific i18n utilities.

### i18n Integration
The parent Astro component (e.g., `Results.astro`) will resolve translations using `useTranslations` and pass the required strings to `VehicleBuyCard.tsx`.

### SEO and Schema.org
- React components will render the same `itemscope`, `itemtype`, and `itemprop` attributes.
- Image `alt` and `title` attributes will be generated similarly in the component's logic.
