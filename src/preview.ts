/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators
 */
import type { ProjectAnnotations, Renderer } from "storybook/internal/types";
import { themes } from "storybook/theming";

import { STORYBOOK_CARBON_THEME } from "./constants";
import { withGlobals } from "./withGlobals";
import { loadDocStyles, isDocStylesLoaded } from "./utils/docStylesLoader";
import {
  loadPreviewStyles,
  isPreviewStylesLoaded,
} from "./utils/previewStylesLoader";

/**
 * Note: if you want to use JSX in this file, rename it to `preview.tsx`
 * and update the entry prop in tsup.config.ts to use "src/preview.tsx",
 */

const carbonizedStorybook = localStorage.getItem("carbonize-storybook");

if (carbonizedStorybook === "true") {
  loadDocStyles();
} else {
  loadPreviewStyles();
}

/**
 * Detect system color scheme preference and return appropriate theme
 */
const getSystemTheme = () => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? themes.dark
      : themes.light;
  }
  return themes.light;
};

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withGlobals],
  parameters: {
    docs: {
      codePanel: true,
      theme: getSystemTheme(),
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
