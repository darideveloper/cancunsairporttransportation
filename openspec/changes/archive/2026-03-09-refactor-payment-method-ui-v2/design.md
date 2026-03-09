# Design: Enhanced Payment Logic and UI

The system will be refactored to support three distinct payment methods (PayPal, Card, and Cash) with consistent data mapping and visual states.

## Architecture

### State Management (Zustand)
The `SearchFormStore` will be updated to handle the new payment methods:
- Type: `paymentMethod: "paypal" | "card" | "cash"`
- Initial State: `"card"` (Debit / Credit)

### Data-Driven UI (Molecule)
The `PaymentMethods` molecule will define a configuration array for rendering:
```typescript
const paymentOptions = [
  { value: "paypal", imageSrc: paypalLogo.src, label: t("...paypal"), infoKey: "paypalInfo" },
  { value: "card", imageSrc: cardLogo.src, label: t("...card"), infoKey: "cardInfo" },
  { value: "cash", imageSrc: cashLogo.src, label: t("...cash"), infoKey: "cashInfo" },
];
```

### Visual Enhancements (Atom)
The `PaymentMethod` atom will handle:
- **Custom Check Mark**: Uses `checked-on.svg` for `isSelected={true}` and `checked-off.svg` for `isSelected={false}`.
- **Brand Gradients**: Applied to the card container (10% unselected, 20% selected Brand Orange `#ff8400`).
- **Layout**: Internal `flex-row` for aligning the check mark, logo, and name.

### API Submission Logic
`BookingSubmission.tsx` will map the store values to uppercase strings for the legacy API:
- `paypal` -> `PAYPAL`
- `card` -> `CARD`
- `cash` -> `CASH`

## Component Details

### `PaymentMethod` Atom (Updated)
- **Props**: `value`, `isSelected`, `onSelect`, `imageSrc`, `imageAlt`, `label`.
- **SVG Inlining**: Render the check mark SVGs as inline `<img>` tags for simplicity.
- **Opacity**: Use arbitrary Tailwind values for the brand orange opacity (e.g., `bg-[#ff84001a]` for 10%, `bg-[#ff840033]` for 20%).

### `PaymentMethods` Molecule (Updated)
- **Layout**: `flex flex-col gap-4` to stack cards vertically.
- **Details Section**: Render the markdown text for the currently selected method directly below the options grid/list.

## Considerations
- **Markdown Rendering**: All `infoKey` translations will be processed through `marked.parse()`.
- **Mobile Responsiveness**: The vertical stack (`flex-col`) is mandatory to avoid horizontal overflow on small devices.
- **Image Consistency**: Use `paypal.png`, `credit-card.webp`, and `cash.png` from `@src/assets/images/checkout/payment/`.
