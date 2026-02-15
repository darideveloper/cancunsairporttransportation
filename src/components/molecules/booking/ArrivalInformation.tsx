// src/components/molecules/ArrivalInformation.tsx
import type { ChangeEvent } from "react";
import { useSearchFormStore } from "../../../store/search-form";
import { getTranslations } from "../../../lib/i18n/utils";
import Input from "../../atoms/form/Input";
import H2 from "../../atoms/H2";
import { FaPlane, FaCalendarAlt, FaClock } from "react-icons/fa";

export interface ArrivalInformationProps {
  lang: "en" | "es";
}

export default function ArrivalInformation({ lang }: ArrivalInformationProps) {
  const {
    departureDate,
    departureTime,
    airline,
    flightNumber,
    setAirline,
    setFlightNumber,
  } = useSearchFormStore();

  const t = getTranslations(lang);

  return (
    <div className="space-y-6 rounded-2xl bg-white px-4 py-6 shadow-xl">
      <H2 className="mb-2">{t("pages.register.arrivalInformation.title")}</H2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: t("pages.register.arrivalInformation.pickupDate"),
            name: "pickupDate",
            value: departureDate,
            readOnly: true,
            icon: FaCalendarAlt,
          },
          {
            label: t("pages.register.arrivalInformation.pickupTime"),
            name: "pickupTime",
            value: departureTime,
            readOnly: true,
            icon: FaClock,
          },
          {
            label: t("pages.register.arrivalInformation.airline"),
            name: "airline",
            value: airline,
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              setAirline(e.target.value),
            placeholder: t(
              "pages.register.arrivalInformation.airlinePlaceholder",
            ),
            icon: FaPlane,
            required: true,
          },
          {
            label: t("pages.register.arrivalInformation.flightNumber"),
            name: "flightNumber",
            value: flightNumber,
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              setFlightNumber(e.target.value),
            placeholder: t(
              "pages.register.arrivalInformation.flightNumberPlaceholder",
            ),
            icon: FaPlane,
            required: true,
          },
        ].map((field) => (
          <Input
            key={field.name}
            {...field}
            disabled={field.readOnly}
            className={field.readOnly ? "cursor-not-allowed opacity-50" : ""}
          />
        ))}
      </div>
    </div>
  );
}
