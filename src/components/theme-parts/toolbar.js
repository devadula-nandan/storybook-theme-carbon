const selectedTheme = window.selectedTheme;
const themes = window.themes;
console.log(selectedTheme, themes);

// these styles also apply to panel toolbar
export const toolbar = `
  .sb-bar {
    background-color: var(--cds-layer-01) !important;
    border-bottom: 1px solid var(--cds-border-subtle-02);
    box-shadow: none !important;

    /* remove margins flush icon buttons */
    div {
      margin: 0 !important;
      width: unset !important;
    }

    /* icon buttons start */
    :has(> button),
    :has(> a) {
      gap: 0 !important;

      /* divider only if both siblings are buttons */
      button + span:not(.addon-collapsible-icon):has(+ button) {
        background: var(--cds-border-subtle-02) !important;
        margin: 0 !important;
        block-size: 100% !important;
      }

      button:not(.tabbutton),
      a {
        min-block-size: var(--cds-spacing-08) !important;
        min-inline-size: var(--cds-spacing-08) !important;
        border-radius: 0 !important;
        background: transparent !important;
        color: var(--cds-text-primary) !important;
      }

      button:not(.tabbutton):hover,
      a:hover {
        background-color: var(--cds-background-hover) !important;
      }

      button:not(.tabbutton):active,
      a:active {
        background-color: var(--cds-background-active) !important;
      }

      button:not(.tabbutton):focus,
      a:focus {
        box-shadow:
          inset 0 0 0 1px var(--cds-button-focus-color, var(--cds-focus)),
          inset 0 0 0 2px var(--cds-background) !important;
      }
    }
    /* icon buttons end */

    /* panel toolbar tab buttons start */
    button.tabbutton {
      min-block-size: var(--cds-spacing-08) !important;
      min-inline-size: var(--cds-spacing-08) !important;
      border-radius: 0 !important;
      background: transparent !important;
      color: var(--cds-text-primary) !important;
    }

    button.tabbutton:hover,
    a:hover {
      background-color: var(--cds-background-hover) !important;
    }

    button.tabbutton:active,
    a:active {
      background-color: var(--cds-background-active) !important;
    }
    /* panel toolbar tab buttons end */
  }
`;
