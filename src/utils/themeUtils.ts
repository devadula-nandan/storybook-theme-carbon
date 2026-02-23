/**
 * Centralized theme utility functions for managing Carbon themes
 * Provides consistent theme detection, storage, and validation
 */

import { STORYBOOK_CARBON_THEME, CARBONIZE_STORYBOOK } from "../constants";

/** Valid Carbon theme values */
export type CarbonTheme = "white" | "g10" | "g90" | "g100";

/** Theme category: light or dark */
export type ThemeCategory = "light" | "dark";

/** Light themes */
const LIGHT_THEMES: CarbonTheme[] = ["white", "g10"];

/** Dark themes */
const DARK_THEMES: CarbonTheme[] = ["g90", "g100"];

/**
 * Validates if a string is a valid Carbon theme
 */
export const isValidTheme = (theme: string): theme is CarbonTheme => {
  return ["white", "g10", "g90", "g100"].includes(theme);
};

/**
 * Gets the current Carbon theme from localStorage
 * @returns Current theme or default 'white'
 */
export const getCurrentTheme = (): CarbonTheme => {
  const stored = localStorage.getItem(STORYBOOK_CARBON_THEME);
  return stored && isValidTheme(stored) ? stored : "white";
};

/**
 * Sets the Carbon theme in localStorage and updates DOM
 * @param theme - The theme to set
 * @param document - The document to update (defaults to current document)
 */
export const setCurrentTheme = (
  theme: CarbonTheme,
  document: Document = window.document,
): void => {
  localStorage.setItem(STORYBOOK_CARBON_THEME, theme);
  document.documentElement.setAttribute(STORYBOOK_CARBON_THEME, theme);
};

/**
 * Determines if a theme is light or dark
 * @param theme - The theme to check
 * @returns 'light' or 'dark'
 */
export const getThemeCategory = (theme: CarbonTheme): ThemeCategory => {
  return LIGHT_THEMES.includes(theme) ? "light" : "dark";
};

/**
 * Gets the theme category for the current theme
 */
export const getCurrentThemeCategory = (): ThemeCategory => {
  return getThemeCategory(getCurrentTheme());
};

/**
 * Checks if Storybook carbonization is enabled
 */
export const isCarbonized = (): boolean => {
  return localStorage.getItem(CARBONIZE_STORYBOOK) === "true";
};

/**
 * Sets the carbonization state
 * @param enabled - Whether to enable carbonization
 * @param document - The document to update (defaults to current document)
 */
export const setCarbonized = (
  enabled: boolean,
  document: Document = window.document,
): void => {
  localStorage.setItem(CARBONIZE_STORYBOOK, String(enabled));
  document.documentElement.setAttribute(CARBONIZE_STORYBOOK, String(enabled));
};

/**
 * Detects system color scheme preference
 * @returns 'light' or 'dark' based on system preference
 */
export const getSystemThemeCategory = (): ThemeCategory => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

/**
 * Gets the appropriate theme category based on carbonization state
 * If carbonized, uses current theme; otherwise uses system preference
 */
export const getEffectiveThemeCategory = (): ThemeCategory => {
  return isCarbonized() ? getCurrentThemeCategory() : getSystemThemeCategory();
};
