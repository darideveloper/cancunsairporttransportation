import { useSearchFormStore } from "../../../store/search-form";
import { getTranslations } from "../../../lib/i18n/utils";
import H2 from "../../atoms/H2";
import { FaShieldAlt } from "react-icons/fa";
import { marked } from "marked";

// Child Component
import PaymentMethod from "../../atoms/booking/PaymentMethod";

// Image Imports
import paypalIcon from "../../../assets/images/checkout/payment/paypal.png";
import visaIcon from "../../../assets/images/checkout/payment/visa.png";
import mastercardIcon from "../../../assets/images/checkout/payment/mastercard.png";
import stripeLogo from "../../../assets/images/checkout/payment/stripe.webp";

export default function PaymentMethods({ lang }: { lang: "en" | "es" }) {
  const { paymentMethod, setPaymentMethod } = useSearchFormStore();
  const t = getTranslations(lang);

  const paymentOptions = [
    {
      value: "paypal",
      images: [paypalIcon.src],
      imageAlt: "PayPal",
    },
    {
      value: "stripe",
      images: [visaIcon.src, mastercardIcon.src],
      imageAlt: "Credit Card",
      label: t("pages.register.paymentMethod.creditCard"),
    },
  ];

  return (
    <div className="space-y-6 rounded-2xl bg-white px-4 py-6 shadow-xl">
      <H2 className="mb-2">{t("pages.register.paymentMethod.title")}</H2>

      <div className="text-gray-dark flex items-center gap-3 text-sm font-medium">
        <FaShieldAlt className="h-5 w-5 text-black" />
        <span>
          {t("pages.register.paymentMethod.securityInfo")}{" "}
          <img
            src={stripeLogo.src}
            alt="Stripe"
            className="ml-1 inline-block h-5"
          />
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {paymentOptions.map((option) => (
          <PaymentMethod
            key={option.value}
            value={option.value}
            isSelected={paymentMethod === option.value}
            onSelect={setPaymentMethod}
            images={option.images}
            imageAlt={option.imageAlt}
            label={option.label}
          />
        ))}
      </div>

      {paymentMethod === "stripe" && (
        <div
          className="text-gray-dark mt-4 text-sm font-medium [&_p]:mb-2 [&_strong]:font-bold"
          dangerouslySetInnerHTML={{
            __html: marked.parse(
              t("pages.register.paymentMethod.creditCardInfo"),
            ) as string,
          }}
        />
      )}
    </div>
  );
}
