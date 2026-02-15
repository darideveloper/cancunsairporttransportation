# Tasks: Strict I18N Validation

Detailed implementation steps for adding i18n validation.

- [x] Install `tsx` as a dev dependency
- [x] Create `scripts/validate-i18n.ts` with the parity check logic
- [x] Add `validate-i18n` script to `package.json`
- [x] Update `build` script in `package.json` to run validation first
- [x] Modify `src/lib/i18n/utils.ts` to include runtime warnings in DEV mode
- [x] Verify validation fails by temporarily deleting a key in `es.json`
- [x] Verify validation passes with correct files
