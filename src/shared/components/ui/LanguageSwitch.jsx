import PropTypes from "prop-types";
import { useLanguage } from "../../context/LanguageProvider";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

/**
 * Small pill toggle to switch the site between English and Arabic.
 * @param {{ className?: string }} props
 */
export function LanguageSwitch({ className = "" }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-ink-800/15 bg-cream-50 p-1 font-mono text-xs ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          aria-pressed={language === code}
          className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
            language === code
              ? "bg-ink-800 text-cream-50"
              : "text-ink-800/60 hover:text-ink-800"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

LanguageSwitch.propTypes = {
  className: PropTypes.string,
};
