import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * A soft "notebook card" surface used across strengths, journey, and contact sections.
 *
 * @param {{ children: React.ReactNode, className?: string, delay?: number }} props
 */
export function Card({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay }}
      className={`rounded-2xl border border-ink-800/10 bg-cream-50/80 p-6 shadow-[0_2px_16px_rgba(31,59,51,0.06)] backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
};
