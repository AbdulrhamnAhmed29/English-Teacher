import { Heart, ShieldCheck, Sparkles, Users, Sun } from "lucide-react";

/**
 * Ordered list of teaching strengths. `key` maps into
 * locales/*.json under `strengths.items.<key>`; `Icon` is the
 * associated lucide-react icon component.
 * @type {Array<{ key: string, Icon: React.ComponentType }>}
 */
export const STRENGTHS = [
  { key: "patient", Icon: Heart },
  { key: "management", Icon: ShieldCheck },
  { key: "creative", Icon: Sparkles },
  { key: "child_centered", Icon: Users },
  { key: "positive", Icon: Sun },
];
