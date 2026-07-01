import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * A single milestone in the education/experience timeline.
 *
 * @param {{
 *   index: number,
 *   title: string,
 *   detail: string,
 *   responsibilities?: string[],
 *   isLast?: boolean,
 * }} props
 */
export function TimelineItem({ index, title, detail, responsibilities, isLast = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative flex gap-5 pb-10"
    >
      <div className="flex flex-col items-center">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink-800 bg-cream-50 font-mono text-xs font-semibold text-ink-800">
          {String(index + 1).padStart(2, "0")}
        </span>
        {!isLast && <span className="mt-1 w-px flex-1 bg-ink-800/20" />}
      </div>

      <div className="pt-1">
        <h3 className="font-display text-xl font-medium text-ink-900">{title}</h3>
        <p className="mt-1 font-body text-sm text-ink-600">{detail}</p>

        {responsibilities && responsibilities.length > 0 && (
          <ul className="mt-3 flex flex-col gap-1.5">
            {responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-2 font-body text-sm text-ink-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

TimelineItem.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string),
  isLast: PropTypes.bool,
};
