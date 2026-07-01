import { useTranslation } from "react-i18next";
import { Mail, Phone, Heart } from "lucide-react";

/**
 * Simple, warm footer with contact glance and copyright line.
 */
export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800/10 bg-ink-900 py-10 text-cream-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <p className="font-display text-xl">
          Rahma <span className="text-coral-300">Elsadek</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 font-body text-sm text-cream-100/70">
          <a href="mailto:rahma.elsadek@example.com" className="flex items-center gap-2 hover:text-cream-50">
            <Mail size={16} /> rahma.elsadek@example.com
          </a>
          <a href="tel:+201000000000" className="flex items-center gap-2 hover:text-cream-50">
            <Phone size={16} /> +20 100 000 0000
          </a>
        </div>
        <p className="flex items-center gap-1.5 font-mono text-xs text-cream-100/50">
          © {year} Rahma Elsadek — {t("footer.rights")}
          <Heart size={12} className="text-coral-300" fill="currentColor" />
        </p>
      </div>
    </footer>
  );
}
