import { useState, useEffect, useMemo } from "react";
import { useSearchFormStore, bookingRegistrationSchema } from "../../../store/search-form";
import {
  createReservation,
  capturePayment,
} from "../../../lib/transportation/api";
import ButtonCta from "../../atoms/ButtonCta";
import { getTranslations } from "../../../lib/i18n/utils";
import clsx from "clsx";
import Swal from "sweetalert2";

declare global {
  interface Window {
    paypal: any;
  }
}

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
    tripType,
    returnDate,
    returnTime,
    currency,
    setErrors,
  } = useSearchFormStore();

  const [isLoading, setIsLoading] = useState(false);
  const [paypalId, setPaypalId] = useState<string | null>(null);
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);

  // Dynamically load PayPal SDK based on currency
  useEffect(() => {
    setIsSdkLoaded(false);
    const scriptId = "paypal-sdk-script";
    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      existingScript.remove();
      // Important: PayPal SDK adds objects to window that can conflict if not cleared
      // but usually replacing the script and letting it re-init is enough for smart buttons
      if (window.paypal) {
        // Some internal cleanup might be needed if PayPal doesn't handle re-init well
        // but for smart buttons, loading a new script with new currency is the standard way.
      }
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.PUBLIC_PAYPAL_CLIENT_ID}&currency=${currency}&components=buttons&disable-funding=paylater,venmo`;
    script.async = true;
    script.onload = () => {
      setIsSdkLoaded(true);
    };
    script.onerror = () => {
      console.error("Failed to load PayPal SDK");
    };

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [currency]);

  // Clear PayPal buttons if payment method changes
  useEffect(() => {
    setPaypalId(null);
    const container = document.getElementById("paypal-button-container");
    if (container) {
      container.innerHTML = "";
    }
  }, [paymentMethod]);

  // Handle PayPal Button rendering after state update and DOM render
  useEffect(() => {
    if (
      paypalId &&
      isSdkLoaded &&
      (paymentMethod === "paypal" || paymentMethod === "card")
    ) {
      const container = document.getElementById("paypal-button-container");
      if (container) {
        // Clear previous buttons before rendering new ones
        container.innerHTML = "";
        renderPayPalButtons(paypalId, paymentMethod);
      }
    }
  }, [paypalId, paymentMethod, isSdkLoaded]);

  // Validation Logic
  const formData = useMemo(
    () => ({
      firstName,
      lastName,
      email,
      phone,
      departureDate,
      departureTime,
      tripType,
      returnDate,
      returnTime,
    }),
    [
      firstName,
      lastName,
      email,
      phone,
      departureDate,
      departureTime,
      tripType,
      returnDate,
      returnTime,
    ],
  );

  const validationResult = useMemo(
    () => bookingRegistrationSchema.safeParse(formData),
    [formData],
  );

  const isValid = !!selectedVehicle?.token;

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const success_url = `${origin}/${lang === "es" ? "es/gracias" : "thank-you"}`;
  const cancel_url = `${origin}/${lang === "es" ? "es/cancelar" : "cancel"}`;

  const renderPayPalButtons = (id: string, method: string) => {
    if (!window.paypal) {
      console.error("PayPal SDK not loaded");
      return;
    }

    window.paypal
      .Buttons({
        fundingSource:
          method === "card"
            ? window.paypal.FUNDING.CARD
            : window.paypal.FUNDING.PAYPAL,

        createOrder: () => id,

        onApprove: async (data: any, actions: any) => {
          setIsLoading(true);
          try {
            const captureData = await capturePayment({ id: data.orderID });

            if (captureData.status === "COMPLETED") {
              window.location.href = success_url;
            } else if (captureData.details?.[0]?.issue === "INSTRUMENT_DECLINED") {
              setIsLoading(false);
              return actions.restart();
            } else {
              throw new Error("Payment failed to capture");
            }
          } catch (err: any) {
            console.error(err);
            Swal.fire({
              icon: "error",
              title: t("pages.register.errors.title"),
              text: err.message || t("pages.register.errors.generic"),
              confirmButtonColor: "#00A651",
            });
            setIsLoading(false);
          }
        },

        onError: (err: any) => {
          console.error("PayPal Error:", err);
          Swal.fire({
            icon: "error",
            title: t("pages.register.errors.title"),
            text: t("pages.register.errors.generic"),
            confirmButtonColor: "#00A651",
          });
        },
      })
      .render("#paypal-button-container");
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const result = bookingRegistrationSchema.safeParse(formData);

    if (!result.success || !selectedVehicle?.token) {
      if (!result.success) {
        const fieldErrors: Record<string, string> = {};
        result.error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }

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
      const payload: any = {
        service_token: selectedVehicle!.token,
        first_name: firstName,
        last_name: lastName,
        email_address: email,
        phone: phone,
        flight_number: flightNumber,
        comments: notes,
        arrival_date: `${departureDate} ${departureTime}`,
        success_url,
        cancel_url,
        language: lang,
        payment_method: paymentMethod === "card" ? "credit_card" : paymentMethod,
      };

      const response = await createReservation(payload);

      if (response.error) {
        const errorMessage =
          typeof response.error === "string"
            ? response.error
            : response.error.message;
        throw new Error(errorMessage);
      }

      if (paymentMethod === "cash") {
        await Swal.fire({
          icon: "success",
          title: t("pages.register.success.title"),
          text: t("pages.register.success.message"),
          confirmButtonColor: "#00A651",
        });
        window.location.href = success_url;
        return;
      }

      const paypalId = response.paypal_id || response.payment_data?.url;

      if (paypalId) {
        setPaypalId(paypalId);
      } else if (response.payment_link) {
        // Fallback for legacy redirect flow if backend returns payment_link
        window.location.href = response.payment_link;
      } else {
        throw new Error("No payment method initialization data received");
      }
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
    <div className="mt-6 flex flex-col items-center gap-4 w-full">
      <p className="text-gray-dark text-sm text-center">
        {t("pages.register.paymentMethod.termsInfo")}{" "}
        <a
          href="/terms-and-conditions"
          className="text-blue font-bold underline"
        >
          {t("global.footer.columns.information.links.1.text")}
        </a>
      </p>

      {!paypalId ? (
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
      ) : (
        <div id="paypal-button-container" className="w-full min-h-[150px]"></div>
      )}

      {isLoading && paypalId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-8">
            <svg
              className="h-10 w-10 animate-spin text-green"
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
            <p className="text-lg font-bold">
              {t("pages.register.paymentMethod.processing")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
