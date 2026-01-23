# Design: Rename Destinations Organism

## Component Naming
The new name `FeaturedDestinations` was chosen because the component displays a selection of destinations (Tulum, Playa, Cancun) with pricing and a call to action to see more, making it a "featured" section rather than a full destination directory.

## Impact Analysis
- **File System**: Renaming `src/components/organisms/Destinations.astro` to `src/components/organisms/FeaturedDestinations.astro`.
- **Imports**: All files importing `Destinations` from `@organisms` must be updated.
- **Logic**: No logic changes are expected.
