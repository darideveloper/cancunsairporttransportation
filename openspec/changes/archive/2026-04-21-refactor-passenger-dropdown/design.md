# Design: Refactor Passenger Input to Dropdown

## Architectural Overview
The `PassengerInput` component is a functional React component used within the `BookingForm`. It interfaces with the `useSearchFormStore` to manage the global `passengers` state.

## Component Design
The component will be refactored to use a native `<select>` element.

### HTML Structure
```tsx
<div className="input-container">
  <label htmlFor={id}>{label}</label>
  <div className="relative">
    <select
      id={id}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      className={clsx(
        "focus:border-accent focus:ring-accent inline-block w-full rounded-lg border border-gray-300 bg-white py-3 pl-3 pr-10 transition-all outline-none focus:ring-2 appearance-none",
        disabled && "cursor-not-allowed opacity-50"
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23333333'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0.75rem center',
        backgroundSize: '1.5rem',
      }}
    >
      {/* Options 1-25 */}
    </select>
  </div>
</div>
```

### Rationale
- **Native Select**: Native select elements provide the best accessibility and user experience on mobile devices.
- **Custom Arrow**: Since `appearance: none` is applied globally in `global.css`, a custom SVG background icon is added to ensure users recognize the field as a dropdown.
- **Styling**: `pl-3 pr-10` ensures padding for the text and the custom arrow icon.
- **Range**: Restricting the range to 1-25 matches the backend capability and avoids user error.

## Alternatives Considered
- **Custom Dropdown (Radix/Headless UI)**: Rejected for this iteration to keep it simple and leverage native mobile pickers, which is a key requirement for "making it work in all devices".
- **Number Input with Validation**: Rejected because it's less user-friendly on mobile where typing numbers is more cumbersome than selecting from a list.
