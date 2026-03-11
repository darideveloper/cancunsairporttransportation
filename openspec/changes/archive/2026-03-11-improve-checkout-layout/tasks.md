## 1. Implementation
- [x] 1.1 **Update `SelectedVehicleCard` Layout**: Modify the component to accept a `variant` prop (default/sidebar) or automatically adjust to a narrower `flex-col` layout when its parent container dictates it.
- [x] 1.2 **Refactor `RegisterForm` Structure**:
    - [x] Move `<SelectedVehicleCard />` from above the flex-container into the `right` sidebar `div`.
    - [x] Add `lg:sticky lg:top-4 lg:h-fit` classes to the `right` sidebar to make it sticky on desktop.
    - [x] Adjust the spacing and gap between sidebar components for better visual separation.
- [x] 1.3 **Adjust Responsive Behavior**:
    - [x] Ensure the summary card appears *above* the main form on mobile (`flex-col` default).
    - [x] Verify that the `sticky` behavior is correctly disabled on mobile.
- [x] 1.4 **Optimize Vertical Space**:
    - [x] Update the `BookingSummary` to be more compact if necessary when paired with the vehicle card.

## 2. Validation
- [x] 2.1 Run `openspec validate --strict` to ensure spec compliance.
- [x] 2.2 Verify layout on mobile, tablet, and desktop (using Playwright or manual check).
- [x] 2.3 Confirm that selecting "Card" payment correctly renders the form below the sticky summary.
