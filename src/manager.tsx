/**
 * Manager entry point for the Carbon theme addon
 * Registers tools and configures Storybook manager
 */

import React from "react";
import { addons, types } from "storybook/manager-api";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { CarbonizeToggle } from "./components/CarbonizeToggle";
import { ADDON_ID, TOOL_ID, TOGGLE_TOOL_ID } from "./constants";
import {
  getCurrentTheme,
  setCurrentTheme,
  isCarbonized,
} from "./utils/themeUtils";
import theme from "./theme";

/**
 * Initialize theme on manager document
 */
const initializeManagerTheme = (): void => {
  const managerDocument = window.parent.document;
  const currentTheme = getCurrentTheme();
  setCurrentTheme(currentTheme, managerDocument);

  // Set carbonization attribute on manager document
  const carbonized = isCarbonized();
  managerDocument.documentElement.setAttribute(
    "carbonize-storybook",
    String(carbonized),
  );
};

// Initialize theme
initializeManagerTheme();

/**
 * Register the addon and its tools
 */
addons.register(ADDON_ID, (api) => {
  // Register theme selector tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Carbon Theme Selector",
    render: () => <ThemeSwitcher api={api} />,
  });

  // Register carbonization toggle tool
  addons.add(TOGGLE_TOOL_ID, {
    type: types.TOOL,
    title: "Carbonize Storybook",
    render: () => <CarbonizeToggle />,
  });
});

/**
 * Configure Storybook with custom theme
 * Hide the default backgrounds toolbar addon
 */
addons.setConfig({
  theme,
  toolbar: {
    "storybook/background": { hidden: true },
  },
});
