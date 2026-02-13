# System Design: No Availability & BlackGhost Button

## Overview

### `NoAvailability` Component
**File**: `src/components/organisms/NoAvailability.tsx`
- **Purpose**: Render the "No Results" error/empty state.
- **Props**: `{ lang: 'en' | 'es' }`
- **Layout**: Centered content, vertical stack.
  - Heading: "Lo sentimos :(" (or translated).
  - Body: Explain availability issue.
  - Actions: 4 buttons in a responsive grid/flex row.

### `ButtonCta` Update
**File**: `src/components/atoms/ButtonCta.tsx`
- **Purpose**: Add `blackGhost` variant.
- **Style**: Black border, transparent bg (or very light opacity), black text. `bg-black/10 text-black border-black`.

## Component Structure

```tsx
// src/components/organisms/NoAvailability.tsx (Simplified)
export default function NoAvailability({ lang }: { lang: 'en' | 'es' }) {
  const t = useTranslations(lang);
  return (
    <div className="flex flex-col items-center text-center py-12 space-y-8 bg-blue-50/50 rounded-xl">
       <span className="text-xl">Lo sentimos :(</span>
       <h1 className="text-3xl font-bold max-w-2xl">
         {t('pages.results.noAvailabilityMessage')}
       </h1>
       <div className="flex flex-wrap gap-4 justify-center">
         <ButtonCta variant="black" href="tel:+1...">USA & Canada</ButtonCta>
         <ButtonCta variant="blackGhost" href="tel:+52...">Mexico & Resto</ButtonCta>
         <ButtonCta variant="blackGhost" href="...">WhatsApp</ButtonCta>
         <ButtonCta variant="blackGhost" href="...">Chat</ButtonCta>
       </div>
    </div>
  )
}
```

## Integration point

**File**: `src/components/organisms/VehicleBuyCards.tsx`

```tsx
if (!vehicles || vehicles.length === 0) {
  return <NoAvailability lang={lang} />;
}
```

## Styling
- Use **Tailwind** classes.
- "Brand colors" likely refers to usage of existing theme colors (`bg-accent`, `bg-blue`, etc) or consistent typography. The provided image shows light blue background (`bg-blue-50` or similiar) and dark text.
- Responsive: Stack buttons on mobile, row on desktop.

## i18n
- Add keys:
  - `pages.results.sorry` -> "Lo sentimos :("
  - `pages.results.noAvailabilityMessage` -> "Desafortunadamente no encontramos disponibilidad..."
  - `pages.results.usaCanada` -> "USA & Canada"
  - `pages.results.mexicoRest` -> "Mexico & Resto del mundo"
  - `pages.results.whatsapp` -> "WhatsApp"
  - `pages.results.chat` -> "Chat"
