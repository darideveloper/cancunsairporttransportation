# Spec Delta: Performance Optimization

## ADDED Requirements

### Requirement: Image Optimization
The system SHALL use Astro's `<Image />` component for all above-the-fold assets to ensure proper compression, format conversion, and attribute optimization.

#### Scenario: Optimizing Home Banner
- **Given** the `home-banner.webp` is located in `src/assets/images/`
- **When** the homepage is rendered
- **Then** the banner image MUST be served via Astro's image service with `fetchpriority="high"`.

#### Scenario: Optimizing Responsive Images
- **Given** an image with displayed dimensions of 609x377
- **When** it is rendered with the `<Image />` component
- **Then** the generated source MUST include proper `srcset` and not exceed required resolutions.

### Requirement: Critical Path & Fonts
The system SHALL preload critical fonts to reduce Maximum Critical Path Latency and avoid Layout Shift.

#### Scenario: Preloading Inter Font
- **Given** the `Inter Variable` font is used for body text
- **When** the page loads
- **Then** a `<link rel="preload" ...>` tag MUST exist in the `<head>` for the `.woff2` file.

### Requirement: Hydration & JS
The system SHALL use static HTML or `client:visible` for non-primary interactive elements to reduce the initial JavaScript execution time.

#### Scenario: FAQ Item Implementation
- **Given** the requirement to show/hide content
- **When** the `FaqItem.astro` is rendered
- **Then** it MUST use the native HTML `<details>` element to provide the open/close feature without JavaScript.

### Requirement: Forced Reflow
Common geometric properties SHALL NOT be queried sequentially with style modifications to prevent forced reflows.

#### Scenario: Menu Toggle logic
- **Given** the mobile menu is toggled
- **When** CSS classes are updated
- **Then** the system MUST NOT perform layout-triggering reads in the same execution block.
