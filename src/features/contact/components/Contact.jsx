import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "../../../shared/components/ui/Button";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] border border-yellow-500/20 bg-white/5 p-10 text-center backdrop-blur-md transition-all duration-500 hover:border-yellow-500/40 md:p-16"
        >
          {/* Eyebrow */}
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-500">
            {t("contact.eyebrow")}
          </p>

          {/* Title */}
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {t("contact.title")}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            {t("contact.body")}
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="mailto:rahmaalsadek459@gmail.com"
              variant="primary"
              icon={<Mail size={18} />}
            >
              {t("contact.cta_email")}
            </Button>

            <Button
              href="tel:+201035385399"
              variant="secondary"
              icon={<Phone size={18} />}
            >
              {t("contact.cta_call")}
            </Button>

            <Button
              href="https://wa.me/201035385399"
              variant="secondary"
              icon={<MessageCircle size={18} />}
            >
              WhatsApp
            </Button>
          </div>

          {/* Divider */}
          <div className="mx-auto my-10 h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

          {/* Contact Details */}
          <div className="space-y-3">
            <p className="text-gray-300 transition-colors hover:text-yellow-500">
              rahmaalsadek459@gmail.com
            </p>

            <p className="text-gray-300 transition-colors hover:text-yellow-500">
              +20 103 538 5399
            </p>
          </div>

          {/* Footer Note */}
          <p className="mt-8 text-sm uppercase tracking-[0.25em] text-gray-500">
            {t("contact.footer_note")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}