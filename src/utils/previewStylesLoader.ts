/**
 * Preview Styles Loader
 * Dynamically loads styles for Storybook preview (story canvas)
 * Includes theme-base and preview-specific styles
 */

let previewStylesLoaded = false;

/**
 * Loads preview-specific styles
 * Only loads once to prevent duplicate style injection
 *
 * @remarks
 * This function dynamically imports:
 * - theme-base.scss: Core Carbon theme variables and styles
 * - preview.scss: Preview/canvas-specific styles
 */
export const loadPreviewStyles = (): void => {
  if (previewStylesLoaded) return;

  // Dynamically import preview styles
  import("../styles/theme-base.scss");
  import("../styles/preview.scss");

  previewStylesLoaded = true;
};

/**
 * Checks if preview styles have been loaded
 * @returns True if styles are loaded, false otherwise
 */
export const isPreviewStylesLoaded = (): boolean => previewStylesLoaded;
