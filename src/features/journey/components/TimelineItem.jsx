import PropTypes from "prop-types";
import { motion } from "framer-motion";

export function TimelineItem({
  index,
  title,
  detail,
  responsibilities,
  isLast = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
      className="relative flex gap-5 pb-10"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-500 bg-black text-sm font-semibold text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.25)]">
          {String(index + 1).padStart(2, "0")}
        </span>

        {!isLast && (
          <span className="mt-2 w-px flex-1 bg-gradient-to-b from-yellow-500/60 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:border-yellow-500/40 hover:bg-white/[0.08]">
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {detail}
          </p>

          {responsibilities && responsibilities.length > 0 && (
            <ul className="mt-4 space-y-2">
              {responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
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