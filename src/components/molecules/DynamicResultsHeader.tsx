import React from "react";
import { useSearchFormStore } from "../../store/search-form";
import { useTranslations } from "../../lib/i18n/utils";
import type { ui } from "../../lib/i18n/ui";
import clsx from "clsx";

interface DynamicResultsHeaderProps {
  lang: keyof typeof ui;
}

const DynamicResultsHeader: React.FC<DynamicResultsHeaderProps> = ({
  lang,
}) => {
  const { locationFromData, locationToData } = useSearchFormStore();
  const t = useTranslations(lang);

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
};

export default DynamicResultsHeader;
