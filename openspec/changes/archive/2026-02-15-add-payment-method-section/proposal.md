# Proposal: Add Payment Method Section to Register Page

## Context
The user wants to add a "Payment method" section to the registration (`register`) page. This section will allow users to select between "PayPal" and "Credit / Debit Card" (Stripe). The UI should include a security reassurance message, a dynamic message when "Visa" (Credit / Debit Card) is selected, and a row of brand logos under the final submit button.

## Objectives
- Create a new `PaymentMethod.tsx` component.
- Integrate it into the `Register.astro` page.
- Implement selection logic (PayPal vs. Stripe).
- Show a dynamic message when Credit / Debit Card (Stripe) is selected.
- Use the existing translation system (`getTranslations`) for Spanish and English.
- Reuse existing `H2`, `clsx`, and `ButtonCta` components.
- Render security brand logos under the submit button.

## Proposed Changes

### 1. Store Update
Modify `src/store/search-form.ts` to include `paymentMethod`.

```typescript
// src/store/search-form.ts
export type PaymentMethodType = "paypal" | "stripe";

interface SearchFormState {
  // ... existing fields
  paymentMethod: PaymentMethodType;
  setPaymentMethod: (method: PaymentMethodType) => void;
}

// In the store creation:
paymentMethod: "stripe",
setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
```

### 2. New Component: `PaymentMethod.tsx`
Create `src/components/molecules/booking/PaymentMethod.tsx`.

```tsx
import { useSearchFormStore } from "../../../store/search-form";
import { getTranslations } from "../../../lib/i18n/utils";
import H2 from "../../atoms/H2";
import clsx from "clsx";
import { FaShieldAlt } from "react-icons/fa";

// Image Imports
import paypalIcon from "../../../assets/images/checkout/payment/paypal.png";
import visaIcon from "../../../assets/images/checkout/payment/visa.png";
import mastercardIcon from "../../../assets/images/checkout/payment/mastercard.png";
import stripeLogo from "../../../assets/images/checkout/payment/stripe.webp";

export default function PaymentMethod({ lang }: { lang: "en" | "es" }) {
  const { paymentMethod, setPaymentMethod } = useSearchFormStore();
  const t = getTranslations(lang);

  return (
    <div className="space-y-6 rounded-2xl bg-white px-4 py-6 shadow-xl">
      <H2 className="mb-2">{t("pages.register.paymentMethod.title")}</H2>
      
      <div className="flex items-center gap-3 text-sm font-medium text-gray-dark">
        <FaShieldAlt className="text-black h-5 w-5" />
        <span>
          {t("pages.register.paymentMethod.securityInfo")}{" "}
          <img src={stripeLogo.src} alt="Stripe" className="inline-block h-5 ml-1" />
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* PayPal Option */}
        <label
          className={clsx(
            "relative flex cursor-pointer items-center gap-4 rounded-xl border-2 p-6 transition-all",
            paymentMethod === "paypal" ? "border-blue bg-blue/5" : "border-gray-200"
          )}
        >
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
            className="h-5 w-5 accent-blue"
          />
          <img src={paypalIcon.src} alt="PayPal" className="h-8" />
        </label>

        {/* Stripe/Card Option */}
        <label
          className={clsx(
            "relative flex cursor-pointer items-center gap-4 rounded-xl border-2 p-6 transition-all",
            paymentMethod === "stripe" ? "border-blue bg-blue/5" : "border-gray-200"
          )}
        >
          <input
            type="radio"
            name="paymentMethod"
            value="stripe"
            checked={paymentMethod === "stripe"}
            onChange={() => setPaymentMethod("stripe")}
            className="h-5 w-5 accent-blue"
          />
          <div className="flex items-center gap-2">
            <img src={visaIcon.src} alt="Visa" className="h-6" />
            <img src={mastercardIcon.src} alt="Mastercard" className="h-6" />
            <span className="text-sm font-semibold">{t("pages.register.paymentMethod.creditCard")}</span>
          </div>
        </label>
      </div>

      {paymentMethod === "stripe" && (
        <p className="mt-4 text-sm text-gray-dark font-medium italic">
          {t("pages.register.paymentMethod.stripeExtraInfo")}
        </p>
      )}
    </div>
  );
}
```

### 3. New Component: `PaymentBrands.tsx`
Create `src/components/molecules/booking/PaymentBrands.tsx` to render the logos.

```tsx
import safeTravel from "../../../assets/images/checkout/brands/safe-travel-item.png";
import cancun from "../../../assets/images/checkout/brands/cancun-item.png";
import sct from "../../../assets/images/checkout/brands/sct-item.png";
import mexico from "../../../assets/images/checkout/brands/mexico-item.png";
import paypal from "../../../assets/images/checkout/brands/paypal-item.png";
import stripe from "../../../assets/images/checkout/brands/stripe-item.png";
import letsEncrypt from "../../../assets/images/checkout/brands/lets-encrypt-item.png";

export default function PaymentBrands() {
  const brands = [
    { src: safeTravel.src, alt: "Safe Travel" },
    { src: cancun.src, alt: "Cancun" },
    { src: sct.src, alt: "SCT" },
    { src: mexico.src, alt: "Mexico" },
    { src: paypal.src, alt: "PayPal" },
    { src: stripe.src, alt: "Stripe" },
    { src: letsEncrypt.src, alt: "Let's Encrypt" },
  ];

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-80 transition-opacity hover:opacity-100">
      {brands.map((brand) => (
        <img key={brand.alt} src={brand.src} alt={brand.alt} className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
      ))}
    </div>
  );
}
```

### 4. Integration in `Register.astro`
Add the new components and the Submit button.

```astro
    <PaymentMethod
      lang={lang}
      client:load
    />

    <div class='mt-6 flex flex-col items-center gap-4'>
      <p class='text-sm text-gray-dark'>
        {t('pages.register.paymentMethod.termsInfo')}{' '}
        <a href='/terms-and-conditions' class='text-blue font-bold underline'>
          {t('global.footer.columns.information.links.1.text')}
        </a>
      </p>
      
      <ButtonCta
        variant='green'
        className='w-full! text-xl font-bold uppercase py-4'
        client:load
      >
        {t('pages.register.submit')}
      </ButtonCta>

      <PaymentBrands />
    </div>
```

### 5. Translations
Update `src/messages/en.json` and `src/messages/es.json`.

