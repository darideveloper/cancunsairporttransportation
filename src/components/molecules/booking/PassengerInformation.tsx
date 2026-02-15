// src/components/molecules/booking/PassengerInformation.tsx
import type { ChangeEvent } from "react";
import { useSearchFormStore } from "../../../store/search-form";
import { getTranslations } from "../../../lib/i18n/utils";
import Input from "../../atoms/form/Input";
import Textarea from "../../atoms/form/Textarea";
import H2 from "../../atoms/H2";

export interface PassengerInformationProps {
  lang: "en" | "es";
}

export default function PassengerInformation({
  lang,
}: PassengerInformationProps) {
  const {
    firstName,
    lastName,
    email,
    phone,
    notes,
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setNotes,
  } = useSearchFormStore();

  const t = getTranslations(lang);

  return (
    <div className="space-y-6 rounded-2xl bg-white px-4 py-6 shadow-xl">
      <H2>{t("pages.register.passengerInformation.title")}</H2>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input
          label={t("pages.register.passengerInformation.firstName")}
          name="firstName"
          value={firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
          placeholder={t(
            "pages.register.passengerInformation.firstNamePlaceholder",
          )}
          required
        />
        <Input
          label={t("pages.register.passengerInformation.lastName")}
          name="lastName"
          value={lastName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
          placeholder={t(
            "pages.register.passengerInformation.lastNamePlaceholder",
          )}
          required
        />
        <Input
          label={t("pages.register.passengerInformation.email")}
          name="email"
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder={t(
            "pages.register.passengerInformation.emailPlaceholder",
          )}
          required
        />
        <Input
          label={t("pages.register.passengerInformation.phone")}
          name="phone"
          type="tel"
          value={phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
          placeholder={t(
            "pages.register.passengerInformation.phonePlaceholder",
          )}
          required
        />
        <div className="md:col-span-2">
          <Textarea
            label={t("pages.register.passengerInformation.notes")}
            name="notes"
            value={notes}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setNotes(e.target.value)
            }
            placeholder={t(
              "pages.register.passengerInformation.notesPlaceholder",
            )}
          />
        </div>
      </div>
    </div>
  );
}
