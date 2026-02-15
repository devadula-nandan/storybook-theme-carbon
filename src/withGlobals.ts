import { useEffect, useGlobals } from "storybook/preview-api";
import type {
  Renderer,
  StoryContext,
  PartialStoryFn as StoryFunction,
} from "storybook/internal/types";

import { STORYBOOK_CARBON_THEME } from "./constants";

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>,
) => {
  const [globals] = useGlobals();
  const storybookCarbonTheme = globals[STORYBOOK_CARBON_THEME];
  const canvas = context.canvasElement as ParentNode;

  // Is the addon being used in the docs panel
  // const isInDocs = context.viewMode === "docs";

  useEffect(() => {
    // set theme on iframe
    document?.documentElement.setAttribute(
      "storybook-carbon-theme",
      storybookCarbonTheme,
    );

    // Set preview background to Carbon layer token
    if (document.body) {
      document.body.style.backgroundColor = "var(--cds-background)";
    }

    // if (!isInDocs) {
    //   addExtraContentToStory(canvas, {
    //     storybookCarbonTheme,
    //   });
    // }
  }, [storybookCarbonTheme]);

  return StoryFn();
};

/**
 * It's not really recommended to inject content into the canvas like this.
 * But there are use cases
 */
// function addExtraContentToStory(canvas: ParentNode, state: Object) {
//   const preElement =
//     canvas.querySelector(`[data-id="${STORYBOOK_CARBON_THEME}"]`) ||
//     canvas.appendChild(document.createElement("pre"));

//   preElement.setAttribute("data-id", STORYBOOK_CARBON_THEME);
//   preElement.setAttribute(
//     "style",
//     `
//     margin-top: 1rem;
//     padding: 1rem;
//     background-color: #eee;
//     border-radius: 3px;
//     overflow: scroll;
//   `,
//   );

//   preElement.innerHTML = `This snippet is injected by the withGlobals decorator.
// It updates as the user interacts with the ⚡ or Theme tools in the toolbar above.

// ${JSON.stringify(state, null, 2)}
// `;
// }
