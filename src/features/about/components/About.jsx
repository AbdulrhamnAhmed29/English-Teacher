import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionHeading } from "../../../shared/components/ui/SectionHeading";
import { useScrollReveal } from "../../../shared/hooks/useScrollReveal";

export function About() {
  const { t } = useTranslation();
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-black px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-yellow-500 via-yellow-300 to-yellow-500 opacity-80" />

            <div className="relative overflow-hidden rounded-[30px] bg-neutral-900 p-2">
              <img
                src="/image/hero.png"
                alt="Rahma Elsadek"
                className="h-[500px] w-full rounded-[24px] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-yellow-500/20 bg-black/90 px-6 py-4 backdrop-blur-md">
              <p className="text-sm text-yellow-500">
                English Language Teacher
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionHeading
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
            />

            <div className="mt-8 rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-md">
              <p className="text-lg leading-relaxed text-gray-300">
                {t("about.body")}
              </p>

              <blockquote className="mt-8 border-l-4 border-yellow-500 pl-6 text-xl italic leading-relaxed text-white">
                {t("about.quote")}
              </blockquote>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-5 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-yellow-500">1+</h3>
                <p className="mt-2 text-gray-400">
                  Years of Teaching Experience
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-5 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-yellow-500">2</h3>
                <p className="mt-2 text-gray-400">
                  Professional Certifications
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}