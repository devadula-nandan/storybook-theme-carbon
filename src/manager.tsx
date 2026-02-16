import React from "react";
import { addons, types } from "storybook/manager-api";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { CarbonizeToggle } from "./components/CarbonizeToggle";
import {
  ADDON_ID,
  TOOL_ID,
  TOGGLE_TOOL_ID,
  STORYBOOK_CARBON_THEME,
} from "./constants";
import theme from "./theme";

/**
 * Note: if you want to use JSX in this file, rename it to `manager.tsx`
 * and update the entry prop in tsup.config.ts to use "src/manager.tsx",
 */

const managerDocument = window.parent.document;
managerDocument.documentElement.setAttribute(
  STORYBOOK_CARBON_THEME,
  localStorage.getItem(STORYBOOK_CARBON_THEME) || "white",
);

// Register the addon
addons.register(ADDON_ID, (api) => {
  // Register theme selector tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Carbon Theme Selector",
    render: () => <ThemeSwitcher api={api} />,
  });

  // Register theme toggle tool
  addons.add(TOGGLE_TOOL_ID, {
    type: types.TOOL,
    title: "Carbonize storybook",
    render: () => <CarbonizeToggle />,
  });
});

// Configure Storybook with custom theme and hide backgrounds toolbar addon
addons.setConfig({
  theme,
  toolbar: {
    "storybook/background": { hidden: true },
  },
});
