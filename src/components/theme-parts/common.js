export const common = `
  /* scrollbar-color, color, popovers, toasts, resize bar, */

  /* scrollbar */
  * {
    scrollbar-width: thin !important;
    scrollbar-color: var(--cds-border-inverse) var(--cds-border-subtle) !important;
  }
  /* text-color */
  body {
    color: var(--cds-text-secondary) !important;
  }

  ::selection {
    background-color: #0f62fe60 !important;
  }

  ::-moz-selection {
    background-color: #0f62fe60 !important;
  }

  /* resize bar borders */
  #root > div > div {
    border-color: var(--cds-border-subtle) !important;
    > div:first-child::after {
      background-color: var(--cds-border-interactive) !important;
    }
  }

  /* skip to sidebar button */
  #storybook-preview-wrapper a[title="Skip to sidebar"]:focus {
    background-color: var(--cds-button-secondary) !important;
    border-radius: 0px !important;
    color: var(--cds-text-on-color) !important;
    box-shadow: var(--cds-focus) 0px 0px 0px 2px inset !important;
  }
`;
