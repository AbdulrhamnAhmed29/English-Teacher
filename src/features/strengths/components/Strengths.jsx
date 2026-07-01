import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../shared/components/ui/SectionHeading";
import { StrengthCard } from "./StrengthCard";
import { STRENGTHS } from "../data/strengthsData";

export function Strengths() {
  const { t } = useTranslation();

  return (
    <section
      id="strengths"
      className="relative overflow-hidden bg-black px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-500">
            {t("strengths.eyebrow")}
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {t("strengths.title")}
          </h2>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STRENGTHS.map(({ key, Icon }, index) => (
            <StrengthCard
              key={key}
              Icon={Icon}
              title={t(`strengths.items.${key}.title`)}
              detail={t(`strengths.items.${key}.detail`)}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}