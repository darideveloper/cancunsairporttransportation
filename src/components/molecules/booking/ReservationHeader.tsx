import { FaCheckCircle, FaEnvelope } from "react-icons/fa";
import ButtonCta from "../../atoms/ButtonCta";
import ReservationStatusBadge from "./ReservationStatusBadge";
import { getTranslations } from "../../../lib/i18n/utils";
import { routes } from "../../../lib/i18n/routes";
import type { GetReservationResponse } from "../../../lib/transportation/legacy-api.types";

export interface ReservationHeaderProps {
  user: GetReservationResponse["client"];
  status: string;
  lang: "en" | "es";
}

export default function ReservationHeader({
  user,
  status,
  lang,
}: ReservationHeaderProps) {
  const t = getTranslations(lang);
  const statusKey = status as "CONFIRMED" | "PENDING" | "CANCELLED";

  return (
    <header className="mb-12 text-center">
      <h1 className="mb-8 text-4xl font-bold text-black capitalize">
        {t("pages.reservationDetail.heading")}
      </h1>

      <div className="flex flex-col items-center gap-4">
        <div className="text-blue text-8xl">
          <FaCheckCircle className="text-blue h-24 w-24" />
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="mt-4 flex flex-col items-center gap-2 md:mr-4 md:items-end">
            <div className="text-lg font-bold">
              {t("pages.reservationDetail.user.greeting", {
                name: `${user.first_name} ${user.last_name}`,
              })}
            </div>
            <div className="flex gap-2 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">#</span>
                {user.phone}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center">
                  <FaEnvelope />
                </div>
                {user.email}
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col items-center gap-4 border-l-0 border-gray-300 pl-0 md:flex-row md:border-l md:pl-8">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <span className="text-sm font-bold text-black">
                {t("pages.reservationDetail.user.statusLabel")}
              </span>
              <ReservationStatusBadge status={status} lang={lang} size="sm" />
            </div>
            <div className="flex">
              <ButtonCta variant="red" href={`/${routes.reservation[lang]}`}>
                {t("pages.reservationDetail.user.logout")}
              </ButtonCta>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
