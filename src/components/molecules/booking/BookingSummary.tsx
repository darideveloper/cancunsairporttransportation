import { useSearchFormStore } from "../../../store/search-form";
import { getTranslations } from "../../../lib/i18n/utils";
import { FaCar } from "react-icons/fa";
import clsx from "clsx";

interface BookingSummaryProps {
  lang: "en" | "es";
}

export default function BookingSummary({ lang }: BookingSummaryProps) {
  const { selectedVehicle, currency, passengers } = useSearchFormStore();
  const t = getTranslations(lang);

  if (!selectedVehicle) return null;

  const formattedPrice = new Intl.NumberFormat(
    lang === "es" ? "es-MX" : "en-US",
    {
      style: "currency",
      currency: currency,
    },
  ).format(selectedVehicle.price);

  return (
    <div
      className={clsx(
        "flex items-center justify-between rounded-lg bg-black p-4 text-white shadow-md",
      )}
    >
      <div className="flex w-full flex-col items-center justify-center gap-1">
        <span className="text-yellow text-xl font-bold">
          {formattedPrice} {currency}
        </span>
        <div className="flex items-center gap-2 text-sm text-white">
          <FaCar />
          <span>
            {t("global.booking.summary.vehicleDescription", {
              count: String(passengers),
              vehicleName: selectedVehicle.name,
              maxPassengers: String(selectedVehicle.maxPassengers),
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
