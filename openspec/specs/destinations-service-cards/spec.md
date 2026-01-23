# destinations-service-cards Specification

## Purpose
TBD - created by archiving change add-destinations-service-cards. Update Purpose after archive.
## Requirements
### Requirement: Service Cards Display
The Destinations page MUST display 3 service benefit cards highlighting key transportation features.

#### Scenario: Rendering Service Cards
- **Given** a user visits the Destinations page (`/destinations` or `/es/destinos`)
- **When** the page loads
- **Then** 3 BasicImageCard components should render with service benefits
- **And** each card displays an icon image (pyramid, excursion, car-seat)
- **And** each card shows a title and descriptive text
- **And** content is displayed in the appropriate language (English or Spanish)

#### Scenario: Service Card Content
- **Given** the 3 service cards are rendered
- **When** viewing in English
- **Then** the first card shows "Travel with Confidence" with pyramid icon
- **And** the second card shows "Transportation Service" with excursion icon
- **And** the third card shows "Complete Comfort" with car-seat icon
- **When** viewing in Spanish
- **Then** the first card shows "Viaja con Confianza" with pyramid icon
- **And** the second card shows "Servicio de Transportación" with excursion icon
- **And** the third card shows "Comodidad Completa" with car-seat icon

### Requirement: Translation Integration
Service card content MUST be fully translatable through the i18n system.

#### Scenario: Translation Keys Structure
- **Given** the translation system
- **When** accessing service card translations
- **Then** keys should exist under `pages.destinations.serviceCards`
- **And** each card (confidence, transportation, comfort) has `title`, `text`, `imageAlt`, and `imageTitle` keys
- **And** all keys exist in both `en.json` and `es.json`

#### Scenario: Dynamic Content Rendering
- **Given** a BasicImageCard component for a service card
- **When** the component renders
- **Then** it should use `t()` function to retrieve translated content
- **And** the translation key pattern should be `pages.destinations.serviceCards.{cardId}.{property}`
- **And** the page variable should be set to "destinations"

### Requirement: Accessibility and SEO
Service cards MUST follow accessibility and SEO best practices.

#### Scenario: Image Metadata
- **Given** each service card image
- **When** rendered in the DOM
- **Then** it MUST have a descriptive `alt` attribute from translations
- **And** it MUST have a `title` attribute from translations
- **And** alt text should describe the icon's meaning, not just "icon"
- **And** images should use appropriate dimensions (64x64 as per BasicImageCard spec)

#### Scenario: Semantic HTML
- **Given** the service cards section
- **When** inspecting the HTML structure
- **Then** each card should use `<article>` tag (from BasicImageCard)
- **And** each card should have an `aria-labelledby` attribute
- **And** titles should use `<h3>` tags (from BasicImageCard)
- **And** the section should maintain proper heading hierarchy

### Requirement: Visual Layout
Service cards MUST be displayed in a responsive grid layout consistent with the page design.

#### Scenario: Responsive Grid
- **Given** the 3 service cards
- **When** viewing on desktop
- **Then** cards should display in a horizontal grid (3 columns or similar)
- **When** viewing on tablet
- **Then** cards should adapt to a 2-column or stacked layout
- **When** viewing on mobile
- **Then** cards should stack vertically (1 column)

#### Scenario: Spacing and Positioning
- **Given** the service cards section
- **When** viewing the Destinations page
- **Then** service cards should appear after the destination pricing cards
- **And** service cards should appear before or after the existing highlights (reserve/contact)
- **And** cards should have consistent spacing with other page sections (mt-6 or similar)

