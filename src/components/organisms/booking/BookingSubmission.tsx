import { useState } from "react";
import { useSearchFormStore } from "../../../store/search-form";
import { createReservation } from "../../../lib/transportation/api";
import ButtonCta from "../../atoms/ButtonCta";
import { getTranslations } from "../../../lib/i18n/utils";
import clsx from "clsx";
import Swal from "sweetalert2";

interface Props {
  lang: "en" | "es";
}

export default function BookingSubmission({ lang }: Props) {
  const t = getTranslations(lang);
  const {
    selectedVehicle,
    firstName,
    lastName,
    email,
    phone,
    flightNumber,
    notes,
    departureDate,
    departureTime,
    paymentMethod,
  } = useSearchFormStore();

  const [isLoading, setIsLoading] = useState(false);

  // Validation Logic
  const isValid =
    !!selectedVehicle?.token &&
    !!firstName?.trim() &&
    !!lastName?.trim() &&
    !!email?.trim() &&
    !!phone?.trim();

  const handleSubmit = async () => {
    setIsLoading(true);

    if (!isValid) {
      Swal.fire({
        icon: "error",
        title: t("pages.register.errors.title"),
        text: t("pages.register.errors.missingFields"),
        confirmButtonColor: "#00A651",
      });
      setIsLoading(false);
      return;
    }

    try {
      const origin = window.location.origin;
      const success_url = `${origin}/${lang === "es" ? "es/gracias" : "thank-you"}`;
      const cancel_url = `${origin}/${lang === "es" ? "es/cancelar" : "cancel"}`;

      const payload = {
        service_token: selectedVehicle!.token,
        first_name: firstName,
        last_name: lastName,
        email_address: email,
        phone: phone,
        flight_number: flightNumber,
        comments: notes,
        pay_at_arrival:
          paymentMethod === "stripe" || paymentMethod === "paypal" ? 0 : 1,
        arrival_date: `${departureDate} ${departureTime}`,
        payment_method: paymentMethod.toUpperCase(),
        success_url,
        cancel_url,
        language: lang,
      };

      const response = await createReservation(payload);

      if (response.error) {
        const errorMessage =
          typeof response.error === "string"
            ? response.error
            : response.error.message;
        throw new Error(errorMessage);
      }

      if (response.payment_link) {
        window.location.href = response.payment_link;
        return;
      }

      await Swal.fire({
        icon: "success",
        title: t("pages.register.success.title"),
        text: t("pages.register.success.message"),
        confirmButtonColor: "#00A651",
      });

      // Redirect to thank you page if no payment link (e.g. cash)
      window.location.href = success_url;
    } catch (err: any) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: t("pages.register.errors.title"),
        text: err.message || t("pages.register.errors.generic"),
        confirmButtonColor: "#00A651",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <p className="text-gray-dark text-sm">
        {t("pages.register.paymentMethod.termsInfo")}{" "}
        <a
          href="/terms-and-conditions"
          className="text-blue font-bold underline"
        >
          {t("global.footer.columns.information.links.1.text")}
        </a>
      </p>

      <ButtonCta
        onClick={handleSubmit}
        disabled={isLoading || !isValid}
        variant="green"
        className={clsx(
          "w-full! py-4 text-xl font-bold uppercase",
          isLoading || !isValid
            ? "cursor-not-allowed! opacity-50 hover:scale-100!"
            : "",
        )}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {t("pages.register.submitting")}
          </div>
        ) : (
          t("pages.register.submit")
        )}
      </ButtonCta>
    </div>
  );
}
