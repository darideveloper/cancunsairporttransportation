## Context
The current registration layout is inefficient for large screens, leaving significant whitespace on the right while being vertically very long on the left.

## Goals
- Fill the empty space on the right sidebar.
- Keep the service summary visible during the entire checkout process.
- Reduce the initial vertical height of the main form sections.

## Decisions
- **Decision: Sticky Sidebar Container**: Wrap the right-side components in a `div` with `sticky top-4 h-fit` to ensure they follow the scroll.
- **Decision: Sidebar-Optimized Summary**: Modify `SelectedVehicleCard` to use `flex-col` exclusively when placed in a narrow container, moving away from its current `md:flex-row` default which would overflow a 1/3 sidebar.
- **Decision: Order of Elements**: The sidebar will display: `SelectedVehicleCard` (visual), `BookingSummary` (price), `PaymentMethods` (selection), and `BookingSubmission` (action).

## Risks / Trade-offs
- **Mobile Layout**: On mobile, the sidebar elements must continue to stack below the main form to avoid horizontal scroll issues. We will use `flex-col lg:flex-row` and ensure the summary card remains at the top on mobile for quick verification.
- **Height Overlap**: If the left form is shorter than the sticky sidebar (rare), the sidebar might extend past the footer. We'll use `h-fit` and a proper parent container to contain it.
