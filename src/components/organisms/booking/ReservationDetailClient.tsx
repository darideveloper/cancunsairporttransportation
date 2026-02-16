import { useEffect, useState } from "react";
import clsx from "clsx";
import { useReservationStore } from "../../../store/reservation";
import { getReservation } from "../../../lib/transportation/api";
import type { GetReservationResponse } from "../../../lib/transportation/legacy-api.types";
import ReservationHeader from "../../molecules/booking/ReservationHeader";
import PaymentUpdateAction from "../../molecules/booking/PaymentUpdateAction";
import ReservationDetailsList from "../../molecules/booking/ReservationDetailsList";
import ReservationDetailSkeleton from "../../molecules/booking/ReservationDetailSkeleton";
import ReservationStatusBadge from "../../molecules/booking/ReservationStatusBadge";
import BookingSummary from "../../molecules/booking/BookingSummary";
import H2 from "../../atoms/H2";
import { getTranslations } from "../../../lib/i18n/utils";

// Assets
import stripeImage from "../../../assets/images/checkout/stripe.png";

interface ReservationDetailClientProps {
  lang: "en" | "es";
}

export default function ReservationDetailClient({
  lang,
}: ReservationDetailClientProps) {
  const { code, email } = useReservationStore();
  const [data, setData] = useState<GetReservationResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const t = getTranslations(lang);

  useEffect(() => {
    if (!code || !email) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getReservation(code, email, lang);
        setData(result);
      } catch (err: any) {
        console.error(err);
        setError(
          err.message || "An error occurred fetching reservation details.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [code, email, lang]);

  if (loading) {
    return <ReservationDetailSkeleton />;
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="text-red-600">
          <h2 className="mb-2 text-2xl font-bold">Error</h2>
          <p className="mb-4">{error}</p>
          <a href="/" className="text-blue-600 hover:underline">
            Go to Home
          </a>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm">
        <p className="text-lg text-gray-600">
          {t("pages.reservationDetail.noReservation") ||
            "No reservation found. Please make sure you have a valid confirmation code."}
        </p>
        <a href="/" className="text-accent mt-4 hover:underline">
          Go to Home
        </a>
      </div>
    );
  }

  const items = Object.entries(data.items);
  // We take the first item to display in summary as primary vehicle info
  const firstItem = items[0]?.[1];

  // Construct minimal selectedVehicle for BookingSummary
  // Note: We lack maxPassengers/Luggage/Image in the API response currently.
  // We'll leave them as 0 or empty string.
  const selectedVehicle = firstItem
    ? {
        token: "legacy",
        name: firstItem.service_type_name,
        price: data.sales.total,
        maxPassengers: 0,
        maxLuggage: 0,
        image: "",
        currency: data.config.currency,
        type: "private",
      }
    : null;

  return (
    <div className="container mx-auto max-w-6xl px-4">
      <ReservationHeader user={data.client} status={data.status} lang={lang} />

      <PaymentUpdateAction lang={lang} />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-7">
        {/* Left Column: Details */}
        <section className="space-y-6 lg:col-span-4">
          <aside className="border-accent rounded-r-lg border-l-4 bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-bold">
              {t("pages.reservationDetail.user.statusLabel")}
            </h2>
            <ReservationStatusBadge
              status={data.status}
              lang={lang}
              size="lg"
            />
          </aside>

          {items.map(([itemCode, item]) => (
            <div key={itemCode}>
              <ReservationDetailsList code={itemCode} item={item} lang={lang} />
            </div>
          ))}
        </section>

        {/* Right Column: Payment Summary */}
        <aside className="space-y-6 lg:col-span-3">
          <H2 className="text-blue text-xl">
            {t("pages.reservationDetail.payment.methods")}
          </H2>

          {selectedVehicle && (
            <BookingSummary
              lang={lang}
              selectedVehicle={selectedVehicle}
              currency={data.config.currency}
              passengers={1} // Defaulting to 1 as we don't have pax count in items
            />
          )}

          <figure className="flex justify-center">
            <img
              src={stripeImage.src}
              width={stripeImage.width}
              height={stripeImage.height}
              alt="Stripe Payment"
              className="w-full object-contain"
            />
          </figure>
        </aside>
      </div>
    </div>
  );
}
