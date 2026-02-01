# Design: SEO Metadata Enhancements

## 1. Schema Strategy

We will move away from the global `LocalBusiness` schema for everything and adopt a more specific strategy:

| Page Type | Component Example | JSON-LD Type | Rationale |
| :--- | :--- | :--- | :--- |
| **Destinations** | `Tulum.astro`, `Akumal.astro` | `TouristDestination` (or `Place`) | Represents a location users visit. |
| **Services** | `Taxi.astro`, `Luxury.astro` | `Service` (or `Product`) | Represents a service being sold. |
| **General** | `Home.astro`, `Contact.astro` | `LocalBusiness` | Remains the default for the brand. |

### Schema Properties & BaseSEO Adjustments
**Critical Note**: `BaseSEO.astro` currently hardcodes use of `LocalBusiness` properties (e.g., `openingHoursSpecification`, `priceRange`, `email`, `telephone`). These are **invalid** for `TouristDestination` schemas.

**Validation Logic**:
-   **LocalBusiness**: Keep existing properties.
-   **TouristDestination**: Exclude `openingHours`, `priceRange`, `email`, `telephone`. Include `name`, `description`, `image`.
-   **Service**: Exclude `openingHours` (unless service-specific). Include `provider` (referencing the business), `areaServed`.

We must refactor `BaseSEO.astro` to conditionally build the `baseSchema` object based on the `jsonType`.

## 2. Dynamic Social Images

Currently, `PageSEO` accepts an `ogImage` prop. We need to explicitly pass the page's main hero image (which is already imported in the page component) to this prop.

**Component Changes:**
-   **Import**: Use the existing imported image (e.g., `import safeTripBookingImg from ...`).
-   **Pass Prop**: `<PageSEO currentPage={page} ogImage={safeTripBookingImg.src} ... />`

## 3. Keywords Implementation

The translation structure `src/messages/*.json` needs to be updated.
Currently:
```json
"pages": {
    "home": {
        "title": "...",
        "description": "...",
        "keywords": "..." // Exists
    },
    "tulum": {
        "title": "...",
        "description": "..." // keywords MISSING
    }
}
```

**New Structure**:
We will iterate through all page keys in `pages` and ensure a `keywords` key exists.

## 4. Component Interfaces

The `PageSEO` component already accepts `jsonType` and `ogImage`. No internal changes to `PageSEO` are seemingly required, only its *usage* in parent components needs to update.

`BaseSEO` logic for `ogImage`:
```javascript
const socialImage = ogImage || BUSINESS_DATA.logo;
```
This logic holds. If we pass the specific image, it overrides the logo.
