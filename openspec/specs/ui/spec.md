# ui Specification

## Purpose
TBD - created by archiving change refactor-feature-banner. Update Purpose after archive.
## Requirements
### Requirement: Unified Component Interface

The new `FeatureBanner.astro` component SHALL consolidate `TextCardHalf` and `TextCardSmall` interfaces.

#### Scenario: Supporting legacy props
GIVEN a developer uses `FeatureBanner`
WHEN they pass `structure` props like `contentKey`, `section`, `image`
AND optional overrides like `id`, `reverse`, `baseKey`, `fieldKey`, `imageAltKey`, `imageClass`
THEN the component renders correctly using these values.

### Requirement: Layout Modes

The component SHALL support `layout="grid"` and `layout="flex"` modes which affect CSS classes and responsive image sizes.

#### Scenario: Supporting Grid Mode
GIVEN a developer uses `FeatureBanner`
WHEN they pass `layout="grid"` (default)
THEN it renders with `grid grid-cols-1 md:grid-cols-2` classes
AND the image uses responsive sizes suitable for half-width.

#### Scenario: Supporting Flex Mode
GIVEN a developer uses `FeatureBanner`
WHEN they pass `layout="flex"`
THEN it renders with `flex flex-col md:flex-row` classes
AND the image uses responsive sizes suitable for 1/3 width (`md:w-1/2 lg:w-1/3`).

### Requirement: Handling Reverse

The component SHALL handle the `reverse` prop differently based on the active layout mode.

#### Scenario: Reverse in Grid
GIVEN `reverse={true}` is passed
WHEN layout is "grid"
THEN the image receives `md:order-last` class.

#### Scenario: Reverse in Flex
GIVEN `reverse={true}` is passed
WHEN layout is "flex"
THEN the container receives `md:flex-row-reverse` class.

### Requirement: Image Loading Strategy

The component SHALL support an optional `loading` prop to control image lazy loading.

#### Scenario: Defaults
GIVEN a developer uses `FeatureBanner`
WHEN they omit the `loading` prop
THEN it defaults to `loading="lazy"`.

#### Scenario: Eager Loading
GIVEN a developer uses `FeatureBanner`
WHEN they pass `loading="eager"`
THEN the underlying `Image` component renders with `loading="eager"`.

### Requirement: SEO and Accessibility
The page and components MUST follow strict SEO and accessibility guidelines.

#### Scenario: Image Attributes
All `<img>` tags (e.g., Stripe logo, vehicle image) must include `width`, `height`, and descriptive `alt` attributes to prevent Cumulative Layout Shift (CLS) and aid screen readers.

#### Scenario: Heading Hierarchy
The page maintains a strict `h1` -> `h2` -> `h3` hierarchy. No skipped levels.

#### Scenario: Semantic Landmarks
The content is wrapped in appropriate semantic landmarks (`<main>`, `<header>`, `<section>`, `<aside>` where applicable).

#### Scenario: Color Contrast
Text and background color combinations used in new components (BADGE, BUTTONS) meet WCAG AA contrast ratios.

### Requirement: Update `BookingSubmission` handle submit
The `BookingSubmission` component SHALL handle `paypal` and `card` payment methods by initializing the PayPal SDK buttons instead of immediate redirection.

#### Scenario: `BookingSubmission` handles `paypal` and `card` methods
- GIVEN the user selects `paypal` or `card`
- WHEN they click "Submit"
- THEN `createReservation` is called with the corresponding payment method
- AND if a `paypal_id` is received, the PayPal SDK buttons are rendered in `#paypal-button-container`
- AND the "Submit" button is hidden.

### Requirement: SDK `onApprove` calls capture
The frontend SHALL call the `capturePayment` endpoint after the user approves the payment via the PayPal SDK interface.

#### Scenario: PayPal approval triggers capture
- GIVEN the user approves the payment in the SDK UI
- WHEN the `onApprove` callback is executed
- THEN it must call `capturePayment` with the `orderID`
- AND if successful, redirect to the success page.

### Requirement: PayPal JS SDK Script Injection
The `Register.astro` page SHALL include the PayPal JS SDK script tag with the appropriate `client-id` and `currency`.

#### Scenario: SDK script in `Register.astro`
- GIVEN the `Register.astro` layout
- WHEN the page is rendered
- THEN it must include the `<script>` for the PayPal SDK with `client-id` and `currency=USD`

### Requirement: Shared Store-Managed `paypalId`
The `SearchFormStore` SHALL manage the `paypalId` state to synchronize the visibility of the payment selection list and the card payment form.

#### Scenario: Shared paypalId state
- **Definition**: The `SearchFormStore` MUST include a `paypalId` field (nullable string) and a `setPaypalId` action.
- **Given**: The user has not started a digital payment.
- **Then**: `paypalId` is initialized as null.
- **When**: `setPaypalId` is called with a value.
- **Then**: The state is updated across all components using the store.

### Requirement: Payment Selection Visibility Logic
The `PaymentMethods` component SHALL implement a "compact view" when a card payment order is active to optimize vertical space.

#### Scenario: Hide selection list for Card method
- **Given**: `paymentMethod` is set to `card`.
- **And**: `paypalId` in the store is NOT null.
- **Then**: The `PaymentMethods` title, intro text, and all individual `PaymentMethod` selection items SHALL be hidden.
- **And**: The "Back" button SHALL be rendered.

#### Scenario: "Back" Button for Method Selection
- **Given**: `paymentMethod` is set to `card`.
- **And**: `paypalId` in the store is NOT null.
- **When**: The user clicks the "Back" button.
- **Then**: `setPaypalId(null)` SHALL be called in the store.
- **And**: The original payment selection UI SHALL be restored.

### Requirement: Automatic Scroll to Summary
The UI SHALL automatically scroll to the top of the summary section when a card payment order is initialized to ensure optimal form positioning.

#### Scenario: Scroll when Card method becomes active
- **Given**: `paymentMethod` is set to `card`.
- **When**: `paypalId` in the store transitions from `null` to a non-null value.
- **Then**: The browser window SHOULD smoothly scroll to the top of the `SelectedVehicleCard` summary component.

### Requirement: Sticky Sidebar Layout
The registration page SHALL implement a "sticky" layout for the summary and payment sidebar on desktop to maintain visibility during form completion.

#### Scenario: Sticky sidebar on desktop
- **Given**: The user is viewing the registration page on a screen with width >= 1024px (`lg` breakpoint).
- **When**: The user scrolls down to fill the arrival or passenger details on the left.
- **Then**: The right-side column (summary, price, payment selection, and submit button) SHALL remain fixed (sticky) at the top of the viewport.
- **And**: The column SHALL NOT overlap with the page footer.

### Requirement: Responsive Summary Placement
The service summary SHALL be placed strategically based on the screen size to optimize the user flow.

#### Scenario: Placement on mobile
- **Given**: The user is on a screen with width < 1024px.
- **Then**: The `SelectedVehicleCard` SHALL be rendered at the very top of the form area, before any input sections.
- **And**: The price summary and payment selection SHALL follow after the form sections.

#### Scenario: Placement on desktop
- **Given**: The user is on a screen with width >= 1024px.
- **Then**: The `SelectedVehicleCard` SHALL be rendered at the top of the right-side sticky column.

