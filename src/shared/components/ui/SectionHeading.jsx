import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * Consistent "eyebrow + title" heading used at the top of every section.
 *
 * @param {{ eyebrow: string, title: string, align?: 'left'|'center', className?: string }} props
 */
export function SectionHeading({ eyebrow, title, align = "left", className = "" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-mono text-xs uppercase tracking-[0.2em] text-coral-600"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-[1.1] max-w-xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "center"]),
  className: PropTypes.string,
};
