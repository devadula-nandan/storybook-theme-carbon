/**
 * TypeScript type definitions for the Carbon theme addon
 */

/**
 * Valid Carbon Design System theme values
 */
export type CarbonTheme = "white" | "g10" | "g90" | "g100";

/**
 * Theme category: light or dark
 */
export type ThemeCategory = "light" | "dark";

/**
 * Theme option for the theme switcher
 */
export interface ThemeOption {
  value: CarbonTheme;
  title: string;
}

/**
 * Result type for measuring DOM elements
 * Used for tracking styled elements in the preview
 */
export interface MeasurementResult {
  divs: DOMRect[];
  styled: DOMRect[];
}
