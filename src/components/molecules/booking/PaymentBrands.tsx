import safeTravel from "../../../assets/images/checkout/brands/safe-travel-item.webp";
import cancun from "../../../assets/images/checkout/brands/cancun-item.webp";
import sct from "../../../assets/images/checkout/brands/sct-item.webp";
import mexico from "../../../assets/images/checkout/brands/mexico-item.webp";
import paypal from "../../../assets/images/checkout/brands/paypal-item.webp";
import stripe from "../../../assets/images/checkout/brands/stripe-item.webp";
import letsEncrypt from "../../../assets/images/checkout/brands/lets-encrypt-item.webp";

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
        <img
          key={brand.alt}
          src={brand.src}
          alt={brand.alt}
          className="h-16 w-auto object-contain grayscale transition-all hover:grayscale-0"
        />
      ))}
    </div>
  );
}
