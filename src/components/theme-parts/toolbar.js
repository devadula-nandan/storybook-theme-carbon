const selectedTheme = window.selectedTheme;
const themes = window.themes;
console.log(selectedTheme, themes);

// these styles also apply to panel toolbar
export const toolbar = `
  /* ==========================================================================
   STORYBOOK PANEL TOOLBAR (.sb-bar)
   ========================================================================== */

  .sb-bar {
    /* Base styling */
    background-color: var(--cds-layer-01) !important;
    border-bottom: 1px solid var(--cds-border-subtle);
    box-shadow: none !important;

    /* ==========================================================================
     TOOLBAR INNER WRAPPER
     ========================================================================== */
    div {
      margin: 0 !important;
      width: unset !important;

      /* Viewport info labels (stable across Storybook versions) */
      [title="Viewport width"],
      [title="Viewport height"] {
        color: var(--cds-text-secondary) !important;
      }
    }

    /* ==========================================================================
     ICON BUTTON GROUPS
     ========================================================================== */
    :has(> button),
    :has(> a) {
      gap: 0 !important;

      /* Divider line between consecutive icon buttons */
      button + span:not(.addon-collapsible-icon):has(+ button) {
        background: var(--cds-border-subtle) !important;
        margin: 0 !important;
        block-size: 100% !important;
      }

      /* Base Icon Buttons (excluding tab buttons) and Links */
      button:not(.tabbutton),
      a {
        min-block-size: var(--cds-spacing-08) !important;
        min-inline-size: var(--cds-spacing-08) !important;
        border-radius: 0 !important;
        background: transparent !important;
        color: var(--cds-text-primary) !important;
      }

      /* Hover State */
      button:not(.tabbutton):hover,
      a:hover {
        background-color: var(--cds-background-hover) !important;
      }

      /* Active State */
      button:not(.tabbutton):active,
      a:active {
        background-color: var(--cds-background-active) !important;
      }

      /* Focus State */
      button:not(.tabbutton):focus,
      a:focus {
        box-shadow: inset 0 0 0 2px var(--cds-focus) !important;
      }
    }

    /* ==========================================================================
     LIKELY TO BREAK STYLES (non-critical)
     Used for selected state on certain icon buttons
     ========================================================================== */
    button.css-n2j2tx:not(.tabbutton) {
      background-color: var(--cds-background-selected) !important;
    }

    /* ==========================================================================
     TAB BUTTONS (Panel Tabs)
     ========================================================================== */
    button.tabbutton {
      min-block-size: var(--cds-spacing-08) !important;
      min-inline-size: var(--cds-spacing-08) !important;
      border-radius: 0 !important;
      background: transparent !important;
      color: var(--cds-text-primary) !important;
      font-weight: unset !important;

      /* Counter Tag (usually number badge) */
      > div > div {
        box-shadow: none !important;
        color: var(--cds-text-on-color) !important;
        background-color: var(--cds-button-secondary) !important;
      }

      /* Collapsible Icon (arrow indicator) */
      .addon-collapsible-icon {
        color: var(--cds-text-primary) !important;
        border-right: 4px solid transparent !important;
        border-left: 4px solid transparent !important;
        border-top: 6px solid !important;
      }
    }

    /* Active Tab Button */
    button.tabbutton-active {
      border-width: 2px 0 !important;
      border-color: transparent transparent var(--cds-border-interactive) !important;
      font-weight: bold !important;

      /* Active Counter Tag */
      > div > div {
        color: var(--cds-text-on-color) !important;
        background-color: var(--cds-interactive) !important;
      }
    }

    /* Hover, Active, and Focus States for Tabs */
    button.tabbutton:hover {
      background-color: var(--cds-background-hover) !important;
    }

    button.tabbutton:active {
      background-color: var(--cds-background-active) !important;
    }

    button.tabbutton:focus {
      outline: 2px solid var(--cds-focus, #0f62fe) !important;
      outline-offset: -2px !important;
      border-width: 2px 0 !important;
      border-color: unset !important;
    }
  }
`;
