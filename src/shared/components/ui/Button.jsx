import PropTypes from "prop-types";
import { forwardRef } from "react";

const VARIANT_CLASSES = {
  primary:
    "bg-ink-800 text-cream-50 hover:bg-ink-900 shadow-[0_4px_0_0_rgba(31,59,51,0.35)] hover:shadow-[0_2px_0_0_rgba(31,59,51,0.35)] hover:translate-y-[2px]",
  secondary:
    "bg-transparent text-ink-800 border border-ink-800/30 hover:border-ink-800 hover:bg-ink-800/5",
  accent:
    "bg-coral-500 text-cream-50 hover:bg-coral-600 shadow-[0_4px_0_0_rgba(197,97,58,0.35)] hover:shadow-[0_2px_0_0_rgba(197,97,58,0.35)] hover:translate-y-[2px]",
};

/**
 * Shared button component. Renders as an <a> when `href` is provided,
 * otherwise as a <button>. Supports primary / secondary / accent variants.
 *
 * @param {{
 *   children: React.ReactNode,
 *   variant?: 'primary'|'secondary'|'accent',
 *   href?: string,
 *   icon?: React.ReactNode,
 *   className?: string,
 *   onClick?: Function,
 * }} props
 */
export const Button = forwardRef(function Button(
  { children, variant = "primary", href, icon, className = "", onClick, ...rest },
  ref
) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body font-semibold text-sm transition-all duration-200 ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} onClick={onClick} {...rest}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button ref={ref} type="button" className={classes} onClick={onClick} {...rest}>
      {children}
      {icon}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "accent"]),
  href: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
