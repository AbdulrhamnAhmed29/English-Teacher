import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../shared/components/ui/SectionHeading";
import { useScrollReveal } from "../../../shared/hooks/useScrollReveal";

/**
 * About section: tells the accounting-to-teaching career transition,
 * which is the most distinctive fact in Rahma's story.
 */
export function About() {
  const { t } = useTranslation();
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" ref={ref} className="bg-cream-50 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
        <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <p className="font-body text-base leading-relaxed text-ink-600 md:text-lg">
            {t("about.body")}
          </p>
          <blockquote className="border-l-2 border-coral-400 pl-5 font-hand text-2xl leading-snug text-ink-800">
            “{t("about.quote")}”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
