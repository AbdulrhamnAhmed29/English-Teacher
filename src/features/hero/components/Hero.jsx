import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "../../../shared/components/ui/Button";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black px-6 py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-medium tracking-widest text-yellow-500 uppercase"
          >
            {t("hero.eyebrow")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            {t("hero.title_line1")}
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              {t("hero.title_highlight")}
            </span>
            {t("hero.title_line2")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              href="#journey"
              variant="primary"
              icon={<ArrowDown size={18} />}
            >
              {t("hero.cta_primary")}
            </Button>

            <Button
              href="#contact"
              variant="secondary"
              icon={<Mail size={18} />}
            >
              {t("hero.cta_secondary")}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="text-sm text-gray-400">
              Available for Teaching Opportunities
            </span>
          </motion.div>
        </div>

  
      </div>
    </section>
  );
}