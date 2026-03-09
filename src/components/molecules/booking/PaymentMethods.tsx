import { useSearchFormStore } from "../../../store/search-form";
import { getTranslations } from "../../../lib/i18n/utils";
import H2 from "../../atoms/H2";
import { FaShieldAlt } from "react-icons/fa";
import { marked } from "marked";

// Child Component
import PaymentMethod from "../../atoms/booking/PaymentMethod";

// Image Imports
import paypalIcon from "../../../assets/images/checkout/payment/paypal.png";
import creditCardIcon from "../../../assets/images/checkout/payment/credit-card.webp";
import cashIcon from "../../../assets/images/checkout/payment/cash.png";

export default function PaymentMethods({ lang }: { lang: "en" | "es" }) {
  const { paymentMethod, setPaymentMethod } = useSearchFormStore();
  const t = getTranslations(lang);

  const paymentOptions = [
    {
      value: "paypal",
      imageSrc: paypalIcon.src,
      imageAlt: "PayPal",
      label: t("pages.register.paymentMethod.paypal"),
      infoKey: "paypalInfo",
    },
    {
      value: "card",
      imageSrc: creditCardIcon.src,
      imageAlt: "Credit Card",
      label: t("pages.register.paymentMethod.card"),
      infoKey: "cardInfo",
    },
    {
      value: "cash",
      imageSrc: cashIcon.src,
      imageAlt: "Cash",
      label: t("pages.register.paymentMethod.cash"),
      infoKey: "cashInfo",
    },
  ] as const;

  const selectedOption = paymentOptions.find((opt) => opt.value === paymentMethod);

  return (
    <div className="space-y-6 rounded-2xl bg-white px-4 py-6 shadow-xl">
      <div>
        <H2 className="mb-2">{t("pages.register.paymentMethod.title")}</H2>
        <p className="text-gray-dark text-sm font-medium">
          {t("pages.register.paymentMethod.introInfo")}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {paymentOptions.map((option) => (
          <div key={option.value} className="flex flex-col gap-2">
            <PaymentMethod
              value={option.value}
              isSelected={paymentMethod === option.value}
              onSelect={(val) => setPaymentMethod(val as any)}
              imageSrc={option.imageSrc}
              imageAlt={option.imageAlt}
              label={option.label}
            />
            
            {paymentMethod === option.value && (
              <div
                className="text-gray-dark px-2 text-sm font-medium animate-in fade-in slide-in-from-top-1 duration-300 [&_p]:mb-2 [&_strong]:font-bold"
                dangerouslySetInnerHTML={{
                  __html: marked.parse(
                    t(`pages.register.paymentMethod.${option.infoKey}` as any),
                  ) as string,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
