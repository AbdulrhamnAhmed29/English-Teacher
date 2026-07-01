import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Returns a ref + boolean flag indicating whether the referenced element
 * has scrolled into the viewport. Used to trigger Framer Motion reveal
 * animations once, the first time a section becomes visible.
 *
 * @param {Object} [options]
 * @param {number} [options.amount=0.25] - Fraction of the element that must be visible.
 * @param {boolean} [options.once=true] - Whether to only trigger once.
 * @returns {{ ref: React.RefObject, isInView: boolean }}
 */
export function useScrollReveal({ amount = 0.25, once = true } = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });
  return { ref, isInView };
}
