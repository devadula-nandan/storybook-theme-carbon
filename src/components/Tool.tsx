import React, { memo, useEffect, useCallback } from "react";
import { useGlobals, addons, type API } from "storybook/manager-api";
import { themes } from "storybook/theming";
import {
  IconButton,
  TooltipLinkList,
  WithTooltip,
} from "storybook/internal/components";
import { ADDON_ID, THEME_KEY, THEMES } from "../constants";
import "../styles/theme-base.scss";
import "../styles/toolbar.scss";
import "../styles/sidenav.scss";
import "../styles/panel.scss";
import "../styles/common.scss";

const ThemeIcon = () => (
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
);

/** Utility to detect preferred theme or local saved theme */
const getInitialCarbonTheme = (): string => {
  let storedTheme = localStorage.getItem("storybook-carbon-theme");

  if (!storedTheme) {
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)",
    )?.matches;
    storedTheme = prefersDark ? "g90" : "white";
    localStorage.setItem("storybook-carbon-theme", storedTheme);
  }

  return storedTheme;
};

/** Apply theme globally to Storybook + DOM */
const applyTheme = (themeValue: string) => {
  const isLight = ["white", "g10"].includes(themeValue);

  document.documentElement.setAttribute("storybook-carbon-theme", themeValue);
  localStorage.setItem("storybook-carbon-theme", themeValue);
  // @ts-ignore
  window.selectedTheme = themeValue;

  addons.setConfig({
    theme: isLight ? themes.light : themes.dark,
  });
};

// Initialize theme on load
const initialTheme = getInitialCarbonTheme();
applyTheme(initialTheme);

export const Tool = memo(function ThemeSelector({ api }: { api: API }) {
  const [globals, updateGlobals] = useGlobals();
  const selectedTheme = globals[THEME_KEY];

  const handleSelectTheme = useCallback(
    (themeValue: string) => {
      updateGlobals({ [THEME_KEY]: themeValue });
      applyTheme(themeValue);
    },
    [updateGlobals],
  );

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
            active: selectedTheme === theme.value,
            onClick: () => {
              handleSelectTheme(theme.value);
              onHide();
            },
          }))}
        />
      )}
    >
      <IconButton title="Theme">
        <ThemeIcon />
      </IconButton>
    </WithTooltip>
  );
});
