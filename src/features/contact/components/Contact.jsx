import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";
import { SectionHeading } from "../../../shared/components/ui/SectionHeading";
import { Button } from "../../../shared/components/ui/Button";

/**
 * Final call-to-action section, framed around hiring for a school position.
 */
export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-cream-100 px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <SectionHeading eyebrow={t("contact.eyebrow")} title={t("contact.title")} align="center" />
        <p className="max-w-xl font-body text-base text-ink-600 md:text-lg">{t("contact.body")}</p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button href="mailto:rahma.elsadek@example.com" variant="primary" icon={<Mail size={16} />}>
            {t("contact.cta_email")}
          </Button>
          <Button href="tel:+201000000000" variant="secondary" icon={<Phone size={16} />}>
            {t("contact.cta_call")}
          </Button>
        </div>

        <p className="mt-4 font-mono text-xs uppercase tracking-wide text-ink-600/70">
          {t("contact.footer_note")}
        </p>
      </div>
    </section>
  );
}
