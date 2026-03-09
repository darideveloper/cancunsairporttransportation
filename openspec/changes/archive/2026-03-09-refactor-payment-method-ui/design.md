# Design: PaymentMethod Component Refactoring

The refactoring will decouple the logic and rendering into a plural container (`PaymentMethods` molecule) and a singular item (`PaymentMethod` atom).

## Architecture

### `PaymentMethod` Atom (New Component)
Located in: `src/components/atoms/booking/PaymentMethod.tsx`

This component renders an interactive card with a radio button and a dynamic image.

**Props Interface:**
```typescript
interface PaymentMethodProps {
  value: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  label?: string; // Optional label for text-based methods
}
```

### `PaymentMethods` Molecule (Updated Component)
Located in: `src/components/molecules/booking/PaymentMethods.tsx` (Renamed from `PaymentMethod.tsx`)

The container will manage:
- Store interaction via `useSearchFormStore`.
- Translations via `getTranslations`.
- A configuration array for dynamic rendering.

## Refactored Structure

```tsx
// Inside PaymentMethods.tsx (Molecule)
const paymentOptions = [
  { value: "paypal", imageSrc: paypalIcon.src, imageAlt: "PayPal" },
  { value: "stripe", imageSrc: cardIcons.src, imageAlt: "Credit Card", label: t("...") },
];

return (
  <div className="space-y-6 ...">
    <H2>{t("...")}</H2>
    {/* Security Info */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {paymentOptions.map((option) => (
        <PaymentMethod
          key={option.value}
          value={option.value}
          isSelected={paymentMethod === option.value}
          onSelect={setPaymentMethod}
          imageSrc={option.imageSrc}
          imageAlt={option.imageAlt}
          label={option.label}
        />
      ))}
    </div>
    {/* Conditional payment method info */}
  </div>
);
```

## Considerations
- **Simplified Item**: The `PaymentMethod` atom is now simpler, focusing only on the radio selection and displaying an image (or image + label).
- **Naming Consistency**: Parent is plural (`PaymentMethods`), Child is singular (`PaymentMethod`).
- **Data-Driven**: Loop rendering ensures that future methods like "Cash" can be added by simply adding a new item to the configuration array.
