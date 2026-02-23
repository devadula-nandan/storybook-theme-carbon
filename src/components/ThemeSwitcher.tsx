/**
 * Theme Switcher Component
 * Provides a dropdown to select between Carbon Design System themes
 */

import React, { memo, useCallback } from "react";
import { addons, type API } from "storybook/manager-api";
import { themes } from "storybook/theming";
import {
  IconButton,
  TooltipLinkList,
  WithTooltip,
} from "storybook/internal/components";
import { THEMES } from "../constants";
import {
  getCurrentTheme,
  setCurrentTheme,
  getThemeCategory,
  isCarbonized,
  type CarbonTheme,
} from "../utils/themeUtils";

/**
 * Theme icon component
 */
const ThemeIcon = memo(() => (
  <svg
    width="14"
    height="14"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
  >
    <circle cx="10" cy="12" r="2" />
    <circle cx="16" cy="9" r="2" />
    <circle cx="22" cy="12" r="2" />
    <circle cx="23" cy="18" r="2" />
    <circle cx="19" cy="23" r="2" />
    <path d="M16.54,2A14,14,0,0,0,2,16a4.82,4.82,0,0,0,6.09,4.65l1.12-.31A3,3,0,0,1,13,23.24V27a3,3,0,0,0,3,3A14,14,0,0,0,30,15.46,14.05,14.05,0,0,0,16.54,2Zm8.11,22.31A11.93,11.93,0,0,1,16,28a1,1,0,0,1-1-1V23.24a5,5,0,0,0-5-5,5.07,5.07,0,0,0-1.33.18l-1.12.31A2.82,2.82,0,0,1,4,16,12,12,0,0,1,16.47,4,12.18,12.18,0,0,1,28,15.53,11.89,11.89,0,0,1,24.65,24.32Z" />
  </svg>
));

ThemeIcon.displayName = "ThemeIcon";

interface ThemeSwitcherProps {
  api: API;
}

/**
 * Theme Switcher Component
 * Allows users to switch between Carbon Design System themes
 */
export const ThemeSwitcher = memo<ThemeSwitcherProps>(function ThemeSwitcher({
  api,
}) {
  const currentTheme = getCurrentTheme();

  /**
   * Handles theme selection
   * Updates localStorage, DOM attribute, and Storybook theme if carbonized
   */
  const handleSelectTheme = useCallback((themeValue: CarbonTheme) => {
    const managerDocument = window.parent.document;

    // Update theme in storage and DOM
    setCurrentTheme(themeValue, managerDocument);

    // Update Storybook theme if carbonized
    if (isCarbonized()) {
      const themeCategory = getThemeCategory(themeValue);
      addons.setConfig({
        theme: themeCategory === "light" ? themes.light : themes.dark,
      });
    }
  }, []);

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      closeOnOutsideClick
      tooltip={({ onHide }) => (
        <TooltipLinkList
          links={THEMES.map((theme) => ({
            id: theme.value,
            title: theme.title,
            active: currentTheme === theme.value,
            onClick: () => {
              handleSelectTheme(theme.value as CarbonTheme);
              onHide();
            },
          }))}
        />
      )}
    >
      <IconButton title="Carbon Theme" active={currentTheme === "white"}>
        <ThemeIcon />
      </IconButton>
    </WithTooltip>
  );
});
