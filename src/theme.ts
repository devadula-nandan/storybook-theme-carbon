/**
 * Custom Storybook theme configuration with Carbon Design System branding
 * Automatically adapts to system color scheme preference or user-selected theme
 * @see https://storybook.js.org/docs/react/configure/theming
 */

import { create } from "storybook/theming";
import PackageInfo from "../package.json";
import { isCarbonized, getEffectiveThemeCategory } from "./utils/themeUtils";
import { getCarbonLogo } from "./utils/carbonLogos";

/**
 * Determines the effective theme category based on carbonization state
 * - If carbonized: uses the selected Carbon theme
 * - If not carbonized: uses system preference
 */
const themeCategory = getEffectiveThemeCategory();
const isDarkTheme = themeCategory === "dark";

/**
 * Creates the Storybook theme configuration
 * Uses Carbon Design System fonts and branding
 */
export default create({
  base: themeCategory,

  // Typography - IBM Plex font family
  fontBase: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
  fontCode:
    "'IBM Plex Mono', Menlo, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",

  // Brand - Carbon Design System logo and package info
  brandTitle: `
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
      ${getCarbonLogo(isDarkTheme)}
      <span style="color: var(--cds-text-primary); font-size: 14px; font-weight: 400; font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;">
        @carbon/react@${PackageInfo.version}
      </span>
    </div>
  `,
  brandUrl: PackageInfo.repository.url,
  brandTarget: "_blank",
});
