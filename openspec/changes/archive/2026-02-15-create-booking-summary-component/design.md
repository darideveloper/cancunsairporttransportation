# Booking Summary Design

## Architecture

The `BookingSummary` component is a presentational molecule that:
1.  Subscribes directly to `useSearchFormStore` to access the `selectedVehicle` state.
2.  Uses `useTranslations` for localized text strings.
3.  Renders a static summary view with no internal interactive state (radio button is for display only).

### Integration
- **Store**: Reads `selectedVehicle` and `currency` from `search-form`.
- **Styling**: Uses Tailwind classes with `clsx` for conditional rendering (though mostly static).
- **Icons**: Uses `react-icons` (e.g., `FaCar`).

## Logic
- Formatting: Uses `Intl.NumberFormat` for currency display based on the selected currency (USD vs MXN).
- Fallback: Does not render if `selectedVehicle` is null (or renders a simplified empty state if required, though spec assumes data exists).
