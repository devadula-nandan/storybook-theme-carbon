import { useEffect, useGlobals } from "storybook/preview-api";
import type {
  Renderer,
  StoryContext,
  PartialStoryFn as StoryFunction,
} from "storybook/internal/types";

import { THEME_KEY } from "./constants";

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>,
) => {
  const [globals] = useGlobals();
  const carbonTheme = globals[THEME_KEY];
  const canvas = context.canvasElement as ParentNode;

  // Is the addon being used in the docs panel
  // const isInDocs = context.viewMode === "docs";

  useEffect(() => {

    // set theme on iframe
    document?.documentElement.setAttribute("storybook-carbon-theme", carbonTheme);

    // need to be handled by storybook setups remove for production builds. only for testing.
    // let backgroundColors = {
    //   white: '#ffffff',
    //   g10: '#f4f4f4',
    //   g90: '#262626',
    //   g100: '#161616',
    // }
    // // @ts-ignore
    // document.body.style.backgroundColor = backgroundColors[carbonTheme];


    
    // if (!isInDocs) {
    //   addExtraContentToStory(canvas, {
    //     carbonTheme,
    //   });
    // }
  }, [carbonTheme]);

  return StoryFn();
};

/**
 * It's not really recommended to inject content into the canvas like this.
 * But there are use cases
 */
// function addExtraContentToStory(canvas: ParentNode, state: Object) {
//   const preElement =
//     canvas.querySelector(`[data-id="${THEME_KEY}"]`) ||
//     canvas.appendChild(document.createElement("pre"));

//   preElement.setAttribute("data-id", THEME_KEY);
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
