# Tasks: Persist Search State

- [x] Modify `src/store/search-form.tsx` to import `persist` and `createJSONStorage` from `zustand/middleware`. <!-- id: 1 -->
- [x] Refactor `useSearchFormStore` to use the `persist` middleware wrapping the store creator. <!-- id: 2 -->
- [x] Configure `persist` with name `'search-form-storage'` and ensuring it uses `localStorage`. <!-- id: 3 -->
- [x] Remove `useEffect` default initialization logic from `src/components/organisms/BookingForm.tsx`. <!-- id: 4 -->
- [x] Manual verification: Clear storage, reload, verify NO defaults are applied (placeholder only). <!-- id: 5 -->
- [x] Manual verification: Fill form, reload page, verify values persist. <!-- id: 6 -->
