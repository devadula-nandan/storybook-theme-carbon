try{
(()=>{var d=__REACT__,{Children:U,Component:Y,Fragment:V,Profiler:W,PureComponent:j,StrictMode:Z,Suspense:$,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:J,act:Q,cloneElement:X,createContext:ee,createElement:de,createFactory:ce,createRef:se,forwardRef:te,isValidElement:ae,lazy:ie,memo:p,startTransition:re,unstable_act:ne,useCallback:f,useContext:oe,useDebugValue:le,useDeferredValue:ge,useEffect:pe,useId:fe,useImperativeHandle:he,useInsertionEffect:ue,useLayoutEffect:me,useMemo:be,useReducer:ve,useRef:ye,useState:xe,useSyncExternalStore:ke,useTransition:we,version:ze}=__REACT__;var qe=__STORYBOOK_API__,{ActiveTabs:Me,Consumer:Re,ManagerContext:_e,Provider:Ee,RequestResponseError:Fe,addons:o,combineParameters:Oe,controlOrMetaKey:Pe,controlOrMetaSymbol:Ne,eventMatchesShortcut:Ce,eventToShortcut:Le,experimental_MockUniversalStore:Ae,experimental_UniversalStore:Ge,experimental_getStatusStore:De,experimental_getTestProviderStore:He,experimental_requestResponse:Ke,experimental_useStatusStore:Ue,experimental_useTestProviderStore:Ye,experimental_useUniversalStore:Ve,internal_fullStatusStore:We,internal_fullTestProviderStore:je,internal_universalStatusStore:Ze,internal_universalTestProviderStore:$e,isMacLike:Je,isShortcutTaken:Qe,keyToSymbol:Xe,merge:ed,mockChannel:dd,optionOrAltSymbol:cd,shortcutMatchesShortcut:sd,shortcutToHumanString:td,types:h,useAddonState:ad,useArgTypes:id,useArgs:rd,useChannel:nd,useGlobalTypes:od,useGlobals:u,useParameter:ld,useSharedState:gd,useStoryPrepared:pd,useStorybookApi:fd,useStorybookState:hd}=__STORYBOOK_API__;var yd=__STORYBOOK_THEMING__,{CacheProvider:xd,ClassNames:kd,Global:wd,ThemeProvider:zd,background:Sd,color:Td,convert:Bd,create:Id,createCache:qd,createGlobal:Md,createReset:Rd,css:_d,darken:Ed,ensure:Fd,ignoreSsrWarning:Od,isPropValid:Pd,jsx:Nd,keyframes:Cd,lighten:Ld,styled:Ad,themes:g,typography:Gd,useTheme:Dd,withTheme:Hd}=__STORYBOOK_THEMING__;var Wd=__STORYBOOK_COMPONENTS__,{A:jd,ActionBar:Zd,AddonPanel:$d,Badge:Jd,Bar:Qd,Blockquote:Xd,Button:ec,ClipboardCode:dc,Code:cc,DL:sc,Div:tc,DocumentWrapper:ac,EmptyTabContent:ic,ErrorFormatter:rc,FlexBar:nc,Form:oc,H1:lc,H2:gc,H3:pc,H4:fc,H5:hc,H6:uc,HR:mc,IconButton:m,Img:bc,LI:vc,Link:yc,ListItem:xc,Loader:kc,Modal:wc,OL:zc,P:Sc,Placeholder:Tc,Pre:Bc,ProgressSpinner:Ic,ResetWrapper:qc,ScrollArea:Mc,Separator:Rc,Spaced:_c,Span:Ec,StorybookIcon:Fc,StorybookLogo:Oc,SyntaxHighlighter:Pc,TT:Nc,TabBar:Cc,TabButton:Lc,TabWrapper:Ac,Table:Gc,Tabs:Dc,TabsState:Hc,TooltipLinkList:b,TooltipMessage:Kc,TooltipNote:Uc,UL:Yc,WithTooltip:v,WithTooltipPure:Vc,Zoom:Wc,codeCommon:jc,components:Zc,createCopyToClipboardFunction:$c,getStoryHref:Jc,interleaveSeparators:Qc,nameSpaceClassNames:Xc,resetComponents:es,withReset:ds}=__STORYBOOK_COMPONENTS__;var x="Carbon theme",S=`${x}/tool`,y="carbonTheme",T=[{value:"white",title:"White"},{value:"g10",title:"Gray 10"},{value:"g90",title:"Gray 90"},{value:"g100",title:"Gray 100"}],B=window.selectedTheme,I=window.themes;console.log(B,I);var q=`
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
`,M=`
  .sidebar-container {
  
  }
`,R=`
  /* ==================================================
   PANEL TAB CONTENT
   ================================================== */

  #panel-tab-content {
    /* Ensure border-bottom of toolbar is visible */
    height: calc(100% - 41px) !important;
    margin-top: 1px !important;

    /* Base panel background */
    background: var(--cds-background) !important;

    /* ==================================================
     ARGS TABLE
     ================================================== */
    table.docblock-argstable {
      /* TABLE HEADER */
      > thead.docblock-argstable-head > tr > th > span {
        color: var(--cds-text-primary) !important;

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
`,_=`
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
`,E=`
  :root {
    --cds-grid-gutter: 2rem;
    --cds-grid-columns: 4;
    --cds-grid-margin: 0;
  }

  @media (min-width: 42rem) {
    :root {
      --cds-grid-columns: 8;
      --cds-grid-margin: 1rem;
    }
  }

  @media (min-width: 66rem) {
    :root {
      --cds-grid-columns: 16;
    }
  }

  @media (min-width: 99rem) {
    :root {
      --cds-grid-margin: 1.5rem;
    }
  }

  .cds--css-grid {
    --cds-grid-gutter-start: calc(var(--cds-grid-gutter) / 2);
    --cds-grid-gutter-end: calc(var(--cds-grid-gutter) / 2);
    --cds-grid-column-hang: calc(var(--cds-grid-gutter) / 2);
    display: grid;
    grid-template-columns: repeat(var(--cds-grid-columns), minmax(0, 1fr));
    inline-size: 100%;
    margin-inline: auto;
    max-inline-size: 99rem;
    padding-inline: var(--cds-grid-margin);
  }

  .cds--css-grid--full-width {
    max-inline-size: 100%;
  }

  .cds--css-grid-column {
    --cds-grid-mode-start: var(--cds-grid-gutter-start);
    --cds-grid-mode-end: var(--cds-grid-gutter-end);
    margin-inline: var(--cds-grid-gutter-start) var(--cds-grid-gutter-end);
  }

  [dir="rtl"] .cds--css-grid-column {
    margin-inline: var(--cds-grid-gutter-end) var(--cds-grid-gutter-start);
  }

  .cds--css-grid--narrow {
    --cds-grid-gutter-start: 0rem;
  }

  .cds--css-grid--condensed {
    --cds-grid-gutter: 0.0625rem;
    --cds-grid-column-hang: 0.96875rem;
  }

  .cds--css-grid--start {
    margin-inline-start: 0;
  }

  .cds--css-grid--end {
    margin-inline-end: 0;
  }

  .cds--subgrid {
    display: grid;
    grid-template-columns: repeat(var(--cds-grid-columns), minmax(0, 1fr));
    margin-inline: calc(var(--cds-grid-mode-start) * -1)
      calc(var(--cds-grid-mode-end) * -1);
  }

  [dir="rtl"] .cds--subgrid {
    margin-inline: calc(var(--cds-grid-mode-end) * -1)
      calc(var(--cds-grid-mode-start) * -1);
  }

  .cds--subgrid--wide {
    --cds-grid-gutter-start: 1rem;
    --cds-grid-gutter-end: 1rem;
    --cds-grid-column-hang: 0;
  }

  .cds--subgrid--narrow {
    --cds-grid-gutter-start: 0rem;
    --cds-grid-gutter-end: 1rem;
    --cds-grid-column-hang: 1rem;
  }

  .cds--subgrid--condensed {
    --cds-grid-gutter-start: 0.03125rem;
    --cds-grid-gutter-end: 0.03125rem;
    --cds-grid-column-hang: 0.96875rem;
  }

  .cds--grid-column-hang {
    margin-inline-start: var(--cds-grid-column-hang);
  }

  [dir="rtl"] .cds--grid-column-hang {
    margin-inline: initial var(--cds-grid-column-hang);
  }

  .cds--col-span-0 {
    display: none;
  }

  .cds--col-span-1 {
    --cds-grid-columns: 1;
    display: block;
    grid-column: span 1 / span 1;
  }

  .cds--col-span-2 {
    --cds-grid-columns: 2;
    display: block;
    grid-column: span 2 / span 2;
  }

  .cds--col-span-3 {
    --cds-grid-columns: 3;
    display: block;
    grid-column: span 3 / span 3;
  }

  .cds--col-span-4 {
    --cds-grid-columns: 4;
    display: block;
    grid-column: span 4 / span 4;
  }

  .cds--col-span-5 {
    --cds-grid-columns: 5;
    display: block;
    grid-column: span 5 / span 5;
  }

  .cds--col-span-6 {
    --cds-grid-columns: 6;
    display: block;
    grid-column: span 6 / span 6;
  }

  .cds--col-span-7 {
    --cds-grid-columns: 7;
    display: block;
    grid-column: span 7 / span 7;
  }

  .cds--col-span-8 {
    --cds-grid-columns: 8;
    display: block;
    grid-column: span 8 / span 8;
  }

  .cds--col-span-9 {
    --cds-grid-columns: 9;
    display: block;
    grid-column: span 9 / span 9;
  }

  .cds--col-span-10 {
    --cds-grid-columns: 10;
    display: block;
    grid-column: span 10 / span 10;
  }

  .cds--col-span-11 {
    --cds-grid-columns: 11;
    display: block;
    grid-column: span 11 / span 11;
  }

  .cds--col-span-12 {
    --cds-grid-columns: 12;
    display: block;
    grid-column: span 12 / span 12;
  }

  .cds--col-span-13 {
    --cds-grid-columns: 13;
    display: block;
    grid-column: span 13 / span 13;
  }

  .cds--col-span-14 {
    --cds-grid-columns: 14;
    display: block;
    grid-column: span 14 / span 14;
  }

  .cds--col-span-15 {
    --cds-grid-columns: 15;
    display: block;
    grid-column: span 15 / span 15;
  }

  .cds--col-span-16 {
    --cds-grid-columns: 16;
    display: block;
    grid-column: span 16 / span 16;
  }

  .cds--sm:col-span-0 {
    display: none;
  }

  .cds--sm:col-span-1 {
    --cds-grid-columns: 1;
    display: block;
    grid-column: span 1 / span 1;
  }

  .cds--sm:col-span-2 {
    --cds-grid-columns: 2;
    display: block;
    grid-column: span 2 / span 2;
  }

  .cds--sm:col-span-3 {
    --cds-grid-columns: 3;
    display: block;
    grid-column: span 3 / span 3;
  }

  .cds--sm:col-span-4 {
    --cds-grid-columns: 4;
    display: block;
    grid-column: span 4 / span 4;
  }

  .cds--sm:col-span-auto {
    grid-column: auto;
  }

  .cds--sm:col-span-100 {
    grid-column: 1/-1;
  }

  .cds--sm:col-span-75 {
    --cds-grid-columns: 3;
    grid-column: span 3 / span 3;
  }

  .cds--sm:col-span-50 {
    --cds-grid-columns: 2;
    grid-column: span 2 / span 2;
  }

  .cds--sm:col-span-25 {
    --cds-grid-columns: 1;
    grid-column: span 1 / span 1;
  }

  @media (min-width: 42rem) {
    .cds--md:col-span-0 {
      display: none;
    }
  }

  @media (min-width: 42rem) {
    .cds--md:col-span-1 {
      --cds-grid-columns: 1;
      display: block;
      grid-column: span 1 / span 1;
    }
  }

  @media (min-width: 42rem) {
    .cds--md:col-span-2 {
      --cds-grid-columns: 2;
      display: block;
      grid-column: span 2 / span 2;
    }
  }

  @media (min-width: 42rem) {
    .cds--md:col-span-3 {
      --cds-grid-columns: 3;
      display: block;
      grid-column: span 3 / span 3;
    }
  }

  @media (min-width: 42rem) {
    .cds--md:col-span-4 {
      --cds-grid-columns: 4;
      display: block;
      grid-column: span 4 / span 4;
    }
  }

  @media (min-width: 42rem) {
    .cds--md:col-span-5 {
      --cds-grid-columns: 5;
      display: block;
      grid-column: span 5 / span 5;
    }
  }

  @media (min-width: 42rem) {
    .cds--md:col-span-6 {
      --cds-grid-columns: 6;
      display: block;
      grid-column: span 6 / span 6;
    }
  }

  @media (min-width: 42rem) {
    .cds--md:col-span-7 {
      --cds-grid-columns: 7;
      display: block;
      grid-column: span 7 / span 7;
    }
  }

  @media (min-width: 42rem) {
    .cds--md:col-span-8 {
      --cds-grid-columns: 8;
      display: block;
      grid-column: span 8 / span 8;
    }
  }

  @media (min-width: 42rem) {
    .cds--md:col-span-auto {
      grid-column: auto;
    }

    .cds--md:col-span-100 {
      grid-column: 1/-1;
    }

    .cds--md:col-span-75 {
      --cds-grid-columns: 6;
      grid-column: span 6 / span 6;
    }

    .cds--md:col-span-50 {
      --cds-grid-columns: 4;
      grid-column: span 4 / span 4;
    }

    .cds--md:col-span-25 {
      --cds-grid-columns: 2;
      grid-column: span 2 / span 2;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-0 {
      display: none;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-1 {
      --cds-grid-columns: 1;
      display: block;
      grid-column: span 1 / span 1;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-2 {
      --cds-grid-columns: 2;
      display: block;
      grid-column: span 2 / span 2;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-3 {
      --cds-grid-columns: 3;
      display: block;
      grid-column: span 3 / span 3;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-4 {
      --cds-grid-columns: 4;
      display: block;
      grid-column: span 4 / span 4;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-5 {
      --cds-grid-columns: 5;
      display: block;
      grid-column: span 5 / span 5;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-6 {
      --cds-grid-columns: 6;
      display: block;
      grid-column: span 6 / span 6;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-7 {
      --cds-grid-columns: 7;
      display: block;
      grid-column: span 7 / span 7;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-8 {
      --cds-grid-columns: 8;
      display: block;
      grid-column: span 8 / span 8;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-9 {
      --cds-grid-columns: 9;
      display: block;
      grid-column: span 9 / span 9;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-10 {
      --cds-grid-columns: 10;
      display: block;
      grid-column: span 10 / span 10;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-11 {
      --cds-grid-columns: 11;
      display: block;
      grid-column: span 11 / span 11;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-12 {
      --cds-grid-columns: 12;
      display: block;
      grid-column: span 12 / span 12;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-13 {
      --cds-grid-columns: 13;
      display: block;
      grid-column: span 13 / span 13;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-14 {
      --cds-grid-columns: 14;
      display: block;
      grid-column: span 14 / span 14;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-15 {
      --cds-grid-columns: 15;
      display: block;
      grid-column: span 15 / span 15;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-16 {
      --cds-grid-columns: 16;
      display: block;
      grid-column: span 16 / span 16;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-span-auto {
      grid-column: auto;
    }

    .cds--lg:col-span-100 {
      grid-column: 1/-1;
    }

    .cds--lg:col-span-75 {
      --cds-grid-columns: 12;
      grid-column: span 12 / span 12;
    }

    .cds--lg:col-span-50 {
      --cds-grid-columns: 8;
      grid-column: span 8 / span 8;
    }

    .cds--lg:col-span-25 {
      --cds-grid-columns: 4;
      grid-column: span 4 / span 4;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-0 {
      display: none;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-1 {
      --cds-grid-columns: 1;
      display: block;
      grid-column: span 1 / span 1;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-2 {
      --cds-grid-columns: 2;
      display: block;
      grid-column: span 2 / span 2;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-3 {
      --cds-grid-columns: 3;
      display: block;
      grid-column: span 3 / span 3;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-4 {
      --cds-grid-columns: 4;
      display: block;
      grid-column: span 4 / span 4;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-5 {
      --cds-grid-columns: 5;
      display: block;
      grid-column: span 5 / span 5;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-6 {
      --cds-grid-columns: 6;
      display: block;
      grid-column: span 6 / span 6;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-7 {
      --cds-grid-columns: 7;
      display: block;
      grid-column: span 7 / span 7;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-8 {
      --cds-grid-columns: 8;
      display: block;
      grid-column: span 8 / span 8;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-9 {
      --cds-grid-columns: 9;
      display: block;
      grid-column: span 9 / span 9;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-10 {
      --cds-grid-columns: 10;
      display: block;
      grid-column: span 10 / span 10;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-11 {
      --cds-grid-columns: 11;
      display: block;
      grid-column: span 11 / span 11;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-12 {
      --cds-grid-columns: 12;
      display: block;
      grid-column: span 12 / span 12;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-13 {
      --cds-grid-columns: 13;
      display: block;
      grid-column: span 13 / span 13;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-14 {
      --cds-grid-columns: 14;
      display: block;
      grid-column: span 14 / span 14;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-15 {
      --cds-grid-columns: 15;
      display: block;
      grid-column: span 15 / span 15;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-16 {
      --cds-grid-columns: 16;
      display: block;
      grid-column: span 16 / span 16;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-span-auto {
      grid-column: auto;
    }

    .cds--xlg:col-span-100 {
      grid-column: 1/-1;
    }

    .cds--xlg:col-span-75 {
      --cds-grid-columns: 12;
      grid-column: span 12 / span 12;
    }

    .cds--xlg:col-span-50 {
      --cds-grid-columns: 8;
      grid-column: span 8 / span 8;
    }

    .cds--xlg:col-span-25 {
      --cds-grid-columns: 4;
      grid-column: span 4 / span 4;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-0 {
      display: none;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-1 {
      --cds-grid-columns: 1;
      display: block;
      grid-column: span 1 / span 1;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-2 {
      --cds-grid-columns: 2;
      display: block;
      grid-column: span 2 / span 2;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-3 {
      --cds-grid-columns: 3;
      display: block;
      grid-column: span 3 / span 3;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-4 {
      --cds-grid-columns: 4;
      display: block;
      grid-column: span 4 / span 4;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-5 {
      --cds-grid-columns: 5;
      display: block;
      grid-column: span 5 / span 5;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-6 {
      --cds-grid-columns: 6;
      display: block;
      grid-column: span 6 / span 6;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-7 {
      --cds-grid-columns: 7;
      display: block;
      grid-column: span 7 / span 7;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-8 {
      --cds-grid-columns: 8;
      display: block;
      grid-column: span 8 / span 8;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-9 {
      --cds-grid-columns: 9;
      display: block;
      grid-column: span 9 / span 9;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-10 {
      --cds-grid-columns: 10;
      display: block;
      grid-column: span 10 / span 10;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-11 {
      --cds-grid-columns: 11;
      display: block;
      grid-column: span 11 / span 11;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-12 {
      --cds-grid-columns: 12;
      display: block;
      grid-column: span 12 / span 12;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-13 {
      --cds-grid-columns: 13;
      display: block;
      grid-column: span 13 / span 13;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-14 {
      --cds-grid-columns: 14;
      display: block;
      grid-column: span 14 / span 14;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-15 {
      --cds-grid-columns: 15;
      display: block;
      grid-column: span 15 / span 15;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-16 {
      --cds-grid-columns: 16;
      display: block;
      grid-column: span 16 / span 16;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-span-auto {
      grid-column: auto;
    }

    .cds--max:col-span-100 {
      grid-column: 1/-1;
    }

    .cds--max:col-span-75 {
      --cds-grid-columns: 12;
      grid-column: span 12 / span 12;
    }

    .cds--max:col-span-50 {
      --cds-grid-columns: 8;
      grid-column: span 8 / span 8;
    }

    .cds--max:col-span-25 {
      --cds-grid-columns: 4;
      grid-column: span 4 / span 4;
    }
  }

  .cds--col-span-auto {
    grid-column: auto;
  }

  .cds--col-span-100 {
    grid-column: 1/-1;
  }

  .cds--col-span-75 {
    --cds-grid-columns: 3;
    grid-column: span 3 / span 3;
  }

  @media (min-width: 42rem) {
    .cds--col-span-75 {
      --cds-grid-columns: 6;
      grid-column: span 6 / span 6;
    }
  }

  @media (min-width: 66rem) {
    .cds--col-span-75 {
      --cds-grid-columns: 12;
      grid-column: span 12 / span 12;
    }
  }

  .cds--col-span-50 {
    --cds-grid-columns: 2;
    grid-column: span 2 / span 2;
  }

  @media (min-width: 42rem) {
    .cds--col-span-50 {
      --cds-grid-columns: 4;
      grid-column: span 4 / span 4;
    }
  }

  @media (min-width: 66rem) {
    .cds--col-span-50 {
      --cds-grid-columns: 8;
      grid-column: span 8 / span 8;
    }
  }

  .cds--col-span-25 {
    --cds-grid-columns: 1;
    grid-column: span 1 / span 1;
  }

  @media (min-width: 42rem) {
    .cds--col-span-25 {
      --cds-grid-columns: 2;
      grid-column: span 2 / span 2;
    }
  }

  @media (min-width: 66rem) {
    .cds--col-span-25 {
      --cds-grid-columns: 4;
      grid-column: span 4 / span 4;
    }
  }

  .cds--col-start-1 {
    grid-column-start: 1;
  }

  .cds--col-start-2 {
    grid-column-start: 2;
  }

  .cds--col-start-3 {
    grid-column-start: 3;
  }

  .cds--col-start-4 {
    grid-column-start: 4;
  }

  .cds--col-start-5 {
    grid-column-start: 5;
  }

  .cds--col-start-6 {
    grid-column-start: 6;
  }

  .cds--col-start-7 {
    grid-column-start: 7;
  }

  .cds--col-start-8 {
    grid-column-start: 8;
  }

  .cds--col-start-9 {
    grid-column-start: 9;
  }

  .cds--col-start-10 {
    grid-column-start: 10;
  }

  .cds--col-start-11 {
    grid-column-start: 11;
  }

  .cds--col-start-12 {
    grid-column-start: 12;
  }

  .cds--col-start-13 {
    grid-column-start: 13;
  }

  .cds--col-start-14 {
    grid-column-start: 14;
  }

  .cds--col-start-15 {
    grid-column-start: 15;
  }

  .cds--col-start-16 {
    grid-column-start: 16;
  }

  .cds--col-end-2 {
    grid-column-end: 2;
  }

  .cds--col-end-3 {
    grid-column-end: 3;
  }

  .cds--col-end-4 {
    grid-column-end: 4;
  }

  .cds--col-end-5 {
    grid-column-end: 5;
  }

  .cds--col-end-6 {
    grid-column-end: 6;
  }

  .cds--col-end-7 {
    grid-column-end: 7;
  }

  .cds--col-end-8 {
    grid-column-end: 8;
  }

  .cds--col-end-9 {
    grid-column-end: 9;
  }

  .cds--col-end-10 {
    grid-column-end: 10;
  }

  .cds--col-end-11 {
    grid-column-end: 11;
  }

  .cds--col-end-12 {
    grid-column-end: 12;
  }

  .cds--col-end-13 {
    grid-column-end: 13;
  }

  .cds--col-end-14 {
    grid-column-end: 14;
  }

  .cds--col-end-15 {
    grid-column-end: 15;
  }

  .cds--col-end-16 {
    grid-column-end: 16;
  }

  .cds--col-end-17 {
    grid-column-end: 17;
  }

  .cds--col-start-auto {
    grid-column-start: auto;
  }

  .cds--col-end-auto {
    grid-column-end: auto;
  }

  .cds--sm:col-start-1 {
    grid-column-start: 1;
  }

  .cds--sm:col-start-2 {
    grid-column-start: 2;
  }

  .cds--sm:col-start-3 {
    grid-column-start: 3;
  }

  .cds--sm:col-start-4 {
    grid-column-start: 4;
  }

  .cds--sm:col-start-5 {
    grid-column-start: 5;
  }

  .cds--sm:col-start-6 {
    grid-column-start: 6;
  }

  .cds--sm:col-start-7 {
    grid-column-start: 7;
  }

  .cds--sm:col-start-8 {
    grid-column-start: 8;
  }

  .cds--sm:col-start-9 {
    grid-column-start: 9;
  }

  .cds--sm:col-start-10 {
    grid-column-start: 10;
  }

  .cds--sm:col-start-11 {
    grid-column-start: 11;
  }

  .cds--sm:col-start-12 {
    grid-column-start: 12;
  }

  .cds--sm:col-start-13 {
    grid-column-start: 13;
  }

  .cds--sm:col-start-14 {
    grid-column-start: 14;
  }

  .cds--sm:col-start-15 {
    grid-column-start: 15;
  }

  .cds--sm:col-start-16 {
    grid-column-start: 16;
  }

  .cds--sm:col-end-2 {
    grid-column-end: 2;
  }

  .cds--sm:col-end-3 {
    grid-column-end: 3;
  }

  .cds--sm:col-end-4 {
    grid-column-end: 4;
  }

  .cds--sm:col-end-5 {
    grid-column-end: 5;
  }

  .cds--sm:col-end-6 {
    grid-column-end: 6;
  }

  .cds--sm:col-end-7 {
    grid-column-end: 7;
  }

  .cds--sm:col-end-8 {
    grid-column-end: 8;
  }

  .cds--sm:col-end-9 {
    grid-column-end: 9;
  }

  .cds--sm:col-end-10 {
    grid-column-end: 10;
  }

  .cds--sm:col-end-11 {
    grid-column-end: 11;
  }

  .cds--sm:col-end-12 {
    grid-column-end: 12;
  }

  .cds--sm:col-end-13 {
    grid-column-end: 13;
  }

  .cds--sm:col-end-14 {
    grid-column-end: 14;
  }

  .cds--sm:col-end-15 {
    grid-column-end: 15;
  }

  .cds--sm:col-end-16 {
    grid-column-end: 16;
  }

  .cds--sm:col-end-17 {
    grid-column-end: 17;
  }

  .cds--sm:col-start-auto {
    grid-column-start: auto;
  }

  .cds--sm:col-end-auto {
    grid-column-end: auto;
  }

  @media (min-width: 42rem) {
    .cds--md:col-start-1 {
      grid-column-start: 1;
    }

    .cds--md:col-start-2 {
      grid-column-start: 2;
    }

    .cds--md:col-start-3 {
      grid-column-start: 3;
    }

    .cds--md:col-start-4 {
      grid-column-start: 4;
    }

    .cds--md:col-start-5 {
      grid-column-start: 5;
    }

    .cds--md:col-start-6 {
      grid-column-start: 6;
    }

    .cds--md:col-start-7 {
      grid-column-start: 7;
    }

    .cds--md:col-start-8 {
      grid-column-start: 8;
    }

    .cds--md:col-start-9 {
      grid-column-start: 9;
    }

    .cds--md:col-start-10 {
      grid-column-start: 10;
    }

    .cds--md:col-start-11 {
      grid-column-start: 11;
    }

    .cds--md:col-start-12 {
      grid-column-start: 12;
    }

    .cds--md:col-start-13 {
      grid-column-start: 13;
    }

    .cds--md:col-start-14 {
      grid-column-start: 14;
    }

    .cds--md:col-start-15 {
      grid-column-start: 15;
    }

    .cds--md:col-start-16 {
      grid-column-start: 16;
    }

    .cds--md:col-end-2 {
      grid-column-end: 2;
    }

    .cds--md:col-end-3 {
      grid-column-end: 3;
    }

    .cds--md:col-end-4 {
      grid-column-end: 4;
    }

    .cds--md:col-end-5 {
      grid-column-end: 5;
    }

    .cds--md:col-end-6 {
      grid-column-end: 6;
    }

    .cds--md:col-end-7 {
      grid-column-end: 7;
    }

    .cds--md:col-end-8 {
      grid-column-end: 8;
    }

    .cds--md:col-end-9 {
      grid-column-end: 9;
    }

    .cds--md:col-end-10 {
      grid-column-end: 10;
    }

    .cds--md:col-end-11 {
      grid-column-end: 11;
    }

    .cds--md:col-end-12 {
      grid-column-end: 12;
    }

    .cds--md:col-end-13 {
      grid-column-end: 13;
    }

    .cds--md:col-end-14 {
      grid-column-end: 14;
    }

    .cds--md:col-end-15 {
      grid-column-end: 15;
    }

    .cds--md:col-end-16 {
      grid-column-end: 16;
    }

    .cds--md:col-end-17 {
      grid-column-end: 17;
    }

    .cds--md:col-start-auto {
      grid-column-start: auto;
    }

    .cds--md:col-end-auto {
      grid-column-end: auto;
    }
  }

  @media (min-width: 66rem) {
    .cds--lg:col-start-1 {
      grid-column-start: 1;
    }

    .cds--lg:col-start-2 {
      grid-column-start: 2;
    }

    .cds--lg:col-start-3 {
      grid-column-start: 3;
    }

    .cds--lg:col-start-4 {
      grid-column-start: 4;
    }

    .cds--lg:col-start-5 {
      grid-column-start: 5;
    }

    .cds--lg:col-start-6 {
      grid-column-start: 6;
    }

    .cds--lg:col-start-7 {
      grid-column-start: 7;
    }

    .cds--lg:col-start-8 {
      grid-column-start: 8;
    }

    .cds--lg:col-start-9 {
      grid-column-start: 9;
    }

    .cds--lg:col-start-10 {
      grid-column-start: 10;
    }

    .cds--lg:col-start-11 {
      grid-column-start: 11;
    }

    .cds--lg:col-start-12 {
      grid-column-start: 12;
    }

    .cds--lg:col-start-13 {
      grid-column-start: 13;
    }

    .cds--lg:col-start-14 {
      grid-column-start: 14;
    }

    .cds--lg:col-start-15 {
      grid-column-start: 15;
    }

    .cds--lg:col-start-16 {
      grid-column-start: 16;
    }

    .cds--lg:col-end-2 {
      grid-column-end: 2;
    }

    .cds--lg:col-end-3 {
      grid-column-end: 3;
    }

    .cds--lg:col-end-4 {
      grid-column-end: 4;
    }

    .cds--lg:col-end-5 {
      grid-column-end: 5;
    }

    .cds--lg:col-end-6 {
      grid-column-end: 6;
    }

    .cds--lg:col-end-7 {
      grid-column-end: 7;
    }

    .cds--lg:col-end-8 {
      grid-column-end: 8;
    }

    .cds--lg:col-end-9 {
      grid-column-end: 9;
    }

    .cds--lg:col-end-10 {
      grid-column-end: 10;
    }

    .cds--lg:col-end-11 {
      grid-column-end: 11;
    }

    .cds--lg:col-end-12 {
      grid-column-end: 12;
    }

    .cds--lg:col-end-13 {
      grid-column-end: 13;
    }

    .cds--lg:col-end-14 {
      grid-column-end: 14;
    }

    .cds--lg:col-end-15 {
      grid-column-end: 15;
    }

    .cds--lg:col-end-16 {
      grid-column-end: 16;
    }

    .cds--lg:col-end-17 {
      grid-column-end: 17;
    }

    .cds--lg:col-start-auto {
      grid-column-start: auto;
    }

    .cds--lg:col-end-auto {
      grid-column-end: auto;
    }
  }

  @media (min-width: 82rem) {
    .cds--xlg:col-start-1 {
      grid-column-start: 1;
    }

    .cds--xlg:col-start-2 {
      grid-column-start: 2;
    }

    .cds--xlg:col-start-3 {
      grid-column-start: 3;
    }

    .cds--xlg:col-start-4 {
      grid-column-start: 4;
    }

    .cds--xlg:col-start-5 {
      grid-column-start: 5;
    }

    .cds--xlg:col-start-6 {
      grid-column-start: 6;
    }

    .cds--xlg:col-start-7 {
      grid-column-start: 7;
    }

    .cds--xlg:col-start-8 {
      grid-column-start: 8;
    }

    .cds--xlg:col-start-9 {
      grid-column-start: 9;
    }

    .cds--xlg:col-start-10 {
      grid-column-start: 10;
    }

    .cds--xlg:col-start-11 {
      grid-column-start: 11;
    }

    .cds--xlg:col-start-12 {
      grid-column-start: 12;
    }

    .cds--xlg:col-start-13 {
      grid-column-start: 13;
    }

    .cds--xlg:col-start-14 {
      grid-column-start: 14;
    }

    .cds--xlg:col-start-15 {
      grid-column-start: 15;
    }

    .cds--xlg:col-start-16 {
      grid-column-start: 16;
    }

    .cds--xlg:col-end-2 {
      grid-column-end: 2;
    }

    .cds--xlg:col-end-3 {
      grid-column-end: 3;
    }

    .cds--xlg:col-end-4 {
      grid-column-end: 4;
    }

    .cds--xlg:col-end-5 {
      grid-column-end: 5;
    }

    .cds--xlg:col-end-6 {
      grid-column-end: 6;
    }

    .cds--xlg:col-end-7 {
      grid-column-end: 7;
    }

    .cds--xlg:col-end-8 {
      grid-column-end: 8;
    }

    .cds--xlg:col-end-9 {
      grid-column-end: 9;
    }

    .cds--xlg:col-end-10 {
      grid-column-end: 10;
    }

    .cds--xlg:col-end-11 {
      grid-column-end: 11;
    }

    .cds--xlg:col-end-12 {
      grid-column-end: 12;
    }

    .cds--xlg:col-end-13 {
      grid-column-end: 13;
    }

    .cds--xlg:col-end-14 {
      grid-column-end: 14;
    }

    .cds--xlg:col-end-15 {
      grid-column-end: 15;
    }

    .cds--xlg:col-end-16 {
      grid-column-end: 16;
    }

    .cds--xlg:col-end-17 {
      grid-column-end: 17;
    }

    .cds--xlg:col-start-auto {
      grid-column-start: auto;
    }

    .cds--xlg:col-end-auto {
      grid-column-end: auto;
    }
  }

  @media (min-width: 99rem) {
    .cds--max:col-start-1 {
      grid-column-start: 1;
    }

    .cds--max:col-start-2 {
      grid-column-start: 2;
    }

    .cds--max:col-start-3 {
      grid-column-start: 3;
    }

    .cds--max:col-start-4 {
      grid-column-start: 4;
    }

    .cds--max:col-start-5 {
      grid-column-start: 5;
    }

    .cds--max:col-start-6 {
      grid-column-start: 6;
    }

    .cds--max:col-start-7 {
      grid-column-start: 7;
    }

    .cds--max:col-start-8 {
      grid-column-start: 8;
    }

    .cds--max:col-start-9 {
      grid-column-start: 9;
    }

    .cds--max:col-start-10 {
      grid-column-start: 10;
    }

    .cds--max:col-start-11 {
      grid-column-start: 11;
    }

    .cds--max:col-start-12 {
      grid-column-start: 12;
    }

    .cds--max:col-start-13 {
      grid-column-start: 13;
    }

    .cds--max:col-start-14 {
      grid-column-start: 14;
    }

    .cds--max:col-start-15 {
      grid-column-start: 15;
    }

    .cds--max:col-start-16 {
      grid-column-start: 16;
    }

    .cds--max:col-end-2 {
      grid-column-end: 2;
    }

    .cds--max:col-end-3 {
      grid-column-end: 3;
    }

    .cds--max:col-end-4 {
      grid-column-end: 4;
    }

    .cds--max:col-end-5 {
      grid-column-end: 5;
    }

    .cds--max:col-end-6 {
      grid-column-end: 6;
    }

    .cds--max:col-end-7 {
      grid-column-end: 7;
    }

    .cds--max:col-end-8 {
      grid-column-end: 8;
    }

    .cds--max:col-end-9 {
      grid-column-end: 9;
    }

    .cds--max:col-end-10 {
      grid-column-end: 10;
    }

    .cds--max:col-end-11 {
      grid-column-end: 11;
    }

    .cds--max:col-end-12 {
      grid-column-end: 12;
    }

    .cds--max:col-end-13 {
      grid-column-end: 13;
    }

    .cds--max:col-end-14 {
      grid-column-end: 14;
    }

    .cds--max:col-end-15 {
      grid-column-end: 15;
    }

    .cds--max:col-end-16 {
      grid-column-end: 16;
    }

    .cds--max:col-end-17 {
      grid-column-end: 17;
    }

    .cds--max:col-start-auto {
      grid-column-start: auto;
    }

    .cds--max:col-end-auto {
      grid-column-end: auto;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :root {
    --cds-ai-aura-end: rgba(255, 255, 255, 0);
    --cds-ai-aura-hover-background: #edf5ff;
    --cds-ai-aura-hover-end: rgba(255, 255, 255, 0);
    --cds-ai-aura-hover-start: rgba(69, 137, 255, 0.32);
    --cds-ai-aura-start: rgba(69, 137, 255, 0.1);
    --cds-ai-aura-start-sm: rgba(69, 137, 255, 0.16);
    --cds-ai-border-end: #78a9ff;
    --cds-ai-border-start: rgba(166, 200, 255, 0.64);
    --cds-ai-border-strong: #4589ff;
    --cds-ai-drop-shadow: rgba(15, 98, 254, 0.1);
    --cds-ai-inner-shadow: rgba(69, 137, 255, 0.1);
    --cds-ai-overlay: rgba(0, 17, 65, 0.5);
    --cds-ai-popover-background: #ffffff;
    --cds-ai-popover-caret-bottom: #78a9ff;
    --cds-ai-popover-caret-bottom-background: #eaf1ff;
    --cds-ai-popover-caret-bottom-background-actions: #e9effa;
    --cds-ai-popover-caret-center: #a0c3ff;
    --cds-ai-popover-shadow-outer-01: rgba(0, 67, 206, 0.06);
    --cds-ai-popover-shadow-outer-02: rgba(0, 0, 0, 0.04);
    --cds-ai-skeleton-background: #d0e2ff;
    --cds-ai-skeleton-element-background: #4589ff;
    --cds-background: #ffffff;
    --cds-background-active: rgba(141, 141, 141, 0.5);
    --cds-background-brand: #0f62fe;
    --cds-background-hover: rgba(141, 141, 141, 0.12);
    --cds-background-inverse: #393939;
    --cds-background-inverse-hover: #474747;
    --cds-background-selected: rgba(141, 141, 141, 0.2);
    --cds-background-selected-hover: rgba(141, 141, 141, 0.32);
    --cds-border-disabled: #c6c6c6;
    --cds-border-interactive: #0f62fe;
    --cds-border-inverse: #161616;
    --cds-border-strong-01: #8d8d8d;
    --cds-border-strong-02: #8d8d8d;
    --cds-border-strong-03: #8d8d8d;
    --cds-border-subtle-00: #e0e0e0;
    --cds-border-subtle-01: #c6c6c6;
    --cds-border-subtle-02: #e0e0e0;
    --cds-border-subtle-03: #c6c6c6;
    --cds-border-subtle-selected-01: #c6c6c6;
    --cds-border-subtle-selected-02: #c6c6c6;
    --cds-border-subtle-selected-03: #c6c6c6;
    --cds-border-tile-01: #c6c6c6;
    --cds-border-tile-02: #a8a8a8;
    --cds-border-tile-03: #c6c6c6;
    --cds-chat-avatar-agent: #393939;
    --cds-chat-avatar-bot: #6f6f6f;
    --cds-chat-avatar-user: #0f62fe;
    --cds-chat-bubble-agent: #ffffff;
    --cds-chat-bubble-border: #e0e0e0;
    --cds-chat-bubble-user: #e0e0e0;
    --cds-chat-button: #0f62fe;
    --cds-chat-button-active: rgba(141, 141, 141, 0.5);
    --cds-chat-button-hover: rgba(141, 141, 141, 0.12);
    --cds-chat-button-selected: rgba(141, 141, 141, 0.2);
    --cds-chat-button-text-hover: #0043ce;
    --cds-chat-button-text-selected: #525252;
    --cds-chat-header-background: #ffffff;
    --cds-chat-prompt-background: #ffffff;
    --cds-chat-prompt-border-end: rgba(244, 244, 244, 0);
    --cds-chat-prompt-border-start: #f4f4f4;
    --cds-chat-shell-background: #ffffff;
    --cds-field-01: #f4f4f4;
    --cds-field-02: #ffffff;
    --cds-field-03: #f4f4f4;
    --cds-field-hover-01: #e8e8e8;
    --cds-field-hover-02: #e8e8e8;
    --cds-field-hover-03: #e8e8e8;
    --cds-focus: #0f62fe;
    --cds-focus-inset: #ffffff;
    --cds-focus-inverse: #ffffff;
    --cds-highlight: #d0e2ff;
    --cds-icon-disabled: rgba(22, 22, 22, 0.25);
    --cds-icon-interactive: #0f62fe;
    --cds-icon-inverse: #ffffff;
    --cds-icon-on-color: #ffffff;
    --cds-icon-on-color-disabled: #8d8d8d;
    --cds-icon-primary: #161616;
    --cds-icon-secondary: #525252;
    --cds-interactive: #0f62fe;
    --cds-layer-01: #f4f4f4;
    --cds-layer-02: #ffffff;
    --cds-layer-03: #f4f4f4;
    --cds-layer-accent-01: #e0e0e0;
    --cds-layer-accent-02: #e0e0e0;
    --cds-layer-accent-03: #e0e0e0;
    --cds-layer-accent-active-01: #a8a8a8;
    --cds-layer-accent-active-02: #a8a8a8;
    --cds-layer-accent-active-03: #a8a8a8;
    --cds-layer-accent-hover-01: #d1d1d1;
    --cds-layer-accent-hover-02: #d1d1d1;
    --cds-layer-accent-hover-03: #d1d1d1;
    --cds-layer-active-01: #c6c6c6;
    --cds-layer-active-02: #c6c6c6;
    --cds-layer-active-03: #c6c6c6;
    --cds-layer-background-01: #ffffff;
    --cds-layer-background-02: #f4f4f4;
    --cds-layer-background-03: #ffffff;
    --cds-layer-hover-01: #e8e8e8;
    --cds-layer-hover-02: #e8e8e8;
    --cds-layer-hover-03: #e8e8e8;
    --cds-layer-selected-01: #e0e0e0;
    --cds-layer-selected-02: #e0e0e0;
    --cds-layer-selected-03: #e0e0e0;
    --cds-layer-selected-disabled: #8d8d8d;
    --cds-layer-selected-hover-01: #d1d1d1;
    --cds-layer-selected-hover-02: #d1d1d1;
    --cds-layer-selected-hover-03: #d1d1d1;
    --cds-layer-selected-inverse: #161616;
    --cds-link-inverse: #78a9ff;
    --cds-link-inverse-active: #f4f4f4;
    --cds-link-inverse-hover: #a6c8ff;
    --cds-link-inverse-visited: #be95ff;
    --cds-link-primary: #0f62fe;
    --cds-link-primary-hover: #0043ce;
    --cds-link-secondary: #0043ce;
    --cds-link-visited: #8a3ffc;
    --cds-overlay: rgba(22, 22, 22, 0.5);
    --cds-shadow: rgba(0, 0, 0, 0.3);
    --cds-skeleton-background: #e8e8e8;
    --cds-skeleton-element: #c6c6c6;
    --cds-support-caution-major: #ff832b;
    --cds-support-caution-minor: #f1c21b;
    --cds-support-caution-undefined: #8a3ffc;
    --cds-support-error: #da1e28;
    --cds-support-error-inverse: #fa4d56;
    --cds-support-info: #0043ce;
    --cds-support-info-inverse: #4589ff;
    --cds-support-success: #24a148;
    --cds-support-success-inverse: #42be65;
    --cds-support-warning: #f1c21b;
    --cds-support-warning-inverse: #f1c21b;
    --cds-text-disabled: rgba(22, 22, 22, 0.25);
    --cds-text-error: #da1e28;
    --cds-text-helper: #6f6f6f;
    --cds-text-inverse: #ffffff;
    --cds-text-on-color: #ffffff;
    --cds-text-on-color-disabled: #8d8d8d;
    --cds-text-placeholder: rgba(22, 22, 22, 0.4);
    --cds-text-primary: #161616;
    --cds-text-secondary: #525252;
    --cds-toggle-off: #8d8d8d;
    --cds-spacing-01: 0.125rem;
    --cds-spacing-02: 0.25rem;
    --cds-spacing-03: 0.5rem;
    --cds-spacing-04: 0.75rem;
    --cds-spacing-05: 1rem;
    --cds-spacing-06: 1.5rem;
    --cds-spacing-07: 2rem;
    --cds-spacing-08: 2.5rem;
    --cds-spacing-09: 3rem;
    --cds-spacing-10: 4rem;
    --cds-spacing-11: 5rem;
    --cds-spacing-12: 6rem;
    --cds-spacing-13: 10rem;
    --cds-fluid-spacing-01: 0;
    --cds-fluid-spacing-02: 2vw;
    --cds-fluid-spacing-03: 5vw;
    --cds-fluid-spacing-04: 10vw;
    --cds-caption-01-font-size: 0.75rem;
    --cds-caption-01-font-weight: 400;
    --cds-caption-01-line-height: 1.33333;
    --cds-caption-01-letter-spacing: 0.32px;
    --cds-caption-02-font-size: 0.875rem;
    --cds-caption-02-font-weight: 400;
    --cds-caption-02-line-height: 1.28572;
    --cds-caption-02-letter-spacing: 0.32px;
    --cds-label-01-font-size: 0.75rem;
    --cds-label-01-font-weight: 400;
    --cds-label-01-line-height: 1.33333;
    --cds-label-01-letter-spacing: 0.32px;
    --cds-label-02-font-size: 0.875rem;
    --cds-label-02-font-weight: 400;
    --cds-label-02-line-height: 1.28572;
    --cds-label-02-letter-spacing: 0.16px;
    --cds-helper-text-01-font-size: 0.75rem;
    --cds-helper-text-01-line-height: 1.33333;
    --cds-helper-text-01-letter-spacing: 0.32px;
    --cds-helper-text-02-font-size: 0.875rem;
    --cds-helper-text-02-font-weight: 400;
    --cds-helper-text-02-line-height: 1.28572;
    --cds-helper-text-02-letter-spacing: 0.16px;
    --cds-body-short-01-font-size: 0.875rem;
    --cds-body-short-01-font-weight: 400;
    --cds-body-short-01-line-height: 1.28572;
    --cds-body-short-01-letter-spacing: 0.16px;
    --cds-body-short-02-font-size: 1rem;
    --cds-body-short-02-font-weight: 400;
    --cds-body-short-02-line-height: 1.375;
    --cds-body-short-02-letter-spacing: 0;
    --cds-body-long-01-font-size: 0.875rem;
    --cds-body-long-01-font-weight: 400;
    --cds-body-long-01-line-height: 1.42857;
    --cds-body-long-01-letter-spacing: 0.16px;
    --cds-body-long-02-font-size: 1rem;
    --cds-body-long-02-font-weight: 400;
    --cds-body-long-02-line-height: 1.5;
    --cds-body-long-02-letter-spacing: 0;
    --cds-code-01-font-family:
      "IBM Plex Mono", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", monospace;
    --cds-code-01-font-size: 0.75rem;
    --cds-code-01-font-weight: 400;
    --cds-code-01-line-height: 1.33333;
    --cds-code-01-letter-spacing: 0.32px;
    --cds-code-02-font-family:
      "IBM Plex Mono", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", monospace;
    --cds-code-02-font-size: 0.875rem;
    --cds-code-02-font-weight: 400;
    --cds-code-02-line-height: 1.42857;
    --cds-code-02-letter-spacing: 0.32px;
    --cds-heading-01-font-size: 0.875rem;
    --cds-heading-01-font-weight: 600;
    --cds-heading-01-line-height: 1.42857;
    --cds-heading-01-letter-spacing: 0.16px;
    --cds-heading-02-font-size: 1rem;
    --cds-heading-02-font-weight: 600;
    --cds-heading-02-line-height: 1.5;
    --cds-heading-02-letter-spacing: 0;
    --cds-productive-heading-01-font-size: 0.875rem;
    --cds-productive-heading-01-font-weight: 600;
    --cds-productive-heading-01-line-height: 1.28572;
    --cds-productive-heading-01-letter-spacing: 0.16px;
    --cds-productive-heading-02-font-size: 1rem;
    --cds-productive-heading-02-font-weight: 600;
    --cds-productive-heading-02-line-height: 1.375;
    --cds-productive-heading-02-letter-spacing: 0;
    --cds-productive-heading-03-font-size: 1.25rem;
    --cds-productive-heading-03-font-weight: 400;
    --cds-productive-heading-03-line-height: 1.4;
    --cds-productive-heading-03-letter-spacing: 0;
    --cds-productive-heading-04-font-size: 1.75rem;
    --cds-productive-heading-04-font-weight: 400;
    --cds-productive-heading-04-line-height: 1.28572;
    --cds-productive-heading-04-letter-spacing: 0;
    --cds-productive-heading-05-font-size: 2rem;
    --cds-productive-heading-05-font-weight: 400;
    --cds-productive-heading-05-line-height: 1.25;
    --cds-productive-heading-05-letter-spacing: 0;
    --cds-productive-heading-06-font-size: 2.625rem;
    --cds-productive-heading-06-font-weight: 300;
    --cds-productive-heading-06-line-height: 1.199;
    --cds-productive-heading-06-letter-spacing: 0;
    --cds-productive-heading-07-font-size: 3.375rem;
    --cds-productive-heading-07-font-weight: 300;
    --cds-productive-heading-07-line-height: 1.19;
    --cds-productive-heading-07-letter-spacing: 0;
    --cds-expressive-paragraph-01-font-size: 1.5rem;
    --cds-expressive-paragraph-01-font-weight: 300;
    --cds-expressive-paragraph-01-line-height: 1.334;
    --cds-expressive-paragraph-01-letter-spacing: 0;
    --cds-expressive-heading-01-font-size: 0.875rem;
    --cds-expressive-heading-01-font-weight: 600;
    --cds-expressive-heading-01-line-height: 1.42857;
    --cds-expressive-heading-01-letter-spacing: 0.16px;
    --cds-expressive-heading-02-font-size: 1rem;
    --cds-expressive-heading-02-font-weight: 600;
    --cds-expressive-heading-02-line-height: 1.5;
    --cds-expressive-heading-02-letter-spacing: 0;
    --cds-expressive-heading-03-font-size: 1.25rem;
    --cds-expressive-heading-03-font-weight: 400;
    --cds-expressive-heading-03-line-height: 1.4;
    --cds-expressive-heading-03-letter-spacing: 0;
    --cds-expressive-heading-04-font-size: 1.75rem;
    --cds-expressive-heading-04-font-weight: 400;
    --cds-expressive-heading-04-line-height: 1.28572;
    --cds-expressive-heading-04-letter-spacing: 0;
    --cds-expressive-heading-05-font-size: 2rem;
    --cds-expressive-heading-05-font-weight: 400;
    --cds-expressive-heading-05-line-height: 1.25;
    --cds-expressive-heading-05-letter-spacing: 0;
    --cds-expressive-heading-06-font-size: 2rem;
    --cds-expressive-heading-06-font-weight: 600;
    --cds-expressive-heading-06-line-height: 1.25;
    --cds-expressive-heading-06-letter-spacing: 0;
    --cds-quotation-01-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-quotation-01-font-size: 1.25rem;
    --cds-quotation-01-font-weight: 400;
    --cds-quotation-01-line-height: 1.3;
    --cds-quotation-01-letter-spacing: 0;
    --cds-quotation-02-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-quotation-02-font-size: 2rem;
    --cds-quotation-02-font-weight: 300;
    --cds-quotation-02-line-height: 1.25;
    --cds-quotation-02-letter-spacing: 0;
    --cds-display-01-font-size: 2.625rem;
    --cds-display-01-font-weight: 300;
    --cds-display-01-line-height: 1.19;
    --cds-display-01-letter-spacing: 0;
    --cds-display-02-font-size: 2.625rem;
    --cds-display-02-font-weight: 600;
    --cds-display-02-line-height: 1.19;
    --cds-display-02-letter-spacing: 0;
    --cds-display-03-font-size: 2.625rem;
    --cds-display-03-font-weight: 300;
    --cds-display-03-line-height: 1.19;
    --cds-display-03-letter-spacing: 0;
    --cds-display-04-font-size: 2.625rem;
    --cds-display-04-font-weight: 300;
    --cds-display-04-line-height: 1.19;
    --cds-display-04-letter-spacing: 0;
    --cds-legal-01-font-size: 0.75rem;
    --cds-legal-01-font-weight: 400;
    --cds-legal-01-line-height: 1.33333;
    --cds-legal-01-letter-spacing: 0.32px;
    --cds-legal-02-font-size: 0.875rem;
    --cds-legal-02-font-weight: 400;
    --cds-legal-02-line-height: 1.28572;
    --cds-legal-02-letter-spacing: 0.16px;
    --cds-body-compact-01-font-size: 0.875rem;
    --cds-body-compact-01-font-weight: 400;
    --cds-body-compact-01-line-height: 1.28572;
    --cds-body-compact-01-letter-spacing: 0.16px;
    --cds-body-compact-02-font-size: 1rem;
    --cds-body-compact-02-font-weight: 400;
    --cds-body-compact-02-line-height: 1.375;
    --cds-body-compact-02-letter-spacing: 0;
    --cds-heading-compact-01-font-size: 0.875rem;
    --cds-heading-compact-01-font-weight: 600;
    --cds-heading-compact-01-line-height: 1.28572;
    --cds-heading-compact-01-letter-spacing: 0.16px;
    --cds-heading-compact-02-font-size: 1rem;
    --cds-heading-compact-02-font-weight: 600;
    --cds-heading-compact-02-line-height: 1.375;
    --cds-heading-compact-02-letter-spacing: 0;
    --cds-body-01-font-size: 0.875rem;
    --cds-body-01-font-weight: 400;
    --cds-body-01-line-height: 1.42857;
    --cds-body-01-letter-spacing: 0.16px;
    --cds-body-02-font-size: 1rem;
    --cds-body-02-font-weight: 400;
    --cds-body-02-line-height: 1.5;
    --cds-body-02-letter-spacing: 0;
    --cds-heading-03-font-size: 1.25rem;
    --cds-heading-03-font-weight: 400;
    --cds-heading-03-line-height: 1.4;
    --cds-heading-03-letter-spacing: 0;
    --cds-heading-04-font-size: 1.75rem;
    --cds-heading-04-font-weight: 400;
    --cds-heading-04-line-height: 1.28572;
    --cds-heading-04-letter-spacing: 0;
    --cds-heading-05-font-size: 2rem;
    --cds-heading-05-font-weight: 400;
    --cds-heading-05-line-height: 1.25;
    --cds-heading-05-letter-spacing: 0;
    --cds-heading-06-font-size: 2.625rem;
    --cds-heading-06-font-weight: 300;
    --cds-heading-06-line-height: 1.199;
    --cds-heading-06-letter-spacing: 0;
    --cds-heading-07-font-size: 3.375rem;
    --cds-heading-07-font-weight: 300;
    --cds-heading-07-line-height: 1.19;
    --cds-heading-07-letter-spacing: 0;
    --cds-fluid-heading-03-font-size: 1.25rem;
    --cds-fluid-heading-03-font-weight: 400;
    --cds-fluid-heading-03-line-height: 1.4;
    --cds-fluid-heading-03-letter-spacing: 0;
    --cds-fluid-heading-04-font-size: 1.75rem;
    --cds-fluid-heading-04-font-weight: 400;
    --cds-fluid-heading-04-line-height: 1.28572;
    --cds-fluid-heading-04-letter-spacing: 0;
    --cds-fluid-heading-05-font-size: 2rem;
    --cds-fluid-heading-05-font-weight: 400;
    --cds-fluid-heading-05-line-height: 1.25;
    --cds-fluid-heading-05-letter-spacing: 0;
    --cds-fluid-heading-06-font-size: 2rem;
    --cds-fluid-heading-06-font-weight: 600;
    --cds-fluid-heading-06-line-height: 1.25;
    --cds-fluid-heading-06-letter-spacing: 0;
    --cds-fluid-paragraph-01-font-size: 1.5rem;
    --cds-fluid-paragraph-01-font-weight: 300;
    --cds-fluid-paragraph-01-line-height: 1.334;
    --cds-fluid-paragraph-01-letter-spacing: 0;
    --cds-fluid-quotation-01-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-fluid-quotation-01-font-size: 1.25rem;
    --cds-fluid-quotation-01-font-weight: 400;
    --cds-fluid-quotation-01-line-height: 1.3;
    --cds-fluid-quotation-01-letter-spacing: 0;
    --cds-fluid-quotation-02-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-fluid-quotation-02-font-size: 2rem;
    --cds-fluid-quotation-02-font-weight: 300;
    --cds-fluid-quotation-02-line-height: 1.25;
    --cds-fluid-quotation-02-letter-spacing: 0;
    --cds-fluid-display-01-font-size: 2.625rem;
    --cds-fluid-display-01-font-weight: 300;
    --cds-fluid-display-01-line-height: 1.19;
    --cds-fluid-display-01-letter-spacing: 0;
    --cds-fluid-display-02-font-size: 2.625rem;
    --cds-fluid-display-02-font-weight: 600;
    --cds-fluid-display-02-line-height: 1.19;
    --cds-fluid-display-02-letter-spacing: 0;
    --cds-fluid-display-03-font-size: 2.625rem;
    --cds-fluid-display-03-font-weight: 300;
    --cds-fluid-display-03-line-height: 1.19;
    --cds-fluid-display-03-letter-spacing: 0;
    --cds-fluid-display-04-font-size: 2.625rem;
    --cds-fluid-display-04-font-weight: 300;
    --cds-fluid-display-04-line-height: 1.19;
    --cds-fluid-display-04-letter-spacing: 0;
    --cds-button-separator: #e0e0e0;
    --cds-button-primary: #0f62fe;
    --cds-button-secondary: #393939;
    --cds-button-tertiary: #0f62fe;
    --cds-button-danger-primary: #da1e28;
    --cds-button-danger-secondary: #da1e28;
    --cds-button-danger-active: #750e13;
    --cds-button-primary-active: #002d9c;
    --cds-button-secondary-active: #6f6f6f;
    --cds-button-tertiary-active: #002d9c;
    --cds-button-danger-hover: #b81921;
    --cds-button-primary-hover: #0050e6;
    --cds-button-secondary-hover: #474747;
    --cds-button-tertiary-hover: #0050e6;
    --cds-button-disabled: #c6c6c6;
    --cds-notification-background-error: #fff1f1;
    --cds-notification-background-success: #defbe6;
    --cds-notification-background-info: #edf5ff;
    --cds-notification-background-warning: #fcf4d6;
    --cds-notification-action-hover: #ffffff;
    --cds-notification-action-tertiary-inverse: #ffffff;
    --cds-notification-action-tertiary-inverse-active: #c6c6c6;
    --cds-notification-action-tertiary-inverse-hover: #f4f4f4;
    --cds-notification-action-tertiary-inverse-text: #161616;
    --cds-notification-action-tertiary-inverse-text-on-color-disabled: rgba(
      255,
      255,
      255,
      0.25
    );
    --cds-tag-background-red: #ffd7d9;
    --cds-tag-color-red: #a2191f;
    --cds-tag-hover-red: #ffc2c5;
    --cds-tag-background-magenta: #ffd6e8;
    --cds-tag-color-magenta: #9f1853;
    --cds-tag-hover-magenta: #ffbdda;
    --cds-tag-background-purple: #e8daff;
    --cds-tag-color-purple: #6929c4;
    --cds-tag-hover-purple: #dcc7ff;
    --cds-tag-background-blue: #d0e2ff;
    --cds-tag-color-blue: #0043ce;
    --cds-tag-hover-blue: #b8d3ff;
    --cds-tag-background-cyan: #bae6ff;
    --cds-tag-color-cyan: #00539a;
    --cds-tag-hover-cyan: #99daff;
    --cds-tag-background-teal: #9ef0f0;
    --cds-tag-color-teal: #005d5d;
    --cds-tag-hover-teal: #57e5e5;
    --cds-tag-background-green: #a7f0ba;
    --cds-tag-color-green: #0e6027;
    --cds-tag-hover-green: #74e792;
    --cds-tag-background-gray: #e0e0e0;
    --cds-tag-color-gray: #161616;
    --cds-tag-hover-gray: #d1d1d1;
    --cds-tag-border-red: #ff8389;
    --cds-tag-border-blue: #78a9ff;
    --cds-tag-border-cyan: #33b1ff;
    --cds-tag-border-teal: #08bdba;
    --cds-tag-border-green: #42be65;
    --cds-tag-border-magenta: #ff7eb6;
    --cds-tag-border-purple: #be95ff;
    --cds-tag-border-gray: #a8a8a8;
    --cds-tag-border-cool-gray: #a2a9b0;
    --cds-tag-border-warm-gray: #ada8a8;
    --cds-tag-background-cool-gray: #dde1e6;
    --cds-tag-color-cool-gray: #121619;
    --cds-tag-hover-cool-gray: #cdd3da;
    --cds-tag-background-warm-gray: #e5e0df;
    --cds-tag-color-warm-gray: #171414;
    --cds-tag-hover-warm-gray: #d8d0cf;
    --cds-status-red: #da1e28;
    --cds-status-orange: #ff832b;
    --cds-status-orange-outline: #ba4e00;
    --cds-status-yellow: #f1c21b;
    --cds-status-yellow-outline: #8e6a00;
    --cds-status-green: #24a148;
    --cds-status-blue: #0043ce;
    --cds-status-purple: #8a3ffc;
    --cds-status-gray: #6f6f6f;
    --cds-layer: var(--cds-layer-01, #f4f4f4);
    --cds-layer-active: var(--cds-layer-active-01, #c6c6c6);
    --cds-layer-background: var(--cds-layer-background-01, #ffffff);
    --cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);
    --cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);
    --cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);
    --cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);
    --cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);
    --cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);
    --cds-field: var(--cds-field-01, #f4f4f4);
    --cds-field-hover: var(--cds-field-hover-01, #e8e8e8);
    --cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);
    --cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);
    --cds-border-strong: var(--cds-border-strong-01, #8d8d8d);
    --cds-border-tile: var(--cds-border-tile-01, #c6c6c6);
  }

  @media screen and (-ms-high-contrast: active), (forced-colors: active) {
    :root {
      --cds-icon-primary: ButtonText;
      --cds-icon-secondary: ButtonText;
      --cds-icon-interactive: ButtonText;
      --cds-icon-disabled: GrayText;
      --cds-icon-on-color-disabled: GrayText;
      --cds-icon-inverse: SelectedItemText;
      --cds-icon-on-color: SelectedItemText;
      --cds-button-disabled: GrayText;
      --cds-interactive: ButtonText;
      --cds-link-primary: LinkText;
      --cds-link-primary-hover: LinkText;
      --cds-link-secondary: LinkText;
      --cds-link-inverse: SelectedItemText;
      --cds-link-inverse-hover: SelectedItemText;
      --cds-link-inverse-visited: SelectedItemText;
      --cds-link-visited: VisitedText;
      --cds-background-selected: SelectedItem;
      --cds-background-selected-hover: SelectedItem;
      --cds-background-inverse: SelectedItem;
      --cds-layer-selected-inverse: SelectedItem;
    }
  }

  :root[storybook-carbon-theme="g10"] {
    --cds-ai-aura-end: rgba(255, 255, 255, 0);
    --cds-ai-aura-hover-background: #edf5ff;
    --cds-ai-aura-hover-end: rgba(255, 255, 255, 0);
    --cds-ai-aura-hover-start: rgba(69, 137, 255, 0.32);
    --cds-ai-aura-start: rgba(69, 137, 255, 0.1);
    --cds-ai-aura-start-sm: rgba(69, 137, 255, 0.16);
    --cds-ai-border-end: #78a9ff;
    --cds-ai-border-start: rgba(166, 200, 255, 0.64);
    --cds-ai-border-strong: #4589ff;
    --cds-ai-drop-shadow: rgba(15, 98, 254, 0.1);
    --cds-ai-inner-shadow: rgba(69, 137, 255, 0.1);
    --cds-ai-overlay: rgba(0, 17, 65, 0.5);
    --cds-ai-popover-background: #ffffff;
    --cds-ai-popover-caret-bottom: #78a9ff;
    --cds-ai-popover-caret-bottom-background: #eaf1ff;
    --cds-ai-popover-caret-bottom-background-actions: #e9effa;
    --cds-ai-popover-caret-center: #a0c3ff;
    --cds-ai-popover-shadow-outer-01: rgba(0, 67, 206, 0.06);
    --cds-ai-popover-shadow-outer-02: rgba(0, 0, 0, 0.04);
    --cds-ai-skeleton-background: #d0e2ff;
    --cds-ai-skeleton-element-background: #4589ff;
    --cds-background: #f4f4f4;
    --cds-background-active: rgba(141, 141, 141, 0.5);
    --cds-background-brand: #0f62fe;
    --cds-background-hover: rgba(141, 141, 141, 0.12);
    --cds-background-inverse: #393939;
    --cds-background-inverse-hover: #474747;
    --cds-background-selected: rgba(141, 141, 141, 0.2);
    --cds-background-selected-hover: rgba(141, 141, 141, 0.32);
    --cds-border-disabled: #c6c6c6;
    --cds-border-interactive: #0f62fe;
    --cds-border-inverse: #161616;
    --cds-border-strong-01: #8d8d8d;
    --cds-border-strong-02: #8d8d8d;
    --cds-border-strong-03: #8d8d8d;
    --cds-border-subtle-00: #c6c6c6;
    --cds-border-subtle-01: #e0e0e0;
    --cds-border-subtle-02: #c6c6c6;
    --cds-border-subtle-03: #e0e0e0;
    --cds-border-subtle-selected-01: #c6c6c6;
    --cds-border-subtle-selected-02: #c6c6c6;
    --cds-border-subtle-selected-03: #c6c6c6;
    --cds-border-tile-01: #a8a8a8;
    --cds-border-tile-02: #c6c6c6;
    --cds-border-tile-03: #a8a8a8;
    --cds-chat-avatar-agent: #393939;
    --cds-chat-avatar-bot: #6f6f6f;
    --cds-chat-avatar-user: #0f62fe;
    --cds-chat-bubble-agent: #ffffff;
    --cds-chat-bubble-border: #e0e0e0;
    --cds-chat-bubble-user: #e0e0e0;
    --cds-chat-button: #0f62fe;
    --cds-chat-button-active: rgba(141, 141, 141, 0.5);
    --cds-chat-button-hover: rgba(141, 141, 141, 0.12);
    --cds-chat-button-selected: rgba(141, 141, 141, 0.2);
    --cds-chat-button-text-hover: #0043ce;
    --cds-chat-button-text-selected: #525252;
    --cds-chat-header-background: #ffffff;
    --cds-chat-prompt-background: #ffffff;
    --cds-chat-prompt-border-end: rgba(244, 244, 244, 0);
    --cds-chat-prompt-border-start: #f4f4f4;
    --cds-chat-shell-background: #ffffff;
    --cds-field-01: #ffffff;
    --cds-field-02: #f4f4f4;
    --cds-field-03: #ffffff;
    --cds-field-hover-01: #e8e8e8;
    --cds-field-hover-02: #e8e8e8;
    --cds-field-hover-03: #e8e8e8;
    --cds-focus: #0f62fe;
    --cds-focus-inset: #ffffff;
    --cds-focus-inverse: #ffffff;
    --cds-highlight: #d0e2ff;
    --cds-icon-disabled: rgba(22, 22, 22, 0.25);
    --cds-icon-interactive: #0f62fe;
    --cds-icon-inverse: #ffffff;
    --cds-icon-on-color: #ffffff;
    --cds-icon-on-color-disabled: #8d8d8d;
    --cds-icon-primary: #161616;
    --cds-icon-secondary: #525252;
    --cds-interactive: #0f62fe;
    --cds-layer-01: #ffffff;
    --cds-layer-02: #f4f4f4;
    --cds-layer-03: #ffffff;
    --cds-layer-accent-01: #e0e0e0;
    --cds-layer-accent-02: #e0e0e0;
    --cds-layer-accent-03: #e0e0e0;
    --cds-layer-accent-active-01: #a8a8a8;
    --cds-layer-accent-active-02: #a8a8a8;
    --cds-layer-accent-active-03: #a8a8a8;
    --cds-layer-accent-hover-01: #d1d1d1;
    --cds-layer-accent-hover-02: #d1d1d1;
    --cds-layer-accent-hover-03: #d1d1d1;
    --cds-layer-active-01: #c6c6c6;
    --cds-layer-active-02: #c6c6c6;
    --cds-layer-active-03: #c6c6c6;
    --cds-layer-background-01: #f4f4f4;
    --cds-layer-background-02: #ffffff;
    --cds-layer-background-03: #f4f4f4;
    --cds-layer-hover-01: #e8e8e8;
    --cds-layer-hover-02: #e8e8e8;
    --cds-layer-hover-03: #e8e8e8;
    --cds-layer-selected-01: #e0e0e0;
    --cds-layer-selected-02: #e0e0e0;
    --cds-layer-selected-03: #e0e0e0;
    --cds-layer-selected-disabled: #8d8d8d;
    --cds-layer-selected-hover-01: #d1d1d1;
    --cds-layer-selected-hover-02: #d1d1d1;
    --cds-layer-selected-hover-03: #d1d1d1;
    --cds-layer-selected-inverse: #161616;
    --cds-link-inverse: #78a9ff;
    --cds-link-inverse-active: #f4f4f4;
    --cds-link-inverse-hover: #a6c8ff;
    --cds-link-inverse-visited: #be95ff;
    --cds-link-primary: #0f62fe;
    --cds-link-primary-hover: #0043ce;
    --cds-link-secondary: #0043ce;
    --cds-link-visited: #8a3ffc;
    --cds-overlay: rgba(22, 22, 22, 0.5);
    --cds-shadow: rgba(0, 0, 0, 0.3);
    --cds-skeleton-background: #e8e8e8;
    --cds-skeleton-element: #c6c6c6;
    --cds-support-caution-major: #ff832b;
    --cds-support-caution-minor: #f1c21b;
    --cds-support-caution-undefined: #8a3ffc;
    --cds-support-error: #da1e28;
    --cds-support-error-inverse: #fa4d56;
    --cds-support-info: #0043ce;
    --cds-support-info-inverse: #4589ff;
    --cds-support-success: #24a148;
    --cds-support-success-inverse: #42be65;
    --cds-support-warning: #f1c21b;
    --cds-support-warning-inverse: #f1c21b;
    --cds-text-disabled: rgba(22, 22, 22, 0.25);
    --cds-text-error: #da1e28;
    --cds-text-helper: #6f6f6f;
    --cds-text-inverse: #ffffff;
    --cds-text-on-color: #ffffff;
    --cds-text-on-color-disabled: #8d8d8d;
    --cds-text-placeholder: rgba(22, 22, 22, 0.4);
    --cds-text-primary: #161616;
    --cds-text-secondary: #525252;
    --cds-toggle-off: #8d8d8d;
    --cds-spacing-01: 0.125rem;
    --cds-spacing-02: 0.25rem;
    --cds-spacing-03: 0.5rem;
    --cds-spacing-04: 0.75rem;
    --cds-spacing-05: 1rem;
    --cds-spacing-06: 1.5rem;
    --cds-spacing-07: 2rem;
    --cds-spacing-08: 2.5rem;
    --cds-spacing-09: 3rem;
    --cds-spacing-10: 4rem;
    --cds-spacing-11: 5rem;
    --cds-spacing-12: 6rem;
    --cds-spacing-13: 10rem;
    --cds-fluid-spacing-01: 0;
    --cds-fluid-spacing-02: 2vw;
    --cds-fluid-spacing-03: 5vw;
    --cds-fluid-spacing-04: 10vw;
    --cds-caption-01-font-size: 0.75rem;
    --cds-caption-01-font-weight: 400;
    --cds-caption-01-line-height: 1.33333;
    --cds-caption-01-letter-spacing: 0.32px;
    --cds-caption-02-font-size: 0.875rem;
    --cds-caption-02-font-weight: 400;
    --cds-caption-02-line-height: 1.28572;
    --cds-caption-02-letter-spacing: 0.32px;
    --cds-label-01-font-size: 0.75rem;
    --cds-label-01-font-weight: 400;
    --cds-label-01-line-height: 1.33333;
    --cds-label-01-letter-spacing: 0.32px;
    --cds-label-02-font-size: 0.875rem;
    --cds-label-02-font-weight: 400;
    --cds-label-02-line-height: 1.28572;
    --cds-label-02-letter-spacing: 0.16px;
    --cds-helper-text-01-font-size: 0.75rem;
    --cds-helper-text-01-line-height: 1.33333;
    --cds-helper-text-01-letter-spacing: 0.32px;
    --cds-helper-text-02-font-size: 0.875rem;
    --cds-helper-text-02-font-weight: 400;
    --cds-helper-text-02-line-height: 1.28572;
    --cds-helper-text-02-letter-spacing: 0.16px;
    --cds-body-short-01-font-size: 0.875rem;
    --cds-body-short-01-font-weight: 400;
    --cds-body-short-01-line-height: 1.28572;
    --cds-body-short-01-letter-spacing: 0.16px;
    --cds-body-short-02-font-size: 1rem;
    --cds-body-short-02-font-weight: 400;
    --cds-body-short-02-line-height: 1.375;
    --cds-body-short-02-letter-spacing: 0;
    --cds-body-long-01-font-size: 0.875rem;
    --cds-body-long-01-font-weight: 400;
    --cds-body-long-01-line-height: 1.42857;
    --cds-body-long-01-letter-spacing: 0.16px;
    --cds-body-long-02-font-size: 1rem;
    --cds-body-long-02-font-weight: 400;
    --cds-body-long-02-line-height: 1.5;
    --cds-body-long-02-letter-spacing: 0;
    --cds-code-01-font-family:
      "IBM Plex Mono", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", monospace;
    --cds-code-01-font-size: 0.75rem;
    --cds-code-01-font-weight: 400;
    --cds-code-01-line-height: 1.33333;
    --cds-code-01-letter-spacing: 0.32px;
    --cds-code-02-font-family:
      "IBM Plex Mono", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", monospace;
    --cds-code-02-font-size: 0.875rem;
    --cds-code-02-font-weight: 400;
    --cds-code-02-line-height: 1.42857;
    --cds-code-02-letter-spacing: 0.32px;
    --cds-heading-01-font-size: 0.875rem;
    --cds-heading-01-font-weight: 600;
    --cds-heading-01-line-height: 1.42857;
    --cds-heading-01-letter-spacing: 0.16px;
    --cds-heading-02-font-size: 1rem;
    --cds-heading-02-font-weight: 600;
    --cds-heading-02-line-height: 1.5;
    --cds-heading-02-letter-spacing: 0;
    --cds-productive-heading-01-font-size: 0.875rem;
    --cds-productive-heading-01-font-weight: 600;
    --cds-productive-heading-01-line-height: 1.28572;
    --cds-productive-heading-01-letter-spacing: 0.16px;
    --cds-productive-heading-02-font-size: 1rem;
    --cds-productive-heading-02-font-weight: 600;
    --cds-productive-heading-02-line-height: 1.375;
    --cds-productive-heading-02-letter-spacing: 0;
    --cds-productive-heading-03-font-size: 1.25rem;
    --cds-productive-heading-03-font-weight: 400;
    --cds-productive-heading-03-line-height: 1.4;
    --cds-productive-heading-03-letter-spacing: 0;
    --cds-productive-heading-04-font-size: 1.75rem;
    --cds-productive-heading-04-font-weight: 400;
    --cds-productive-heading-04-line-height: 1.28572;
    --cds-productive-heading-04-letter-spacing: 0;
    --cds-productive-heading-05-font-size: 2rem;
    --cds-productive-heading-05-font-weight: 400;
    --cds-productive-heading-05-line-height: 1.25;
    --cds-productive-heading-05-letter-spacing: 0;
    --cds-productive-heading-06-font-size: 2.625rem;
    --cds-productive-heading-06-font-weight: 300;
    --cds-productive-heading-06-line-height: 1.199;
    --cds-productive-heading-06-letter-spacing: 0;
    --cds-productive-heading-07-font-size: 3.375rem;
    --cds-productive-heading-07-font-weight: 300;
    --cds-productive-heading-07-line-height: 1.19;
    --cds-productive-heading-07-letter-spacing: 0;
    --cds-expressive-paragraph-01-font-size: 1.5rem;
    --cds-expressive-paragraph-01-font-weight: 300;
    --cds-expressive-paragraph-01-line-height: 1.334;
    --cds-expressive-paragraph-01-letter-spacing: 0;
    --cds-expressive-heading-01-font-size: 0.875rem;
    --cds-expressive-heading-01-font-weight: 600;
    --cds-expressive-heading-01-line-height: 1.42857;
    --cds-expressive-heading-01-letter-spacing: 0.16px;
    --cds-expressive-heading-02-font-size: 1rem;
    --cds-expressive-heading-02-font-weight: 600;
    --cds-expressive-heading-02-line-height: 1.5;
    --cds-expressive-heading-02-letter-spacing: 0;
    --cds-expressive-heading-03-font-size: 1.25rem;
    --cds-expressive-heading-03-font-weight: 400;
    --cds-expressive-heading-03-line-height: 1.4;
    --cds-expressive-heading-03-letter-spacing: 0;
    --cds-expressive-heading-04-font-size: 1.75rem;
    --cds-expressive-heading-04-font-weight: 400;
    --cds-expressive-heading-04-line-height: 1.28572;
    --cds-expressive-heading-04-letter-spacing: 0;
    --cds-expressive-heading-05-font-size: 2rem;
    --cds-expressive-heading-05-font-weight: 400;
    --cds-expressive-heading-05-line-height: 1.25;
    --cds-expressive-heading-05-letter-spacing: 0;
    --cds-expressive-heading-06-font-size: 2rem;
    --cds-expressive-heading-06-font-weight: 600;
    --cds-expressive-heading-06-line-height: 1.25;
    --cds-expressive-heading-06-letter-spacing: 0;
    --cds-quotation-01-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-quotation-01-font-size: 1.25rem;
    --cds-quotation-01-font-weight: 400;
    --cds-quotation-01-line-height: 1.3;
    --cds-quotation-01-letter-spacing: 0;
    --cds-quotation-02-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-quotation-02-font-size: 2rem;
    --cds-quotation-02-font-weight: 300;
    --cds-quotation-02-line-height: 1.25;
    --cds-quotation-02-letter-spacing: 0;
    --cds-display-01-font-size: 2.625rem;
    --cds-display-01-font-weight: 300;
    --cds-display-01-line-height: 1.19;
    --cds-display-01-letter-spacing: 0;
    --cds-display-02-font-size: 2.625rem;
    --cds-display-02-font-weight: 600;
    --cds-display-02-line-height: 1.19;
    --cds-display-02-letter-spacing: 0;
    --cds-display-03-font-size: 2.625rem;
    --cds-display-03-font-weight: 300;
    --cds-display-03-line-height: 1.19;
    --cds-display-03-letter-spacing: 0;
    --cds-display-04-font-size: 2.625rem;
    --cds-display-04-font-weight: 300;
    --cds-display-04-line-height: 1.19;
    --cds-display-04-letter-spacing: 0;
    --cds-legal-01-font-size: 0.75rem;
    --cds-legal-01-font-weight: 400;
    --cds-legal-01-line-height: 1.33333;
    --cds-legal-01-letter-spacing: 0.32px;
    --cds-legal-02-font-size: 0.875rem;
    --cds-legal-02-font-weight: 400;
    --cds-legal-02-line-height: 1.28572;
    --cds-legal-02-letter-spacing: 0.16px;
    --cds-body-compact-01-font-size: 0.875rem;
    --cds-body-compact-01-font-weight: 400;
    --cds-body-compact-01-line-height: 1.28572;
    --cds-body-compact-01-letter-spacing: 0.16px;
    --cds-body-compact-02-font-size: 1rem;
    --cds-body-compact-02-font-weight: 400;
    --cds-body-compact-02-line-height: 1.375;
    --cds-body-compact-02-letter-spacing: 0;
    --cds-heading-compact-01-font-size: 0.875rem;
    --cds-heading-compact-01-font-weight: 600;
    --cds-heading-compact-01-line-height: 1.28572;
    --cds-heading-compact-01-letter-spacing: 0.16px;
    --cds-heading-compact-02-font-size: 1rem;
    --cds-heading-compact-02-font-weight: 600;
    --cds-heading-compact-02-line-height: 1.375;
    --cds-heading-compact-02-letter-spacing: 0;
    --cds-body-01-font-size: 0.875rem;
    --cds-body-01-font-weight: 400;
    --cds-body-01-line-height: 1.42857;
    --cds-body-01-letter-spacing: 0.16px;
    --cds-body-02-font-size: 1rem;
    --cds-body-02-font-weight: 400;
    --cds-body-02-line-height: 1.5;
    --cds-body-02-letter-spacing: 0;
    --cds-heading-03-font-size: 1.25rem;
    --cds-heading-03-font-weight: 400;
    --cds-heading-03-line-height: 1.4;
    --cds-heading-03-letter-spacing: 0;
    --cds-heading-04-font-size: 1.75rem;
    --cds-heading-04-font-weight: 400;
    --cds-heading-04-line-height: 1.28572;
    --cds-heading-04-letter-spacing: 0;
    --cds-heading-05-font-size: 2rem;
    --cds-heading-05-font-weight: 400;
    --cds-heading-05-line-height: 1.25;
    --cds-heading-05-letter-spacing: 0;
    --cds-heading-06-font-size: 2.625rem;
    --cds-heading-06-font-weight: 300;
    --cds-heading-06-line-height: 1.199;
    --cds-heading-06-letter-spacing: 0;
    --cds-heading-07-font-size: 3.375rem;
    --cds-heading-07-font-weight: 300;
    --cds-heading-07-line-height: 1.19;
    --cds-heading-07-letter-spacing: 0;
    --cds-fluid-heading-03-font-size: 1.25rem;
    --cds-fluid-heading-03-font-weight: 400;
    --cds-fluid-heading-03-line-height: 1.4;
    --cds-fluid-heading-03-letter-spacing: 0;
    --cds-fluid-heading-04-font-size: 1.75rem;
    --cds-fluid-heading-04-font-weight: 400;
    --cds-fluid-heading-04-line-height: 1.28572;
    --cds-fluid-heading-04-letter-spacing: 0;
    --cds-fluid-heading-05-font-size: 2rem;
    --cds-fluid-heading-05-font-weight: 400;
    --cds-fluid-heading-05-line-height: 1.25;
    --cds-fluid-heading-05-letter-spacing: 0;
    --cds-fluid-heading-06-font-size: 2rem;
    --cds-fluid-heading-06-font-weight: 600;
    --cds-fluid-heading-06-line-height: 1.25;
    --cds-fluid-heading-06-letter-spacing: 0;
    --cds-fluid-paragraph-01-font-size: 1.5rem;
    --cds-fluid-paragraph-01-font-weight: 300;
    --cds-fluid-paragraph-01-line-height: 1.334;
    --cds-fluid-paragraph-01-letter-spacing: 0;
    --cds-fluid-quotation-01-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-fluid-quotation-01-font-size: 1.25rem;
    --cds-fluid-quotation-01-font-weight: 400;
    --cds-fluid-quotation-01-line-height: 1.3;
    --cds-fluid-quotation-01-letter-spacing: 0;
    --cds-fluid-quotation-02-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-fluid-quotation-02-font-size: 2rem;
    --cds-fluid-quotation-02-font-weight: 300;
    --cds-fluid-quotation-02-line-height: 1.25;
    --cds-fluid-quotation-02-letter-spacing: 0;
    --cds-fluid-display-01-font-size: 2.625rem;
    --cds-fluid-display-01-font-weight: 300;
    --cds-fluid-display-01-line-height: 1.19;
    --cds-fluid-display-01-letter-spacing: 0;
    --cds-fluid-display-02-font-size: 2.625rem;
    --cds-fluid-display-02-font-weight: 600;
    --cds-fluid-display-02-line-height: 1.19;
    --cds-fluid-display-02-letter-spacing: 0;
    --cds-fluid-display-03-font-size: 2.625rem;
    --cds-fluid-display-03-font-weight: 300;
    --cds-fluid-display-03-line-height: 1.19;
    --cds-fluid-display-03-letter-spacing: 0;
    --cds-fluid-display-04-font-size: 2.625rem;
    --cds-fluid-display-04-font-weight: 300;
    --cds-fluid-display-04-line-height: 1.19;
    --cds-fluid-display-04-letter-spacing: 0;
    --cds-button-separator: #e0e0e0;
    --cds-button-primary: #0f62fe;
    --cds-button-secondary: #393939;
    --cds-button-tertiary: #0f62fe;
    --cds-button-danger-primary: #da1e28;
    --cds-button-danger-secondary: #da1e28;
    --cds-button-danger-active: #750e13;
    --cds-button-primary-active: #002d9c;
    --cds-button-secondary-active: #6f6f6f;
    --cds-button-tertiary-active: #002d9c;
    --cds-button-danger-hover: #b81921;
    --cds-button-primary-hover: #0050e6;
    --cds-button-secondary-hover: #474747;
    --cds-button-tertiary-hover: #0050e6;
    --cds-button-disabled: #c6c6c6;
    --cds-notification-background-error: #fff1f1;
    --cds-notification-background-success: #defbe6;
    --cds-notification-background-info: #edf5ff;
    --cds-notification-background-warning: #fcf4d6;
    --cds-notification-action-hover: #ffffff;
    --cds-notification-action-tertiary-inverse: #ffffff;
    --cds-notification-action-tertiary-inverse-active: #c6c6c6;
    --cds-notification-action-tertiary-inverse-hover: #f4f4f4;
    --cds-notification-action-tertiary-inverse-text: #161616;
    --cds-notification-action-tertiary-inverse-text-on-color-disabled: rgba(
      255,
      255,
      255,
      0.25
    );
    --cds-tag-background-red: #ffd7d9;
    --cds-tag-color-red: #a2191f;
    --cds-tag-hover-red: #ffc2c5;
    --cds-tag-background-magenta: #ffd6e8;
    --cds-tag-color-magenta: #9f1853;
    --cds-tag-hover-magenta: #ffbdda;
    --cds-tag-background-purple: #e8daff;
    --cds-tag-color-purple: #6929c4;
    --cds-tag-hover-purple: #dcc7ff;
    --cds-tag-background-blue: #d0e2ff;
    --cds-tag-color-blue: #0043ce;
    --cds-tag-hover-blue: #b8d3ff;
    --cds-tag-background-cyan: #bae6ff;
    --cds-tag-color-cyan: #00539a;
    --cds-tag-hover-cyan: #99daff;
    --cds-tag-background-teal: #9ef0f0;
    --cds-tag-color-teal: #005d5d;
    --cds-tag-hover-teal: #57e5e5;
    --cds-tag-background-green: #a7f0ba;
    --cds-tag-color-green: #0e6027;
    --cds-tag-hover-green: #74e792;
    --cds-tag-background-gray: #e0e0e0;
    --cds-tag-color-gray: #161616;
    --cds-tag-hover-gray: #d1d1d1;
    --cds-tag-border-red: #ff8389;
    --cds-tag-border-blue: #78a9ff;
    --cds-tag-border-cyan: #33b1ff;
    --cds-tag-border-teal: #08bdba;
    --cds-tag-border-green: #42be65;
    --cds-tag-border-magenta: #ff7eb6;
    --cds-tag-border-purple: #be95ff;
    --cds-tag-border-gray: #a8a8a8;
    --cds-tag-border-cool-gray: #a2a9b0;
    --cds-tag-border-warm-gray: #ada8a8;
    --cds-tag-background-cool-gray: #dde1e6;
    --cds-tag-color-cool-gray: #121619;
    --cds-tag-hover-cool-gray: #cdd3da;
    --cds-tag-background-warm-gray: #e5e0df;
    --cds-tag-color-warm-gray: #171414;
    --cds-tag-hover-warm-gray: #d8d0cf;
    --cds-status-red: #da1e28;
    --cds-status-orange: #ff832b;
    --cds-status-orange-outline: #ba4e00;
    --cds-status-yellow: #f1c21b;
    --cds-status-yellow-outline: #8e6a00;
    --cds-status-green: #24a148;
    --cds-status-blue: #0043ce;
    --cds-status-purple: #8a3ffc;
    --cds-status-gray: #6f6f6f;
    --cds-layer: var(--cds-layer-01, #f4f4f4);
    --cds-layer-active: var(--cds-layer-active-01, #c6c6c6);
    --cds-layer-background: var(--cds-layer-background-01, #ffffff);
    --cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);
    --cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);
    --cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);
    --cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);
    --cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);
    --cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);
    --cds-field: var(--cds-field-01, #f4f4f4);
    --cds-field-hover: var(--cds-field-hover-01, #e8e8e8);
    --cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);
    --cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);
    --cds-border-strong: var(--cds-border-strong-01, #8d8d8d);
    --cds-border-tile: var(--cds-border-tile-01, #c6c6c6);
  }

  @media screen and (-ms-high-contrast: active), (forced-colors: active) {
    :root[storybook-carbon-theme="g10"] {
      --cds-icon-primary: ButtonText;
      --cds-icon-secondary: ButtonText;
      --cds-icon-interactive: ButtonText;
      --cds-icon-disabled: GrayText;
      --cds-icon-on-color-disabled: GrayText;
      --cds-icon-inverse: SelectedItemText;
      --cds-icon-on-color: SelectedItemText;
      --cds-button-disabled: GrayText;
      --cds-interactive: ButtonText;
      --cds-link-primary: LinkText;
      --cds-link-primary-hover: LinkText;
      --cds-link-secondary: LinkText;
      --cds-link-inverse: SelectedItemText;
      --cds-link-inverse-hover: SelectedItemText;
      --cds-link-inverse-visited: SelectedItemText;
      --cds-link-visited: VisitedText;
      --cds-background-selected: SelectedItem;
      --cds-background-selected-hover: SelectedItem;
      --cds-background-inverse: SelectedItem;
      --cds-layer-selected-inverse: SelectedItem;
    }
  }

  :root[storybook-carbon-theme="g90"] {
    --cds-ai-aura-end: rgba(0, 0, 0, 0);
    --cds-ai-aura-hover-background: #474747;
    --cds-ai-aura-hover-end: rgba(0, 0, 0, 0);
    --cds-ai-aura-hover-start: rgba(69, 137, 255, 0.4);
    --cds-ai-aura-start: rgba(69, 137, 255, 0.1);
    --cds-ai-aura-start-sm: rgba(69, 137, 255, 0.16);
    --cds-ai-border-end: #4589ff;
    --cds-ai-border-start: rgba(166, 200, 255, 0.36);
    --cds-ai-border-strong: #78a9ff;
    --cds-ai-drop-shadow: rgba(0, 0, 0, 0.28);
    --cds-ai-inner-shadow: rgba(69, 137, 255, 0.16);
    --cds-ai-overlay: rgba(0, 0, 0, 0.5);
    --cds-ai-popover-background: #161616;
    --cds-ai-popover-caret-bottom: #4589ff;
    --cds-ai-popover-caret-bottom-background: #202d45;
    --cds-ai-popover-caret-bottom-background-actions: #1e283a;
    --cds-ai-popover-caret-center: #4870b5;
    --cds-ai-popover-shadow-outer-01: rgba(0, 0, 0, 0.12);
    --cds-ai-popover-shadow-outer-02: rgba(0, 0, 0, 0.08);
    --cds-ai-skeleton-background: rgba(120, 169, 255, 0.5);
    --cds-ai-skeleton-element-background: rgba(120, 169, 255, 0.3);
    --cds-background: #262626;
    --cds-background-active: rgba(141, 141, 141, 0.4);
    --cds-background-brand: #0f62fe;
    --cds-background-hover: rgba(141, 141, 141, 0.16);
    --cds-background-inverse: #f4f4f4;
    --cds-background-inverse-hover: #e8e8e8;
    --cds-background-selected: rgba(141, 141, 141, 0.24);
    --cds-background-selected-hover: rgba(141, 141, 141, 0.32);
    --cds-border-disabled: rgba(141, 141, 141, 0.5);
    --cds-border-interactive: #4589ff;
    --cds-border-inverse: #f4f4f4;
    --cds-border-strong-01: #8d8d8d;
    --cds-border-strong-02: #a8a8a8;
    --cds-border-strong-03: #c6c6c6;
    --cds-border-subtle-00: #525252;
    --cds-border-subtle-01: #6f6f6f;
    --cds-border-subtle-02: #8d8d8d;
    --cds-border-subtle-03: #8d8d8d;
    --cds-border-subtle-selected-01: #8d8d8d;
    --cds-border-subtle-selected-02: #a8a8a8;
    --cds-border-subtle-selected-03: #a8a8a8;
    --cds-border-tile-01: #6f6f6f;
    --cds-border-tile-02: #8d8d8d;
    --cds-border-tile-03: #a8a8a8;
    --cds-chat-avatar-agent: #c6c6c6;
    --cds-chat-avatar-bot: #8d8d8d;
    --cds-chat-avatar-user: #4589ff;
    --cds-chat-bubble-agent: #262626;
    --cds-chat-bubble-border: #525252;
    --cds-chat-bubble-user: #393939;
    --cds-chat-button: #78a9ff;
    --cds-chat-button-active: rgba(141, 141, 141, 0.4);
    --cds-chat-button-hover: rgba(141, 141, 141, 0.16);
    --cds-chat-button-selected: rgba(141, 141, 141, 0.24);
    --cds-chat-button-text-hover: #a6c8ff;
    --cds-chat-button-text-selected: #c6c6c6;
    --cds-chat-header-background: #262626;
    --cds-chat-prompt-background: #161616;
    --cds-chat-prompt-border-end: rgba(38, 38, 38, 0);
    --cds-chat-prompt-border-start: #262626;
    --cds-chat-shell-background: #262626;
    --cds-field-01: #393939;
    --cds-field-02: #525252;
    --cds-field-03: #6f6f6f;
    --cds-field-hover-01: #474747;
    --cds-field-hover-02: #636363;
    --cds-field-hover-03: #5e5e5e;
    --cds-focus: #ffffff;
    --cds-focus-inset: #161616;
    --cds-focus-inverse: #0f62fe;
    --cds-highlight: #002d9c;
    --cds-icon-disabled: rgba(244, 244, 244, 0.25);
    --cds-icon-interactive: #ffffff;
    --cds-icon-inverse: #161616;
    --cds-icon-on-color: #ffffff;
    --cds-icon-on-color-disabled: rgba(255, 255, 255, 0.25);
    --cds-icon-primary: #f4f4f4;
    --cds-icon-secondary: #c6c6c6;
    --cds-interactive: #4589ff;
    --cds-layer-01: #393939;
    --cds-layer-02: #525252;
    --cds-layer-03: #6f6f6f;
    --cds-layer-accent-01: #525252;
    --cds-layer-accent-02: #6f6f6f;
    --cds-layer-accent-03: #8d8d8d;
    --cds-layer-accent-active-01: #8d8d8d;
    --cds-layer-accent-active-02: #393939;
    --cds-layer-accent-active-03: #525252;
    --cds-layer-accent-hover-01: #636363;
    --cds-layer-accent-hover-02: #5e5e5e;
    --cds-layer-accent-hover-03: #7a7a7a;
    --cds-layer-active-01: #6f6f6f;
    --cds-layer-active-02: #8d8d8d;
    --cds-layer-active-03: #393939;
    --cds-layer-background-01: #262626;
    --cds-layer-background-02: #393939;
    --cds-layer-background-03: #525252;
    --cds-layer-hover-01: #474747;
    --cds-layer-hover-02: #636363;
    --cds-layer-hover-03: #5e5e5e;
    --cds-layer-selected-01: #525252;
    --cds-layer-selected-02: #6f6f6f;
    --cds-layer-selected-03: #525252;
    --cds-layer-selected-disabled: #a8a8a8;
    --cds-layer-selected-hover-01: #636363;
    --cds-layer-selected-hover-02: #5e5e5e;
    --cds-layer-selected-hover-03: #636363;
    --cds-layer-selected-inverse: #f4f4f4;
    --cds-link-inverse: #0f62fe;
    --cds-link-inverse-active: #161616;
    --cds-link-inverse-hover: #0043ce;
    --cds-link-inverse-visited: #8a3ffc;
    --cds-link-primary: #78a9ff;
    --cds-link-primary-hover: #a6c8ff;
    --cds-link-secondary: #a6c8ff;
    --cds-link-visited: #be95ff;
    --cds-overlay: rgba(0, 0, 0, 0.65);
    --cds-shadow: rgba(0, 0, 0, 0.8);
    --cds-skeleton-background: #333333;
    --cds-skeleton-element: #525252;
    --cds-support-caution-major: #ff832b;
    --cds-support-caution-minor: #f1c21b;
    --cds-support-caution-undefined: #a56eff;
    --cds-support-error: #ff8389;
    --cds-support-error-inverse: #da1e28;
    --cds-support-info: #4589ff;
    --cds-support-info-inverse: #0043ce;
    --cds-support-success: #42be65;
    --cds-support-success-inverse: #24a148;
    --cds-support-warning: #f1c21b;
    --cds-support-warning-inverse: #f1c21b;
    --cds-text-disabled: rgba(244, 244, 244, 0.25);
    --cds-text-error: #ffb3b8;
    --cds-text-helper: #c6c6c6;
    --cds-text-inverse: #161616;
    --cds-text-on-color: #ffffff;
    --cds-text-on-color-disabled: rgba(255, 255, 255, 0.25);
    --cds-text-placeholder: rgba(244, 244, 244, 0.4);
    --cds-text-primary: #f4f4f4;
    --cds-text-secondary: #c6c6c6;
    --cds-toggle-off: #8d8d8d;
    --cds-spacing-01: 0.125rem;
    --cds-spacing-02: 0.25rem;
    --cds-spacing-03: 0.5rem;
    --cds-spacing-04: 0.75rem;
    --cds-spacing-05: 1rem;
    --cds-spacing-06: 1.5rem;
    --cds-spacing-07: 2rem;
    --cds-spacing-08: 2.5rem;
    --cds-spacing-09: 3rem;
    --cds-spacing-10: 4rem;
    --cds-spacing-11: 5rem;
    --cds-spacing-12: 6rem;
    --cds-spacing-13: 10rem;
    --cds-fluid-spacing-01: 0;
    --cds-fluid-spacing-02: 2vw;
    --cds-fluid-spacing-03: 5vw;
    --cds-fluid-spacing-04: 10vw;
    --cds-caption-01-font-size: 0.75rem;
    --cds-caption-01-font-weight: 400;
    --cds-caption-01-line-height: 1.33333;
    --cds-caption-01-letter-spacing: 0.32px;
    --cds-caption-02-font-size: 0.875rem;
    --cds-caption-02-font-weight: 400;
    --cds-caption-02-line-height: 1.28572;
    --cds-caption-02-letter-spacing: 0.32px;
    --cds-label-01-font-size: 0.75rem;
    --cds-label-01-font-weight: 400;
    --cds-label-01-line-height: 1.33333;
    --cds-label-01-letter-spacing: 0.32px;
    --cds-label-02-font-size: 0.875rem;
    --cds-label-02-font-weight: 400;
    --cds-label-02-line-height: 1.28572;
    --cds-label-02-letter-spacing: 0.16px;
    --cds-helper-text-01-font-size: 0.75rem;
    --cds-helper-text-01-line-height: 1.33333;
    --cds-helper-text-01-letter-spacing: 0.32px;
    --cds-helper-text-02-font-size: 0.875rem;
    --cds-helper-text-02-font-weight: 400;
    --cds-helper-text-02-line-height: 1.28572;
    --cds-helper-text-02-letter-spacing: 0.16px;
    --cds-body-short-01-font-size: 0.875rem;
    --cds-body-short-01-font-weight: 400;
    --cds-body-short-01-line-height: 1.28572;
    --cds-body-short-01-letter-spacing: 0.16px;
    --cds-body-short-02-font-size: 1rem;
    --cds-body-short-02-font-weight: 400;
    --cds-body-short-02-line-height: 1.375;
    --cds-body-short-02-letter-spacing: 0;
    --cds-body-long-01-font-size: 0.875rem;
    --cds-body-long-01-font-weight: 400;
    --cds-body-long-01-line-height: 1.42857;
    --cds-body-long-01-letter-spacing: 0.16px;
    --cds-body-long-02-font-size: 1rem;
    --cds-body-long-02-font-weight: 400;
    --cds-body-long-02-line-height: 1.5;
    --cds-body-long-02-letter-spacing: 0;
    --cds-code-01-font-family:
      "IBM Plex Mono", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", monospace;
    --cds-code-01-font-size: 0.75rem;
    --cds-code-01-font-weight: 400;
    --cds-code-01-line-height: 1.33333;
    --cds-code-01-letter-spacing: 0.32px;
    --cds-code-02-font-family:
      "IBM Plex Mono", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", monospace;
    --cds-code-02-font-size: 0.875rem;
    --cds-code-02-font-weight: 400;
    --cds-code-02-line-height: 1.42857;
    --cds-code-02-letter-spacing: 0.32px;
    --cds-heading-01-font-size: 0.875rem;
    --cds-heading-01-font-weight: 600;
    --cds-heading-01-line-height: 1.42857;
    --cds-heading-01-letter-spacing: 0.16px;
    --cds-heading-02-font-size: 1rem;
    --cds-heading-02-font-weight: 600;
    --cds-heading-02-line-height: 1.5;
    --cds-heading-02-letter-spacing: 0;
    --cds-productive-heading-01-font-size: 0.875rem;
    --cds-productive-heading-01-font-weight: 600;
    --cds-productive-heading-01-line-height: 1.28572;
    --cds-productive-heading-01-letter-spacing: 0.16px;
    --cds-productive-heading-02-font-size: 1rem;
    --cds-productive-heading-02-font-weight: 600;
    --cds-productive-heading-02-line-height: 1.375;
    --cds-productive-heading-02-letter-spacing: 0;
    --cds-productive-heading-03-font-size: 1.25rem;
    --cds-productive-heading-03-font-weight: 400;
    --cds-productive-heading-03-line-height: 1.4;
    --cds-productive-heading-03-letter-spacing: 0;
    --cds-productive-heading-04-font-size: 1.75rem;
    --cds-productive-heading-04-font-weight: 400;
    --cds-productive-heading-04-line-height: 1.28572;
    --cds-productive-heading-04-letter-spacing: 0;
    --cds-productive-heading-05-font-size: 2rem;
    --cds-productive-heading-05-font-weight: 400;
    --cds-productive-heading-05-line-height: 1.25;
    --cds-productive-heading-05-letter-spacing: 0;
    --cds-productive-heading-06-font-size: 2.625rem;
    --cds-productive-heading-06-font-weight: 300;
    --cds-productive-heading-06-line-height: 1.199;
    --cds-productive-heading-06-letter-spacing: 0;
    --cds-productive-heading-07-font-size: 3.375rem;
    --cds-productive-heading-07-font-weight: 300;
    --cds-productive-heading-07-line-height: 1.19;
    --cds-productive-heading-07-letter-spacing: 0;
    --cds-expressive-paragraph-01-font-size: 1.5rem;
    --cds-expressive-paragraph-01-font-weight: 300;
    --cds-expressive-paragraph-01-line-height: 1.334;
    --cds-expressive-paragraph-01-letter-spacing: 0;
    --cds-expressive-heading-01-font-size: 0.875rem;
    --cds-expressive-heading-01-font-weight: 600;
    --cds-expressive-heading-01-line-height: 1.42857;
    --cds-expressive-heading-01-letter-spacing: 0.16px;
    --cds-expressive-heading-02-font-size: 1rem;
    --cds-expressive-heading-02-font-weight: 600;
    --cds-expressive-heading-02-line-height: 1.5;
    --cds-expressive-heading-02-letter-spacing: 0;
    --cds-expressive-heading-03-font-size: 1.25rem;
    --cds-expressive-heading-03-font-weight: 400;
    --cds-expressive-heading-03-line-height: 1.4;
    --cds-expressive-heading-03-letter-spacing: 0;
    --cds-expressive-heading-04-font-size: 1.75rem;
    --cds-expressive-heading-04-font-weight: 400;
    --cds-expressive-heading-04-line-height: 1.28572;
    --cds-expressive-heading-04-letter-spacing: 0;
    --cds-expressive-heading-05-font-size: 2rem;
    --cds-expressive-heading-05-font-weight: 400;
    --cds-expressive-heading-05-line-height: 1.25;
    --cds-expressive-heading-05-letter-spacing: 0;
    --cds-expressive-heading-06-font-size: 2rem;
    --cds-expressive-heading-06-font-weight: 600;
    --cds-expressive-heading-06-line-height: 1.25;
    --cds-expressive-heading-06-letter-spacing: 0;
    --cds-quotation-01-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-quotation-01-font-size: 1.25rem;
    --cds-quotation-01-font-weight: 400;
    --cds-quotation-01-line-height: 1.3;
    --cds-quotation-01-letter-spacing: 0;
    --cds-quotation-02-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-quotation-02-font-size: 2rem;
    --cds-quotation-02-font-weight: 300;
    --cds-quotation-02-line-height: 1.25;
    --cds-quotation-02-letter-spacing: 0;
    --cds-display-01-font-size: 2.625rem;
    --cds-display-01-font-weight: 300;
    --cds-display-01-line-height: 1.19;
    --cds-display-01-letter-spacing: 0;
    --cds-display-02-font-size: 2.625rem;
    --cds-display-02-font-weight: 600;
    --cds-display-02-line-height: 1.19;
    --cds-display-02-letter-spacing: 0;
    --cds-display-03-font-size: 2.625rem;
    --cds-display-03-font-weight: 300;
    --cds-display-03-line-height: 1.19;
    --cds-display-03-letter-spacing: 0;
    --cds-display-04-font-size: 2.625rem;
    --cds-display-04-font-weight: 300;
    --cds-display-04-line-height: 1.19;
    --cds-display-04-letter-spacing: 0;
    --cds-legal-01-font-size: 0.75rem;
    --cds-legal-01-font-weight: 400;
    --cds-legal-01-line-height: 1.33333;
    --cds-legal-01-letter-spacing: 0.32px;
    --cds-legal-02-font-size: 0.875rem;
    --cds-legal-02-font-weight: 400;
    --cds-legal-02-line-height: 1.28572;
    --cds-legal-02-letter-spacing: 0.16px;
    --cds-body-compact-01-font-size: 0.875rem;
    --cds-body-compact-01-font-weight: 400;
    --cds-body-compact-01-line-height: 1.28572;
    --cds-body-compact-01-letter-spacing: 0.16px;
    --cds-body-compact-02-font-size: 1rem;
    --cds-body-compact-02-font-weight: 400;
    --cds-body-compact-02-line-height: 1.375;
    --cds-body-compact-02-letter-spacing: 0;
    --cds-heading-compact-01-font-size: 0.875rem;
    --cds-heading-compact-01-font-weight: 600;
    --cds-heading-compact-01-line-height: 1.28572;
    --cds-heading-compact-01-letter-spacing: 0.16px;
    --cds-heading-compact-02-font-size: 1rem;
    --cds-heading-compact-02-font-weight: 600;
    --cds-heading-compact-02-line-height: 1.375;
    --cds-heading-compact-02-letter-spacing: 0;
    --cds-body-01-font-size: 0.875rem;
    --cds-body-01-font-weight: 400;
    --cds-body-01-line-height: 1.42857;
    --cds-body-01-letter-spacing: 0.16px;
    --cds-body-02-font-size: 1rem;
    --cds-body-02-font-weight: 400;
    --cds-body-02-line-height: 1.5;
    --cds-body-02-letter-spacing: 0;
    --cds-heading-03-font-size: 1.25rem;
    --cds-heading-03-font-weight: 400;
    --cds-heading-03-line-height: 1.4;
    --cds-heading-03-letter-spacing: 0;
    --cds-heading-04-font-size: 1.75rem;
    --cds-heading-04-font-weight: 400;
    --cds-heading-04-line-height: 1.28572;
    --cds-heading-04-letter-spacing: 0;
    --cds-heading-05-font-size: 2rem;
    --cds-heading-05-font-weight: 400;
    --cds-heading-05-line-height: 1.25;
    --cds-heading-05-letter-spacing: 0;
    --cds-heading-06-font-size: 2.625rem;
    --cds-heading-06-font-weight: 300;
    --cds-heading-06-line-height: 1.199;
    --cds-heading-06-letter-spacing: 0;
    --cds-heading-07-font-size: 3.375rem;
    --cds-heading-07-font-weight: 300;
    --cds-heading-07-line-height: 1.19;
    --cds-heading-07-letter-spacing: 0;
    --cds-fluid-heading-03-font-size: 1.25rem;
    --cds-fluid-heading-03-font-weight: 400;
    --cds-fluid-heading-03-line-height: 1.4;
    --cds-fluid-heading-03-letter-spacing: 0;
    --cds-fluid-heading-04-font-size: 1.75rem;
    --cds-fluid-heading-04-font-weight: 400;
    --cds-fluid-heading-04-line-height: 1.28572;
    --cds-fluid-heading-04-letter-spacing: 0;
    --cds-fluid-heading-05-font-size: 2rem;
    --cds-fluid-heading-05-font-weight: 400;
    --cds-fluid-heading-05-line-height: 1.25;
    --cds-fluid-heading-05-letter-spacing: 0;
    --cds-fluid-heading-06-font-size: 2rem;
    --cds-fluid-heading-06-font-weight: 600;
    --cds-fluid-heading-06-line-height: 1.25;
    --cds-fluid-heading-06-letter-spacing: 0;
    --cds-fluid-paragraph-01-font-size: 1.5rem;
    --cds-fluid-paragraph-01-font-weight: 300;
    --cds-fluid-paragraph-01-line-height: 1.334;
    --cds-fluid-paragraph-01-letter-spacing: 0;
    --cds-fluid-quotation-01-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-fluid-quotation-01-font-size: 1.25rem;
    --cds-fluid-quotation-01-font-weight: 400;
    --cds-fluid-quotation-01-line-height: 1.3;
    --cds-fluid-quotation-01-letter-spacing: 0;
    --cds-fluid-quotation-02-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-fluid-quotation-02-font-size: 2rem;
    --cds-fluid-quotation-02-font-weight: 300;
    --cds-fluid-quotation-02-line-height: 1.25;
    --cds-fluid-quotation-02-letter-spacing: 0;
    --cds-fluid-display-01-font-size: 2.625rem;
    --cds-fluid-display-01-font-weight: 300;
    --cds-fluid-display-01-line-height: 1.19;
    --cds-fluid-display-01-letter-spacing: 0;
    --cds-fluid-display-02-font-size: 2.625rem;
    --cds-fluid-display-02-font-weight: 600;
    --cds-fluid-display-02-line-height: 1.19;
    --cds-fluid-display-02-letter-spacing: 0;
    --cds-fluid-display-03-font-size: 2.625rem;
    --cds-fluid-display-03-font-weight: 300;
    --cds-fluid-display-03-line-height: 1.19;
    --cds-fluid-display-03-letter-spacing: 0;
    --cds-fluid-display-04-font-size: 2.625rem;
    --cds-fluid-display-04-font-weight: 300;
    --cds-fluid-display-04-line-height: 1.19;
    --cds-fluid-display-04-letter-spacing: 0;
    --cds-button-separator: #161616;
    --cds-button-primary: #0f62fe;
    --cds-button-secondary: #6f6f6f;
    --cds-button-tertiary: #ffffff;
    --cds-button-danger-primary: #da1e28;
    --cds-button-danger-secondary: #ff8389;
    --cds-button-danger-active: #750e13;
    --cds-button-primary-active: #002d9c;
    --cds-button-secondary-active: #393939;
    --cds-button-tertiary-active: #c6c6c6;
    --cds-button-danger-hover: #b81921;
    --cds-button-primary-hover: #0050e6;
    --cds-button-secondary-hover: #5e5e5e;
    --cds-button-tertiary-hover: #f4f4f4;
    --cds-button-disabled: rgba(141, 141, 141, 0.3);
    --cds-notification-background-error: #393939;
    --cds-notification-background-success: #393939;
    --cds-notification-background-info: #393939;
    --cds-notification-background-warning: #393939;
    --cds-notification-action-hover: var(--cds-layer-hover);
    --cds-notification-action-tertiary-inverse: #0f62fe;
    --cds-notification-action-tertiary-inverse-active: #002d9c;
    --cds-notification-action-tertiary-inverse-hover: #0050e6;
    --cds-notification-action-tertiary-inverse-text: #ffffff;
    --cds-notification-action-tertiary-inverse-text-on-color-disabled: #8d8d8d;
    --cds-tag-background-red: #a2191f;
    --cds-tag-color-red: #ffd7d9;
    --cds-tag-hover-red: #c21e25;
    --cds-tag-background-magenta: #9f1853;
    --cds-tag-color-magenta: #ffd6e8;
    --cds-tag-hover-magenta: #bf1d63;
    --cds-tag-background-purple: #6929c4;
    --cds-tag-color-purple: #e8daff;
    --cds-tag-hover-purple: #7c3dd6;
    --cds-tag-background-blue: #0043ce;
    --cds-tag-color-blue: #d0e2ff;
    --cds-tag-hover-blue: #0053ff;
    --cds-tag-background-cyan: #00539a;
    --cds-tag-color-cyan: #bae6ff;
    --cds-tag-hover-cyan: #0066bd;
    --cds-tag-background-teal: #005d5d;
    --cds-tag-color-teal: #9ef0f0;
    --cds-tag-hover-teal: #007070;
    --cds-tag-background-green: #0e6027;
    --cds-tag-color-green: #a7f0ba;
    --cds-tag-hover-green: #11742f;
    --cds-tag-background-gray: #525252;
    --cds-tag-color-gray: #f4f4f4;
    --cds-tag-hover-gray: #636363;
    --cds-tag-border-red: #fa4d56;
    --cds-tag-border-blue: #4589ff;
    --cds-tag-border-cyan: #1192e8;
    --cds-tag-border-teal: #009d9a;
    --cds-tag-border-green: #24a148;
    --cds-tag-border-magenta: #ee5396;
    --cds-tag-border-purple: #a56eff;
    --cds-tag-border-gray: #8d8d8d;
    --cds-tag-border-cool-gray: #878d96;
    --cds-tag-border-warm-gray: #8f8b8b;
    --cds-tag-background-cool-gray: #4d5358;
    --cds-tag-color-cool-gray: #f2f4f8;
    --cds-tag-hover-cool-gray: #5d646a;
    --cds-tag-background-warm-gray: #565151;
    --cds-tag-color-warm-gray: #f7f3f2;
    --cds-tag-hover-warm-gray: #696363;
    --cds-status-red: #fa4d56;
    --cds-status-orange: #ff832b;
    --cds-status-orange-outline: #ff832b;
    --cds-status-yellow: #f1c21b;
    --cds-status-yellow-outline: #f1c21b;
    --cds-status-green: #42be65;
    --cds-status-blue: #4589ff;
    --cds-status-purple: #a56eff;
    --cds-status-gray: #8d8d8d;
    --cds-layer: var(--cds-layer-01, #f4f4f4);
    --cds-layer-active: var(--cds-layer-active-01, #c6c6c6);
    --cds-layer-background: var(--cds-layer-background-01, #ffffff);
    --cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);
    --cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);
    --cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);
    --cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);
    --cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);
    --cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);
    --cds-field: var(--cds-field-01, #f4f4f4);
    --cds-field-hover: var(--cds-field-hover-01, #e8e8e8);
    --cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);
    --cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);
    --cds-border-strong: var(--cds-border-strong-01, #8d8d8d);
    --cds-border-tile: var(--cds-border-tile-01, #c6c6c6);
  }

  @media screen and (-ms-high-contrast: active), (forced-colors: active) {
    :root[storybook-carbon-theme="g90"] {
      --cds-icon-primary: ButtonText;
      --cds-icon-secondary: ButtonText;
      --cds-icon-interactive: ButtonText;
      --cds-icon-disabled: GrayText;
      --cds-icon-on-color-disabled: GrayText;
      --cds-icon-inverse: SelectedItemText;
      --cds-icon-on-color: SelectedItemText;
      --cds-button-disabled: GrayText;
      --cds-interactive: ButtonText;
      --cds-link-primary: LinkText;
      --cds-link-primary-hover: LinkText;
      --cds-link-secondary: LinkText;
      --cds-link-inverse: SelectedItemText;
      --cds-link-inverse-hover: SelectedItemText;
      --cds-link-inverse-visited: SelectedItemText;
      --cds-link-visited: VisitedText;
      --cds-background-selected: SelectedItem;
      --cds-background-selected-hover: SelectedItem;
      --cds-background-inverse: SelectedItem;
      --cds-layer-selected-inverse: SelectedItem;
    }
  }

  :root[storybook-carbon-theme="g100"] {
    --cds-ai-aura-end: rgba(0, 0, 0, 0);
    --cds-ai-aura-hover-background: #333333;
    --cds-ai-aura-hover-end: rgba(0, 0, 0, 0);
    --cds-ai-aura-hover-start: rgba(69, 137, 255, 0.4);
    --cds-ai-aura-start: rgba(69, 137, 255, 0.1);
    --cds-ai-aura-start-sm: rgba(69, 137, 255, 0.16);
    --cds-ai-border-end: #4589ff;
    --cds-ai-border-start: rgba(166, 200, 255, 0.36);
    --cds-ai-border-strong: #78a9ff;
    --cds-ai-drop-shadow: rgba(0, 0, 0, 0.28);
    --cds-ai-inner-shadow: rgba(69, 137, 255, 0.16);
    --cds-ai-overlay: rgba(0, 0, 0, 0.5);
    --cds-ai-popover-background: #161616;
    --cds-ai-popover-caret-bottom: #4589ff;
    --cds-ai-popover-caret-bottom-background: #202d45;
    --cds-ai-popover-caret-bottom-background-actions: #1e283a;
    --cds-ai-popover-caret-center: #4870b5;
    --cds-ai-popover-shadow-outer-01: rgba(0, 0, 0, 0.12);
    --cds-ai-popover-shadow-outer-02: rgba(0, 0, 0, 0.08);
    --cds-ai-skeleton-background: rgba(120, 169, 255, 0.5);
    --cds-ai-skeleton-element-background: rgba(120, 169, 255, 0.3);
    --cds-background: #161616;
    --cds-background-active: rgba(141, 141, 141, 0.4);
    --cds-background-brand: #0f62fe;
    --cds-background-hover: rgba(141, 141, 141, 0.16);
    --cds-background-inverse: #f4f4f4;
    --cds-background-inverse-hover: #e8e8e8;
    --cds-background-selected: rgba(141, 141, 141, 0.24);
    --cds-background-selected-hover: rgba(141, 141, 141, 0.32);
    --cds-border-disabled: rgba(141, 141, 141, 0.5);
    --cds-border-interactive: #4589ff;
    --cds-border-inverse: #f4f4f4;
    --cds-border-strong-01: #6f6f6f;
    --cds-border-strong-02: #8d8d8d;
    --cds-border-strong-03: #a8a8a8;
    --cds-border-subtle-00: #393939;
    --cds-border-subtle-01: #525252;
    --cds-border-subtle-02: #6f6f6f;
    --cds-border-subtle-03: #6f6f6f;
    --cds-border-subtle-selected-01: #6f6f6f;
    --cds-border-subtle-selected-02: #8d8d8d;
    --cds-border-subtle-selected-03: #8d8d8d;
    --cds-border-tile-01: #525252;
    --cds-border-tile-02: #6f6f6f;
    --cds-border-tile-03: #8d8d8d;
    --cds-chat-avatar-agent: #c6c6c6;
    --cds-chat-avatar-bot: #8d8d8d;
    --cds-chat-avatar-user: #4589ff;
    --cds-chat-bubble-agent: #262626;
    --cds-chat-bubble-border: #525252;
    --cds-chat-bubble-user: #393939;
    --cds-chat-button: #78a9ff;
    --cds-chat-button-active: rgba(141, 141, 141, 0.4);
    --cds-chat-button-hover: rgba(141, 141, 141, 0.16);
    --cds-chat-button-selected: rgba(141, 141, 141, 0.24);
    --cds-chat-button-text-hover: #a6c8ff;
    --cds-chat-button-text-selected: #c6c6c6;
    --cds-chat-header-background: #262626;
    --cds-chat-prompt-background: #161616;
    --cds-chat-prompt-border-end: rgba(38, 38, 38, 0);
    --cds-chat-prompt-border-start: #262626;
    --cds-chat-shell-background: #262626;
    --cds-field-01: #262626;
    --cds-field-02: #393939;
    --cds-field-03: #525252;
    --cds-field-hover-01: #333333;
    --cds-field-hover-02: #474747;
    --cds-field-hover-03: #636363;
    --cds-focus: #ffffff;
    --cds-focus-inset: #161616;
    --cds-focus-inverse: #0f62fe;
    --cds-highlight: #001d6c;
    --cds-icon-disabled: rgba(244, 244, 244, 0.25);
    --cds-icon-interactive: #ffffff;
    --cds-icon-inverse: #161616;
    --cds-icon-on-color: #ffffff;
    --cds-icon-on-color-disabled: rgba(255, 255, 255, 0.25);
    --cds-icon-primary: #f4f4f4;
    --cds-icon-secondary: #c6c6c6;
    --cds-interactive: #4589ff;
    --cds-layer-01: #262626;
    --cds-layer-02: #393939;
    --cds-layer-03: #525252;
    --cds-layer-accent-01: #393939;
    --cds-layer-accent-02: #525252;
    --cds-layer-accent-03: #6f6f6f;
    --cds-layer-accent-active-01: #6f6f6f;
    --cds-layer-accent-active-02: #8d8d8d;
    --cds-layer-accent-active-03: #393939;
    --cds-layer-accent-hover-01: #474747;
    --cds-layer-accent-hover-02: #636363;
    --cds-layer-accent-hover-03: #5e5e5e;
    --cds-layer-active-01: #525252;
    --cds-layer-active-02: #6f6f6f;
    --cds-layer-active-03: #8d8d8d;
    --cds-layer-background-01: #161616;
    --cds-layer-background-02: #262626;
    --cds-layer-background-03: #393939;
    --cds-layer-hover-01: #333333;
    --cds-layer-hover-02: #474747;
    --cds-layer-hover-03: #636363;
    --cds-layer-selected-01: #393939;
    --cds-layer-selected-02: #525252;
    --cds-layer-selected-03: #6f6f6f;
    --cds-layer-selected-disabled: #a8a8a8;
    --cds-layer-selected-hover-01: #474747;
    --cds-layer-selected-hover-02: #636363;
    --cds-layer-selected-hover-03: #5e5e5e;
    --cds-layer-selected-inverse: #f4f4f4;
    --cds-link-inverse: #0f62fe;
    --cds-link-inverse-active: #161616;
    --cds-link-inverse-hover: #0043ce;
    --cds-link-inverse-visited: #8a3ffc;
    --cds-link-primary: #78a9ff;
    --cds-link-primary-hover: #a6c8ff;
    --cds-link-secondary: #a6c8ff;
    --cds-link-visited: #be95ff;
    --cds-overlay: rgba(0, 0, 0, 0.65);
    --cds-shadow: rgba(0, 0, 0, 0.8);
    --cds-skeleton-background: #292929;
    --cds-skeleton-element: #393939;
    --cds-support-caution-major: #ff832b;
    --cds-support-caution-minor: #f1c21b;
    --cds-support-caution-undefined: #a56eff;
    --cds-support-error: #fa4d56;
    --cds-support-error-inverse: #da1e28;
    --cds-support-info: #4589ff;
    --cds-support-info-inverse: #0043ce;
    --cds-support-success: #42be65;
    --cds-support-success-inverse: #24a148;
    --cds-support-warning: #f1c21b;
    --cds-support-warning-inverse: #f1c21b;
    --cds-text-disabled: rgba(244, 244, 244, 0.25);
    --cds-text-error: #ff8389;
    --cds-text-helper: #a8a8a8;
    --cds-text-inverse: #161616;
    --cds-text-on-color: #ffffff;
    --cds-text-on-color-disabled: rgba(255, 255, 255, 0.25);
    --cds-text-placeholder: rgba(244, 244, 244, 0.4);
    --cds-text-primary: #f4f4f4;
    --cds-text-secondary: #c6c6c6;
    --cds-toggle-off: #6f6f6f;
    --cds-spacing-01: 0.125rem;
    --cds-spacing-02: 0.25rem;
    --cds-spacing-03: 0.5rem;
    --cds-spacing-04: 0.75rem;
    --cds-spacing-05: 1rem;
    --cds-spacing-06: 1.5rem;
    --cds-spacing-07: 2rem;
    --cds-spacing-08: 2.5rem;
    --cds-spacing-09: 3rem;
    --cds-spacing-10: 4rem;
    --cds-spacing-11: 5rem;
    --cds-spacing-12: 6rem;
    --cds-spacing-13: 10rem;
    --cds-fluid-spacing-01: 0;
    --cds-fluid-spacing-02: 2vw;
    --cds-fluid-spacing-03: 5vw;
    --cds-fluid-spacing-04: 10vw;
    --cds-caption-01-font-size: 0.75rem;
    --cds-caption-01-font-weight: 400;
    --cds-caption-01-line-height: 1.33333;
    --cds-caption-01-letter-spacing: 0.32px;
    --cds-caption-02-font-size: 0.875rem;
    --cds-caption-02-font-weight: 400;
    --cds-caption-02-line-height: 1.28572;
    --cds-caption-02-letter-spacing: 0.32px;
    --cds-label-01-font-size: 0.75rem;
    --cds-label-01-font-weight: 400;
    --cds-label-01-line-height: 1.33333;
    --cds-label-01-letter-spacing: 0.32px;
    --cds-label-02-font-size: 0.875rem;
    --cds-label-02-font-weight: 400;
    --cds-label-02-line-height: 1.28572;
    --cds-label-02-letter-spacing: 0.16px;
    --cds-helper-text-01-font-size: 0.75rem;
    --cds-helper-text-01-line-height: 1.33333;
    --cds-helper-text-01-letter-spacing: 0.32px;
    --cds-helper-text-02-font-size: 0.875rem;
    --cds-helper-text-02-font-weight: 400;
    --cds-helper-text-02-line-height: 1.28572;
    --cds-helper-text-02-letter-spacing: 0.16px;
    --cds-body-short-01-font-size: 0.875rem;
    --cds-body-short-01-font-weight: 400;
    --cds-body-short-01-line-height: 1.28572;
    --cds-body-short-01-letter-spacing: 0.16px;
    --cds-body-short-02-font-size: 1rem;
    --cds-body-short-02-font-weight: 400;
    --cds-body-short-02-line-height: 1.375;
    --cds-body-short-02-letter-spacing: 0;
    --cds-body-long-01-font-size: 0.875rem;
    --cds-body-long-01-font-weight: 400;
    --cds-body-long-01-line-height: 1.42857;
    --cds-body-long-01-letter-spacing: 0.16px;
    --cds-body-long-02-font-size: 1rem;
    --cds-body-long-02-font-weight: 400;
    --cds-body-long-02-line-height: 1.5;
    --cds-body-long-02-letter-spacing: 0;
    --cds-code-01-font-family:
      "IBM Plex Mono", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", monospace;
    --cds-code-01-font-size: 0.75rem;
    --cds-code-01-font-weight: 400;
    --cds-code-01-line-height: 1.33333;
    --cds-code-01-letter-spacing: 0.32px;
    --cds-code-02-font-family:
      "IBM Plex Mono", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", monospace;
    --cds-code-02-font-size: 0.875rem;
    --cds-code-02-font-weight: 400;
    --cds-code-02-line-height: 1.42857;
    --cds-code-02-letter-spacing: 0.32px;
    --cds-heading-01-font-size: 0.875rem;
    --cds-heading-01-font-weight: 600;
    --cds-heading-01-line-height: 1.42857;
    --cds-heading-01-letter-spacing: 0.16px;
    --cds-heading-02-font-size: 1rem;
    --cds-heading-02-font-weight: 600;
    --cds-heading-02-line-height: 1.5;
    --cds-heading-02-letter-spacing: 0;
    --cds-productive-heading-01-font-size: 0.875rem;
    --cds-productive-heading-01-font-weight: 600;
    --cds-productive-heading-01-line-height: 1.28572;
    --cds-productive-heading-01-letter-spacing: 0.16px;
    --cds-productive-heading-02-font-size: 1rem;
    --cds-productive-heading-02-font-weight: 600;
    --cds-productive-heading-02-line-height: 1.375;
    --cds-productive-heading-02-letter-spacing: 0;
    --cds-productive-heading-03-font-size: 1.25rem;
    --cds-productive-heading-03-font-weight: 400;
    --cds-productive-heading-03-line-height: 1.4;
    --cds-productive-heading-03-letter-spacing: 0;
    --cds-productive-heading-04-font-size: 1.75rem;
    --cds-productive-heading-04-font-weight: 400;
    --cds-productive-heading-04-line-height: 1.28572;
    --cds-productive-heading-04-letter-spacing: 0;
    --cds-productive-heading-05-font-size: 2rem;
    --cds-productive-heading-05-font-weight: 400;
    --cds-productive-heading-05-line-height: 1.25;
    --cds-productive-heading-05-letter-spacing: 0;
    --cds-productive-heading-06-font-size: 2.625rem;
    --cds-productive-heading-06-font-weight: 300;
    --cds-productive-heading-06-line-height: 1.199;
    --cds-productive-heading-06-letter-spacing: 0;
    --cds-productive-heading-07-font-size: 3.375rem;
    --cds-productive-heading-07-font-weight: 300;
    --cds-productive-heading-07-line-height: 1.19;
    --cds-productive-heading-07-letter-spacing: 0;
    --cds-expressive-paragraph-01-font-size: 1.5rem;
    --cds-expressive-paragraph-01-font-weight: 300;
    --cds-expressive-paragraph-01-line-height: 1.334;
    --cds-expressive-paragraph-01-letter-spacing: 0;
    --cds-expressive-heading-01-font-size: 0.875rem;
    --cds-expressive-heading-01-font-weight: 600;
    --cds-expressive-heading-01-line-height: 1.42857;
    --cds-expressive-heading-01-letter-spacing: 0.16px;
    --cds-expressive-heading-02-font-size: 1rem;
    --cds-expressive-heading-02-font-weight: 600;
    --cds-expressive-heading-02-line-height: 1.5;
    --cds-expressive-heading-02-letter-spacing: 0;
    --cds-expressive-heading-03-font-size: 1.25rem;
    --cds-expressive-heading-03-font-weight: 400;
    --cds-expressive-heading-03-line-height: 1.4;
    --cds-expressive-heading-03-letter-spacing: 0;
    --cds-expressive-heading-04-font-size: 1.75rem;
    --cds-expressive-heading-04-font-weight: 400;
    --cds-expressive-heading-04-line-height: 1.28572;
    --cds-expressive-heading-04-letter-spacing: 0;
    --cds-expressive-heading-05-font-size: 2rem;
    --cds-expressive-heading-05-font-weight: 400;
    --cds-expressive-heading-05-line-height: 1.25;
    --cds-expressive-heading-05-letter-spacing: 0;
    --cds-expressive-heading-06-font-size: 2rem;
    --cds-expressive-heading-06-font-weight: 600;
    --cds-expressive-heading-06-line-height: 1.25;
    --cds-expressive-heading-06-letter-spacing: 0;
    --cds-quotation-01-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-quotation-01-font-size: 1.25rem;
    --cds-quotation-01-font-weight: 400;
    --cds-quotation-01-line-height: 1.3;
    --cds-quotation-01-letter-spacing: 0;
    --cds-quotation-02-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-quotation-02-font-size: 2rem;
    --cds-quotation-02-font-weight: 300;
    --cds-quotation-02-line-height: 1.25;
    --cds-quotation-02-letter-spacing: 0;
    --cds-display-01-font-size: 2.625rem;
    --cds-display-01-font-weight: 300;
    --cds-display-01-line-height: 1.19;
    --cds-display-01-letter-spacing: 0;
    --cds-display-02-font-size: 2.625rem;
    --cds-display-02-font-weight: 600;
    --cds-display-02-line-height: 1.19;
    --cds-display-02-letter-spacing: 0;
    --cds-display-03-font-size: 2.625rem;
    --cds-display-03-font-weight: 300;
    --cds-display-03-line-height: 1.19;
    --cds-display-03-letter-spacing: 0;
    --cds-display-04-font-size: 2.625rem;
    --cds-display-04-font-weight: 300;
    --cds-display-04-line-height: 1.19;
    --cds-display-04-letter-spacing: 0;
    --cds-legal-01-font-size: 0.75rem;
    --cds-legal-01-font-weight: 400;
    --cds-legal-01-line-height: 1.33333;
    --cds-legal-01-letter-spacing: 0.32px;
    --cds-legal-02-font-size: 0.875rem;
    --cds-legal-02-font-weight: 400;
    --cds-legal-02-line-height: 1.28572;
    --cds-legal-02-letter-spacing: 0.16px;
    --cds-body-compact-01-font-size: 0.875rem;
    --cds-body-compact-01-font-weight: 400;
    --cds-body-compact-01-line-height: 1.28572;
    --cds-body-compact-01-letter-spacing: 0.16px;
    --cds-body-compact-02-font-size: 1rem;
    --cds-body-compact-02-font-weight: 400;
    --cds-body-compact-02-line-height: 1.375;
    --cds-body-compact-02-letter-spacing: 0;
    --cds-heading-compact-01-font-size: 0.875rem;
    --cds-heading-compact-01-font-weight: 600;
    --cds-heading-compact-01-line-height: 1.28572;
    --cds-heading-compact-01-letter-spacing: 0.16px;
    --cds-heading-compact-02-font-size: 1rem;
    --cds-heading-compact-02-font-weight: 600;
    --cds-heading-compact-02-line-height: 1.375;
    --cds-heading-compact-02-letter-spacing: 0;
    --cds-body-01-font-size: 0.875rem;
    --cds-body-01-font-weight: 400;
    --cds-body-01-line-height: 1.42857;
    --cds-body-01-letter-spacing: 0.16px;
    --cds-body-02-font-size: 1rem;
    --cds-body-02-font-weight: 400;
    --cds-body-02-line-height: 1.5;
    --cds-body-02-letter-spacing: 0;
    --cds-heading-03-font-size: 1.25rem;
    --cds-heading-03-font-weight: 400;
    --cds-heading-03-line-height: 1.4;
    --cds-heading-03-letter-spacing: 0;
    --cds-heading-04-font-size: 1.75rem;
    --cds-heading-04-font-weight: 400;
    --cds-heading-04-line-height: 1.28572;
    --cds-heading-04-letter-spacing: 0;
    --cds-heading-05-font-size: 2rem;
    --cds-heading-05-font-weight: 400;
    --cds-heading-05-line-height: 1.25;
    --cds-heading-05-letter-spacing: 0;
    --cds-heading-06-font-size: 2.625rem;
    --cds-heading-06-font-weight: 300;
    --cds-heading-06-line-height: 1.199;
    --cds-heading-06-letter-spacing: 0;
    --cds-heading-07-font-size: 3.375rem;
    --cds-heading-07-font-weight: 300;
    --cds-heading-07-line-height: 1.19;
    --cds-heading-07-letter-spacing: 0;
    --cds-fluid-heading-03-font-size: 1.25rem;
    --cds-fluid-heading-03-font-weight: 400;
    --cds-fluid-heading-03-line-height: 1.4;
    --cds-fluid-heading-03-letter-spacing: 0;
    --cds-fluid-heading-04-font-size: 1.75rem;
    --cds-fluid-heading-04-font-weight: 400;
    --cds-fluid-heading-04-line-height: 1.28572;
    --cds-fluid-heading-04-letter-spacing: 0;
    --cds-fluid-heading-05-font-size: 2rem;
    --cds-fluid-heading-05-font-weight: 400;
    --cds-fluid-heading-05-line-height: 1.25;
    --cds-fluid-heading-05-letter-spacing: 0;
    --cds-fluid-heading-06-font-size: 2rem;
    --cds-fluid-heading-06-font-weight: 600;
    --cds-fluid-heading-06-line-height: 1.25;
    --cds-fluid-heading-06-letter-spacing: 0;
    --cds-fluid-paragraph-01-font-size: 1.5rem;
    --cds-fluid-paragraph-01-font-weight: 300;
    --cds-fluid-paragraph-01-line-height: 1.334;
    --cds-fluid-paragraph-01-letter-spacing: 0;
    --cds-fluid-quotation-01-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-fluid-quotation-01-font-size: 1.25rem;
    --cds-fluid-quotation-01-font-weight: 400;
    --cds-fluid-quotation-01-line-height: 1.3;
    --cds-fluid-quotation-01-letter-spacing: 0;
    --cds-fluid-quotation-02-font-family:
      "IBM Plex Serif", system-ui, -apple-system, BlinkMacSystemFont,
      ".SFNSText-Regular", serif;
    --cds-fluid-quotation-02-font-size: 2rem;
    --cds-fluid-quotation-02-font-weight: 300;
    --cds-fluid-quotation-02-line-height: 1.25;
    --cds-fluid-quotation-02-letter-spacing: 0;
    --cds-fluid-display-01-font-size: 2.625rem;
    --cds-fluid-display-01-font-weight: 300;
    --cds-fluid-display-01-line-height: 1.19;
    --cds-fluid-display-01-letter-spacing: 0;
    --cds-fluid-display-02-font-size: 2.625rem;
    --cds-fluid-display-02-font-weight: 600;
    --cds-fluid-display-02-line-height: 1.19;
    --cds-fluid-display-02-letter-spacing: 0;
    --cds-fluid-display-03-font-size: 2.625rem;
    --cds-fluid-display-03-font-weight: 300;
    --cds-fluid-display-03-line-height: 1.19;
    --cds-fluid-display-03-letter-spacing: 0;
    --cds-fluid-display-04-font-size: 2.625rem;
    --cds-fluid-display-04-font-weight: 300;
    --cds-fluid-display-04-line-height: 1.19;
    --cds-fluid-display-04-letter-spacing: 0;
    --cds-button-separator: #161616;
    --cds-button-primary: #0f62fe;
    --cds-button-secondary: #6f6f6f;
    --cds-button-tertiary: #ffffff;
    --cds-button-danger-primary: #da1e28;
    --cds-button-danger-secondary: #fa4d56;
    --cds-button-danger-active: #750e13;
    --cds-button-primary-active: #002d9c;
    --cds-button-secondary-active: #393939;
    --cds-button-tertiary-active: #c6c6c6;
    --cds-button-danger-hover: #b81921;
    --cds-button-primary-hover: #0050e6;
    --cds-button-secondary-hover: #5e5e5e;
    --cds-button-tertiary-hover: #f4f4f4;
    --cds-button-disabled: rgba(141, 141, 141, 0.3);
    --cds-notification-background-error: #262626;
    --cds-notification-background-success: #262626;
    --cds-notification-background-info: #262626;
    --cds-notification-background-warning: #262626;
    --cds-notification-action-hover: var(--cds-layer-hover);
    --cds-notification-action-tertiary-inverse: #0f62fe;
    --cds-notification-action-tertiary-inverse-active: #002d9c;
    --cds-notification-action-tertiary-inverse-hover: #0050e6;
    --cds-notification-action-tertiary-inverse-text: #ffffff;
    --cds-notification-action-tertiary-inverse-text-on-color-disabled: #8d8d8d;
    --cds-tag-background-red: #a2191f;
    --cds-tag-color-red: #ffd7d9;
    --cds-tag-hover-red: #c21e25;
    --cds-tag-background-magenta: #9f1853;
    --cds-tag-color-magenta: #ffd6e8;
    --cds-tag-hover-magenta: #bf1d63;
    --cds-tag-background-purple: #6929c4;
    --cds-tag-color-purple: #e8daff;
    --cds-tag-hover-purple: #7c3dd6;
    --cds-tag-background-blue: #0043ce;
    --cds-tag-color-blue: #d0e2ff;
    --cds-tag-hover-blue: #0053ff;
    --cds-tag-background-cyan: #00539a;
    --cds-tag-color-cyan: #bae6ff;
    --cds-tag-hover-cyan: #0066bd;
    --cds-tag-background-teal: #005d5d;
    --cds-tag-color-teal: #9ef0f0;
    --cds-tag-hover-teal: #007070;
    --cds-tag-background-green: #0e6027;
    --cds-tag-color-green: #a7f0ba;
    --cds-tag-hover-green: #11742f;
    --cds-tag-background-gray: #525252;
    --cds-tag-color-gray: #f4f4f4;
    --cds-tag-hover-gray: #636363;
    --cds-tag-border-red: #fa4d56;
    --cds-tag-border-blue: #4589ff;
    --cds-tag-border-cyan: #1192e8;
    --cds-tag-border-teal: #009d9a;
    --cds-tag-border-green: #24a148;
    --cds-tag-border-magenta: #ee5396;
    --cds-tag-border-purple: #a56eff;
    --cds-tag-border-gray: #8d8d8d;
    --cds-tag-border-cool-gray: #878d96;
    --cds-tag-border-warm-gray: #8f8b8b;
    --cds-tag-background-cool-gray: #4d5358;
    --cds-tag-color-cool-gray: #f2f4f8;
    --cds-tag-hover-cool-gray: #5d646a;
    --cds-tag-background-warm-gray: #565151;
    --cds-tag-color-warm-gray: #f7f3f2;
    --cds-tag-hover-warm-gray: #696363;
    --cds-status-red: #fa4d56;
    --cds-status-orange: #ff832b;
    --cds-status-orange-outline: #ff832b;
    --cds-status-yellow: #f1c21b;
    --cds-status-yellow-outline: #f1c21b;
    --cds-status-green: #42be65;
    --cds-status-blue: #4589ff;
    --cds-status-purple: #a56eff;
    --cds-status-gray: #8d8d8d;
    --cds-layer: var(--cds-layer-01, #f4f4f4);
    --cds-layer-active: var(--cds-layer-active-01, #c6c6c6);
    --cds-layer-background: var(--cds-layer-background-01, #ffffff);
    --cds-layer-hover: var(--cds-layer-hover-01, #e8e8e8);
    --cds-layer-selected: var(--cds-layer-selected-01, #e0e0e0);
    --cds-layer-selected-hover: var(--cds-layer-selected-hover-01, #d1d1d1);
    --cds-layer-accent: var(--cds-layer-accent-01, #e0e0e0);
    --cds-layer-accent-hover: var(--cds-layer-accent-hover-01, #d1d1d1);
    --cds-layer-accent-active: var(--cds-layer-accent-active-01, #a8a8a8);
    --cds-field: var(--cds-field-01, #f4f4f4);
    --cds-field-hover: var(--cds-field-hover-01, #e8e8e8);
    --cds-border-subtle: var(--cds-border-subtle-00, #e0e0e0);
    --cds-border-subtle-selected: var(--cds-border-subtle-selected-01, #c6c6c6);
    --cds-border-strong: var(--cds-border-strong-01, #8d8d8d);
    --cds-border-tile: var(--cds-border-tile-01, #c6c6c6);
  }

  @media screen and (-ms-high-contrast: active), (forced-colors: active) {
    :root[storybook-carbon-theme="g100"] {
      --cds-icon-primary: ButtonText;
      --cds-icon-secondary: ButtonText;
      --cds-icon-interactive: ButtonText;
      --cds-icon-disabled: GrayText;
      --cds-icon-on-color-disabled: GrayText;
      --cds-icon-inverse: SelectedItemText;
      --cds-icon-on-color: SelectedItemText;
      --cds-button-disabled: GrayText;
      --cds-interactive: ButtonText;
      --cds-link-primary: LinkText;
      --cds-link-primary-hover: LinkText;
      --cds-link-secondary: LinkText;
      --cds-link-inverse: SelectedItemText;
      --cds-link-inverse-hover: SelectedItemText;
      --cds-link-inverse-visited: SelectedItemText;
      --cds-link-visited: VisitedText;
      --cds-background-selected: SelectedItem;
      --cds-background-selected-hover: SelectedItem;
      --cds-background-inverse: SelectedItem;
      --cds-layer-selected-inverse: SelectedItem;
    }
  }

  body {
    background-color: var(--cds-background, #ffffff);
    color: var(--cds-text-primary, #161616);
  }

  #main-content {
    position: relative;
    padding: 42px;
  }

  .cds--content.cds-ce-demo-devenv--ui-shell-content {
    padding: 2rem;
    margin: 0;
    block-size: 100vh;
    inline-size: 100%;
  }

  .docs-story div div {
    transform: none;
  }
`,F=()=>d.createElement("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},d.createElement("circle",{cx:"10",cy:"12",r:"2"}),d.createElement("circle",{cx:"16",cy:"9",r:"2"}),d.createElement("circle",{cx:"22",cy:"12",r:"2"}),d.createElement("circle",{cx:"23",cy:"18",r:"2"}),d.createElement("circle",{cx:"19",cy:"23",r:"2"}),d.createElement("path",{d:"M16.54,2A14,14,0,0,0,2,16a4.82,4.82,0,0,0,6.09,4.65l1.12-.31A3,3,0,0,1,13,23.24V27a3,3,0,0,0,3,3A14,14,0,0,0,30,15.46,14.05,14.05,0,0,0,16.54,2Zm8.11,22.31A11.93,11.93,0,0,1,16,28a1,1,0,0,1-1-1V23.24a5,5,0,0,0-5-5,5.07,5.07,0,0,0-1.33.18l-1.12.31A2.82,2.82,0,0,1,4,16,12,12,0,0,1,16.47,4,12.18,12.18,0,0,1,28,15.53,11.89,11.89,0,0,1,24.65,24.32Z"})),O=e=>{e.forEach(({id:c,css:l})=>{if(document.getElementById(c))return;let s=document.createElement("style");s.id=c,s.textContent=l,document.head.appendChild(s)})},P=()=>{let e=localStorage.getItem("storybook-carbon-theme");return e||(e=window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"g90":"white",localStorage.setItem("storybook-carbon-theme",e)),e},k=e=>{let c=["white","g10"].includes(e);O([{id:"carbon-theme-variables",css:E},{id:"carbon-toolbar-style",css:q},{id:"carbon-sidenav-style",css:M},{id:"carbon-panel-style",css:R},{id:"carbon-common-style",css:_}]),document.documentElement.setAttribute("storybook-carbon-theme",e),localStorage.setItem("storybook-carbon-theme",e),window.selectedTheme=e,o.setConfig({theme:c?g.light:g.dark})},N=P();k(N);var C=p(function({api:c}){let[l,s]=u(),w=l[y],z=f(r=>{s({[y]:r}),k(r)},[s]);return d.createElement(v,{placement:"top",trigger:"click",closeOnOutsideClick:!0,tooltip:({onHide:r})=>d.createElement(b,{links:T.map(n=>({id:n.value,title:n.title,active:w===n.value,onClick:()=>{z(n.value),r()}}))})},d.createElement(m,{title:"Theme"},d.createElement(F,null)))});o.register(x,e=>{o.add(S,{type:h.TOOL,title:"My addon",render:()=>d.createElement(C,{api:e})})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
