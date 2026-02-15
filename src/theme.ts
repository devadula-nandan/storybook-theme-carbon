import { create } from "storybook/theming";
import PackageInfo from "../package.json";

/**
 * Detect system color scheme preference
 */
const getSystemTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

/**
 * Carbon Design System logo for light theme
 * Uses dark colors for text and blue accent
 */
const carbonLogoLight = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
    <path fill="#161616" d="M24 28H30V30H24z"/>
    <circle style="fill: var(--cds-text-primary, white)" cx="21" cy="29" r="1"/>
    <circle style="fill: var(--cds-text-primary, white)" cx="29" cy="25" r="1"/>
    <path fill="#161616" d="M20 24H26V26H20z" transform="matrix(-1 0 0 -1 46 50)"/>
    <path fill="#161616" d="M24 20H30V22H24z"/>
    <circle style="fill: var(--cds-text-primary, white)" cx="21" cy="21" r="1"/>
    <path fill="#161616" d="M21.4927,14.1299l-8.5-4.8149c-.3057-.1729-.6797-.1729-.9854,0L3.5073,14.1299c-.3135,.1777-.5073,.5098-.5073,.8701v10c0,.3604,.1938,.6924,.5073,.8701l8.5,4.8149,.9854-1.7402-7.9927-4.5278V15.583l7.5-4.2485,7.5,4.2485v2.417h2v-3c0-.3604-.1938-.6924-.5073-.8701Z"/>
    <path fill="#161616" d="M25,15h2V7c0-.3604-.1938-.6924-.5073-.8701L17.9927,1.3149c-.3057-.1729-.6797-.1729-.9854,0L8.5074,6.1299l.9854,1.7402L17.5,3.3345l7.5,4.2485v7.417Z"/>
  </svg>
`;

/**
 * Carbon Design System logo for dark theme
 * Uses light colors for text and blue accent
 */
const carbonLogoDark = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
    <path fill="#f4f4f4" d="M24 28H30V30H24z"/>
    <circle fill="#78a9ff" cx="21" cy="29" r="1"/>
    <circle fill="#78a9ff" cx="29" cy="25" r="1"/>
    <path fill="#f4f4f4" d="M20 24H26V26H20z" transform="matrix(-1 0 0 -1 46 50)"/>
    <path fill="#f4f4f4" d="M24 20H30V22H24z"/>
    <circle fill="#78a9ff" cx="21" cy="21" r="1"/>
    <path fill="#f4f4f4" d="M21.4927,14.1299l-8.5-4.8149c-.3057-.1729-.6797-.1729-.9854,0L3.5073,14.1299c-.3135,.1777-.5073,.5098-.5073,.8701v10c0,.3604,.1938,.6924,.5073,.8701l8.5,4.8149,.9854-1.7402-7.9927-4.5278V15.583l7.5-4.2485,7.5,4.2485v2.417h2v-3c0-.3604-.1938-.6924-.5073-.8701Z"/>
    <path fill="#f4f4f4" d="M25,15h2V7c0-.3604-.1938-.6924-.5073-.8701L17.9927,1.3149c-.3057-.1729-.6797-.1729-.9854,0L8.5074,6.1299l.9854,1.7402L17.5,3.3345l7.5,4.2485v7.417Z"/>
  </svg>
`;

/**
 * Custom Storybook theme with Carbon Design System branding
 * Automatically adapts to system color scheme preference
 * @see https://storybook.js.org/docs/react/configure/theming
 */
const systemTheme = getSystemTheme();

export default create({
  base: systemTheme,

  // Typography
  fontBase: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
  fontCode:
    "'IBM Plex Mono', Menlo, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",

  // Brand
  brandTitle: `<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
  ${systemTheme === "dark" ? carbonLogoDark : carbonLogoLight}
  <span style="color: var(--cds-text-primary); font-size: 14px; font-weight: 400; font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;">@carbon/react@${PackageInfo.version},</span>
  </div>`,
  brandUrl: PackageInfo.repository.url,
  brandTarget: "_blank",
});
