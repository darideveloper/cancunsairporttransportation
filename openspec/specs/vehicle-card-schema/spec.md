# vehicle-card-schema Specification

## Purpose
TBD - created by archiving change enhance-vehicle-buy-card. Update Purpose after archive.
## Requirements
### Requirement: Product Schema Microdata
The VehicleBuyCard component MUST include schema.org Product microdata on the article element.

#### Scenario: Product markup structure
- GIVEN a VehicleBuyCard component is rendered
- THEN the `<article>` element MUST have `itemscope` attribute
- AND it MUST have `itemtype="https://schema.org/Product"` attribute
- AND it MUST have an `aria-labelledby` attribute referencing a unique card ID

#### Scenario: Product name markup
- GIVEN a VehicleBuyCard component is rendered
- THEN the vehicle name `<h3>` element MUST have `itemprop="name"` attribute
- AND it MUST have a unique `id` attribute generated using `generateId("vehicle-card", vehicleName)`
- AND this ID MUST match the `aria-labelledby` value on the article element

#### Scenario: Product description markup
- GIVEN a VehicleBuyCard component is rendered
- THEN the description `<p>` element MUST have `itemprop="description"` attribute

### Requirement: AggregateRating Schema Microdata
The VehicleBuyCard component MUST include schema.org AggregateRating microdata for the rating section.

#### Scenario: Rating wrapper markup
- GIVEN a VehicleBuyCard component displays a rating
- THEN the rating section MUST be wrapped in a `<div>` with `itemprop="aggregateRating"`
- AND this div MUST have `itemscope` attribute
- AND this div MUST have `itemtype="https://schema.org/AggregateRating"` attribute

#### Scenario: Rating value metadata
- GIVEN the StarRating component is used with `withSchema={true}`
- THEN it MUST include `<meta itemprop="ratingValue">` with the rating value
- AND it MUST include `<meta itemprop="bestRating">` with the maximum rating value

### Requirement: Offer Schema Microdata
The VehicleBuyCard component MUST include schema.org Offer microdata for the pricing section.

#### Scenario: Offer wrapper markup
- GIVEN a VehicleBuyCard component displays pricing
- THEN the pricing section MUST be wrapped in a `<div>` with `itemprop="offers"`
- AND this div MUST have `itemscope` attribute
- AND this div MUST have `itemtype="https://schema.org/Offer"` attribute

#### Scenario: Price metadata
- GIVEN a VehicleBuyCard component displays a price
- THEN it MUST include `<meta itemprop="price" content={price.toString()}>` inside the offers div
- AND it MUST include `<meta itemprop="priceCurrency" content={getCurrencyCode(lang).toUpperCase()}>` inside the offers div
- AND it MUST include `<meta itemprop="availability" content="https://schema.org/InStock">` inside the offers div

### Requirement: Unique ID Generation
The VehicleBuyCard component MUST generate unique IDs for accessibility and testing.

#### Scenario: Import generateId utility
- GIVEN the VehicleBuyCard component
- THEN it MUST import `generateId` from `../../lib/utils`

#### Scenario: Generate unique card ID
- GIVEN a VehicleBuyCard component with `vehicleName="Private Transportation"`
- WHEN the component is rendered
- THEN it MUST generate a unique ID using `generateId("vehicle-card", vehicleName)`
- AND this ID MUST be used for both the `id` attribute on the h3 and `aria-labelledby` on the article

### Requirement: Schema Validation
The schema.org markup MUST be valid and detectable by search engines.

#### Scenario: Valid Product schema
- GIVEN a page with VehicleBuyCard component
- WHEN validated with Google Rich Results Test
- THEN it MUST detect a valid Product type
- AND it MUST detect a valid Offer within the Product
- AND it MUST detect a valid AggregateRating within the Product

