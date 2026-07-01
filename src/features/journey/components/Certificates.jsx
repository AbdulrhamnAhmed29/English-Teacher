import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";

function Certificates() {
  const { t } = useTranslation();

  const certificates = [
    {
      image: "/image/img2.png",
      title: t("Certificates.items.english_course.title"),
      detail: t("Certificates.items.english_course.detail"),
    },
    {
      image: "/image/img.png",
      title: t("Certificates.items.diploma.title"),
      detail: t("Certificates.items.diploma.detail"),
    },
  ];

  return (
    <section id="certificates" className="py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-500">
            {t("Certificates.eyebrow")}
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {t("Certificates.title")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            {t("Certificates.description")}
          </p>
        </motion.div>

        {/* Certificates */}
        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-white/5 backdrop-blur-md"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30" />

                <div className="absolute right-4 top-4 rounded-full bg-black/70 p-2 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                  <ExternalLink
                    size={18}
                    className="text-yellow-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-sm text-yellow-500">
                  {certificate.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;