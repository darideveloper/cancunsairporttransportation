## MODIFIED Requirements

### Requirement: Booking Submission Component

The application **SHALL** include `src/components/organisms/booking/BookingSubmission.tsx` to handle UI interactions, validation, and redirection. The main submit button MUST be a native HTML `<button>` tag instead of a reusable component, and MUST use specific Tailwind utility classes to match a precise design specification.

#### Scenario: User Views Submit Button
Given the user is on the booking form
When the `BookingSubmission` component renders
Then it MUST display a native `<button>` tag for the submission action
AND the button MUST use Tailwind classes equivalent to the following CSS properties:
- `align-items: center` -> `items-center`
- `align-self: stretch` -> `self-stretch` or `w-full`
- `background: linear-gradient(180deg, #e85a73, #d63e5c)` -> `bg-gradient-to-b from-[#e85a73] to-[#d63e5c]`
- `border: 1px solid #b53149` -> `border border-[#b53149]`
- `border-radius: 4px` -> `rounded`
- `color: #fff` -> `text-white`
- `cursor: pointer` -> `cursor-pointer`
- `display: flex` -> `flex`
- `font-weight: 700` -> `font-bold`
- `gap: 8px` -> `gap-2`
- `justify-content: center` -> `justify-center`
- `padding: 16px` -> `p-4`
- `transition: all .2s` -> `transition-all duration-200`
AND the disabled state styling logic MUST be maintained using the `clsx` utility alongside these new classes.

```tsx
// src/components/organisms/booking/BookingSubmission.tsx
// ...
      {!paypalId ? (
        <button
          onClick={handleSubmit}
          disabled={isLoading || !isValid}
          className={clsx(
            "flex items-center self-stretch w-full justify-center gap-2 p-4 rounded font-bold text-white cursor-pointer transition-all duration-200 border border-[#b53149] bg-gradient-to-b from-[#e85a73] to-[#d63e5c]",
            isLoading || !isValid
              ? "cursor-not-allowed! opacity-50"
              : "hover:from-[#d63e5c] hover:to-[#e85a73]" // Optional hover state, or just strictly stick to requested styles
          )}
        >
          {isLoading ? (
            // ... loading spinner and text
          ) : paymentMethod === "paypal" || paymentMethod === "card" ? (
            t("pages.register.continue")
          ) : (
            t("pages.register.submit")
          )}
        </button>
// ...
```