# SEO HTML Tags Reference

This guide provides a reference for semantic HTML5 tags and their proper usage for SEO optimization.

## Semantic HTML5 Elements

### Document Structure

#### `<header>`
**Purpose**: Represents introductory content or navigational aids  
**SEO Impact**: Helps search engines identify the page header  
**Usage**:
```html
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
```

#### `<nav>`
**Purpose**: Represents a section with navigation links  
**SEO Impact**: Identifies primary navigation for search engines  
**Usage**:
```html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
  </ul>
</nav>
```

#### `<main>`
**Purpose**: Represents the main content of the document  
**SEO Impact**: Helps search engines identify primary content  
**Usage**:
```html
<main id="main-content">
  <!-- Primary page content -->
</main>
```
**Note**: Only one `<main>` per page

#### `<footer>`
**Purpose**: Represents footer content  
**SEO Impact**: Identifies footer information for search engines  
**Usage**:
```html
<footer>
  <p>&copy; 2026 Company Name</p>
  <nav aria-label="Footer navigation">
    <a href="/privacy">Privacy</a>
  </nav>
</footer>
```

### Content Sectioning

#### `<section>`
**Purpose**: Represents a thematic grouping of content  
**SEO Impact**: Helps organize content into logical sections  
**Usage**:
```html
<section id="services" aria-labelledby="services-title">
  <h2 id="services-title">Our Services</h2>
  <!-- Section content -->
</section>
```
**Best Practice**: Always include a heading and use `aria-labelledby`

#### `<article>`
**Purpose**: Represents self-contained, independently distributable content  
**SEO Impact**: Signals reusable, standalone content  
**Usage**:
```html
<article aria-labelledby="article-title">
  <h2 id="article-title">Article Title</h2>
  <p>Article content...</p>
</article>
```
**Use Cases**: Blog posts, news articles, product cards, testimonials

#### `<aside>`
**Purpose**: Represents content tangentially related to main content  
**SEO Impact**: Identifies supplementary content  
**Usage**:
```html
<aside aria-label="Related information">
  <h3>Related Articles</h3>
  <!-- Related content -->
</aside>
```
**Use Cases**: Sidebars, callouts, related links

### Text Content

#### Headings (`<h1>` - `<h6>`)
**Purpose**: Represent section headings  
**SEO Impact**: Critical for content hierarchy and SEO  
**Usage**:
```html
<h1>Page Title</h1>
  <h2>Main Section</h2>
    <h3>Subsection</h3>
    <h3>Another Subsection</h3>
  <h2>Another Main Section</h2>
```

**Rules**:
- **Only one `<h1>` per page** (usually the page title)
- Don't skip heading levels (h1 → h2 → h3, not h1 → h3)
- Use headings to create a logical outline
- Every section should have a heading

**Example Hierarchy**:
```
h1: Cancun Airport Transportation
  h2: Our Services
    h3: Private Transportation
    h3: Luxury Transportation
  h2: Testimonials
    h3: What Our Clients Say
```

#### `<p>`
**Purpose**: Represents a paragraph  
**SEO Impact**: Basic text content for search engines  
**Usage**:
```html
<p>This is a paragraph of text content.</p>
```

#### `<ul>` and `<ol>`
**Purpose**: Unordered and ordered lists  
**SEO Impact**: Helps structure content logically  
**Usage**:
```html
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>

<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>
```

#### `<dl>`, `<dt>`, `<dd>`
**Purpose**: Description lists  
**SEO Impact**: Great for FAQs and definitions  
**Usage**:
```html
<dl>
  <dt>Question?</dt>
  <dd>Answer to the question.</dd>
</dl>
```

### Inline Text Semantics

#### `<strong>`
**Purpose**: Indicates strong importance  
**SEO Impact**: Signals important content to search engines  
**Usage**:
```html
<p>This is <strong>very important</strong> information.</p>
```
**Note**: Use for semantic importance, not just bold styling

#### `<em>`
**Purpose**: Indicates emphasis  
**SEO Impact**: Signals emphasized content  
**Usage**:
```html
<p>This is <em>emphasized</em> text.</p>
```
**Note**: Use for semantic emphasis, not just italic styling

#### `<a>`
**Purpose**: Hyperlinks  
**SEO Impact**: Critical for internal linking and SEO  
**Usage**:
```html
<a href="/services" aria-label="View our services">Our Services</a>
```

**Best Practices**:
- Use descriptive link text (not "click here")
- Add `aria-label` for additional context
- Use `rel="noopener"` for external links with `target="_blank"`

### Embedded Content

#### `<img>` vs Astro `<Image>`
**Purpose**: Display images  
**SEO Impact**: Critical for image SEO  

**❌ Don't use `<img>`**:
```html
<img src="/image.jpg" alt="Description">
```

**✅ Use Astro `<Image>`**:
```astro
---
import { Image } from "astro:assets";
import myImage from "../assets/image.jpg";
---

<Image
  src={myImage}
  alt="Descriptive alt text for SEO"
  title="Image title for additional context"
  width={800}
  height={600}
  loading="lazy"
/>
```

**Image Attributes**:
- `alt`: **Required** - Describes the image for SEO and accessibility
- `title`: Provides additional context on hover
- `width` and `height`: Improves performance (prevents layout shift)
- `loading="lazy"`: Defers loading for below-fold images
- `loading="eager"`: For above-fold critical images

**Alt Text Best Practices**:
- Be descriptive and specific
- Include relevant keywords naturally
- Don't start with "Image of" or "Picture of"
- Keep it concise (125 characters or less)

**Examples**:
```astro
<!-- Good alt text -->
<Image
  src={hotelZone}
  alt="Aerial view of Cancun Hotel Zone with turquoise Caribbean waters"
  title="Cancun Hotel Zone"
  width={1200}
  height={800}
  loading="lazy"
/>

<!-- Bad alt text -->
<Image
  src={hotelZone}
  alt="image"
  width={1200}
  height={800}
/>
```

## ARIA Attributes for SEO and Accessibility

### `aria-label`
**Purpose**: Provides a label for elements without visible text  
**Usage**:
```html
<button aria-label="Close dialog">
  <CloseIcon aria-hidden="true" />
</button>
```

### `aria-labelledby`
**Purpose**: References another element for labeling  
**Usage**:
```html
<section aria-labelledby="section-title">
  <h2 id="section-title">Section Title</h2>
</section>
```

### `aria-hidden`
**Purpose**: Hides decorative elements from screen readers  
**Usage**:
```html
<FaCheck aria-hidden="true" />
```
**Use for**: Decorative icons, visual-only elements

### `aria-describedby`
**Purpose**: References additional description  
**Usage**:
```html
<input
  type="text"
  aria-describedby="name-description"
/>
<p id="name-description">Enter your full name</p>
```

## Semantic HTML Decision Tree

```
Is it the main page title?
  → Use <h1>

Is it a major section heading?
  → Use <h2>

Is it a subsection heading?
  → Use <h3>, <h4>, etc.

Is it navigation?
  → Use <nav>

Is it the main content area?
  → Use <main>

Is it a self-contained piece of content?
  → Use <article>

Is it a thematic section?
  → Use <section>

Is it supplementary content?
  → Use <aside>

Is it a list of items?
  → Use <ul> or <ol>

Is it a definition or FAQ?
  → Use <dl>, <dt>, <dd>

Is it important text?
  → Use <strong>

Is it emphasized text?
  → Use <em>

Is it just for styling?
  → Use <div> or <span>
```

## Common Mistakes to Avoid

### ❌ Don't

1. **Skip heading levels**
   ```html
   <!-- Bad -->
   <h1>Title</h1>
   <h3>Subsection</h3> <!-- Skipped h2 -->
   ```

2. **Use multiple `<h1>` tags**
   ```html
   <!-- Bad -->
   <h1>Page Title</h1>
   <h1>Another Title</h1> <!-- Only one h1 per page -->
   ```

3. **Use headings for styling**
   ```html
   <!-- Bad -->
   <h3>Small text</h3> <!-- Use CSS for styling -->
   ```

4. **Use `<div>` when semantic HTML exists**
   ```html
   <!-- Bad -->
   <div class="navigation">
     <a href="/">Home</a>
   </div>
   
   <!-- Good -->
   <nav>
     <a href="/">Home</a>
   </nav>
   ```

5. **Use `<img>` instead of Astro `<Image>`**
   ```html
   <!-- Bad -->
   <img src="/image.jpg" alt="Description">
   
   <!-- Good -->
   <Image src={image} alt="Description" width={800} height={600} />
   ```

6. **Empty or generic alt text**
   ```html
   <!-- Bad -->
   <Image src={image} alt="" />
   <Image src={image} alt="image" />
   
   <!-- Good -->
   <Image src={image} alt="Cancun Hotel Zone beachfront view" />
   ```

### ✅ Do

1. **Use semantic HTML**
   ```html
   <article>
     <h2>Article Title</h2>
     <p>Content...</p>
   </article>
   ```

2. **Maintain heading hierarchy**
   ```html
   <h1>Page Title</h1>
     <h2>Section</h2>
       <h3>Subsection</h3>
   ```

3. **Add ARIA labels**
   ```html
   <section aria-labelledby="section-title">
     <h2 id="section-title">Title</h2>
   </section>
   ```

4. **Use descriptive alt text**
   ```html
   <Image
     src={image}
     alt="Professional driver greeting passengers at Cancun Airport"
     width={800}
     height={600}
   />
   ```

5. **Use Astro Image component**
   ```astro
   import { Image } from "astro:assets";
   
   <Image
     src={myImage}
     alt="Description"
     width={800}
     height={600}
     loading="lazy"
   />
   ```

## Quick Reference Table

| Element | Purpose | SEO Impact | Required Attributes |
|---------|---------|------------|---------------------|
| `<h1>` | Page title | High | None (only one per page) |
| `<h2>`-`<h6>` | Section headings | High | None |
| `<nav>` | Navigation | Medium | `aria-label` |
| `<main>` | Main content | High | None (only one per page) |
| `<section>` | Thematic section | Medium | `aria-labelledby` |
| `<article>` | Self-contained content | Medium | `aria-labelledby` |
| `<header>` | Page header | Low | None |
| `<footer>` | Page footer | Low | None |
| `<aside>` | Supplementary content | Low | `aria-label` |
| `<Image>` | Images | High | `src`, `alt`, `width`, `height` |
| `<a>` | Links | High | `href` |
| `<strong>` | Important text | Medium | None |
| `<em>` | Emphasized text | Low | None |

## Resources

- [MDN Web Docs - HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Astro Image Component](https://docs.astro.build/en/guides/images/)
