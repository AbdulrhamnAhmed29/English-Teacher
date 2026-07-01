import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
    <section
      id="certificates"
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-yellow-500">
            {t("Certificates.eyebrow")}
          </p>

          <h2 className="text-4xl font-bold text-stone-800 md:text-5xl">
            {t("Certificates.title")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            {t("Certificates.description")}
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-white/5 backdrop-blur-md"
            >
              <div className="overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-yellow-500">
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