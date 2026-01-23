# Tasks: Refactor Pages Structure

- [x] Create subdirectories in `src/components/pages/`: `landing`, `services`, `destinations`, `legal`. <!-- id: create-dirs -->
- [x] Move `Home.astro`, `Destinations.astro` to `landing/`. <!-- id: move-landing, deps: create-dirs -->
- [x] Move `Private.astro`, `Luxury.astro`, `Group.astro`, `Taxi.astro` to `services/`. <!-- id: move-services, deps: create-dirs -->
- [x] Move `Akumal.astro`, `Tulum.astro`, `Playa.astro`, `Merida.astro` to `destinations/`. <!-- id: move-destinations, deps: create-dirs -->
- [x] Move `Terms.astro` to `legal/`. <!-- id: move-legal, deps: create-dirs -->
- [x] Update imports in `src/pages/[...path].astro` to reflect new paths. <!-- id: update-imports, deps: move-landing, move-services, move-destinations, move-legal -->
- [x] Run `npm run build` to validate changes. <!-- id: validate, deps: update-imports -->
