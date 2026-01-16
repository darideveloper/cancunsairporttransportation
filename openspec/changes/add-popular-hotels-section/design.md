# Design: Popular Hotels Section

## Component Structure

We will create a new organism `PopularHotels.astro`.

```astro
---
import SectionHeading from "../molecules/SectionHeading.astro";
import InfoIconCard from "../molecules/InfoIconCard.astro";
import ButtonCta from "../atoms/ButtonCta.astro";
import { useTranslations } from "../../lib/i18n/utils";
import { FaMapMarkerAlt } from "react-icons/fa"; // Using as "hotel-location" substitute

const { page } = Astro.props; // or just hardcode for PD Carmen if specific, but passing page allows reuse logic if needed. 
// However, the request is specific to this page and data structure is specific.
// We will follow the pattern of other sections like FaqSection which takes `page` prop.

const t = useTranslations(page === "playaDelCarmen" ? "es" : "en"); // Actually page prop usually is for key prefix, lang is from context/props.
// Let's check how other components get lang. usually `Astro.currentLocale` or passed prop.
// In `transportation-from-cancun-airport-to-playa-del-carmen.astro`, `lang` is passed to components or `t` is used.
// Best pattern: Receive `lang` or use `useTranslations`.
---

<section class="container most-popular-hotels text-center">
  <SectionHeading ... />
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {items.map(item => (
      <a href="#booking-form" class="block"> <InfoIconCard ... /> </a>
      // OR if InfoIconCard handles href:
      <InfoIconCard href="#booking-form" ... />
    ))}
  </div>
  <ButtonCta href={...} ... />
</section>
```

## Data Sourcing

Data will be stored in `src/messages/{lang}.json` under `pages.playaDelCarmen.popularHotels`.

Structure:
```json
"popularHotels": {
  "title": "Most popular hotels in Playa del Carmen",
  "viewMore": "View More Hotels",
  "viewMoreTitle": "View More Hotels", 
  "items": [
    { "text": "Transportation from Cancun Airport to ADO Playa Del Carmen" },
    { "text": "Transportation from Cancun Airport to Hotel Xcaret Mexico" },
    { "text": "Transportation from Cancun Airport to Grand Riviera Princess - All Inclusive" },
    { "text": "Transportation from Cancun Airport to The Royal Haciendas All Suites Resort & Spa" },
    { "text": "Transportation from Cancun Airport to Wyndham Garden Playa del Carmen" },
    { "text": "Transportation from Cancun Airport to Hotel The Reef Playacar" },
    { "text": "Transportation from Cancun Airport to hotel Thompson Playa del Carmen" },
    { "text": "Transportation from Cancun Airport to Hyatt Zilara Riviera Maya" }
  ]
}
```

Equivalent Spanish structure:
```json
"popularHotels": {
  "title": "Hoteles más populares en Playa del Carmen",
  "viewMore": "Ver más hoteles",
  "viewMoreTitle": "Ver más hoteles", 
  "items": [
    { "text": "Transportación del Aeropuerto de Cancún al ADO Playa Del Carmen" },
    { "text": "Transportación del Aeropuerto de Cancún al Hotel Xcaret México" },
    { "text": "Transportación del Aeropuerto de Cancún al Grand Riviera Princess - All Inclusive" },
    { "text": "Transportación del Aeropuerto de Cancún a The Royal Haciendas All Suites Resort & Spa" },
    { "text": "Transportación del Aeropuerto de Cancún al hotel Wyndham Garden Playa del Carmen" },
    { "text": "Transportación del Aeropuerto de Cancún al hotel The Reef Playacar" },
    { "text": "Transportación del Aeropuerto de Cancún al hotel Thompson Playa del Carmen" },
    { "text": "Transportación del Aeropuerto de Cancún al Hyatt Zilara Riviera Maya" }
  ]
}
```
Note: The user provided HTML has specific text for the link: "Transportación del Aeropuerto de Cancún al ADO Playa Del Carmen".
We will store this full text in the translation file.

## Styling
- **Grid**: `grid grid-cols-1 md:grid-cols-3 gap-8` (matching the user request "grid 3 x 3 (for desktop)"). 
- **Icons**: The user provided an SVG usage `<use xlink:href="/assets/img/svg/icons.svg#hotel-location"></use>`. 
  - If we want to strictly follow the "InfoIconCard renders a top icon" instruction, we need to pass a component as `TitleIcon`. 
  - `InfoIconCard` props: `TitleIcon?: any`. It renders `<TitleIcon class="..." />`.
  - We can create a small local component or wrapper to render the SVG `use` tag if we want to reuse the exact asset, OR use `react-icons`.
  - usage of `/assets/img/svg/icons.svg` implies an external sprite.
  - I will try to use `FaMapMarkerAlt` as a clean substitute, or if I can find the SVG code I can make a component. Given I cannot easily read the SVG sprite file content to extract the path (it's binary/static asset), `react-icons` is safer and consistent with other components like `FaImages`.

## Interaction
- Cards: `href="#booking-form"`. We need to ensure the `BookingForm` or a wrapper has `id="booking-form"`.
- Button: `href="/{lang}/destinos"` or `/destinations`.

