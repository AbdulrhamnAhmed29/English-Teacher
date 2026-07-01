import PropTypes from "prop-types";
import { Card } from "../../../shared/components/ui/Card";

/**
 * Displays a single teaching strength with an icon, title, and detail.
 *
 * @param {{ Icon: React.ComponentType, title: string, detail: string, delay?: number }} props
 */
export function StrengthCard({ Icon, title, detail, delay = 0 }) {
  return (
    <Card delay={delay} className="flex flex-col gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-800/5 text-coral-600">
        <Icon size={20} />
      </span>
      <div>
        <h3 className="font-display text-lg font-medium text-ink-900">{title}</h3>
        <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-600">{detail}</p>
      </div>
    </Card>
  );
}

StrengthCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  delay: PropTypes.number,
};
