import { useTranslation } from "react-i18next";
import { SectionHeading } from "../../../shared/components/ui/SectionHeading";
import { StrengthCard } from "./StrengthCard";
import { STRENGTHS } from "../data/strengthsData";

/**
 * Strengths section: a grid of the five teaching strengths.
 */
export function Strengths() {
  const { t } = useTranslation();

  return (
    <section id="strengths" className="bg-cream-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("strengths.eyebrow")}
          title={t("strengths.title")}
          align="center"
          className="mb-14"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STRENGTHS.map(({ key, Icon }, index) => (
            <StrengthCard
              key={key}
              Icon={Icon}
              title={t(`strengths.items.${key}.title`)}
              detail={t(`strengths.items.${key}.detail`)}
              delay={index * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
