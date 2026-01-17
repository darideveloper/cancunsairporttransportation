# Design: Popular Hotels Section

## Component Structure

We will create a new molecule `BasicIconCard.astro` and a new organism `PopularHotels.astro`.

### BasicIconCard.astro

A simplified card component based on `InfoIconCard` but primarily for a title + icon link.

```astro
---
interface Props {
  title: string;
  icon?: any; // Component type
  href?: string;
  class?: string;
}

const { title, icon: Icon, href, class: className } = Astro.props;
---

<a 
  href={href} 
  class={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 group border border-gray-light ${className}`}
>
  {Icon && <Icon class="text-accent text-2xl group-hover:scale-110 transition-transform duration-300" />}
  <h3 class="text-gray-dark font-bold text-lg group-hover:text-accent transition-colors duration-300">
    {title}
  </h3>
</a>
```

### PopularHotels.astro

```astro
---
import SectionHeading from "../molecules/SectionHeading.astro";
import BasicIconCard from "../molecules/BasicIconCard.astro";
import ButtonCta from "../atoms/ButtonCta.astro";
import { useTranslations } from "../../lib/i18n/utils";
import { FaMapMarkerAlt } from "react-icons/fa";

const { page } = Astro.props;
const t = useTranslations(page === "playaDelCarmen" ? "es" : "en");
const { popularHotels } = t.pages.playaDelCarmen;
---

<section class="container mx-auto py-16 px-4">
  <SectionHeading
    title={popularHotels.title}
    subtitle="" 
    align="center"
    class="mb-12"
  />
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    {popularHotels.items.map((item) => (
      <BasicIconCard 
        title={item} 
        icon={FaMapMarkerAlt} 
        href="#booking-form"
      />
    ))}
  </div>

  <div class="flex justify-center">
    <ButtonCta href={popularHotels.viewMoreLink || "/destinations"} variant="primary">
      {popularHotels.viewMore}
    </ButtonCta>
  </div>
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
  - `BasicIconCard` props: `icon`, `title`, `href`.
  - We can pass `FaMapMarkerAlt` as the `icon` prop.
  - We can create a small local component or wrapper to render the SVG `use` tag if we want to reuse the exact asset, OR use `react-icons`.
  - usage of `/assets/img/svg/icons.svg` implies an external sprite.
  - I will try to use `FaMapMarkerAlt` as a clean substitute, or if I can find the SVG code I can make a component. Given I cannot easily read the SVG sprite file content to extract the path (it's binary/static asset), `react-icons` is safer and consistent with other components like `FaImages`.

## Interaction
- Cards: `href="#booking-form"`. We need to ensure the `BookingForm` or a wrapper has `id="booking-form"`.
- Button: `href="/{lang}/destinos"` or `/destinations`.

