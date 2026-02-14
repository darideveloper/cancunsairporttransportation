import { FaUser, FaMapMarkerAlt, FaThumbsUp } from "react-icons/fa";
import clsx from "clsx";
import { useSearchFormStore } from "../../store/search-form";
import { useTranslations } from "../../lib/i18n/utils";

export interface SelectedVehicleCardProps {
  lang: "en" | "es";
}

export default function SelectedVehicleCard({
  lang,
}: SelectedVehicleCardProps) {
  const { selectedVehicle, locationFrom, locationTo, passengers, tripType } =
    useSearchFormStore();

  const t = useTranslations(lang);

  if (!selectedVehicle) return null;

  const tripTypeLabel =
    tripType === "oneWay"
      ? t("global.booking.tripType.oneWay")
      : t("global.booking.tripType.roundTrip");

  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-sm md:flex-row",
      )}
    >
      {/* Vehicle Image */}
      <div className="shrink-0">
        <img
          src={selectedVehicle.image}
          alt={selectedVehicle.name}
          className="h-auto w-32 object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2">
        {/* Header: Vehicle Name and Capacity */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-900">
            {selectedVehicle.name}
          </h3>
          <p className="text-sm text-gray-600">
            {t("global.booking.summary.capacity", {
              maxPassengers: selectedVehicle.maxPassengers.toString(),
            })}
          </p>
        </div>

        {/* Details Row */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          {/* Passengers */}
          <div className="flex items-center gap-2">
            <FaUser className="text-gray-400" />
            <span>
              {t("global.booking.summary.passengers", {
                count: passengers.toString(),
              })}
            </span>
          </div>

          {/* Origin */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>
              {t("global.booking.summary.origin", {
                location: locationFrom,
              })}
            </span>
          </div>

          {/* Destination */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-400" />
            <span>
              {t("global.booking.summary.destination", {
                location: locationTo,
              })}
            </span>
          </div>

          {/* Trip Type */}
          <div className="flex items-center gap-2">
            <FaThumbsUp className="text-gray-400" />
            <span>{tripTypeLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
