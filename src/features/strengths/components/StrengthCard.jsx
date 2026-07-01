import PropTypes from "prop-types";
import { motion } from "framer-motion";

export function StrengthCard({
  Icon,
  title,
  detail,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -8,
      }}
      className="group rounded-3xl border border-yellow-500/20 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-yellow-500/40"
    >
      {/* Icon */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-500 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]">
        <Icon size={24} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 leading-relaxed text-gray-400">
        {detail}
      </p>
    </motion.div>
  );
}

StrengthCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  delay: PropTypes.number,
};