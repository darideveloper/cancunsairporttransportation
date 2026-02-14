# FeatureBanner Component Design

## New Component Implementation

The `FeatureBanner.astro` component will encapsulate the logic of both legacy components using a `layout` prop.

```astro
---
import { Image } from "astro:assets";
import { marked } from "marked";
import { getLangFromUrl, useTranslations } from "../../lib/i18n/utils";
import TextCard from "../molecules/TextCard.astro";
import clsx from "clsx";

interface Props {
  contentKey: string;
  section: string;
  image: ImageMetadata;
  id?: string;
  reverse?: boolean;
  baseKey?: string;
  fieldKey?: string;
  imageAltKey?: string;
  imageClass?: string;
  layout?: "grid" | "flex";
  loading?: "eager" | "lazy";
}

const {
  contentKey,
  section,
  image,
  id,
  reverse = false,
  baseKey,
  fieldKey,
  imageAltKey,
  imageClass,
  layout = "grid",
  loading = "lazy",
} = Astro.props;

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

const translationBase = baseKey || `pages.${contentKey}.${section}`;
const title = t(`${translationBase}.title`);
const imageAlt = imageAltKey ? t(`${translationBase}.${imageAltKey}`) : title;
const contentText = t(`${translationBase}.${fieldKey || "description"}`);
const contentHtml = await marked.parse(contentText);

const containerClasses = clsx(
  "mt-12 items-center justify-center gap-8",
  layout === "grid" && "grid grid-cols-1 md:grid-cols-2",
  layout === "flex" && clsx("flex flex-col", reverse ? "md:flex-row-reverse" : "md:flex-row")
);

const imgClasses = clsx(
  "h-full w-full rounded-xl object-cover",
  layout === "grid" && reverse && "md:order-last",
  layout === "flex" && "md:w-1/2 lg:w-1/3",
  imageClass
);

const sizes = layout === "grid"
  ? "(max-width: 768px) 348px, (max-width: 1024px) 450px, 610px"
  : "(max-width: 768px) 400px, 800px";

const widths = layout === "grid"
  ? [348, 696, 1220, image.width]
  : [400, 800, image.width];
---

<TextCard
  id={id || section}
  title={title}
  class={containerClasses}
>
  <Image
    slot="image"
    src={image}
    class={imgClasses}
    alt={imageAlt}
    title={imageAlt}
    widths={widths}
    sizes={sizes}
    quality={60}
    format="avif"
    loading={loading}
    decoding="async"
  />
  <div set:html={contentHtml} class={clsx("markdown", layout === "flex" && "text-justify")} />
</TextCard>
```
