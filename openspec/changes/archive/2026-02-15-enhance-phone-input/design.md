# Design: Phone Input Component

## Architecture
We will introduce a new `PhoneInput` atom in `src/components/atoms/form/PhoneInput.tsx`.
It will accept similar props to `Input.tsx`: `label`, `name`, `value`, `onChange`, `error`, `placeholder`, `disabled`, `required`.

It will wrap `react-phone-number-input`.

## Styling Strategy
The `react-phone-number-input` library provides CSS variables for styling.
However, to match our exact Tailwind `Input` style (`rounded-lg border border-gray-300 py-3 pr-3 ...`), we might need more control.

We will wrap the library's `PhoneInput` component in a container that mimics our `Input` styling:
- Container: applies the border, rounded corners, focus ring, etc. (using `focus-within` on the container).
- Inner `PhoneInput`:
  - `PhoneInputCountry`: handles the flag dropdown.
  - `PhoneInputInput`: handles the text input. We make this transparent so the outer container provides the visual border.

Alternatively, we can pass a styled input component to `PhoneInput`. But `PhoneInput` renders the country select outside the input component. If we want them side-by-side inside one border, the wrapper container approach is best.

So:
```tsx
<div className="input-container-classes focus-within:ring-2 ...">
  <PhoneInput
    international
    defaultCountry="US"
    value={value}
    onChange={onChange}
    className="flex items-center" // Ensure flex layout
    numberInputProps={{ className: "border-none bg-transparent outline-none w-full" }} // Remove inner input styles
  />
</div>
```

The `styles/global.css` will be updated to import `react-phone-number-input/style.css` (or we import it in the component if using CSS modules, but global is fine here as it's small).

## Implementation Details
1.  **New Component**: `src/components/atoms/form/PhoneInput.tsx`.
2.  **Usage**: Updates `src/components/molecules/booking/PassengerInformation.tsx` to import and use `PhoneInput` instead of `Input`.
3.  **State**: `PhoneInput` returns the value as E.164 string (e.g. `+12133734253`). Our `useSearchFormStore` expects a string for `phone`. This is compatible.
4.  **Preferred Countries**: We will pass `countries={['US', 'GB', 'ES', 'MX']}` as `preferredCountries` prop (or similar depending on API version, the prompt says `preferredCountries`). The prompt says `limitMaxLength={true}`, we will include that.
