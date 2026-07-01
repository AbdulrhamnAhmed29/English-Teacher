import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "../../../shared/components/ui/Button";
import { StarMark } from "../../../shared/components/ui/StarMark";

/**
 * Hero / opening section. Leads with Rahma's teaching philosophy in her
 * own words rather than a generic stat block, since the thing that
 * distinguishes her is the human quality of her teaching, not a metric.
 */
export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-cream-100 bg-notebook-lines px-6 pb-24 pt-20 sm:pt-28"
    >
      <StarMark className="pointer-events-none absolute right-[8%] top-24 h-16 w-16 text-gold-500/70 animate-float-slow hidden sm:block" />

      <div className="mx-auto flex max-w-4xl flex-col items-start gap-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-ink-800/15 bg-cream-50 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-ink-600"
        >
          {t("hero.eyebrow")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-medium leading-[1.08] text-ink-900 sm:text-5xl md:text-6xl"
        >
          {t("hero.title_line1")}{" "}
          <span className="relative inline-block text-coral-500">
            {t("hero.title_highlight")}
            <svg
              viewBox="0 0 200 20"
              className="absolute -bottom-1 left-0 w-full text-coral-400"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 14 C 50 4, 150 4, 198 14"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="300"
                className="animate-draw-underline"
              />
            </svg>
          </span>{" "}
          {t("hero.title_line2")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl font-body text-lg text-ink-600"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button href="#journey" variant="primary" icon={<ArrowDown size={16} />}>
            {t("hero.cta_primary")}
          </Button>
          <Button href="#contact" variant="secondary" icon={<Mail size={16} />}>
            {t("hero.cta_secondary")}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2 flex items-center gap-2 font-hand text-2xl text-ink-600"
        >
          <span aria-hidden="true">✎</span> {t("hero.badge")}
        </motion.div>
      </div>
    </section>
  );
}
