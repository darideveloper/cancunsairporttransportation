# Tasks: Refactor Pages Structure

- [ ] Create subdirectories in `src/components/pages/`: `landing`, `services`, `destinations`, `legal`. <!-- id: create-dirs -->
- [ ] Move `Home.astro`, `Destinations.astro` to `landing/`. <!-- id: move-landing, deps: create-dirs -->
- [ ] Move `Private.astro`, `Luxury.astro`, `Group.astro`, `Taxi.astro` to `services/`. <!-- id: move-services, deps: create-dirs -->
- [ ] Move `Akumal.astro`, `Tulum.astro`, `Playa.astro`, `Merida.astro` to `destinations/`. <!-- id: move-destinations, deps: create-dirs -->
- [ ] Move `Terms.astro` to `legal/`. <!-- id: move-legal, deps: create-dirs -->
- [ ] Update imports in `src/pages/[...path].astro` to reflect new paths. <!-- id: update-imports, deps: move-landing, move-services, move-destinations, move-legal -->
- [ ] Run `npm run build` to validate changes. <!-- id: validate, deps: update-imports -->
