# design: Dynamic BannerCta Component Design

## Translation Schema Change

### From (Global)
```json
{
  "global": {
    "sections": {
      "airportTransportIntro": {
        "title": "...",
        "text": "..."
      }
    }
  }
}
```

### To (Page Specific)
```json
{
  "pages": {
    "home": {
      "bannerCta": {
        "title": "...",
        "text": "..."
      }
    },
    "playaDelCarmen": {
      "bannerCta": {
        "title": "...",
        "text": "..."
      }
    }
  }
}
```

## Component API Change

### Current
```astro
---
interface Props {
  title: string;
  text: string;
  lang: "es" | "en";
}
const { title, text, lang } = Astro.props;
---
```

### Proposed
```astro
---
interface Props {
  page: "home" | "playaDelCarmen";
}
const { page } = Astro.props;
const { lang } = Astro.params;
const t = useTranslations(lang as any);

const title = t(`pages.${page}.bannerCta.title`);
const text = t(`pages.${page}.bannerCta.text`);
---
```

## Implementation Strategy
1.  Update translation files with the new structure.
2.  Modify the `BannerCta` component to use the `page` prop and `Astro.params`.
3.  Update the pages where the component is used.
4.  Remove the now-unused global translation keys.
