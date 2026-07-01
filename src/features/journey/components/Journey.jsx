import { useTranslation } from "react-i18next";
import { GraduationCap, Briefcase } from "lucide-react";
import { SectionHeading } from "../../../shared/components/ui/SectionHeading";
import { TimelineItem } from "./TimelineItem";
import { EDUCATION_KEYS, EXPERIENCE_KEYS } from "../data/journeyData";
import Certificates from "./Certificates";

export function Journey() {
  const { t } = useTranslation();

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-black px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={t("journey.eyebrow")}
          title={t("journey.title")}
          className="mb-20"
        />

        {/* Education + Experience */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Education */}
          <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-md">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">
                <GraduationCap
                  size={24}
                  className="text-yellow-500"
                />
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-yellow-500">
                  {t("journey.education_label")}
                </p>
              </div>
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

          {/* Experience */}
          <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-md">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">
                <Briefcase
                  size={24}
                  className="text-yellow-500"
                />
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-yellow-500">
                  {t("journey.experience_label")}
                </p>
              </div>
            </div>

            {EXPERIENCE_KEYS.map((key, index) => (
              <TimelineItem
                key={key}
                index={index}
                title={t(`journey.items.${key}.title`)}
                detail={t(`journey.items.${key}.detail`)}
                responsibilities={t(
                  `journey.items.${key}.responsibilities`,
                  { returnObjects: true }
                )}
                isLast={index === EXPERIENCE_KEYS.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-24">
          <Certificates />
        </div>
      </div>
    </section>
  );
}