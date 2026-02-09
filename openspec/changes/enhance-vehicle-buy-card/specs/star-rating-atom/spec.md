# star-rating-atom Specification

## Purpose
Provide a reusable, accessible star rating component that eliminates code duplication between VehicleBuyCard and Testimonial components while maintaining consistent visual presentation and schema.org microdata support.

## ADDED Requirements

### Requirement: StarRating Atom Component
The project MUST include a `StarRating` atom component at `src/components/atoms/StarRating.astro` that displays star ratings consistently across the application.

#### Scenario: Component accepts rating value
- GIVEN a StarRating component
- WHEN rendered with a `rating` prop between 1 and 5
- THEN it MUST display the correct number of filled and empty stars
- AND it MUST use `FaStar` icons from `react-icons/fa`

#### Scenario: Accessibility support
- GIVEN a StarRating component is rendered
- THEN it MUST have `role="img"` on the container element
- AND it MUST have an `aria-label` describing the rating (e.g., "Rating: 4 out of 5 stars")
- AND individual star icons MUST have `aria-hidden="true"`

#### Scenario: Schema.org microdata support
- GIVEN a StarRating component with `withSchema={true}`
- THEN it MUST include `<meta itemprop="ratingValue" content={rating.toString()}>` 
- AND it MUST include `<meta itemprop="bestRating" content={maxRating.toString()}>`
- WHEN `withSchema={false}` or not provided
- THEN it MUST NOT include schema.org meta tags

### Requirement: Props Interface
The StarRating component MUST accept specific props for customization.

#### Scenario: Required and optional props
- GIVEN the StarRating component
- THEN it MUST accept a required `rating` prop of type `number`
- AND it MUST accept an optional `maxRating` prop of type `number` with default value `5`
- AND it MUST accept an optional `withSchema` prop of type `boolean` with default value `false`
- AND it MUST accept an optional `class` prop of type `string` for additional CSS classes

### Requirement: Visual Consistency
The StarRating component MUST maintain visual consistency with existing star rating implementations.

#### Scenario: Filled stars styling
- GIVEN a StarRating component with `rating={4}`
- THEN the first 4 stars MUST have the `text-accent` class
- AND the remaining stars MUST have the `text-gray-300` class

#### Scenario: Custom classes support
- GIVEN a StarRating component with `class="custom-class"`
- THEN the custom class MUST be applied to the container element
- AND it MUST be combined with base classes using `clsx`

### Requirement: Replace Inline Implementations
Existing components with inline star rating logic MUST be updated to use the StarRating atom.

#### Scenario: VehicleBuyCard uses StarRating
- GIVEN the VehicleBuyCard component
- WHEN it needs to display a rating
- THEN it MUST import and use the StarRating atom
- AND it MUST pass `withSchema={true}` for schema.org support
- AND it MUST NOT include inline star rating logic

#### Scenario: Testimonial uses StarRating
- GIVEN the Testimonial component
- WHEN it needs to display a rating
- THEN it MUST import and use the StarRating atom
- AND it MUST pass `withSchema={true}` for schema.org support
- AND it MUST wrap StarRating in the existing schema.org Rating div
- AND it MUST NOT include inline star rating logic
