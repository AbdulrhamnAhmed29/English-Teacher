import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSwitch } from "../../shared/components/ui/LanguageSwitch";
import { useActiveSection } from "../../shared/hooks/useActiveSection";

const SECTION_IDS = ["about", "journey", "strengths", "philosophy", "contact"];

/**
 * Sticky top navigation with scroll-spy active-link highlighting
 * and a mobile menu.
 */
export function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const links = SECTION_IDS.map((id) => ({ id, label: t(`nav.${id}`) }));
  const handleClose = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink-800/10 bg-black backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-lg font-semibold text-white">
          Rahma <span className="text-coral-500">Elsadek</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative font-body text-sm transition-colors duration-200 ${activeId === id ? "text-amber-500 font-semibold" : "text-white hover:text-ink-900"
                }`}
            >
              {label}
              {activeId === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-coral-500"
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <LanguageSwitch />
        </div>

        <button
          type="button"
          className="text-ink-900 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink-800/10 md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              {links.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={handleClose}
                  className="font-body text-sm text-white hover:text-ink-900"
                >
                  {label}

                </a>
              ))}
              <LanguageSwitch className="self-start" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
