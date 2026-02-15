/**
 * Dynamically loads preview-specific styles (theme-base and docs)
 */

let docStylesLoaded = false;

export const loadDocStyles = () => {
  if (docStylesLoaded) return;

  // Dynamically import preview styles
  import("../styles/theme-base.scss");
  import("../styles/docs.scss");

  docStylesLoaded = true;
};

export const isDocStylesLoaded = () => docStylesLoaded;
