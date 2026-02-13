// Icons
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// Components
import ButtonCta from "../atoms/ButtonCta";

// Utils
import { useTranslations } from "../../lib/i18n/utils";
import clsx from "clsx";
import { marked } from "marked";

// data
import { PHONES } from "../../data/site-config";

interface NoAvailabilityProps {
  lang: "en" | "es";
  className?: string;
}

/**
 * Component to be displayed when no vehicles are found for the search criteria.
 * Matches the requested design with contact options.
 */
export default function NoAvailability({
  lang,
  className,
}: NoAvailabilityProps) {
  const t = useTranslations(lang);

  return (
    <section
      className={clsx(
        "flex flex-col items-center justify-center rounded-2xl bg-[#EAF5FF] px-6 py-16 text-center shadow-sm",
        className,
      )}
    >
      <p className="mb-2 text-lg font-medium text-gray-700">
        {t("pages.results.sorry")}
      </p>

      <h2
        className="mb-10 max-w-2xl text-3xl leading-tight text-gray-900 md:text-4xl"
        dangerouslySetInnerHTML={{
          __html: marked.parseInline(
            t("pages.results.noAvailabilityMessage"),
          ) as string,
        }}
      />

      <div className="flex flex-wrap items-center justify-center gap-4">
        {[
          {
            icon: FaPhoneAlt,
            href: PHONES.usa.href,
            label: t("pages.results.usaCanada"),
            variant: "black" as const,
          },
          {
            icon: FaPhoneAlt,
            href: PHONES.mexico.href,
            label: t("pages.results.mexicoRest"),
            variant: "blackGhost" as const,
          },
          {
            icon: FaWhatsapp,
            href: `https://wa.me/${PHONES.mexico.raw.replace("+", "")}`,
            label: t("pages.results.whatsapp"),
            variant: "blackGhost" as const,
          },
        ].map(({ icon: Icon, href, label, variant }) => (
          <ButtonCta
            key={href + label}
            variant={variant}
            href={href}
            className="flex! h-16 flex-row items-center gap-3 px-6! py-4!"
          >
            <Icon className="text-lg" />
            <span className="inline-block max-w-32 text-left text-sm font-bold text-wrap">
              {label}
            </span>
          </ButtonCta>
        ))}
      </div>
    </section>
  );
}
