# Capability: Performance Metrics

## ADDED Requirements

### Requirement: Optimized Font Loading
The system SHALL load critical fonts in parallel with the initial CSS to minimize the critical path latency.

#### Scenario: Preloading Critical Weights
- **Given** the user visits any page
- **When** the HTML is parsed
- **Then** the browser should find `<link rel="preload">` tags for `inter-latin-wght-normal.woff2` and `metropolis-latin-700-normal.woff2`
- **And** these fonts should be defined using manual `@font-face` rules in the global stylesheet.

### Requirement: LCP Element Cleanliness
The LCP (Largest Contentful Paint) element SHALL be free of debugging and placeholder styles that could impact layout calculation or visual stability.

#### Scenario: Remove Debug Styles
- **Given** the homepage is rendered
- **When** the `<h1>` element is inspected
- **Then** it should not have the `debug` class
- **And** it should not have temporary height classes like `h-[120vh]`.

### Requirement: External Origin Handshakes
The system SHALL establish early connections to trusted external domains to speed up subsequent requests.

#### Scenario: Preconnect Hints
- **Given** the application uses external services (e.g. Maps, Analytics)
- **When** the page loads
- **Then** the `<head>` should contain `<link rel="preconnect">` for those domains.
