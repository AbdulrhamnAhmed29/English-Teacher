import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { StarMark } from "../../../shared/components/ui/StarMark";

/**
 * Philosophy section: the signature quote, given its own quiet, full-width
 * moment since it's the emotional core of the portfolio.
 */
export function Philosophy() {
  const { t } = useTranslation();

  return (
    <section id="philosophy" className="relative overflow-hidden bg-ink-900 px-6 py-28 text-cream-50">
      <StarMark className="absolute -left-4 top-10 h-24 w-24 text-gold-500/20" />
      <StarMark className="absolute bottom-8 right-6 h-16 w-16 text-coral-400/20" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-coral-300">
          {t("philosophy.eyebrow")}
        </span>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-2xl font-medium leading-snug sm:text-3xl md:text-4xl"
        >
          “{t("philosophy.quote")}”
        </motion.p>
        <span className="font-hand text-2xl text-coral-300">{t("philosophy.signature")}</span>
      </div>
    </section>
  );
}
