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
import { marked } from "marked";

export default function PaymentMethod({ lang }: { lang: "en" | "es" }) {
  const { paymentMethod, setPaymentMethod } = useSearchFormStore();
  const t = getTranslations(lang);

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
        {/* PayPal Option */}
        <label
          className={clsx(
            "relative flex! cursor-pointer items-center justify-center gap-4 rounded-xl border-2 p-6 transition-all",
            paymentMethod === "paypal"
              ? "border-blue bg-blue/5"
              : "border-gray-200",
          )}
        >
          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
            className="accent-blue h-5! w-5!"
          />
          <img src={paypalIcon.src} alt="PayPal" className="h-16" />
        </label>

        {/* Stripe/Card Option */}
        <label
          className={clsx(
            "relative flex! cursor-pointer items-center justify-center gap-4 rounded-xl border-2 p-6 transition-all",
            paymentMethod === "stripe"
              ? "border-blue bg-blue/5"
              : "border-gray-200",
          )}
        >
          <input
            type="radio"
            name="paymentMethod"
            value="stripe"
            checked={paymentMethod === "stripe"}
            onChange={() => setPaymentMethod("stripe")}
            className="accent-blue h-5! w-5!"
          />
          <div className="flex items-center gap-2">
            <img src={visaIcon.src} alt="Visa" className="h-8" />
            <img src={mastercardIcon.src} alt="Mastercard" className="h-8" />
            <span className="max-w-28 text-sm font-semibold">
              {t("pages.register.paymentMethod.creditCard")}
            </span>
          </div>
        </label>
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
