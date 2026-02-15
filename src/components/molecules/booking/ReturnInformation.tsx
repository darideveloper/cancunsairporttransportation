import { useSearchFormStore } from "../../../store/search-form";
import { getTranslations } from "../../../lib/i18n/utils";
import Input from "../../atoms/form/Input";
import H2 from "../../atoms/H2";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export interface ReturnInformationProps {
  lang: "en" | "es";
}

export default function ReturnInformation({ lang }: ReturnInformationProps) {
  const { returnDate, returnTime, tripType } = useSearchFormStore();

  const t = getTranslations(lang);

  if (tripType !== "roundTrip") {
    return null;
  }

  return (
    <div className="space-y-6 rounded-2xl bg-white px-4 py-6 shadow-xl">
      <H2 className="mb-2">{t("pages.register.returnInformation.title")}</H2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          {
            label: t("pages.register.returnInformation.returnDate"),
            name: "returnDate",
            value: returnDate,
            readOnly: true,
            icon: FaCalendarAlt,
          },
          {
            label: t("pages.register.returnInformation.returnTime"),
            name: "returnTime",
            value: returnTime,
            readOnly: true,
            icon: FaClock,
          },
        ].map((field) => (
          <Input
            key={field.name}
            {...field}
            disabled={true}
            className="cursor-not-allowed opacity-50"
          />
        ))}
      </div>
    </div>
  );
}
