# Proposal: Create Includes Organism Component

## Problem
The project needs a new organism component called "Includes" to display what is included in the transportation service. This component should be consistent across all pages and follow the project's SEO and accessibility standards.

## Proposed Solution
Create a new Astro component `Includes.astro` in `src/components/organisms/` that will be rendered on the `/private-airport-transfer-cancun` page.

### Component Features
- **Layout**: Title (H2) and Image on the left, List of items on the right
- **Data Source**: `global.sections.includes` in translation files
- **Styling**: Tailwind CSS utility classes only (no `<style>` blocks)

### SEO & Optimization Standards

#### 1. Semantic HTML
```html
<section 
  id="service-includes" 
  aria-labelledby="includes-title"
  class="py-12 md:py-16 lg:py-20"
>
```
- ✅ Descriptive `id` for deep linking and analytics
- ✅ `aria-labelledby` for accessibility
- ✅ Responsive padding using Tailwind utilities

#### 2. Heading Structure
```html
<h2 
  id="includes-title"
  class="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-black mb-6"
>
```
- ✅ Unique `id` attribute for ARIA reference
- ✅ Responsive typography (mobile-first)
- ✅ Project font conventions (`font-title`)
- ✅ Proper heading hierarchy (H2, not H1)

#### 3. Image Optimization
```html
<Image 
  src={image} 
  alt={imageAlt} 
  title={imageTitle}
  width={600}
  height={400}
  loading="lazy"
  class="w-full h-auto rounded-lg shadow-lg"
/>
```
- ✅ **Astro Image Component**: Automatic format optimization (WebP, AVIF)
- ✅ **Explicit Dimensions**: Prevents Cumulative Layout Shift (CLS)
- ✅ **Lazy Loading**: Improves initial page load performance
- ✅ **Descriptive Alt Text**: Screen reader accessibility and SEO
- ✅ **Title Attribute**: Additional context for users
- ✅ **Responsive Sizing**: Maintains aspect ratio

#### 4. List Semantics & Accessibility
```html
<ul class="space-y-4">
  {items.map((item, index) => (
    <li 
      key={index}
      class="flex items-start gap-3 text-lg text-gray-dark"
    >
      <span class="text-accent mt-1" aria-hidden="true">✓</span>
      <span>{item}</span>
    </li>
  ))}
</ul>
```
- ✅ **Semantic HTML**: Proper `<ul>` and `<li>` structure
- ✅ **Visual Indicators**: Checkmark icons for better UX
- ✅ **ARIA Hidden**: Decorative icons hidden from screen readers
- ✅ **Color Contrast**: `text-gray-dark` ensures readability
- ✅ **Consistent Spacing**: Visual rhythm

#### 5. Responsive Design
```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
```
- ✅ **Mobile-First**: Single column on mobile, two columns on desktop
- ✅ **Flexible Gaps**: Responsive spacing (gap-8 → gap-12)
- ✅ **Vertical Alignment**: Balanced layout
- ✅ **Container Pattern**: `container mx-auto px-4` for consistent width

### Performance Optimizations

#### Core Web Vitals
- **LCP (Largest Contentful Paint)**: Lazy loading for below-fold images, optimized formats
- **CLS (Cumulative Layout Shift)**: Explicit width/height on images, reserved space in layout
- **FID (First Input Delay)**: Static component (no JavaScript), minimal DOM complexity

#### Additional Features
- ✅ WebP image format recommendation
- ✅ Minimal DOM nesting
- ✅ No inline styles or `<style>` blocks
- ✅ Tailwind CSS purging (production builds)

### Accessibility (WCAG 2.1 AA Compliance)
- ✅ Semantic HTML elements
- ✅ ARIA labels and relationships
- ✅ Descriptive alt text for images
- ✅ Logical heading hierarchy
- ✅ Native HTML elements (keyboard navigation)
- ✅ Color contrast compliance
- ✅ Sufficient text size

### Content Strategy
Enhanced translation data with real service features:
```json
{
  "title": "What's Included in Your Transfer?",
  "image": "/path/to/image.webp",
  "imageAlt": "Professional transportation service showing included amenities",
  "imageTitle": "Premium transportation service features",
  "items": [
    "Professional bilingual driver",
    "Air-conditioned vehicle",
    "Flight monitoring and tracking",
    "Meet and greet service",
    "All taxes and tolls included",
    "24/7 customer support",
    "Free cancellation up to 24 hours",
    "Complimentary bottled water"
  ]
}
```

### Project Conventions Compliance
- ✅ **Tailwind CSS Only**: No `<style>` blocks
- ✅ **Project Colors**: `text-accent`, `text-black`, `text-gray-dark`
- ✅ **Project Fonts**: `font-title`, `font-sans`
- ✅ **Static Astro Component**: No unnecessary React
- ✅ **Translation Integration**: Uses `global.sections.includes`

## Expected Outcome
- A production-ready, SEO-optimized `Includes` component
- Updated translation files with comprehensive content
- The component displayed at the private-airport-transfer-cancun page
- **13+ SEO improvements** (semantic HTML, meta data, structured content)
- **8+ performance optimizations** (lazy loading, image optimization, CLS prevention)
- **10+ accessibility features** (ARIA labels, keyboard support, screen readers)
- **100% project compliance** (Tailwind CSS, no style blocks, proper architecture)

## Implementation Recommendations

### Image Asset
1. **Format**: WebP (with JPEG fallback)
2. **Dimensions**: 600x400px minimum (2x for retina: 1200x800px)
3. **Content**: Professional photo showing modern vehicle interior, professional driver, comfortable amenities
4. **Optimization**: Compress to <100KB

### Testing
1. **Lighthouse Audit**: Target 90+ scores across all metrics
2. **Screen Reader**: Test with NVDA/JAWS
3. **Mobile Devices**: Test on actual devices (iOS/Android)
4. **Browser Compatibility**: Chrome, Firefox, Safari, Edge
