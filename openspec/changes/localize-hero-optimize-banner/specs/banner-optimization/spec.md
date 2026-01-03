# Banner Optimization Specs

## MODIFIED Requirements

### Requirement: Image Optimization
The banner image MUST be optimized for performance and SEO.

#### Scenario: Use of Astro Image Component
- **Given** the `BannerImage` component
- **When** it renders the background image
- **Then** it MUST use the `astro:assets` `<Image />` component.
- **And** it MUST NOT use a CSS `background-image` style for the main visual.

#### Scenario: Eager Loading
- **Given** the banner image is the Largest Contentful Paint (LCP) element
- **When** it renders
- **Then** the `loading` attribute MUST be set to `"eager"`.

#### Scenario: Responsive Sizing
- **Given** the `BannerImage` component
- **When** it renders
- **Then** the image MUST cover the container (`object-cover`) and be positioned absolutely to act as a background.
