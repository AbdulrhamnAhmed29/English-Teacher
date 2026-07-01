import PropTypes from "prop-types";

/**
 * Signature decorative mark: a hand-drawn gold star, evoking the stars
 * a kindergarten teacher gives on a child's worksheet. Used sparingly
 * as an accent, never as a repeated pattern.
 *
 * @param {{ className?: string }} props
 */
export function StarMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M30 6 L35 24 L54 24 L38 35 L44 53 L30 42 L16 53 L22 35 L6 24 L25 24 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

StarMark.propTypes = {
  className: PropTypes.string,
};
