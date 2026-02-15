/**
 * Dynamically loads or unloads theme styles
 */

let managerStylesLoaded = false;

export const loadManagerStyles = () => {
  if (managerStylesLoaded) return;

  // Dynamically import styles
  import("../styles/theme-base.scss");
  import("../styles/toolbar.scss");
  import("../styles/sidenav.scss");
  import("../styles/panel.scss");
  import("../styles/common.scss");

  managerStylesLoaded = true;
};

export const unloadManagerStyles = () => {
  if (!managerStylesLoaded) return;

  // Remove all style tags added by the theme
  const styleSheets = document.querySelectorAll(
    'style[data-vite-dev-id], link[rel="stylesheet"]',
  );
  styleSheets.forEach((sheet) => {
    const href = sheet.getAttribute("href");
    const dataId = sheet.getAttribute("data-vite-dev-id");

    // Check if this stylesheet is from our theme files
    if (
      (href &&
        (href.includes("theme-base") ||
          href.includes("toolbar") ||
          href.includes("sidenav") ||
          href.includes("panel") ||
          href.includes("common"))) ||
      (dataId &&
        (dataId.includes("theme-base") ||
          dataId.includes("toolbar") ||
          dataId.includes("sidenav") ||
          dataId.includes("panel") ||
          dataId.includes("common")))
    ) {
      sheet.remove();
    }
  });

  managerStylesLoaded = false;
};
