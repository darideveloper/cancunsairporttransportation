# Before and After: Component Translation Integration

This example shows a component before and after translation integration.

## Before: Hardcoded Text

```astro
---
// File: src/components/organisms/Testimonials.astro
// Status: Hardcoded text (BAD)
import { Image } from "astro:assets";
import testimonial1 from "../../assets/images/testimonials/client-1.jpg";

interface Props {
  class?: string;
}
const { class: className } = Astro.props;
---

<section class={className} id="testimonials">
  <div class="container">
    <h2>Comments from our customers</h2>
    <p>Discover why our customers choose Cancun Airport Transportation by Go</p>
    
    <div class="testimonials-grid">
      <article>
        <Image
          src={testimonial1}
          alt="Customer photo"
          title="Customer photo"
          width={100}
          height={100}
        />
        <h3>Juan P.</h3>
        <p>I hired the transportation service to go from Cancun to Tulum and was impressed with the punctuality and professionalism of the driver.</p>
        <span>⭐⭐⭐⭐⭐</span>
      </article>
    </div>
  </div>
</section>
```

### Problems with This Approach

❌ **Hardcoded text** - All text is in English only  
❌ **No translation support** - Cannot switch to Spanish  
❌ **Not maintainable** - Text changes require editing component  
❌ **Poor SEO** - No multilingual support  
❌ **Generic metadata** - "Customer photo" is not descriptive  

---

## After: Translation Integration

### Step 1: Add Translations to JSON Files

**en.json**:
```json
{
  "pages": {
    "home": {
      "testimonials": {
        "title": "Comments from our customers",
        "description": "Discover why our customers choose Cancun Airport Transportation by Go",
        "items": {
          "item1": {
            "name": "Juan P.",
            "text": "I hired the transportation service to go from Cancun to Tulum and was impressed with the punctuality and professionalism of the driver.",
            "imageAlt": "Comment from our customer Juan P.",
            "imageTitle": "Comment from our customer Juan P.",
            "stars": "5"
          }
        }
      }
    }
  }
}
```

**es.json**:
```json
{
  "pages": {
    "home": {
      "testimonials": {
        "title": "Comentarios de nuestros clientes",
        "description": "Descubre por qué nuestros clientes eligen Transporte del Aeropuerto de Cancún by Go",
        "items": {
          "item1": {
            "name": "Juan P.",
            "text": "Contraté el servicio de transporte para ir de Cancún a Tulum y quedé impresionado con la puntualidad y profesionalismo del conductor.",
            "imageAlt": "Comentario de nuestro cliente Juan P.",
            "imageTitle": "Comentario de nuestro cliente Juan P.",
            "stars": "5"
          }
        }
      }
    }
  }
}
```

### Step 2: Update Component

```astro
---
// File: src/components/organisms/Testimonials.astro
// Status: Fully translated (GOOD)
import { getLangFromUrl, useTranslations } from "../../lib/i18n/utils";
import { Image } from "astro:assets";
import testimonial1 from "../../assets/images/testimonials/client-1.jpg";

// Get language and translation function
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);

interface Props {
  page: string;
  class?: string;
}
const { page, class: className } = Astro.props;

// Get translations
const title = t(`pages.${page}.testimonials.title`);
const description = t(`pages.${page}.testimonials.description`);
const items = t(`pages.${page}.testimonials.items`);
---

<section 
  class={className} 
  id="testimonials"
  aria-labelledby="testimonials-title"
>
  <div class="container">
    <h2 id="testimonials-title">{title}</h2>
    <p>{description}</p>
    
    <div class="testimonials-grid">
      {Object.values(items).map((item: any) => (
        <article aria-labelledby={`testimonial-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
          <Image
            src={testimonial1}
            alt={item.imageAlt}
            title={item.imageTitle}
            width={100}
            height={100}
            loading="lazy"
          />
          <h3 id={`testimonial-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
            {item.name}
          </h3>
          <p>{item.text}</p>
          <span aria-label={`${item.stars} stars`}>
            {"⭐".repeat(parseInt(item.stars))}
          </span>
        </article>
      ))}
    </div>
  </div>
</section>
```

### Step 3: Use in Page

```astro
---
// File: src/pages/en/index.astro
import Testimonials from "../../components/organisms/Testimonials.astro";
---

<Testimonials page="home" />
```

### Benefits of Translation Integration

✅ **Multilingual support** - Works in English and Spanish  
✅ **Maintainable** - Text changes only require JSON edits  
✅ **Better SEO** - Proper multilingual support  
✅ **Descriptive metadata** - Specific alt text and titles  
✅ **Reusable** - Same component works on different pages  
✅ **Accessible** - Proper ARIA labels and semantic HTML  
✅ **Scalable** - Easy to add more languages  

---

## Comparison Table

| Aspect | Before (Hardcoded) | After (Translated) |
|--------|-------------------|-------------------|
| **Languages** | English only | English + Spanish |
| **Maintainability** | Edit component file | Edit JSON files |
| **SEO** | Single language | Multilingual |
| **Reusability** | Fixed content | Dynamic content |
| **Accessibility** | Basic | Enhanced with ARIA |
| **Scalability** | Difficult | Easy |
| **Content Management** | Developer required | Can be non-technical |

---

## Key Takeaways

1. **Always use translations** - Never hardcode text in components
2. **Extract all text** - Including visible text and metadata
3. **Use page prop** - For page-specific translations
4. **Add ARIA labels** - Improve accessibility
5. **Generate unique IDs** - For better accessibility
6. **Test both languages** - Verify translations work correctly

---

## Testing Checklist

After translation integration:

- [ ] Component displays correctly in English (`/en/page`)
- [ ] Component displays correctly in Spanish (`/es/page`)
- [ ] All text is translated (no hardcoded strings)
- [ ] Image alt text is translated
- [ ] Image titles are translated
- [ ] ARIA labels are present
- [ ] No console errors
- [ ] JSON syntax is valid
- [ ] Translations match the design
- [ ] Content makes sense in both languages
