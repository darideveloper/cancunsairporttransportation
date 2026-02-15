# Tasks: Add Client Info to Search Form Store

- [x] Update `SearchFormState` interface in `src/store/search-form.ts` <!-- id: update-interface -->
    - [x] Add `firstName: string;`
    - [x] Add `lastName: string;`
    - [x] Add `email: string;`
    - [x] Add `phone: string;`
    - [x] Add `notes: string;`
    - [x] Add setter definitions: `setFirstName`, `setLastName`, `setEmail`, `setPhone`, `setNotes`

- [x] Update `useSearchFormStore` logic in `src/store/search-form.ts` <!-- id: update-store-logic -->
    - [x] Initialize `firstName`, `lastName`, `email`, `phone`, `notes` as empty strings.
    - [x] Implement setter functions.

- [x] Update `persist` configuration in `src/store/search-form.ts` <!-- id: update-persist-config -->
    - [x] Add new fields (`firstName`, `lastName`, `email`, `phone`, `notes`) to the `partialize` object to ensure they are saved to `localStorage`.
