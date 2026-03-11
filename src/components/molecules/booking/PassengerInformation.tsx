// src/components/molecules/booking/PassengerInformation.tsx
import type { ChangeEvent } from "react";
import { useSearchFormStore, bookingRegistrationSchema } from "../../../store/search-form";
import { getTranslations } from "../../../lib/i18n/utils";
import Input from "../../atoms/form/Input";
import PhoneInput from "../../atoms/form/PhoneInput";
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
    errors,
    setFirstName,
    setLastName,
    setEmail,
    setPhone,
    setNotes,
    validateField,
  } = useSearchFormStore();

  const t = getTranslations(lang);

  const handleBlur = (name: string, value: string) => {
    validateField(name, value);
  };

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
          onBlur={(e: ChangeEvent<HTMLInputElement>) =>
            handleBlur("firstName", e.target.value)
          }
          error={errors.firstName ? t(errors.firstName) : undefined}
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
          onBlur={(e: ChangeEvent<HTMLInputElement>) =>
            handleBlur("lastName", e.target.value)
          }
          error={errors.lastName ? t(errors.lastName) : undefined}
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
          onBlur={(e: ChangeEvent<HTMLInputElement>) =>
            handleBlur("email", e.target.value)
          }
          error={errors.email ? t(errors.email) : undefined}
          placeholder={t(
            "pages.register.passengerInformation.emailPlaceholder",
          )}
          required
        />
        <PhoneInput
          label={t("pages.register.passengerInformation.phone")}
          name="phone"
          value={phone}
          onChange={(value) => setPhone(value || "")}
          onBlur={() => handleBlur("phone", phone)}
          error={errors.phone ? t(errors.phone) : undefined}
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
            className="h-24"
          />
        </div>
      </div>
    </div>
  );
}
