# Design: CardGridSection Component

## Interface

```typescript
interface CardData {
  key: string;      // Used for translation lookup (e.g., 'luxury', 'tulum')
  image: ImageMetadata; // The imported image object
  bestSeller?: boolean; // Override or data specific property
  // Any other data specific properties can be optional here
}

interface Props {
  // Section Props
  id: string;
  title: string;
  description: string;
  
  // Data Props
  cards: CardData[];
  translationScope: string; // e.g. "pricingTransportation.cards"
  
  // Card Configuration
  cardConfig?: {
    currency?: "usd" | "mxn";
    ctaLinkFixed?: string; // If all cards go to the same link (Pricing)
    ctaLinkScope? : string; // If link comes from translation (Destinations)
    cardClass?: string;
    reverse?: boolean; // For alternating layouts or fixed reverse
  };
  
  // Image Configuration
  imageClass?: string; // To handle aspect ratios (e.g. "aspect-4/3")

  // Grid Configuration
  gridClass?: string; // To override default grid if necessary
  
  // View More Button (Bottom)
  viewMore?: {
    link: string;
    text: string;
    title?: string;
  };
}
```

## Translation Lookup Strategy

Inside the component, fields will be resolved as:

```typescript
const { translationScope } = Astro.props;
// ... inside loop
const cardTitle = t(`${translationScope}.${card.key}.title`);
const cardPrice = t(`${translationScope}.${card.key}.price`);
const cardDesc = t(`${translationScope}.${card.key}.description`);
// Link logic differs:
const link = cardConfig.ctaLinkFixed || t(`${translationScope}.${card.key}.link`);
```

## Usage Examples

### Pricing Section

```astro
<CardGridSection
  id="pricing-transportation"
  title={t("pricingTransportation.title")}
  description={t("pricingTransportation.text")}
  cards={pricingTransportation}
  translationScope="pricingTransportation.cards"
  cardConfig={{
    currency: lang === "es" ? "mxn" : "usd",
    ctaLinkFixed: "#booking-form",
    cardClass: "pt-4"
  }}
  gridClass="items-end"
/>
```

### Destinations Section

```astro
<CardGridSection
  id="destinations"
  title={t("pages.home.destinations.title")}
  description={t("pages.home.destinations.text")}
  cards={destinations}
  translationScope="pages.home.destinations.cards"
  cardConfig={{
    currency: lang === "es" ? "mxn" : "usd",
    reverse: true,
    cardClass: "hover:border-accent text-center transition-all duration-300 md:text-left"
  }}
  imageClass="mx-auto aspect-4/3 w-full rounded-t-lg object-cover md:aspect-12/11 lg:aspect-4/3"
  viewMore={{
    link: t("pages.home.destinations.viewMoreLink"),
    text: t("pages.home.destinations.viewMore"),
    title: t("pages.home.destinations.viewMore")
  }}
/>
```
