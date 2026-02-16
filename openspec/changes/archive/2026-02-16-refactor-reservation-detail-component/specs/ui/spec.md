# UI Specifications

## ADDED Requirements

### Requirement: Reservation Status Badge Component
The `ReservationStatusBadge` component SHALL unify the visual representation of reservation states across the application.

#### Scenario: Renders Confirmed Status
Given the status is 'CONFIRMED', the component renders a badge with `text-blue border-blue` (or `text-accent` if unifying to brand color) styling to match the design.

#### Scenario: Renders Different Statuses
Given other statuses (e.g. 'PENDING', 'CANCELLED'), the component applies appropriate semantic colors (e.g. yellow, red).

### Requirement: Reservation Header Component
The `ReservationHeader` component SHALL encapsulate the top section of the reservation detail page.

#### Scenario: Displays User Information
The component renders the user's greeting, phone number, and email address using semantic markup and proper icons.

#### Scenario: Includes Status Badge
The component integrates the `ReservationStatusBadge` to show the current reservation status alongside user details.

#### Scenario: H1 Heading
The component contains the main H1 heading for the page, ensuring it is the first heading in the semantic hierarchy.

### Requirement: Reservation Details List Component
The `ReservationDetailsList` component SHALL display the core reservation data (Code, Service, Passengers, Dates, Locations).

#### Scenario: Semantic Structure
The component uses a Description List (`<dl>`) with `<dt>` for labels and `<dd>` for values, replacing the generic table structure where appropriate for key-value pairs. Alternatively, uses a semantic `<table>` with `scope="row"` headers.

#### Scenario: Data Presentation
Renders all relevant fields: Reservation Code, Service Type, Passenger Count, From/To Locations, and Pickup Date.

### Requirement: Payment Update Action Component
The `PaymentUpdateAction` component SHALL prompt the user to update their payment method or details.

#### Scenario: Rendering
Renders a highlighted section (e.g., `bg-blue/10`) with a clear call-to-action button.

#### Scenario: Responsive Design
Adapts layout for mobile (stacked) vs desktop (row) to match existing responsive behavior.

## ADDED Requirements

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
