# Design: Popular Hotels Section

## Component Structure

We will use the existing molecule `BasicIconCard.astro` and create a new organism `PopularHotels.astro`.

### BasicIconCard.astro

We utilize the existing component at `src/components/molecules/BasicIconCard.astro`.

**Props used:**
- `title`: The hotel/transportation text (for uniqueness and heading).
- `text`: The call to action text (links to booking form).
- `Icon`: `FaMapMarkerAlt`.
- `href`: `#booking-form`.

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
        text={t("global.ui.pricingCard.bookNow")} 
        Icon={FaMapMarkerAlt} 
        href="#booking-form"
        class="bg-white"
        iconClass="text-accent"
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
    "Transportation from Cancun Airport to ADO Playa Del Carmen",
    "Transportation from Cancun Airport to Hotel Xcaret Mexico",
    "Transportation from Cancun Airport to Grand Riviera Princess - All Inclusive",
    "Transportation from Cancun Airport to The Royal Haciendas All Suites Resort & Spa",
    "Transportation from Cancun Airport to Wyndham Garden Playa del Carmen",
    "Transportation from Cancun Airport to Hotel The Reef Playacar",
    "Transportation from Cancun Airport to hotel Thompson Playa del Carmen",
    "Transportation from Cancun Airport to Hyatt Zilara Riviera Maya"
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
    "Transportación del Aeropuerto de Cancún al ADO Playa Del Carmen",
    "Transportación del Aeropuerto de Cancún al Hotel Xcaret México",
    "Transportación del Aeropuerto de Cancún al Grand Riviera Princess - All Inclusive",
    "Transportación del Aeropuerto de Cancún a The Royal Haciendas All Suites Resort & Spa",
    "Transportación del Aeropuerto de Cancún al hotel Wyndham Garden Playa del Carmen",
    "Transportación del Aeropuerto de Cancún al hotel The Reef Playacar",
    "Transportación del Aeropuerto de Cancún al hotel Thompson Playa del Carmen",
    "Transportación del Aeropuerto de Cancún al Hyatt Zilara Riviera Maya"
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

