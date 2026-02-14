# Limit Booking Dates Tasks

1.  [x] Update `DateInput` component (`src/components/atoms/form/DateInput.tsx`) to accept a `min` prop and pass it to the `<input>`. <!-- id: 0 -->
2.  [x] Update `TimeInput` component (`src/components/atoms/form/TimeInput.tsx`) to accept a `min` prop and pass it to the `<input>`. <!-- id: 1 -->
3.  [x] Update `BookingForm` component (`src/components/organisms/BookingForm.tsx`) to calculate `minDate` and `minTime` based on current date/time and user selections, and pass them to the `DateInput` and `TimeInput` components. <!-- id: 2 -->
4.  [x] Manual verification: Ensure past dates are disabled in the date picker and past times are disabled (or warned) if selecting today. Verify return date constraints. <!-- id: 3 -->
