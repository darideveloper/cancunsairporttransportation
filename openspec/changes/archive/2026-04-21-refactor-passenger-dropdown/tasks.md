# Tasks: Refactor Passenger Input to Dropdown

- [x] **Phase 1: Component Refactor**
    - [x] Update `src/components/atoms/form/PassengerInput.tsx` to use `<select>` with options 1-25. <!-- id: 1 -->
    - [x] Apply Tailwind classes: `rounded-lg`, `border-gray-300`, `focus:ring-2`, `pl-3`, `pr-10`, `appearance-none`. <!-- id: 2 -->
    - [x] Implement custom SVG chevron as a background image for the select. <!-- id: 8 -->
    - [x] Integrate `clsx` for conditional classes (`disabled`). <!-- id: 3 -->
    - [x] Update event handler to `ChangeEvent<HTMLSelectElement>`. <!-- id: 4 -->

- [x] **Phase 2: Validation**
    - [x] Verify `BookingForm.tsx` correctly renders the new dropdown. <!-- id: 5 -->
    - [x] Verify selection updates the Zustand store. <!-- id: 6 -->
    - [x] Verify responsive behavior on simulated mobile viewport. <!-- id: 7 -->
