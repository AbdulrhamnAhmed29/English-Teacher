import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Philosophy() {
  const { t } = useTranslation();

  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-black px-6 py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] border border-yellow-500/20 bg-white/5 p-10 backdrop-blur-md md:p-16"
        >
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10">
              <Quote
                size={36}
                className="text-yellow-500"
              />
            </div>
          </div>

          {/* Eyebrow */}
          <p className="mb-6 text-center text-sm uppercase tracking-[0.35em] text-yellow-500">
            {t("philosophy.eyebrow")}
          </p>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="text-center text-3xl font-medium leading-relaxed text-white md:text-5xl"
          >
            “{t("philosophy.quote")}”
          </motion.blockquote>

          {/* Divider */}
          <div className="mx-auto my-10 h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

          {/* Signature */}
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
              English Language Teacher
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-yellow-500">
              {t("philosophy.signature")}
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}