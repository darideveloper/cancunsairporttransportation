// Libs
import { getTranslations } from "../../../lib/i18n/utils";
import clsx from "clsx";

// Icons
import { FaCar } from "react-icons/fa";

// Types
import type { SelectedVehicle } from "../../../store/search-form";

interface BookingSummaryProps {
  lang: "en" | "es";
  selectedVehicle: SelectedVehicle | null;
  currency: string;
  passengers: number;
}

export default function BookingSummary({
  lang,
  selectedVehicle,
  currency,
  passengers,
}: BookingSummaryProps) {
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
