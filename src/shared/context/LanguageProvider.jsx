import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

/**
 * @typedef {Object} LanguageContextValue
 * @property {string} language - Current active language code ("en" | "ar").
 * @property {boolean} isRtl - Whether the current language is right-to-left.
 * @property {(lang: string) => void} setLanguage - Switches the active language.
 */

const LanguageContext = createContext(undefined);

/**
 * Provides the current language + direction to the whole app, and keeps
 * <html lang> / <html dir> attributes synced whenever the language changes.
 *
 * @param {{ children: React.ReactNode }} props
 */
export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(i18n.language?.startsWith("ar") ? "ar" : "en");

  const isRtl = language === "ar";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [language, isRtl]);

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageState(lang);
  };

  const value = useMemo(() => ({ language, isRtl, setLanguage }), [language, isRtl]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Hook to access the current language/direction and switcher function.
 * @returns {LanguageContextValue}
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
