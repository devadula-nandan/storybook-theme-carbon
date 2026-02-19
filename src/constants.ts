/**
 * Constants for the Carbon theme addon
 */

import type { ThemeOption } from "./types";

/** Addon identifier */
export const ADDON_ID = "Carbon theme";

/** Tool identifiers */
export const TOOL_ID = `${ADDON_ID}/tool`;
export const TOGGLE_TOOL_ID = `${ADDON_ID}/toggle-tool`;

/** Event identifiers for addon communication */
export const EVENTS = {
  RESULT: `${ADDON_ID}/result`,
  REQUEST: `${ADDON_ID}/request`,
} as const;

/** LocalStorage key for Carbon theme selection */
export const STORYBOOK_CARBON_THEME = "storybook-carbon-theme";

/** LocalStorage key for carbonization toggle */
export const CARBONIZE_STORYBOOK = "carbonize-storybook";

/** Available Carbon Design System themes */
export const THEMES: readonly ThemeOption[] = [
  { value: "white", title: "White" },
  { value: "g10", title: "Gray 10" },
  { value: "g90", title: "Gray 90" },
  { value: "g100", title: "Gray 100" },
] as const;
