/**
 * Preview configuration for Storybook
 * Handles theme synchronization between parent and iframe documents
 * Loads appropriate styles based on carbonization state
 *
 * @see https://storybook.js.org/docs/react/writing-stories/decorators
 */

import type { ProjectAnnotations, Renderer } from "storybook/internal/types";
import { themes } from "storybook/theming";
import { addons } from "storybook/manager-api";

import { STORYBOOK_CARBON_THEME } from "./constants";
import {
  getCurrentTheme,
  setCurrentTheme,
  getThemeCategory,
  isCarbonized,
  getSystemThemeCategory,
} from "./utils/themeUtils";
import { loadDocStyles } from "./utils/docStylesLoader";
import { loadPreviewStyles } from "./utils/previewStylesLoader";

/**
 * Initialize theme on preview document
 */
const initializeTheme = (): void => {
  const currentTheme = getCurrentTheme();
  setCurrentTheme(currentTheme, document);

  // Set carbonization attribute on document
  const carbonized = isCarbonized();
  document.documentElement.setAttribute(
    "carbonize-storybook",
    String(carbonized),
  );
};

/**
 * Configure addons theme based on current theme
 */
const configureAddonsTheme = (): void => {
  const currentTheme = getCurrentTheme();
  const themeCategory = getThemeCategory(currentTheme);

  addons.setConfig({
    theme: themeCategory === "light" ? themes.light : themes.dark,
  });
};

/**
 * Synchronize theme attribute from parent document to iframe document
 */
const syncThemeAttribute = (): void => {
  const parentTheme = window.parent.document.documentElement.getAttribute(
    STORYBOOK_CARBON_THEME,
  );
  const currentTheme = document.documentElement.getAttribute(
    STORYBOOK_CARBON_THEME,
  );

  if (parentTheme && currentTheme !== parentTheme) {
    document.documentElement.setAttribute(STORYBOOK_CARBON_THEME, parentTheme);
  }
};

/**
 * Synchronize carbonization attribute from parent to iframe
 */
const syncCarbonizeAttribute = (): void => {
  const parentCarbonized = window.parent.document.documentElement.getAttribute(
    "carbonize-storybook",
  );
  const currentCarbonized = document.documentElement.getAttribute(
    "carbonize-storybook",
  );

  if (parentCarbonized && currentCarbonized !== parentCarbonized) {
    document.documentElement.setAttribute(
      "carbonize-storybook",
      parentCarbonized,
    );
  }
};

/**
 * Set up theme synchronization observer
 * Watches for theme changes on parent document and syncs to iframe
 */
const setupThemeObserver = (): void => {
  // Initial sync
  syncThemeAttribute();
  syncCarbonizeAttribute();

  // Watch for attribute changes on parent document
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === STORYBOOK_CARBON_THEME
      ) {
        syncThemeAttribute();
      } else if (
        mutation.type === "attributes" &&
        mutation.attributeName === "carbonize-storybook"
      ) {
        syncCarbonizeAttribute();
      }
    });
  });

  // Observe parent document for attribute changes
  if (window.parent.document.documentElement) {
    observer.observe(window.parent.document.documentElement, {
      attributes: true,
      attributeFilter: [STORYBOOK_CARBON_THEME, "carbonize-storybook"],
    });
  }
};

/**
 * Load appropriate styles based on carbonization state
 */
const loadStyles = (): void => {
  if (isCarbonized()) {
    loadDocStyles();
  } else {
    loadPreviewStyles();
  }
};

/**
 * Get theme for docs based on system preference
 */
const getDocsTheme = () => {
  const systemCategory = getSystemThemeCategory();
  return systemCategory === "dark" ? themes.dark : themes.light;
};

// Initialize preview
initializeTheme();
configureAddonsTheme();
setupThemeObserver();
loadStyles();

/**
 * Preview configuration
 */
const preview: ProjectAnnotations<Renderer> = {
  parameters: {
    docs: {
      codePanel: true,
      theme: getDocsTheme(),
    },
    controls: {
      expanded: true,
    },
  },
  initialGlobals: {
    [STORYBOOK_CARBON_THEME]: "white",
  },
};

export default preview;
