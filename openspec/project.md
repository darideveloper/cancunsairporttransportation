# Project Context

## Purpose
Cancun Airport Transportation is a specialized booking platform for private shuttle and transportation services between Cancun International Airport (CUN) and various destinations (Hotels, AIRBNBs) in the Riviera Maya and beyond.

## Tech Stack
- **Framework**: Astro 5.x
- **UI Architecture**: Islands architecture using React 19 Components
- **Styling**: Tailwind CSS 4.x (Modern syntax with `@theme`)
- **State Management**: Zustand (for booking flow and cart state)
- **Internationalization (i18n)**: Route-based (`/[lang]/`) with JSON translation files in `src/messages/`
- **Fonts**: Metropolis (Titles), Inter Variable (Sans)
- **Content**: MDX for blog and static pages
- **Deployment**: Likely Vercel or Netlify (standard for Astro)

## Project Conventions

### Code Style
- **TypeScript**: Strict typing preferred for all data models (Pricing, Locations, Reservations).
- **Naming**: PascalCase for React/Astro components, camelCase for variables and functions.
- **React Components**: 
  - ALWAYS use standard function declarations: `export default function ComponentName() { ... }`.
  - NEVER use `React.FC` or `FC` types for component definitions.
  - NEVER use arrow function constants for top-level component exports.
- **Styling**:
  - Always use Tailwind CSS utility classes.
  - **Forbidden**: Do NOT use `<style>` blocks in Astro/React components.
  - **Class Handling**: Never use Astro `class:list` for complex or conditional classes. Always use `clsx` for consistency.
  - **Core Variables** (Available as Tailwind utilities):
    - Colors: `text/bg/border-accent`, `*-black`, `*-gray`, `*-gray-light`, `*-gray-dark`
    - Fonts: `font-title`, `font-sans`
- **Imports**: Clean imports, grouping internal and external libraries.

### Architecture Patterns
- **Islands Architecture**: Use React only for interactive elements (Booking Widget, Pricing Calculator). Keep the rest as static Astro components.
- **Translation Wrapper**: Use a helper or `t()` function linked to `src/messages/`.
- **Layouts**: Centralized `Layout.astro` for SEO and global assets.
- **Reuse First**: Always check `src/components/` (Atoms, Molecules, Organisms) before creating new components.
- **Evolution over Duplication**: If an existing component partially meets a requirement, refactor it with new props/slots rather than duplicating.

## SEO & Accessibility Standards
- **Semantic HTML**: Mandatory use of `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, and `<nav>`.
- **Heading Hierarchy**: Enforce a logical `h1` through `h6` structure; only one `h1` per page.
- **ARIA Labels**: Mandatory `aria-label` for all interactive elements lacking visible text (e.g., social icons, icon-only buttons).
- **Interactive Attributes**: Every interactive element MUST have a unique, descriptive `id`.
- **Micro-formats**: Use `tel:` for phone links and `mailto:` for email links.
- **Language Crawling**: Use standard `<a>` tags for language switching to ensure search engine discoverability.
- **Metadata**: Every route must have a unique `<title>` and `<meta name="description">`.


### Testing Strategy
- Focus on end-to-end testing for the booking funnel (Reservation process).
- Unit tests for pricing logic and distance calculations.

### Git Workflow
- Standard feature branching.
- Conventional Commits encouraged.

## Domain Context
- **Geography**: Primary zones include Downtown Cancun, Hotel Zone, Playa del Carmen, Tulum, and Akumal.
- **Service Types**: One-way, Round-trip, and Open-service (hourly).
- **Pricing**: Dynamic prices based on Zone ID and Vehicle Category.

## Important Constraints
- **Performance**: High priority on mobile performance for travelers booking on the go.
- **Reliability**: Booking state must be persistent and error-resistant.

## External Dependencies
- **Pricing Data**: Likely loaded from CSV/JSON or a CMS.
- **Payment Gateway**: Integration with Stripe for reservations.
- **Maps**: Google Maps API for location autocompletion and distance mapping.
