import { useTranslation } from "react-i18next";
import { GraduationCap, Briefcase } from "lucide-react";
import { SectionHeading } from "../../../shared/components/ui/SectionHeading";
import { TimelineItem } from "./TimelineItem";
import { EDUCATION_KEYS, EXPERIENCE_KEYS } from "../data/journeyData";
import Certificates from "./Certificates";

/**
 * Journey section: education timeline + professional experience timeline.
 * A numbered sequence is appropriate here because the content genuinely
 * is chronological.
 */
export function Journey() {
  const { t } = useTranslation();

  return (
    <section id="journey" className="bg-cream-100 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t("journey.eyebrow")} title={t("journey.title")} className="mb-14" />

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-600">
              <GraduationCap size={16} className="text-coral-500" />
              {t("journey.education_label")}
            </div>
            {EDUCATION_KEYS.map((key, index) => (
              <TimelineItem
                key={key}
                index={index}
                title={t(`journey.items.${key}.title`)}
                detail={t(`journey.items.${key}.detail`)}
                isLast={index === EDUCATION_KEYS.length - 1}
              />
            ))}
          </div>
          <Certificates />
          <div>
            <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-600">
              <Briefcase size={16} className="text-coral-500" />
              {t("journey.experience_label")}
            </div>
            {EXPERIENCE_KEYS.map((key, index) => (
              <TimelineItem
                key={key}
                index={index}
                title={t(`journey.items.${key}.title`)}
                detail={t(`journey.items.${key}.detail`)}
                responsibilities={t(`journey.items.${key}.responsibilities`, { returnObjects: true })}
                isLast={index === EXPERIENCE_KEYS.length - 1}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
