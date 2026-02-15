import { useSearchFormStore } from "../../../store/search-form";
import { getTranslations } from "../../../lib/i18n/utils";
import type { ui } from "../../../lib/i18n/ui";
import clsx from "clsx";

interface DynamicResultsHeaderProps {
  lang: keyof typeof ui;
}

export default function DynamicResultsHeader({
  lang,
}: DynamicResultsHeaderProps) {
  const locationFromData = useSearchFormStore(
    (state) => state.locationFromData,
  );
  const locationToData = useSearchFormStore((state) => state.locationToData);
  const t = getTranslations(lang);

  if (!locationFromData || !locationToData) {
    return null;
  }

  const title = t("pages.results.dynamicTitle", {
    from: locationFromData.name,
    to: locationToData.name,
  });

  return (
    <h2 className={clsx("font-title mt-2 text-2xl font-bold text-gray-800")}>
      {title}
    </h2>
  );
}
