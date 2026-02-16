import ButtonCta from "../../atoms/ButtonCta";
import { getTranslations } from "../../../lib/i18n/utils";

export interface PaymentUpdateActionProps {
  actionUrl?: string; // Optional, defaults to current path
  lang: "en" | "es";
  currentPath?: string; // Passed from parent if needed
}

export default function PaymentUpdateAction({
  actionUrl,
  lang,
  currentPath,
}: PaymentUpdateActionProps) {
  const t = getTranslations(lang);
  // Default actionUrl logic: in Astro it was Astro.url.pathname.
  // In client-side React, we rely on props or window.location.pathname.
  const href = actionUrl || currentPath || "#";

  return (
    <section className="bg-blue/10 mb-12 flex flex-col items-center justify-between gap-4 rounded-lg p-4 text-center md:flex-row md:text-left">
      <p className="font-medium text-black">
        {t("pages.reservationDetail.updatePayment.text")}
      </p>
      <div className="w-full md:w-auto">
        <ButtonCta href={href} variant="blue" className="w-full md:w-auto">
          {t("pages.reservationDetail.updatePayment.button")}
        </ButtonCta>
      </div>
    </section>
  );
}
