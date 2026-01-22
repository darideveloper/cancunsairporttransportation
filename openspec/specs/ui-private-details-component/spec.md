# ui-private-details-component Specification

## Purpose
TBD - created by archiving change create-private-details-component. Update Purpose after archive.
## Requirements
### Requirement: Private Details Component Structure
The system SHALL provide a PrivateDetails organism component that displays pricing and service information for private airport transfers.

#### Scenario: Component renders with all sections
- **WHEN** the PrivateDetails component is rendered on a page
- **THEN** it SHALL display a title section using SectionHeading component
- **AND** it SHALL display markdown-rendered descriptive text
- **AND** it SHALL display a pricing table with five columns
- **AND** it SHALL display a "Book Now" call-to-action button

#### Scenario: Component uses existing design system
- **WHEN** the PrivateDetails component is implemented
- **THEN** it SHALL reuse the SectionHeading molecule component for the title
- **AND** it SHALL reuse the ButtonCta atom component for the call-to-action
- **AND** it SHALL use only Tailwind CSS utility classes for styling
- **AND** it SHALL NOT include any `<style>` blocks

### Requirement: Pricing Table Display
The system SHALL render a pricing table with structured data showing service routes and pricing.

#### Scenario: Table has correct column structure
- **WHEN** the pricing table is rendered
- **THEN** it SHALL display five columns: Arrival, Departure, One Way, Round Trip, and Capacity
- **AND** each column SHALL have a proper `<th scope="col">` header
- **AND** the table SHALL include a visually hidden `<caption>` for screen readers

#### Scenario: Table displays pricing data
- **WHEN** pricing data is provided in translation files
- **THEN** the table SHALL render rows for each pricing entry
- **AND** each row SHALL display arrival location, departure location, one-way price, round-trip price, and passenger capacity
- **AND** the data SHALL be sourced from `pages.privateAirportTransfer.privateDetails.table` in translation files

#### Scenario: Table is responsive
- **WHEN** the table is viewed on mobile devices
- **THEN** it SHALL be horizontally scrollable to prevent content overflow
- **AND** it SHALL maintain a minimum width of 600px for readability
- **AND** it SHALL display properly on desktop without scrolling

### Requirement: Markdown Content Rendering
The system SHALL parse and render markdown content for the component description.

#### Scenario: Markdown is parsed at build time
- **WHEN** the component is built
- **THEN** it SHALL use the `marked` library to parse markdown content
- **AND** the markdown SHALL be converted to HTML at build time (not runtime)
- **AND** the HTML SHALL be rendered using Astro's `set:html` directive

#### Scenario: Markdown supports rich formatting
- **WHEN** markdown content includes formatting (bold, italic, links, lists)
- **THEN** the rendered HTML SHALL preserve all formatting
- **AND** the output SHALL be SEO-friendly with proper semantic HTML

### Requirement: Call-to-Action Functionality
The system SHALL provide a call-to-action button that navigates to the booking form.

#### Scenario: CTA button links to booking form
- **WHEN** the "Book Now" button is clicked
- **THEN** it SHALL navigate to the `#booking-form` anchor on the same page
- **AND** it SHALL use smooth scroll behavior
- **AND** it SHALL NOT open a new page or tab

#### Scenario: CTA uses existing component
- **WHEN** the CTA is implemented
- **THEN** it SHALL use the ButtonCta atom component
- **AND** it SHALL receive text and href props from translation data
- **AND** it SHALL be keyboard accessible

### Requirement: Internationalization Support
The system SHALL support both English and Spanish translations for all component content.

#### Scenario: Translation data structure
- **WHEN** translation files are configured
- **THEN** both `src/messages/en.json` and `src/messages/es.json` SHALL include `pages.privateAirportTransfer.privateDetails` structure
- **AND** the structure SHALL include title, description, table data, and CTA text
- **AND** the component SHALL automatically use the correct language based on the current page locale

#### Scenario: Component retrieves translated content
- **WHEN** the component is rendered
- **THEN** it SHALL use the `useTranslations` utility to retrieve content
- **AND** it SHALL use the `getLangFromUrl` utility to determine the current language
- **AND** all displayed text SHALL be in the appropriate language

### Requirement: Accessibility Compliance
The system SHALL implement the PrivateDetails component with full WCAG 2.1 AA accessibility compliance.

#### Scenario: Semantic HTML structure
- **WHEN** the component is rendered
- **THEN** it SHALL use a `<section>` element with a unique `id` attribute
- **AND** it SHALL include `aria-labelledby` pointing to the heading ID
- **AND** the table SHALL use proper semantic elements (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`)

#### Scenario: Screen reader support
- **WHEN** accessed by screen readers
- **THEN** the table caption SHALL provide context (using `sr-only` class for visual hiding)
- **AND** all column headers SHALL have `scope="col"` attributes
- **AND** the component SHALL maintain proper heading hierarchy (H2 for title, H3 for table title)

#### Scenario: Keyboard navigation
- **WHEN** navigating with keyboard only
- **THEN** the CTA button SHALL be focusable and activatable with Enter/Space keys
- **AND** there SHALL be no keyboard traps
- **AND** focus indicators SHALL be visible

### Requirement: Responsive Design
The system SHALL ensure the PrivateDetails component is fully responsive across all device sizes.

#### Scenario: Mobile layout
- **WHEN** viewed on mobile devices (< 768px)
- **THEN** the component SHALL use the container pattern with horizontal padding
- **AND** the table SHALL be wrapped in a horizontally scrollable container
- **AND** text SHALL be readable without zooming

#### Scenario: Desktop layout
- **WHEN** viewed on desktop devices (> 1024px)
- **THEN** the component SHALL display the full table width without scrolling
- **AND** spacing SHALL be optimized for larger screens
- **AND** the CTA button SHALL be prominently displayed

### Requirement: Performance Optimization
The system SHALL implement the PrivateDetails component with optimal performance characteristics.

#### Scenario: Static rendering
- **WHEN** the page is built
- **THEN** the component SHALL be rendered as static HTML
- **AND** it SHALL NOT require JavaScript for core functionality
- **AND** markdown parsing SHALL occur at build time, not runtime

#### Scenario: Minimal bundle impact
- **WHEN** the component is added to a page
- **THEN** it SHALL reuse existing components to minimize bundle size
- **AND** it SHALL use Tailwind CSS utilities (purged in production)
- **AND** it SHALL NOT add unnecessary dependencies

### Requirement: Page Integration
The system SHALL integrate the PrivateDetails component into the private-airport-transfer-cancun page.

#### Scenario: Component placement
- **WHEN** the private-airport-transfer-cancun page is rendered
- **THEN** the PrivateDetails component SHALL be imported and rendered
- **AND** it SHALL be placed in an appropriate position within the page layout
- **AND** the booking form SHALL have an `id="booking-form"` attribute for CTA anchor linking

#### Scenario: Component isolation
- **WHEN** the component is rendered on the page
- **THEN** it SHALL NOT interfere with other page components
- **AND** it SHALL maintain consistent spacing with surrounding sections
- **AND** it SHALL follow the page's overall design language

