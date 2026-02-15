# Tasks

1.  **Install dependencies**
    - [x] Install `react-phone-number-input` via npm.
    - [x] Add `import 'react-phone-number-input/style.css'` to `src/styles/global.css` or the new component.

2.  **Create PhoneInput Component**
    - [x] Create `src/components/atoms/form/PhoneInput.tsx`.
    - [x] Implement the component wrapping `react-phone-number-input`.
    - [x] Style it to match `Input.tsx` (using `clsx` and Tailwind classes).
    - [x] Configure `preferredCountries` and `defaultCountry="US"`.

3.  **Update PassengerInformation**
    - [x] Replace usage of `Input` for the phone field with `PhoneInput` in `src/components/molecules/booking/PassengerInformation.tsx`.
    - [x] Pass necessary props (`label`, `value`, `onChange`, `error`).

4.  **Verification**
    - [x] Verify the phone input renders correctly with the country dropdown.
    - [x] Verify the preferred countries (US, GB, ES, MX) are at the top.
    - [x] Verify the input matches the style of other inputs on the form.
    - [x] Verify the value update correctly reflects in the store.
