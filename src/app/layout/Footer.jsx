import { useTranslation } from "react-i18next";
import { Mail, Phone, Heart } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/10 bg-black">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Name */}
          <h3 className="text-2xl font-semibold text-white">
            Rahma{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Elsadek
            </span>
          </h3>

          {/* Contact */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <a
              href="mailto:rahmaalsadek459@gmail.com"
              className="flex items-center gap-2 text-gray-400 transition-colors hover:text-yellow-500"
            >
              <Mail size={16} />
              <span>rahmaalsadek459@gmail.com</span>
            </a>

            <a
              href="tel:+201035385399"
              className="flex items-center gap-2 text-gray-400 transition-colors hover:text-yellow-500"
            >
              <Phone size={16} />
              <span>+20 103 538 5399</span>
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

          {/* Copyright */}
          <p className="flex items-center gap-2 text-sm text-gray-500">
            © {year} Rahma Elsadek — {t("footer.rights")}
            <Heart
              size={14}
              className="text-yellow-500"
              fill="currentColor"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}