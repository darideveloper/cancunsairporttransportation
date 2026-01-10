# Design: Transportation Services Section

## Components

### 1. `ServiceCard` (Molecule)
*File:* `src/components/molecules/ServiceCard.astro`
*Reasoning for Astro:* To maintain consistency with other static components in the project, we've converted the ServiceCard to an Astro component. Astro manages React icons efficiently at build time for static rendering.

*Props:*
- `title: string`
- `text: string`
- `Icon: IconType` (from `react-icons`)

*Structure:*
```tsx
<article className="" aria-label={title}>
  <h3 className="">{title}</h3>
  <p className="">{text}</p>
  <div className="">
    <Icon className="" aria-hidden="true" />
  </div>
</article>
```

### 2. `TransportationServices` (Organism)
*File:* `src/components/organisms/TransportationServices.astro`
*Purpose:* Wraps the section and manages data.

*Structure:*
```astro
<section class="" aria-label="Transportation Services">
    <SectionHeading title={t('services.title')} class="">
        {t('services.description')}
    </SectionHeading>
    
    <div class="">
        <!-- Map over services data -->
        <ServiceCard ... />
    </div>
</section>
```

## Data & Content
*   Content will be stored in `src/messages/{lang}.json`.
*   Keys:
    *   `services.title`
    *   `services.intro` (or text logic)
    *   `services.items` (array of objects with title, text) — *Note:* Translation files are usually flat or nested objects. A common pattern is `services.item1.title`, `services.item1.text`, etc., or passing the key prefix.

## SEO Strategy
*   `section` tag for the container.
*   `article` for individual cards.
*   `h2` for section title (via `SectionHeading`).
*   `h3` for card titles.
*   `aria-hidden="true"` for decorative icons.
