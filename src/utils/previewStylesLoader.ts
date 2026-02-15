/**
 * Dynamically loads preview-specific styles (theme-base and docs)
 */

let previewStylesLoaded = false;

export const loadPreviewStyles = () => {
  if (previewStylesLoaded) return;

  // Dynamically import preview styles
  import("../styles/theme-base.scss");
  import("../styles/preview.scss");

  previewStylesLoaded = true;
};

export const isPreviewStylesLoaded = () => previewStylesLoaded;
