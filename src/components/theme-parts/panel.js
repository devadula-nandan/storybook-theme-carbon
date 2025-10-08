// add css before the literal to get formatting while developing
export const panel = `
  /* ==================================================
   PANEL TAB CONTENT
   ================================================== */

  #panel-tab-content {
    /* Ensure border-bottom of toolbar is visible */
    height: calc(100% - 41px) !important;
    margin-top: 1px !important;

    /* Base panel background */
    background: var(--cds-background) !important;

    /* Reset Controls Button */
    button[title="Reset controls"] {
      min-block-size: var(--cds-spacing-06) !important;
      min-inline-size: var(--cds-spacing-06) !important;
      border-radius: 0 !important;
      background: transparent !important;
      color: var(--cds-text-primary) !important;
    }
    /* Focus State */
    button[title="Reset controls"]:focus {
      box-shadow: inset 0 0 0 2px var(--cds-focus) !important;
    }
    /* Hover State */
    button[title="Reset controls"]:hover,
    a:hover {
      background-color: var(--cds-background-hover) !important;
    }
    /* Active State */
    button[title="Reset controls"]:active,
    a:active {
      background-color: var(--cds-background-active) !important;
    }

    /* ==================================================
     ARGS TABLE
     ================================================== */
    table.docblock-argstable {
      /* TABLE HEADER */
      > thead.docblock-argstable-head > tr > th > span {
        color: var(--cds-text-primary) !important;
      }

      /* ARGS TABLE BODY */
      > tbody.docblock-argstable-body {
        /* Standard Row Cells */
        > tr:not([title]) > td {
          background: var(--cds-background) !important;
          border-top: 1px solid var(--cds-border-subtle) !important;

          /* Type indicator (Storybook internal) */
          .css-mkjjps,
          .css-o1d7ko {
            background: var(--cds-layer-01) !important;
            border: 1px solid var(--cds-border-subtle) !important;
            border-radius: 0 !important;
            color: var(--cds-text-secondary) !important;
          }

          /* Required Label */
          span[title="Required"] {
            color: var(--cds-support-error) !important;
          }

          /* Inputs, Buttons, Textareas, Selects */
          button,
          input:not([type="radio"]):not([type="checkbox"]),
          textarea,
          select {
            border-radius: 0 !important;
            box-shadow: none !important;
            background-color: var(--cds-layer-01) !important;
          }

          /* Bottom Border for Text Inputs */
          input:not([type="radio"]):not([type="checkbox"]):not([type="range"]),
          textarea,
          select {
            box-shadow: inset 0 -1px 0 var(--cds-border-strong) !important;
          }

          /* Placeholder Text */
          input:not([type="radio"]):not([type="checkbox"])::placeholder,
          textarea::placeholder,
          select::placeholder {
            color: var(--cds-text-secondary) !important;
          }

          /* Hover States */
          button:hover,
          input:not([type="radio"]):not([type="checkbox"]):hover,
          textarea:hover,
          select:hover {
            background-color: var(--cds-layer-hover-01) !important;
          }

          /* Active States */
          button:active,
          input:not([type="radio"]):not([type="checkbox"]):active,
          textarea:active,
          select:active {
            background-color: var(--cds-layer-active-01) !important;
          }

          /* Focus States */
          button:focus,
          input:not([type="radio"]):not([type="checkbox"]):focus,
          textarea:focus,
          select:focus {
            box-shadow: inset 0 0 0 2px var(--cds-focus) !important;
          }

          /* Custom Radio Buttons */
          input[type="radio"] {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;

            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            border: 1px solid var(--cds-icon-primary);
            background-color: var(--cds-background);
            cursor: pointer;
            position: relative;
            transition:
              border-color 0.15s,
              background-color 0.15s,
              box-shadow 0.15s;
          }

          input[type="radio"]:checked::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: var(--cds-icon-primary);
            transform: translate(-50%, -50%);
          }

          input[type="radio"]:focus {
            outline: none;
            box-shadow: 0 0 0 2px var(--cds-focus) !important;
          }

          input[role="switch"]:checked ~ span:last-of-type,
          input[role="switch"]:not(:checked) ~ span:first-of-type {
            background-color: var(--cds-layer-01) !important;
          }

          label:has(input[role="switch"]) {
            background-color: var(--cds-background) !important;
          }

          input[role="switch"]:focus {
            box-shadow: 0 0 0 2px var(--cds-focus) !important;
          }

          input[role="switch"]:checked ~ span:last-of-type,
          input[role="switch"]:not(:checked) ~ span:first-of-type {
            box-shadow: inset 0 0 0 1px var(--cds-border-strong) !important;
          }

          /* Default: light mode */
          input[type="date"],
          input[type="time"] {
            color-scheme: light;
          }

          /* Dark mode for g90 and g100 */
          :root[storybook-carbon-theme="g90"] input[type="date"],
          :root[storybook-carbon-theme="g100"] input[type="date"],
          :root[storybook-carbon-theme="g90"] input[type="time"],
          :root[storybook-carbon-theme="g100"] input[type="time"] {
            color-scheme: dark;
          }
        }

        /* Accordion Rows */
        > tr[title~="items"] {
          background: var(--cds-layer-01);

          /* Focused Accordion Row */
          &:has(button:focus) {
            box-shadow: inset 0 0 0 2px var(--cds-focus) !important;
            background: var(--cds-layer-01);
          }

          > td {
            background-color: transparent !important;
            color: var(--cds-text-primary) !important;

            /* Accordion Icons */
            > span > svg {
              color: var(--cds-icon-primary) !important;
            }

            /* Remove focus outlines from buttons */
            > button:focus {
              outline: none !important;
            }
          }
        }
      }
    }

    /* ==================================================
     SOURCE CODE BLOCK
     ================================================== */
    .docblock-source {
      background-color: var(--cds-background) !important;
      border-radius: 0 !important;
      border: 1px solid var(--cds-border-subtle) !important;
    }
  }
`;
