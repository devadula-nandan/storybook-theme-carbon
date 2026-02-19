/**
 * Documentation Styles Loader
 * Dynamically loads styles for Storybook documentation pages
 * Includes theme-base and docs-specific styles
 */

let docStylesLoaded = false;

/**
 * Loads documentation-specific styles
 * Only loads once to prevent duplicate style injection
 *
 * @remarks
 * This function dynamically imports:
 * - theme-base.scss: Core Carbon theme variables and styles
 * - docs.scss: Documentation page-specific styles
 */
export const loadDocStyles = (): void => {
  if (docStylesLoaded) return;

  // Dynamically import documentation styles
  import("../styles/theme-base.scss");
  import("../styles/docs.scss");

  docStylesLoaded = true;
};

/**
 * Checks if documentation styles have been loaded
 * @returns True if styles are loaded, false otherwise
 */
export const isDocStylesLoaded = (): boolean => docStylesLoaded;
