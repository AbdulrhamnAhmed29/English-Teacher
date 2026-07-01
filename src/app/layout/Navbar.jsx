import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSwitch } from "../../shared/components/ui/LanguageSwitch";
import { useActiveSection } from "../../shared/hooks/useActiveSection";

const SECTION_IDS = [
  "about",
  "journey",
  "strengths",
  "philosophy",
  "contact",
];

export function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const links = SECTION_IDS.map((id) => ({
    id,
    label: t(`nav.${id}`),
  }));

  const handleLinkClick = (id) => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/10 bg-black backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => handleLinkClick("hero")}
          className="font-display text-xl font-semibold text-white"
        >
          Rahma{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Elsadek
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleLinkClick(id)}
              className={`relative text-sm transition-all duration-300 ${
                activeId === id
                  ? "font-semibold text-yellow-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}

              {activeId === id && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-yellow-500"
                />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Language Switch */}
        <div className="hidden md:block">
          <LanguageSwitch />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-yellow-500/10 bg-black md:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-5">
              {links.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleLinkClick(id)}
                  className={`text-left text-sm transition-colors ${
                    activeId === id
                      ? "font-medium text-yellow-500"
                      : "text-gray-300"
                  }`}
                >
                  {label}
                </button>
              ))}

              <div className="pt-2">
                <LanguageSwitch />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}