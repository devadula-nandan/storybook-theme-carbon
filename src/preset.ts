/**
 * Storybook preset configuration
 * This file can be used to augment Storybook's Vite or Webpack configuration
 *
 * @see https://storybook.js.org/docs/addons/writing-presets
 */

/**
 * Augments the Vite configuration
 * Currently a no-op, but can be extended to customize Vite settings
 */
export const viteFinal = async (config: any) => {
  // Add custom Vite configuration here if needed
  return config;
};

/**
 * Augments the Webpack configuration
 * Currently a no-op, but can be extended to customize Webpack settings
 */
export const webpack = async (config: any) => {
  // Add custom Webpack configuration here if needed
  return config;
};
