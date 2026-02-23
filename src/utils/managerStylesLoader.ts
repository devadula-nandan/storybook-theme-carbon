/**
 * Manager Styles Loader
 * Dynamically loads and unloads Carbon theme styles for Storybook manager UI
 * Handles style injection and cleanup for carbonization toggle
 */

let managerStylesLoaded = false;

/**
 * Loads manager-specific Carbon theme styles
 * Only loads once to prevent duplicate style injection
 *
 * @remarks
 * This function dynamically imports:
 * - theme-base.scss: Core Carbon theme variables and styles
 * - toolbar.scss: Toolbar-specific styles
 * - sidenav.scss: Side navigation styles
 * - panel.scss: Panel/addon styles
 * - common.scss: Common manager styles
 */
export const loadManagerStyles = (): void => {
  if (managerStylesLoaded) return;

  // Dynamically import manager styles
  import("../styles/theme-base.scss");
  import("../styles/toolbar.scss");
  import("../styles/sidenav.scss");
  import("../styles/panel.scss");
  import("../styles/common.scss");

  managerStylesLoaded = true;
};

/**
 * Unloads manager styles by removing their style tags from the DOM
 * Used when toggling carbonization off
 *
 * @remarks
 * Searches for and removes style tags that match our theme files
 * Looks for both Vite dev mode tags and production link tags
 */
export const unloadManagerStyles = (): void => {
  if (!managerStylesLoaded) return;

  // Style file names to search for
  const styleFiles = ["theme-base", "toolbar", "sidenav", "panel", "common"];

  // Remove all style tags added by the theme
  const styleSheets = document.querySelectorAll(
    'style[data-vite-dev-id], link[rel="stylesheet"]',
  );

  styleSheets.forEach((sheet) => {
    const href = sheet.getAttribute("href");
    const dataId = sheet.getAttribute("data-vite-dev-id");

    // Check if this stylesheet is from our theme files
    const isThemeStyle = styleFiles.some((file) => {
      return (href && href.includes(file)) || (dataId && dataId.includes(file));
    });

    if (isThemeStyle) {
      sheet.remove();
    }
  });

  managerStylesLoaded = false;
};

/**
 * Checks if manager styles have been loaded
 * @returns True if styles are loaded, false otherwise
 */
export const isManagerStylesLoaded = (): boolean => managerStylesLoaded;
