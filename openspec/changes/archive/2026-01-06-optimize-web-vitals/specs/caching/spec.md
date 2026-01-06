# Spec: Caching Configuration

## ADDED Requirements

### Requirement: Static Asset Caching Configuration
The application SHALL provide a standard web server configuration (e.g., Nginx) to enable long-lived caching for static assets in a self-hosted environment.

#### Scenario: Nginx Configuration Provided
- **Given** the source code
- **When** the project is prepared for deployment
- **Then** an `nginx.conf` (or similar) file should exist
- **And** it should contain rules to set `Cache-Control: public, max-age=31536000, immutable` for hashed assets and fonts.

#### Scenario: HTML Pages
- **Given** a request for an HTML page
- **When** the response is served
- **Then** the `Cache-Control` header SHOULD be `public, max-age=0, must-revalidate` (or similar) to prevent stale content.
