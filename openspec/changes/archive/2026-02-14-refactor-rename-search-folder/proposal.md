# Change: Rename Search folder to lowercase

## Why
To maintain consistency with the project's naming convention where all folders in `src/components` are lowercase. Currently, `src/components/Search` is the only uppercase folder.

## What Changes
- Rename `src/components/Search` to `src/components/search`.
- Update all imports of `SearchWidget` to reflect the new path.

## Impact
- Affected specs: `file-structure`
- Affected code: 
  - `src/components/Search/` -> `src/components/search/`
  - `src/components/molecules/TopBar.astro`
