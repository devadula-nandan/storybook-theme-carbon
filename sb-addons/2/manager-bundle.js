try{
(()=>{var c=__REACT__,{Children:S,Component:O,Fragment:z,Profiler:E,PureComponent:w,StrictMode:M,Suspense:j,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:D,act:K,cloneElement:q,createContext:P,createElement:_,createFactory:$,createRef:cc,forwardRef:dc,isValidElement:tc,lazy:ec,memo:n,startTransition:bc,unstable_act:lc,useCallback:s,useContext:ic,useDebugValue:gc,useDeferredValue:ac,useEffect:Gc,useId:Bc,useImperativeHandle:nc,useInsertionEffect:sc,useLayoutEffect:oc,useMemo:Ic,useReducer:Zc,useRef:Fc,useState:Xc,useSyncExternalStore:rc,useTransition:yc,version:hc}=__REACT__;var Uc=__STORYBOOK_API__,{ActiveTabs:Wc,Consumer:uc,ManagerContext:Rc,Provider:Cc,RequestResponseError:Yc,addons:g,combineParameters:pc,controlOrMetaKey:xc,controlOrMetaSymbol:Jc,eventMatchesShortcut:Ac,eventToShortcut:Lc,experimental_MockUniversalStore:Nc,experimental_UniversalStore:kc,experimental_getStatusStore:Hc,experimental_getTestProviderStore:fc,experimental_requestResponse:Tc,experimental_useStatusStore:Sc,experimental_useTestProviderStore:Oc,experimental_useUniversalStore:zc,internal_fullStatusStore:Ec,internal_fullTestProviderStore:wc,internal_universalStatusStore:Mc,internal_universalTestProviderStore:jc,isMacLike:Dc,isShortcutTaken:Kc,keyToSymbol:qc,merge:Pc,mockChannel:_c,optionOrAltSymbol:$c,shortcutMatchesShortcut:cd,shortcutToHumanString:dd,types:o,useAddonState:td,useArgTypes:ed,useArgs:bd,useChannel:ld,useGlobalTypes:id,useGlobals:I,useParameter:gd,useSharedState:ad,useStoryPrepared:Gd,useStorybookApi:Bd,useStorybookState:nd}=__STORYBOOK_API__;var Fd=__STORYBOOK_THEMING__,{CacheProvider:Xd,ClassNames:rd,Global:yd,ThemeProvider:hd,background:Qd,color:Vd,convert:md,create:vd,createCache:Ud,createGlobal:Wd,createReset:ud,css:Rd,darken:Cd,ensure:Yd,ignoreSsrWarning:pd,isPropValid:xd,jsx:Jd,keyframes:Ad,lighten:Ld,styled:Nd,themes:G,typography:kd,useTheme:Hd,withTheme:fd}=__STORYBOOK_THEMING__;var Ed=__STORYBOOK_COMPONENTS__,{A:wd,ActionBar:Md,AddonPanel:jd,Badge:Dd,Bar:Kd,Blockquote:qd,Button:Pd,ClipboardCode:_d,Code:$d,DL:ct,Div:dt,DocumentWrapper:tt,EmptyTabContent:et,ErrorFormatter:bt,FlexBar:lt,Form:it,H1:gt,H2:at,H3:Gt,H4:Bt,H5:nt,H6:st,HR:ot,IconButton:Z,Img:It,LI:Zt,Link:Ft,ListItem:Xt,Loader:rt,Modal:yt,OL:ht,P:Qt,Placeholder:Vt,Pre:mt,ProgressSpinner:vt,ResetWrapper:Ut,ScrollArea:Wt,Separator:ut,Spaced:Rt,Span:Ct,StorybookIcon:Yt,StorybookLogo:pt,SyntaxHighlighter:xt,TT:Jt,TabBar:At,TabButton:Lt,TabWrapper:Nt,Table:kt,Tabs:Ht,TabsState:ft,TooltipLinkList:F,TooltipMessage:Tt,TooltipNote:St,UL:Ot,WithTooltip:X,WithTooltipPure:zt,Zoom:Et,codeCommon:wt,components:Mt,createCopyToClipboardFunction:jt,getStoryHref:Dt,interleaveSeparators:Kt,nameSpaceClassNames:qt,resetComponents:Pt,withReset:_t}=__STORYBOOK_COMPONENTS__;var y="Carbon theme",v=`${y}/tool`,r="carbonTheme",U=[{value:"white",title:"White"},{value:"g10",title:"Gray 10"},{value:"g90",title:"Gray 90"},{value:"g100",title:"Gray 100"}],W=`/**
 * CARBON THEME BASE
 * Applies Carbon Design System themes to the Storybook interface
 *
 * Available themes:
 * - white: Light theme with white background (default)
 * - g10: Light gray theme (Gray 10)
 * - g90: Dark gray theme (Gray 90)
 * - g100: Dark theme with black background (Gray 100)
 *
 * Themes are applied via the [storybook-carbon-theme] attribute on :root
 * This attribute is controlled by the theme switcher addon
 */
/**
 * Default Theme
 * Applied when no theme attribute is present
 */
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
  --cds-code-01-font-family: 'IBM Plex Mono', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', monospace;
  --cds-code-01-font-size: 0.75rem;
  --cds-code-01-font-weight: 400;
  --cds-code-01-line-height: 1.33333;
  --cds-code-01-letter-spacing: 0.32px;
  --cds-code-02-font-family: 'IBM Plex Mono', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', monospace;
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
  --cds-quotation-01-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
  --cds-quotation-01-font-size: 1.25rem;
  --cds-quotation-01-font-weight: 400;
  --cds-quotation-01-line-height: 1.3;
  --cds-quotation-01-letter-spacing: 0;
  --cds-quotation-02-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
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
  --cds-fluid-quotation-01-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
  --cds-fluid-quotation-01-font-size: 1.25rem;
  --cds-fluid-quotation-01-font-weight: 400;
  --cds-fluid-quotation-01-line-height: 1.3;
  --cds-fluid-quotation-01-letter-spacing: 0;
  --cds-fluid-quotation-02-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
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
:root {
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

/**
 * White Theme (Light)
 * IBM Design Language: White background
 */
:root[storybook-carbon-theme=white] {
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
  --cds-code-01-font-family: 'IBM Plex Mono', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', monospace;
  --cds-code-01-font-size: 0.75rem;
  --cds-code-01-font-weight: 400;
  --cds-code-01-line-height: 1.33333;
  --cds-code-01-letter-spacing: 0.32px;
  --cds-code-02-font-family: 'IBM Plex Mono', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', monospace;
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
  --cds-quotation-01-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
  --cds-quotation-01-font-size: 1.25rem;
  --cds-quotation-01-font-weight: 400;
  --cds-quotation-01-line-height: 1.3;
  --cds-quotation-01-letter-spacing: 0;
  --cds-quotation-02-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
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
  --cds-fluid-quotation-01-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
  --cds-fluid-quotation-01-font-size: 1.25rem;
  --cds-fluid-quotation-01-font-weight: 400;
  --cds-fluid-quotation-01-line-height: 1.3;
  --cds-fluid-quotation-01-letter-spacing: 0;
  --cds-fluid-quotation-02-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
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
}
@media screen and (-ms-high-contrast: active), (forced-colors: active) {
  :root[storybook-carbon-theme=white] {
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
:root[storybook-carbon-theme=white] {
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

/**
 * Gray 10 Theme (Light)
 * IBM Design Language: Light gray background
 */
:root[storybook-carbon-theme=g10] {
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
  --cds-code-01-font-family: 'IBM Plex Mono', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', monospace;
  --cds-code-01-font-size: 0.75rem;
  --cds-code-01-font-weight: 400;
  --cds-code-01-line-height: 1.33333;
  --cds-code-01-letter-spacing: 0.32px;
  --cds-code-02-font-family: 'IBM Plex Mono', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', monospace;
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
  --cds-quotation-01-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
  --cds-quotation-01-font-size: 1.25rem;
  --cds-quotation-01-font-weight: 400;
  --cds-quotation-01-line-height: 1.3;
  --cds-quotation-01-letter-spacing: 0;
  --cds-quotation-02-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
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
  --cds-fluid-quotation-01-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
  --cds-fluid-quotation-01-font-size: 1.25rem;
  --cds-fluid-quotation-01-font-weight: 400;
  --cds-fluid-quotation-01-line-height: 1.3;
  --cds-fluid-quotation-01-letter-spacing: 0;
  --cds-fluid-quotation-02-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
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
}
@media screen and (-ms-high-contrast: active), (forced-colors: active) {
  :root[storybook-carbon-theme=g10] {
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
:root[storybook-carbon-theme=g10] {
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

/**
 * Gray 90 Theme (Dark)
 * IBM Design Language: Dark gray background
 */
:root[storybook-carbon-theme=g90] {
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
  --cds-code-01-font-family: 'IBM Plex Mono', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', monospace;
  --cds-code-01-font-size: 0.75rem;
  --cds-code-01-font-weight: 400;
  --cds-code-01-line-height: 1.33333;
  --cds-code-01-letter-spacing: 0.32px;
  --cds-code-02-font-family: 'IBM Plex Mono', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', monospace;
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
  --cds-quotation-01-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
  --cds-quotation-01-font-size: 1.25rem;
  --cds-quotation-01-font-weight: 400;
  --cds-quotation-01-line-height: 1.3;
  --cds-quotation-01-letter-spacing: 0;
  --cds-quotation-02-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
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
  --cds-fluid-quotation-01-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
  --cds-fluid-quotation-01-font-size: 1.25rem;
  --cds-fluid-quotation-01-font-weight: 400;
  --cds-fluid-quotation-01-line-height: 1.3;
  --cds-fluid-quotation-01-letter-spacing: 0;
  --cds-fluid-quotation-02-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
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
}
@media screen and (-ms-high-contrast: active), (forced-colors: active) {
  :root[storybook-carbon-theme=g90] {
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
:root[storybook-carbon-theme=g90] {
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

/**
 * Gray 100 Theme (Dark)
 * IBM Design Language: Black background
 */
:root[storybook-carbon-theme=g100] {
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
  --cds-code-01-font-family: 'IBM Plex Mono', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', monospace;
  --cds-code-01-font-size: 0.75rem;
  --cds-code-01-font-weight: 400;
  --cds-code-01-line-height: 1.33333;
  --cds-code-01-letter-spacing: 0.32px;
  --cds-code-02-font-family: 'IBM Plex Mono', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', monospace;
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
  --cds-quotation-01-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
  --cds-quotation-01-font-size: 1.25rem;
  --cds-quotation-01-font-weight: 400;
  --cds-quotation-01-line-height: 1.3;
  --cds-quotation-01-letter-spacing: 0;
  --cds-quotation-02-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
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
  --cds-fluid-quotation-01-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
  --cds-fluid-quotation-01-font-size: 1.25rem;
  --cds-fluid-quotation-01-font-weight: 400;
  --cds-fluid-quotation-01-line-height: 1.3;
  --cds-fluid-quotation-01-letter-spacing: 0;
  --cds-fluid-quotation-02-font-family: 'IBM Plex Serif', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', serif;
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
}
@media screen and (-ms-high-contrast: active), (forced-colors: active) {
  :root[storybook-carbon-theme=g100] {
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
:root[storybook-carbon-theme=g100] {
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbInRoZW1lLWJhc2Uuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3RoZW1lcy9zY3NzL190aGVtZS5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXJib24vc3R5bGVzL3Njc3MvX3RoZW1lLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi9zdHlsZXMvc2Nzcy91dGlsaXRpZXMvX2N1c3RvbS1wcm9wZXJ0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtFQ2dHSTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7O0FDOUZGO0VGRkY7SUdpQ0U7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTs7O0FIakNGO0VHaUNFO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTs7O0FIN0JGO0FBQUE7QUFBQTtBQUFBO0FBSUE7RUN3Rkk7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBOztBQzlGRjtFRk1GO0lHeUJFO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7OztBSHpCRjtFR3lCRTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7OztBSHJCRjtBQUFBO0FBQUE7QUFBQTtBQUlBO0VDZ0ZJO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTs7QUM5RkY7RUZjRjtJR2lCRTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBOzs7QUhqQkY7RUdpQkU7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBOzs7QUhiRjtBQUFBO0FBQUE7QUFBQTtBQUlBO0VDd0VJO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTs7QUM5RkY7RUZzQkY7SUdTRTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBOzs7QUhURjtFR1NFO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTs7O0FITEY7QUFBQTtBQUFBO0FBQUE7QUFJQTtFQ2dFSTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7O0FDOUZGO0VGOEJGO0lHQ0U7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTs7O0FIREY7RUdDRTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdAY2FyYm9uL3N0eWxlcy9zY3NzL3RoZW1lJyBhcyAqO1xuQHVzZSAnQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZXMnO1xuXG4vKipcbiAqIENBUkJPTiBUSEVNRSBCQVNFXG4gKiBBcHBsaWVzIENhcmJvbiBEZXNpZ24gU3lzdGVtIHRoZW1lcyB0byB0aGUgU3Rvcnlib29rIGludGVyZmFjZVxuICpcbiAqIEF2YWlsYWJsZSB0aGVtZXM6XG4gKiAtIHdoaXRlOiBMaWdodCB0aGVtZSB3aXRoIHdoaXRlIGJhY2tncm91bmQgKGRlZmF1bHQpXG4gKiAtIGcxMDogTGlnaHQgZ3JheSB0aGVtZSAoR3JheSAxMClcbiAqIC0gZzkwOiBEYXJrIGdyYXkgdGhlbWUgKEdyYXkgOTApXG4gKiAtIGcxMDA6IERhcmsgdGhlbWUgd2l0aCBibGFjayBiYWNrZ3JvdW5kIChHcmF5IDEwMClcbiAqXG4gKiBUaGVtZXMgYXJlIGFwcGxpZWQgdmlhIHRoZSBbc3Rvcnlib29rLWNhcmJvbi10aGVtZV0gYXR0cmlidXRlIG9uIDpyb290XG4gKiBUaGlzIGF0dHJpYnV0ZSBpcyBjb250cm9sbGVkIGJ5IHRoZSB0aGVtZSBzd2l0Y2hlciBhZGRvblxuICovXG5cbi8qKlxuICogRGVmYXVsdCBUaGVtZVxuICogQXBwbGllZCB3aGVuIG5vIHRoZW1lIGF0dHJpYnV0ZSBpcyBwcmVzZW50XG4gKi9cbjpyb290IHtcbiAgQGluY2x1ZGUgdGhlbWUodGhlbWVzLiR3aGl0ZSk7XG59XG5cbi8qKlxuICogV2hpdGUgVGhlbWUgKExpZ2h0KVxuICogSUJNIERlc2lnbiBMYW5ndWFnZTogV2hpdGUgYmFja2dyb3VuZFxuICovXG46cm9vdFtzdG9yeWJvb2stY2FyYm9uLXRoZW1lPSd3aGl0ZSddIHtcbiAgQGluY2x1ZGUgdGhlbWUodGhlbWVzLiR3aGl0ZSk7XG59XG5cbi8qKlxuICogR3JheSAxMCBUaGVtZSAoTGlnaHQpXG4gKiBJQk0gRGVzaWduIExhbmd1YWdlOiBMaWdodCBncmF5IGJhY2tncm91bmRcbiAqL1xuOnJvb3Rbc3Rvcnlib29rLWNhcmJvbi10aGVtZT0nZzEwJ10ge1xuICBAaW5jbHVkZSB0aGVtZSh0aGVtZXMuJGcxMCk7XG59XG5cbi8qKlxuICogR3JheSA5MCBUaGVtZSAoRGFyaylcbiAqIElCTSBEZXNpZ24gTGFuZ3VhZ2U6IERhcmsgZ3JheSBiYWNrZ3JvdW5kXG4gKi9cbjpyb290W3N0b3J5Ym9vay1jYXJib24tdGhlbWU9J2c5MCddIHtcbiAgQGluY2x1ZGUgdGhlbWUodGhlbWVzLiRnOTApO1xufVxuXG4vKipcbiAqIEdyYXkgMTAwIFRoZW1lIChEYXJrKVxuICogSUJNIERlc2lnbiBMYW5ndWFnZTogQmxhY2sgYmFja2dyb3VuZFxuICovXG46cm9vdFtzdG9yeWJvb2stY2FyYm9uLXRoZW1lPSdnMTAwJ10ge1xuICBAaW5jbHVkZSB0aGVtZSh0aGVtZXMuJGcxMDApO1xufVxuIiwiLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICdjb25maWcnO1xuQHVzZSAndGhlbWVzJztcblxuLy8vIFNwZWNpZnkgdGhlIGZhbGxiYWNrIHRoZW1lLCB1c2VkIGFzIGEgY2F0Y2gtYWxsIGZvciB0b2tlbnMgdGhhdCB5b3UgbWF5IG5vdFxuLy8vIGhhdmUgZGVmaW5lZCBpbiB5b3VyIGN1c3RvbSB0aGVtZVxuJGZhbGxiYWNrOiB0aGVtZXMuJHdoaXRlICFkZWZhdWx0O1xuXG4vLy8gU3BlY2lmeSB0aGUgY3VycmVudCB0aGVtZS4gVGhpcyBjYW4gb3ZlcnJpZGUgZXhpc3RpbmcgdG9rZW5zLCBvciBhZGQgbmV3XG4vLy8gdG9rZW5zLiBJZiB5b3UgYXJlIGFkZGluZyBuZXcgdG9rZW5zLCBpdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IHNldCB0aGVcbi8vLyBmYWxsYmFjayBmb3IgeW91ciBjdXJyZW50IHRoZW1lXG4kdGhlbWU6ICgpICFkZWZhdWx0O1xuJHRoZW1lOiBtYXAubWVyZ2UoJGZhbGxiYWNrLCAkdGhlbWUpO1xuXG4vLy8gTG9jYWwgY29tcG9uZW50IHRva2VucyB0aGF0IGNhbiBiZSB1cGRhdGVkIHdpdGggYEBtaXhpbiBhZGQtY29tcG9uZW50LXRva2Vuc2AuXG4kLWNvbXBvbmVudC10b2tlbnM6ICgpO1xuXG4vLy8gSW5jbHVkZSB0aGUgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzIGZvciB0aGUgYWN0aXZlIHRoZW1lIG9yIGEgZ2l2ZW4gdGhlbWUgb25cbi8vLyBhIHNlbGVjdG9yXG5AbWl4aW4gdGhlbWUoJGFjdGl2ZS10aGVtZTogJHRoZW1lLCAkY29tcG9uZW50LXRva2Vucy4uLikge1xuICBAZWFjaCAkdG9rZW4sICR2YWx1ZSBpbiAkYWN0aXZlLXRoZW1lIHtcbiAgICBAaW5jbHVkZSAtY3VzdG9tLXByb3BlcnR5KCR0b2tlbiwgJHZhbHVlKTtcbiAgfVxuXG4gIEBlYWNoICRncm91cCBpbiAkY29tcG9uZW50LXRva2VucyB7XG4gICAgQGVhY2ggJHRva2VuLCAkdmFsdWUgaW4gJGdyb3VwIHtcbiAgICAgIEBpbmNsdWRlIC1jdXN0b20tcHJvcGVydHkoJHRva2VuLCAkdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIEBlYWNoICR0b2tlbiwgJHZhbHVlIGluICQtY29tcG9uZW50LXRva2VucyB7XG4gICAgQGluY2x1ZGUgLWN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICR0b2tlbixcbiAgICAgIC1yZXNvbHZlLXRva2VuLXZhbHVlKCRhY3RpdmUtdGhlbWUsICR2YWx1ZSlcbiAgICApO1xuICB9XG59XG5cbi8vLyBSZXRyaWV2ZSB0aGUgdmFsdWUgZm9yIHRoZSBnaXZlbiAkdG9rZW4gZnJvbSB0aGUgY3VycmVudCAkdGhlbWVcbi8vLyBAcGFyYW0ge1N0cmluZ30gJHRva2VuXG5AZnVuY3Rpb24gZ2V0KCR0b2tlbikge1xuICBAaWYgbWFwLmhhcy1rZXkoJHRoZW1lLCAkdG9rZW4pIHtcbiAgICBAcmV0dXJuIG1hcC5nZXQoJHRoZW1lLCAkdG9rZW4pO1xuICB9XG4gIEBlcnJvciBcIlVuYWJsZSB0byBmaW5kIHRva2VuOiAjeyR0b2tlbn0gaW4gY3VycmVudCAkdGhlbWVcIjtcbn1cblxuLy8vIENvbXBhcmUgdHdvIHRoZW1lcyB0byBzZWUgaWYgdGhlIHNlY29uZCB0aGVtZSBpcyBhIHN1cGVyc2V0IG9mIHRoZSBmaXJzdFxuLy8vIHRoZW1lLiBJbiBvdGhlciB3b3JkcywgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiB0cnVlIGlmIGV2ZXJ5IHRva2VuIGluIHRoZVxuLy8vIGZpcnN0IHRoZW1lIGlzIGF2YWlsYWJsZSBpbiB0aGUgc2Vjb25kIHRoZW1lIGFuZCBoYXMgdGhlIHNhbWUgdmFsdWUuIFRoZVxuLy8vIHNlY29uZCB0aGVtZSBpcyBhbGxvd2VkIHRvIGhhdmUgYWRkaXRpb25hbCB2YWx1ZXMgYW5kIGl0IHdpbGwgc3RpbGwgbWF0Y2guXG4vLy8gQHBhcmFtIHtNYXB9ICRhXG4vLy8gQHBhcmFtIHtNYXB9ICRiXG4vLy8gQHJldHVybnMge0Jvb2xlYW59XG5AZnVuY3Rpb24gbWF0Y2hlcygkYSwgJGIpIHtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICRhIHtcbiAgICBAaWYgbWFwLmhhcy1rZXkoJGIsICRrZXkpID09IGZhbHNlIHtcbiAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgQGlmIG1hcC5nZXQoJGIsICRrZXkpICE9ICR2YWx1ZSB7XG4gICAgICBAcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gdHJ1ZTtcbn1cblxuLy8vIEFkZCBjb21wb25lbnQgdG9rZW5zIHdoaWNoIHdpbGwgYmUgaW5jbHVkZWQgYW55IHRpbWUgdGhlIHRoZW1lIG1peGluIGlzXG4vLy8gY2FsbGVkXG5AbWl4aW4gYWRkLWNvbXBvbmVudC10b2tlbnMoJHRva2VuLW1hcCkge1xuICAkLWNvbXBvbmVudC10b2tlbnM6IG1hcC5tZXJnZSgkLWNvbXBvbmVudC10b2tlbnMsICR0b2tlbi1tYXApICFnbG9iYWw7XG59XG5cbi8vLyBEZXRlcm1pbmUgdGhlIHZhbHVlIGZyb20gYSBjb21wb25lbnQgdG9rZW4gdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiB0aGVtZS5cbi8vLyBUaGlzIGlzIGhlbHBmdWwgd2hlbiBhIGNvbXBvbmVudCB0b2tlbiBtYXkgY2hhbmdlIGRlcGVuZGluZyBvbiB3aGF0IHRoZW1lIHRoZVxuLy8vIGNvbXBvbmVudCBpcyBiZWluZyByZW5kZXJlZCBpbi5cbkBmdW5jdGlvbiAtcmVzb2x2ZS10b2tlbi12YWx1ZSgkYWN0aXZlLXRoZW1lOiAkdGhlbWUsICR0b2tlbi12YWx1ZSkge1xuICBAaWYgbWV0YS50eXBlLW9mKCR0b2tlbi12YWx1ZSkgPT0gbWFwIGFuZCBtYXAuaGFzLWtleSgkdG9rZW4tdmFsdWUsIHZhbHVlcykge1xuICAgICRmYWxsYmFjazogbWFwLmdldCgkdG9rZW4tdmFsdWUsIGZhbGxiYWNrKTtcbiAgICAkdGhlbWUtdmFsdWVzOiBtYXAuZ2V0KCR0b2tlbi12YWx1ZSwgdmFsdWVzKTtcblxuICAgIEBlYWNoICR0aGVtZS12YWx1ZSBpbiAkdGhlbWUtdmFsdWVzIHtcbiAgICAgICR0aGVtZS10by1tYXRjaDogbWFwLmdldCgkdGhlbWUtdmFsdWUsIHRoZW1lKTtcbiAgICAgICR2YWx1ZTogbWFwLmdldCgkdGhlbWUtdmFsdWUsIHZhbHVlKTtcblxuICAgICAgQGlmIG1hdGNoZXMoJHRoZW1lLXRvLW1hdGNoLCAkYWN0aXZlLXRoZW1lKSB7XG4gICAgICAgIEByZXR1cm4gJHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEByZXR1cm4gJGZhbGxiYWNrO1xuICB9XG5cbiAgQHJldHVybiAkdG9rZW4tdmFsdWU7XG59XG5cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLyBAZ3JvdXAgQGNhcmJvbi90aGVtZXNcbkBtaXhpbiAtY3VzdG9tLXByb3BlcnR5KCRuYW1lLCAkdmFsdWUpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdmFsdWUpID09IG1hcCB7XG4gICAgQGVhY2ggJHByb3BlcnR5LCAkcHJvcGVydHktdmFsdWUgaW4gJHZhbHVlIHtcbiAgICAgIC8vIE9ubHkgc3VwcG9ydCBvbmUtbGV2ZWwgb2YgZGVwdGggZm9yIHZhbHVlcyB0aGF0IGFyZSBtYXBzLiBUaGlzIGlzIHRvXG4gICAgICAvLyBhdm9pZCBicmluZ2luZyBwcm9wZXJ0aWVzIGxpa2UgYGJyZWFrcG9pbnRzYCBvbiB0eXBlIHRva2Vuc1xuICAgICAgQGlmIHR5cGUtb2YoJHByb3BlcnR5LXZhbHVlKSAhPSBtYXAge1xuICAgICAgICBAaW5jbHVkZSAtY3VzdG9tLXByb3BlcnR5KCcjeyRuYW1lfS0jeyRwcm9wZXJ0eX0nLCAkcHJvcGVydHktdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgLS0je2NvbmZpZy4kcHJlZml4fS0jeyRuYW1lfTogI3skdmFsdWV9O1xuICB9XG59XG4iLCIvL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQGZvcndhcmQgJy4vdGhlbWUvdGhlbWUnIGhpZGUgdGhlbWU7XG5AdXNlICcuL3RoZW1lL3RoZW1lJztcbkB1c2UgJy4vbGF5ZXIvbGF5ZXItdG9rZW5zJztcbkB1c2UgJy4vdXRpbGl0aWVzL2N1c3RvbS1wcm9wZXJ0eSc7XG5cbi8vLyBJbmNsdWRlIHRoZSBDU1MgQ3VzdG9tIFByb3BlcnRpZXMgZm9yIHRoZSBhY3RpdmUgdGhlbWUgb3IgYSBnaXZlbiB0aGVtZSBvblxuLy8vIGEgc2VsZWN0b3JcbkBtaXhpbiB0aGVtZSgkYXJncy4uLikge1xuICBAaW5jbHVkZSB0aGVtZS50aGVtZSgkYXJncy4uLik7XG5cbiAgLy8gSWYgdGhlIHN5c3RlbSBpcyBpbiBoaWdoLWNvbnRyYXN0IG1vZGUsIHVzZSB0aGUgc3lzdGVtIGRlZmluZWQgY29sb3JzLiAgVGhpcyBtb3N0bHkgaGFwcGVucyBhdXRvbWF0aWNhbGx5LCBidXRcbiAgLy8gd2UgbmVlZCB0byBkbyBpdCBtYW51YWxseSBmb3IgaWNvbnMgYW5kIHNlbGVjdGVkIGJhY2tncm91bmRzLiAgSW1wb3J0YW50bHksIHRoZSBjdXN0b20gcHJvcGVydGllcyB3ZSBzZXQgaGVyZVxuICAvLyBuZWVkIHRvIG92ZXJyaWRlIHRoZSBDU1MgY3VzdG9tIHByb3BlcnRpZXMgc2V0IGFib3ZlLiAgU2VlOlxuICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXJib24tZGVzaWduLXN5c3RlbS9jYXJib24vaXNzdWVzLzE5MDE1XG4gIC8vIC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3N5c3RlbS1jb2xvci5cbiAgLy8gLSBodHRwczovL2NhcmJvbmRlc2lnbnN5c3RlbS5jb20vZWxlbWVudHMvY29sb3IvdG9rZW5zLyNpY29uXG4gIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSkge1xuICAgIC8vIEljb24gY29sb3JzIHNwZWNpZmllZCBieSBcImZpbGxcIi5cbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2ljb24tcHJpbWFyeScsIEJ1dHRvblRleHQpO1xuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignaWNvbi1zZWNvbmRhcnknLCBCdXR0b25UZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2ljb24taW50ZXJhY3RpdmUnLCBCdXR0b25UZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2ljb24tZGlzYWJsZWQnLCBHcmF5VGV4dCk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdpY29uLW9uLWNvbG9yLWRpc2FibGVkJywgR3JheVRleHQpO1xuXG4gICAgLy8gU2luY2UgaWNvbi1pbnZlcnNlIGFuZCBpY29uLW9uLWNvbG9yIGFyZSBnZW5lcmFsbHkgdXNlZCB0byBpbmRpY2F0ZWQgc2VsZWN0ZWQgaWNvbnMsIHVzZSBTZWxlY3RlZEl0ZW1UZXh0LlxuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignaWNvbi1pbnZlcnNlJywgU2VsZWN0ZWRJdGVtVGV4dCk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdpY29uLW9uLWNvbG9yJywgU2VsZWN0ZWRJdGVtVGV4dCk7XG5cbiAgICAvLyBTb21lIGNvbXBvbmVudHMgY3VycmVudGx5IHNldCB0aGVzZSB2YWx1ZXMgZm9yIGZpbGwsIGFsdGhvdWdoIHVuY2xlYXIgaWYgdGhhdCdzIHZhbGlkLlxuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignYnV0dG9uLWRpc2FibGVkJywgR3JheVRleHQpO1xuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignaW50ZXJhY3RpdmUnLCBCdXR0b25UZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2xpbmstcHJpbWFyeScsIExpbmtUZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2xpbmstcHJpbWFyeS1ob3ZlcicsIExpbmtUZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2xpbmstc2Vjb25kYXJ5JywgTGlua1RleHQpO1xuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignbGluay1pbnZlcnNlJywgU2VsZWN0ZWRJdGVtVGV4dCk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKFxuICAgICAgJ2xpbmstaW52ZXJzZS1ob3ZlcicsXG4gICAgICBTZWxlY3RlZEl0ZW1UZXh0XG4gICAgKTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oXG4gICAgICAnbGluay1pbnZlcnNlLXZpc2l0ZWQnLFxuICAgICAgU2VsZWN0ZWRJdGVtVGV4dFxuICAgICk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdsaW5rLXZpc2l0ZWQnLCBWaXNpdGVkVGV4dCk7XG5cbiAgICAvLyBGb3JjZSBhIGJhY2tncm91bmQtY29sb3IgZm9yIHNlbGVjdGVkIGJ1dHRvbnMgZXRjLiwgb3RoZXJ3aXNlIHRoZSB1c2VyIHdvbid0IGtub3cgdGhleSBhcmUgc2VsZWN0ZWQuXG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdiYWNrZ3JvdW5kLXNlbGVjdGVkJywgU2VsZWN0ZWRJdGVtKTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oXG4gICAgICAnYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcicsXG4gICAgICBTZWxlY3RlZEl0ZW1cbiAgICApO1xuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignYmFja2dyb3VuZC1pbnZlcnNlJywgU2VsZWN0ZWRJdGVtKTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oXG4gICAgICAnbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZScsXG4gICAgICBTZWxlY3RlZEl0ZW1cbiAgICApO1xuICB9XG5cbiAgLy8gTm90ZTogd2UgbmVlZCB0byByZS1lbWl0IHRoZSBjb250ZXh0dWFsIGxheWVyIHRva2VucyBhcyBwYXJ0IG9mIHRoZSB0aGVtZVxuICAvLyBtaXhpbi4gT3RoZXJ3aXNlLCB0aGUgbGF5ZXIgdG9rZW5zIGFyZSBkZWZpbmVkIGF0IHRoZSA6cm9vdCBsZXZlbCBhbmQgd2lsbFxuICAvLyBub3QgcGljayB1cCB0aGUgdGhlbWUtc3BlY2lmaWMsIG9yIHpvbmUtc3BlY2lmaWMsIHZhbHVlIGZyb20gdGhlIGZpcnN0XG4gIC8vIGxheWVyLlxuICAvL1xuICAvLyBGb3IgZXhhbXBsZSwgaW4gdGhpcyBzaXR1YXRpb246XG4gIC8vXG4gIC8vIGBgYFxuICAvLyA6cm9vdCB7XG4gIC8vICAgLS1sYXllci1vbmU6ICMwMDAwMDA7XG4gIC8vICAgLS1sYXllcjogdmFyKC0tbGF5ZXItb25lKTtcbiAgLy8gfVxuICAvLyBgYGBcbiAgLy9cbiAgLy8gVGhpcyB3aWxsIGFsd2F5cyBldmFsdWF0ZSB0byB0aGUgdmFsdWUgb2YgYC0tbGF5ZXItb25lYCBhdCB0aGUgYDpyb290YFxuICAvLyBzZWxlY3RvciwgZXZlbiBpZiBgLS1sYXllci1vbmVgIGlzIHJlZGVmaW5lZCBsYXllciBvbiBpbiB0aGUgY2FzY2FkZS5cbiAgLy9cbiAgLy8gYGBgXG4gIC8vIC56b25lIHtcbiAgLy8gICAtLWxheWVyLW9uZTogI2ZmZmZmZjtcbiAgLy8gfVxuICAvLyBgYGBcbiAgLy9cbiAgLy8gRXZlbiB0aG91Z2ggeW91IHdvdWxkIGV4cGVjdCBgLS1sYXllcmAgdG8gYmUgcmVkZWZpbmVkLCBpdCB3aWxsIGtlZXAgdGhlXG4gIC8vIHZhbHVlIGRlZmluZWQgYXQgdGhlIGA6cm9vdGAgbGV2ZWwuXG4gIC8vXG4gIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2NhcmJvbi1kZXNpZ24tc3lzdGVtL2NhcmJvbi9pc3N1ZXMvMTExMzhcbiAgQGluY2x1ZGUgbGF5ZXItdG9rZW5zLmVtaXQtbGF5ZXItdG9rZW5zKDEpO1xufVxuIiwiLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkB1c2UgJy4uL2NvbmZpZyc7XG5cbi8vIFNvbWUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSB0ZXJtaW5vbG9neVxuLy8gQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXZhcmlhYmxlcy0xL1xuLy9cbi8vIDxjdXN0b20tcHJvcGVydHktbmFtZT46XG4vLyAgIEFueSB2YWxpZCBpZGVudGlmZXIgdGhhdCBzdGFydHMgd2l0aCB0d28gZGFzaGVzICgtLSlcbi8vXG4vLyBBIGRlY2xhcmF0aW9uOlxuLy8gICBDU1MgQ3VzdG9tIFByb3BlcnRpZXMgY2FuIGJlIHVzZWQgYXMgZGVjbGFyYXRpb25zIGluIGEgQ1NTIHNlbGVjdG9yLiBUaGV5XG4vLyAgIHRha2Ugb24gdGhlIGZvcm0gb2Y6XG4vL1xuLy8gICA8Y3VzdG9tLXByb3BlcnR5LW5hbWU+OiA8ZGVjbGFyYXRpb24tdmFsdWU+O1xuLy9cbi8vIFRoZSB2YXIoKSBub3RhdGlvbjpcbi8vICAgWW91IGNhbiB1c2UgYSBDU1MgQ3VzdG9tIFByb3BlcnR5IGFzIGEgc3Vic3RpdHV0ZSBmb3IgYSB2YWx1ZSBvZiBhbm90aGVyXG4vLyAgIHByb3BlcnR5IHVzaW5nIHRoZSB2YXIoKSBmdW5jdGlvbi4gVGhpcyBmdW5jdGlvbiBoYXMgdGhlIGZvbGxvd2luZyBzeW50YXg6XG4vL1xuLy8gICB2YXIoIDxjdXN0b20tcHJvcGVydHktbmFtZT4gWywgPGRlY2xhcmF0aXZlLXZhbHVlPiBdPyApXG4vL1xuLy8gICBUaGlzIGZ1bmN0aW9uIHRha2VzIGluIGFuIG9wdGlvbmFsIGZhbGxiYWNrIHZhbHVlIGlmIHRoZSBDU1MgQ3VzdG9tXG4vLyAgIFByb3BlcnR5IGhhcyBub3QgYmVlbiBwcmV2aW91c2x5IGRlZmluZWRcblxuLy8vIEdldCB0aGUgPGN1c3RvbS1wcm9wZXJ0eS1uYW1lPiBmb3IgYSBnaXZlbiBzdHJpbmdcbi8vLyBAcGFyYW0ge1N0cmluZ30gJG5hbWVcbi8vLyBAcmV0dXJucyB7U3RyaW5nfVxuQGZ1bmN0aW9uIGdldC1uYW1lKCRuYW1lKSB7XG4gIEByZXR1cm4gLS0je2NvbmZpZy4kcHJlZml4fS0jeyRuYW1lfTtcbn1cblxuLy8vIEdldCB0aGUgdmFyKCkgcmVwcmVzZW50YXRpb24gZm9yIGEgZ2l2ZW4gdG9rZW5cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG5hbWVcbi8vLyBAcGFyYW0ge0FueX0gJGZhbGxiYWNrXG4vLy8gQHJldHVybnMgdmFyKClcbkBmdW5jdGlvbiBnZXQtdmFyKCRuYW1lLCAkZmFsbGJhY2s6IGZhbHNlKSB7XG4gIEBpZiAkZmFsbGJhY2sge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skbmFtZX0sICN7JGZhbGxiYWNrfSk7XG4gIH1cbiAgQHJldHVybiB2YXIoLS0je2NvbmZpZy4kcHJlZml4fS0jeyRuYW1lfSk7XG59XG5cbi8vLyBFbWl0IGEgZGVjbGFyYXRpb24gd2hpY2ggc2V0cyB0aGUgdmFsdWUgb2YgYSBDU1MgQ3VzdG9tIFByb3BlcnR5IHVzaW5nIHRoZVxuLy8vICRuYW1lIGFzIHRoZSA8Y3VzdG9tLXByb3BlcnR5LW5hbWU+IGFuZCB0aGUgJHZhbHVlIGFzIHRoZVxuLy8vIDxkZWNsYXJhdGlvbi12YWx1ZT5cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG5hbWVcbi8vLyBAcGFyYW0ge2FueX0gJHZhbHVlXG5AbWl4aW4gZGVjbGFyYXRpb24oJG5hbWUsICR2YWx1ZSkge1xuICAje2dldC1uYW1lKCRuYW1lKX06ICN7JHZhbHVlfTtcbn1cbiJdfQ== */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(W));var u=`/**
 * Button Reset Mixin
 * Provides consistent button styling across all Carbon-themed components
 * @param {boolean} $include-focus - Whether to include focus styles (default: true)
 */
/**
 * Button Interactive States
 * Applies hover and active states using Carbon theme tokens
 * @param {string} $layer - Layer level for the component (default: 'background')
 */
/**
 * Complete Button Styling
 * Combines reset and interactive states for buttons
 * @param {boolean} $include-focus - Include focus styles
 * @param {string} $layer - Layer level for interactive states
 */
/**
 * Button Sizing
 * Applies consistent minimum dimensions using Carbon spacing tokens
 * @param {string} $size - Size level (small: 06, medium: 07, large: 08, xlarge: 10)
 */
/**
 * Input Field Styling
 * Provides consistent styling for input elements (text, textarea, select)
 * @param {string} $layer - Layer level for the input background
 */
/**
 * Border Bottom Input
 * Adds bottom border for text inputs following Carbon design pattern
 */
/**
 * Focus State
 * Applies consistent focus styling across components
 * @param {string} $type - Type of focus (inset, outline)
 */
/**
 * Tab Button Styling
 * Consistent styling for tab buttons with active state indicator
 */
/**
 * Active Tab Indicator
 * Applies bottom border to indicate active tab state
 */
/**
 * Badge/Tag Styling
 * For count indicators and tags
 * @param {boolean} $active - Whether the badge is on an active element
 */
/**
 * TOOLBAR STYLES
 * Styles for the Storybook toolbar component (.sb-bar)
 * Includes buttons, tabs, and viewport controls
 */
.sb-bar {
  background-color: var(--cds-layer-01, #f4f4f4) !important;
  border-bottom: 1px solid var(--cds-border-subtle-01, #c6c6c6);
  box-shadow: none !important;
  /**
   * Container Adjustments
   * Removes default margins and width constraints
   */
}
.sb-bar div {
  margin: 0 !important;
  width: unset;
  /**
   * Viewport Width/Height Labels
   * Text color for responsive viewport controls
   */
}
.sb-bar div [title="Viewport width"],
.sb-bar div [title="Viewport height"] {
  color: var(--cds-text-secondary, #525252);
}
.sb-bar {
  /**
   * Button & Link Containers
   * Groups of interactive toolbar elements
   */
}
.sb-bar :has(> button),
.sb-bar :has(> a) {
  gap: 0;
  /**
   * Button Separators
   * Visual dividers between toolbar buttons
   */
}
.sb-bar :has(> button) button + span:not(.addon-collapsible-icon):has(+ button),
.sb-bar :has(> a) button + span:not(.addon-collapsible-icon):has(+ button) {
  background-color: var(--cds-border-subtle-01, #c6c6c6);
  margin: 0;
  block-size: 100%;
}
.sb-bar :has(> button),
.sb-bar :has(> a) {
  /**
   * Standard Toolbar Buttons & Links
   * Excludes tab buttons which have separate styling
   */
}
.sb-bar :has(> button) button:not([role=tab]),
.sb-bar :has(> button) a,
.sb-bar :has(> a) button:not([role=tab]),
.sb-bar :has(> a) a {
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  box-shadow: none;
}
.sb-bar :has(> button) button:not([role=tab]):focus,
.sb-bar :has(> button) a:focus,
.sb-bar :has(> a) button:not([role=tab]):focus,
.sb-bar :has(> a) a:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
.sb-bar :has(> button) button:not([role=tab]):hover,
.sb-bar :has(> button) a:hover,
.sb-bar :has(> a) button:not([role=tab]):hover,
.sb-bar :has(> a) a:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
.sb-bar :has(> button) button:not([role=tab]):active,
.sb-bar :has(> button) a:active,
.sb-bar :has(> a) button:not([role=tab]):active,
.sb-bar :has(> a) a:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
.sb-bar {
  /**
   * Selected/Active Non-Tab Button
   * Indicates active state for toggle buttons
   */
}
.sb-bar button.css-n2j2tx:not([role=tab]) {
  background-color: var(--cds-background-selected, rgba(141, 141, 141, 0.2));
}
.sb-bar .css-s1bs4u {
  border-width: 2px 0;
  border-color: transparent transparent var(--cds-border-interactive, #0f62fe);
  font-weight: bold;
}
.sb-bar {
  /**
   * Tab Buttons
   * Navigation tabs in the toolbar (e.g., Addons, Controls)
   */
}
.sb-bar button[role=tab] {
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  box-shadow: none;
}
.sb-bar button[role=tab]:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
.sb-bar button[role=tab]:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
.sb-bar button[role=tab] {
  font-weight: unset;
}
.sb-bar button[role=tab]:focus {
  outline: 2px solid var(--cds-focus, #0f62fe);
  outline-offset: -2px;
  border-width: 2px 0;
  border-color: unset;
}
.sb-bar button[role=tab] {
  /**
   * Badge/Counter on Tabs
   * Shows notification count or status
   */
}
.sb-bar button[role=tab] > div > div {
  box-shadow: none;
  background-color: var(--cds-border-subtle);
  color: var(--cds-text-secondary, #525252);
}
.sb-bar button[role=tab] {
  /**
   * Collapsible Tab Indicator
   * Dropdown arrow for expandable tabs
   */
}
.sb-bar button[role=tab] .addon-collapsible-icon {
  color: var(--cds-text-primary, #161616);
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  border-top: 6px solid;
}
.sb-bar {
  /**
   * Active Tab State
   * Visual indicator for currently selected tab
   */
}
.sb-bar button.tabbutton-active {
  border-width: 2px 0;
  border-color: transparent transparent var(--cds-border-interactive, #0f62fe);
  font-weight: bold;
  /**
   * Active Tab Badge
   * Badge styling for active tab state
   */
}
.sb-bar button.tabbutton-active > div > div {
  box-shadow: none;
  background-color: var(--cds-border-interactive, #0f62fe);
  color: var(--cds-text-on-color, #ffffff);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbIl9taXhpbnMuc2NzcyIsInRvb2xiYXIuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3RoZW1lcy9zY3NzL2dlbmVyYXRlZC9fdG9rZW5zLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi9sYXlvdXQvc2Nzcy9nZW5lcmF0ZWQvX3NwYWNpbmcuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3N0eWxlcy9zY3NzL3RoZW1lL190aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwQkE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FDckpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtFQUNFO0VBQ0E7RUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0U7RUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7RUFFRSxPQytLVzs7QURsTWpCO0FBdUJFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7RUFFRTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7RUFDRSxrQkM4R2E7RUQ3R2I7RUFDQTs7QUFYSjtBQUFBO0FBY0U7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7RURnQkEsZ0JHMUJTO0VIMkJULGlCRzNCUztFSHJDWDtFQUNBO0VBQ0E7RUFDQTs7QUFHRTtBQUFBO0FBQUE7QUFBQTtFQUNFOztBQVdKO0FBQUE7QUFBQTtBQUFBO0VBTUk7O0FBSUo7QUFBQTtBQUFBO0FBQUE7RUFNSTs7QUNoQ047QUFvREU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRSxrQkN4Q2tCOztBRDJDcEI7RUQ4RUE7RUFDQTtFQUNBOztBQzVJRjtBQWdFRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFRFBFLGdCRzFCUztFSDJCVCxpQkczQlM7RUhyQ1g7RUFDQTtFQUNBO0VBQ0E7O0FBZUE7RUFNSTs7QUFJSjtFQU1JOztBQ29DSjtFRHdEQTs7QUFFQTtFQWhCRTtFQUNBO0VBaUJBO0VBQ0E7O0FDN0RGO0FBR0U7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUQwRUY7RUFNRSxrQkloSVk7RUppSVosT0VzQ2E7O0FEOUhmO0FBV0U7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRSxPQzJHUztFRDFHVDtFQUNBO0VBQ0E7O0FBdkZOO0FBMkZFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VEMkNBO0VBQ0E7RUFDQTtBQzFDRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFRCtDRjtFQUdFLGtCRWlDaUI7RUZoQ2pCLE9Fd0RZIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIkBjYXJib24vbGF5b3V0XCIgYXMgKjtcbkB1c2UgXCJAY2FyYm9uL3N0eWxlcy9zY3NzL3RoZW1lXCIgYXMgKjtcblxuLyoqXG4gKiBCdXR0b24gUmVzZXQgTWl4aW5cbiAqIFByb3ZpZGVzIGNvbnNpc3RlbnQgYnV0dG9uIHN0eWxpbmcgYWNyb3NzIGFsbCBDYXJib24tdGhlbWVkIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gJGluY2x1ZGUtZm9jdXMgLSBXaGV0aGVyIHRvIGluY2x1ZGUgZm9jdXMgc3R5bGVzIChkZWZhdWx0OiB0cnVlKVxuICovXG5AbWl4aW4gYnV0dG9uLXJlc2V0KCRpbmNsdWRlLWZvY3VzOiB0cnVlKSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogJHRleHQtcHJpbWFyeSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIEBpZiAkaW5jbHVkZS1mb2N1cyB7XG4gICAgJjpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggJGZvY3VzICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQnV0dG9uIEludGVyYWN0aXZlIFN0YXRlc1xuICogQXBwbGllcyBob3ZlciBhbmQgYWN0aXZlIHN0YXRlcyB1c2luZyBDYXJib24gdGhlbWUgdG9rZW5zXG4gKiBAcGFyYW0ge3N0cmluZ30gJGxheWVyIC0gTGF5ZXIgbGV2ZWwgZm9yIHRoZSBjb21wb25lbnQgKGRlZmF1bHQ6ICdiYWNrZ3JvdW5kJylcbiAqL1xuQG1peGluIGJ1dHRvbi1zdGF0ZXMoJGxheWVyOiAnYmFja2dyb3VuZCcpIHtcbiAgJjpob3ZlciB7XG4gICAgQGlmICRsYXllciA9PSAnbGF5ZXItMDEnIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1ob3Zlci0wMSAhaW1wb3J0YW50O1xuICAgIH0gQGVsc2UgaWYgJGxheWVyID09ICdsYXllci0wMicge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLWhvdmVyLTAyICFpbXBvcnRhbnQ7XG4gICAgfSBAZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1ob3ZlciAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBAaWYgJGxheWVyID09ICdsYXllci0wMScge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLWFjdGl2ZS0wMSAhaW1wb3J0YW50O1xuICAgIH0gQGVsc2UgaWYgJGxheWVyID09ICdsYXllci0wMicge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLWFjdGl2ZS0wMiAhaW1wb3J0YW50O1xuICAgIH0gQGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtYWN0aXZlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29tcGxldGUgQnV0dG9uIFN0eWxpbmdcbiAqIENvbWJpbmVzIHJlc2V0IGFuZCBpbnRlcmFjdGl2ZSBzdGF0ZXMgZm9yIGJ1dHRvbnNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gJGluY2x1ZGUtZm9jdXMgLSBJbmNsdWRlIGZvY3VzIHN0eWxlc1xuICogQHBhcmFtIHtzdHJpbmd9ICRsYXllciAtIExheWVyIGxldmVsIGZvciBpbnRlcmFjdGl2ZSBzdGF0ZXNcbiAqL1xuQG1peGluIGJ1dHRvbi1jb21wbGV0ZSgkaW5jbHVkZS1mb2N1czogdHJ1ZSwgJGxheWVyOiAnYmFja2dyb3VuZCcpIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXJlc2V0KCRpbmNsdWRlLWZvY3VzKTtcbiAgQGluY2x1ZGUgYnV0dG9uLXN0YXRlcygkbGF5ZXIpO1xufVxuXG4vKipcbiAqIEJ1dHRvbiBTaXppbmdcbiAqIEFwcGxpZXMgY29uc2lzdGVudCBtaW5pbXVtIGRpbWVuc2lvbnMgdXNpbmcgQ2FyYm9uIHNwYWNpbmcgdG9rZW5zXG4gKiBAcGFyYW0ge3N0cmluZ30gJHNpemUgLSBTaXplIGxldmVsIChzbWFsbDogMDYsIG1lZGl1bTogMDcsIGxhcmdlOiAwOCwgeGxhcmdlOiAxMClcbiAqL1xuQG1peGluIGJ1dHRvbi1zaXplKCRzaXplOiAnbWVkaXVtJykge1xuICBAaWYgJHNpemUgPT0gJ3NtYWxsJyB7XG4gICAgbWluLWJsb2NrLXNpemU6ICRzcGFjaW5nLTA2O1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogJHNwYWNpbmctMDY7XG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gJ21lZGl1bScge1xuICAgIG1pbi1ibG9jay1zaXplOiAkc3BhY2luZy0wNztcbiAgICBtaW4taW5saW5lLXNpemU6ICRzcGFjaW5nLTA3O1xuICB9IEBlbHNlIGlmICRzaXplID09ICdsYXJnZScge1xuICAgIG1pbi1ibG9jay1zaXplOiAkc3BhY2luZy0wODtcbiAgICBtaW4taW5saW5lLXNpemU6ICRzcGFjaW5nLTA4O1xuICB9IEBlbHNlIGlmICRzaXplID09ICd4bGFyZ2UnIHtcbiAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMTA7XG4gICAgbWluLWlubGluZS1zaXplOiAkc3BhY2luZy0xMDtcbiAgfVxufVxuXG4vKipcbiAqIElucHV0IEZpZWxkIFN0eWxpbmdcbiAqIFByb3ZpZGVzIGNvbnNpc3RlbnQgc3R5bGluZyBmb3IgaW5wdXQgZWxlbWVudHMgKHRleHQsIHRleHRhcmVhLCBzZWxlY3QpXG4gKiBAcGFyYW0ge3N0cmluZ30gJGxheWVyIC0gTGF5ZXIgbGV2ZWwgZm9yIHRoZSBpbnB1dCBiYWNrZ3JvdW5kXG4gKi9cbkBtaXhpbiBpbnB1dC1maWVsZCgkbGF5ZXI6ICdsYXllci0wMScpIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcblxuICBAaWYgJGxheWVyID09ICdsYXllci0wMicge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci0wMjtcbiAgfSBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLTAxO1xuICB9XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gIH1cblxuICBAaW5jbHVkZSBidXR0b24tc3RhdGVzKCRsYXllcik7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICRmb2N1cztcbiAgfVxufVxuXG4vKipcbiAqIEJvcmRlciBCb3R0b20gSW5wdXRcbiAqIEFkZHMgYm90dG9tIGJvcmRlciBmb3IgdGV4dCBpbnB1dHMgZm9sbG93aW5nIENhcmJvbiBkZXNpZ24gcGF0dGVyblxuICovXG5AbWl4aW4gaW5wdXQtYm9yZGVyLWJvdHRvbSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwICRib3JkZXItc3Ryb25nLTAxO1xufVxuXG4vKipcbiAqIEZvY3VzIFN0YXRlXG4gKiBBcHBsaWVzIGNvbnNpc3RlbnQgZm9jdXMgc3R5bGluZyBhY3Jvc3MgY29tcG9uZW50c1xuICogQHBhcmFtIHtzdHJpbmd9ICR0eXBlIC0gVHlwZSBvZiBmb2N1cyAoaW5zZXQsIG91dGxpbmUpXG4gKi9cbkBtaXhpbiBmb2N1cy1zdGF0ZSgkdHlwZTogJ2luc2V0Jykge1xuICBAaWYgJHR5cGUgPT0gJ291dGxpbmUnIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgJGZvY3VzO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICB9IEBlbHNlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggJGZvY3VzICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUYWIgQnV0dG9uIFN0eWxpbmdcbiAqIENvbnNpc3RlbnQgc3R5bGluZyBmb3IgdGFiIGJ1dHRvbnMgd2l0aCBhY3RpdmUgc3RhdGUgaW5kaWNhdG9yXG4gKi9cbkBtaXhpbiB0YWItYnV0dG9uIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJ2xhcmdlJyk7XG4gIEBpbmNsdWRlIGJ1dHRvbi1jb21wbGV0ZShmYWxzZSk7XG4gIGZvbnQtd2VpZ2h0OiB1bnNldDtcblxuICAmOmZvY3VzIHtcbiAgICBAaW5jbHVkZSBmb2N1cy1zdGF0ZSgnb3V0bGluZScpO1xuICAgIGJvcmRlci13aWR0aDogMnB4IDA7XG4gICAgYm9yZGVyLWNvbG9yOiB1bnNldDtcbiAgfVxufVxuXG4vKipcbiAqIEFjdGl2ZSBUYWIgSW5kaWNhdG9yXG4gKiBBcHBsaWVzIGJvdHRvbSBib3JkZXIgdG8gaW5kaWNhdGUgYWN0aXZlIHRhYiBzdGF0ZVxuICovXG5AbWl4aW4gdGFiLWFjdGl2ZSB7XG4gIGJvcmRlci13aWR0aDogMnB4IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJGJvcmRlci1pbnRlcmFjdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qKlxuICogQmFkZ2UvVGFnIFN0eWxpbmdcbiAqIEZvciBjb3VudCBpbmRpY2F0b3JzIGFuZCB0YWdzXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICRhY3RpdmUgLSBXaGV0aGVyIHRoZSBiYWRnZSBpcyBvbiBhbiBhY3RpdmUgZWxlbWVudFxuICovXG5AbWl4aW4gYmFkZ2UoJGFjdGl2ZTogZmFsc2UpIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcblxuICBAaWYgJGFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlci1pbnRlcmFjdGl2ZTtcbiAgICBjb2xvcjogJHRleHQtb24tY29sb3I7XG4gIH0gQGVsc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItc3VidGxlO1xuICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gIH1cbn1cbiIsIkB1c2UgXCJAY2FyYm9uL2xheW91dFwiIGFzICo7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZVwiIGFzICo7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy9jb21wb25lbnRzL2J1dHRvbi90b2tlbnNcIiBhcyBidXR0b24tdG9rZW5zO1xuQHVzZSBcIm1peGluc1wiIGFzICo7XG5cbi8qKlxuICogVE9PTEJBUiBTVFlMRVNcbiAqIFN0eWxlcyBmb3IgdGhlIFN0b3J5Ym9vayB0b29sYmFyIGNvbXBvbmVudCAoLnNiLWJhcilcbiAqIEluY2x1ZGVzIGJ1dHRvbnMsIHRhYnMsIGFuZCB2aWV3cG9ydCBjb250cm9sc1xuICovXG5cbi5zYi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItMDEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItc3VidGxlLTAxO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgLyoqXG4gICAqIENvbnRhaW5lciBBZGp1c3RtZW50c1xuICAgKiBSZW1vdmVzIGRlZmF1bHQgbWFyZ2lucyBhbmQgd2lkdGggY29uc3RyYWludHNcbiAgICovXG4gIGRpdiB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IHVuc2V0O1xuXG4gICAgLyoqXG4gICAgICogVmlld3BvcnQgV2lkdGgvSGVpZ2h0IExhYmVsc1xuICAgICAqIFRleHQgY29sb3IgZm9yIHJlc3BvbnNpdmUgdmlld3BvcnQgY29udHJvbHNcbiAgICAgKi9cbiAgICBbdGl0bGU9XCJWaWV3cG9ydCB3aWR0aFwiXSxcbiAgICBbdGl0bGU9XCJWaWV3cG9ydCBoZWlnaHRcIl0ge1xuICAgICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQnV0dG9uICYgTGluayBDb250YWluZXJzXG4gICAqIEdyb3VwcyBvZiBpbnRlcmFjdGl2ZSB0b29sYmFyIGVsZW1lbnRzXG4gICAqL1xuICA6aGFzKD4gYnV0dG9uKSxcbiAgOmhhcyg+IGEpIHtcbiAgICBnYXA6IDA7XG5cbiAgICAvKipcbiAgICAgKiBCdXR0b24gU2VwYXJhdG9yc1xuICAgICAqIFZpc3VhbCBkaXZpZGVycyBiZXR3ZWVuIHRvb2xiYXIgYnV0dG9uc1xuICAgICAqL1xuICAgIGJ1dHRvbiArIHNwYW46bm90KC5hZGRvbi1jb2xsYXBzaWJsZS1pY29uKTpoYXMoKyBidXR0b24pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItc3VidGxlLTAxO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgYmxvY2stc2l6ZTogMTAwJTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBUb29sYmFyIEJ1dHRvbnMgJiBMaW5rc1xuICAgICAqIEV4Y2x1ZGVzIHRhYiBidXR0b25zIHdoaWNoIGhhdmUgc2VwYXJhdGUgc3R5bGluZ1xuICAgICAqL1xuICAgIGJ1dHRvbjpub3QoW3JvbGU9XCJ0YWJcIl0pLFxuICAgIGEge1xuICAgICAgQGluY2x1ZGUgYnV0dG9uLXNpemUoXCJsYXJnZVwiKTtcbiAgICAgIEBpbmNsdWRlIGJ1dHRvbi1jb21wbGV0ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0ZWQvQWN0aXZlIE5vbi1UYWIgQnV0dG9uXG4gICAqIEluZGljYXRlcyBhY3RpdmUgc3RhdGUgZm9yIHRvZ2dsZSBidXR0b25zXG4gICAqL1xuICBidXR0b24uY3NzLW4yajJ0eDpub3QoW3JvbGU9XCJ0YWJcIl0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1zZWxlY3RlZDtcbiAgfVxuXG4gIC5jc3MtczFiczR1IHtcbiAgICBAaW5jbHVkZSB0YWItYWN0aXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRhYiBCdXR0b25zXG4gICAqIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdG9vbGJhciAoZS5nLiwgQWRkb25zLCBDb250cm9scylcbiAgICovXG4gIGJ1dHRvbltyb2xlPVwidGFiXCJdIHtcbiAgICBAaW5jbHVkZSB0YWItYnV0dG9uO1xuXG4gICAgLyoqXG4gICAgICogQmFkZ2UvQ291bnRlciBvbiBUYWJzXG4gICAgICogU2hvd3Mgbm90aWZpY2F0aW9uIGNvdW50IG9yIHN0YXR1c1xuICAgICAqL1xuICAgID4gZGl2ID4gZGl2IHtcbiAgICAgIEBpbmNsdWRlIGJhZGdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbGxhcHNpYmxlIFRhYiBJbmRpY2F0b3JcbiAgICAgKiBEcm9wZG93biBhcnJvdyBmb3IgZXhwYW5kYWJsZSB0YWJzXG4gICAgICovXG4gICAgLmFkZG9uLWNvbGxhcHNpYmxlLWljb24ge1xuICAgICAgY29sb3I6ICR0ZXh0LXByaW1hcnk7XG4gICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wOiA2cHggc29saWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2ZSBUYWIgU3RhdGVcbiAgICogVmlzdWFsIGluZGljYXRvciBmb3IgY3VycmVudGx5IHNlbGVjdGVkIHRhYlxuICAgKi9cbiAgYnV0dG9uLnRhYmJ1dHRvbi1hY3RpdmUge1xuICAgIEBpbmNsdWRlIHRhYi1hY3RpdmU7XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmUgVGFiIEJhZGdlXG4gICAgICogQmFkZ2Ugc3R5bGluZyBmb3IgYWN0aXZlIHRhYiBzdGF0ZVxuICAgICAqL1xuICAgID4gZGl2ID4gZGl2IHtcbiAgICAgIEBpbmNsdWRlIGJhZGdlKHRydWUpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29kZSBnZW5lcmF0ZWQgYnkgQGNhcmJvbi90aGVtZXMuIERPIE5PVCBFRElULlxuLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvbmZpZyc7XG5AdXNlICcuLi90aGVtZSc7XG5cbi8vLyBJbnRlcm5hbCBoZWxwZXIgZm9yIGdlbmVyYXRpbmcgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG5AZnVuY3Rpb24gX2dldCgkdG9rZW4pIHtcbiAgQGlmIGNvbmZpZy4kdXNlLWZhbGxiYWNrLXZhbHVlID09IGZhbHNlIHtcbiAgICBAcmV0dXJuIHZhcigtLSN7Y29uZmlnLiRwcmVmaXh9LSN7JHRva2VufSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skdG9rZW59LCAje3RoZW1lLmdldCgkdG9rZW4pfSk7XG4gIH1cbn1cblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmRgIHRva2VuXG4kYmFja2dyb3VuZDogX2dldCgnYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1hY3RpdmVgIHRva2VuXG4kYmFja2dyb3VuZC1hY3RpdmU6IF9nZXQoJ2JhY2tncm91bmQtYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLXNlbGVjdGVkYCB0b2tlblxuJGJhY2tncm91bmQtc2VsZWN0ZWQ6IF9nZXQoJ2JhY2tncm91bmQtc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtc2VsZWN0ZWQtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWJyYW5kYCB0b2tlblxuJGJhY2tncm91bmQtYnJhbmQ6IF9nZXQoJ2JhY2tncm91bmQtYnJhbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtaW52ZXJzZWAgdG9rZW5cbiRiYWNrZ3JvdW5kLWludmVyc2U6IF9nZXQoJ2JhY2tncm91bmQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtaW52ZXJzZS1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wMWAgdG9rZW5cbiRsYXllci0wMTogX2dldCgnbGF5ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wMWAgdG9rZW5cbiRsYXllci1hY3RpdmUtMDE6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wMWAgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAxOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1ob3Zlci0wMTogX2dldCgnbGF5ZXItaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAxYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAxOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDFgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDE6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wMmAgdG9rZW5cbiRsYXllci0wMjogX2dldCgnbGF5ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wMmAgdG9rZW5cbiRsYXllci1hY3RpdmUtMDI6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wMmAgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAyOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1ob3Zlci0wMjogX2dldCgnbGF5ZXItaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAyYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAyOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDJgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDI6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wM2AgdG9rZW5cbiRsYXllci0wMzogX2dldCgnbGF5ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wM2AgdG9rZW5cbiRsYXllci1hY3RpdmUtMDM6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wM2AgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAzOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1ob3Zlci0wMzogX2dldCgnbGF5ZXItaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAzYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAzOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDNgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDM6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1pbnZlcnNlYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWludmVyc2U6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWRpc2FibGVkYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWRpc2FibGVkOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMTogX2dldCgnbGF5ZXItYWNjZW50LTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDE6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDE6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMjogX2dldCgnbGF5ZXItYWNjZW50LTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDI6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDI6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMzogX2dldCgnbGF5ZXItYWNjZW50LTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDM6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDM6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDFgIHRva2VuXG4kZmllbGQtMDE6IF9nZXQoJ2ZpZWxkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wMWAgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMTogX2dldCgnZmllbGQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAyYCB0b2tlblxuJGZpZWxkLTAyOiBfZ2V0KCdmaWVsZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDJgIHRva2VuXG4kZmllbGQtaG92ZXItMDI6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wM2AgdG9rZW5cbiRmaWVsZC0wMzogX2dldCgnZmllbGQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAzYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAzOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaW50ZXJhY3RpdmVgIHRva2VuXG4kaW50ZXJhY3RpdmU6IF9nZXQoJ2ludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAwYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDA6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDAnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDFgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMTogX2dldCgnYm9yZGVyLXN1YnRsZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMWAgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAyYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDI6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDJgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMjogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wM2AgdG9rZW5cbiRib3JkZXItc3VidGxlLTAzOiBfZ2V0KCdib3JkZXItc3VidGxlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAzYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDM6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDFgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMTogX2dldCgnYm9yZGVyLXN0cm9uZy0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wMmAgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAyOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAzYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDM6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAxYCB0b2tlblxuJGJvcmRlci10aWxlLTAxOiBfZ2V0KCdib3JkZXItdGlsZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDJgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDI6IF9nZXQoJ2JvcmRlci10aWxlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wM2AgdG9rZW5cbiRib3JkZXItdGlsZS0wMzogX2dldCgnYm9yZGVyLXRpbGUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1pbnZlcnNlYCB0b2tlblxuJGJvcmRlci1pbnZlcnNlOiBfZ2V0KCdib3JkZXItaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWludGVyYWN0aXZlYCB0b2tlblxuJGJvcmRlci1pbnRlcmFjdGl2ZTogX2dldCgnYm9yZGVyLWludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItZGlzYWJsZWRgIHRva2VuXG4kYm9yZGVyLWRpc2FibGVkOiBfZ2V0KCdib3JkZXItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtcHJpbWFyeWAgdG9rZW5cbiR0ZXh0LXByaW1hcnk6IF9nZXQoJ3RleHQtcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1zZWNvbmRhcnlgIHRva2VuXG4kdGV4dC1zZWNvbmRhcnk6IF9nZXQoJ3RleHQtc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXBsYWNlaG9sZGVyYCB0b2tlblxuJHRleHQtcGxhY2Vob2xkZXI6IF9nZXQoJ3RleHQtcGxhY2Vob2xkZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtaGVscGVyYCB0b2tlblxuJHRleHQtaGVscGVyOiBfZ2V0KCd0ZXh0LWhlbHBlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1lcnJvcmAgdG9rZW5cbiR0ZXh0LWVycm9yOiBfZ2V0KCd0ZXh0LWVycm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWludmVyc2VgIHRva2VuXG4kdGV4dC1pbnZlcnNlOiBfZ2V0KCd0ZXh0LWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtb24tY29sb3JgIHRva2VuXG4kdGV4dC1vbi1jb2xvcjogX2dldCgndGV4dC1vbi1jb2xvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1vbi1jb2xvci1kaXNhYmxlZGAgdG9rZW5cbiR0ZXh0LW9uLWNvbG9yLWRpc2FibGVkOiBfZ2V0KCd0ZXh0LW9uLWNvbG9yLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWRpc2FibGVkYCB0b2tlblxuJHRleHQtZGlzYWJsZWQ6IF9nZXQoJ3RleHQtZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstcHJpbWFyeWAgdG9rZW5cbiRsaW5rLXByaW1hcnk6IF9nZXQoJ2xpbmstcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1wcmltYXJ5LWhvdmVyYCB0b2tlblxuJGxpbmstcHJpbWFyeS1ob3ZlcjogX2dldCgnbGluay1wcmltYXJ5LWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXNlY29uZGFyeWAgdG9rZW5cbiRsaW5rLXNlY29uZGFyeTogX2dldCgnbGluay1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS12aXNpdGVkYCB0b2tlblxuJGxpbmstaW52ZXJzZS12aXNpdGVkOiBfZ2V0KCdsaW5rLWludmVyc2UtdmlzaXRlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay12aXNpdGVkYCB0b2tlblxuJGxpbmstdmlzaXRlZDogX2dldCgnbGluay12aXNpdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2VgIHRva2VuXG4kbGluay1pbnZlcnNlOiBfZ2V0KCdsaW5rLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS1hY3RpdmVgIHRva2VuXG4kbGluay1pbnZlcnNlLWFjdGl2ZTogX2dldCgnbGluay1pbnZlcnNlLWFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLWhvdmVyYCB0b2tlblxuJGxpbmstaW52ZXJzZS1ob3ZlcjogX2dldCgnbGluay1pbnZlcnNlLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLXByaW1hcnlgIHRva2VuXG4kaWNvbi1wcmltYXJ5OiBfZ2V0KCdpY29uLXByaW1hcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tc2Vjb25kYXJ5YCB0b2tlblxuJGljb24tc2Vjb25kYXJ5OiBfZ2V0KCdpY29uLXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1pbnZlcnNlYCB0b2tlblxuJGljb24taW52ZXJzZTogX2dldCgnaWNvbi1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLW9uLWNvbG9yYCB0b2tlblxuJGljb24tb24tY29sb3I6IF9nZXQoJ2ljb24tb24tY29sb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tb24tY29sb3ItZGlzYWJsZWRgIHRva2VuXG4kaWNvbi1vbi1jb2xvci1kaXNhYmxlZDogX2dldCgnaWNvbi1vbi1jb2xvci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1kaXNhYmxlZGAgdG9rZW5cbiRpY29uLWRpc2FibGVkOiBfZ2V0KCdpY29uLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWludGVyYWN0aXZlYCB0b2tlblxuJGljb24taW50ZXJhY3RpdmU6IF9nZXQoJ2ljb24taW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtZXJyb3JgIHRva2VuXG4kc3VwcG9ydC1lcnJvcjogX2dldCgnc3VwcG9ydC1lcnJvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1zdWNjZXNzYCB0b2tlblxuJHN1cHBvcnQtc3VjY2VzczogX2dldCgnc3VwcG9ydC1zdWNjZXNzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXdhcm5pbmdgIHRva2VuXG4kc3VwcG9ydC13YXJuaW5nOiBfZ2V0KCdzdXBwb3J0LXdhcm5pbmcnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtaW5mb2AgdG9rZW5cbiRzdXBwb3J0LWluZm86IF9nZXQoJ3N1cHBvcnQtaW5mbycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1lcnJvci1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtZXJyb3ItaW52ZXJzZTogX2dldCgnc3VwcG9ydC1lcnJvci1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZTogX2dldCgnc3VwcG9ydC1zdWNjZXNzLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtd2FybmluZy1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtd2FybmluZy1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LXdhcm5pbmctaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1pbmZvLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1pbmZvLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtaW5mby1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tbWFqb3JgIHRva2VuXG4kc3VwcG9ydC1jYXV0aW9uLW1ham9yOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tbWFqb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi1taW5vcmAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tbWlub3I6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi1taW5vcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLXVuZGVmaW5lZGAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWJhY2tncm91bmRgIHRva2VuXG4kYWktcG9wb3Zlci1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1wb3BvdmVyLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxYCB0b2tlblxuJGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxOiBfZ2V0KCdhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDJgIHRva2VuXG4kYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDI6IF9nZXQoJ2FpLXBvcG92ZXItc2hhZG93LW91dGVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1pbm5lci1zaGFkb3dgIHRva2VuXG4kYWktaW5uZXItc2hhZG93OiBfZ2V0KCdhaS1pbm5lci1zaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtc3RhcnQtc21gIHRva2VuXG4kYWktYXVyYS1zdGFydC1zbTogX2dldCgnYWktYXVyYS1zdGFydC1zbScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1zdGFydGAgdG9rZW5cbiRhaS1hdXJhLXN0YXJ0OiBfZ2V0KCdhaS1hdXJhLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWVuZGAgdG9rZW5cbiRhaS1hdXJhLWVuZDogX2dldCgnYWktYXVyYS1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLWJhY2tncm91bmQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1zdGFydGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLXN0YXJ0OiBfZ2V0KCdhaS1hdXJhLWhvdmVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLWVuZGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLWVuZDogX2dldCgnYWktYXVyYS1ob3Zlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1zdHJvbmdgIHRva2VuXG4kYWktYm9yZGVyLXN0cm9uZzogX2dldCgnYWktYm9yZGVyLXN0cm9uZycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLXN0YXJ0YCB0b2tlblxuJGFpLWJvcmRlci1zdGFydDogX2dldCgnYWktYm9yZGVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItZW5kYCB0b2tlblxuJGFpLWJvcmRlci1lbmQ6IF9nZXQoJ2FpLWJvcmRlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWRyb3Atc2hhZG93YCB0b2tlblxuJGFpLWRyb3Atc2hhZG93OiBfZ2V0KCdhaS1kcm9wLXNoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktc2tlbGV0b24tYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1za2VsZXRvbi1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1za2VsZXRvbi1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmRgIHRva2VuXG4kYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kOiBfZ2V0KFxuICAnYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLW92ZXJsYXlgIHRva2VuXG4kYWktb3ZlcmxheTogX2dldCgnYWktb3ZlcmxheScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1jZW50ZXJgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1jZW50ZXI6IF9nZXQoJ2FpLXBvcG92ZXItY2FyZXQtY2VudGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbWAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbTogX2dldCgnYWktcG9wb3Zlci1jYXJldC1ib3R0b20nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmRgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZDogX2dldChcbiAgJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9uczogX2dldChcbiAgJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9ucydcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1iYWNrZ3JvdW5kYCB0b2tlblxuJGNoYXQtcHJvbXB0LWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJvcmRlci1zdGFydGAgdG9rZW5cbiRjaGF0LXByb21wdC1ib3JkZXItc3RhcnQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJvcmRlci1zdGFydCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYm9yZGVyLWVuZGAgdG9rZW5cbiRjaGF0LXByb21wdC1ib3JkZXItZW5kOiBfZ2V0KCdjaGF0LXByb21wdC1ib3JkZXItZW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS11c2VyYCB0b2tlblxuJGNoYXQtYnViYmxlLXVzZXI6IF9nZXQoJ2NoYXQtYnViYmxlLXVzZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLWFnZW50YCB0b2tlblxuJGNoYXQtYnViYmxlLWFnZW50OiBfZ2V0KCdjaGF0LWJ1YmJsZS1hZ2VudCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtYm9yZGVyYCB0b2tlblxuJGNoYXQtYnViYmxlLWJvcmRlcjogX2dldCgnY2hhdC1idWJibGUtYm9yZGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci1ib3RgIHRva2VuXG4kY2hhdC1hdmF0YXItYm90OiBfZ2V0KCdjaGF0LWF2YXRhci1ib3QnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLWFnZW50YCB0b2tlblxuJGNoYXQtYXZhdGFyLWFnZW50OiBfZ2V0KCdjaGF0LWF2YXRhci1hZ2VudCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItdXNlcmAgdG9rZW5cbiRjaGF0LWF2YXRhci11c2VyOiBfZ2V0KCdjaGF0LWF2YXRhci11c2VyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXNoZWxsLWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1zaGVsbC1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LXNoZWxsLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtaGVhZGVyLWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1oZWFkZXItYmFja2dyb3VuZDogX2dldCgnY2hhdC1oZWFkZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b25gIHRva2VuXG4kY2hhdC1idXR0b246IF9nZXQoJ2NoYXQtYnV0dG9uJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1ob3ZlcmAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1ob3ZlcjogX2dldCgnY2hhdC1idXR0b24taG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXRleHQtaG92ZXJgIHRva2VuXG4kY2hhdC1idXR0b24tdGV4dC1ob3ZlcjogX2dldCgnY2hhdC1idXR0b24tdGV4dC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tYWN0aXZlYCB0b2tlblxuJGNoYXQtYnV0dG9uLWFjdGl2ZTogX2dldCgnY2hhdC1idXR0b24tYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1zZWxlY3RlZGAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1zZWxlY3RlZDogX2dldCgnY2hhdC1idXR0b24tc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXRleHQtc2VsZWN0ZWRgIHRva2VuXG4kY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZDogX2dldCgnY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaGlnaGxpZ2h0YCB0b2tlblxuJGhpZ2hsaWdodDogX2dldCgnaGlnaGxpZ2h0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBvdmVybGF5YCB0b2tlblxuJG92ZXJsYXk6IF9nZXQoJ292ZXJsYXknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRvZ2dsZS1vZmZgIHRva2VuXG4kdG9nZ2xlLW9mZjogX2dldCgndG9nZ2xlLW9mZicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2hhZG93YCB0b2tlblxuJHNoYWRvdzogX2dldCgnc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1c2AgdG9rZW5cbiRmb2N1czogX2dldCgnZm9jdXMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzLWluc2V0YCB0b2tlblxuJGZvY3VzLWluc2V0OiBfZ2V0KCdmb2N1cy1pbnNldCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXMtaW52ZXJzZWAgdG9rZW5cbiRmb2N1cy1pbnZlcnNlOiBfZ2V0KCdmb2N1cy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBza2VsZXRvbi1iYWNrZ3JvdW5kYCB0b2tlblxuJHNrZWxldG9uLWJhY2tncm91bmQ6IF9nZXQoJ3NrZWxldG9uLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNrZWxldG9uLWVsZW1lbnRgIHRva2VuXG4kc2tlbGV0b24tZWxlbWVudDogX2dldCgnc2tlbGV0b24tZWxlbWVudCcpICFkZWZhdWx0O1xuIiwiLy8gQ29kZSBnZW5lcmF0ZWQgYnkgQGNhcmJvbi9sYXlvdXQuIERPIE5PVCBFRElULlxuLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDE6IDAuMTI1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTAyOiAwLjI1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTAzOiAwLjVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDQ6IDAuNzVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDY6IDEuNXJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wNzogMnJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wODogMi41cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTA5OiAzcmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEwOiA0cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTExOiA1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEyOiA2cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEzOiAxMHJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE1hcFxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZzogKFxuICBzcGFjaW5nLTAxOiAkc3BhY2luZy0wMSxcbiAgc3BhY2luZy0wMjogJHNwYWNpbmctMDIsXG4gIHNwYWNpbmctMDM6ICRzcGFjaW5nLTAzLFxuICBzcGFjaW5nLTA0OiAkc3BhY2luZy0wNCxcbiAgc3BhY2luZy0wNTogJHNwYWNpbmctMDUsXG4gIHNwYWNpbmctMDY6ICRzcGFjaW5nLTA2LFxuICBzcGFjaW5nLTA3OiAkc3BhY2luZy0wNyxcbiAgc3BhY2luZy0wODogJHNwYWNpbmctMDgsXG4gIHNwYWNpbmctMDk6ICRzcGFjaW5nLTA5LFxuICBzcGFjaW5nLTEwOiAkc3BhY2luZy0xMCxcbiAgc3BhY2luZy0xMTogJHNwYWNpbmctMTEsXG4gIHNwYWNpbmctMTI6ICRzcGFjaW5nLTEyLFxuICBzcGFjaW5nLTEzOiAkc3BhY2luZy0xMyxcbik7XG4iLCIvL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQHVzZSAnLi4vY29uZmlnJyBhcyAqO1xuQHVzZSAnQGNhcmJvbi90aGVtZXMvc2Nzcy9jb25maWcnIHdpdGggKFxuICAkcHJlZml4OiAkcHJlZml4XG4pO1xuQHVzZSAnLi4vY29tcGF0L3RoZW1lcycgYXMgY29tcGF0O1xuQHVzZSAnLi4vdGhlbWVzJztcblxuQGZvcndhcmQgJ0BjYXJib24vdGhlbWVzL3Njc3MvdGhlbWUnIHdpdGggKFxuICAkZmFsbGJhY2s6IHRoZW1lcy4kd2hpdGUgIWRlZmF1bHQsXG4gICR0aGVtZTogY29tcGF0LiR3aGl0ZSAhZGVmYXVsdFxuKTtcbkBmb3J3YXJkICdAY2FyYm9uL3RoZW1lcy9zY3NzL3Rva2Vucyc7XG5cbkB1c2UgJ0BjYXJib24vdGhlbWVzL3Njc3MvdG9rZW5zJztcbkB1c2UgJ0BjYXJib24vdGhlbWVzL3Njc3MvdGhlbWUnO1xuQHVzZSAnLi4vdXRpbGl0aWVzL2N1c3RvbS1wcm9wZXJ0eSc7XG5cbi8vIExheWVyIHNldHNcbiRsYXllcjogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyJyk7XG4kbGF5ZXItYWN0aXZlOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItYWN0aXZlJyk7XG4kbGF5ZXItYmFja2dyb3VuZDogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLWJhY2tncm91bmQnKTtcbiRsYXllci1ob3ZlcjogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLWhvdmVyJyk7XG4kbGF5ZXItc2VsZWN0ZWQ6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1zZWxlY3RlZCcpO1xuJGxheWVyLXNlbGVjdGVkLWhvdmVyOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItc2VsZWN0ZWQtaG92ZXInKTtcbiRsYXllci1hY2NlbnQ6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1hY2NlbnQnKTtcbiRsYXllci1hY2NlbnQtaG92ZXI6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1hY2NlbnQtaG92ZXInKTtcbiRsYXllci1hY2NlbnQtYWN0aXZlOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItYWNjZW50LWFjdGl2ZScpO1xuXG4kZmllbGQ6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdmaWVsZCcpO1xuJGZpZWxkLWhvdmVyOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignZmllbGQtaG92ZXInKTtcblxuJGJvcmRlci1zdWJ0bGU6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdib3JkZXItc3VidGxlJyk7XG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZDogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQnKTtcbiRib3JkZXItc3Ryb25nOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignYm9yZGVyLXN0cm9uZycpO1xuJGJvcmRlci10aWxlOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignYm9yZGVyLXRpbGUnKTtcbiJdfQ== */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(u));var R=`/**
 * Button Reset Mixin
 * Provides consistent button styling across all Carbon-themed components
 * @param {boolean} $include-focus - Whether to include focus styles (default: true)
 */
/**
 * Button Interactive States
 * Applies hover and active states using Carbon theme tokens
 * @param {string} $layer - Layer level for the component (default: 'background')
 */
/**
 * Complete Button Styling
 * Combines reset and interactive states for buttons
 * @param {boolean} $include-focus - Include focus styles
 * @param {string} $layer - Layer level for interactive states
 */
/**
 * Button Sizing
 * Applies consistent minimum dimensions using Carbon spacing tokens
 * @param {string} $size - Size level (small: 06, medium: 07, large: 08, xlarge: 10)
 */
/**
 * Input Field Styling
 * Provides consistent styling for input elements (text, textarea, select)
 * @param {string} $layer - Layer level for the input background
 */
/**
 * Border Bottom Input
 * Adds bottom border for text inputs following Carbon design pattern
 */
/**
 * Focus State
 * Applies consistent focus styling across components
 * @param {string} $type - Type of focus (inset, outline)
 */
/**
 * Tab Button Styling
 * Consistent styling for tab buttons with active state indicator
 */
/**
 * Active Tab Indicator
 * Applies bottom border to indicate active tab state
 */
/**
 * Badge/Tag Styling
 * For count indicators and tags
 * @param {boolean} $active - Whether the badge is on an active element
 */
/**
 * SIDEBAR/NAVIGATION STYLES
 * Styles for the Storybook sidebar navigation panel
 * Includes header, search, tree navigation, and interactive elements
 */
nav.sidebar-container {
  background-color: var(--cds-layer-01, #f4f4f4);
  /**
   * SVG Icon Colors
   * Default fill color for sidebar icons
   */
}
nav.sidebar-container svg > path {
  fill: var(--cds-text-secondary, #525252);
}
nav.sidebar-container {
  /**
   * Sidebar Header
   * Top section with logo and action buttons
   */
}
nav.sidebar-container .sidebar-header button {
  min-block-size: 2rem;
  min-inline-size: 2rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  box-shadow: none;
}
nav.sidebar-container .sidebar-header button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
nav.sidebar-container .sidebar-header button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
nav.sidebar-container .sidebar-header button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
nav.sidebar-container .sidebar-header button {
  /**
   * Remove pseudo-element shadows
   * Clears unwanted default styling
   */
}
nav.sidebar-container .sidebar-header button::after, nav.sidebar-container .sidebar-header button::before {
  box-shadow: none;
}
nav.sidebar-container {
  /**
   * Recently Opened Search Results
   * Text color for recent items in search dropdown
   */
}
nav.sidebar-container .search-result-recentlyOpened * {
  color: var(--cds-text-secondary, #525252);
}
nav.sidebar-container {
  /**
   * Search Field
   * Combobox input for filtering stories
   */
}
nav.sidebar-container [role=combobox].search-field {
  border-radius: 0;
  box-shadow: inset 0 -1px 0 var(--cds-border-strong-01, #8d8d8d);
  background-color: var(--cds-layer-02, #ffffff);
  padding: 0;
  /**
   * Search Text & Placeholder
   * Color for input text and placeholder
   */
}
nav.sidebar-container [role=combobox].search-field *,
nav.sidebar-container [role=combobox].search-field ::placeholder {
  color: var(--cds-text-secondary, #525252);
}
nav.sidebar-container [role=combobox].search-field {
  /**
   * Focus State for Search Input
   * Shows focus when typing in search field
   */
}
nav.sidebar-container [role=combobox].search-field:has(input:focus) {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
nav.sidebar-container [role=combobox].search-field {
  /**
   * Search Field Buttons
   * Clear button and other search controls
   */
}
nav.sidebar-container [role=combobox].search-field button {
  min-block-size: 2rem;
  min-inline-size: 2rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  box-shadow: none;
}
nav.sidebar-container [role=combobox].search-field button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
nav.sidebar-container [role=combobox].search-field button:hover {
  background-color: var(--cds-layer-hover-02, #e8e8e8) !important;
}
nav.sidebar-container [role=combobox].search-field button:active {
  background-color: var(--cds-layer-active-02, #c6c6c6) !important;
}
nav.sidebar-container [role=combobox].search-field {
  /**
   * Remove gap from last child
   * Layout adjustment for search controls
   */
}
nav.sidebar-container [role=combobox].search-field :last-child {
  gap: 0;
}
nav.sidebar-container [role=combobox].search-field {
  /**
   * Search Suggestions/Results Buttons
   * Interactive elements in search dropdown
   */
}
nav.sidebar-container [role=combobox].search-field + div button {
  min-block-size: 2rem;
  min-inline-size: 2rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  box-shadow: none;
}
nav.sidebar-container [role=combobox].search-field + div button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
nav.sidebar-container [role=combobox].search-field + div button:hover {
  background-color: var(--cds-layer-hover-02, #e8e8e8) !important;
}
nav.sidebar-container [role=combobox].search-field + div button:active {
  background-color: var(--cds-layer-active-02, #c6c6c6) !important;
}
nav.sidebar-container [role=combobox].search-field + div button {
  box-shadow: none;
}
nav.sidebar-container {
  /**
   * Sidebar Subheadings
   * Category headers in the navigation tree
   */
}
nav.sidebar-container .sidebar-subheading {
  color: var(--cds-text-secondary, #525252);
}
nav.sidebar-container .sidebar-subheading button {
  min-block-size: 2rem;
  min-inline-size: 2rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  box-shadow: none;
}
nav.sidebar-container .sidebar-subheading button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
nav.sidebar-container .sidebar-subheading button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
nav.sidebar-container .sidebar-subheading button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
nav.sidebar-container {
  /**
   * Sidebar Navigation Items
   * Individual story/folder items in the tree
   */
}
nav.sidebar-container .sidebar-item {
  --tree-node-background-hover: var(--cds-layer-hover-02) !important;
  border-radius: 0;
  /**
   * Navigation Links
   * Story title links
   */
}
nav.sidebar-container .sidebar-item a {
  color: var(--cds-text-secondary, #525252) !important;
}
nav.sidebar-container .sidebar-item {
  /**
   * Expandable Items
   * Folders that can be expanded/collapsed
   */
}
nav.sidebar-container .sidebar-item:has([aria-expanded]) {
  background-color: var(--cds-layer-02, #ffffff);
}
nav.sidebar-container .sidebar-item {
  /**
   * Selected/Active Item
   * Currently viewed story with left border indicator
   */
}
nav.sidebar-container .sidebar-item[data-selected=true] {
  background-color: var(--cds-background-selected, rgba(141, 141, 141, 0.2));
  box-shadow: inset 0.25rem 0 0 0 var(--cds-border-interactive, #0f62fe);
}
nav.sidebar-container .sidebar-item[data-selected=true]:hover {
  background-color: var(--cds-layer-hover-02, #e8e8e8);
}
nav.sidebar-container .sidebar-item[data-selected=true] svg {
  color: var(--cds-text-secondary, #525252) !important;
}
nav.sidebar-container .sidebar-item {
  /**
   * Interactive States
   * Hover, active, and focus states for navigation items
   */
}
nav.sidebar-container .sidebar-item:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
nav.sidebar-container .sidebar-item:hover {
  background-color: var(--cds-layer-hover-02, #e8e8e8) !important;
}
nav.sidebar-container .sidebar-item:active {
  background-color: var(--cds-layer-active-02, #c6c6c6) !important;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbIl9taXhpbnMuc2NzcyIsInNpZGVuYXYuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3RoZW1lcy9zY3NzL2dlbmVyYXRlZC9fdG9rZW5zLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi9sYXlvdXQvc2Nzcy9nZW5lcmF0ZWQvX3NwYWNpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEJBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQ3JKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7RUFDRSxrQkNrQ1M7QURoQ1Q7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRSxNQzBMYTs7QURsTWpCO0FBV0U7QUFBQTtBQUFBO0FBQUE7O0FBS0U7RUQwQ0EsZ0JHNUJTO0VINkJULGlCRzdCUztFSGhDWDtFQUNBO0VBQ0E7RUFDQTs7QUFHRTtFQUNFOztBQVdKO0VBTUk7O0FBSUo7RUFNSTs7QUNoQkY7QUFJRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUVFOztBQTFCUjtBQStCRTtBQUFBO0FBQUE7QUFBQTs7QUFLRTtFQUNFLE9DNkpXOztBRGxNakI7QUF5Q0U7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRTtFQUNBO0VBQ0Esa0JDS087RURKUDtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7RUFFRSxPQ3lJVzs7QURySmY7QUFlRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFRGlEQTs7QUNwRUY7QUF1QkU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RURkQSxnQkc1QlM7RUg2QlQsaUJHN0JTO0VIaENYO0VBQ0E7RUFDQTtFQUNBOztBQUdFO0VBQ0U7O0FBV0o7RUFJSTs7QUFNSjtFQUlJOztBQ2VKO0FBZ0NFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0U7O0FBckNKO0FBd0NFO0FBQUE7QUFBQTtBQUFBOztBQUtFO0VEaENGLGdCRzVCUztFSDZCVCxpQkc3QlM7RUhoQ1g7RUFDQTtFQUNBO0VBQ0E7O0FBR0U7RUFDRTs7QUFXSjtFQUlJOztBQU1KO0VBSUk7O0FDNERBO0VBR0U7O0FBN0ZSO0FBa0dFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0UsT0MyRmE7O0FEekZiO0VEL0NBLGdCRzVCUztFSDZCVCxpQkc3QlM7RUhoQ1g7RUFDQTtFQUNBO0VBQ0E7O0FBR0U7RUFDRTs7QUFXSjtFQU1JOztBQUlKO0VBTUk7O0FDaENOO0FBK0dFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0U7RUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0U7O0FBVEo7QUFZRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFLGtCQy9FSzs7QUQ4RFQ7QUFvQkU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRSxrQkMzSGdCO0VENEhoQjs7QUFFQTtFQUNFLGtCQ2xGUzs7QURxRlg7RUFDRTs7QUFqQ047QUFxQ0U7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUQzQ0E7O0FBakdGO0VBSUk7O0FBTUo7RUFJSSIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJAY2FyYm9uL2xheW91dFwiIGFzICo7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZVwiIGFzICo7XG5cbi8qKlxuICogQnV0dG9uIFJlc2V0IE1peGluXG4gKiBQcm92aWRlcyBjb25zaXN0ZW50IGJ1dHRvbiBzdHlsaW5nIGFjcm9zcyBhbGwgQ2FyYm9uLXRoZW1lZCBjb21wb25lbnRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICRpbmNsdWRlLWZvY3VzIC0gV2hldGhlciB0byBpbmNsdWRlIGZvY3VzIHN0eWxlcyAoZGVmYXVsdDogdHJ1ZSlcbiAqL1xuQG1peGluIGJ1dHRvbi1yZXNldCgkaW5jbHVkZS1mb2N1czogdHJ1ZSkge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICR0ZXh0LXByaW1hcnkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcblxuICBAaWYgJGluY2x1ZGUtZm9jdXMge1xuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICRmb2N1cyAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEJ1dHRvbiBJbnRlcmFjdGl2ZSBTdGF0ZXNcbiAqIEFwcGxpZXMgaG92ZXIgYW5kIGFjdGl2ZSBzdGF0ZXMgdXNpbmcgQ2FyYm9uIHRoZW1lIHRva2Vuc1xuICogQHBhcmFtIHtzdHJpbmd9ICRsYXllciAtIExheWVyIGxldmVsIGZvciB0aGUgY29tcG9uZW50IChkZWZhdWx0OiAnYmFja2dyb3VuZCcpXG4gKi9cbkBtaXhpbiBidXR0b24tc3RhdGVzKCRsYXllcjogJ2JhY2tncm91bmQnKSB7XG4gICY6aG92ZXIge1xuICAgIEBpZiAkbGF5ZXIgPT0gJ2xheWVyLTAxJyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItaG92ZXItMDEgIWltcG9ydGFudDtcbiAgICB9IEBlbHNlIGlmICRsYXllciA9PSAnbGF5ZXItMDInIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1ob3Zlci0wMiAhaW1wb3J0YW50O1xuICAgIH0gQGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtaG92ZXIgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgQGlmICRsYXllciA9PSAnbGF5ZXItMDEnIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1hY3RpdmUtMDEgIWltcG9ydGFudDtcbiAgICB9IEBlbHNlIGlmICRsYXllciA9PSAnbGF5ZXItMDInIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1hY3RpdmUtMDIgIWltcG9ydGFudDtcbiAgICB9IEBlbHNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWFjdGl2ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvbXBsZXRlIEJ1dHRvbiBTdHlsaW5nXG4gKiBDb21iaW5lcyByZXNldCBhbmQgaW50ZXJhY3RpdmUgc3RhdGVzIGZvciBidXR0b25zXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICRpbmNsdWRlLWZvY3VzIC0gSW5jbHVkZSBmb2N1cyBzdHlsZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSAkbGF5ZXIgLSBMYXllciBsZXZlbCBmb3IgaW50ZXJhY3RpdmUgc3RhdGVzXG4gKi9cbkBtaXhpbiBidXR0b24tY29tcGxldGUoJGluY2x1ZGUtZm9jdXM6IHRydWUsICRsYXllcjogJ2JhY2tncm91bmQnKSB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1yZXNldCgkaW5jbHVkZS1mb2N1cyk7XG4gIEBpbmNsdWRlIGJ1dHRvbi1zdGF0ZXMoJGxheWVyKTtcbn1cblxuLyoqXG4gKiBCdXR0b24gU2l6aW5nXG4gKiBBcHBsaWVzIGNvbnNpc3RlbnQgbWluaW11bSBkaW1lbnNpb25zIHVzaW5nIENhcmJvbiBzcGFjaW5nIHRva2Vuc1xuICogQHBhcmFtIHtzdHJpbmd9ICRzaXplIC0gU2l6ZSBsZXZlbCAoc21hbGw6IDA2LCBtZWRpdW06IDA3LCBsYXJnZTogMDgsIHhsYXJnZTogMTApXG4gKi9cbkBtaXhpbiBidXR0b24tc2l6ZSgkc2l6ZTogJ21lZGl1bScpIHtcbiAgQGlmICRzaXplID09ICdzbWFsbCcge1xuICAgIG1pbi1ibG9jay1zaXplOiAkc3BhY2luZy0wNjtcbiAgICBtaW4taW5saW5lLXNpemU6ICRzcGFjaW5nLTA2O1xuICB9IEBlbHNlIGlmICRzaXplID09ICdtZWRpdW0nIHtcbiAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMDc7XG4gICAgbWluLWlubGluZS1zaXplOiAkc3BhY2luZy0wNztcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSAnbGFyZ2UnIHtcbiAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMDg7XG4gICAgbWluLWlubGluZS1zaXplOiAkc3BhY2luZy0wODtcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSAneGxhcmdlJyB7XG4gICAgbWluLWJsb2NrLXNpemU6ICRzcGFjaW5nLTEwO1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogJHNwYWNpbmctMTA7XG4gIH1cbn1cblxuLyoqXG4gKiBJbnB1dCBGaWVsZCBTdHlsaW5nXG4gKiBQcm92aWRlcyBjb25zaXN0ZW50IHN0eWxpbmcgZm9yIGlucHV0IGVsZW1lbnRzICh0ZXh0LCB0ZXh0YXJlYSwgc2VsZWN0KVxuICogQHBhcmFtIHtzdHJpbmd9ICRsYXllciAtIExheWVyIGxldmVsIGZvciB0aGUgaW5wdXQgYmFja2dyb3VuZFxuICovXG5AbWl4aW4gaW5wdXQtZmllbGQoJGxheWVyOiAnbGF5ZXItMDEnKSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgQGlmICRsYXllciA9PSAnbGF5ZXItMDInIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItMDI7XG4gIH0gQGVsc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci0wMTtcbiAgfVxuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xuICB9XG5cbiAgQGluY2x1ZGUgYnV0dG9uLXN0YXRlcygkbGF5ZXIpO1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAkZm9jdXM7XG4gIH1cbn1cblxuLyoqXG4gKiBCb3JkZXIgQm90dG9tIElucHV0XG4gKiBBZGRzIGJvdHRvbSBib3JkZXIgZm9yIHRleHQgaW5wdXRzIGZvbGxvd2luZyBDYXJib24gZGVzaWduIHBhdHRlcm5cbiAqL1xuQG1peGluIGlucHV0LWJvcmRlci1ib3R0b20ge1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAkYm9yZGVyLXN0cm9uZy0wMTtcbn1cblxuLyoqXG4gKiBGb2N1cyBTdGF0ZVxuICogQXBwbGllcyBjb25zaXN0ZW50IGZvY3VzIHN0eWxpbmcgYWNyb3NzIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSAkdHlwZSAtIFR5cGUgb2YgZm9jdXMgKGluc2V0LCBvdXRsaW5lKVxuICovXG5AbWl4aW4gZm9jdXMtc3RhdGUoJHR5cGU6ICdpbnNldCcpIHtcbiAgQGlmICR0eXBlID09ICdvdXRsaW5lJyB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkICRmb2N1cztcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgfSBAZWxzZSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICRmb2N1cyAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qKlxuICogVGFiIEJ1dHRvbiBTdHlsaW5nXG4gKiBDb25zaXN0ZW50IHN0eWxpbmcgZm9yIHRhYiBidXR0b25zIHdpdGggYWN0aXZlIHN0YXRlIGluZGljYXRvclxuICovXG5AbWl4aW4gdGFiLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCdsYXJnZScpO1xuICBAaW5jbHVkZSBidXR0b24tY29tcGxldGUoZmFsc2UpO1xuICBmb250LXdlaWdodDogdW5zZXQ7XG5cbiAgJjpmb2N1cyB7XG4gICAgQGluY2x1ZGUgZm9jdXMtc3RhdGUoJ291dGxpbmUnKTtcbiAgICBib3JkZXItd2lkdGg6IDJweCAwO1xuICAgIGJvcmRlci1jb2xvcjogdW5zZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBBY3RpdmUgVGFiIEluZGljYXRvclxuICogQXBwbGllcyBib3R0b20gYm9yZGVyIHRvIGluZGljYXRlIGFjdGl2ZSB0YWIgc3RhdGVcbiAqL1xuQG1peGluIHRhYi1hY3RpdmUge1xuICBib3JkZXItd2lkdGg6IDJweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRib3JkZXItaW50ZXJhY3RpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKipcbiAqIEJhZGdlL1RhZyBTdHlsaW5nXG4gKiBGb3IgY291bnQgaW5kaWNhdG9ycyBhbmQgdGFnc1xuICogQHBhcmFtIHtib29sZWFufSAkYWN0aXZlIC0gV2hldGhlciB0aGUgYmFkZ2UgaXMgb24gYW4gYWN0aXZlIGVsZW1lbnRcbiAqL1xuQG1peGluIGJhZGdlKCRhY3RpdmU6IGZhbHNlKSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgQGlmICRhY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItaW50ZXJhY3RpdmU7XG4gICAgY29sb3I6ICR0ZXh0LW9uLWNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLXN1YnRsZTtcbiAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xuICB9XG59XG4iLCJAdXNlIFwiQGNhcmJvbi9sYXlvdXRcIiBhcyAqO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvdGhlbWVcIiBhcyAqO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvY29tcG9uZW50cy9idXR0b24vdG9rZW5zXCIgYXMgYnV0dG9uLXRva2VucztcbkB1c2UgXCJtaXhpbnNcIiBhcyAqO1xuXG4vKipcbiAqIFNJREVCQVIvTkFWSUdBVElPTiBTVFlMRVNcbiAqIFN0eWxlcyBmb3IgdGhlIFN0b3J5Ym9vayBzaWRlYmFyIG5hdmlnYXRpb24gcGFuZWxcbiAqIEluY2x1ZGVzIGhlYWRlciwgc2VhcmNoLCB0cmVlIG5hdmlnYXRpb24sIGFuZCBpbnRlcmFjdGl2ZSBlbGVtZW50c1xuICovXG5cbm5hdi5zaWRlYmFyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsYXllci0wMTtcblxuICAvKipcbiAgICogU1ZHIEljb24gQ29sb3JzXG4gICAqIERlZmF1bHQgZmlsbCBjb2xvciBmb3Igc2lkZWJhciBpY29uc1xuICAgKi9cbiAgc3ZnID4gcGF0aCB7XG4gICAgZmlsbDogJHRleHQtc2Vjb25kYXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIFNpZGViYXIgSGVhZGVyXG4gICAqIFRvcCBzZWN0aW9uIHdpdGggbG9nbyBhbmQgYWN0aW9uIGJ1dHRvbnNcbiAgICovXG4gIC5zaWRlYmFyLWhlYWRlciB7XG4gICAgYnV0dG9uIHtcbiAgICAgIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCdtZWRpdW0nKTtcbiAgICAgIEBpbmNsdWRlIGJ1dHRvbi1jb21wbGV0ZTtcblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgcHNldWRvLWVsZW1lbnQgc2hhZG93c1xuICAgICAgICogQ2xlYXJzIHVud2FudGVkIGRlZmF1bHQgc3R5bGluZ1xuICAgICAgICovXG4gICAgICAmOjphZnRlcixcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlY2VudGx5IE9wZW5lZCBTZWFyY2ggUmVzdWx0c1xuICAgKiBUZXh0IGNvbG9yIGZvciByZWNlbnQgaXRlbXMgaW4gc2VhcmNoIGRyb3Bkb3duXG4gICAqL1xuICAuc2VhcmNoLXJlc3VsdC1yZWNlbnRseU9wZW5lZCB7XG4gICAgKiB7XG4gICAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggRmllbGRcbiAgICogQ29tYm9ib3ggaW5wdXQgZm9yIGZpbHRlcmluZyBzdG9yaWVzXG4gICAqL1xuICBbcm9sZT1cImNvbWJvYm94XCJdLnNlYXJjaC1maWVsZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAkYm9yZGVyLXN0cm9uZy0wMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItMDI7XG4gICAgcGFkZGluZzogMDtcblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCBUZXh0ICYgUGxhY2Vob2xkZXJcbiAgICAgKiBDb2xvciBmb3IgaW5wdXQgdGV4dCBhbmQgcGxhY2Vob2xkZXJcbiAgICAgKi9cbiAgICAqLFxuICAgIDo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb2N1cyBTdGF0ZSBmb3IgU2VhcmNoIElucHV0XG4gICAgICogU2hvd3MgZm9jdXMgd2hlbiB0eXBpbmcgaW4gc2VhcmNoIGZpZWxkXG4gICAgICovXG4gICAgJjpoYXMoaW5wdXQ6Zm9jdXMpIHtcbiAgICAgIEBpbmNsdWRlIGZvY3VzLXN0YXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCBGaWVsZCBCdXR0b25zXG4gICAgICogQ2xlYXIgYnV0dG9uIGFuZCBvdGhlciBzZWFyY2ggY29udHJvbHNcbiAgICAgKi9cbiAgICBidXR0b24ge1xuICAgICAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJ21lZGl1bScpO1xuICAgICAgQGluY2x1ZGUgYnV0dG9uLWNvbXBsZXRlKHRydWUsICdsYXllci0wMicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBnYXAgZnJvbSBsYXN0IGNoaWxkXG4gICAgICogTGF5b3V0IGFkanVzdG1lbnQgZm9yIHNlYXJjaCBjb250cm9sc1xuICAgICAqL1xuICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgIGdhcDogMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggU3VnZ2VzdGlvbnMvUmVzdWx0cyBCdXR0b25zXG4gICAgICogSW50ZXJhY3RpdmUgZWxlbWVudHMgaW4gc2VhcmNoIGRyb3Bkb3duXG4gICAgICovXG4gICAgKyBkaXYge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJ21lZGl1bScpO1xuICAgICAgICBAaW5jbHVkZSBidXR0b24tY29tcGxldGUodHJ1ZSwgJ2xheWVyLTAyJyk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNpZGViYXIgU3ViaGVhZGluZ3NcbiAgICogQ2F0ZWdvcnkgaGVhZGVycyBpbiB0aGUgbmF2aWdhdGlvbiB0cmVlXG4gICAqL1xuICAuc2lkZWJhci1zdWJoZWFkaW5nIHtcbiAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCdtZWRpdW0nKTtcbiAgICAgIEBpbmNsdWRlIGJ1dHRvbi1jb21wbGV0ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2lkZWJhciBOYXZpZ2F0aW9uIEl0ZW1zXG4gICAqIEluZGl2aWR1YWwgc3RvcnkvZm9sZGVyIGl0ZW1zIGluIHRoZSB0cmVlXG4gICAqL1xuICAuc2lkZWJhci1pdGVtIHtcbiAgICAtLXRyZWUtbm9kZS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1jZHMtbGF5ZXItaG92ZXItMDIpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gTGlua3NcbiAgICAgKiBTdG9yeSB0aXRsZSBsaW5rc1xuICAgICAqL1xuICAgIGEge1xuICAgICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGFuZGFibGUgSXRlbXNcbiAgICAgKiBGb2xkZXJzIHRoYXQgY2FuIGJlIGV4cGFuZGVkL2NvbGxhcHNlZFxuICAgICAqL1xuICAgICY6aGFzKFthcmlhLWV4cGFuZGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLTAyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdGVkL0FjdGl2ZSBJdGVtXG4gICAgICogQ3VycmVudGx5IHZpZXdlZCBzdG9yeSB3aXRoIGxlZnQgYm9yZGVyIGluZGljYXRvclxuICAgICAqL1xuICAgICZbZGF0YS1zZWxlY3RlZD1cInRydWVcIl0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtc2VsZWN0ZWQ7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAkc3BhY2luZy0wMiAwIDAgMCAkYm9yZGVyLWludGVyYWN0aXZlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLWhvdmVyLTAyO1xuICAgICAgfVxuXG4gICAgICBzdmcge1xuICAgICAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJhY3RpdmUgU3RhdGVzXG4gICAgICogSG92ZXIsIGFjdGl2ZSwgYW5kIGZvY3VzIHN0YXRlcyBmb3IgbmF2aWdhdGlvbiBpdGVtc1xuICAgICAqL1xuICAgICY6Zm9jdXMge1xuICAgICAgQGluY2x1ZGUgZm9jdXMtc3RhdGU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgYnV0dG9uLXN0YXRlcygnbGF5ZXItMDInKTtcbiAgfVxufVxuIiwiLy8gQ29kZSBnZW5lcmF0ZWQgYnkgQGNhcmJvbi90aGVtZXMuIERPIE5PVCBFRElULlxuLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvbmZpZyc7XG5AdXNlICcuLi90aGVtZSc7XG5cbi8vLyBJbnRlcm5hbCBoZWxwZXIgZm9yIGdlbmVyYXRpbmcgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG5AZnVuY3Rpb24gX2dldCgkdG9rZW4pIHtcbiAgQGlmIGNvbmZpZy4kdXNlLWZhbGxiYWNrLXZhbHVlID09IGZhbHNlIHtcbiAgICBAcmV0dXJuIHZhcigtLSN7Y29uZmlnLiRwcmVmaXh9LSN7JHRva2VufSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skdG9rZW59LCAje3RoZW1lLmdldCgkdG9rZW4pfSk7XG4gIH1cbn1cblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmRgIHRva2VuXG4kYmFja2dyb3VuZDogX2dldCgnYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1hY3RpdmVgIHRva2VuXG4kYmFja2dyb3VuZC1hY3RpdmU6IF9nZXQoJ2JhY2tncm91bmQtYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLXNlbGVjdGVkYCB0b2tlblxuJGJhY2tncm91bmQtc2VsZWN0ZWQ6IF9nZXQoJ2JhY2tncm91bmQtc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtc2VsZWN0ZWQtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWJyYW5kYCB0b2tlblxuJGJhY2tncm91bmQtYnJhbmQ6IF9nZXQoJ2JhY2tncm91bmQtYnJhbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtaW52ZXJzZWAgdG9rZW5cbiRiYWNrZ3JvdW5kLWludmVyc2U6IF9nZXQoJ2JhY2tncm91bmQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtaW52ZXJzZS1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wMWAgdG9rZW5cbiRsYXllci0wMTogX2dldCgnbGF5ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wMWAgdG9rZW5cbiRsYXllci1hY3RpdmUtMDE6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wMWAgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAxOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1ob3Zlci0wMTogX2dldCgnbGF5ZXItaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAxYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAxOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDFgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDE6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wMmAgdG9rZW5cbiRsYXllci0wMjogX2dldCgnbGF5ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wMmAgdG9rZW5cbiRsYXllci1hY3RpdmUtMDI6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wMmAgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAyOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1ob3Zlci0wMjogX2dldCgnbGF5ZXItaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAyYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAyOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDJgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDI6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wM2AgdG9rZW5cbiRsYXllci0wMzogX2dldCgnbGF5ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wM2AgdG9rZW5cbiRsYXllci1hY3RpdmUtMDM6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wM2AgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAzOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1ob3Zlci0wMzogX2dldCgnbGF5ZXItaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAzYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAzOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDNgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDM6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1pbnZlcnNlYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWludmVyc2U6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWRpc2FibGVkYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWRpc2FibGVkOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMTogX2dldCgnbGF5ZXItYWNjZW50LTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDE6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDE6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMjogX2dldCgnbGF5ZXItYWNjZW50LTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDI6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDI6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMzogX2dldCgnbGF5ZXItYWNjZW50LTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDM6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDM6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDFgIHRva2VuXG4kZmllbGQtMDE6IF9nZXQoJ2ZpZWxkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wMWAgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMTogX2dldCgnZmllbGQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAyYCB0b2tlblxuJGZpZWxkLTAyOiBfZ2V0KCdmaWVsZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDJgIHRva2VuXG4kZmllbGQtaG92ZXItMDI6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wM2AgdG9rZW5cbiRmaWVsZC0wMzogX2dldCgnZmllbGQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAzYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAzOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaW50ZXJhY3RpdmVgIHRva2VuXG4kaW50ZXJhY3RpdmU6IF9nZXQoJ2ludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAwYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDA6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDAnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDFgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMTogX2dldCgnYm9yZGVyLXN1YnRsZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMWAgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAyYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDI6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDJgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMjogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wM2AgdG9rZW5cbiRib3JkZXItc3VidGxlLTAzOiBfZ2V0KCdib3JkZXItc3VidGxlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAzYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDM6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDFgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMTogX2dldCgnYm9yZGVyLXN0cm9uZy0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wMmAgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAyOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAzYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDM6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAxYCB0b2tlblxuJGJvcmRlci10aWxlLTAxOiBfZ2V0KCdib3JkZXItdGlsZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDJgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDI6IF9nZXQoJ2JvcmRlci10aWxlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wM2AgdG9rZW5cbiRib3JkZXItdGlsZS0wMzogX2dldCgnYm9yZGVyLXRpbGUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1pbnZlcnNlYCB0b2tlblxuJGJvcmRlci1pbnZlcnNlOiBfZ2V0KCdib3JkZXItaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWludGVyYWN0aXZlYCB0b2tlblxuJGJvcmRlci1pbnRlcmFjdGl2ZTogX2dldCgnYm9yZGVyLWludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItZGlzYWJsZWRgIHRva2VuXG4kYm9yZGVyLWRpc2FibGVkOiBfZ2V0KCdib3JkZXItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtcHJpbWFyeWAgdG9rZW5cbiR0ZXh0LXByaW1hcnk6IF9nZXQoJ3RleHQtcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1zZWNvbmRhcnlgIHRva2VuXG4kdGV4dC1zZWNvbmRhcnk6IF9nZXQoJ3RleHQtc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXBsYWNlaG9sZGVyYCB0b2tlblxuJHRleHQtcGxhY2Vob2xkZXI6IF9nZXQoJ3RleHQtcGxhY2Vob2xkZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtaGVscGVyYCB0b2tlblxuJHRleHQtaGVscGVyOiBfZ2V0KCd0ZXh0LWhlbHBlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1lcnJvcmAgdG9rZW5cbiR0ZXh0LWVycm9yOiBfZ2V0KCd0ZXh0LWVycm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWludmVyc2VgIHRva2VuXG4kdGV4dC1pbnZlcnNlOiBfZ2V0KCd0ZXh0LWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtb24tY29sb3JgIHRva2VuXG4kdGV4dC1vbi1jb2xvcjogX2dldCgndGV4dC1vbi1jb2xvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1vbi1jb2xvci1kaXNhYmxlZGAgdG9rZW5cbiR0ZXh0LW9uLWNvbG9yLWRpc2FibGVkOiBfZ2V0KCd0ZXh0LW9uLWNvbG9yLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWRpc2FibGVkYCB0b2tlblxuJHRleHQtZGlzYWJsZWQ6IF9nZXQoJ3RleHQtZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstcHJpbWFyeWAgdG9rZW5cbiRsaW5rLXByaW1hcnk6IF9nZXQoJ2xpbmstcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1wcmltYXJ5LWhvdmVyYCB0b2tlblxuJGxpbmstcHJpbWFyeS1ob3ZlcjogX2dldCgnbGluay1wcmltYXJ5LWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXNlY29uZGFyeWAgdG9rZW5cbiRsaW5rLXNlY29uZGFyeTogX2dldCgnbGluay1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS12aXNpdGVkYCB0b2tlblxuJGxpbmstaW52ZXJzZS12aXNpdGVkOiBfZ2V0KCdsaW5rLWludmVyc2UtdmlzaXRlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay12aXNpdGVkYCB0b2tlblxuJGxpbmstdmlzaXRlZDogX2dldCgnbGluay12aXNpdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2VgIHRva2VuXG4kbGluay1pbnZlcnNlOiBfZ2V0KCdsaW5rLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS1hY3RpdmVgIHRva2VuXG4kbGluay1pbnZlcnNlLWFjdGl2ZTogX2dldCgnbGluay1pbnZlcnNlLWFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLWhvdmVyYCB0b2tlblxuJGxpbmstaW52ZXJzZS1ob3ZlcjogX2dldCgnbGluay1pbnZlcnNlLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLXByaW1hcnlgIHRva2VuXG4kaWNvbi1wcmltYXJ5OiBfZ2V0KCdpY29uLXByaW1hcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tc2Vjb25kYXJ5YCB0b2tlblxuJGljb24tc2Vjb25kYXJ5OiBfZ2V0KCdpY29uLXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1pbnZlcnNlYCB0b2tlblxuJGljb24taW52ZXJzZTogX2dldCgnaWNvbi1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLW9uLWNvbG9yYCB0b2tlblxuJGljb24tb24tY29sb3I6IF9nZXQoJ2ljb24tb24tY29sb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tb24tY29sb3ItZGlzYWJsZWRgIHRva2VuXG4kaWNvbi1vbi1jb2xvci1kaXNhYmxlZDogX2dldCgnaWNvbi1vbi1jb2xvci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1kaXNhYmxlZGAgdG9rZW5cbiRpY29uLWRpc2FibGVkOiBfZ2V0KCdpY29uLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWludGVyYWN0aXZlYCB0b2tlblxuJGljb24taW50ZXJhY3RpdmU6IF9nZXQoJ2ljb24taW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtZXJyb3JgIHRva2VuXG4kc3VwcG9ydC1lcnJvcjogX2dldCgnc3VwcG9ydC1lcnJvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1zdWNjZXNzYCB0b2tlblxuJHN1cHBvcnQtc3VjY2VzczogX2dldCgnc3VwcG9ydC1zdWNjZXNzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXdhcm5pbmdgIHRva2VuXG4kc3VwcG9ydC13YXJuaW5nOiBfZ2V0KCdzdXBwb3J0LXdhcm5pbmcnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtaW5mb2AgdG9rZW5cbiRzdXBwb3J0LWluZm86IF9nZXQoJ3N1cHBvcnQtaW5mbycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1lcnJvci1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtZXJyb3ItaW52ZXJzZTogX2dldCgnc3VwcG9ydC1lcnJvci1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZTogX2dldCgnc3VwcG9ydC1zdWNjZXNzLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtd2FybmluZy1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtd2FybmluZy1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LXdhcm5pbmctaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1pbmZvLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1pbmZvLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtaW5mby1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tbWFqb3JgIHRva2VuXG4kc3VwcG9ydC1jYXV0aW9uLW1ham9yOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tbWFqb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi1taW5vcmAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tbWlub3I6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi1taW5vcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLXVuZGVmaW5lZGAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWJhY2tncm91bmRgIHRva2VuXG4kYWktcG9wb3Zlci1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1wb3BvdmVyLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxYCB0b2tlblxuJGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxOiBfZ2V0KCdhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDJgIHRva2VuXG4kYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDI6IF9nZXQoJ2FpLXBvcG92ZXItc2hhZG93LW91dGVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1pbm5lci1zaGFkb3dgIHRva2VuXG4kYWktaW5uZXItc2hhZG93OiBfZ2V0KCdhaS1pbm5lci1zaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtc3RhcnQtc21gIHRva2VuXG4kYWktYXVyYS1zdGFydC1zbTogX2dldCgnYWktYXVyYS1zdGFydC1zbScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1zdGFydGAgdG9rZW5cbiRhaS1hdXJhLXN0YXJ0OiBfZ2V0KCdhaS1hdXJhLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWVuZGAgdG9rZW5cbiRhaS1hdXJhLWVuZDogX2dldCgnYWktYXVyYS1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLWJhY2tncm91bmQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1zdGFydGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLXN0YXJ0OiBfZ2V0KCdhaS1hdXJhLWhvdmVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLWVuZGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLWVuZDogX2dldCgnYWktYXVyYS1ob3Zlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1zdHJvbmdgIHRva2VuXG4kYWktYm9yZGVyLXN0cm9uZzogX2dldCgnYWktYm9yZGVyLXN0cm9uZycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLXN0YXJ0YCB0b2tlblxuJGFpLWJvcmRlci1zdGFydDogX2dldCgnYWktYm9yZGVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItZW5kYCB0b2tlblxuJGFpLWJvcmRlci1lbmQ6IF9nZXQoJ2FpLWJvcmRlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWRyb3Atc2hhZG93YCB0b2tlblxuJGFpLWRyb3Atc2hhZG93OiBfZ2V0KCdhaS1kcm9wLXNoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktc2tlbGV0b24tYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1za2VsZXRvbi1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1za2VsZXRvbi1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmRgIHRva2VuXG4kYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kOiBfZ2V0KFxuICAnYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLW92ZXJsYXlgIHRva2VuXG4kYWktb3ZlcmxheTogX2dldCgnYWktb3ZlcmxheScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1jZW50ZXJgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1jZW50ZXI6IF9nZXQoJ2FpLXBvcG92ZXItY2FyZXQtY2VudGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbWAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbTogX2dldCgnYWktcG9wb3Zlci1jYXJldC1ib3R0b20nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmRgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZDogX2dldChcbiAgJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9uczogX2dldChcbiAgJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9ucydcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1iYWNrZ3JvdW5kYCB0b2tlblxuJGNoYXQtcHJvbXB0LWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJvcmRlci1zdGFydGAgdG9rZW5cbiRjaGF0LXByb21wdC1ib3JkZXItc3RhcnQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJvcmRlci1zdGFydCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYm9yZGVyLWVuZGAgdG9rZW5cbiRjaGF0LXByb21wdC1ib3JkZXItZW5kOiBfZ2V0KCdjaGF0LXByb21wdC1ib3JkZXItZW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS11c2VyYCB0b2tlblxuJGNoYXQtYnViYmxlLXVzZXI6IF9nZXQoJ2NoYXQtYnViYmxlLXVzZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLWFnZW50YCB0b2tlblxuJGNoYXQtYnViYmxlLWFnZW50OiBfZ2V0KCdjaGF0LWJ1YmJsZS1hZ2VudCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtYm9yZGVyYCB0b2tlblxuJGNoYXQtYnViYmxlLWJvcmRlcjogX2dldCgnY2hhdC1idWJibGUtYm9yZGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci1ib3RgIHRva2VuXG4kY2hhdC1hdmF0YXItYm90OiBfZ2V0KCdjaGF0LWF2YXRhci1ib3QnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLWFnZW50YCB0b2tlblxuJGNoYXQtYXZhdGFyLWFnZW50OiBfZ2V0KCdjaGF0LWF2YXRhci1hZ2VudCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItdXNlcmAgdG9rZW5cbiRjaGF0LWF2YXRhci11c2VyOiBfZ2V0KCdjaGF0LWF2YXRhci11c2VyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXNoZWxsLWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1zaGVsbC1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LXNoZWxsLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtaGVhZGVyLWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1oZWFkZXItYmFja2dyb3VuZDogX2dldCgnY2hhdC1oZWFkZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b25gIHRva2VuXG4kY2hhdC1idXR0b246IF9nZXQoJ2NoYXQtYnV0dG9uJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1ob3ZlcmAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1ob3ZlcjogX2dldCgnY2hhdC1idXR0b24taG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXRleHQtaG92ZXJgIHRva2VuXG4kY2hhdC1idXR0b24tdGV4dC1ob3ZlcjogX2dldCgnY2hhdC1idXR0b24tdGV4dC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tYWN0aXZlYCB0b2tlblxuJGNoYXQtYnV0dG9uLWFjdGl2ZTogX2dldCgnY2hhdC1idXR0b24tYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1zZWxlY3RlZGAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1zZWxlY3RlZDogX2dldCgnY2hhdC1idXR0b24tc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXRleHQtc2VsZWN0ZWRgIHRva2VuXG4kY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZDogX2dldCgnY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaGlnaGxpZ2h0YCB0b2tlblxuJGhpZ2hsaWdodDogX2dldCgnaGlnaGxpZ2h0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBvdmVybGF5YCB0b2tlblxuJG92ZXJsYXk6IF9nZXQoJ292ZXJsYXknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRvZ2dsZS1vZmZgIHRva2VuXG4kdG9nZ2xlLW9mZjogX2dldCgndG9nZ2xlLW9mZicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2hhZG93YCB0b2tlblxuJHNoYWRvdzogX2dldCgnc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1c2AgdG9rZW5cbiRmb2N1czogX2dldCgnZm9jdXMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzLWluc2V0YCB0b2tlblxuJGZvY3VzLWluc2V0OiBfZ2V0KCdmb2N1cy1pbnNldCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXMtaW52ZXJzZWAgdG9rZW5cbiRmb2N1cy1pbnZlcnNlOiBfZ2V0KCdmb2N1cy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBza2VsZXRvbi1iYWNrZ3JvdW5kYCB0b2tlblxuJHNrZWxldG9uLWJhY2tncm91bmQ6IF9nZXQoJ3NrZWxldG9uLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNrZWxldG9uLWVsZW1lbnRgIHRva2VuXG4kc2tlbGV0b24tZWxlbWVudDogX2dldCgnc2tlbGV0b24tZWxlbWVudCcpICFkZWZhdWx0O1xuIiwiLy8gQ29kZSBnZW5lcmF0ZWQgYnkgQGNhcmJvbi9sYXlvdXQuIERPIE5PVCBFRElULlxuLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDE6IDAuMTI1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTAyOiAwLjI1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTAzOiAwLjVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDQ6IDAuNzVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDY6IDEuNXJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wNzogMnJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wODogMi41cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTA5OiAzcmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEwOiA0cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTExOiA1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEyOiA2cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEzOiAxMHJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE1hcFxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZzogKFxuICBzcGFjaW5nLTAxOiAkc3BhY2luZy0wMSxcbiAgc3BhY2luZy0wMjogJHNwYWNpbmctMDIsXG4gIHNwYWNpbmctMDM6ICRzcGFjaW5nLTAzLFxuICBzcGFjaW5nLTA0OiAkc3BhY2luZy0wNCxcbiAgc3BhY2luZy0wNTogJHNwYWNpbmctMDUsXG4gIHNwYWNpbmctMDY6ICRzcGFjaW5nLTA2LFxuICBzcGFjaW5nLTA3OiAkc3BhY2luZy0wNyxcbiAgc3BhY2luZy0wODogJHNwYWNpbmctMDgsXG4gIHNwYWNpbmctMDk6ICRzcGFjaW5nLTA5LFxuICBzcGFjaW5nLTEwOiAkc3BhY2luZy0xMCxcbiAgc3BhY2luZy0xMTogJHNwYWNpbmctMTEsXG4gIHNwYWNpbmctMTI6ICRzcGFjaW5nLTEyLFxuICBzcGFjaW5nLTEzOiAkc3BhY2luZy0xMyxcbik7XG4iXX0= */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(R));var C=`/**
 * Button Reset Mixin
 * Provides consistent button styling across all Carbon-themed components
 * @param {boolean} $include-focus - Whether to include focus styles (default: true)
 */
/**
 * Button Interactive States
 * Applies hover and active states using Carbon theme tokens
 * @param {string} $layer - Layer level for the component (default: 'background')
 */
/**
 * Complete Button Styling
 * Combines reset and interactive states for buttons
 * @param {boolean} $include-focus - Include focus styles
 * @param {string} $layer - Layer level for interactive states
 */
/**
 * Button Sizing
 * Applies consistent minimum dimensions using Carbon spacing tokens
 * @param {string} $size - Size level (small: 06, medium: 07, large: 08, xlarge: 10)
 */
/**
 * Input Field Styling
 * Provides consistent styling for input elements (text, textarea, select)
 * @param {string} $layer - Layer level for the input background
 */
/**
 * Border Bottom Input
 * Adds bottom border for text inputs following Carbon design pattern
 */
/**
 * Focus State
 * Applies consistent focus styling across components
 * @param {string} $type - Type of focus (inset, outline)
 */
/**
 * Tab Button Styling
 * Consistent styling for tab buttons with active state indicator
 */
/**
 * Active Tab Indicator
 * Applies bottom border to indicate active tab state
 */
/**
 * Badge/Tag Styling
 * For count indicators and tags
 * @param {boolean} $active - Whether the badge is on an active element
 */
/**
 * SHARED PANEL COMPONENT STYLES
 * Reusable styles for buttons, form controls, and common panel elements
 */
/**
 * Standard Panel Button
 * Used throughout panel tabs (Controls, A11y, etc.)
 */
/**
 * Form Control Base Styles
 * Shared styling for inputs, textareas, and selects
 */
/**
 * Form Control Group
 * Styles for button, input, textarea, and select elements
 */
/**
 * Custom Radio Button
 * Carbon-styled radio input
 */
/**
 * Toggle Switch Styles
 * Custom styling for switch role inputs
 */
/**
 * Date/Time Input Color Scheme
 * Adjusts color scheme based on theme
 */
/**
 * PANEL STYLES
 * Main styles for the Storybook panel area (bottom/right panel)
 * Includes Controls, Actions, Interactions, and A11y addons
 */
#panel-tab-content {
  height: calc(100% - 41px) !important;
  margin-top: 1px !important;
  background: var(--cds-background, #ffffff) !important;
  /**
   * Loading State Backgrounds
   * Inherit background for loading screens
   */
}
#panel-tab-content .css-y6sd6u,
#panel-tab-content .css-1400aiw,
#panel-tab-content > div {
  background-color: inherit;
}
#panel-tab-content .css-y6sd6u > div,
#panel-tab-content .css-1400aiw > div,
#panel-tab-content > div > div {
  background-color: inherit;
}
#panel-tab-content {
  /**
   * Paragraph Text Color
   */
}
#panel-tab-content p {
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content {
  /**
   * Scrollbar Styling
   * Custom scrollbar for Radix UI scroll areas
   */
}
#panel-tab-content [data-radix-scroll-area-viewport] + div > div {
  background: var(--cds-border-inverse, #161616);
}
#panel-tab-content {
  /**
   * ==========================================================
   * CONTROLS ADDON
   * ==========================================================
   */
  /**
   * Save From Controls Action
   * Toolbar action to save control state
   */
}
#panel-tab-content [id=save-from-controls] > div {
  /**
   * Custom CSS variable for highlight color
   * Blends interactive border with layer background
   */
  --highlight-bg-color: color-mix(
    in srgb,
    var(--cds-border-interactive) 30%,
    var(--cds-layer-01)
  );
  background-color: var(--cds-layer-01, #f4f4f4);
  border-color: var(--cds-border-subtle-01, #c6c6c6);
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content [id=save-from-controls] > div button {
  min-block-size: 1.5rem;
  min-inline-size: 1.5rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  box-shadow: none;
}
#panel-tab-content [id=save-from-controls] > div button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content [id=save-from-controls] > div button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content [id=save-from-controls] > div button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content {
  /**
   * Reset Controls Button
   * Button to reset all controls to default values
   */
}
#panel-tab-content button[title="Reset controls"] {
  min-block-size: 1.5rem;
  min-inline-size: 1.5rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  box-shadow: none;
}
#panel-tab-content button[title="Reset controls"]:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content button[title="Reset controls"]:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content button[title="Reset controls"]:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content {
  /**
   * Controls ArgTable
   * Table showing component props/args with editable controls
   */
}
#panel-tab-content table.docblock-argstable {
  /**
   * Table Header
   * Column titles (Name, Description, Type, etc.)
   */
}
#panel-tab-content table.docblock-argstable > thead.docblock-argstable-head > tr > th > span {
  color: var(--cds-text-primary, #161616);
}
#panel-tab-content table.docblock-argstable {
  /**
   * Table Body
   * Rows containing control inputs
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body {
  /**
   * Standard Control Rows
   * Individual prop/arg rows with controls
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td {
  background: var(--cds-background, #ffffff);
  border-color: var(--cds-border-subtle-01, #c6c6c6);
  /**
   * Type Badges
   * Display type information (string, number, etc.)
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td .css-mkjjps,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td .css-o1d7ko {
  background: var(--cds-layer-01, #f4f4f4);
  border: 1px solid var(--cds-border-subtle-01, #c6c6c6);
  border-radius: 0;
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td {
  /**
   * Required Indicator
   * Shows which props are required
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td span[title=Required] {
  color: var(--cds-support-error, #da1e28);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td {
  /**
   * Form Controls
   * All input types within the controls table
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td button,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input:not([type=radio]):not([type=checkbox]),
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td textarea,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td select {
  border-radius: 0;
  box-shadow: none;
  background-color: var(--cds-layer-01, #f4f4f4);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input:not([type=radio]):not([type=checkbox]):not([type=range]),
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td textarea,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td select {
  box-shadow: inset 0 -1px 0 var(--cds-border-strong-01, #8d8d8d);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input:not([type=radio]):not([type=checkbox])::placeholder,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td textarea::placeholder,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td select::placeholder {
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td button:hover,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input:not([type=radio]):not([type=checkbox]):hover,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td textarea:hover,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td select:hover {
  background-color: var(--cds-layer-hover-01, #e8e8e8);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td button:active,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input:not([type=radio]):not([type=checkbox]):active,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td textarea:active,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td select:active {
  background-color: var(--cds-layer-active-01, #c6c6c6);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td button:focus,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input:not([type=radio]):not([type=checkbox]):focus,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td textarea:focus,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td select:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td {
  /**
   * Radio Button Styling
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=radio] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid var(--cds-icon-primary, #161616);
  background-color: var(--cds-background, #ffffff);
  cursor: pointer;
  position: relative;
  transition: border-color 0.15s, background-color 0.15s, box-shadow 0.15s;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=radio]:checked::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--cds-icon-primary, #161616);
  transform: translate(-50%, -50%);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=radio]:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--cds-focus, #0f62fe);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td {
  /**
   * Toggle Switch Styling
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:checked ~ span:last-of-type,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:not(:checked) ~ span:first-of-type {
  background-color: var(--cds-layer-01, #f4f4f4);
  box-shadow: inset 0 0 0 1px var(--cds-border-strong-01, #8d8d8d);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td label:has(input[role=switch]) {
  background-color: var(--cds-background, #ffffff);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:focus {
  box-shadow: 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td {
  /**
   * Date/Time Inputs
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=date],
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=time] {
  color-scheme: light;
}
:root[storybook-carbon-theme=g90] #panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=date],
:root[storybook-carbon-theme=g90] #panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=time], :root[storybook-carbon-theme=g100] #panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=date],
:root[storybook-carbon-theme=g100] #panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=time] {
  color-scheme: dark;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body {
  /**
   * Array/Object Item Rows
   * Expandable rows for complex control types
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr[title~=items] {
  background: var(--cds-layer-01, #f4f4f4) !important;
  box-shadow: inset 0 1px 0 0 var(--cds-border-subtle-01, #c6c6c6);
  /**
   * Focus state for entire row
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr[title~=items]:has(button:focus) {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
  background: var(--cds-layer-01, #f4f4f4) !important;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr[title~=items] > td {
  background-color: transparent !important;
  border: none;
  color: var(--cds-text-primary, #161616);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr[title~=items] > td > span > svg {
  color: var(--cds-icon-primary, #161616);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr[title~=items] > td > button:focus {
  outline: none;
}
#panel-tab-content {
  /**
   * Code Source Block
   * Syntax-highlighted code examples in docs
   */
}
#panel-tab-content .docblock-source {
  background-color: var(--cds-background, #ffffff);
  border-radius: 0;
  border: 1px solid var(--cds-border-subtle-01, #c6c6c6);
}
#panel-tab-content {
  /**
   * ==========================================================
   * INTERACTIONS ADDON
   * ==========================================================
   * Panel for play function interactions and testing
   */
  /**
   * Interactions Panel Container
   */
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) {
  background-color: var(--cds-background);
  /**
   * Interactions Toolbar
   * Controls for play function testing (play, rewind, etc.)
   */
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] {
  box-sizing: content-box;
  border-bottom: 1px solid var(--cds-border-subtle-01, #c6c6c6);
  padding: 0;
  background: var(--cds-layer-01, #f4f4f4);
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] > div > p {
  color: var(--cds-text-primary, #161616);
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] {
  /**
   * Test Status Badge
   * Shows pass/fail/running status
   */
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] div[aria-label="Status of the test run"] {
  min-block-size: 2.5rem;
  min-inline-size: 4rem;
  border-radius: 0;
  align-content: center;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] {
  /**
   * Hide empty spans
   */
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] span:empty {
  display: none;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] {
  /**
   * Toolbar Buttons
   */
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button {
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  box-shadow: none;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button {
  margin: 0;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button:not([disabled]):hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button:not([disabled]):active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button:not([disabled]):focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) {
  /**
   * Interactions List
   * List of interaction steps from play function
   */
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) div[aria-label="Interactions list"] div:has(> button[aria-label="Interaction step"]):hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) div[aria-label="Interactions list"] div:has(> button[aria-label="Interaction step"]):active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) div[aria-label="Interactions list"] > div {
  border-color: var(--cds-border-subtle-01, #c6c6c6) !important;
}
#panel-tab-content {
  /**
   * ==========================================================
   * ACCESSIBILITY (A11Y) ADDON
   * ==========================================================
   * Panel for accessibility violation detection
   */
  /**
   * A11y Tabs Container
   * Violations, Passes, Incomplete tabs
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) {
  background-color: var(--cds-layer-01, #f4f4f4);
  padding: 0;
  border-block-end: 1px solid var(--cds-border-subtle-01, #c6c6c6);
  box-shadow: none;
}
#panel-tab-content div:has(> div > [data-type=violations]) div[role=tablist] + div {
  gap: 0;
}
#panel-tab-content div:has(> div > [data-type=violations]) {
  /**
   * Non-Tab Buttons in A11y Header
   * Settings and other action buttons
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) button:not([role=tab]) {
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  box-shadow: none;
}
#panel-tab-content div:has(> div > [data-type=violations]) button:not([role=tab]):focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) button:not([role=tab]):hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) button:not([role=tab]):active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) {
  /**
   * A11y Tab Buttons
   * Violations, Passes, Incomplete tabs
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab] {
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  box-shadow: none;
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab]:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab]:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab] {
  font-weight: unset;
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab]:focus {
  outline: 2px solid var(--cds-focus, #0f62fe);
  outline-offset: -2px;
  border-width: 2px 0;
  border-color: unset;
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab] {
  /**
   * Violation Count Badge
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab] > div > div {
  box-shadow: none;
  background-color: var(--cds-border-subtle);
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content div:has(> div > [data-type=violations]) {
  /**
   * Active Tab State
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) button[data-active=true] {
  border-width: 2px 0;
  border-color: transparent transparent var(--cds-border-interactive, #0f62fe);
  font-weight: bold;
}
#panel-tab-content div:has(> div > [data-type=violations]) button[data-active=true] > div > div {
  box-shadow: none;
  background-color: var(--cds-border-interactive, #0f62fe);
  color: var(--cds-text-on-color, #ffffff);
}
#panel-tab-content {
  /**
   * A11y Violation List
   * List of accessibility issues and their details
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) + div {
  /**
   * Individual Violation Items
   * Clickable rows showing violation summary
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] {
  background-color: var(--cds-layer-01, #f4f4f4);
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active]:hover {
  color: var(--cds-interactive, #0f62fe);
  background-color: var(--cds-layer-hover-01, #e8e8e8);
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active]:hover + div {
  background-color: var(--cds-layer-hover-01, #e8e8e8);
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > div:first-child > div:last-child {
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > :nth-last-child(2) {
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] {
  /**
   * Action Buttons in Violation Row
   * Highlight, copy, etc.
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > button {
  min-block-size: 1.5rem;
  min-inline-size: 1.5rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  box-shadow: none;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div {
  /**
   * Violation Details Panel
   * Expanded view showing full violation information
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] {
  background-color: var(--cds-layer-01, #f4f4f4);
  /**
   * Help Links
   * External links to WCAG guidelines
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] p > a > span {
  color: var(--cds-link-primary, #0f62fe);
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] p > a > span > svg {
  margin-bottom: -1px;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] p > a > span > svg > path {
  fill: var(--cds-link-primary, #0f62fe);
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] > div:first-child > div:first-child {
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] {
  /**
   * Detail Tabs (HTML, Highlight)
   * Additional information tabs within violation details
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tablist] button,
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tabpanel] button {
  border-radius: 0;
  color: var(--cds-text-secondary, #525252);
  background-color: var(--cds-layer-02, #ffffff);
  box-shadow: inset 0 0 0 1px var(--cds-border-subtle-01, #c6c6c6);
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tablist] button:hover,
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tabpanel] button:hover {
  background-color: var(--cds-layer-hover-02, #e8e8e8) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tablist] button:active,
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tabpanel] button:active {
  background-color: var(--cds-layer-active-02, #c6c6c6) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tablist] button:focus,
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tabpanel] button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div {
  /**
   * Scroll Area Content
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-radix-scroll-area-content] > div {
  background-color: inherit;
  border-color: var(--cds-border-subtle-01, #c6c6c6);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbIl9taXhpbnMuc2NzcyIsIl9wYW5lbC1zaGFyZWQuc2NzcyIsInBhbmVsLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi90aGVtZXMvc2Nzcy9nZW5lcmF0ZWQvX3Rva2Vucy5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXJib24vbGF5b3V0L3Njc3MvZ2VuZXJhdGVkL19zcGFjaW5nLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZS9fdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEJBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQ3RKQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQWdEQTtBQUFBO0FBQUE7QUFBQTtBQXNDQTtBQUFBO0FBQUE7QUFBQTtBQW9CQTtBQUFBO0FBQUE7QUFBQTtBQy9IQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7RUFDRTtFQUNBO0VBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUFBO0FBQUE7RUFHRTs7QUFFQTtBQUFBO0FBQUE7RUFDRTs7QUFmTjtBQW1CRTtBQUFBO0FBQUE7O0FBR0E7RUFDRSxPQzBLYTs7QURqTWpCO0FBMEJFO0FBQUE7QUFBQTtBQUFBOztBQUtFO0VBQ0UsWUNxSlc7O0FEckxqQjtBQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7O0FBS0U7QUFDRTtBQUFBO0FBQUE7QUFBQTtFQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFNQSxrQkN4Qks7RUR5QkwsY0NzRmE7RURyRmIsT0NxSVc7O0FEbklYO0VGUkYsZ0JJOUJTO0VKK0JULGlCSS9CUztFSjNCWDtFQUNBO0VBQ0E7RUFDQTs7QUFHRTtFQUNFOztBQVdKO0VBTUk7O0FBSUo7RUFNSTs7QUUvQk47QUFvRUU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUZsQkUsZ0JJOUJTO0VKK0JULGlCSS9CUztFSjNCWDtFQUNBO0VBQ0E7RUFDQTs7QUFHRTtFQUNFOztBQVdKO0VBTUk7O0FBSUo7RUFNSTs7QUUvQk47QUE0RUU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFLE9Dd0dTOztBRDlHYjtBQVNFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRSxZQ3pGSztFRDBGTCxjQzZDVztBRDNDWDtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUFBO0VBRUUsWUMxRUM7RUQyRUQ7RUFDQTtFQUNBLE9Da0ZPOztBRC9GWDtBQWdCRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFLE9DK0lNOztBRHBLVjtBQXdCRTtBQUFBO0FBQUE7QUFBQTs7QUR0R047QUFBQTtBQUFBO0FBQUE7RUFJRTtFQUNBO0VBQ0Esa0JFUU87O0FGTFQ7QUFBQTtBQUFBO0VEc0VBOztBQ2hFQTtBQUFBO0FBQUE7RUFHRSxPRTJKYTs7QUZ4SmY7QUFBQTtBQUFBO0FBQUE7RUFJRSxrQkVGYTs7QUZLZjtBQUFBO0FBQUE7QUFBQTtFQUlFLGtCRWZjOztBRmtCaEI7QUFBQTtBQUFBO0FBQUE7RUR5REU7O0FFZEU7QUE4QkU7QUFBQTtBQUFBOztBQUdBO0VEL0ROO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0Esa0JFakVXO0VGa0VYO0VBQ0E7RUFDQSxZQUNFOztBQUlGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxrQkVzSlc7RUZySlg7O0FBR0Y7RUFDRTtFQUNBOztBQ0NFO0FBcUNFO0FBQUE7QUFBQTs7QUQ3Qk47QUFBQTtFQUVFLGtCRTFFTztFRjJFUDs7QUFHRjtFQUNFLGtCRXZHUzs7QUYwR1g7RUFDRTs7QUNuQkU7QUEwQ0U7QUFBQTtBQUFBOztBRGROO0FBQUE7RUFFRTs7QUFLQTtBQUFBO0FBQUE7RUFFRTs7QUMxQ0Y7QUFxREU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRTtFQUNBO0FBRUE7QUFBQTtBQUFBOztBQUdBO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQSxPQ3lCSzs7QUR2Qkw7RUFDRSxPQ3lFRzs7QUR0RUw7RUFDRTs7QUE1S1o7QUFtTEU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRSxrQkM5S1M7RUQrS1Q7RUFDQTs7QUExTEo7QUE2TEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBOztBQUdBO0VBQ0U7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFO0VBQ0E7RUFDQTtFQUNBLFlDL0tLOztBRGlMTDtFQUNFLE9DdEJPOztBRGVYO0FBVUU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRSxnQkUxTEs7RUYyTEwsaUJFakxLO0VGa0xMO0VBQ0E7O0FBbEJKO0FBcUJFO0FBQUE7QUFBQTs7QUFHQTtFQUNFOztBQXpCSjtBQTRCRTtBQUFBO0FBQUE7O0FBR0E7RUZoTEYsZ0JJMUJTO0VKMkJULGlCSTNCUztFSnJDWDtFQUNBO0VBQ0E7RUFDQTs7QUFHRTtFQUNFOztBRXdPQTtFQUdFOztBRmhPTjtFQU1JOztBQUlKO0VBTUk7O0FFb05JO0VGbklOOztBRXNGRjtBQW9ERTtBQUFBO0FBQUE7QUFBQTs7QUYzT0Y7RUFNSTs7QUFJSjtFQU1JOztBRW1PQTtFQUNFOztBQW5RUjtBQXVRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFLGtCQ2pQTztFRGtQUDtFQUNBO0VBQ0E7O0FBRUE7RUFDRTs7QUFQSjtBQVVFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VGcE9BLGdCSTFCUztFSjJCVCxpQkkzQlM7RUpyQ1g7RUFDQTtFQUNBO0VBQ0E7O0FBR0U7RUFDRTs7QUFXSjtFQU1JOztBQUlKO0VBTUk7O0FFbVBKO0FBbUJFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VGN09BLGdCSTFCUztFSjJCVCxpQkkzQlM7RUpyQ1g7RUFDQTtFQUNBO0VBQ0E7O0FBZUE7RUFNSTs7QUFJSjtFQU1JOztBRTBRRjtFRjlLRjs7QUFFQTtFQWhCRTtFQUNBO0VBaUJBO0VBQ0E7O0FFeUtBO0FBR0U7QUFBQTtBQUFBOztBQUdBO0VGM0pKO0VBTUUsa0JLaElZO0VMaUlaLE9Hc0NhOztBRGlGZjtBQWtDRTtBQUFBO0FBQUE7O0FBR0E7RUY5S0Y7RUFDQTtFQUNBOztBRStLSTtFRnRLSjtFQUdFLGtCR2lDaUI7RUhoQ2pCLE9Hd0RZOztBRGhOaEI7QUFnVUU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFLGtCQ3hTSzs7QUQwU0w7RUFDRSxPQ2xNTTtFRG1NTixrQkNuU1M7O0FEcVNUO0VBQ0Usa0JDdFNPOztBRDJTVDtFQUNFLE9DdEpPOztBRDBKWDtFQUNFLE9DM0pTOztBRHdJYjtBQXNCRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFRjdTRixnQkk5QlM7RUorQlQsaUJJL0JTO0VKM0JYO0VBQ0E7RUFDQTtFQUNBOztBQUdFO0VBQ0U7O0FBV0o7RUFNSTs7QUFJSjtFQU1JOztBRXFTSjtBQW9DRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFLGtCQzNVSztBRDZVTDtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFLE9DM0pPOztBRDZKUDtFQUNFOztBQUVBO0VBQ0UsTUNqS0c7O0FEdUtQO0VBQ0UsT0NoTU87O0FEMktiO0FBeUJFO0FBQUE7QUFBQTtBQUFBOztBQU1FO0FBQUE7RUFDRTtFQUNBLE9DNU1PO0VENk1QLGtCQzFWQztFRDJWRDs7QUZoWVI7QUFBQTtFQUlJOztBQU1KO0FBQUE7RUFJSTs7QUVzWEk7QUFBQTtFRm5TTjs7QUVvTkY7QUFzRkU7QUFBQTtBQUFBOztBQUlFO0VBQ0U7RUFDQSxjQy9RVyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJAY2FyYm9uL2xheW91dFwiIGFzICo7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZVwiIGFzICo7XG5cbi8qKlxuICogQnV0dG9uIFJlc2V0IE1peGluXG4gKiBQcm92aWRlcyBjb25zaXN0ZW50IGJ1dHRvbiBzdHlsaW5nIGFjcm9zcyBhbGwgQ2FyYm9uLXRoZW1lZCBjb21wb25lbnRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICRpbmNsdWRlLWZvY3VzIC0gV2hldGhlciB0byBpbmNsdWRlIGZvY3VzIHN0eWxlcyAoZGVmYXVsdDogdHJ1ZSlcbiAqL1xuQG1peGluIGJ1dHRvbi1yZXNldCgkaW5jbHVkZS1mb2N1czogdHJ1ZSkge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICR0ZXh0LXByaW1hcnkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcblxuICBAaWYgJGluY2x1ZGUtZm9jdXMge1xuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICRmb2N1cyAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEJ1dHRvbiBJbnRlcmFjdGl2ZSBTdGF0ZXNcbiAqIEFwcGxpZXMgaG92ZXIgYW5kIGFjdGl2ZSBzdGF0ZXMgdXNpbmcgQ2FyYm9uIHRoZW1lIHRva2Vuc1xuICogQHBhcmFtIHtzdHJpbmd9ICRsYXllciAtIExheWVyIGxldmVsIGZvciB0aGUgY29tcG9uZW50IChkZWZhdWx0OiAnYmFja2dyb3VuZCcpXG4gKi9cbkBtaXhpbiBidXR0b24tc3RhdGVzKCRsYXllcjogJ2JhY2tncm91bmQnKSB7XG4gICY6aG92ZXIge1xuICAgIEBpZiAkbGF5ZXIgPT0gJ2xheWVyLTAxJyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItaG92ZXItMDEgIWltcG9ydGFudDtcbiAgICB9IEBlbHNlIGlmICRsYXllciA9PSAnbGF5ZXItMDInIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1ob3Zlci0wMiAhaW1wb3J0YW50O1xuICAgIH0gQGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtaG92ZXIgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgQGlmICRsYXllciA9PSAnbGF5ZXItMDEnIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1hY3RpdmUtMDEgIWltcG9ydGFudDtcbiAgICB9IEBlbHNlIGlmICRsYXllciA9PSAnbGF5ZXItMDInIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1hY3RpdmUtMDIgIWltcG9ydGFudDtcbiAgICB9IEBlbHNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWFjdGl2ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvbXBsZXRlIEJ1dHRvbiBTdHlsaW5nXG4gKiBDb21iaW5lcyByZXNldCBhbmQgaW50ZXJhY3RpdmUgc3RhdGVzIGZvciBidXR0b25zXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICRpbmNsdWRlLWZvY3VzIC0gSW5jbHVkZSBmb2N1cyBzdHlsZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSAkbGF5ZXIgLSBMYXllciBsZXZlbCBmb3IgaW50ZXJhY3RpdmUgc3RhdGVzXG4gKi9cbkBtaXhpbiBidXR0b24tY29tcGxldGUoJGluY2x1ZGUtZm9jdXM6IHRydWUsICRsYXllcjogJ2JhY2tncm91bmQnKSB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1yZXNldCgkaW5jbHVkZS1mb2N1cyk7XG4gIEBpbmNsdWRlIGJ1dHRvbi1zdGF0ZXMoJGxheWVyKTtcbn1cblxuLyoqXG4gKiBCdXR0b24gU2l6aW5nXG4gKiBBcHBsaWVzIGNvbnNpc3RlbnQgbWluaW11bSBkaW1lbnNpb25zIHVzaW5nIENhcmJvbiBzcGFjaW5nIHRva2Vuc1xuICogQHBhcmFtIHtzdHJpbmd9ICRzaXplIC0gU2l6ZSBsZXZlbCAoc21hbGw6IDA2LCBtZWRpdW06IDA3LCBsYXJnZTogMDgsIHhsYXJnZTogMTApXG4gKi9cbkBtaXhpbiBidXR0b24tc2l6ZSgkc2l6ZTogJ21lZGl1bScpIHtcbiAgQGlmICRzaXplID09ICdzbWFsbCcge1xuICAgIG1pbi1ibG9jay1zaXplOiAkc3BhY2luZy0wNjtcbiAgICBtaW4taW5saW5lLXNpemU6ICRzcGFjaW5nLTA2O1xuICB9IEBlbHNlIGlmICRzaXplID09ICdtZWRpdW0nIHtcbiAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMDc7XG4gICAgbWluLWlubGluZS1zaXplOiAkc3BhY2luZy0wNztcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSAnbGFyZ2UnIHtcbiAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMDg7XG4gICAgbWluLWlubGluZS1zaXplOiAkc3BhY2luZy0wODtcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSAneGxhcmdlJyB7XG4gICAgbWluLWJsb2NrLXNpemU6ICRzcGFjaW5nLTEwO1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogJHNwYWNpbmctMTA7XG4gIH1cbn1cblxuLyoqXG4gKiBJbnB1dCBGaWVsZCBTdHlsaW5nXG4gKiBQcm92aWRlcyBjb25zaXN0ZW50IHN0eWxpbmcgZm9yIGlucHV0IGVsZW1lbnRzICh0ZXh0LCB0ZXh0YXJlYSwgc2VsZWN0KVxuICogQHBhcmFtIHtzdHJpbmd9ICRsYXllciAtIExheWVyIGxldmVsIGZvciB0aGUgaW5wdXQgYmFja2dyb3VuZFxuICovXG5AbWl4aW4gaW5wdXQtZmllbGQoJGxheWVyOiAnbGF5ZXItMDEnKSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgQGlmICRsYXllciA9PSAnbGF5ZXItMDInIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItMDI7XG4gIH0gQGVsc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci0wMTtcbiAgfVxuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xuICB9XG5cbiAgQGluY2x1ZGUgYnV0dG9uLXN0YXRlcygkbGF5ZXIpO1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAkZm9jdXM7XG4gIH1cbn1cblxuLyoqXG4gKiBCb3JkZXIgQm90dG9tIElucHV0XG4gKiBBZGRzIGJvdHRvbSBib3JkZXIgZm9yIHRleHQgaW5wdXRzIGZvbGxvd2luZyBDYXJib24gZGVzaWduIHBhdHRlcm5cbiAqL1xuQG1peGluIGlucHV0LWJvcmRlci1ib3R0b20ge1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAkYm9yZGVyLXN0cm9uZy0wMTtcbn1cblxuLyoqXG4gKiBGb2N1cyBTdGF0ZVxuICogQXBwbGllcyBjb25zaXN0ZW50IGZvY3VzIHN0eWxpbmcgYWNyb3NzIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSAkdHlwZSAtIFR5cGUgb2YgZm9jdXMgKGluc2V0LCBvdXRsaW5lKVxuICovXG5AbWl4aW4gZm9jdXMtc3RhdGUoJHR5cGU6ICdpbnNldCcpIHtcbiAgQGlmICR0eXBlID09ICdvdXRsaW5lJyB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkICRmb2N1cztcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgfSBAZWxzZSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICRmb2N1cyAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qKlxuICogVGFiIEJ1dHRvbiBTdHlsaW5nXG4gKiBDb25zaXN0ZW50IHN0eWxpbmcgZm9yIHRhYiBidXR0b25zIHdpdGggYWN0aXZlIHN0YXRlIGluZGljYXRvclxuICovXG5AbWl4aW4gdGFiLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1zaXplKCdsYXJnZScpO1xuICBAaW5jbHVkZSBidXR0b24tY29tcGxldGUoZmFsc2UpO1xuICBmb250LXdlaWdodDogdW5zZXQ7XG5cbiAgJjpmb2N1cyB7XG4gICAgQGluY2x1ZGUgZm9jdXMtc3RhdGUoJ291dGxpbmUnKTtcbiAgICBib3JkZXItd2lkdGg6IDJweCAwO1xuICAgIGJvcmRlci1jb2xvcjogdW5zZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBBY3RpdmUgVGFiIEluZGljYXRvclxuICogQXBwbGllcyBib3R0b20gYm9yZGVyIHRvIGluZGljYXRlIGFjdGl2ZSB0YWIgc3RhdGVcbiAqL1xuQG1peGluIHRhYi1hY3RpdmUge1xuICBib3JkZXItd2lkdGg6IDJweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRib3JkZXItaW50ZXJhY3RpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKipcbiAqIEJhZGdlL1RhZyBTdHlsaW5nXG4gKiBGb3IgY291bnQgaW5kaWNhdG9ycyBhbmQgdGFnc1xuICogQHBhcmFtIHtib29sZWFufSAkYWN0aXZlIC0gV2hldGhlciB0aGUgYmFkZ2UgaXMgb24gYW4gYWN0aXZlIGVsZW1lbnRcbiAqL1xuQG1peGluIGJhZGdlKCRhY3RpdmU6IGZhbHNlKSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgQGlmICRhY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItaW50ZXJhY3RpdmU7XG4gICAgY29sb3I6ICR0ZXh0LW9uLWNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLXN1YnRsZTtcbiAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xuICB9XG59XG4iLCJAdXNlIFwiQGNhcmJvbi9sYXlvdXRcIiBhcyAqO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvdGhlbWVcIiBhcyAqO1xuQHVzZSBcIm1peGluc1wiIGFzICo7XG5cbi8qKlxuICogU0hBUkVEIFBBTkVMIENPTVBPTkVOVCBTVFlMRVNcbiAqIFJldXNhYmxlIHN0eWxlcyBmb3IgYnV0dG9ucywgZm9ybSBjb250cm9scywgYW5kIGNvbW1vbiBwYW5lbCBlbGVtZW50c1xuICovXG5cbi8qKlxuICogU3RhbmRhcmQgUGFuZWwgQnV0dG9uXG4gKiBVc2VkIHRocm91Z2hvdXQgcGFuZWwgdGFicyAoQ29udHJvbHMsIEExMXksIGV0Yy4pXG4gKi9cbkBtaXhpbiBwYW5lbC1idXR0b24oJHNpemU6ICdzbWFsbCcpIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJHNpemUpO1xuICBAaW5jbHVkZSBidXR0b24tY29tcGxldGU7XG59XG5cbi8qKlxuICogRm9ybSBDb250cm9sIEJhc2UgU3R5bGVzXG4gKiBTaGFyZWQgc3R5bGluZyBmb3IgaW5wdXRzLCB0ZXh0YXJlYXMsIGFuZCBzZWxlY3RzXG4gKi9cbkBtaXhpbiBmb3JtLWNvbnRyb2wtYmFzZSB7XG4gIEBpbmNsdWRlIGlucHV0LWZpZWxkO1xuICBAaW5jbHVkZSBpbnB1dC1ib3JkZXItYm90dG9tO1xufVxuXG4vKipcbiAqIEZvcm0gQ29udHJvbCBHcm91cFxuICogU3R5bGVzIGZvciBidXR0b24sIGlucHV0LCB0ZXh0YXJlYSwgYW5kIHNlbGVjdCBlbGVtZW50c1xuICovXG5AbWl4aW4gZm9ybS1jb250cm9scyB7XG4gIGJ1dHRvbixcbiAgaW5wdXQ6bm90KFt0eXBlPVwicmFkaW9cIl0pOm5vdChbdHlwZT1cImNoZWNrYm94XCJdKSxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci0wMTtcbiAgfVxuXG4gIGlucHV0Om5vdChbdHlwZT1cInJhZGlvXCJdKTpub3QoW3R5cGU9XCJjaGVja2JveFwiXSk6bm90KFt0eXBlPVwicmFuZ2VcIl0pLFxuICB0ZXh0YXJlYSxcbiAgc2VsZWN0IHtcbiAgICBAaW5jbHVkZSBpbnB1dC1ib3JkZXItYm90dG9tO1xuICB9XG5cbiAgaW5wdXQ6bm90KFt0eXBlPVwicmFkaW9cIl0pOm5vdChbdHlwZT1cImNoZWNrYm94XCJdKTo6cGxhY2Vob2xkZXIsXG4gIHRleHRhcmVhOjpwbGFjZWhvbGRlcixcbiAgc2VsZWN0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcbiAgfVxuXG4gIGJ1dHRvbjpob3ZlcixcbiAgaW5wdXQ6bm90KFt0eXBlPVwicmFkaW9cIl0pOm5vdChbdHlwZT1cImNoZWNrYm94XCJdKTpob3ZlcixcbiAgdGV4dGFyZWE6aG92ZXIsXG4gIHNlbGVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLWhvdmVyLTAxO1xuICB9XG5cbiAgYnV0dG9uOmFjdGl2ZSxcbiAgaW5wdXQ6bm90KFt0eXBlPVwicmFkaW9cIl0pOm5vdChbdHlwZT1cImNoZWNrYm94XCJdKTphY3RpdmUsXG4gIHRleHRhcmVhOmFjdGl2ZSxcbiAgc2VsZWN0OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLWFjdGl2ZS0wMTtcbiAgfVxuXG4gIGJ1dHRvbjpmb2N1cyxcbiAgaW5wdXQ6bm90KFt0eXBlPVwicmFkaW9cIl0pOm5vdChbdHlwZT1cImNoZWNrYm94XCJdKTpmb2N1cyxcbiAgdGV4dGFyZWE6Zm9jdXMsXG4gIHNlbGVjdDpmb2N1cyB7XG4gICAgQGluY2x1ZGUgZm9jdXMtc3RhdGU7XG4gIH1cbn1cblxuLyoqXG4gKiBDdXN0b20gUmFkaW8gQnV0dG9uXG4gKiBDYXJib24tc3R5bGVkIHJhZGlvIGlucHV0XG4gKi9cbkBtaXhpbiByYWRpby1idXR0b24ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAkaWNvbi1wcmltYXJ5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246XG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzLFxuICAgIGJhY2tncm91bmQtY29sb3IgMC4xNXMsXG4gICAgYm94LXNoYWRvdyAwLjE1cztcblxuICAmOmNoZWNrZWQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiAwLjVyZW07XG4gICAgaGVpZ2h0OiAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpY29uLXByaW1hcnk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAkZm9jdXM7XG4gIH1cbn1cblxuLyoqXG4gKiBUb2dnbGUgU3dpdGNoIFN0eWxlc1xuICogQ3VzdG9tIHN0eWxpbmcgZm9yIHN3aXRjaCByb2xlIGlucHV0c1xuICovXG5AbWl4aW4gdG9nZ2xlLXN3aXRjaCB7XG4gIGlucHV0W3JvbGU9XCJzd2l0Y2hcIl06Y2hlY2tlZCB+IHNwYW46bGFzdC1vZi10eXBlLFxuICBpbnB1dFtyb2xlPVwic3dpdGNoXCJdOm5vdCg6Y2hlY2tlZCkgfiBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci0wMTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggJGJvcmRlci1zdHJvbmctMDE7XG4gIH1cblxuICBsYWJlbDpoYXMoaW5wdXRbcm9sZT1cInN3aXRjaFwiXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICB9XG5cbiAgaW5wdXRbcm9sZT1cInN3aXRjaFwiXTpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRmb2N1cyAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qKlxuICogRGF0ZS9UaW1lIElucHV0IENvbG9yIFNjaGVtZVxuICogQWRqdXN0cyBjb2xvciBzY2hlbWUgYmFzZWQgb24gdGhlbWVcbiAqL1xuQG1peGluIGRhdGUtdGltZS1pbnB1dHMge1xuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbiAgaW5wdXRbdHlwZT1cInRpbWVcIl0ge1xuICAgIGNvbG9yLXNjaGVtZTogbGlnaHQ7XG4gIH1cblxuICA6cm9vdFtzdG9yeWJvb2stY2FyYm9uLXRoZW1lPVwiZzkwXCJdICYsXG4gIDpyb290W3N0b3J5Ym9vay1jYXJib24tdGhlbWU9XCJnMTAwXCJdICYge1xuICAgIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuICAgIGlucHV0W3R5cGU9XCJ0aW1lXCJdIHtcbiAgICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgXCJAY2FyYm9uL2xheW91dFwiIGFzICo7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZVwiIGFzICo7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy9jb21wb25lbnRzL2J1dHRvbi90b2tlbnNcIiBhcyBidXR0b24tdG9rZW5zO1xuQHVzZSBcIm1peGluc1wiIGFzICo7XG5AdXNlIFwicGFuZWwtc2hhcmVkXCIgYXMgKjtcblxuLyoqXG4gKiBQQU5FTCBTVFlMRVNcbiAqIE1haW4gc3R5bGVzIGZvciB0aGUgU3Rvcnlib29rIHBhbmVsIGFyZWEgKGJvdHRvbS9yaWdodCBwYW5lbClcbiAqIEluY2x1ZGVzIENvbnRyb2xzLCBBY3Rpb25zLCBJbnRlcmFjdGlvbnMsIGFuZCBBMTF5IGFkZG9uc1xuICovXG5cbiNwYW5lbC10YWItY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDFweCkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XG5cbiAgLyoqXG4gICAqIExvYWRpbmcgU3RhdGUgQmFja2dyb3VuZHNcbiAgICogSW5oZXJpdCBiYWNrZ3JvdW5kIGZvciBsb2FkaW5nIHNjcmVlbnNcbiAgICovXG4gIC5jc3MteTZzZDZ1LFxuICAuY3NzLTE0MDBhaXcsXG4gID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuXG4gICAgPiBkaXYge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFyYWdyYXBoIFRleHQgQ29sb3JcbiAgICovXG4gIHAge1xuICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xsYmFyIFN0eWxpbmdcbiAgICogQ3VzdG9tIHNjcm9sbGJhciBmb3IgUmFkaXggVUkgc2Nyb2xsIGFyZWFzXG4gICAqL1xuICBbZGF0YS1yYWRpeC1zY3JvbGwtYXJlYS12aWV3cG9ydF0ge1xuICAgICsgZGl2ID4gZGl2IHtcbiAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItaW52ZXJzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKiBDT05UUk9MUyBBRERPTlxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIC8qKlxuICAgKiBTYXZlIEZyb20gQ29udHJvbHMgQWN0aW9uXG4gICAqIFRvb2xiYXIgYWN0aW9uIHRvIHNhdmUgY29udHJvbCBzdGF0ZVxuICAgKi9cbiAgW2lkPVwic2F2ZS1mcm9tLWNvbnRyb2xzXCJdIHtcbiAgICA+IGRpdiB7XG4gICAgICAvKipcbiAgICAgICAqIEN1c3RvbSBDU1MgdmFyaWFibGUgZm9yIGhpZ2hsaWdodCBjb2xvclxuICAgICAgICogQmxlbmRzIGludGVyYWN0aXZlIGJvcmRlciB3aXRoIGxheWVyIGJhY2tncm91bmRcbiAgICAgICAqL1xuICAgICAgLS1oaWdobGlnaHQtYmctY29sb3I6IGNvbG9yLW1peChcbiAgICAgICAgaW4gc3JnYixcbiAgICAgICAgdmFyKC0tY2RzLWJvcmRlci1pbnRlcmFjdGl2ZSkgMzAlLFxuICAgICAgICB2YXIoLS1jZHMtbGF5ZXItMDEpXG4gICAgICApO1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItMDE7XG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItc3VidGxlLTAxO1xuICAgICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgQGluY2x1ZGUgcGFuZWwtYnV0dG9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBDb250cm9scyBCdXR0b25cbiAgICogQnV0dG9uIHRvIHJlc2V0IGFsbCBjb250cm9scyB0byBkZWZhdWx0IHZhbHVlc1xuICAgKi9cbiAgYnV0dG9uW3RpdGxlPVwiUmVzZXQgY29udHJvbHNcIl0ge1xuICAgIEBpbmNsdWRlIHBhbmVsLWJ1dHRvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9scyBBcmdUYWJsZVxuICAgKiBUYWJsZSBzaG93aW5nIGNvbXBvbmVudCBwcm9wcy9hcmdzIHdpdGggZWRpdGFibGUgY29udHJvbHNcbiAgICovXG4gIHRhYmxlLmRvY2Jsb2NrLWFyZ3N0YWJsZSB7XG4gICAgLyoqXG4gICAgICogVGFibGUgSGVhZGVyXG4gICAgICogQ29sdW1uIHRpdGxlcyAoTmFtZSwgRGVzY3JpcHRpb24sIFR5cGUsIGV0Yy4pXG4gICAgICovXG4gICAgPiB0aGVhZC5kb2NibG9jay1hcmdzdGFibGUtaGVhZCA+IHRyID4gdGggPiBzcGFuIHtcbiAgICAgIGNvbG9yOiAkdGV4dC1wcmltYXJ5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRhYmxlIEJvZHlcbiAgICAgKiBSb3dzIGNvbnRhaW5pbmcgY29udHJvbCBpbnB1dHNcbiAgICAgKi9cbiAgICA+IHRib2R5LmRvY2Jsb2NrLWFyZ3N0YWJsZS1ib2R5IHtcbiAgICAgIC8qKlxuICAgICAgICogU3RhbmRhcmQgQ29udHJvbCBSb3dzXG4gICAgICAgKiBJbmRpdmlkdWFsIHByb3AvYXJnIHJvd3Mgd2l0aCBjb250cm9sc1xuICAgICAgICovXG4gICAgICA+IHRyOm5vdChbdGl0bGVdKSA+IHRkIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1zdWJ0bGUtMDE7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFR5cGUgQmFkZ2VzXG4gICAgICAgICAqIERpc3BsYXkgdHlwZSBpbmZvcm1hdGlvbiAoc3RyaW5nLCBudW1iZXIsIGV0Yy4pXG4gICAgICAgICAqL1xuICAgICAgICAuY3NzLW1rampwcyxcbiAgICAgICAgLmNzcy1vMWQ3a28ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICRsYXllci0wMTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLXN1YnRsZS0wMTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVxdWlyZWQgSW5kaWNhdG9yXG4gICAgICAgICAqIFNob3dzIHdoaWNoIHByb3BzIGFyZSByZXF1aXJlZFxuICAgICAgICAgKi9cbiAgICAgICAgc3Bhblt0aXRsZT1cIlJlcXVpcmVkXCJdIHtcbiAgICAgICAgICBjb2xvcjogJHN1cHBvcnQtZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9ybSBDb250cm9sc1xuICAgICAgICAgKiBBbGwgaW5wdXQgdHlwZXMgd2l0aGluIHRoZSBjb250cm9scyB0YWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgQGluY2x1ZGUgZm9ybS1jb250cm9scztcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmFkaW8gQnV0dG9uIFN0eWxpbmdcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgICAgICAgQGluY2x1ZGUgcmFkaW8tYnV0dG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvZ2dsZSBTd2l0Y2ggU3R5bGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgQGluY2x1ZGUgdG9nZ2xlLXN3aXRjaDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGF0ZS9UaW1lIElucHV0c1xuICAgICAgICAgKi9cbiAgICAgICAgQGluY2x1ZGUgZGF0ZS10aW1lLWlucHV0cztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBcnJheS9PYmplY3QgSXRlbSBSb3dzXG4gICAgICAgKiBFeHBhbmRhYmxlIHJvd3MgZm9yIGNvbXBsZXggY29udHJvbCB0eXBlc1xuICAgICAgICovXG4gICAgICA+IHRyW3RpdGxlfj1cIml0ZW1zXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGxheWVyLTAxICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgMCAkYm9yZGVyLXN1YnRsZS0wMTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9jdXMgc3RhdGUgZm9yIGVudGlyZSByb3dcbiAgICAgICAgICovXG4gICAgICAgICY6aGFzKGJ1dHRvbjpmb2N1cykge1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAkZm9jdXMgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGF5ZXItMDEgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgID4gdGQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAkdGV4dC1wcmltYXJ5O1xuXG4gICAgICAgICAgPiBzcGFuID4gc3ZnIHtcbiAgICAgICAgICAgIGNvbG9yOiAkaWNvbi1wcmltYXJ5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgID4gYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvZGUgU291cmNlIEJsb2NrXG4gICAqIFN5bnRheC1oaWdobGlnaHRlZCBjb2RlIGV4YW1wbGVzIGluIGRvY3NcbiAgICovXG4gIC5kb2NibG9jay1zb3VyY2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1zdWJ0bGUtMDE7XG4gIH1cblxuICAvKipcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKiBJTlRFUkFDVElPTlMgQURET05cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKiBQYW5lbCBmb3IgcGxheSBmdW5jdGlvbiBpbnRlcmFjdGlvbnMgYW5kIHRlc3RpbmdcbiAgICovXG4gIC8qKlxuICAgKiBJbnRlcmFjdGlvbnMgUGFuZWwgQ29udGFpbmVyXG4gICAqL1xuICBkaXY6aGFzKG5hdlthcmlhLWxhYmVsPVwiQ29tcG9uZW50IHRlc3RzIHRvb2xiYXJcIl0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZHMtYmFja2dyb3VuZCk7XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcmFjdGlvbnMgVG9vbGJhclxuICAgICAqIENvbnRyb2xzIGZvciBwbGF5IGZ1bmN0aW9uIHRlc3RpbmcgKHBsYXksIHJld2luZCwgZXRjLilcbiAgICAgKi9cbiAgICBuYXZbYXJpYS1sYWJlbD1cIkNvbXBvbmVudCB0ZXN0cyB0b29sYmFyXCJdIHtcbiAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItc3VidGxlLTAxO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJhY2tncm91bmQ6ICRsYXllci0wMTtcblxuICAgICAgPiBkaXYgPiBwIHtcbiAgICAgICAgY29sb3I6ICR0ZXh0LXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVGVzdCBTdGF0dXMgQmFkZ2VcbiAgICAgICAqIFNob3dzIHBhc3MvZmFpbC9ydW5uaW5nIHN0YXR1c1xuICAgICAgICovXG4gICAgICBkaXZbYXJpYS1sYWJlbD1cIlN0YXR1cyBvZiB0aGUgdGVzdCBydW5cIl0ge1xuICAgICAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMDg7XG4gICAgICAgIG1pbi1pbmxpbmUtc2l6ZTogJHNwYWNpbmctMTA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIaWRlIGVtcHR5IHNwYW5zXG4gICAgICAgKi9cbiAgICAgIHNwYW46ZW1wdHkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFRvb2xiYXIgQnV0dG9uc1xuICAgICAgICovXG4gICAgICBidXR0b24ge1xuICAgICAgICBAaW5jbHVkZSBidXR0b24tc2l6ZSgnbGFyZ2UnKTtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uLXJlc2V0O1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbi1zdGF0ZXM7XG4gICAgICAgICAgJjpmb2N1c3tcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvY3VzLXN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVyYWN0aW9ucyBMaXN0XG4gICAgICogTGlzdCBvZiBpbnRlcmFjdGlvbiBzdGVwcyBmcm9tIHBsYXkgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBkaXZbYXJpYS1sYWJlbD1cIkludGVyYWN0aW9ucyBsaXN0XCJdIHtcbiAgICAgIGRpdjpoYXMoPiBidXR0b25bYXJpYS1sYWJlbD1cIkludGVyYWN0aW9uIHN0ZXBcIl0pIHtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uLXN0YXRlcztcbiAgICAgIH1cbiAgICAgID4gZGl2IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLXN1YnRsZS0wMSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKiBBQ0NFU1NJQklMSVRZIChBMTFZKSBBRERPTlxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqIFBhbmVsIGZvciBhY2Nlc3NpYmlsaXR5IHZpb2xhdGlvbiBkZXRlY3Rpb25cbiAgICovXG5cbiAgLyoqXG4gICAqIEExMXkgVGFicyBDb250YWluZXJcbiAgICogVmlvbGF0aW9ucywgUGFzc2VzLCBJbmNvbXBsZXRlIHRhYnNcbiAgICovXG4gIGRpdjpoYXMoPiBkaXYgPiBbZGF0YS10eXBlPVwidmlvbGF0aW9uc1wiXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci0wMTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1ibG9jay1lbmQ6IDFweCBzb2xpZCAkYm9yZGVyLXN1YnRsZS0wMTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgZGl2W3JvbGU9XCJ0YWJsaXN0XCJdICsgZGl2IHtcbiAgICAgIGdhcDogMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb24tVGFiIEJ1dHRvbnMgaW4gQTExeSBIZWFkZXJcbiAgICAgKiBTZXR0aW5ncyBhbmQgb3RoZXIgYWN0aW9uIGJ1dHRvbnNcbiAgICAgKi9cbiAgICBidXR0b246bm90KFtyb2xlPVwidGFiXCJdKSB7XG4gICAgICBAaW5jbHVkZSBidXR0b24tc2l6ZSgnbGFyZ2UnKTtcbiAgICAgIEBpbmNsdWRlIGJ1dHRvbi1jb21wbGV0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBMTF5IFRhYiBCdXR0b25zXG4gICAgICogVmlvbGF0aW9ucywgUGFzc2VzLCBJbmNvbXBsZXRlIHRhYnNcbiAgICAgKi9cbiAgICBidXR0b25bcm9sZT1cInRhYlwiXSB7XG4gICAgICBAaW5jbHVkZSB0YWItYnV0dG9uO1xuXG4gICAgICAvKipcbiAgICAgICAqIFZpb2xhdGlvbiBDb3VudCBCYWRnZVxuICAgICAgICovXG4gICAgICA+IGRpdiA+IGRpdiB7XG4gICAgICAgIEBpbmNsdWRlIGJhZGdlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2ZSBUYWIgU3RhdGVcbiAgICAgKi9cbiAgICBidXR0b25bZGF0YS1hY3RpdmU9XCJ0cnVlXCJdIHtcbiAgICAgIEBpbmNsdWRlIHRhYi1hY3RpdmU7XG5cbiAgICAgID4gZGl2ID4gZGl2IHtcbiAgICAgICAgQGluY2x1ZGUgYmFkZ2UodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEExMXkgVmlvbGF0aW9uIExpc3RcbiAgICogTGlzdCBvZiBhY2Nlc3NpYmlsaXR5IGlzc3VlcyBhbmQgdGhlaXIgZGV0YWlsc1xuICAgKi9cbiAgZGl2Omhhcyg+IGRpdiA+IFtkYXRhLXR5cGU9XCJ2aW9sYXRpb25zXCJdKSArIGRpdiB7XG4gICAgLyoqXG4gICAgICogSW5kaXZpZHVhbCBWaW9sYXRpb24gSXRlbXNcbiAgICAgKiBDbGlja2FibGUgcm93cyBzaG93aW5nIHZpb2xhdGlvbiBzdW1tYXJ5XG4gICAgICovXG4gICAgW2RhdGEtYWN0aXZlXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItMDE7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJGludGVyYWN0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItaG92ZXItMDE7XG5cbiAgICAgICAgKyBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1ob3Zlci0wMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICAgID4gZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgPiA6bnRoLWxhc3QtY2hpbGQoMikge1xuICAgICAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFjdGlvbiBCdXR0b25zIGluIFZpb2xhdGlvbiBSb3dcbiAgICAgICAqIEhpZ2hsaWdodCwgY29weSwgZXRjLlxuICAgICAgICovXG4gICAgICA+IGJ1dHRvbiB7XG4gICAgICAgIEBpbmNsdWRlIHBhbmVsLWJ1dHRvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWaW9sYXRpb24gRGV0YWlscyBQYW5lbFxuICAgICAqIEV4cGFuZGVkIHZpZXcgc2hvd2luZyBmdWxsIHZpb2xhdGlvbiBpbmZvcm1hdGlvblxuICAgICAqL1xuICAgIFtkYXRhLWFjdGl2ZV0gKyBbaWQqPVwiZGV0YWlsc1wiXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItMDE7XG5cbiAgICAgIC8qKlxuICAgICAgICogSGVscCBMaW5rc1xuICAgICAgICogRXh0ZXJuYWwgbGlua3MgdG8gV0NBRyBndWlkZWxpbmVzXG4gICAgICAgKi9cbiAgICAgIHAgPiBhID4gc3BhbiB7XG4gICAgICAgIGNvbG9yOiAkbGluay1wcmltYXJ5O1xuXG4gICAgICAgID4gc3ZnIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuXG4gICAgICAgICAgPiBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6ICRsaW5rLXByaW1hcnk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBEZXRhaWwgVGFicyAoSFRNTCwgSGlnaGxpZ2h0KVxuICAgICAgICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0YWJzIHdpdGhpbiB2aW9sYXRpb24gZGV0YWlsc1xuICAgICAgICovXG4gICAgICBbcm9sZT1cInRhYmxpc3RcIl0sXG4gICAgICBbcm9sZT1cInRhYnBhbmVsXCJdIHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLTAyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAkYm9yZGVyLXN1YnRsZS0wMTtcblxuICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbi1zdGF0ZXMoJ2xheWVyLTAyJyk7XG5cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvY3VzLXN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCBBcmVhIENvbnRlbnRcbiAgICAgKi9cbiAgICBbZGF0YS1yYWRpeC1zY3JvbGwtYXJlYS1jb250ZW50XSB7XG4gICAgICA+IGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1zdWJ0bGUtMDE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb2RlIGdlbmVyYXRlZCBieSBAY2FyYm9uL3RoZW1lcy4gRE8gTk9UIEVESVQuXG4vL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29uZmlnJztcbkB1c2UgJy4uL3RoZW1lJztcblxuLy8vIEludGVybmFsIGhlbHBlciBmb3IgZ2VuZXJhdGluZyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbkBmdW5jdGlvbiBfZ2V0KCR0b2tlbikge1xuICBAaWYgY29uZmlnLiR1c2UtZmFsbGJhY2stdmFsdWUgPT0gZmFsc2Uge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skdG9rZW59KTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiB2YXIoLS0je2NvbmZpZy4kcHJlZml4fS0jeyR0b2tlbn0sICN7dGhlbWUuZ2V0KCR0b2tlbil9KTtcbiAgfVxufVxuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZGAgdG9rZW5cbiRiYWNrZ3JvdW5kOiBfZ2V0KCdiYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWFjdGl2ZWAgdG9rZW5cbiRiYWNrZ3JvdW5kLWFjdGl2ZTogX2dldCgnYmFja2dyb3VuZC1hY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtc2VsZWN0ZWRgIHRva2VuXG4kYmFja2dyb3VuZC1zZWxlY3RlZDogX2dldCgnYmFja2dyb3VuZC1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLXNlbGVjdGVkLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLXNlbGVjdGVkLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtaG92ZXI6IF9nZXQoJ2JhY2tncm91bmQtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtYnJhbmRgIHRva2VuXG4kYmFja2dyb3VuZC1icmFuZDogX2dldCgnYmFja2dyb3VuZC1icmFuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1pbnZlcnNlYCB0b2tlblxuJGJhY2tncm91bmQtaW52ZXJzZTogX2dldCgnYmFja2dyb3VuZC1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWludmVyc2UtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLWludmVyc2UtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAxYCB0b2tlblxuJGxheWVyLTAxOiBfZ2V0KCdsYXllci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAxYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMTogX2dldCgnbGF5ZXItYWN0aXZlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAxYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDE6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAxYCB0b2tlblxuJGxheWVyLWhvdmVyLTAxOiBfZ2V0KCdsYXllci1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDFgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDE6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMTogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAyYCB0b2tlblxuJGxheWVyLTAyOiBfZ2V0KCdsYXllci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAyYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMjogX2dldCgnbGF5ZXItYWN0aXZlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAyYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDI6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAyYCB0b2tlblxuJGxheWVyLWhvdmVyLTAyOiBfZ2V0KCdsYXllci1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDJgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDI6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMjogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAzYCB0b2tlblxuJGxheWVyLTAzOiBfZ2V0KCdsYXllci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAzYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMzogX2dldCgnbGF5ZXItYWN0aXZlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAzYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDM6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAzYCB0b2tlblxuJGxheWVyLWhvdmVyLTAzOiBfZ2V0KCdsYXllci1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDNgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDM6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMzogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWludmVyc2VgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZTogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtZGlzYWJsZWRgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtZGlzYWJsZWQ6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDFgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAxOiBfZ2V0KCdsYXllci1hY2NlbnQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDFgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMTogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMTogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDJgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAyOiBfZ2V0KCdsYXllci1hY2NlbnQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDJgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMjogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMjogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDNgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAzOiBfZ2V0KCdsYXllci1hY2NlbnQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDNgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMzogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMzogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wMWAgdG9rZW5cbiRmaWVsZC0wMTogX2dldCgnZmllbGQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAxYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAxOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDJgIHRva2VuXG4kZmllbGQtMDI6IF9nZXQoJ2ZpZWxkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wMmAgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMjogX2dldCgnZmllbGQtaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAzYCB0b2tlblxuJGZpZWxkLTAzOiBfZ2V0KCdmaWVsZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDNgIHRva2VuXG4kZmllbGQtaG92ZXItMDM6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpbnRlcmFjdGl2ZWAgdG9rZW5cbiRpbnRlcmFjdGl2ZTogX2dldCgnaW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDBgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMDogX2dldCgnYm9yZGVyLXN1YnRsZS0wMCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wMWAgdG9rZW5cbiRib3JkZXItc3VidGxlLTAxOiBfZ2V0KCdib3JkZXItc3VidGxlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDE6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDJgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMjogX2dldCgnYm9yZGVyLXN1YnRsZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMmAgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAyOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAzYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDM6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDNgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMzogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wMWAgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAxOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAyYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDI6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDNgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMzogX2dldCgnYm9yZGVyLXN0cm9uZy0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDFgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDE6IF9nZXQoJ2JvcmRlci10aWxlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wMmAgdG9rZW5cbiRib3JkZXItdGlsZS0wMjogX2dldCgnYm9yZGVyLXRpbGUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAzYCB0b2tlblxuJGJvcmRlci10aWxlLTAzOiBfZ2V0KCdib3JkZXItdGlsZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWludmVyc2VgIHRva2VuXG4kYm9yZGVyLWludmVyc2U6IF9nZXQoJ2JvcmRlci1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItaW50ZXJhY3RpdmVgIHRva2VuXG4kYm9yZGVyLWludGVyYWN0aXZlOiBfZ2V0KCdib3JkZXItaW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1kaXNhYmxlZGAgdG9rZW5cbiRib3JkZXItZGlzYWJsZWQ6IF9nZXQoJ2JvcmRlci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1wcmltYXJ5YCB0b2tlblxuJHRleHQtcHJpbWFyeTogX2dldCgndGV4dC1wcmltYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXNlY29uZGFyeWAgdG9rZW5cbiR0ZXh0LXNlY29uZGFyeTogX2dldCgndGV4dC1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtcGxhY2Vob2xkZXJgIHRva2VuXG4kdGV4dC1wbGFjZWhvbGRlcjogX2dldCgndGV4dC1wbGFjZWhvbGRlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1oZWxwZXJgIHRva2VuXG4kdGV4dC1oZWxwZXI6IF9nZXQoJ3RleHQtaGVscGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWVycm9yYCB0b2tlblxuJHRleHQtZXJyb3I6IF9nZXQoJ3RleHQtZXJyb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtaW52ZXJzZWAgdG9rZW5cbiR0ZXh0LWludmVyc2U6IF9nZXQoJ3RleHQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1vbi1jb2xvcmAgdG9rZW5cbiR0ZXh0LW9uLWNvbG9yOiBfZ2V0KCd0ZXh0LW9uLWNvbG9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LW9uLWNvbG9yLWRpc2FibGVkYCB0b2tlblxuJHRleHQtb24tY29sb3ItZGlzYWJsZWQ6IF9nZXQoJ3RleHQtb24tY29sb3ItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtZGlzYWJsZWRgIHRva2VuXG4kdGV4dC1kaXNhYmxlZDogX2dldCgndGV4dC1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1wcmltYXJ5YCB0b2tlblxuJGxpbmstcHJpbWFyeTogX2dldCgnbGluay1wcmltYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXByaW1hcnktaG92ZXJgIHRva2VuXG4kbGluay1wcmltYXJ5LWhvdmVyOiBfZ2V0KCdsaW5rLXByaW1hcnktaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstc2Vjb25kYXJ5YCB0b2tlblxuJGxpbmstc2Vjb25kYXJ5OiBfZ2V0KCdsaW5rLXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLXZpc2l0ZWRgIHRva2VuXG4kbGluay1pbnZlcnNlLXZpc2l0ZWQ6IF9nZXQoJ2xpbmstaW52ZXJzZS12aXNpdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXZpc2l0ZWRgIHRva2VuXG4kbGluay12aXNpdGVkOiBfZ2V0KCdsaW5rLXZpc2l0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZWAgdG9rZW5cbiRsaW5rLWludmVyc2U6IF9nZXQoJ2xpbmstaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLWFjdGl2ZWAgdG9rZW5cbiRsaW5rLWludmVyc2UtYWN0aXZlOiBfZ2V0KCdsaW5rLWludmVyc2UtYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2UtaG92ZXJgIHRva2VuXG4kbGluay1pbnZlcnNlLWhvdmVyOiBfZ2V0KCdsaW5rLWludmVyc2UtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tcHJpbWFyeWAgdG9rZW5cbiRpY29uLXByaW1hcnk6IF9nZXQoJ2ljb24tcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1zZWNvbmRhcnlgIHRva2VuXG4kaWNvbi1zZWNvbmRhcnk6IF9nZXQoJ2ljb24tc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWludmVyc2VgIHRva2VuXG4kaWNvbi1pbnZlcnNlOiBfZ2V0KCdpY29uLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tb24tY29sb3JgIHRva2VuXG4kaWNvbi1vbi1jb2xvcjogX2dldCgnaWNvbi1vbi1jb2xvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1vbi1jb2xvci1kaXNhYmxlZGAgdG9rZW5cbiRpY29uLW9uLWNvbG9yLWRpc2FibGVkOiBfZ2V0KCdpY29uLW9uLWNvbG9yLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWRpc2FibGVkYCB0b2tlblxuJGljb24tZGlzYWJsZWQ6IF9nZXQoJ2ljb24tZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24taW50ZXJhY3RpdmVgIHRva2VuXG4kaWNvbi1pbnRlcmFjdGl2ZTogX2dldCgnaWNvbi1pbnRlcmFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1lcnJvcmAgdG9rZW5cbiRzdXBwb3J0LWVycm9yOiBfZ2V0KCdzdXBwb3J0LWVycm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXN1Y2Nlc3NgIHRva2VuXG4kc3VwcG9ydC1zdWNjZXNzOiBfZ2V0KCdzdXBwb3J0LXN1Y2Nlc3MnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtd2FybmluZ2AgdG9rZW5cbiRzdXBwb3J0LXdhcm5pbmc6IF9nZXQoJ3N1cHBvcnQtd2FybmluZycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1pbmZvYCB0b2tlblxuJHN1cHBvcnQtaW5mbzogX2dldCgnc3VwcG9ydC1pbmZvJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWVycm9yLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1lcnJvci1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LWVycm9yLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtc3VjY2Vzcy1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtc3VjY2Vzcy1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC13YXJuaW5nLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC13YXJuaW5nLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtd2FybmluZy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWluZm8taW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LWluZm8taW52ZXJzZTogX2dldCgnc3VwcG9ydC1pbmZvLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi1tYWpvcmAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tbWFqb3I6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi1tYWpvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLW1pbm9yYCB0b2tlblxuJHN1cHBvcnQtY2F1dGlvbi1taW5vcjogX2dldCgnc3VwcG9ydC1jYXV0aW9uLW1pbm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkYCB0b2tlblxuJHN1cHBvcnQtY2F1dGlvbi11bmRlZmluZWQ6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi11bmRlZmluZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1wb3BvdmVyLWJhY2tncm91bmQ6IF9nZXQoJ2FpLXBvcG92ZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDFgIHRva2VuXG4kYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDE6IF9nZXQoJ2FpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMmAgdG9rZW5cbiRhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMjogX2dldCgnYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWlubmVyLXNoYWRvd2AgdG9rZW5cbiRhaS1pbm5lci1zaGFkb3c6IF9nZXQoJ2FpLWlubmVyLXNoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1zdGFydC1zbWAgdG9rZW5cbiRhaS1hdXJhLXN0YXJ0LXNtOiBfZ2V0KCdhaS1hdXJhLXN0YXJ0LXNtJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLXN0YXJ0YCB0b2tlblxuJGFpLWF1cmEtc3RhcnQ6IF9nZXQoJ2FpLWF1cmEtc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtZW5kYCB0b2tlblxuJGFpLWF1cmEtZW5kOiBfZ2V0KCdhaS1hdXJhLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLWF1cmEtaG92ZXItYmFja2dyb3VuZDogX2dldCgnYWktYXVyYS1ob3Zlci1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLXN0YXJ0YCB0b2tlblxuJGFpLWF1cmEtaG92ZXItc3RhcnQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItZW5kYCB0b2tlblxuJGFpLWF1cmEtaG92ZXItZW5kOiBfZ2V0KCdhaS1hdXJhLWhvdmVyLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLXN0cm9uZ2AgdG9rZW5cbiRhaS1ib3JkZXItc3Ryb25nOiBfZ2V0KCdhaS1ib3JkZXItc3Ryb25nJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItc3RhcnRgIHRva2VuXG4kYWktYm9yZGVyLXN0YXJ0OiBfZ2V0KCdhaS1ib3JkZXItc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1lbmRgIHRva2VuXG4kYWktYm9yZGVyLWVuZDogX2dldCgnYWktYm9yZGVyLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktZHJvcC1zaGFkb3dgIHRva2VuXG4kYWktZHJvcC1zaGFkb3c6IF9nZXQoJ2FpLWRyb3Atc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1za2VsZXRvbi1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLXNrZWxldG9uLWJhY2tncm91bmQ6IF9nZXQoJ2FpLXNrZWxldG9uLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXNrZWxldG9uLWVsZW1lbnQtYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmQ6IF9nZXQoXG4gICdhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmQnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktb3ZlcmxheWAgdG9rZW5cbiRhaS1vdmVybGF5OiBfZ2V0KCdhaS1vdmVybGF5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWNlbnRlcmAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWNlbnRlcjogX2dldCgnYWktcG9wb3Zlci1jYXJldC1jZW50ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tOiBfZ2V0KCdhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kOiBfZ2V0KFxuICAnYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZCdcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kLWFjdGlvbnNgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zOiBfZ2V0KFxuICAnYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1wcm9tcHQtYmFja2dyb3VuZDogX2dldCgnY2hhdC1wcm9tcHQtYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYm9yZGVyLXN0YXJ0YCB0b2tlblxuJGNoYXQtcHJvbXB0LWJvcmRlci1zdGFydDogX2dldCgnY2hhdC1wcm9tcHQtYm9yZGVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1ib3JkZXItZW5kYCB0b2tlblxuJGNoYXQtcHJvbXB0LWJvcmRlci1lbmQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJvcmRlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLXVzZXJgIHRva2VuXG4kY2hhdC1idWJibGUtdXNlcjogX2dldCgnY2hhdC1idWJibGUtdXNlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtYWdlbnRgIHRva2VuXG4kY2hhdC1idWJibGUtYWdlbnQ6IF9nZXQoJ2NoYXQtYnViYmxlLWFnZW50JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS1ib3JkZXJgIHRva2VuXG4kY2hhdC1idWJibGUtYm9yZGVyOiBfZ2V0KCdjaGF0LWJ1YmJsZS1ib3JkZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLWJvdGAgdG9rZW5cbiRjaGF0LWF2YXRhci1ib3Q6IF9nZXQoJ2NoYXQtYXZhdGFyLWJvdCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItYWdlbnRgIHRva2VuXG4kY2hhdC1hdmF0YXItYWdlbnQ6IF9nZXQoJ2NoYXQtYXZhdGFyLWFnZW50JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci11c2VyYCB0b2tlblxuJGNoYXQtYXZhdGFyLXVzZXI6IF9nZXQoJ2NoYXQtYXZhdGFyLXVzZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtc2hlbGwtYmFja2dyb3VuZGAgdG9rZW5cbiRjaGF0LXNoZWxsLWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtc2hlbGwtYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1oZWFkZXItYmFja2dyb3VuZGAgdG9rZW5cbiRjaGF0LWhlYWRlci1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LWhlYWRlci1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbmAgdG9rZW5cbiRjaGF0LWJ1dHRvbjogX2dldCgnY2hhdC1idXR0b24nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLWhvdmVyYCB0b2tlblxuJGNoYXQtYnV0dG9uLWhvdmVyOiBfZ2V0KCdjaGF0LWJ1dHRvbi1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tdGV4dC1ob3ZlcmAgdG9rZW5cbiRjaGF0LWJ1dHRvbi10ZXh0LWhvdmVyOiBfZ2V0KCdjaGF0LWJ1dHRvbi10ZXh0LWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1hY3RpdmVgIHRva2VuXG4kY2hhdC1idXR0b24tYWN0aXZlOiBfZ2V0KCdjaGF0LWJ1dHRvbi1hY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXNlbGVjdGVkYCB0b2tlblxuJGNoYXQtYnV0dG9uLXNlbGVjdGVkOiBfZ2V0KCdjaGF0LWJ1dHRvbi1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZGAgdG9rZW5cbiRjaGF0LWJ1dHRvbi10ZXh0LXNlbGVjdGVkOiBfZ2V0KCdjaGF0LWJ1dHRvbi10ZXh0LXNlbGVjdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBoaWdobGlnaHRgIHRva2VuXG4kaGlnaGxpZ2h0OiBfZ2V0KCdoaWdobGlnaHQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYG92ZXJsYXlgIHRva2VuXG4kb3ZlcmxheTogX2dldCgnb3ZlcmxheScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdG9nZ2xlLW9mZmAgdG9rZW5cbiR0b2dnbGUtb2ZmOiBfZ2V0KCd0b2dnbGUtb2ZmJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzaGFkb3dgIHRva2VuXG4kc2hhZG93OiBfZ2V0KCdzaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzYCB0b2tlblxuJGZvY3VzOiBfZ2V0KCdmb2N1cycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXMtaW5zZXRgIHRva2VuXG4kZm9jdXMtaW5zZXQ6IF9nZXQoJ2ZvY3VzLWluc2V0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1cy1pbnZlcnNlYCB0b2tlblxuJGZvY3VzLWludmVyc2U6IF9nZXQoJ2ZvY3VzLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNrZWxldG9uLWJhY2tncm91bmRgIHRva2VuXG4kc2tlbGV0b24tYmFja2dyb3VuZDogX2dldCgnc2tlbGV0b24tYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2tlbGV0b24tZWxlbWVudGAgdG9rZW5cbiRza2VsZXRvbi1lbGVtZW50OiBfZ2V0KCdza2VsZXRvbi1lbGVtZW50JykgIWRlZmF1bHQ7XG4iLCIvLyBDb2RlIGdlbmVyYXRlZCBieSBAY2FyYm9uL2xheW91dC4gRE8gTk9UIEVESVQuXG4vL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wMTogMC4xMjVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDI6IDAuMjVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDM6IDAuNXJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wNDogMC43NXJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wNTogMXJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wNjogMS41cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTA3OiAycmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTA4OiAyLjVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDk6IDNyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMTA6IDRyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMTE6IDVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMTI6IDZyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMTM6IDEwcmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTWFwXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nOiAoXG4gIHNwYWNpbmctMDE6ICRzcGFjaW5nLTAxLFxuICBzcGFjaW5nLTAyOiAkc3BhY2luZy0wMixcbiAgc3BhY2luZy0wMzogJHNwYWNpbmctMDMsXG4gIHNwYWNpbmctMDQ6ICRzcGFjaW5nLTA0LFxuICBzcGFjaW5nLTA1OiAkc3BhY2luZy0wNSxcbiAgc3BhY2luZy0wNjogJHNwYWNpbmctMDYsXG4gIHNwYWNpbmctMDc6ICRzcGFjaW5nLTA3LFxuICBzcGFjaW5nLTA4OiAkc3BhY2luZy0wOCxcbiAgc3BhY2luZy0wOTogJHNwYWNpbmctMDksXG4gIHNwYWNpbmctMTA6ICRzcGFjaW5nLTEwLFxuICBzcGFjaW5nLTExOiAkc3BhY2luZy0xMSxcbiAgc3BhY2luZy0xMjogJHNwYWNpbmctMTIsXG4gIHNwYWNpbmctMTM6ICRzcGFjaW5nLTEzLFxuKTtcbiIsIi8vXG4vLyBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTgsIDIwMjNcbi8vXG4vLyBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUtMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vL1xuXG5AdXNlICcuLi9jb25maWcnIGFzICo7XG5AdXNlICdAY2FyYm9uL3RoZW1lcy9zY3NzL2NvbmZpZycgd2l0aCAoXG4gICRwcmVmaXg6ICRwcmVmaXhcbik7XG5AdXNlICcuLi9jb21wYXQvdGhlbWVzJyBhcyBjb21wYXQ7XG5AdXNlICcuLi90aGVtZXMnO1xuXG5AZm9yd2FyZCAnQGNhcmJvbi90aGVtZXMvc2Nzcy90aGVtZScgd2l0aCAoXG4gICRmYWxsYmFjazogdGhlbWVzLiR3aGl0ZSAhZGVmYXVsdCxcbiAgJHRoZW1lOiBjb21wYXQuJHdoaXRlICFkZWZhdWx0XG4pO1xuQGZvcndhcmQgJ0BjYXJib24vdGhlbWVzL3Njc3MvdG9rZW5zJztcblxuQHVzZSAnQGNhcmJvbi90aGVtZXMvc2Nzcy90b2tlbnMnO1xuQHVzZSAnQGNhcmJvbi90aGVtZXMvc2Nzcy90aGVtZSc7XG5AdXNlICcuLi91dGlsaXRpZXMvY3VzdG9tLXByb3BlcnR5JztcblxuLy8gTGF5ZXIgc2V0c1xuJGxheWVyOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXInKTtcbiRsYXllci1hY3RpdmU6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1hY3RpdmUnKTtcbiRsYXllci1iYWNrZ3JvdW5kOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItYmFja2dyb3VuZCcpO1xuJGxheWVyLWhvdmVyOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItaG92ZXInKTtcbiRsYXllci1zZWxlY3RlZDogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLXNlbGVjdGVkJyk7XG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXI6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1zZWxlY3RlZC1ob3ZlcicpO1xuJGxheWVyLWFjY2VudDogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLWFjY2VudCcpO1xuJGxheWVyLWFjY2VudC1ob3ZlcjogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLWFjY2VudC1ob3ZlcicpO1xuJGxheWVyLWFjY2VudC1hY3RpdmU6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1hY2NlbnQtYWN0aXZlJyk7XG5cbiRmaWVsZDogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2ZpZWxkJyk7XG4kZmllbGQtaG92ZXI6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdmaWVsZC1ob3ZlcicpO1xuXG4kYm9yZGVyLXN1YnRsZTogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2JvcmRlci1zdWJ0bGUnKTtcbiRib3JkZXItc3VidGxlLXNlbGVjdGVkOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignYm9yZGVyLXN1YnRsZS1zZWxlY3RlZCcpO1xuJGJvcmRlci1zdHJvbmc6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdib3JkZXItc3Ryb25nJyk7XG4kYm9yZGVyLXRpbGU6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdib3JkZXItdGlsZScpO1xuIl19 */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(C));var Y=`/**
 * Button Reset Mixin
 * Provides consistent button styling across all Carbon-themed components
 * @param {boolean} $include-focus - Whether to include focus styles (default: true)
 */
/**
 * Button Interactive States
 * Applies hover and active states using Carbon theme tokens
 * @param {string} $layer - Layer level for the component (default: 'background')
 */
/**
 * Complete Button Styling
 * Combines reset and interactive states for buttons
 * @param {boolean} $include-focus - Include focus styles
 * @param {string} $layer - Layer level for interactive states
 */
/**
 * Button Sizing
 * Applies consistent minimum dimensions using Carbon spacing tokens
 * @param {string} $size - Size level (small: 06, medium: 07, large: 08, xlarge: 10)
 */
/**
 * Input Field Styling
 * Provides consistent styling for input elements (text, textarea, select)
 * @param {string} $layer - Layer level for the input background
 */
/**
 * Border Bottom Input
 * Adds bottom border for text inputs following Carbon design pattern
 */
/**
 * Focus State
 * Applies consistent focus styling across components
 * @param {string} $type - Type of focus (inset, outline)
 */
/**
 * Tab Button Styling
 * Consistent styling for tab buttons with active state indicator
 */
/**
 * Active Tab Indicator
 * Applies bottom border to indicate active tab state
 */
/**
 * Badge/Tag Styling
 * For count indicators and tags
 * @param {boolean} $active - Whether the badge is on an active element
 */
/**
 * GLOBAL STYLES
 * Base styling for common elements across the Storybook interface
 */
/**
 * Scrollbar Styling
 * Uses Carbon theme tokens for consistent scrollbar colors
 */
* {
  scrollbar-color: var(--cds-border-inverse, #161616) var(--cds-border-subtle-01, #c6c6c6) !important;
}

/**
 * Base Body Text
 * Sets default text color using Carbon's secondary text token
 */
body {
  color: var(--cds-text-secondary, #525252) !important;
}

/**
 * Text Selection
 * Custom selection color with transparency for better readability
 * Note: Using hardcoded blue color (IBM Blue 60 with 60% opacity)
 */
::selection {
  background-color: rgba(15, 98, 254, 0.3764705882) !important;
}

::-moz-selection {
  background-color: rgba(15, 98, 254, 0.3764705882) !important;
}

/**
 * Main Layout Container
 * Styles the root Storybook layout structure
 */
#root > div > div {
  border-color: var(--cds-border-subtle-01, #c6c6c6);
}
#root > div > div > div:first-child::after {
  background-color: var(--cds-border-interactive, #0f62fe);
}

/**
 * Accessibility: Skip Link
 * Focus state for keyboard navigation skip link
 */
#storybook-preview-wrapper a[title="Skip to sidebar"]:focus {
  background-color: var(--cds-button-secondary, #393939);
  border-radius: 0px;
  color: var(--cds-text-on-color, #ffffff);
  box-shadow: var(--cds-focus, #0f62fe) 0px 0px 0px 2px inset;
}

/**
 * Popper Interactive Elements
 * Styling for tooltips, dropdowns, and other popper-based components
 */
[data-popper-interactive] {
  border-radius: 0 !important;
}
[data-popper-interactive] > div {
  background-color: var(--cds-layer-01, #f4f4f4);
  border-radius: 0 !important;
  color: var(--cds-text-secondary, #525252) !important;
}
[data-popper-interactive] svg > path {
  fill: var(--cds-text-primary, #161616);
}
[data-popper-interactive] button {
  border-radius: 0;
}
[data-popper-interactive] button span {
  color: var(--cds-text-primary, #161616) !important;
}
[data-popper-interactive] button:hover {
  background-color: var(--cds-layer-hover-01, #e8e8e8) !important;
}
[data-popper-interactive] button:active {
  background-color: var(--cds-layer-active-01, #c6c6c6) !important;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbIl9taXhpbnMuc2NzcyIsImNvbW1vbi5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXJib24vdGhlbWVzL3Njc3MvZ2VuZXJhdGVkL190b2tlbnMuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3N0eWxlcy9zY3NzL2NvbXBvbmVudHMvYnV0dG9uL190b2tlbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEJBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQ3RKQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBSUE7RUFDRTs7O0FBR0Y7QUFBQTtBQUFBO0FBQUE7QUFJQTtFQUNFOzs7QUFHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7RUFDRTs7O0FBR0Y7RUFDRTs7O0FBR0Y7QUFBQTtBQUFBO0FBQUE7QUFJQTtFQUNFLGNDZ0hpQjs7QUQ5R2pCO0VBQ0Usa0JDb0ppQjs7O0FEaEpyQjtBQUFBO0FBQUE7QUFBQTtBQUlBO0VBQ0Usa0JFdVRpQjtFRnRUakI7RUFDQSxPQ2lLYztFRGhLZDs7O0FBR0Y7QUFBQTtBQUFBO0FBQUE7QUFJQTtFQUNFOztBQUVBO0VBQ0Usa0JDekJPO0VEMEJQO0VBQ0E7O0FBR0Y7RUFDRSxNQzZIVzs7QUQxSGI7RUFDRTs7QUFFQTtFQUNFOztBRHpESjtFQUVJOztBQVFKO0VBRUkiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiQGNhcmJvbi9sYXlvdXRcIiBhcyAqO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvdGhlbWVcIiBhcyAqO1xuXG4vKipcbiAqIEJ1dHRvbiBSZXNldCBNaXhpblxuICogUHJvdmlkZXMgY29uc2lzdGVudCBidXR0b24gc3R5bGluZyBhY3Jvc3MgYWxsIENhcmJvbi10aGVtZWQgY29tcG9uZW50c1xuICogQHBhcmFtIHtib29sZWFufSAkaW5jbHVkZS1mb2N1cyAtIFdoZXRoZXIgdG8gaW5jbHVkZSBmb2N1cyBzdHlsZXMgKGRlZmF1bHQ6IHRydWUpXG4gKi9cbkBtaXhpbiBidXR0b24tcmVzZXQoJGluY2x1ZGUtZm9jdXM6IHRydWUpIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAkdGV4dC1wcmltYXJ5ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgQGlmICRpbmNsdWRlLWZvY3VzIHtcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAkZm9jdXMgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCdXR0b24gSW50ZXJhY3RpdmUgU3RhdGVzXG4gKiBBcHBsaWVzIGhvdmVyIGFuZCBhY3RpdmUgc3RhdGVzIHVzaW5nIENhcmJvbiB0aGVtZSB0b2tlbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSAkbGF5ZXIgLSBMYXllciBsZXZlbCBmb3IgdGhlIGNvbXBvbmVudCAoZGVmYXVsdDogJ2JhY2tncm91bmQnKVxuICovXG5AbWl4aW4gYnV0dG9uLXN0YXRlcygkbGF5ZXI6ICdiYWNrZ3JvdW5kJykge1xuICAmOmhvdmVyIHtcbiAgICBAaWYgJGxheWVyID09ICdsYXllci0wMScge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLWhvdmVyLTAxICFpbXBvcnRhbnQ7XG4gICAgfSBAZWxzZSBpZiAkbGF5ZXIgPT0gJ2xheWVyLTAyJyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItaG92ZXItMDIgIWltcG9ydGFudDtcbiAgICB9IEBlbHNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWhvdmVyICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIEBpZiAkbGF5ZXIgPT0gJ2xheWVyLTAxJyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItYWN0aXZlLTAxICFpbXBvcnRhbnQ7XG4gICAgfSBAZWxzZSBpZiAkbGF5ZXIgPT0gJ2xheWVyLTAyJyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItYWN0aXZlLTAyICFpbXBvcnRhbnQ7XG4gICAgfSBAZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1hY3RpdmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wbGV0ZSBCdXR0b24gU3R5bGluZ1xuICogQ29tYmluZXMgcmVzZXQgYW5kIGludGVyYWN0aXZlIHN0YXRlcyBmb3IgYnV0dG9uc1xuICogQHBhcmFtIHtib29sZWFufSAkaW5jbHVkZS1mb2N1cyAtIEluY2x1ZGUgZm9jdXMgc3R5bGVzXG4gKiBAcGFyYW0ge3N0cmluZ30gJGxheWVyIC0gTGF5ZXIgbGV2ZWwgZm9yIGludGVyYWN0aXZlIHN0YXRlc1xuICovXG5AbWl4aW4gYnV0dG9uLWNvbXBsZXRlKCRpbmNsdWRlLWZvY3VzOiB0cnVlLCAkbGF5ZXI6ICdiYWNrZ3JvdW5kJykge1xuICBAaW5jbHVkZSBidXR0b24tcmVzZXQoJGluY2x1ZGUtZm9jdXMpO1xuICBAaW5jbHVkZSBidXR0b24tc3RhdGVzKCRsYXllcik7XG59XG5cbi8qKlxuICogQnV0dG9uIFNpemluZ1xuICogQXBwbGllcyBjb25zaXN0ZW50IG1pbmltdW0gZGltZW5zaW9ucyB1c2luZyBDYXJib24gc3BhY2luZyB0b2tlbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSAkc2l6ZSAtIFNpemUgbGV2ZWwgKHNtYWxsOiAwNiwgbWVkaXVtOiAwNywgbGFyZ2U6IDA4LCB4bGFyZ2U6IDEwKVxuICovXG5AbWl4aW4gYnV0dG9uLXNpemUoJHNpemU6ICdtZWRpdW0nKSB7XG4gIEBpZiAkc2l6ZSA9PSAnc21hbGwnIHtcbiAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMDY7XG4gICAgbWluLWlubGluZS1zaXplOiAkc3BhY2luZy0wNjtcbiAgfSBAZWxzZSBpZiAkc2l6ZSA9PSAnbWVkaXVtJyB7XG4gICAgbWluLWJsb2NrLXNpemU6ICRzcGFjaW5nLTA3O1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogJHNwYWNpbmctMDc7XG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gJ2xhcmdlJyB7XG4gICAgbWluLWJsb2NrLXNpemU6ICRzcGFjaW5nLTA4O1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogJHNwYWNpbmctMDg7XG4gIH0gQGVsc2UgaWYgJHNpemUgPT0gJ3hsYXJnZScge1xuICAgIG1pbi1ibG9jay1zaXplOiAkc3BhY2luZy0xMDtcbiAgICBtaW4taW5saW5lLXNpemU6ICRzcGFjaW5nLTEwO1xuICB9XG59XG5cbi8qKlxuICogSW5wdXQgRmllbGQgU3R5bGluZ1xuICogUHJvdmlkZXMgY29uc2lzdGVudCBzdHlsaW5nIGZvciBpbnB1dCBlbGVtZW50cyAodGV4dCwgdGV4dGFyZWEsIHNlbGVjdClcbiAqIEBwYXJhbSB7c3RyaW5nfSAkbGF5ZXIgLSBMYXllciBsZXZlbCBmb3IgdGhlIGlucHV0IGJhY2tncm91bmRcbiAqL1xuQG1peGluIGlucHV0LWZpZWxkKCRsYXllcjogJ2xheWVyLTAxJykge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIEBpZiAkbGF5ZXIgPT0gJ2xheWVyLTAyJyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLTAyO1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItMDE7XG4gIH1cblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcbiAgfVxuXG4gIEBpbmNsdWRlIGJ1dHRvbi1zdGF0ZXMoJGxheWVyKTtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggJGZvY3VzO1xuICB9XG59XG5cbi8qKlxuICogQm9yZGVyIEJvdHRvbSBJbnB1dFxuICogQWRkcyBib3R0b20gYm9yZGVyIGZvciB0ZXh0IGlucHV0cyBmb2xsb3dpbmcgQ2FyYm9uIGRlc2lnbiBwYXR0ZXJuXG4gKi9cbkBtaXhpbiBpbnB1dC1ib3JkZXItYm90dG9tIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgJGJvcmRlci1zdHJvbmctMDE7XG59XG5cbi8qKlxuICogRm9jdXMgU3RhdGVcbiAqIEFwcGxpZXMgY29uc2lzdGVudCBmb2N1cyBzdHlsaW5nIGFjcm9zcyBjb21wb25lbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gJHR5cGUgLSBUeXBlIG9mIGZvY3VzIChpbnNldCwgb3V0bGluZSlcbiAqL1xuQG1peGluIGZvY3VzLXN0YXRlKCR0eXBlOiAnaW5zZXQnKSB7XG4gIEBpZiAkdHlwZSA9PSAnb3V0bGluZScge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCAkZm9jdXM7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIH0gQGVsc2Uge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAkZm9jdXMgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKipcbiAqIFRhYiBCdXR0b24gU3R5bGluZ1xuICogQ29uc2lzdGVudCBzdHlsaW5nIGZvciB0YWIgYnV0dG9ucyB3aXRoIGFjdGl2ZSBzdGF0ZSBpbmRpY2F0b3JcbiAqL1xuQG1peGluIHRhYi1idXR0b24ge1xuICBAaW5jbHVkZSBidXR0b24tc2l6ZSgnbGFyZ2UnKTtcbiAgQGluY2x1ZGUgYnV0dG9uLWNvbXBsZXRlKGZhbHNlKTtcbiAgZm9udC13ZWlnaHQ6IHVuc2V0O1xuXG4gICY6Zm9jdXMge1xuICAgIEBpbmNsdWRlIGZvY3VzLXN0YXRlKCdvdXRsaW5lJyk7XG4gICAgYm9yZGVyLXdpZHRoOiAycHggMDtcbiAgICBib3JkZXItY29sb3I6IHVuc2V0O1xuICB9XG59XG5cbi8qKlxuICogQWN0aXZlIFRhYiBJbmRpY2F0b3JcbiAqIEFwcGxpZXMgYm90dG9tIGJvcmRlciB0byBpbmRpY2F0ZSBhY3RpdmUgdGFiIHN0YXRlXG4gKi9cbkBtaXhpbiB0YWItYWN0aXZlIHtcbiAgYm9yZGVyLXdpZHRoOiAycHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkYm9yZGVyLWludGVyYWN0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyoqXG4gKiBCYWRnZS9UYWcgU3R5bGluZ1xuICogRm9yIGNvdW50IGluZGljYXRvcnMgYW5kIHRhZ3NcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gJGFjdGl2ZSAtIFdoZXRoZXIgdGhlIGJhZGdlIGlzIG9uIGFuIGFjdGl2ZSBlbGVtZW50XG4gKi9cbkBtaXhpbiBiYWRnZSgkYWN0aXZlOiBmYWxzZSkge1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIEBpZiAkYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWludGVyYWN0aXZlO1xuICAgIGNvbG9yOiAkdGV4dC1vbi1jb2xvcjtcbiAgfSBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlci1zdWJ0bGU7XG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcbiAgfVxufVxuIiwiQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvdGhlbWVcIiBhcyAqO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvY29tcG9uZW50cy9idXR0b24vdG9rZW5zXCIgYXMgYnV0dG9uLXRva2VucztcbkB1c2UgXCJtaXhpbnNcIiBhcyAqO1xuXG4vKipcbiAqIEdMT0JBTCBTVFlMRVNcbiAqIEJhc2Ugc3R5bGluZyBmb3IgY29tbW9uIGVsZW1lbnRzIGFjcm9zcyB0aGUgU3Rvcnlib29rIGludGVyZmFjZVxuICovXG5cbi8qKlxuICogU2Nyb2xsYmFyIFN0eWxpbmdcbiAqIFVzZXMgQ2FyYm9uIHRoZW1lIHRva2VucyBmb3IgY29uc2lzdGVudCBzY3JvbGxiYXIgY29sb3JzXG4gKi9cbioge1xuICBzY3JvbGxiYXItY29sb3I6ICRib3JkZXItaW52ZXJzZSAkYm9yZGVyLXN1YnRsZS0wMSAhaW1wb3J0YW50O1xufVxuXG4vKipcbiAqIEJhc2UgQm9keSBUZXh0XG4gKiBTZXRzIGRlZmF1bHQgdGV4dCBjb2xvciB1c2luZyBDYXJib24ncyBzZWNvbmRhcnkgdGV4dCB0b2tlblxuICovXG5ib2R5IHtcbiAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeSAhaW1wb3J0YW50O1xufVxuXG4vKipcbiAqIFRleHQgU2VsZWN0aW9uXG4gKiBDdXN0b20gc2VsZWN0aW9uIGNvbG9yIHdpdGggdHJhbnNwYXJlbmN5IGZvciBiZXR0ZXIgcmVhZGFiaWxpdHlcbiAqIE5vdGU6IFVzaW5nIGhhcmRjb2RlZCBibHVlIGNvbG9yIChJQk0gQmx1ZSA2MCB3aXRoIDYwJSBvcGFjaXR5KVxuICovXG4kc2VsZWN0aW9uLWNvbG9yOiAjMGY2MmZlNjA7XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlbGVjdGlvbi1jb2xvciAhaW1wb3J0YW50O1xufVxuXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlbGVjdGlvbi1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4vKipcbiAqIE1haW4gTGF5b3V0IENvbnRhaW5lclxuICogU3R5bGVzIHRoZSByb290IFN0b3J5Ym9vayBsYXlvdXQgc3RydWN0dXJlXG4gKi9cbiNyb290ID4gZGl2ID4gZGl2IHtcbiAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLXN1YnRsZS0wMTtcblxuICA+IGRpdjpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3JkZXItaW50ZXJhY3RpdmU7XG4gIH1cbn1cblxuLyoqXG4gKiBBY2Nlc3NpYmlsaXR5OiBTa2lwIExpbmtcbiAqIEZvY3VzIHN0YXRlIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHNraXAgbGlua1xuICovXG4jc3Rvcnlib29rLXByZXZpZXctd3JhcHBlciBhW3RpdGxlPVwiU2tpcCB0byBzaWRlYmFyXCJdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnV0dG9uLXRva2Vucy4kYnV0dG9uLXNlY29uZGFyeTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjb2xvcjogJHRleHQtb24tY29sb3I7XG4gIGJveC1zaGFkb3c6ICRmb2N1cyAwcHggMHB4IDBweCAycHggaW5zZXQ7XG59XG5cbi8qKlxuICogUG9wcGVyIEludGVyYWN0aXZlIEVsZW1lbnRzXG4gKiBTdHlsaW5nIGZvciB0b29sdGlwcywgZHJvcGRvd25zLCBhbmQgb3RoZXIgcG9wcGVyLWJhc2VkIGNvbXBvbmVudHNcbiAqL1xuW2RhdGEtcG9wcGVyLWludGVyYWN0aXZlXSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcblxuICA+IGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLTAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBzdmcgPiBwYXRoIHtcbiAgICBmaWxsOiAkdGV4dC1wcmltYXJ5O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogJHRleHQtcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGJ1dHRvbi1zdGF0ZXMoJ2xheWVyLTAxJyk7XG4gIH1cbn1cbiIsIi8vIENvZGUgZ2VuZXJhdGVkIGJ5IEBjYXJib24vdGhlbWVzLiBETyBOT1QgRURJVC5cbi8vXG4vLyBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTgsIDIwMjNcbi8vXG4vLyBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUtMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vL1xuXG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb25maWcnO1xuQHVzZSAnLi4vdGhlbWUnO1xuXG4vLy8gSW50ZXJuYWwgaGVscGVyIGZvciBnZW5lcmF0aW5nIENTUyBDdXN0b20gUHJvcGVydGllc1xuQGZ1bmN0aW9uIF9nZXQoJHRva2VuKSB7XG4gIEBpZiBjb25maWcuJHVzZS1mYWxsYmFjay12YWx1ZSA9PSBmYWxzZSB7XG4gICAgQHJldHVybiB2YXIoLS0je2NvbmZpZy4kcHJlZml4fS0jeyR0b2tlbn0pO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuIHZhcigtLSN7Y29uZmlnLiRwcmVmaXh9LSN7JHRva2VufSwgI3t0aGVtZS5nZXQoJHRva2VuKX0pO1xuICB9XG59XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kYCB0b2tlblxuJGJhY2tncm91bmQ6IF9nZXQoJ2JhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtYWN0aXZlYCB0b2tlblxuJGJhY2tncm91bmQtYWN0aXZlOiBfZ2V0KCdiYWNrZ3JvdW5kLWFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1zZWxlY3RlZGAgdG9rZW5cbiRiYWNrZ3JvdW5kLXNlbGVjdGVkOiBfZ2V0KCdiYWNrZ3JvdW5kLXNlbGVjdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLXNlbGVjdGVkLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtc2VsZWN0ZWQtaG92ZXI6IF9nZXQoJ2JhY2tncm91bmQtc2VsZWN0ZWQtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1icmFuZGAgdG9rZW5cbiRiYWNrZ3JvdW5kLWJyYW5kOiBfZ2V0KCdiYWNrZ3JvdW5kLWJyYW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWludmVyc2VgIHRva2VuXG4kYmFja2dyb3VuZC1pbnZlcnNlOiBfZ2V0KCdiYWNrZ3JvdW5kLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtaW52ZXJzZS1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLWludmVyc2UtaG92ZXI6IF9nZXQoJ2JhY2tncm91bmQtaW52ZXJzZS1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItMDFgIHRva2VuXG4kbGF5ZXItMDE6IF9nZXQoJ2xheWVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY3RpdmUtMDFgIHRva2VuXG4kbGF5ZXItYWN0aXZlLTAxOiBfZ2V0KCdsYXllci1hY3RpdmUtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWJhY2tncm91bmQtMDFgIHRva2VuXG4kbGF5ZXItYmFja2dyb3VuZC0wMTogX2dldCgnbGF5ZXItYmFja2dyb3VuZC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItaG92ZXItMDFgIHRva2VuXG4kbGF5ZXItaG92ZXItMDE6IF9nZXQoJ2xheWVyLWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC0wMWAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC0wMTogX2dldCgnbGF5ZXItc2VsZWN0ZWQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWhvdmVyLTAxYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWhvdmVyLTAxOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItMDJgIHRva2VuXG4kbGF5ZXItMDI6IF9nZXQoJ2xheWVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY3RpdmUtMDJgIHRva2VuXG4kbGF5ZXItYWN0aXZlLTAyOiBfZ2V0KCdsYXllci1hY3RpdmUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWJhY2tncm91bmQtMDJgIHRva2VuXG4kbGF5ZXItYmFja2dyb3VuZC0wMjogX2dldCgnbGF5ZXItYmFja2dyb3VuZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItaG92ZXItMDJgIHRva2VuXG4kbGF5ZXItaG92ZXItMDI6IF9nZXQoJ2xheWVyLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC0wMmAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC0wMjogX2dldCgnbGF5ZXItc2VsZWN0ZWQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWhvdmVyLTAyYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWhvdmVyLTAyOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItMDNgIHRva2VuXG4kbGF5ZXItMDM6IF9nZXQoJ2xheWVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY3RpdmUtMDNgIHRva2VuXG4kbGF5ZXItYWN0aXZlLTAzOiBfZ2V0KCdsYXllci1hY3RpdmUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWJhY2tncm91bmQtMDNgIHRva2VuXG4kbGF5ZXItYmFja2dyb3VuZC0wMzogX2dldCgnbGF5ZXItYmFja2dyb3VuZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItaG92ZXItMDNgIHRva2VuXG4kbGF5ZXItaG92ZXItMDM6IF9nZXQoJ2xheWVyLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC0wM2AgdG9rZW5cbiRsYXllci1zZWxlY3RlZC0wMzogX2dldCgnbGF5ZXItc2VsZWN0ZWQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWhvdmVyLTAzYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWhvdmVyLTAzOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZWAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1pbnZlcnNlOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1kaXNhYmxlZGAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1kaXNhYmxlZDogX2dldCgnbGF5ZXItc2VsZWN0ZWQtZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC0wMWAgdG9rZW5cbiRsYXllci1hY2NlbnQtMDE6IF9nZXQoJ2xheWVyLWFjY2VudC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWFjdGl2ZS0wMWAgdG9rZW5cbiRsYXllci1hY2NlbnQtYWN0aXZlLTAxOiBfZ2V0KCdsYXllci1hY2NlbnQtYWN0aXZlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtaG92ZXItMDFgIHRva2VuXG4kbGF5ZXItYWNjZW50LWhvdmVyLTAxOiBfZ2V0KCdsYXllci1hY2NlbnQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC0wMmAgdG9rZW5cbiRsYXllci1hY2NlbnQtMDI6IF9nZXQoJ2xheWVyLWFjY2VudC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWFjdGl2ZS0wMmAgdG9rZW5cbiRsYXllci1hY2NlbnQtYWN0aXZlLTAyOiBfZ2V0KCdsYXllci1hY2NlbnQtYWN0aXZlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtaG92ZXItMDJgIHRva2VuXG4kbGF5ZXItYWNjZW50LWhvdmVyLTAyOiBfZ2V0KCdsYXllci1hY2NlbnQtaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC0wM2AgdG9rZW5cbiRsYXllci1hY2NlbnQtMDM6IF9nZXQoJ2xheWVyLWFjY2VudC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWFjdGl2ZS0wM2AgdG9rZW5cbiRsYXllci1hY2NlbnQtYWN0aXZlLTAzOiBfZ2V0KCdsYXllci1hY2NlbnQtYWN0aXZlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtaG92ZXItMDNgIHRva2VuXG4kbGF5ZXItYWNjZW50LWhvdmVyLTAzOiBfZ2V0KCdsYXllci1hY2NlbnQtaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAxYCB0b2tlblxuJGZpZWxkLTAxOiBfZ2V0KCdmaWVsZC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDFgIHRva2VuXG4kZmllbGQtaG92ZXItMDE6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wMmAgdG9rZW5cbiRmaWVsZC0wMjogX2dldCgnZmllbGQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAyYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAyOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDNgIHRva2VuXG4kZmllbGQtMDM6IF9nZXQoJ2ZpZWxkLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wM2AgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMzogX2dldCgnZmllbGQtaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGludGVyYWN0aXZlYCB0b2tlblxuJGludGVyYWN0aXZlOiBfZ2V0KCdpbnRlcmFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wMGAgdG9rZW5cbiRib3JkZXItc3VidGxlLTAwOiBfZ2V0KCdib3JkZXItc3VidGxlLTAwJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAxYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDE6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDFgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMTogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wMmAgdG9rZW5cbiRib3JkZXItc3VidGxlLTAyOiBfZ2V0KCdib3JkZXItc3VidGxlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAyYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDI6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDNgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMzogX2dldCgnYm9yZGVyLXN1YnRsZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wM2AgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAzOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAxYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDE6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDJgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMjogX2dldCgnYm9yZGVyLXN0cm9uZy0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wM2AgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAzOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wMWAgdG9rZW5cbiRib3JkZXItdGlsZS0wMTogX2dldCgnYm9yZGVyLXRpbGUtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAyYCB0b2tlblxuJGJvcmRlci10aWxlLTAyOiBfZ2V0KCdib3JkZXItdGlsZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDNgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDM6IF9nZXQoJ2JvcmRlci10aWxlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItaW52ZXJzZWAgdG9rZW5cbiRib3JkZXItaW52ZXJzZTogX2dldCgnYm9yZGVyLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1pbnRlcmFjdGl2ZWAgdG9rZW5cbiRib3JkZXItaW50ZXJhY3RpdmU6IF9nZXQoJ2JvcmRlci1pbnRlcmFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWRpc2FibGVkYCB0b2tlblxuJGJvcmRlci1kaXNhYmxlZDogX2dldCgnYm9yZGVyLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXByaW1hcnlgIHRva2VuXG4kdGV4dC1wcmltYXJ5OiBfZ2V0KCd0ZXh0LXByaW1hcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtc2Vjb25kYXJ5YCB0b2tlblxuJHRleHQtc2Vjb25kYXJ5OiBfZ2V0KCd0ZXh0LXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1wbGFjZWhvbGRlcmAgdG9rZW5cbiR0ZXh0LXBsYWNlaG9sZGVyOiBfZ2V0KCd0ZXh0LXBsYWNlaG9sZGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWhlbHBlcmAgdG9rZW5cbiR0ZXh0LWhlbHBlcjogX2dldCgndGV4dC1oZWxwZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtZXJyb3JgIHRva2VuXG4kdGV4dC1lcnJvcjogX2dldCgndGV4dC1lcnJvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1pbnZlcnNlYCB0b2tlblxuJHRleHQtaW52ZXJzZTogX2dldCgndGV4dC1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LW9uLWNvbG9yYCB0b2tlblxuJHRleHQtb24tY29sb3I6IF9nZXQoJ3RleHQtb24tY29sb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtb24tY29sb3ItZGlzYWJsZWRgIHRva2VuXG4kdGV4dC1vbi1jb2xvci1kaXNhYmxlZDogX2dldCgndGV4dC1vbi1jb2xvci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1kaXNhYmxlZGAgdG9rZW5cbiR0ZXh0LWRpc2FibGVkOiBfZ2V0KCd0ZXh0LWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXByaW1hcnlgIHRva2VuXG4kbGluay1wcmltYXJ5OiBfZ2V0KCdsaW5rLXByaW1hcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstcHJpbWFyeS1ob3ZlcmAgdG9rZW5cbiRsaW5rLXByaW1hcnktaG92ZXI6IF9nZXQoJ2xpbmstcHJpbWFyeS1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1zZWNvbmRhcnlgIHRva2VuXG4kbGluay1zZWNvbmRhcnk6IF9nZXQoJ2xpbmstc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2UtdmlzaXRlZGAgdG9rZW5cbiRsaW5rLWludmVyc2UtdmlzaXRlZDogX2dldCgnbGluay1pbnZlcnNlLXZpc2l0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstdmlzaXRlZGAgdG9rZW5cbiRsaW5rLXZpc2l0ZWQ6IF9nZXQoJ2xpbmstdmlzaXRlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlYCB0b2tlblxuJGxpbmstaW52ZXJzZTogX2dldCgnbGluay1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2UtYWN0aXZlYCB0b2tlblxuJGxpbmstaW52ZXJzZS1hY3RpdmU6IF9nZXQoJ2xpbmstaW52ZXJzZS1hY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS1ob3ZlcmAgdG9rZW5cbiRsaW5rLWludmVyc2UtaG92ZXI6IF9nZXQoJ2xpbmstaW52ZXJzZS1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1wcmltYXJ5YCB0b2tlblxuJGljb24tcHJpbWFyeTogX2dldCgnaWNvbi1wcmltYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLXNlY29uZGFyeWAgdG9rZW5cbiRpY29uLXNlY29uZGFyeTogX2dldCgnaWNvbi1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24taW52ZXJzZWAgdG9rZW5cbiRpY29uLWludmVyc2U6IF9nZXQoJ2ljb24taW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1vbi1jb2xvcmAgdG9rZW5cbiRpY29uLW9uLWNvbG9yOiBfZ2V0KCdpY29uLW9uLWNvbG9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLW9uLWNvbG9yLWRpc2FibGVkYCB0b2tlblxuJGljb24tb24tY29sb3ItZGlzYWJsZWQ6IF9nZXQoJ2ljb24tb24tY29sb3ItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tZGlzYWJsZWRgIHRva2VuXG4kaWNvbi1kaXNhYmxlZDogX2dldCgnaWNvbi1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1pbnRlcmFjdGl2ZWAgdG9rZW5cbiRpY29uLWludGVyYWN0aXZlOiBfZ2V0KCdpY29uLWludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWVycm9yYCB0b2tlblxuJHN1cHBvcnQtZXJyb3I6IF9nZXQoJ3N1cHBvcnQtZXJyb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtc3VjY2Vzc2AgdG9rZW5cbiRzdXBwb3J0LXN1Y2Nlc3M6IF9nZXQoJ3N1cHBvcnQtc3VjY2VzcycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC13YXJuaW5nYCB0b2tlblxuJHN1cHBvcnQtd2FybmluZzogX2dldCgnc3VwcG9ydC13YXJuaW5nJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWluZm9gIHRva2VuXG4kc3VwcG9ydC1pbmZvOiBfZ2V0KCdzdXBwb3J0LWluZm8nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtZXJyb3ItaW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LWVycm9yLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtZXJyb3ItaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1zdWNjZXNzLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1zdWNjZXNzLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtc3VjY2Vzcy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXdhcm5pbmctaW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LXdhcm5pbmctaW52ZXJzZTogX2dldCgnc3VwcG9ydC13YXJuaW5nLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtaW5mby1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtaW5mby1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LWluZm8taW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLW1ham9yYCB0b2tlblxuJHN1cHBvcnQtY2F1dGlvbi1tYWpvcjogX2dldCgnc3VwcG9ydC1jYXV0aW9uLW1ham9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tbWlub3JgIHRva2VuXG4kc3VwcG9ydC1jYXV0aW9uLW1pbm9yOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tbWlub3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi11bmRlZmluZWRgIHRva2VuXG4kc3VwcG9ydC1jYXV0aW9uLXVuZGVmaW5lZDogX2dldCgnc3VwcG9ydC1jYXV0aW9uLXVuZGVmaW5lZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLXBvcG92ZXItYmFja2dyb3VuZDogX2dldCgnYWktcG9wb3Zlci1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMWAgdG9rZW5cbiRhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMTogX2dldCgnYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAyYCB0b2tlblxuJGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAyOiBfZ2V0KCdhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktaW5uZXItc2hhZG93YCB0b2tlblxuJGFpLWlubmVyLXNoYWRvdzogX2dldCgnYWktaW5uZXItc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLXN0YXJ0LXNtYCB0b2tlblxuJGFpLWF1cmEtc3RhcnQtc206IF9nZXQoJ2FpLWF1cmEtc3RhcnQtc20nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtc3RhcnRgIHRva2VuXG4kYWktYXVyYS1zdGFydDogX2dldCgnYWktYXVyYS1zdGFydCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1lbmRgIHRva2VuXG4kYWktYXVyYS1lbmQ6IF9nZXQoJ2FpLWF1cmEtZW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLWJhY2tncm91bmRgIHRva2VuXG4kYWktYXVyYS1ob3Zlci1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1hdXJhLWhvdmVyLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItc3RhcnRgIHRva2VuXG4kYWktYXVyYS1ob3Zlci1zdGFydDogX2dldCgnYWktYXVyYS1ob3Zlci1zdGFydCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1lbmRgIHRva2VuXG4kYWktYXVyYS1ob3Zlci1lbmQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItZW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItc3Ryb25nYCB0b2tlblxuJGFpLWJvcmRlci1zdHJvbmc6IF9nZXQoJ2FpLWJvcmRlci1zdHJvbmcnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1zdGFydGAgdG9rZW5cbiRhaS1ib3JkZXItc3RhcnQ6IF9nZXQoJ2FpLWJvcmRlci1zdGFydCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLWVuZGAgdG9rZW5cbiRhaS1ib3JkZXItZW5kOiBfZ2V0KCdhaS1ib3JkZXItZW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1kcm9wLXNoYWRvd2AgdG9rZW5cbiRhaS1kcm9wLXNoYWRvdzogX2dldCgnYWktZHJvcC1zaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXNrZWxldG9uLWJhY2tncm91bmRgIHRva2VuXG4kYWktc2tlbGV0b24tYmFja2dyb3VuZDogX2dldCgnYWktc2tlbGV0b24tYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLXNrZWxldG9uLWVsZW1lbnQtYmFja2dyb3VuZDogX2dldChcbiAgJ2FpLXNrZWxldG9uLWVsZW1lbnQtYmFja2dyb3VuZCdcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1vdmVybGF5YCB0b2tlblxuJGFpLW92ZXJsYXk6IF9nZXQoJ2FpLW92ZXJsYXknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtY2VudGVyYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtY2VudGVyOiBfZ2V0KCdhaS1wb3BvdmVyLWNhcmV0LWNlbnRlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b21gIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b206IF9nZXQoJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQ6IF9nZXQoXG4gICdhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9uc2AgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kLWFjdGlvbnM6IF9nZXQoXG4gICdhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kLWFjdGlvbnMnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYmFja2dyb3VuZGAgdG9rZW5cbiRjaGF0LXByb21wdC1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LXByb21wdC1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1ib3JkZXItc3RhcnRgIHRva2VuXG4kY2hhdC1wcm9tcHQtYm9yZGVyLXN0YXJ0OiBfZ2V0KCdjaGF0LXByb21wdC1ib3JkZXItc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJvcmRlci1lbmRgIHRva2VuXG4kY2hhdC1wcm9tcHQtYm9yZGVyLWVuZDogX2dldCgnY2hhdC1wcm9tcHQtYm9yZGVyLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtdXNlcmAgdG9rZW5cbiRjaGF0LWJ1YmJsZS11c2VyOiBfZ2V0KCdjaGF0LWJ1YmJsZS11c2VyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS1hZ2VudGAgdG9rZW5cbiRjaGF0LWJ1YmJsZS1hZ2VudDogX2dldCgnY2hhdC1idWJibGUtYWdlbnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLWJvcmRlcmAgdG9rZW5cbiRjaGF0LWJ1YmJsZS1ib3JkZXI6IF9nZXQoJ2NoYXQtYnViYmxlLWJvcmRlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItYm90YCB0b2tlblxuJGNoYXQtYXZhdGFyLWJvdDogX2dldCgnY2hhdC1hdmF0YXItYm90JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci1hZ2VudGAgdG9rZW5cbiRjaGF0LWF2YXRhci1hZ2VudDogX2dldCgnY2hhdC1hdmF0YXItYWdlbnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLXVzZXJgIHRva2VuXG4kY2hhdC1hdmF0YXItdXNlcjogX2dldCgnY2hhdC1hdmF0YXItdXNlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1zaGVsbC1iYWNrZ3JvdW5kYCB0b2tlblxuJGNoYXQtc2hlbGwtYmFja2dyb3VuZDogX2dldCgnY2hhdC1zaGVsbC1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWhlYWRlci1iYWNrZ3JvdW5kYCB0b2tlblxuJGNoYXQtaGVhZGVyLWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtaGVhZGVyLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uYCB0b2tlblxuJGNoYXQtYnV0dG9uOiBfZ2V0KCdjaGF0LWJ1dHRvbicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24taG92ZXJgIHRva2VuXG4kY2hhdC1idXR0b24taG92ZXI6IF9nZXQoJ2NoYXQtYnV0dG9uLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi10ZXh0LWhvdmVyYCB0b2tlblxuJGNoYXQtYnV0dG9uLXRleHQtaG92ZXI6IF9nZXQoJ2NoYXQtYnV0dG9uLXRleHQtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLWFjdGl2ZWAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1hY3RpdmU6IF9nZXQoJ2NoYXQtYnV0dG9uLWFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tc2VsZWN0ZWRgIHRva2VuXG4kY2hhdC1idXR0b24tc2VsZWN0ZWQ6IF9nZXQoJ2NoYXQtYnV0dG9uLXNlbGVjdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi10ZXh0LXNlbGVjdGVkYCB0b2tlblxuJGNoYXQtYnV0dG9uLXRleHQtc2VsZWN0ZWQ6IF9nZXQoJ2NoYXQtYnV0dG9uLXRleHQtc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGhpZ2hsaWdodGAgdG9rZW5cbiRoaWdobGlnaHQ6IF9nZXQoJ2hpZ2hsaWdodCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgb3ZlcmxheWAgdG9rZW5cbiRvdmVybGF5OiBfZ2V0KCdvdmVybGF5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0b2dnbGUtb2ZmYCB0b2tlblxuJHRvZ2dsZS1vZmY6IF9nZXQoJ3RvZ2dsZS1vZmYnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNoYWRvd2AgdG9rZW5cbiRzaGFkb3c6IF9nZXQoJ3NoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXNgIHRva2VuXG4kZm9jdXM6IF9nZXQoJ2ZvY3VzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1cy1pbnNldGAgdG9rZW5cbiRmb2N1cy1pbnNldDogX2dldCgnZm9jdXMtaW5zZXQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzLWludmVyc2VgIHRva2VuXG4kZm9jdXMtaW52ZXJzZTogX2dldCgnZm9jdXMtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2tlbGV0b24tYmFja2dyb3VuZGAgdG9rZW5cbiRza2VsZXRvbi1iYWNrZ3JvdW5kOiBfZ2V0KCdza2VsZXRvbi1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBza2VsZXRvbi1lbGVtZW50YCB0b2tlblxuJHNrZWxldG9uLWVsZW1lbnQ6IF9nZXQoJ3NrZWxldG9uLWVsZW1lbnQnKSAhZGVmYXVsdDtcbiIsIi8vXG4vLyBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTgsIDIwMjNcbi8vXG4vLyBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUtMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vL1xuXG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi8uLi9jb25maWcnO1xuQHVzZSAnLi4vLi4vdGhlbWVzJztcbkB1c2UgJy4uLy4uL3V0aWxpdGllcy9jb21wb25lbnQtdG9rZW5zJztcbkB1c2UgJ0BjYXJib24vdGhlbWVzL3Njc3MvY29tcG9uZW50LXRva2VucycgYXMgYnV0dG9uO1xuXG4kYnV0dG9uLXNlcGFyYXRvcjogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZXBhcmF0b3IsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZXBhcmF0b3IsIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlcGFyYXRvciwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZXBhcmF0b3IsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlcGFyYXRvciwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLXByaW1hcnk6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeSwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLXNlY29uZGFyeTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnksIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnksIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnksIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeSwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLXRlcnRpYXJ5OiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnksIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLWRhbmdlci1wcmltYXJ5OiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1wcmltYXJ5LCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXByaW1hcnksIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1wcmltYXJ5LCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1wcmltYXJ5LCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnk6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXNlY29uZGFyeSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXNlY29uZGFyeSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXNlY29uZGFyeSwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLWRhbmdlci1hY3RpdmU6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWFjdGl2ZSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWFjdGl2ZSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWFjdGl2ZSwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLXByaW1hcnktYWN0aXZlOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktYWN0aXZlLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktYWN0aXZlLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmU6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZSwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLWRhbmdlci1ob3ZlcjogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItaG92ZXIsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItaG92ZXIsIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1ob3ZlciwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItaG92ZXIsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1ob3ZlciwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLXByaW1hcnktaG92ZXI6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1ob3Zlciwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1ob3ZlciwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1ob3ZlciwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLXNlY29uZGFyeS1ob3ZlcjogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1ob3ZlciwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1ob3ZlciwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLXRlcnRpYXJ5LWhvdmVyOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktaG92ZXIsIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWhvdmVyLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWhvdmVyLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlciwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLWRpc2FibGVkOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRpc2FibGVkLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGlzYWJsZWQsIHdoaXRlLXRoZW1lKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRpc2FibGVkLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRpc2FibGVkLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgZy0xMDApLFxuICAgICksXG4gICksXG4pICFkZWZhdWx0O1xuXG4kYnV0dG9uLXRva2VuczogKFxuICBidXR0b24tc2VwYXJhdG9yOiAkYnV0dG9uLXNlcGFyYXRvcixcbiAgYnV0dG9uLXByaW1hcnk6ICRidXR0b24tcHJpbWFyeSxcbiAgYnV0dG9uLXNlY29uZGFyeTogJGJ1dHRvbi1zZWNvbmRhcnksXG4gIGJ1dHRvbi10ZXJ0aWFyeTogJGJ1dHRvbi10ZXJ0aWFyeSxcbiAgYnV0dG9uLWRhbmdlci1wcmltYXJ5OiAkYnV0dG9uLWRhbmdlci1wcmltYXJ5LFxuICBidXR0b24tZGFuZ2VyLXNlY29uZGFyeTogJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LFxuICBidXR0b24tZGFuZ2VyLWFjdGl2ZTogJGJ1dHRvbi1kYW5nZXItYWN0aXZlLFxuICBidXR0b24tcHJpbWFyeS1hY3RpdmU6ICRidXR0b24tcHJpbWFyeS1hY3RpdmUsXG4gIGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlOiAkYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsXG4gIGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmU6ICRidXR0b24tdGVydGlhcnktYWN0aXZlLFxuICBidXR0b24tZGFuZ2VyLWhvdmVyOiAkYnV0dG9uLWRhbmdlci1ob3ZlcixcbiAgYnV0dG9uLXByaW1hcnktaG92ZXI6ICRidXR0b24tcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLXNlY29uZGFyeS1ob3ZlcjogJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsXG4gIGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlcjogJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlcixcbiAgYnV0dG9uLWRpc2FibGVkOiAkYnV0dG9uLWRpc2FibGVkLFxuKTtcblxuJGJ1dHRvbi1zZXBhcmF0b3I6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1zZXBhcmF0b3IsXG4gICdidXR0b24tc2VwYXJhdG9yJ1xuKTtcblxuJGJ1dHRvbi1wcmltYXJ5OiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoJGJ1dHRvbi1wcmltYXJ5LCAnYnV0dG9uLXByaW1hcnknKTtcblxuJGJ1dHRvbi1zZWNvbmRhcnk6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1zZWNvbmRhcnksXG4gICdidXR0b24tc2Vjb25kYXJ5J1xuKTtcblxuJGJ1dHRvbi10ZXJ0aWFyeTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKCRidXR0b24tdGVydGlhcnksICdidXR0b24tdGVydGlhcnknKTtcblxuJGJ1dHRvbi1kYW5nZXItcHJpbWFyeTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLWRhbmdlci1wcmltYXJ5LFxuICAnYnV0dG9uLWRhbmdlci1wcmltYXJ5J1xuKTtcblxuJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5OiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tZGFuZ2VyLXNlY29uZGFyeSxcbiAgJ2J1dHRvbi1kYW5nZXItc2Vjb25kYXJ5J1xuKTtcblxuJGJ1dHRvbi1kYW5nZXItYWN0aXZlOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tZGFuZ2VyLWFjdGl2ZSxcbiAgJ2J1dHRvbi1kYW5nZXItYWN0aXZlJ1xuKTtcblxuJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXByaW1hcnktYWN0aXZlLFxuICAnYnV0dG9uLXByaW1hcnktYWN0aXZlJ1xuKTtcblxuJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZSxcbiAgJ2J1dHRvbi1zZWNvbmRhcnktYWN0aXZlJ1xuKTtcblxuJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmU6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsXG4gICdidXR0b24tdGVydGlhcnktYWN0aXZlJ1xuKTtcblxuJGJ1dHRvbi1kYW5nZXItaG92ZXI6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1kYW5nZXItaG92ZXIsXG4gICdidXR0b24tZGFuZ2VyLWhvdmVyJ1xuKTtcblxuJGJ1dHRvbi1wcmltYXJ5LWhvdmVyOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tcHJpbWFyeS1ob3ZlcixcbiAgJ2J1dHRvbi1wcmltYXJ5LWhvdmVyJ1xuKTtcblxuJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXI6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsXG4gICdidXR0b24tc2Vjb25kYXJ5LWhvdmVyJ1xuKTtcblxuJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlcjogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXRlcnRpYXJ5LWhvdmVyLFxuICAnYnV0dG9uLXRlcnRpYXJ5LWhvdmVyJ1xuKTtcblxuJGJ1dHRvbi1kaXNhYmxlZDogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKCRidXR0b24tZGlzYWJsZWQsICdidXR0b24tZGlzYWJsZWQnKTtcbiJdfQ== */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Y));var p=()=>c.createElement("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},c.createElement("circle",{cx:"10",cy:"12",r:"2"}),c.createElement("circle",{cx:"16",cy:"9",r:"2"}),c.createElement("circle",{cx:"22",cy:"12",r:"2"}),c.createElement("circle",{cx:"23",cy:"18",r:"2"}),c.createElement("circle",{cx:"19",cy:"23",r:"2"}),c.createElement("path",{d:"M16.54,2A14,14,0,0,0,2,16a4.82,4.82,0,0,0,6.09,4.65l1.12-.31A3,3,0,0,1,13,23.24V27a3,3,0,0,0,3,3A14,14,0,0,0,30,15.46,14.05,14.05,0,0,0,16.54,2Zm8.11,22.31A11.93,11.93,0,0,1,16,28a1,1,0,0,1-1-1V23.24a5,5,0,0,0-5-5,5.07,5.07,0,0,0-1.33.18l-1.12.31A2.82,2.82,0,0,1,4,16,12,12,0,0,1,16.47,4,12.18,12.18,0,0,1,28,15.53,11.89,11.89,0,0,1,24.65,24.32Z"})),x=()=>{let d=localStorage.getItem("storybook-carbon-theme");return d||(d=window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"g90":"white",localStorage.setItem("storybook-carbon-theme",d)),d},h=d=>{let a=["white","g10"].includes(d);document.documentElement.setAttribute("storybook-carbon-theme",d),localStorage.setItem("storybook-carbon-theme",d),window.selectedTheme=d,g.setConfig({theme:a?G.light:G.dark})},J=x();h(J);var A=n(function({api:a}){let[Q,B]=I(),V=Q[r],m=s(l=>{B({[r]:l}),h(l)},[B]);return c.createElement(X,{placement:"top",trigger:"click",closeOnOutsideClick:!0,tooltip:({onHide:l})=>c.createElement(F,{links:U.map(i=>({id:i.value,title:i.title,active:V===i.value,onClick:()=>{m(i.value),l()}}))})},c.createElement(Z,{title:"Theme"},c.createElement(p,null)))});g.register(y,d=>{g.add(v,{type:o.TOOL,title:"My addon",render:()=>c.createElement(A,{api:d})})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
