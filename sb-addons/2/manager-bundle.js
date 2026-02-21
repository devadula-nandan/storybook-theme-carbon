try{
(()=>{var d=__REACT__,{Children:hc,Component:Wc,Fragment:Vc,Profiler:mc,PureComponent:uc,StrictMode:rc,Suspense:Rc,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Cc,act:vc,cloneElement:Qc,createContext:Uc,createElement:Yc,createFactory:xc,createRef:pc,forwardRef:Ac,isValidElement:Jc,lazy:Lc,memo:a,startTransition:kc,unstable_act:Nc,useCallback:n,useContext:Hc,useDebugValue:Sc,useDeferredValue:Tc,useEffect:fc,useId:zc,useImperativeHandle:Oc,useInsertionEffect:wc,useLayoutEffect:Ec,useMemo:jc,useReducer:Mc,useRef:Dc,useState:Kc,useSyncExternalStore:qc,useTransition:Pc,version:_c}=__REACT__;var bd=__STORYBOOK_API__,{ActiveTabs:ld,Consumer:gd,ManagerContext:id,Provider:ed,RequestResponseError:Gd,addons:g,combineParameters:ad,controlOrMetaKey:Id,controlOrMetaSymbol:Bd,eventMatchesShortcut:Zd,eventToShortcut:od,experimental_MockUniversalStore:nd,experimental_UniversalStore:sd,experimental_getStatusStore:Xd,experimental_getTestProviderStore:Fd,experimental_requestResponse:yd,experimental_useStatusStore:hd,experimental_useTestProviderStore:Wd,experimental_useUniversalStore:Vd,internal_fullStatusStore:md,internal_fullTestProviderStore:ud,internal_universalStatusStore:rd,internal_universalTestProviderStore:Rd,isMacLike:Cd,isShortcutTaken:vd,keyToSymbol:Qd,merge:Ud,mockChannel:Yd,optionOrAltSymbol:xd,shortcutMatchesShortcut:pd,shortcutToHumanString:Ad,types:s,useAddonState:Jd,useArgTypes:Ld,useArgs:kd,useChannel:Nd,useGlobalTypes:Hd,useGlobals:Sd,useParameter:Td,useSharedState:fd,useStoryPrepared:zd,useStorybookApi:Od,useStorybookState:wd}=__STORYBOOK_API__;var Kd=__STORYBOOK_THEMING__,{CacheProvider:qd,ClassNames:Pd,Global:_d,ThemeProvider:$d,background:ct,color:dt,convert:tt,create:v,createCache:bt,createGlobal:lt,createReset:gt,css:it,darken:et,ensure:Gt,ignoreSsrWarning:at,isPropValid:It,jsx:Bt,keyframes:Zt,lighten:ot,styled:nt,themes:X,typography:st,useTheme:Xt,withTheme:Ft}=__STORYBOOK_THEMING__;var mt=__STORYBOOK_COMPONENTS__,{A:ut,ActionBar:rt,AddonPanel:Rt,Badge:Ct,Bar:vt,Blockquote:Qt,Button:Ut,ClipboardCode:Yt,Code:xt,DL:pt,Div:At,DocumentWrapper:Jt,EmptyTabContent:Lt,ErrorFormatter:kt,FlexBar:Nt,Form:Ht,H1:St,H2:Tt,H3:ft,H4:zt,H5:Ot,H6:wt,HR:Et,IconButton:F,Img:jt,LI:Mt,Link:Dt,ListItem:Kt,Loader:qt,Modal:Pt,OL:_t,P:$t,Placeholder:cb,Pre:db,ProgressSpinner:tb,ResetWrapper:bb,ScrollArea:lb,Separator:gb,Spaced:ib,Span:eb,StorybookIcon:Gb,StorybookLogo:ab,SyntaxHighlighter:Ib,TT:Bb,TabBar:Zb,TabButton:ob,TabWrapper:nb,Table:sb,Tabs:Xb,TabsState:Fb,TooltipLinkList:Q,TooltipMessage:yb,TooltipNote:hb,UL:Wb,WithTooltip:U,WithTooltipPure:Vb,Zoom:mb,codeCommon:ub,components:rb,createCopyToClipboardFunction:Rb,getStoryHref:Cb,interleaveSeparators:vb,nameSpaceClassNames:Qb,resetComponents:Ub,withReset:Yb}=__STORYBOOK_COMPONENTS__;var H=Object.defineProperty,I=(c,t)=>()=>(c&&(t=c(c=0)),t),B=(c,t)=>{for(var b in t)H(c,b,{get:t[b],enumerable:!0})},S={};B(S,{css:()=>y});var y,T=I(()=>{y=`/**
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
  /**
   * IBM Plex Fonts - Applied when carbonized
   * Uses Carbon's type system which includes IBM Plex Sans, Mono, and Serif
   */
}
:root[carbonize-storybook=true] {
  font-family: 'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif;
}
:root[carbonize-storybook=true] * {
  font-family: inherit;
}
:root[carbonize-storybook=true] code,
:root[carbonize-storybook=true] pre,
:root[carbonize-storybook=true] kbd,
:root[carbonize-storybook=true] samp {
  font-family: 'IBM Plex Mono', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', monospace;
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

body.sb-main-padded.sb-show-main {
  background-color: var(--cds-background, #ffffff);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbInRoZW1lLWJhc2Uuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3RoZW1lcy9zY3NzL190aGVtZS5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXJib24vc3R5bGVzL3Njc3MvX3RoZW1lLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi9zdHlsZXMvc2Nzcy91dGlsaXRpZXMvX2N1c3RvbS1wcm9wZXJ0eS5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXJib24vdGhlbWVzL3Njc3MvZ2VuZXJhdGVkL190b2tlbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7RUMrRkk7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBOztBQzlGRjtFRkRGO0lHZ0NFO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7OztBSGhDRjtFR2dDRTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7QUg3QkE7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRTs7QUFFQTtFQUNFOztBQUdGO0FBQUE7QUFBQTtBQUFBO0VBSUU7OztBQUtOO0FBQUE7QUFBQTtBQUFBO0FBSUE7RUNvRUk7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBOztBQzlGRjtFRjBCRjtJR0tFO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7OztBSExGO0VHS0U7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBOzs7QUhERjtBQUFBO0FBQUE7QUFBQTtBQUlBO0VDNERJO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTs7QUM5RkY7RUZrQ0Y7SUdIRTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBOzs7QUhHRjtFR0hFO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTs7O0FIT0Y7QUFBQTtBQUFBO0FBQUE7QUFJQTtFQ29ESTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7O0FDOUZGO0VGMENGO0lHWEU7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTs7O0FIV0Y7RUdYRTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7OztBSGVGO0FBQUE7QUFBQTtBQUFBO0FBSUE7RUM0Q0k7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBOztBQzlGRjtFRmtERjtJR25CRTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBOzs7QUhtQkY7RUduQkU7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBOzs7QUh3QkY7RUFDRSxrQkl6RFciLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZVwiO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvdGhlbWVzXCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90eXBlXCI7XG5cbi8qKlxuICogQ0FSQk9OIFRIRU1FIEJBU0VcbiAqIEFwcGxpZXMgQ2FyYm9uIERlc2lnbiBTeXN0ZW0gdGhlbWVzIHRvIHRoZSBTdG9yeWJvb2sgaW50ZXJmYWNlXG4gKlxuICogQXZhaWxhYmxlIHRoZW1lczpcbiAqIC0gd2hpdGU6IExpZ2h0IHRoZW1lIHdpdGggd2hpdGUgYmFja2dyb3VuZCAoZGVmYXVsdClcbiAqIC0gZzEwOiBMaWdodCBncmF5IHRoZW1lIChHcmF5IDEwKVxuICogLSBnOTA6IERhcmsgZ3JheSB0aGVtZSAoR3JheSA5MClcbiAqIC0gZzEwMDogRGFyayB0aGVtZSB3aXRoIGJsYWNrIGJhY2tncm91bmQgKEdyYXkgMTAwKVxuICpcbiAqIFRoZW1lcyBhcmUgYXBwbGllZCB2aWEgdGhlIFtzdG9yeWJvb2stY2FyYm9uLXRoZW1lXSBhdHRyaWJ1dGUgb24gOnJvb3RcbiAqIFRoaXMgYXR0cmlidXRlIGlzIGNvbnRyb2xsZWQgYnkgdGhlIHRoZW1lIHN3aXRjaGVyIGFkZG9uXG4gKi9cblxuLyoqXG4gKiBEZWZhdWx0IFRoZW1lXG4gKiBBcHBsaWVkIHdoZW4gbm8gdGhlbWUgYXR0cmlidXRlIGlzIHByZXNlbnRcbiAqL1xuOnJvb3Qge1xuICBAaW5jbHVkZSB0aGVtZS50aGVtZSh0aGVtZXMuJHdoaXRlKTtcblxuICAvKipcbiAgICogSUJNIFBsZXggRm9udHMgLSBBcHBsaWVkIHdoZW4gY2FyYm9uaXplZFxuICAgKiBVc2VzIENhcmJvbidzIHR5cGUgc3lzdGVtIHdoaWNoIGluY2x1ZGVzIElCTSBQbGV4IFNhbnMsIE1vbm8sIGFuZCBTZXJpZlxuICAgKi9cbiAgJltjYXJib25pemUtc3Rvcnlib29rPVwidHJ1ZVwiXSB7XG4gICAgZm9udC1mYW1pbHk6IHR5cGUuZm9udC1mYW1pbHkoXCJzYW5zXCIpO1xuXG4gICAgKiB7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICB9XG5cbiAgICBjb2RlLFxuICAgIHByZSxcbiAgICBrYmQsXG4gICAgc2FtcCB7XG4gICAgICBmb250LWZhbWlseTogdHlwZS5mb250LWZhbWlseShcIm1vbm9cIik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogV2hpdGUgVGhlbWUgKExpZ2h0KVxuICogSUJNIERlc2lnbiBMYW5ndWFnZTogV2hpdGUgYmFja2dyb3VuZFxuICovXG46cm9vdFtzdG9yeWJvb2stY2FyYm9uLXRoZW1lPVwid2hpdGVcIl0ge1xuICBAaW5jbHVkZSB0aGVtZS50aGVtZSh0aGVtZXMuJHdoaXRlKTtcbn1cblxuLyoqXG4gKiBHcmF5IDEwIFRoZW1lIChMaWdodClcbiAqIElCTSBEZXNpZ24gTGFuZ3VhZ2U6IExpZ2h0IGdyYXkgYmFja2dyb3VuZFxuICovXG46cm9vdFtzdG9yeWJvb2stY2FyYm9uLXRoZW1lPVwiZzEwXCJdIHtcbiAgQGluY2x1ZGUgdGhlbWUudGhlbWUodGhlbWVzLiRnMTApO1xufVxuXG4vKipcbiAqIEdyYXkgOTAgVGhlbWUgKERhcmspXG4gKiBJQk0gRGVzaWduIExhbmd1YWdlOiBEYXJrIGdyYXkgYmFja2dyb3VuZFxuICovXG46cm9vdFtzdG9yeWJvb2stY2FyYm9uLXRoZW1lPVwiZzkwXCJdIHtcbiAgQGluY2x1ZGUgdGhlbWUudGhlbWUodGhlbWVzLiRnOTApO1xufVxuXG4vKipcbiAqIEdyYXkgMTAwIFRoZW1lIChEYXJrKVxuICogSUJNIERlc2lnbiBMYW5ndWFnZTogQmxhY2sgYmFja2dyb3VuZFxuICovXG46cm9vdFtzdG9yeWJvb2stY2FyYm9uLXRoZW1lPVwiZzEwMFwiXSB7XG4gIEBpbmNsdWRlIHRoZW1lLnRoZW1lKHRoZW1lcy4kZzEwMCk7XG59XG5cbi8vIHN0b3J5IHBhZ2UgcHJldmlld1xuYm9keS5zYi1tYWluLXBhZGRlZC5zYi1zaG93LW1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kYmFja2dyb3VuZDtcbn1cbiIsIi8vXG4vLyBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTgsIDIwMjNcbi8vXG4vLyBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUtMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vL1xuXG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnY29uZmlnJztcbkB1c2UgJ3RoZW1lcyc7XG5cbi8vLyBTcGVjaWZ5IHRoZSBmYWxsYmFjayB0aGVtZSwgdXNlZCBhcyBhIGNhdGNoLWFsbCBmb3IgdG9rZW5zIHRoYXQgeW91IG1heSBub3Rcbi8vLyBoYXZlIGRlZmluZWQgaW4geW91ciBjdXN0b20gdGhlbWVcbiRmYWxsYmFjazogdGhlbWVzLiR3aGl0ZSAhZGVmYXVsdDtcblxuLy8vIFNwZWNpZnkgdGhlIGN1cnJlbnQgdGhlbWUuIFRoaXMgY2FuIG92ZXJyaWRlIGV4aXN0aW5nIHRva2Vucywgb3IgYWRkIG5ld1xuLy8vIHRva2Vucy4gSWYgeW91IGFyZSBhZGRpbmcgbmV3IHRva2VucywgaXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBzZXQgdGhlXG4vLy8gZmFsbGJhY2sgZm9yIHlvdXIgY3VycmVudCB0aGVtZVxuJHRoZW1lOiAoKSAhZGVmYXVsdDtcbiR0aGVtZTogbWFwLm1lcmdlKCRmYWxsYmFjaywgJHRoZW1lKTtcblxuLy8vIExvY2FsIGNvbXBvbmVudCB0b2tlbnMgdGhhdCBjYW4gYmUgdXBkYXRlZCB3aXRoIGBAbWl4aW4gYWRkLWNvbXBvbmVudC10b2tlbnNgLlxuJC1jb21wb25lbnQtdG9rZW5zOiAoKTtcblxuLy8vIEluY2x1ZGUgdGhlIENTUyBDdXN0b20gUHJvcGVydGllcyBmb3IgdGhlIGFjdGl2ZSB0aGVtZSBvciBhIGdpdmVuIHRoZW1lIG9uXG4vLy8gYSBzZWxlY3RvclxuQG1peGluIHRoZW1lKCRhY3RpdmUtdGhlbWU6ICR0aGVtZSwgJGNvbXBvbmVudC10b2tlbnMuLi4pIHtcbiAgQGVhY2ggJHRva2VuLCAkdmFsdWUgaW4gJGFjdGl2ZS10aGVtZSB7XG4gICAgQGluY2x1ZGUgLWN1c3RvbS1wcm9wZXJ0eSgkdG9rZW4sICR2YWx1ZSk7XG4gIH1cblxuICBAZWFjaCAkZ3JvdXAgaW4gJGNvbXBvbmVudC10b2tlbnMge1xuICAgIEBlYWNoICR0b2tlbiwgJHZhbHVlIGluICRncm91cCB7XG4gICAgICBAaW5jbHVkZSAtY3VzdG9tLXByb3BlcnR5KCR0b2tlbiwgJHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBAZWFjaCAkdG9rZW4sICR2YWx1ZSBpbiAkLWNvbXBvbmVudC10b2tlbnMge1xuICAgIEBpbmNsdWRlIC1jdXN0b20tcHJvcGVydHkoXG4gICAgICAkdG9rZW4sXG4gICAgICAtcmVzb2x2ZS10b2tlbi12YWx1ZSgkYWN0aXZlLXRoZW1lLCAkdmFsdWUpXG4gICAgKTtcbiAgfVxufVxuXG4vLy8gUmV0cmlldmUgdGhlIHZhbHVlIGZvciB0aGUgZ2l2ZW4gJHRva2VuIGZyb20gdGhlIGN1cnJlbnQgJHRoZW1lXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR0b2tlblxuQGZ1bmN0aW9uIGdldCgkdG9rZW4pIHtcbiAgQGlmIG1hcC5oYXMta2V5KCR0aGVtZSwgJHRva2VuKSB7XG4gICAgQHJldHVybiBtYXAuZ2V0KCR0aGVtZSwgJHRva2VuKTtcbiAgfVxuICBAZXJyb3IgXCJVbmFibGUgdG8gZmluZCB0b2tlbjogI3skdG9rZW59IGluIGN1cnJlbnQgJHRoZW1lXCI7XG59XG5cbi8vLyBDb21wYXJlIHR3byB0aGVtZXMgdG8gc2VlIGlmIHRoZSBzZWNvbmQgdGhlbWUgaXMgYSBzdXBlcnNldCBvZiB0aGUgZmlyc3Rcbi8vLyB0aGVtZS4gSW4gb3RoZXIgd29yZHMsIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gdHJ1ZSBpZiBldmVyeSB0b2tlbiBpbiB0aGVcbi8vLyBmaXJzdCB0aGVtZSBpcyBhdmFpbGFibGUgaW4gdGhlIHNlY29uZCB0aGVtZSBhbmQgaGFzIHRoZSBzYW1lIHZhbHVlLiBUaGVcbi8vLyBzZWNvbmQgdGhlbWUgaXMgYWxsb3dlZCB0byBoYXZlIGFkZGl0aW9uYWwgdmFsdWVzIGFuZCBpdCB3aWxsIHN0aWxsIG1hdGNoLlxuLy8vIEBwYXJhbSB7TWFwfSAkYVxuLy8vIEBwYXJhbSB7TWFwfSAkYlxuLy8vIEByZXR1cm5zIHtCb29sZWFufVxuQGZ1bmN0aW9uIG1hdGNoZXMoJGEsICRiKSB7XG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkYSB7XG4gICAgQGlmIG1hcC5oYXMta2V5KCRiLCAka2V5KSA9PSBmYWxzZSB7XG4gICAgICBAcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIEBpZiBtYXAuZ2V0KCRiLCAka2V5KSAhPSAkdmFsdWUge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLyBBZGQgY29tcG9uZW50IHRva2VucyB3aGljaCB3aWxsIGJlIGluY2x1ZGVkIGFueSB0aW1lIHRoZSB0aGVtZSBtaXhpbiBpc1xuLy8vIGNhbGxlZFxuQG1peGluIGFkZC1jb21wb25lbnQtdG9rZW5zKCR0b2tlbi1tYXApIHtcbiAgJC1jb21wb25lbnQtdG9rZW5zOiBtYXAubWVyZ2UoJC1jb21wb25lbnQtdG9rZW5zLCAkdG9rZW4tbWFwKSAhZ2xvYmFsO1xufVxuXG4vLy8gRGV0ZXJtaW5lIHRoZSB2YWx1ZSBmcm9tIGEgY29tcG9uZW50IHRva2VuIHRoYXQgbWF0Y2hlcyB0aGUgZ2l2ZW4gdGhlbWUuXG4vLy8gVGhpcyBpcyBoZWxwZnVsIHdoZW4gYSBjb21wb25lbnQgdG9rZW4gbWF5IGNoYW5nZSBkZXBlbmRpbmcgb24gd2hhdCB0aGVtZSB0aGVcbi8vLyBjb21wb25lbnQgaXMgYmVpbmcgcmVuZGVyZWQgaW4uXG5AZnVuY3Rpb24gLXJlc29sdmUtdG9rZW4tdmFsdWUoJGFjdGl2ZS10aGVtZTogJHRoZW1lLCAkdG9rZW4tdmFsdWUpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdG9rZW4tdmFsdWUpID09IG1hcCBhbmQgbWFwLmhhcy1rZXkoJHRva2VuLXZhbHVlLCB2YWx1ZXMpIHtcbiAgICAkZmFsbGJhY2s6IG1hcC5nZXQoJHRva2VuLXZhbHVlLCBmYWxsYmFjayk7XG4gICAgJHRoZW1lLXZhbHVlczogbWFwLmdldCgkdG9rZW4tdmFsdWUsIHZhbHVlcyk7XG5cbiAgICBAZWFjaCAkdGhlbWUtdmFsdWUgaW4gJHRoZW1lLXZhbHVlcyB7XG4gICAgICAkdGhlbWUtdG8tbWF0Y2g6IG1hcC5nZXQoJHRoZW1lLXZhbHVlLCB0aGVtZSk7XG4gICAgICAkdmFsdWU6IG1hcC5nZXQoJHRoZW1lLXZhbHVlLCB2YWx1ZSk7XG5cbiAgICAgIEBpZiBtYXRjaGVzKCR0aGVtZS10by1tYXRjaCwgJGFjdGl2ZS10aGVtZSkge1xuICAgICAgICBAcmV0dXJuICR2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAcmV0dXJuICRmYWxsYmFjaztcbiAgfVxuXG4gIEByZXR1cm4gJHRva2VuLXZhbHVlO1xufVxuXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8gQGdyb3VwIEBjYXJib24vdGhlbWVzXG5AbWl4aW4gLWN1c3RvbS1wcm9wZXJ0eSgkbmFtZSwgJHZhbHVlKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHZhbHVlKSA9PSBtYXAge1xuICAgIEBlYWNoICRwcm9wZXJ0eSwgJHByb3BlcnR5LXZhbHVlIGluICR2YWx1ZSB7XG4gICAgICAvLyBPbmx5IHN1cHBvcnQgb25lLWxldmVsIG9mIGRlcHRoIGZvciB2YWx1ZXMgdGhhdCBhcmUgbWFwcy4gVGhpcyBpcyB0b1xuICAgICAgLy8gYXZvaWQgYnJpbmdpbmcgcHJvcGVydGllcyBsaWtlIGBicmVha3BvaW50c2Agb24gdHlwZSB0b2tlbnNcbiAgICAgIEBpZiB0eXBlLW9mKCRwcm9wZXJ0eS12YWx1ZSkgIT0gbWFwIHtcbiAgICAgICAgQGluY2x1ZGUgLWN1c3RvbS1wcm9wZXJ0eSgnI3skbmFtZX0tI3skcHJvcGVydHl9JywgJHByb3BlcnR5LXZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIC0tI3tjb25maWcuJHByZWZpeH0tI3skbmFtZX06ICN7JHZhbHVlfTtcbiAgfVxufVxuIiwiLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkBmb3J3YXJkICcuL3RoZW1lL3RoZW1lJyBoaWRlIHRoZW1lO1xuQHVzZSAnLi90aGVtZS90aGVtZSc7XG5AdXNlICcuL2xheWVyL2xheWVyLXRva2Vucyc7XG5AdXNlICcuL3V0aWxpdGllcy9jdXN0b20tcHJvcGVydHknO1xuXG4vLy8gSW5jbHVkZSB0aGUgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzIGZvciB0aGUgYWN0aXZlIHRoZW1lIG9yIGEgZ2l2ZW4gdGhlbWUgb25cbi8vLyBhIHNlbGVjdG9yXG5AbWl4aW4gdGhlbWUoJGFyZ3MuLi4pIHtcbiAgQGluY2x1ZGUgdGhlbWUudGhlbWUoJGFyZ3MuLi4pO1xuXG4gIC8vIElmIHRoZSBzeXN0ZW0gaXMgaW4gaGlnaC1jb250cmFzdCBtb2RlLCB1c2UgdGhlIHN5c3RlbSBkZWZpbmVkIGNvbG9ycy4gIFRoaXMgbW9zdGx5IGhhcHBlbnMgYXV0b21hdGljYWxseSwgYnV0XG4gIC8vIHdlIG5lZWQgdG8gZG8gaXQgbWFudWFsbHkgZm9yIGljb25zIGFuZCBzZWxlY3RlZCBiYWNrZ3JvdW5kcy4gIEltcG9ydGFudGx5LCB0aGUgY3VzdG9tIHByb3BlcnRpZXMgd2Ugc2V0IGhlcmVcbiAgLy8gbmVlZCB0byBvdmVycmlkZSB0aGUgQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzIHNldCBhYm92ZS4gIFNlZTpcbiAgLy8gLSBodHRwczovL2dpdGh1Yi5jb20vY2FyYm9uLWRlc2lnbi1zeXN0ZW0vY2FyYm9uL2lzc3Vlcy8xOTAxNVxuICAvLyAtIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9zeXN0ZW0tY29sb3IuXG4gIC8vIC0gaHR0cHM6Ly9jYXJib25kZXNpZ25zeXN0ZW0uY29tL2VsZW1lbnRzL2NvbG9yL3Rva2Vucy8jaWNvblxuICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpIHtcbiAgICAvLyBJY29uIGNvbG9ycyBzcGVjaWZpZWQgYnkgXCJmaWxsXCIuXG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdpY29uLXByaW1hcnknLCBCdXR0b25UZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2ljb24tc2Vjb25kYXJ5JywgQnV0dG9uVGV4dCk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdpY29uLWludGVyYWN0aXZlJywgQnV0dG9uVGV4dCk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdpY29uLWRpc2FibGVkJywgR3JheVRleHQpO1xuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignaWNvbi1vbi1jb2xvci1kaXNhYmxlZCcsIEdyYXlUZXh0KTtcblxuICAgIC8vIFNpbmNlIGljb24taW52ZXJzZSBhbmQgaWNvbi1vbi1jb2xvciBhcmUgZ2VuZXJhbGx5IHVzZWQgdG8gaW5kaWNhdGVkIHNlbGVjdGVkIGljb25zLCB1c2UgU2VsZWN0ZWRJdGVtVGV4dC5cbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2ljb24taW52ZXJzZScsIFNlbGVjdGVkSXRlbVRleHQpO1xuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignaWNvbi1vbi1jb2xvcicsIFNlbGVjdGVkSXRlbVRleHQpO1xuXG4gICAgLy8gU29tZSBjb21wb25lbnRzIGN1cnJlbnRseSBzZXQgdGhlc2UgdmFsdWVzIGZvciBmaWxsLCBhbHRob3VnaCB1bmNsZWFyIGlmIHRoYXQncyB2YWxpZC5cbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2J1dHRvbi1kaXNhYmxlZCcsIEdyYXlUZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2ludGVyYWN0aXZlJywgQnV0dG9uVGV4dCk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdsaW5rLXByaW1hcnknLCBMaW5rVGV4dCk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdsaW5rLXByaW1hcnktaG92ZXInLCBMaW5rVGV4dCk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdsaW5rLXNlY29uZGFyeScsIExpbmtUZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2xpbmstaW52ZXJzZScsIFNlbGVjdGVkSXRlbVRleHQpO1xuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbihcbiAgICAgICdsaW5rLWludmVyc2UtaG92ZXInLFxuICAgICAgU2VsZWN0ZWRJdGVtVGV4dFxuICAgICk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKFxuICAgICAgJ2xpbmstaW52ZXJzZS12aXNpdGVkJyxcbiAgICAgIFNlbGVjdGVkSXRlbVRleHRcbiAgICApO1xuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignbGluay12aXNpdGVkJywgVmlzaXRlZFRleHQpO1xuXG4gICAgLy8gRm9yY2UgYSBiYWNrZ3JvdW5kLWNvbG9yIGZvciBzZWxlY3RlZCBidXR0b25zIGV0Yy4sIG90aGVyd2lzZSB0aGUgdXNlciB3b24ndCBrbm93IHRoZXkgYXJlIHNlbGVjdGVkLlxuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignYmFja2dyb3VuZC1zZWxlY3RlZCcsIFNlbGVjdGVkSXRlbSk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKFxuICAgICAgJ2JhY2tncm91bmQtc2VsZWN0ZWQtaG92ZXInLFxuICAgICAgU2VsZWN0ZWRJdGVtXG4gICAgKTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2JhY2tncm91bmQtaW52ZXJzZScsIFNlbGVjdGVkSXRlbSk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKFxuICAgICAgJ2xheWVyLXNlbGVjdGVkLWludmVyc2UnLFxuICAgICAgU2VsZWN0ZWRJdGVtXG4gICAgKTtcbiAgfVxuXG4gIC8vIE5vdGU6IHdlIG5lZWQgdG8gcmUtZW1pdCB0aGUgY29udGV4dHVhbCBsYXllciB0b2tlbnMgYXMgcGFydCBvZiB0aGUgdGhlbWVcbiAgLy8gbWl4aW4uIE90aGVyd2lzZSwgdGhlIGxheWVyIHRva2VucyBhcmUgZGVmaW5lZCBhdCB0aGUgOnJvb3QgbGV2ZWwgYW5kIHdpbGxcbiAgLy8gbm90IHBpY2sgdXAgdGhlIHRoZW1lLXNwZWNpZmljLCBvciB6b25lLXNwZWNpZmljLCB2YWx1ZSBmcm9tIHRoZSBmaXJzdFxuICAvLyBsYXllci5cbiAgLy9cbiAgLy8gRm9yIGV4YW1wbGUsIGluIHRoaXMgc2l0dWF0aW9uOlxuICAvL1xuICAvLyBgYGBcbiAgLy8gOnJvb3Qge1xuICAvLyAgIC0tbGF5ZXItb25lOiAjMDAwMDAwO1xuICAvLyAgIC0tbGF5ZXI6IHZhcigtLWxheWVyLW9uZSk7XG4gIC8vIH1cbiAgLy8gYGBgXG4gIC8vXG4gIC8vIFRoaXMgd2lsbCBhbHdheXMgZXZhbHVhdGUgdG8gdGhlIHZhbHVlIG9mIGAtLWxheWVyLW9uZWAgYXQgdGhlIGA6cm9vdGBcbiAgLy8gc2VsZWN0b3IsIGV2ZW4gaWYgYC0tbGF5ZXItb25lYCBpcyByZWRlZmluZWQgbGF5ZXIgb24gaW4gdGhlIGNhc2NhZGUuXG4gIC8vXG4gIC8vIGBgYFxuICAvLyAuem9uZSB7XG4gIC8vICAgLS1sYXllci1vbmU6ICNmZmZmZmY7XG4gIC8vIH1cbiAgLy8gYGBgXG4gIC8vXG4gIC8vIEV2ZW4gdGhvdWdoIHlvdSB3b3VsZCBleHBlY3QgYC0tbGF5ZXJgIHRvIGJlIHJlZGVmaW5lZCwgaXQgd2lsbCBrZWVwIHRoZVxuICAvLyB2YWx1ZSBkZWZpbmVkIGF0IHRoZSBgOnJvb3RgIGxldmVsLlxuICAvL1xuICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXJib24tZGVzaWduLXN5c3RlbS9jYXJib24vaXNzdWVzLzExMTM4XG4gIEBpbmNsdWRlIGxheWVyLXRva2Vucy5lbWl0LWxheWVyLXRva2VucygxKTtcbn1cbiIsIi8vXG4vLyBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTgsIDIwMjNcbi8vXG4vLyBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUtMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vL1xuXG5AdXNlICcuLi9jb25maWcnO1xuXG4vLyBTb21lIENTUyBDdXN0b20gUHJvcGVydHkgdGVybWlub2xvZ3lcbi8vIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy12YXJpYWJsZXMtMS9cbi8vXG4vLyA8Y3VzdG9tLXByb3BlcnR5LW5hbWU+OlxuLy8gICBBbnkgdmFsaWQgaWRlbnRpZmVyIHRoYXQgc3RhcnRzIHdpdGggdHdvIGRhc2hlcyAoLS0pXG4vL1xuLy8gQSBkZWNsYXJhdGlvbjpcbi8vICAgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzIGNhbiBiZSB1c2VkIGFzIGRlY2xhcmF0aW9ucyBpbiBhIENTUyBzZWxlY3Rvci4gVGhleVxuLy8gICB0YWtlIG9uIHRoZSBmb3JtIG9mOlxuLy9cbi8vICAgPGN1c3RvbS1wcm9wZXJ0eS1uYW1lPjogPGRlY2xhcmF0aW9uLXZhbHVlPjtcbi8vXG4vLyBUaGUgdmFyKCkgbm90YXRpb246XG4vLyAgIFlvdSBjYW4gdXNlIGEgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBhcyBhIHN1YnN0aXR1dGUgZm9yIGEgdmFsdWUgb2YgYW5vdGhlclxuLy8gICBwcm9wZXJ0eSB1c2luZyB0aGUgdmFyKCkgZnVuY3Rpb24uIFRoaXMgZnVuY3Rpb24gaGFzIHRoZSBmb2xsb3dpbmcgc3ludGF4OlxuLy9cbi8vICAgdmFyKCA8Y3VzdG9tLXByb3BlcnR5LW5hbWU+IFssIDxkZWNsYXJhdGl2ZS12YWx1ZT4gXT8gKVxuLy9cbi8vICAgVGhpcyBmdW5jdGlvbiB0YWtlcyBpbiBhbiBvcHRpb25hbCBmYWxsYmFjayB2YWx1ZSBpZiB0aGUgQ1NTIEN1c3RvbVxuLy8gICBQcm9wZXJ0eSBoYXMgbm90IGJlZW4gcHJldmlvdXNseSBkZWZpbmVkXG5cbi8vLyBHZXQgdGhlIDxjdXN0b20tcHJvcGVydHktbmFtZT4gZm9yIGEgZ2l2ZW4gc3RyaW5nXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRuYW1lXG4vLy8gQHJldHVybnMge1N0cmluZ31cbkBmdW5jdGlvbiBnZXQtbmFtZSgkbmFtZSkge1xuICBAcmV0dXJuIC0tI3tjb25maWcuJHByZWZpeH0tI3skbmFtZX07XG59XG5cbi8vLyBHZXQgdGhlIHZhcigpIHJlcHJlc2VudGF0aW9uIGZvciBhIGdpdmVuIHRva2VuXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRuYW1lXG4vLy8gQHBhcmFtIHtBbnl9ICRmYWxsYmFja1xuLy8vIEByZXR1cm5zIHZhcigpXG5AZnVuY3Rpb24gZ2V0LXZhcigkbmFtZSwgJGZhbGxiYWNrOiBmYWxzZSkge1xuICBAaWYgJGZhbGxiYWNrIHtcbiAgICBAcmV0dXJuIHZhcigtLSN7Y29uZmlnLiRwcmVmaXh9LSN7JG5hbWV9LCAjeyRmYWxsYmFja30pO1xuICB9XG4gIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skbmFtZX0pO1xufVxuXG4vLy8gRW1pdCBhIGRlY2xhcmF0aW9uIHdoaWNoIHNldHMgdGhlIHZhbHVlIG9mIGEgQ1NTIEN1c3RvbSBQcm9wZXJ0eSB1c2luZyB0aGVcbi8vLyAkbmFtZSBhcyB0aGUgPGN1c3RvbS1wcm9wZXJ0eS1uYW1lPiBhbmQgdGhlICR2YWx1ZSBhcyB0aGVcbi8vLyA8ZGVjbGFyYXRpb24tdmFsdWU+XG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRuYW1lXG4vLy8gQHBhcmFtIHthbnl9ICR2YWx1ZVxuQG1peGluIGRlY2xhcmF0aW9uKCRuYW1lLCAkdmFsdWUpIHtcbiAgI3tnZXQtbmFtZSgkbmFtZSl9OiAjeyR2YWx1ZX07XG59XG4iLCIvLyBDb2RlIGdlbmVyYXRlZCBieSBAY2FyYm9uL3RoZW1lcy4gRE8gTk9UIEVESVQuXG4vL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29uZmlnJztcbkB1c2UgJy4uL3RoZW1lJztcblxuLy8vIEludGVybmFsIGhlbHBlciBmb3IgZ2VuZXJhdGluZyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbkBmdW5jdGlvbiBfZ2V0KCR0b2tlbikge1xuICBAaWYgY29uZmlnLiR1c2UtZmFsbGJhY2stdmFsdWUgPT0gZmFsc2Uge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skdG9rZW59KTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiB2YXIoLS0je2NvbmZpZy4kcHJlZml4fS0jeyR0b2tlbn0sICN7dGhlbWUuZ2V0KCR0b2tlbil9KTtcbiAgfVxufVxuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZGAgdG9rZW5cbiRiYWNrZ3JvdW5kOiBfZ2V0KCdiYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWFjdGl2ZWAgdG9rZW5cbiRiYWNrZ3JvdW5kLWFjdGl2ZTogX2dldCgnYmFja2dyb3VuZC1hY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtc2VsZWN0ZWRgIHRva2VuXG4kYmFja2dyb3VuZC1zZWxlY3RlZDogX2dldCgnYmFja2dyb3VuZC1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLXNlbGVjdGVkLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLXNlbGVjdGVkLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtaG92ZXI6IF9nZXQoJ2JhY2tncm91bmQtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtYnJhbmRgIHRva2VuXG4kYmFja2dyb3VuZC1icmFuZDogX2dldCgnYmFja2dyb3VuZC1icmFuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1pbnZlcnNlYCB0b2tlblxuJGJhY2tncm91bmQtaW52ZXJzZTogX2dldCgnYmFja2dyb3VuZC1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWludmVyc2UtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLWludmVyc2UtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAxYCB0b2tlblxuJGxheWVyLTAxOiBfZ2V0KCdsYXllci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAxYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMTogX2dldCgnbGF5ZXItYWN0aXZlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAxYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDE6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAxYCB0b2tlblxuJGxheWVyLWhvdmVyLTAxOiBfZ2V0KCdsYXllci1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDFgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDE6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMTogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAyYCB0b2tlblxuJGxheWVyLTAyOiBfZ2V0KCdsYXllci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAyYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMjogX2dldCgnbGF5ZXItYWN0aXZlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAyYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDI6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAyYCB0b2tlblxuJGxheWVyLWhvdmVyLTAyOiBfZ2V0KCdsYXllci1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDJgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDI6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMjogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAzYCB0b2tlblxuJGxheWVyLTAzOiBfZ2V0KCdsYXllci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAzYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMzogX2dldCgnbGF5ZXItYWN0aXZlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAzYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDM6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAzYCB0b2tlblxuJGxheWVyLWhvdmVyLTAzOiBfZ2V0KCdsYXllci1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDNgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDM6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMzogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWludmVyc2VgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZTogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtZGlzYWJsZWRgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtZGlzYWJsZWQ6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDFgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAxOiBfZ2V0KCdsYXllci1hY2NlbnQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDFgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMTogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMTogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDJgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAyOiBfZ2V0KCdsYXllci1hY2NlbnQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDJgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMjogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMjogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDNgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAzOiBfZ2V0KCdsYXllci1hY2NlbnQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDNgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMzogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMzogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wMWAgdG9rZW5cbiRmaWVsZC0wMTogX2dldCgnZmllbGQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAxYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAxOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDJgIHRva2VuXG4kZmllbGQtMDI6IF9nZXQoJ2ZpZWxkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wMmAgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMjogX2dldCgnZmllbGQtaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAzYCB0b2tlblxuJGZpZWxkLTAzOiBfZ2V0KCdmaWVsZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDNgIHRva2VuXG4kZmllbGQtaG92ZXItMDM6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpbnRlcmFjdGl2ZWAgdG9rZW5cbiRpbnRlcmFjdGl2ZTogX2dldCgnaW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDBgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMDogX2dldCgnYm9yZGVyLXN1YnRsZS0wMCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wMWAgdG9rZW5cbiRib3JkZXItc3VidGxlLTAxOiBfZ2V0KCdib3JkZXItc3VidGxlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDE6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDJgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMjogX2dldCgnYm9yZGVyLXN1YnRsZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMmAgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAyOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAzYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDM6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDNgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMzogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wMWAgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAxOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAyYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDI6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDNgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMzogX2dldCgnYm9yZGVyLXN0cm9uZy0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDFgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDE6IF9nZXQoJ2JvcmRlci10aWxlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wMmAgdG9rZW5cbiRib3JkZXItdGlsZS0wMjogX2dldCgnYm9yZGVyLXRpbGUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAzYCB0b2tlblxuJGJvcmRlci10aWxlLTAzOiBfZ2V0KCdib3JkZXItdGlsZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWludmVyc2VgIHRva2VuXG4kYm9yZGVyLWludmVyc2U6IF9nZXQoJ2JvcmRlci1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItaW50ZXJhY3RpdmVgIHRva2VuXG4kYm9yZGVyLWludGVyYWN0aXZlOiBfZ2V0KCdib3JkZXItaW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1kaXNhYmxlZGAgdG9rZW5cbiRib3JkZXItZGlzYWJsZWQ6IF9nZXQoJ2JvcmRlci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1wcmltYXJ5YCB0b2tlblxuJHRleHQtcHJpbWFyeTogX2dldCgndGV4dC1wcmltYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXNlY29uZGFyeWAgdG9rZW5cbiR0ZXh0LXNlY29uZGFyeTogX2dldCgndGV4dC1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtcGxhY2Vob2xkZXJgIHRva2VuXG4kdGV4dC1wbGFjZWhvbGRlcjogX2dldCgndGV4dC1wbGFjZWhvbGRlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1oZWxwZXJgIHRva2VuXG4kdGV4dC1oZWxwZXI6IF9nZXQoJ3RleHQtaGVscGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWVycm9yYCB0b2tlblxuJHRleHQtZXJyb3I6IF9nZXQoJ3RleHQtZXJyb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtaW52ZXJzZWAgdG9rZW5cbiR0ZXh0LWludmVyc2U6IF9nZXQoJ3RleHQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1vbi1jb2xvcmAgdG9rZW5cbiR0ZXh0LW9uLWNvbG9yOiBfZ2V0KCd0ZXh0LW9uLWNvbG9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LW9uLWNvbG9yLWRpc2FibGVkYCB0b2tlblxuJHRleHQtb24tY29sb3ItZGlzYWJsZWQ6IF9nZXQoJ3RleHQtb24tY29sb3ItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtZGlzYWJsZWRgIHRva2VuXG4kdGV4dC1kaXNhYmxlZDogX2dldCgndGV4dC1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1wcmltYXJ5YCB0b2tlblxuJGxpbmstcHJpbWFyeTogX2dldCgnbGluay1wcmltYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXByaW1hcnktaG92ZXJgIHRva2VuXG4kbGluay1wcmltYXJ5LWhvdmVyOiBfZ2V0KCdsaW5rLXByaW1hcnktaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstc2Vjb25kYXJ5YCB0b2tlblxuJGxpbmstc2Vjb25kYXJ5OiBfZ2V0KCdsaW5rLXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLXZpc2l0ZWRgIHRva2VuXG4kbGluay1pbnZlcnNlLXZpc2l0ZWQ6IF9nZXQoJ2xpbmstaW52ZXJzZS12aXNpdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXZpc2l0ZWRgIHRva2VuXG4kbGluay12aXNpdGVkOiBfZ2V0KCdsaW5rLXZpc2l0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZWAgdG9rZW5cbiRsaW5rLWludmVyc2U6IF9nZXQoJ2xpbmstaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLWFjdGl2ZWAgdG9rZW5cbiRsaW5rLWludmVyc2UtYWN0aXZlOiBfZ2V0KCdsaW5rLWludmVyc2UtYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2UtaG92ZXJgIHRva2VuXG4kbGluay1pbnZlcnNlLWhvdmVyOiBfZ2V0KCdsaW5rLWludmVyc2UtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tcHJpbWFyeWAgdG9rZW5cbiRpY29uLXByaW1hcnk6IF9nZXQoJ2ljb24tcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1zZWNvbmRhcnlgIHRva2VuXG4kaWNvbi1zZWNvbmRhcnk6IF9nZXQoJ2ljb24tc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWludmVyc2VgIHRva2VuXG4kaWNvbi1pbnZlcnNlOiBfZ2V0KCdpY29uLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tb24tY29sb3JgIHRva2VuXG4kaWNvbi1vbi1jb2xvcjogX2dldCgnaWNvbi1vbi1jb2xvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1vbi1jb2xvci1kaXNhYmxlZGAgdG9rZW5cbiRpY29uLW9uLWNvbG9yLWRpc2FibGVkOiBfZ2V0KCdpY29uLW9uLWNvbG9yLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWRpc2FibGVkYCB0b2tlblxuJGljb24tZGlzYWJsZWQ6IF9nZXQoJ2ljb24tZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24taW50ZXJhY3RpdmVgIHRva2VuXG4kaWNvbi1pbnRlcmFjdGl2ZTogX2dldCgnaWNvbi1pbnRlcmFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1lcnJvcmAgdG9rZW5cbiRzdXBwb3J0LWVycm9yOiBfZ2V0KCdzdXBwb3J0LWVycm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXN1Y2Nlc3NgIHRva2VuXG4kc3VwcG9ydC1zdWNjZXNzOiBfZ2V0KCdzdXBwb3J0LXN1Y2Nlc3MnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtd2FybmluZ2AgdG9rZW5cbiRzdXBwb3J0LXdhcm5pbmc6IF9nZXQoJ3N1cHBvcnQtd2FybmluZycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1pbmZvYCB0b2tlblxuJHN1cHBvcnQtaW5mbzogX2dldCgnc3VwcG9ydC1pbmZvJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWVycm9yLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1lcnJvci1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LWVycm9yLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtc3VjY2Vzcy1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtc3VjY2Vzcy1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC13YXJuaW5nLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC13YXJuaW5nLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtd2FybmluZy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWluZm8taW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LWluZm8taW52ZXJzZTogX2dldCgnc3VwcG9ydC1pbmZvLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi1tYWpvcmAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tbWFqb3I6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi1tYWpvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLW1pbm9yYCB0b2tlblxuJHN1cHBvcnQtY2F1dGlvbi1taW5vcjogX2dldCgnc3VwcG9ydC1jYXV0aW9uLW1pbm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkYCB0b2tlblxuJHN1cHBvcnQtY2F1dGlvbi11bmRlZmluZWQ6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi11bmRlZmluZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1wb3BvdmVyLWJhY2tncm91bmQ6IF9nZXQoJ2FpLXBvcG92ZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDFgIHRva2VuXG4kYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDE6IF9nZXQoJ2FpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMmAgdG9rZW5cbiRhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMjogX2dldCgnYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWlubmVyLXNoYWRvd2AgdG9rZW5cbiRhaS1pbm5lci1zaGFkb3c6IF9nZXQoJ2FpLWlubmVyLXNoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1zdGFydC1zbWAgdG9rZW5cbiRhaS1hdXJhLXN0YXJ0LXNtOiBfZ2V0KCdhaS1hdXJhLXN0YXJ0LXNtJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLXN0YXJ0YCB0b2tlblxuJGFpLWF1cmEtc3RhcnQ6IF9nZXQoJ2FpLWF1cmEtc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtZW5kYCB0b2tlblxuJGFpLWF1cmEtZW5kOiBfZ2V0KCdhaS1hdXJhLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLWF1cmEtaG92ZXItYmFja2dyb3VuZDogX2dldCgnYWktYXVyYS1ob3Zlci1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLXN0YXJ0YCB0b2tlblxuJGFpLWF1cmEtaG92ZXItc3RhcnQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItZW5kYCB0b2tlblxuJGFpLWF1cmEtaG92ZXItZW5kOiBfZ2V0KCdhaS1hdXJhLWhvdmVyLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLXN0cm9uZ2AgdG9rZW5cbiRhaS1ib3JkZXItc3Ryb25nOiBfZ2V0KCdhaS1ib3JkZXItc3Ryb25nJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItc3RhcnRgIHRva2VuXG4kYWktYm9yZGVyLXN0YXJ0OiBfZ2V0KCdhaS1ib3JkZXItc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1lbmRgIHRva2VuXG4kYWktYm9yZGVyLWVuZDogX2dldCgnYWktYm9yZGVyLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktZHJvcC1zaGFkb3dgIHRva2VuXG4kYWktZHJvcC1zaGFkb3c6IF9nZXQoJ2FpLWRyb3Atc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1za2VsZXRvbi1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLXNrZWxldG9uLWJhY2tncm91bmQ6IF9nZXQoJ2FpLXNrZWxldG9uLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXNrZWxldG9uLWVsZW1lbnQtYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmQ6IF9nZXQoXG4gICdhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmQnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktb3ZlcmxheWAgdG9rZW5cbiRhaS1vdmVybGF5OiBfZ2V0KCdhaS1vdmVybGF5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWNlbnRlcmAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWNlbnRlcjogX2dldCgnYWktcG9wb3Zlci1jYXJldC1jZW50ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tOiBfZ2V0KCdhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kOiBfZ2V0KFxuICAnYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZCdcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kLWFjdGlvbnNgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zOiBfZ2V0KFxuICAnYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1wcm9tcHQtYmFja2dyb3VuZDogX2dldCgnY2hhdC1wcm9tcHQtYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYm9yZGVyLXN0YXJ0YCB0b2tlblxuJGNoYXQtcHJvbXB0LWJvcmRlci1zdGFydDogX2dldCgnY2hhdC1wcm9tcHQtYm9yZGVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1ib3JkZXItZW5kYCB0b2tlblxuJGNoYXQtcHJvbXB0LWJvcmRlci1lbmQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJvcmRlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLXVzZXJgIHRva2VuXG4kY2hhdC1idWJibGUtdXNlcjogX2dldCgnY2hhdC1idWJibGUtdXNlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtYWdlbnRgIHRva2VuXG4kY2hhdC1idWJibGUtYWdlbnQ6IF9nZXQoJ2NoYXQtYnViYmxlLWFnZW50JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS1ib3JkZXJgIHRva2VuXG4kY2hhdC1idWJibGUtYm9yZGVyOiBfZ2V0KCdjaGF0LWJ1YmJsZS1ib3JkZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLWJvdGAgdG9rZW5cbiRjaGF0LWF2YXRhci1ib3Q6IF9nZXQoJ2NoYXQtYXZhdGFyLWJvdCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItYWdlbnRgIHRva2VuXG4kY2hhdC1hdmF0YXItYWdlbnQ6IF9nZXQoJ2NoYXQtYXZhdGFyLWFnZW50JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci11c2VyYCB0b2tlblxuJGNoYXQtYXZhdGFyLXVzZXI6IF9nZXQoJ2NoYXQtYXZhdGFyLXVzZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtc2hlbGwtYmFja2dyb3VuZGAgdG9rZW5cbiRjaGF0LXNoZWxsLWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtc2hlbGwtYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1oZWFkZXItYmFja2dyb3VuZGAgdG9rZW5cbiRjaGF0LWhlYWRlci1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LWhlYWRlci1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbmAgdG9rZW5cbiRjaGF0LWJ1dHRvbjogX2dldCgnY2hhdC1idXR0b24nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLWhvdmVyYCB0b2tlblxuJGNoYXQtYnV0dG9uLWhvdmVyOiBfZ2V0KCdjaGF0LWJ1dHRvbi1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tdGV4dC1ob3ZlcmAgdG9rZW5cbiRjaGF0LWJ1dHRvbi10ZXh0LWhvdmVyOiBfZ2V0KCdjaGF0LWJ1dHRvbi10ZXh0LWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1hY3RpdmVgIHRva2VuXG4kY2hhdC1idXR0b24tYWN0aXZlOiBfZ2V0KCdjaGF0LWJ1dHRvbi1hY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXNlbGVjdGVkYCB0b2tlblxuJGNoYXQtYnV0dG9uLXNlbGVjdGVkOiBfZ2V0KCdjaGF0LWJ1dHRvbi1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZGAgdG9rZW5cbiRjaGF0LWJ1dHRvbi10ZXh0LXNlbGVjdGVkOiBfZ2V0KCdjaGF0LWJ1dHRvbi10ZXh0LXNlbGVjdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBoaWdobGlnaHRgIHRva2VuXG4kaGlnaGxpZ2h0OiBfZ2V0KCdoaWdobGlnaHQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYG92ZXJsYXlgIHRva2VuXG4kb3ZlcmxheTogX2dldCgnb3ZlcmxheScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdG9nZ2xlLW9mZmAgdG9rZW5cbiR0b2dnbGUtb2ZmOiBfZ2V0KCd0b2dnbGUtb2ZmJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzaGFkb3dgIHRva2VuXG4kc2hhZG93OiBfZ2V0KCdzaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzYCB0b2tlblxuJGZvY3VzOiBfZ2V0KCdmb2N1cycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXMtaW5zZXRgIHRva2VuXG4kZm9jdXMtaW5zZXQ6IF9nZXQoJ2ZvY3VzLWluc2V0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1cy1pbnZlcnNlYCB0b2tlblxuJGZvY3VzLWludmVyc2U6IF9nZXQoJ2ZvY3VzLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNrZWxldG9uLWJhY2tncm91bmRgIHRva2VuXG4kc2tlbGV0b24tYmFja2dyb3VuZDogX2dldCgnc2tlbGV0b24tYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2tlbGV0b24tZWxlbWVudGAgdG9rZW5cbiRza2VsZXRvbi1lbGVtZW50OiBfZ2V0KCdza2VsZXRvbi1lbGVtZW50JykgIWRlZmF1bHQ7XG4iXX0= */`,document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(y))}),f={};B(f,{css:()=>h});var h,z=I(()=>{h=`/**
 * Unified Button Mixin
 * Provides comprehensive button styling with all customization options
 *
 * @param {string} $size - Size level: "xs", "sm", "md", "lg", "xl", "2xl", or null to skip sizing (default: "lg")
 * @param {string} $kind - Button kind: "ghost", "primary", "secondary" (default: "ghost")
 * @param {boolean} $focus - Whether to include focus styles (default: true)
 * @param {boolean} $states - Whether to include hover/active states (default: true)
 *
 * @example Basic button with default settings
 *   @include button();
 *
 * @example Button without focus styles
 *   @include button("lg", "ghost", false);
 *
 * @example Primary button with medium size
 *   @include button("md", "primary");
 *
 * @example Button with only reset styles (no states)
 *   @include button(null, "ghost", true, false);
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
 * ArgTable Base
 * Base styling for controls/props tables
 * Used in both docs.scss and panel.scss
 */
/**
 * ArgTable Body Row
 * Standard control rows in argstable
 */
/**
 * ArgTable Type Badge
 * Type information badges (string, number, etc.)
 */
/**
 * ArgTable Required Indicator
 * Shows which props are required
 */
/**
 * ArgTable Item Row
 * Expandable rows for arrays/objects
 */
/**
 * Link Styling
 * Provides consistent anchor tag styling with Carbon theme tokens
 * Includes hover, active, visited, and focus states
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
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
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
.sb-bar :has(> button) button:not([role=tab]):focus,
.sb-bar :has(> button) a:focus,
.sb-bar :has(> a) button:not([role=tab]):focus,
.sb-bar :has(> a) a:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
.sb-bar {
  /**
   * Selected/Active Non-Tab Button
   * Indicates active state for toggle buttons
   * Using data attribute for better semantic meaning
   */
}
.sb-bar button[data-selected=true]:not([role=tab]),
.sb-bar button[aria-pressed=true]:not([role=tab]) {
  background-color: var(--cds-background-selected, rgba(141, 141, 141, 0.2));
}
.sb-bar {
  /**
   * Active Tab Indicator (fallback for CSS class)
   * Using attribute selector for maintainability
   */
}
.sb-bar [class*=css-][class*=active] {
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
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbIl9taXhpbnMuc2NzcyIsInRvb2xiYXIuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3RoZW1lcy9zY3NzL2dlbmVyYXRlZC9fdG9rZW5zLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZS9fdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQTRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FDdFZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtFQUNFO0VBQ0E7RUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0U7RUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7RUFFRSxPQytLVzs7QURsTWpCO0FBdUJFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7RUFFRTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7RUFDRSxrQkM4R2E7RUQ3R2I7RUFDQTs7QUFYSjtBQUFBO0FBY0U7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7RURXRjtFQUNBO0VBSUE7RUFDQTtFQUtFLGdCQURhO0VBRWIsaUJBRmE7O0FBT2I7QUFBQTtBQUFBO0FBQUE7RUFDRTs7QUFHRjtBQUFBO0FBQUE7QUFBQTtFQUNFOztBQU1GO0FBQUE7QUFBQTtBQUFBO0VBQ0U7O0FDckZOO0FBbURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0E7QUFBQTtFQUVFLGtCQ3pDa0I7O0FEakJ0QjtBQTZERTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFRDhGQTtFQUNBO0VBQ0E7O0FDaktGO0FBcUVFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VEakJBO0VBQ0E7RUFJQTtFQUNBO0VBS0UsZ0JBRGE7RUFFYixpQkFGYTs7QUFPYjtFQUNFOztBQUdGO0VBQ0U7O0FDTEo7RUR3RUE7O0FBRUE7RUFmRTtFQUNBO0VBZ0JBO0VBQ0E7O0FDN0VGO0FBR0U7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUQwRkY7RUFNRSxrQkdySlk7RUhzSlosT0VpQmE7O0FEekhmO0FBV0U7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRSxPQ3NHUztFRHJHVDtFQUNBO0VBQ0E7O0FBNUZOO0FBZ0dFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VEMkRBO0VBQ0E7RUFDQTtBQzFERTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFRCtERjtFQUdFLGtCRVlpQjtFRlhqQixPRW1DWSIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJzYXNzOmxpc3RcIjtcbkB1c2UgXCJzYXNzOm1hcFwiO1xuQHVzZSBcIkBjYXJib24vbGF5b3V0XCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZVwiO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3Mvc3BhY2luZ1wiO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvdHlwZVwiO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvY29tcG9uZW50cy9idXR0b24vdG9rZW5zXCIgYXMgYnV0dG9uLXRva2VucztcbkB1c2UgXCJkZWZhdWx0c1wiO1xuXG4vLyBCdXR0b24gc2l6ZSBtYXAgZm9yIERSWSBwcmluY2lwbGVcbiRidXR0b24tc2l6ZXM6IChcbiAgXCJ4c1wiOiBzcGFjaW5nLiRzcGFjaW5nLTA1LFxuICBcInNtXCI6IHNwYWNpbmcuJHNwYWNpbmctMDYsXG4gIFwibWRcIjogc3BhY2luZy4kc3BhY2luZy0wNyxcbiAgXCJsZ1wiOiBzcGFjaW5nLiRzcGFjaW5nLTA4LFxuICBcInhsXCI6IHNwYWNpbmcuJHNwYWNpbmctMDksXG4gIFwiMnhsXCI6IHNwYWNpbmcuJHNwYWNpbmctMTAsXG4pO1xuXG4vLyBCdXR0b24ga2luZCBjb25maWd1cmF0aW9uc1xuJGJ1dHRvbi1raW5kczogKFxuICBcInByaW1hcnlcIjogKFxuICAgIFwiYmFja2dyb3VuZFwiOiBidXR0b24tdG9rZW5zLiRidXR0b24tcHJpbWFyeSxcbiAgICBcImNvbG9yXCI6IHRoZW1lLiR0ZXh0LW9uLWNvbG9yLFxuICAgIFwiaG92ZXJcIjogYnV0dG9uLXRva2Vucy4kYnV0dG9uLXByaW1hcnktaG92ZXIsXG4gICAgXCJhY3RpdmVcIjogYnV0dG9uLXRva2Vucy4kYnV0dG9uLXByaW1hcnktYWN0aXZlLFxuICAgIFwiZm9jdXNcIjogdGhlbWUuJGZvY3VzLWludmVyc2UsXG4gICksXG4gIFwic2Vjb25kYXJ5XCI6IChcbiAgICBcImJhY2tncm91bmRcIjogYnV0dG9uLXRva2Vucy4kYnV0dG9uLXNlY29uZGFyeSxcbiAgICBcImNvbG9yXCI6IHRoZW1lLiR0ZXh0LW9uLWNvbG9yLFxuICAgIFwiaG92ZXJcIjogYnV0dG9uLXRva2Vucy4kYnV0dG9uLXNlY29uZGFyeS1ob3ZlcixcbiAgICBcImFjdGl2ZVwiOiBidXR0b24tdG9rZW5zLiRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZSxcbiAgICBcImZvY3VzXCI6IHRoZW1lLiRmb2N1cyxcbiAgKSxcbiAgXCJnaG9zdFwiOiAoXG4gICAgXCJiYWNrZ3JvdW5kXCI6IHRyYW5zcGFyZW50LFxuICAgIFwiY29sb3JcIjogdGhlbWUuJHRleHQtcHJpbWFyeSxcbiAgICBcImhvdmVyXCI6IHRoZW1lLiRiYWNrZ3JvdW5kLWhvdmVyLFxuICAgIFwiYWN0aXZlXCI6IHRoZW1lLiRiYWNrZ3JvdW5kLWFjdGl2ZSxcbiAgICBcImZvY3VzXCI6IHRoZW1lLiRmb2N1cyxcbiAgKSxcbik7XG5cbi8qKlxuICogVW5pZmllZCBCdXR0b24gTWl4aW5cbiAqIFByb3ZpZGVzIGNvbXByZWhlbnNpdmUgYnV0dG9uIHN0eWxpbmcgd2l0aCBhbGwgY3VzdG9taXphdGlvbiBvcHRpb25zXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9ICRzaXplIC0gU2l6ZSBsZXZlbDogXCJ4c1wiLCBcInNtXCIsIFwibWRcIiwgXCJsZ1wiLCBcInhsXCIsIFwiMnhsXCIsIG9yIG51bGwgdG8gc2tpcCBzaXppbmcgKGRlZmF1bHQ6IFwibGdcIilcbiAqIEBwYXJhbSB7c3RyaW5nfSAka2luZCAtIEJ1dHRvbiBraW5kOiBcImdob3N0XCIsIFwicHJpbWFyeVwiLCBcInNlY29uZGFyeVwiIChkZWZhdWx0OiBcImdob3N0XCIpXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICRmb2N1cyAtIFdoZXRoZXIgdG8gaW5jbHVkZSBmb2N1cyBzdHlsZXMgKGRlZmF1bHQ6IHRydWUpXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICRzdGF0ZXMgLSBXaGV0aGVyIHRvIGluY2x1ZGUgaG92ZXIvYWN0aXZlIHN0YXRlcyAoZGVmYXVsdDogdHJ1ZSlcbiAqXG4gKiBAZXhhbXBsZSBCYXNpYyBidXR0b24gd2l0aCBkZWZhdWx0IHNldHRpbmdzXG4gKiAgIEBpbmNsdWRlIGJ1dHRvbigpO1xuICpcbiAqIEBleGFtcGxlIEJ1dHRvbiB3aXRob3V0IGZvY3VzIHN0eWxlc1xuICogICBAaW5jbHVkZSBidXR0b24oXCJsZ1wiLCBcImdob3N0XCIsIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZSBQcmltYXJ5IGJ1dHRvbiB3aXRoIG1lZGl1bSBzaXplXG4gKiAgIEBpbmNsdWRlIGJ1dHRvbihcIm1kXCIsIFwicHJpbWFyeVwiKTtcbiAqXG4gKiBAZXhhbXBsZSBCdXR0b24gd2l0aCBvbmx5IHJlc2V0IHN0eWxlcyAobm8gc3RhdGVzKVxuICogICBAaW5jbHVkZSBidXR0b24obnVsbCwgXCJnaG9zdFwiLCB0cnVlLCBmYWxzZSk7XG4gKi9cbkBtaXhpbiBidXR0b24oJHNpemU6IFwibGdcIiwgJGtpbmQ6IFwiZ2hvc3RcIiwgJGZvY3VzOiB0cnVlLCAkc3RhdGVzOiB0cnVlKSB7XG4gIC8vIEJhc2UgcmVzZXQgc3R5bGVzXG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgLy8gQXBwbHkga2luZC1zcGVjaWZpYyBiYXNlIHN0eWxlc1xuICAka2luZC1jb25maWc6IG1hcC5nZXQoJGJ1dHRvbi1raW5kcywgJGtpbmQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAuZ2V0KCRraW5kLWNvbmZpZywgXCJiYWNrZ3JvdW5kXCIpO1xuICBjb2xvcjogbWFwLmdldCgka2luZC1jb25maWcsIFwiY29sb3JcIikgIWltcG9ydGFudDtcblxuICAvLyBBcHBseSBzaXppbmcgaWYgc3BlY2lmaWVkXG4gIEBpZiAkc2l6ZSBhbmQgbWFwLmhhcy1rZXkoJGJ1dHRvbi1zaXplcywgJHNpemUpIHtcbiAgICAkc2l6ZS12YWx1ZTogbWFwLmdldCgkYnV0dG9uLXNpemVzLCAkc2l6ZSk7XG4gICAgbWluLWJsb2NrLXNpemU6ICRzaXplLXZhbHVlO1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogJHNpemUtdmFsdWU7XG4gIH1cblxuICAvLyBBcHBseSBpbnRlcmFjdGl2ZSBzdGF0ZXMgaWYgc3BlY2lmaWVkXG4gIEBpZiAkc3RhdGVzIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC5nZXQoJGtpbmQtY29uZmlnLCBcImhvdmVyXCIpICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLmdldCgka2luZC1jb25maWcsIFwiYWN0aXZlXCIpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gQXBwbHkgZm9jdXMgc3R5bGVzIGlmIHNwZWNpZmllZFxuICBAaWYgJGZvY3VzIHtcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCBtYXAuZ2V0KCRraW5kLWNvbmZpZywgXCJmb2N1c1wiKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIElucHV0IEZpZWxkIFN0eWxpbmdcbiAqIFByb3ZpZGVzIGNvbnNpc3RlbnQgc3R5bGluZyBmb3IgaW5wdXQgZWxlbWVudHMgKHRleHQsIHRleHRhcmVhLCBzZWxlY3QpXG4gKiBAcGFyYW0ge3N0cmluZ30gJGxheWVyIC0gTGF5ZXIgbGV2ZWwgZm9yIHRoZSBpbnB1dCBiYWNrZ3JvdW5kXG4gKi9cbkBtaXhpbiBpbnB1dC1maWVsZCgkbGF5ZXI6IFwibGF5ZXItMDFcIikge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIEBpZiAkbGF5ZXIgPT0gXCJsYXllci0wMlwiIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kbGF5ZXItMDI7XG4gIH0gQGVsc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsYXllci0wMTtcbiAgfVxuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuICB9XG5cbiAgLy8gQXBwbHkgaW50ZXJhY3RpdmUgc3RhdGVzIHVzaW5nIHVuaWZpZWQgYnV0dG9uIG1peGluXG4gIEBpbmNsdWRlIGJ1dHRvbihudWxsLCBcImdob3N0XCIsIGZhbHNlLCB0cnVlKTtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggdGhlbWUuJGZvY3VzO1xuICB9XG59XG5cbi8qKlxuICogQm9yZGVyIEJvdHRvbSBJbnB1dFxuICogQWRkcyBib3R0b20gYm9yZGVyIGZvciB0ZXh0IGlucHV0cyBmb2xsb3dpbmcgQ2FyYm9uIGRlc2lnbiBwYXR0ZXJuXG4gKi9cbkBtaXhpbiBpbnB1dC1ib3JkZXItYm90dG9tIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgdGhlbWUuJGJvcmRlci1zdHJvbmctMDE7XG59XG5cbi8qKlxuICogRm9jdXMgU3RhdGVcbiAqIEFwcGxpZXMgY29uc2lzdGVudCBmb2N1cyBzdHlsaW5nIGFjcm9zcyBjb21wb25lbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gJHR5cGUgLSBUeXBlIG9mIGZvY3VzIChpbnNldCwgb3V0bGluZSlcbiAqL1xuQG1peGluIGZvY3VzLXN0YXRlKCR0eXBlOiBcImluc2V0XCIpIHtcbiAgQGlmICR0eXBlID09IFwib3V0bGluZVwiIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgdGhlbWUuJGZvY3VzO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICB9IEBlbHNlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggdGhlbWUuJGZvY3VzICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUYWIgQnV0dG9uIFN0eWxpbmdcbiAqIENvbnNpc3RlbnQgc3R5bGluZyBmb3IgdGFiIGJ1dHRvbnMgd2l0aCBhY3RpdmUgc3RhdGUgaW5kaWNhdG9yXG4gKi9cbkBtaXhpbiB0YWItYnV0dG9uIHtcbiAgQGluY2x1ZGUgYnV0dG9uKFwibGdcIiwgXCJnaG9zdFwiLCBmYWxzZSk7XG4gIGZvbnQtd2VpZ2h0OiB1bnNldDtcblxuICAmOmZvY3VzIHtcbiAgICBAaW5jbHVkZSBmb2N1cy1zdGF0ZShcIm91dGxpbmVcIik7XG4gICAgYm9yZGVyLXdpZHRoOiAycHggMDtcbiAgICBib3JkZXItY29sb3I6IHVuc2V0O1xuICB9XG59XG5cbi8qKlxuICogQWN0aXZlIFRhYiBJbmRpY2F0b3JcbiAqIEFwcGxpZXMgYm90dG9tIGJvcmRlciB0byBpbmRpY2F0ZSBhY3RpdmUgdGFiIHN0YXRlXG4gKi9cbkBtaXhpbiB0YWItYWN0aXZlIHtcbiAgYm9yZGVyLXdpZHRoOiAycHggMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0aGVtZS4kYm9yZGVyLWludGVyYWN0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyoqXG4gKiBCYWRnZS9UYWcgU3R5bGluZ1xuICogRm9yIGNvdW50IGluZGljYXRvcnMgYW5kIHRhZ3NcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gJGFjdGl2ZSAtIFdoZXRoZXIgdGhlIGJhZGdlIGlzIG9uIGFuIGFjdGl2ZSBlbGVtZW50XG4gKi9cbkBtaXhpbiBiYWRnZSgkYWN0aXZlOiBmYWxzZSkge1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIEBpZiAkYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kYm9yZGVyLWludGVyYWN0aXZlO1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1vbi1jb2xvcjtcbiAgfSBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGJvcmRlci1zdWJ0bGU7XG4gICAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeTtcbiAgfVxufVxuXG5AbWl4aW4gbGlzdCB7XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IFwi4oCUXCI7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGxpIHtcbiAgICBtYXgtaW5saW5lLXNpemU6IGRlZmF1bHRzLiRtYXgtaW5saW5lLXNpemU7XG4gICAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeTtcbiAgfVxuXG4gIHVsIGxpIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBzcGFjaW5nLiRzcGFjaW5nLTA1O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBzcGFjaW5nLiRzcGFjaW5nLTA1O1xuICB9XG5cbiAgdWwgbGkgcCxcbiAgb2wgbGkgcCB7XG4gICAgbWFyZ2luLWJsb2NrOiAwO1xuICB9XG5cbiAgb2wge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHNwYWNpbmcuJHNwYWNpbmctMDU7XG4gIH1cblxuICBvbCBsaSB7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogc3BhY2luZy4kc3BhY2luZy0wNTtcbiAgfVxuXG4gIG9sIG9sIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLWFscGhhO1xuICB9XG5cbiAgb2wgb2wgb2wge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItcm9tYW47XG4gIH1cbn1cblxuQG1peGluIGhlYWRpbmcge1xuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDYge1xuICAgICRzcGFjaW5nczogKFxuICAgICAgc3BhY2luZy4kc3BhY2luZy0wNyxcbiAgICAgIHNwYWNpbmcuJHNwYWNpbmctMDYsXG4gICAgICBzcGFjaW5nLiRzcGFjaW5nLTA1LFxuICAgICAgc3BhY2luZy4kc3BhY2luZy0wNCxcbiAgICAgIHNwYWNpbmcuJHNwYWNpbmctMDMsXG4gICAgICBzcGFjaW5nLiRzcGFjaW5nLTAyXG4gICAgKTtcblxuICAgIGgjeyRpfSB7XG4gICAgICBAaW5jbHVkZSB0eXBlLnR5cGUtc3R5bGUoXCJoZWFkaW5nLTAjezcgLSAkaX1cIik7XG4gICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IGxpc3QubnRoKCRzcGFjaW5ncywgJGkpO1xuICAgICAgbWFyZ2luLWJsb2NrLWVuZDogc3BhY2luZy4kc3BhY2luZy0wMztcbiAgICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1wcmltYXJ5O1xuICAgIH1cbiAgfVxuICBoMiB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxufVxuXG5AbWl4aW4gcGFyYWdyYXBoIHtcbiAgcCB7XG4gICAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeTtcbiAgfVxufVxuXG5AbWl4aW4gaG9yaXpvbnRhbC1ydWxlIHtcbiAgaHIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0aGVtZS4kYm9yZGVyLXN1YnRsZTtcbiAgICBtYXJnaW46IHNwYWNpbmcuJHNwYWNpbmctMDMgMDtcbiAgfVxufVxuXG4vKipcbiAqIEFyZ1RhYmxlIEJhc2VcbiAqIEJhc2Ugc3R5bGluZyBmb3IgY29udHJvbHMvcHJvcHMgdGFibGVzXG4gKiBVc2VkIGluIGJvdGggZG9jcy5zY3NzIGFuZCBwYW5lbC5zY3NzXG4gKi9cbkBtaXhpbiBhcmdzdGFibGUtYmFzZSB7XG4gICoge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICA+IHRoZWFkLmRvY2Jsb2NrLWFyZ3N0YWJsZS1oZWFkID4gdHIgPiB0aCA+IHNwYW4ge1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1wcmltYXJ5O1xuICB9XG59XG5cbi8qKlxuICogQXJnVGFibGUgQm9keSBSb3dcbiAqIFN0YW5kYXJkIGNvbnRyb2wgcm93cyBpbiBhcmdzdGFibGVcbiAqL1xuQG1peGluIGFyZ3N0YWJsZS1yb3cge1xuICBiYWNrZ3JvdW5kOiB0aGVtZS4kYmFja2dyb3VuZDtcbiAgYm9yZGVyLWNvbG9yOiB0aGVtZS4kYm9yZGVyLXN1YnRsZTtcbiAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeTtcbn1cblxuLyoqXG4gKiBBcmdUYWJsZSBUeXBlIEJhZGdlXG4gKiBUeXBlIGluZm9ybWF0aW9uIGJhZGdlcyAoc3RyaW5nLCBudW1iZXIsIGV0Yy4pXG4gKi9cbkBtaXhpbiBhcmdzdGFibGUtdHlwZS1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG5cbiAgLmNzcy1ta2pqcHMsXG4gIC5jc3MtbzFkN2tvLFxuICAuY3NzLTNxbWgyYixcbiAgLmNzcy02cTdzbmkge1xuICAgIC8vIHRvZG8gY2hlY2sgZm9yIGFsdGVybmF0aXZlc1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsYXllcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0aGVtZS4kYm9yZGVyLXN1YnRsZTtcbiAgfVxufVxuXG4vKipcbiAqIEFyZ1RhYmxlIFJlcXVpcmVkIEluZGljYXRvclxuICogU2hvd3Mgd2hpY2ggcHJvcHMgYXJlIHJlcXVpcmVkXG4gKi9cbkBtaXhpbiBhcmdzdGFibGUtcmVxdWlyZWQge1xuICBjb2xvcjogdGhlbWUuJHN1cHBvcnQtZXJyb3I7XG59XG5cbi8qKlxuICogQXJnVGFibGUgSXRlbSBSb3dcbiAqIEV4cGFuZGFibGUgcm93cyBmb3IgYXJyYXlzL29iamVjdHNcbiAqL1xuQG1peGluIGFyZ3N0YWJsZS1pdGVtLXJvdyB7XG4gIGJhY2tncm91bmQ6IHRoZW1lLiRsYXllci0wMSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAxcHggdGhlbWUuJGJvcmRlci1zdWJ0bGU7XG5cbiAgJjpoYXMoYnV0dG9uOmZvY3VzKSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHRoZW1lLiRmb2N1cyAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLiRsYXllci0wMSAhaW1wb3J0YW50O1xuICB9XG5cbiAgPiB0ZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHRoZW1lLiR0ZXh0LXByaW1hcnk7XG5cbiAgICA+IHNwYW4gPiBzdmcge1xuICAgICAgY29sb3I6IHRoZW1lLiRpY29uLXByaW1hcnk7XG4gICAgfVxuXG4gICAgPiBidXR0b246Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBMaW5rIFN0eWxpbmdcbiAqIFByb3ZpZGVzIGNvbnNpc3RlbnQgYW5jaG9yIHRhZyBzdHlsaW5nIHdpdGggQ2FyYm9uIHRoZW1lIHRva2Vuc1xuICogSW5jbHVkZXMgaG92ZXIsIGFjdGl2ZSwgdmlzaXRlZCwgYW5kIGZvY3VzIHN0YXRlc1xuICovXG5AbWl4aW4gbGluayB7XG4gIGEge1xuICAgIGNvbG9yOiB0aGVtZS4kbGluay1wcmltYXJ5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHRoZW1lLiRsaW5rLXByaW1hcnktaG92ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBjb2xvcjogdGhlbWUuJGxpbmstcHJpbWFyeTtcbiAgICB9XG5cbiAgICAmOnZpc2l0ZWQge1xuICAgICAgY29sb3I6IHRoZW1lLiRsaW5rLXZpc2l0ZWQ7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAycHggc29saWQgdGhlbWUuJGZvY3VzO1xuICAgICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGNvZGUge1xuICBjb2RlIHtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtcHJpbWFyeTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kbGF5ZXItMDE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdGhlbWUuJGJvcmRlci1zdWJ0bGU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufVxuIiwiQHVzZSBcIkBjYXJib24vbGF5b3V0XCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZVwiO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvY29tcG9uZW50cy9idXR0b24vdG9rZW5zXCIgYXMgYnV0dG9uLXRva2VucztcbkB1c2UgXCJtaXhpbnNcIjtcblxuLyoqXG4gKiBUT09MQkFSIFNUWUxFU1xuICogU3R5bGVzIGZvciB0aGUgU3Rvcnlib29rIHRvb2xiYXIgY29tcG9uZW50ICguc2ItYmFyKVxuICogSW5jbHVkZXMgYnV0dG9ucywgdGFicywgYW5kIHZpZXdwb3J0IGNvbnRyb2xzXG4gKi9cblxuLnNiLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsYXllci0wMSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdGhlbWUuJGJvcmRlci1zdWJ0bGUtMDE7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcblxuICAvKipcbiAgICogQ29udGFpbmVyIEFkanVzdG1lbnRzXG4gICAqIFJlbW92ZXMgZGVmYXVsdCBtYXJnaW5zIGFuZCB3aWR0aCBjb25zdHJhaW50c1xuICAgKi9cbiAgZGl2IHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogdW5zZXQ7XG5cbiAgICAvKipcbiAgICAgKiBWaWV3cG9ydCBXaWR0aC9IZWlnaHQgTGFiZWxzXG4gICAgICogVGV4dCBjb2xvciBmb3IgcmVzcG9uc2l2ZSB2aWV3cG9ydCBjb250cm9sc1xuICAgICAqL1xuICAgIFt0aXRsZT1cIlZpZXdwb3J0IHdpZHRoXCJdLFxuICAgIFt0aXRsZT1cIlZpZXdwb3J0IGhlaWdodFwiXSB7XG4gICAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdXR0b24gJiBMaW5rIENvbnRhaW5lcnNcbiAgICogR3JvdXBzIG9mIGludGVyYWN0aXZlIHRvb2xiYXIgZWxlbWVudHNcbiAgICovXG4gIDpoYXMoPiBidXR0b24pLFxuICA6aGFzKD4gYSkge1xuICAgIGdhcDogMDtcblxuICAgIC8qKlxuICAgICAqIEJ1dHRvbiBTZXBhcmF0b3JzXG4gICAgICogVmlzdWFsIGRpdmlkZXJzIGJldHdlZW4gdG9vbGJhciBidXR0b25zXG4gICAgICovXG4gICAgYnV0dG9uICsgc3Bhbjpub3QoLmFkZG9uLWNvbGxhcHNpYmxlLWljb24pOmhhcygrIGJ1dHRvbikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGJvcmRlci1zdWJ0bGUtMDE7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBibG9jay1zaXplOiAxMDAlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YW5kYXJkIFRvb2xiYXIgQnV0dG9ucyAmIExpbmtzXG4gICAgICogRXhjbHVkZXMgdGFiIGJ1dHRvbnMgd2hpY2ggaGF2ZSBzZXBhcmF0ZSBzdHlsaW5nXG4gICAgICovXG4gICAgYnV0dG9uOm5vdChbcm9sZT1cInRhYlwiXSksXG4gICAgYSB7XG4gICAgICBAaW5jbHVkZSBtaXhpbnMuYnV0dG9uKFwibGdcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdGVkL0FjdGl2ZSBOb24tVGFiIEJ1dHRvblxuICAgKiBJbmRpY2F0ZXMgYWN0aXZlIHN0YXRlIGZvciB0b2dnbGUgYnV0dG9uc1xuICAgKiBVc2luZyBkYXRhIGF0dHJpYnV0ZSBmb3IgYmV0dGVyIHNlbWFudGljIG1lYW5pbmdcbiAgICovXG4gIGJ1dHRvbltkYXRhLXNlbGVjdGVkPVwidHJ1ZVwiXTpub3QoW3JvbGU9XCJ0YWJcIl0pLFxuICBidXR0b25bYXJpYS1wcmVzc2VkPVwidHJ1ZVwiXTpub3QoW3JvbGU9XCJ0YWJcIl0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kYmFja2dyb3VuZC1zZWxlY3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmUgVGFiIEluZGljYXRvciAoZmFsbGJhY2sgZm9yIENTUyBjbGFzcylcbiAgICogVXNpbmcgYXR0cmlidXRlIHNlbGVjdG9yIGZvciBtYWludGFpbmFiaWxpdHlcbiAgICovXG4gIFtjbGFzcyo9XCJjc3MtXCJdW2NsYXNzKj1cImFjdGl2ZVwiXSB7XG4gICAgQGluY2x1ZGUgbWl4aW5zLnRhYi1hY3RpdmU7XG4gIH1cblxuICAvKipcbiAgICogVGFiIEJ1dHRvbnNcbiAgICogTmF2aWdhdGlvbiB0YWJzIGluIHRoZSB0b29sYmFyIChlLmcuLCBBZGRvbnMsIENvbnRyb2xzKVxuICAgKi9cbiAgYnV0dG9uW3JvbGU9XCJ0YWJcIl0ge1xuICAgIEBpbmNsdWRlIG1peGlucy50YWItYnV0dG9uO1xuXG4gICAgLyoqXG4gICAgICogQmFkZ2UvQ291bnRlciBvbiBUYWJzXG4gICAgICogU2hvd3Mgbm90aWZpY2F0aW9uIGNvdW50IG9yIHN0YXR1c1xuICAgICAqL1xuICAgID4gZGl2ID4gZGl2IHtcbiAgICAgIEBpbmNsdWRlIG1peGlucy5iYWRnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb2xsYXBzaWJsZSBUYWIgSW5kaWNhdG9yXG4gICAgICogRHJvcGRvd24gYXJyb3cgZm9yIGV4cGFuZGFibGUgdGFic1xuICAgICAqL1xuICAgIC5hZGRvbi1jb2xsYXBzaWJsZS1pY29uIHtcbiAgICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1wcmltYXJ5O1xuICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY3RpdmUgVGFiIFN0YXRlXG4gICAqIFZpc3VhbCBpbmRpY2F0b3IgZm9yIGN1cnJlbnRseSBzZWxlY3RlZCB0YWJcbiAgICovXG4gIGJ1dHRvbi50YWJidXR0b24tYWN0aXZlIHtcbiAgICBAaW5jbHVkZSBtaXhpbnMudGFiLWFjdGl2ZTtcblxuICAgIC8qKlxuICAgICAqIEFjdGl2ZSBUYWIgQmFkZ2VcbiAgICAgKiBCYWRnZSBzdHlsaW5nIGZvciBhY3RpdmUgdGFiIHN0YXRlXG4gICAgICovXG4gICAgPiBkaXYgPiBkaXYge1xuICAgICAgQGluY2x1ZGUgbWl4aW5zLmJhZGdlKHRydWUpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29kZSBnZW5lcmF0ZWQgYnkgQGNhcmJvbi90aGVtZXMuIERPIE5PVCBFRElULlxuLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvbmZpZyc7XG5AdXNlICcuLi90aGVtZSc7XG5cbi8vLyBJbnRlcm5hbCBoZWxwZXIgZm9yIGdlbmVyYXRpbmcgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG5AZnVuY3Rpb24gX2dldCgkdG9rZW4pIHtcbiAgQGlmIGNvbmZpZy4kdXNlLWZhbGxiYWNrLXZhbHVlID09IGZhbHNlIHtcbiAgICBAcmV0dXJuIHZhcigtLSN7Y29uZmlnLiRwcmVmaXh9LSN7JHRva2VufSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skdG9rZW59LCAje3RoZW1lLmdldCgkdG9rZW4pfSk7XG4gIH1cbn1cblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmRgIHRva2VuXG4kYmFja2dyb3VuZDogX2dldCgnYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1hY3RpdmVgIHRva2VuXG4kYmFja2dyb3VuZC1hY3RpdmU6IF9nZXQoJ2JhY2tncm91bmQtYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLXNlbGVjdGVkYCB0b2tlblxuJGJhY2tncm91bmQtc2VsZWN0ZWQ6IF9nZXQoJ2JhY2tncm91bmQtc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtc2VsZWN0ZWQtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWJyYW5kYCB0b2tlblxuJGJhY2tncm91bmQtYnJhbmQ6IF9nZXQoJ2JhY2tncm91bmQtYnJhbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtaW52ZXJzZWAgdG9rZW5cbiRiYWNrZ3JvdW5kLWludmVyc2U6IF9nZXQoJ2JhY2tncm91bmQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtaW52ZXJzZS1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wMWAgdG9rZW5cbiRsYXllci0wMTogX2dldCgnbGF5ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wMWAgdG9rZW5cbiRsYXllci1hY3RpdmUtMDE6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wMWAgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAxOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1ob3Zlci0wMTogX2dldCgnbGF5ZXItaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAxYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAxOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDFgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDE6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wMmAgdG9rZW5cbiRsYXllci0wMjogX2dldCgnbGF5ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wMmAgdG9rZW5cbiRsYXllci1hY3RpdmUtMDI6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wMmAgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAyOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1ob3Zlci0wMjogX2dldCgnbGF5ZXItaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAyYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAyOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDJgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDI6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wM2AgdG9rZW5cbiRsYXllci0wMzogX2dldCgnbGF5ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wM2AgdG9rZW5cbiRsYXllci1hY3RpdmUtMDM6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wM2AgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAzOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1ob3Zlci0wMzogX2dldCgnbGF5ZXItaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAzYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAzOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDNgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDM6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1pbnZlcnNlYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWludmVyc2U6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWRpc2FibGVkYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWRpc2FibGVkOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMTogX2dldCgnbGF5ZXItYWNjZW50LTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDE6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDE6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMjogX2dldCgnbGF5ZXItYWNjZW50LTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDI6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDI6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMzogX2dldCgnbGF5ZXItYWNjZW50LTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDM6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDM6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDFgIHRva2VuXG4kZmllbGQtMDE6IF9nZXQoJ2ZpZWxkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wMWAgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMTogX2dldCgnZmllbGQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAyYCB0b2tlblxuJGZpZWxkLTAyOiBfZ2V0KCdmaWVsZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDJgIHRva2VuXG4kZmllbGQtaG92ZXItMDI6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wM2AgdG9rZW5cbiRmaWVsZC0wMzogX2dldCgnZmllbGQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAzYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAzOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaW50ZXJhY3RpdmVgIHRva2VuXG4kaW50ZXJhY3RpdmU6IF9nZXQoJ2ludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAwYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDA6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDAnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDFgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMTogX2dldCgnYm9yZGVyLXN1YnRsZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMWAgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAyYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDI6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDJgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMjogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wM2AgdG9rZW5cbiRib3JkZXItc3VidGxlLTAzOiBfZ2V0KCdib3JkZXItc3VidGxlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAzYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDM6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDFgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMTogX2dldCgnYm9yZGVyLXN0cm9uZy0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wMmAgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAyOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAzYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDM6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAxYCB0b2tlblxuJGJvcmRlci10aWxlLTAxOiBfZ2V0KCdib3JkZXItdGlsZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDJgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDI6IF9nZXQoJ2JvcmRlci10aWxlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wM2AgdG9rZW5cbiRib3JkZXItdGlsZS0wMzogX2dldCgnYm9yZGVyLXRpbGUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1pbnZlcnNlYCB0b2tlblxuJGJvcmRlci1pbnZlcnNlOiBfZ2V0KCdib3JkZXItaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWludGVyYWN0aXZlYCB0b2tlblxuJGJvcmRlci1pbnRlcmFjdGl2ZTogX2dldCgnYm9yZGVyLWludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItZGlzYWJsZWRgIHRva2VuXG4kYm9yZGVyLWRpc2FibGVkOiBfZ2V0KCdib3JkZXItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtcHJpbWFyeWAgdG9rZW5cbiR0ZXh0LXByaW1hcnk6IF9nZXQoJ3RleHQtcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1zZWNvbmRhcnlgIHRva2VuXG4kdGV4dC1zZWNvbmRhcnk6IF9nZXQoJ3RleHQtc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXBsYWNlaG9sZGVyYCB0b2tlblxuJHRleHQtcGxhY2Vob2xkZXI6IF9nZXQoJ3RleHQtcGxhY2Vob2xkZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtaGVscGVyYCB0b2tlblxuJHRleHQtaGVscGVyOiBfZ2V0KCd0ZXh0LWhlbHBlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1lcnJvcmAgdG9rZW5cbiR0ZXh0LWVycm9yOiBfZ2V0KCd0ZXh0LWVycm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWludmVyc2VgIHRva2VuXG4kdGV4dC1pbnZlcnNlOiBfZ2V0KCd0ZXh0LWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtb24tY29sb3JgIHRva2VuXG4kdGV4dC1vbi1jb2xvcjogX2dldCgndGV4dC1vbi1jb2xvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1vbi1jb2xvci1kaXNhYmxlZGAgdG9rZW5cbiR0ZXh0LW9uLWNvbG9yLWRpc2FibGVkOiBfZ2V0KCd0ZXh0LW9uLWNvbG9yLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWRpc2FibGVkYCB0b2tlblxuJHRleHQtZGlzYWJsZWQ6IF9nZXQoJ3RleHQtZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstcHJpbWFyeWAgdG9rZW5cbiRsaW5rLXByaW1hcnk6IF9nZXQoJ2xpbmstcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1wcmltYXJ5LWhvdmVyYCB0b2tlblxuJGxpbmstcHJpbWFyeS1ob3ZlcjogX2dldCgnbGluay1wcmltYXJ5LWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXNlY29uZGFyeWAgdG9rZW5cbiRsaW5rLXNlY29uZGFyeTogX2dldCgnbGluay1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS12aXNpdGVkYCB0b2tlblxuJGxpbmstaW52ZXJzZS12aXNpdGVkOiBfZ2V0KCdsaW5rLWludmVyc2UtdmlzaXRlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay12aXNpdGVkYCB0b2tlblxuJGxpbmstdmlzaXRlZDogX2dldCgnbGluay12aXNpdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2VgIHRva2VuXG4kbGluay1pbnZlcnNlOiBfZ2V0KCdsaW5rLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS1hY3RpdmVgIHRva2VuXG4kbGluay1pbnZlcnNlLWFjdGl2ZTogX2dldCgnbGluay1pbnZlcnNlLWFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLWhvdmVyYCB0b2tlblxuJGxpbmstaW52ZXJzZS1ob3ZlcjogX2dldCgnbGluay1pbnZlcnNlLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLXByaW1hcnlgIHRva2VuXG4kaWNvbi1wcmltYXJ5OiBfZ2V0KCdpY29uLXByaW1hcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tc2Vjb25kYXJ5YCB0b2tlblxuJGljb24tc2Vjb25kYXJ5OiBfZ2V0KCdpY29uLXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1pbnZlcnNlYCB0b2tlblxuJGljb24taW52ZXJzZTogX2dldCgnaWNvbi1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLW9uLWNvbG9yYCB0b2tlblxuJGljb24tb24tY29sb3I6IF9nZXQoJ2ljb24tb24tY29sb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tb24tY29sb3ItZGlzYWJsZWRgIHRva2VuXG4kaWNvbi1vbi1jb2xvci1kaXNhYmxlZDogX2dldCgnaWNvbi1vbi1jb2xvci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1kaXNhYmxlZGAgdG9rZW5cbiRpY29uLWRpc2FibGVkOiBfZ2V0KCdpY29uLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWludGVyYWN0aXZlYCB0b2tlblxuJGljb24taW50ZXJhY3RpdmU6IF9nZXQoJ2ljb24taW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtZXJyb3JgIHRva2VuXG4kc3VwcG9ydC1lcnJvcjogX2dldCgnc3VwcG9ydC1lcnJvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1zdWNjZXNzYCB0b2tlblxuJHN1cHBvcnQtc3VjY2VzczogX2dldCgnc3VwcG9ydC1zdWNjZXNzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXdhcm5pbmdgIHRva2VuXG4kc3VwcG9ydC13YXJuaW5nOiBfZ2V0KCdzdXBwb3J0LXdhcm5pbmcnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtaW5mb2AgdG9rZW5cbiRzdXBwb3J0LWluZm86IF9nZXQoJ3N1cHBvcnQtaW5mbycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1lcnJvci1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtZXJyb3ItaW52ZXJzZTogX2dldCgnc3VwcG9ydC1lcnJvci1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZTogX2dldCgnc3VwcG9ydC1zdWNjZXNzLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtd2FybmluZy1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtd2FybmluZy1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LXdhcm5pbmctaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1pbmZvLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1pbmZvLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtaW5mby1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tbWFqb3JgIHRva2VuXG4kc3VwcG9ydC1jYXV0aW9uLW1ham9yOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tbWFqb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi1taW5vcmAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tbWlub3I6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi1taW5vcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLXVuZGVmaW5lZGAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWJhY2tncm91bmRgIHRva2VuXG4kYWktcG9wb3Zlci1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1wb3BvdmVyLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxYCB0b2tlblxuJGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxOiBfZ2V0KCdhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDJgIHRva2VuXG4kYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDI6IF9nZXQoJ2FpLXBvcG92ZXItc2hhZG93LW91dGVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1pbm5lci1zaGFkb3dgIHRva2VuXG4kYWktaW5uZXItc2hhZG93OiBfZ2V0KCdhaS1pbm5lci1zaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtc3RhcnQtc21gIHRva2VuXG4kYWktYXVyYS1zdGFydC1zbTogX2dldCgnYWktYXVyYS1zdGFydC1zbScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1zdGFydGAgdG9rZW5cbiRhaS1hdXJhLXN0YXJ0OiBfZ2V0KCdhaS1hdXJhLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWVuZGAgdG9rZW5cbiRhaS1hdXJhLWVuZDogX2dldCgnYWktYXVyYS1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLWJhY2tncm91bmQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1zdGFydGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLXN0YXJ0OiBfZ2V0KCdhaS1hdXJhLWhvdmVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLWVuZGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLWVuZDogX2dldCgnYWktYXVyYS1ob3Zlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1zdHJvbmdgIHRva2VuXG4kYWktYm9yZGVyLXN0cm9uZzogX2dldCgnYWktYm9yZGVyLXN0cm9uZycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLXN0YXJ0YCB0b2tlblxuJGFpLWJvcmRlci1zdGFydDogX2dldCgnYWktYm9yZGVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItZW5kYCB0b2tlblxuJGFpLWJvcmRlci1lbmQ6IF9nZXQoJ2FpLWJvcmRlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWRyb3Atc2hhZG93YCB0b2tlblxuJGFpLWRyb3Atc2hhZG93OiBfZ2V0KCdhaS1kcm9wLXNoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktc2tlbGV0b24tYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1za2VsZXRvbi1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1za2VsZXRvbi1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmRgIHRva2VuXG4kYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kOiBfZ2V0KFxuICAnYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLW92ZXJsYXlgIHRva2VuXG4kYWktb3ZlcmxheTogX2dldCgnYWktb3ZlcmxheScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1jZW50ZXJgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1jZW50ZXI6IF9nZXQoJ2FpLXBvcG92ZXItY2FyZXQtY2VudGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbWAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbTogX2dldCgnYWktcG9wb3Zlci1jYXJldC1ib3R0b20nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmRgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZDogX2dldChcbiAgJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9uczogX2dldChcbiAgJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9ucydcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1iYWNrZ3JvdW5kYCB0b2tlblxuJGNoYXQtcHJvbXB0LWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJvcmRlci1zdGFydGAgdG9rZW5cbiRjaGF0LXByb21wdC1ib3JkZXItc3RhcnQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJvcmRlci1zdGFydCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYm9yZGVyLWVuZGAgdG9rZW5cbiRjaGF0LXByb21wdC1ib3JkZXItZW5kOiBfZ2V0KCdjaGF0LXByb21wdC1ib3JkZXItZW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS11c2VyYCB0b2tlblxuJGNoYXQtYnViYmxlLXVzZXI6IF9nZXQoJ2NoYXQtYnViYmxlLXVzZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLWFnZW50YCB0b2tlblxuJGNoYXQtYnViYmxlLWFnZW50OiBfZ2V0KCdjaGF0LWJ1YmJsZS1hZ2VudCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtYm9yZGVyYCB0b2tlblxuJGNoYXQtYnViYmxlLWJvcmRlcjogX2dldCgnY2hhdC1idWJibGUtYm9yZGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci1ib3RgIHRva2VuXG4kY2hhdC1hdmF0YXItYm90OiBfZ2V0KCdjaGF0LWF2YXRhci1ib3QnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLWFnZW50YCB0b2tlblxuJGNoYXQtYXZhdGFyLWFnZW50OiBfZ2V0KCdjaGF0LWF2YXRhci1hZ2VudCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItdXNlcmAgdG9rZW5cbiRjaGF0LWF2YXRhci11c2VyOiBfZ2V0KCdjaGF0LWF2YXRhci11c2VyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXNoZWxsLWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1zaGVsbC1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LXNoZWxsLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtaGVhZGVyLWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1oZWFkZXItYmFja2dyb3VuZDogX2dldCgnY2hhdC1oZWFkZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b25gIHRva2VuXG4kY2hhdC1idXR0b246IF9nZXQoJ2NoYXQtYnV0dG9uJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1ob3ZlcmAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1ob3ZlcjogX2dldCgnY2hhdC1idXR0b24taG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXRleHQtaG92ZXJgIHRva2VuXG4kY2hhdC1idXR0b24tdGV4dC1ob3ZlcjogX2dldCgnY2hhdC1idXR0b24tdGV4dC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tYWN0aXZlYCB0b2tlblxuJGNoYXQtYnV0dG9uLWFjdGl2ZTogX2dldCgnY2hhdC1idXR0b24tYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1zZWxlY3RlZGAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1zZWxlY3RlZDogX2dldCgnY2hhdC1idXR0b24tc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXRleHQtc2VsZWN0ZWRgIHRva2VuXG4kY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZDogX2dldCgnY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaGlnaGxpZ2h0YCB0b2tlblxuJGhpZ2hsaWdodDogX2dldCgnaGlnaGxpZ2h0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBvdmVybGF5YCB0b2tlblxuJG92ZXJsYXk6IF9nZXQoJ292ZXJsYXknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRvZ2dsZS1vZmZgIHRva2VuXG4kdG9nZ2xlLW9mZjogX2dldCgndG9nZ2xlLW9mZicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2hhZG93YCB0b2tlblxuJHNoYWRvdzogX2dldCgnc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1c2AgdG9rZW5cbiRmb2N1czogX2dldCgnZm9jdXMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzLWluc2V0YCB0b2tlblxuJGZvY3VzLWluc2V0OiBfZ2V0KCdmb2N1cy1pbnNldCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXMtaW52ZXJzZWAgdG9rZW5cbiRmb2N1cy1pbnZlcnNlOiBfZ2V0KCdmb2N1cy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBza2VsZXRvbi1iYWNrZ3JvdW5kYCB0b2tlblxuJHNrZWxldG9uLWJhY2tncm91bmQ6IF9nZXQoJ3NrZWxldG9uLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNrZWxldG9uLWVsZW1lbnRgIHRva2VuXG4kc2tlbGV0b24tZWxlbWVudDogX2dldCgnc2tlbGV0b24tZWxlbWVudCcpICFkZWZhdWx0O1xuIiwiLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkB1c2UgJy4uL2NvbmZpZycgYXMgKjtcbkB1c2UgJ0BjYXJib24vdGhlbWVzL3Njc3MvY29uZmlnJyB3aXRoIChcbiAgJHByZWZpeDogJHByZWZpeFxuKTtcbkB1c2UgJy4uL2NvbXBhdC90aGVtZXMnIGFzIGNvbXBhdDtcbkB1c2UgJy4uL3RoZW1lcyc7XG5cbkBmb3J3YXJkICdAY2FyYm9uL3RoZW1lcy9zY3NzL3RoZW1lJyB3aXRoIChcbiAgJGZhbGxiYWNrOiB0aGVtZXMuJHdoaXRlICFkZWZhdWx0LFxuICAkdGhlbWU6IGNvbXBhdC4kd2hpdGUgIWRlZmF1bHRcbik7XG5AZm9yd2FyZCAnQGNhcmJvbi90aGVtZXMvc2Nzcy90b2tlbnMnO1xuXG5AdXNlICdAY2FyYm9uL3RoZW1lcy9zY3NzL3Rva2Vucyc7XG5AdXNlICdAY2FyYm9uL3RoZW1lcy9zY3NzL3RoZW1lJztcbkB1c2UgJy4uL3V0aWxpdGllcy9jdXN0b20tcHJvcGVydHknO1xuXG4vLyBMYXllciBzZXRzXG4kbGF5ZXI6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllcicpO1xuJGxheWVyLWFjdGl2ZTogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLWFjdGl2ZScpO1xuJGxheWVyLWJhY2tncm91bmQ6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1iYWNrZ3JvdW5kJyk7XG4kbGF5ZXItaG92ZXI6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1ob3ZlcicpO1xuJGxheWVyLXNlbGVjdGVkOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItc2VsZWN0ZWQnKTtcbiRsYXllci1zZWxlY3RlZC1ob3ZlcjogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLXNlbGVjdGVkLWhvdmVyJyk7XG4kbGF5ZXItYWNjZW50OiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItYWNjZW50Jyk7XG4kbGF5ZXItYWNjZW50LWhvdmVyOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItYWNjZW50LWhvdmVyJyk7XG4kbGF5ZXItYWNjZW50LWFjdGl2ZTogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLWFjY2VudC1hY3RpdmUnKTtcblxuJGZpZWxkOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignZmllbGQnKTtcbiRmaWVsZC1ob3ZlcjogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2ZpZWxkLWhvdmVyJyk7XG5cbiRib3JkZXItc3VidGxlOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignYm9yZGVyLXN1YnRsZScpO1xuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQ6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdib3JkZXItc3VidGxlLXNlbGVjdGVkJyk7XG4kYm9yZGVyLXN0cm9uZzogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2JvcmRlci1zdHJvbmcnKTtcbiRib3JkZXItdGlsZTogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2JvcmRlci10aWxlJyk7XG4iXX0= */`,document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(h))}),O={};B(O,{css:()=>W});var W,w=I(()=>{W=`/**
 * Unified Button Mixin
 * Provides comprehensive button styling with all customization options
 *
 * @param {string} $size - Size level: "xs", "sm", "md", "lg", "xl", "2xl", or null to skip sizing (default: "lg")
 * @param {string} $kind - Button kind: "ghost", "primary", "secondary" (default: "ghost")
 * @param {boolean} $focus - Whether to include focus styles (default: true)
 * @param {boolean} $states - Whether to include hover/active states (default: true)
 *
 * @example Basic button with default settings
 *   @include button();
 *
 * @example Button without focus styles
 *   @include button("lg", "ghost", false);
 *
 * @example Primary button with medium size
 *   @include button("md", "primary");
 *
 * @example Button with only reset styles (no states)
 *   @include button(null, "ghost", true, false);
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
 * ArgTable Base
 * Base styling for controls/props tables
 * Used in both docs.scss and panel.scss
 */
/**
 * ArgTable Body Row
 * Standard control rows in argstable
 */
/**
 * ArgTable Type Badge
 * Type information badges (string, number, etc.)
 */
/**
 * ArgTable Required Indicator
 * Shows which props are required
 */
/**
 * ArgTable Item Row
 * Expandable rows for arrays/objects
 */
/**
 * Link Styling
 * Provides consistent anchor tag styling with Carbon theme tokens
 * Includes hover, active, visited, and focus states
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
nav.sidebar-container .sidebar-header a {
  border-radius: 0;
}
nav.sidebar-container .sidebar-header a:focus {
  box-shadow: none;
  border: 2px solid var(--cds-focus, #0f62fe);
  background-color: var(--cds-layer-selected);
}
nav.sidebar-container .sidebar-header button {
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 2rem;
  min-inline-size: 2rem;
}
nav.sidebar-container .sidebar-header button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
nav.sidebar-container .sidebar-header button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
nav.sidebar-container .sidebar-header button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
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
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 2rem;
  min-inline-size: 2rem;
}
nav.sidebar-container [role=combobox].search-field button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
nav.sidebar-container [role=combobox].search-field button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
nav.sidebar-container [role=combobox].search-field button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
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
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 2rem;
  min-inline-size: 2rem;
}
nav.sidebar-container [role=combobox].search-field + div button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
nav.sidebar-container [role=combobox].search-field + div button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
nav.sidebar-container [role=combobox].search-field + div button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
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
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 2rem;
  min-inline-size: 2rem;
}
nav.sidebar-container .sidebar-subheading button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
nav.sidebar-container .sidebar-subheading button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
nav.sidebar-container .sidebar-subheading button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
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
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
}
nav.sidebar-container .sidebar-item:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
nav.sidebar-container .sidebar-item:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
nav.sidebar-container .sidebar-item {
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
nav.sidebar-container .sidebar-item {
  /**
   * Button Text Color
   * Ensures proper text color for nested buttons
   */
}
nav.sidebar-container .sidebar-item > button {
  color: var(--cds-text-primary, #161616);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbIl9taXhpbnMuc2NzcyIsInNpZGVuYXYuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3RoZW1lcy9zY3NzL2dlbmVyYXRlZC9fdG9rZW5zLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZS9fdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQTRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FDdFZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtFQUNFLGtCQ2tDUztBRGhDVDtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFLE1DMExhOztBRGxNakI7QUFXRTtBQUFBO0FBQUE7QUFBQTs7QUFLRTtFQUNFOztBQUVBO0VBQ0U7RUFDQTtFQUNBLGtCRUpTOztBRk9iO0VEK0JGO0VBQ0E7RUFJQTtFQUNBO0VBS0UsZ0JBRGE7RUFFYixpQkFGYTs7QUFPYjtFQUNFOztBQUdGO0VBQ0U7O0FBTUY7RUFDRTs7QUM1REY7QUFHRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUVFOztBQWxDUjtBQXVDRTtBQUFBO0FBQUE7QUFBQTs7QUFLRTtFQUNFLE9DcUpXOztBRGxNakI7QUFpREU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRTtFQUNBO0VBQ0Esa0JDSE87RURJUDtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7RUFFRSxPQ2lJVzs7QUQ3SWY7QUFlRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFRCtEQTs7QUNsRkY7QUF1QkU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUR4QkY7RUFDQTtFQUlBO0VBQ0E7RUFLRSxnQkFEYTtFQUViLGlCQUZhOztBQU9iO0VBQ0U7O0FBR0Y7RUFDRTs7QUFNRjtFQUNFOztBQ2hDSjtBQStCRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFOztBQXBDSjtBQXVDRTtBQUFBO0FBQUE7QUFBQTs7QUFLRTtFRHpDSjtFQUNBO0VBSUE7RUFDQTtFQUtFLGdCQURhO0VBRWIsaUJBRmE7O0FBT2I7RUFDRTs7QUFHRjtFQUNFOztBQU1GO0VBQ0U7O0FDWUE7RUFFRTs7QUFuR1I7QUF3R0U7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRSxPQ3FGYTs7QURuRmI7RUR2REY7RUFDQTtFQUlBO0VBQ0E7RUFLRSxnQkFEYTtFQUViLGlCQUZhOztBQU9iO0VBQ0U7O0FBR0Y7RUFDRTs7QUFNRjtFQUNFOztBQ3JGTjtBQW9IRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUVFO0VBQ0E7RURuRUY7RUFDQTtFQUlBO0VBQ0E7O0FBV0U7RUFDRTs7QUFHRjtFQUNFOztBQzBDSjtBQVFFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0U7O0FBYko7QUFnQkU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRSxrQkN4Rks7O0FEbUVUO0FBd0JFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0Usa0JDcElnQjtFRHFJaEI7O0FBRUE7RUFDRSxrQkMzRlM7O0FEOEZYO0VBQ0U7O0FBckNOO0FBeUNFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VEOUJBOztBQ2ZGO0FBaURFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0UsT0NpQlMiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwic2FzczpsaXN0XCI7XG5AdXNlIFwic2FzczptYXBcIjtcbkB1c2UgXCJAY2FyYm9uL2xheW91dFwiO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvdGhlbWVcIjtcbkB1c2UgXCJAY2FyYm9uL3N0eWxlcy9zY3NzL3NwYWNpbmdcIjtcbkB1c2UgXCJAY2FyYm9uL3N0eWxlcy9zY3NzL3R5cGVcIjtcbkB1c2UgXCJAY2FyYm9uL3N0eWxlcy9zY3NzL2NvbXBvbmVudHMvYnV0dG9uL3Rva2Vuc1wiIGFzIGJ1dHRvbi10b2tlbnM7XG5AdXNlIFwiZGVmYXVsdHNcIjtcblxuLy8gQnV0dG9uIHNpemUgbWFwIGZvciBEUlkgcHJpbmNpcGxlXG4kYnV0dG9uLXNpemVzOiAoXG4gIFwieHNcIjogc3BhY2luZy4kc3BhY2luZy0wNSxcbiAgXCJzbVwiOiBzcGFjaW5nLiRzcGFjaW5nLTA2LFxuICBcIm1kXCI6IHNwYWNpbmcuJHNwYWNpbmctMDcsXG4gIFwibGdcIjogc3BhY2luZy4kc3BhY2luZy0wOCxcbiAgXCJ4bFwiOiBzcGFjaW5nLiRzcGFjaW5nLTA5LFxuICBcIjJ4bFwiOiBzcGFjaW5nLiRzcGFjaW5nLTEwLFxuKTtcblxuLy8gQnV0dG9uIGtpbmQgY29uZmlndXJhdGlvbnNcbiRidXR0b24ta2luZHM6IChcbiAgXCJwcmltYXJ5XCI6IChcbiAgICBcImJhY2tncm91bmRcIjogYnV0dG9uLXRva2Vucy4kYnV0dG9uLXByaW1hcnksXG4gICAgXCJjb2xvclwiOiB0aGVtZS4kdGV4dC1vbi1jb2xvcixcbiAgICBcImhvdmVyXCI6IGJ1dHRvbi10b2tlbnMuJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLFxuICAgIFwiYWN0aXZlXCI6IGJ1dHRvbi10b2tlbnMuJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSxcbiAgICBcImZvY3VzXCI6IHRoZW1lLiRmb2N1cy1pbnZlcnNlLFxuICApLFxuICBcInNlY29uZGFyeVwiOiAoXG4gICAgXCJiYWNrZ3JvdW5kXCI6IGJ1dHRvbi10b2tlbnMuJGJ1dHRvbi1zZWNvbmRhcnksXG4gICAgXCJjb2xvclwiOiB0aGVtZS4kdGV4dC1vbi1jb2xvcixcbiAgICBcImhvdmVyXCI6IGJ1dHRvbi10b2tlbnMuJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsXG4gICAgXCJhY3RpdmVcIjogYnV0dG9uLXRva2Vucy4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsXG4gICAgXCJmb2N1c1wiOiB0aGVtZS4kZm9jdXMsXG4gICksXG4gIFwiZ2hvc3RcIjogKFxuICAgIFwiYmFja2dyb3VuZFwiOiB0cmFuc3BhcmVudCxcbiAgICBcImNvbG9yXCI6IHRoZW1lLiR0ZXh0LXByaW1hcnksXG4gICAgXCJob3ZlclwiOiB0aGVtZS4kYmFja2dyb3VuZC1ob3ZlcixcbiAgICBcImFjdGl2ZVwiOiB0aGVtZS4kYmFja2dyb3VuZC1hY3RpdmUsXG4gICAgXCJmb2N1c1wiOiB0aGVtZS4kZm9jdXMsXG4gICksXG4pO1xuXG4vKipcbiAqIFVuaWZpZWQgQnV0dG9uIE1peGluXG4gKiBQcm92aWRlcyBjb21wcmVoZW5zaXZlIGJ1dHRvbiBzdHlsaW5nIHdpdGggYWxsIGN1c3RvbWl6YXRpb24gb3B0aW9uc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSAkc2l6ZSAtIFNpemUgbGV2ZWw6IFwieHNcIiwgXCJzbVwiLCBcIm1kXCIsIFwibGdcIiwgXCJ4bFwiLCBcIjJ4bFwiLCBvciBudWxsIHRvIHNraXAgc2l6aW5nIChkZWZhdWx0OiBcImxnXCIpXG4gKiBAcGFyYW0ge3N0cmluZ30gJGtpbmQgLSBCdXR0b24ga2luZDogXCJnaG9zdFwiLCBcInByaW1hcnlcIiwgXCJzZWNvbmRhcnlcIiAoZGVmYXVsdDogXCJnaG9zdFwiKVxuICogQHBhcmFtIHtib29sZWFufSAkZm9jdXMgLSBXaGV0aGVyIHRvIGluY2x1ZGUgZm9jdXMgc3R5bGVzIChkZWZhdWx0OiB0cnVlKVxuICogQHBhcmFtIHtib29sZWFufSAkc3RhdGVzIC0gV2hldGhlciB0byBpbmNsdWRlIGhvdmVyL2FjdGl2ZSBzdGF0ZXMgKGRlZmF1bHQ6IHRydWUpXG4gKlxuICogQGV4YW1wbGUgQmFzaWMgYnV0dG9uIHdpdGggZGVmYXVsdCBzZXR0aW5nc1xuICogICBAaW5jbHVkZSBidXR0b24oKTtcbiAqXG4gKiBAZXhhbXBsZSBCdXR0b24gd2l0aG91dCBmb2N1cyBzdHlsZXNcbiAqICAgQGluY2x1ZGUgYnV0dG9uKFwibGdcIiwgXCJnaG9zdFwiLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGUgUHJpbWFyeSBidXR0b24gd2l0aCBtZWRpdW0gc2l6ZVxuICogICBAaW5jbHVkZSBidXR0b24oXCJtZFwiLCBcInByaW1hcnlcIik7XG4gKlxuICogQGV4YW1wbGUgQnV0dG9uIHdpdGggb25seSByZXNldCBzdHlsZXMgKG5vIHN0YXRlcylcbiAqICAgQGluY2x1ZGUgYnV0dG9uKG51bGwsIFwiZ2hvc3RcIiwgdHJ1ZSwgZmFsc2UpO1xuICovXG5AbWl4aW4gYnV0dG9uKCRzaXplOiBcImxnXCIsICRraW5kOiBcImdob3N0XCIsICRmb2N1czogdHJ1ZSwgJHN0YXRlczogdHJ1ZSkge1xuICAvLyBCYXNlIHJlc2V0IHN0eWxlc1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIC8vIEFwcGx5IGtpbmQtc3BlY2lmaWMgYmFzZSBzdHlsZXNcbiAgJGtpbmQtY29uZmlnOiBtYXAuZ2V0KCRidXR0b24ta2luZHMsICRraW5kKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbWFwLmdldCgka2luZC1jb25maWcsIFwiYmFja2dyb3VuZFwiKTtcbiAgY29sb3I6IG1hcC5nZXQoJGtpbmQtY29uZmlnLCBcImNvbG9yXCIpICFpbXBvcnRhbnQ7XG5cbiAgLy8gQXBwbHkgc2l6aW5nIGlmIHNwZWNpZmllZFxuICBAaWYgJHNpemUgYW5kIG1hcC5oYXMta2V5KCRidXR0b24tc2l6ZXMsICRzaXplKSB7XG4gICAgJHNpemUtdmFsdWU6IG1hcC5nZXQoJGJ1dHRvbi1zaXplcywgJHNpemUpO1xuICAgIG1pbi1ibG9jay1zaXplOiAkc2l6ZS12YWx1ZTtcbiAgICBtaW4taW5saW5lLXNpemU6ICRzaXplLXZhbHVlO1xuICB9XG5cbiAgLy8gQXBwbHkgaW50ZXJhY3RpdmUgc3RhdGVzIGlmIHNwZWNpZmllZFxuICBAaWYgJHN0YXRlcyB7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAuZ2V0KCRraW5kLWNvbmZpZywgXCJob3ZlclwiKSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC5nZXQoJGtpbmQtY29uZmlnLCBcImFjdGl2ZVwiKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIEFwcGx5IGZvY3VzIHN0eWxlcyBpZiBzcGVjaWZpZWRcbiAgQGlmICRmb2N1cyB7XG4gICAgJjpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggbWFwLmdldCgka2luZC1jb25maWcsIFwiZm9jdXNcIikgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBJbnB1dCBGaWVsZCBTdHlsaW5nXG4gKiBQcm92aWRlcyBjb25zaXN0ZW50IHN0eWxpbmcgZm9yIGlucHV0IGVsZW1lbnRzICh0ZXh0LCB0ZXh0YXJlYSwgc2VsZWN0KVxuICogQHBhcmFtIHtzdHJpbmd9ICRsYXllciAtIExheWVyIGxldmVsIGZvciB0aGUgaW5wdXQgYmFja2dyb3VuZFxuICovXG5AbWl4aW4gaW5wdXQtZmllbGQoJGxheWVyOiBcImxheWVyLTAxXCIpIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcblxuICBAaWYgJGxheWVyID09IFwibGF5ZXItMDJcIiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyLTAyO1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kbGF5ZXItMDE7XG4gIH1cblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeTtcbiAgfVxuXG4gIC8vIEFwcGx5IGludGVyYWN0aXZlIHN0YXRlcyB1c2luZyB1bmlmaWVkIGJ1dHRvbiBtaXhpblxuICBAaW5jbHVkZSBidXR0b24obnVsbCwgXCJnaG9zdFwiLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHRoZW1lLiRmb2N1cztcbiAgfVxufVxuXG4vKipcbiAqIEJvcmRlciBCb3R0b20gSW5wdXRcbiAqIEFkZHMgYm90dG9tIGJvcmRlciBmb3IgdGV4dCBpbnB1dHMgZm9sbG93aW5nIENhcmJvbiBkZXNpZ24gcGF0dGVyblxuICovXG5AbWl4aW4gaW5wdXQtYm9yZGVyLWJvdHRvbSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIHRoZW1lLiRib3JkZXItc3Ryb25nLTAxO1xufVxuXG4vKipcbiAqIEZvY3VzIFN0YXRlXG4gKiBBcHBsaWVzIGNvbnNpc3RlbnQgZm9jdXMgc3R5bGluZyBhY3Jvc3MgY29tcG9uZW50c1xuICogQHBhcmFtIHtzdHJpbmd9ICR0eXBlIC0gVHlwZSBvZiBmb2N1cyAoaW5zZXQsIG91dGxpbmUpXG4gKi9cbkBtaXhpbiBmb2N1cy1zdGF0ZSgkdHlwZTogXCJpbnNldFwiKSB7XG4gIEBpZiAkdHlwZSA9PSBcIm91dGxpbmVcIiB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHRoZW1lLiRmb2N1cztcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgfSBAZWxzZSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHRoZW1lLiRmb2N1cyAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qKlxuICogVGFiIEJ1dHRvbiBTdHlsaW5nXG4gKiBDb25zaXN0ZW50IHN0eWxpbmcgZm9yIHRhYiBidXR0b25zIHdpdGggYWN0aXZlIHN0YXRlIGluZGljYXRvclxuICovXG5AbWl4aW4gdGFiLWJ1dHRvbiB7XG4gIEBpbmNsdWRlIGJ1dHRvbihcImxnXCIsIFwiZ2hvc3RcIiwgZmFsc2UpO1xuICBmb250LXdlaWdodDogdW5zZXQ7XG5cbiAgJjpmb2N1cyB7XG4gICAgQGluY2x1ZGUgZm9jdXMtc3RhdGUoXCJvdXRsaW5lXCIpO1xuICAgIGJvcmRlci13aWR0aDogMnB4IDA7XG4gICAgYm9yZGVyLWNvbG9yOiB1bnNldDtcbiAgfVxufVxuXG4vKipcbiAqIEFjdGl2ZSBUYWIgSW5kaWNhdG9yXG4gKiBBcHBsaWVzIGJvdHRvbSBib3JkZXIgdG8gaW5kaWNhdGUgYWN0aXZlIHRhYiBzdGF0ZVxuICovXG5AbWl4aW4gdGFiLWFjdGl2ZSB7XG4gIGJvcmRlci13aWR0aDogMnB4IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdGhlbWUuJGJvcmRlci1pbnRlcmFjdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qKlxuICogQmFkZ2UvVGFnIFN0eWxpbmdcbiAqIEZvciBjb3VudCBpbmRpY2F0b3JzIGFuZCB0YWdzXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICRhY3RpdmUgLSBXaGV0aGVyIHRoZSBiYWRnZSBpcyBvbiBhbiBhY3RpdmUgZWxlbWVudFxuICovXG5AbWl4aW4gYmFkZ2UoJGFjdGl2ZTogZmFsc2UpIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcblxuICBAaWYgJGFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGJvcmRlci1pbnRlcmFjdGl2ZTtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtb24tY29sb3I7XG4gIH0gQGVsc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRib3JkZXItc3VidGxlO1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG4gIH1cbn1cblxuQG1peGluIGxpc3Qge1xuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBcIuKAlFwiO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBsaSB7XG4gICAgbWF4LWlubGluZS1zaXplOiBkZWZhdWx0cy4kbWF4LWlubGluZS1zaXplO1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG4gIH1cblxuICB1bCBsaSB7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogc3BhY2luZy4kc3BhY2luZy0wNTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogc3BhY2luZy4kc3BhY2luZy0wNTtcbiAgfVxuXG4gIHVsIGxpIHAsXG4gIG9sIGxpIHAge1xuICAgIG1hcmdpbi1ibG9jazogMDtcbiAgfVxuXG4gIG9sIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBzcGFjaW5nLiRzcGFjaW5nLTA1O1xuICB9XG5cbiAgb2wgbGkge1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHNwYWNpbmcuJHNwYWNpbmctMDU7XG4gIH1cblxuICBvbCBvbCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1hbHBoYTtcbiAgfVxuXG4gIG9sIG9sIG9sIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGxvd2VyLXJvbWFuO1xuICB9XG59XG5cbkBtaXhpbiBoZWFkaW5nIHtcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA2IHtcbiAgICAkc3BhY2luZ3M6IChcbiAgICAgIHNwYWNpbmcuJHNwYWNpbmctMDcsXG4gICAgICBzcGFjaW5nLiRzcGFjaW5nLTA2LFxuICAgICAgc3BhY2luZy4kc3BhY2luZy0wNSxcbiAgICAgIHNwYWNpbmcuJHNwYWNpbmctMDQsXG4gICAgICBzcGFjaW5nLiRzcGFjaW5nLTAzLFxuICAgICAgc3BhY2luZy4kc3BhY2luZy0wMlxuICAgICk7XG5cbiAgICBoI3skaX0ge1xuICAgICAgQGluY2x1ZGUgdHlwZS50eXBlLXN0eWxlKFwiaGVhZGluZy0wI3s3IC0gJGl9XCIpO1xuICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiBsaXN0Lm50aCgkc3BhY2luZ3MsICRpKTtcbiAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IHNwYWNpbmcuJHNwYWNpbmctMDM7XG4gICAgICBjb2xvcjogdGhlbWUuJHRleHQtcHJpbWFyeTtcbiAgICB9XG4gIH1cbiAgaDIge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbn1cblxuQG1peGluIHBhcmFncmFwaCB7XG4gIHAge1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG4gIH1cbn1cblxuQG1peGluIGhvcml6b250YWwtcnVsZSB7XG4gIGhyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdGhlbWUuJGJvcmRlci1zdWJ0bGU7XG4gICAgbWFyZ2luOiBzcGFjaW5nLiRzcGFjaW5nLTAzIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBBcmdUYWJsZSBCYXNlXG4gKiBCYXNlIHN0eWxpbmcgZm9yIGNvbnRyb2xzL3Byb3BzIHRhYmxlc1xuICogVXNlZCBpbiBib3RoIGRvY3Muc2NzcyBhbmQgcGFuZWwuc2Nzc1xuICovXG5AbWl4aW4gYXJnc3RhYmxlLWJhc2Uge1xuICAqIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgPiB0aGVhZC5kb2NibG9jay1hcmdzdGFibGUtaGVhZCA+IHRyID4gdGggPiBzcGFuIHtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtcHJpbWFyeTtcbiAgfVxufVxuXG4vKipcbiAqIEFyZ1RhYmxlIEJvZHkgUm93XG4gKiBTdGFuZGFyZCBjb250cm9sIHJvd3MgaW4gYXJnc3RhYmxlXG4gKi9cbkBtaXhpbiBhcmdzdGFibGUtcm93IHtcbiAgYmFja2dyb3VuZDogdGhlbWUuJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogdGhlbWUuJGJvcmRlci1zdWJ0bGU7XG4gIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG59XG5cbi8qKlxuICogQXJnVGFibGUgVHlwZSBCYWRnZVxuICogVHlwZSBpbmZvcm1hdGlvbiBiYWRnZXMgKHN0cmluZywgbnVtYmVyLCBldGMuKVxuICovXG5AbWl4aW4gYXJnc3RhYmxlLXR5cGUtYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuXG4gIC5jc3MtbWtqanBzLFxuICAuY3NzLW8xZDdrbyxcbiAgLmNzcy0zcW1oMmIsXG4gIC5jc3MtNnE3c25pIHtcbiAgICAvLyB0b2RvIGNoZWNrIGZvciBhbHRlcm5hdGl2ZXNcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kbGF5ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdGhlbWUuJGJvcmRlci1zdWJ0bGU7XG4gIH1cbn1cblxuLyoqXG4gKiBBcmdUYWJsZSBSZXF1aXJlZCBJbmRpY2F0b3JcbiAqIFNob3dzIHdoaWNoIHByb3BzIGFyZSByZXF1aXJlZFxuICovXG5AbWl4aW4gYXJnc3RhYmxlLXJlcXVpcmVkIHtcbiAgY29sb3I6IHRoZW1lLiRzdXBwb3J0LWVycm9yO1xufVxuXG4vKipcbiAqIEFyZ1RhYmxlIEl0ZW0gUm93XG4gKiBFeHBhbmRhYmxlIHJvd3MgZm9yIGFycmF5cy9vYmplY3RzXG4gKi9cbkBtaXhpbiBhcmdzdGFibGUtaXRlbS1yb3cge1xuICBiYWNrZ3JvdW5kOiB0aGVtZS4kbGF5ZXItMDEgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggMXB4IHRoZW1lLiRib3JkZXItc3VidGxlO1xuXG4gICY6aGFzKGJ1dHRvbjpmb2N1cykge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCB0aGVtZS4kZm9jdXMgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS4kbGF5ZXItMDEgIWltcG9ydGFudDtcbiAgfVxuXG4gID4gdGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1wcmltYXJ5O1xuXG4gICAgPiBzcGFuID4gc3ZnIHtcbiAgICAgIGNvbG9yOiB0aGVtZS4kaWNvbi1wcmltYXJ5O1xuICAgIH1cblxuICAgID4gYnV0dG9uOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTGluayBTdHlsaW5nXG4gKiBQcm92aWRlcyBjb25zaXN0ZW50IGFuY2hvciB0YWcgc3R5bGluZyB3aXRoIENhcmJvbiB0aGVtZSB0b2tlbnNcbiAqIEluY2x1ZGVzIGhvdmVyLCBhY3RpdmUsIHZpc2l0ZWQsIGFuZCBmb2N1cyBzdGF0ZXNcbiAqL1xuQG1peGluIGxpbmsge1xuICBhIHtcbiAgICBjb2xvcjogdGhlbWUuJGxpbmstcHJpbWFyeTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB0aGVtZS4kbGluay1wcmltYXJ5LWhvdmVyO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgY29sb3I6IHRoZW1lLiRsaW5rLXByaW1hcnk7XG4gICAgfVxuXG4gICAgJjp2aXNpdGVkIHtcbiAgICAgIGNvbG9yOiB0aGVtZS4kbGluay12aXNpdGVkO1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMnB4IHNvbGlkIHRoZW1lLiRmb2N1cztcbiAgICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBjb2RlIHtcbiAgY29kZSB7XG4gICAgY29sb3I6IHRoZW1lLiR0ZXh0LXByaW1hcnk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyLTAxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRoZW1lLiRib3JkZXItc3VidGxlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cbiIsIkB1c2UgXCJAY2FyYm9uL2xheW91dFwiO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvdGhlbWVcIjtcbkB1c2UgXCJAY2FyYm9uL3N0eWxlcy9zY3NzL2NvbXBvbmVudHMvYnV0dG9uL3Rva2Vuc1wiIGFzIGJ1dHRvbi10b2tlbnM7XG5AdXNlIFwibWl4aW5zXCI7XG5cbi8qKlxuICogU0lERUJBUi9OQVZJR0FUSU9OIFNUWUxFU1xuICogU3R5bGVzIGZvciB0aGUgU3Rvcnlib29rIHNpZGViYXIgbmF2aWdhdGlvbiBwYW5lbFxuICogSW5jbHVkZXMgaGVhZGVyLCBzZWFyY2gsIHRyZWUgbmF2aWdhdGlvbiwgYW5kIGludGVyYWN0aXZlIGVsZW1lbnRzXG4gKi9cblxubmF2LnNpZGViYXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyLTAxO1xuXG4gIC8qKlxuICAgKiBTVkcgSWNvbiBDb2xvcnNcbiAgICogRGVmYXVsdCBmaWxsIGNvbG9yIGZvciBzaWRlYmFyIGljb25zXG4gICAqL1xuICBzdmcgPiBwYXRoIHtcbiAgICBmaWxsOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG4gIH1cblxuICAvKipcbiAgICogU2lkZWJhciBIZWFkZXJcbiAgICogVG9wIHNlY3Rpb24gd2l0aCBsb2dvIGFuZCBhY3Rpb24gYnV0dG9uc1xuICAgKi9cbiAgLnNpZGViYXItaGVhZGVyIHtcbiAgICBhIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0aGVtZS4kZm9jdXM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsYXllci1zZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIEBpbmNsdWRlIG1peGlucy5idXR0b24oXCJtZFwiKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgcHNldWRvLWVsZW1lbnQgc2hhZG93c1xuICAgICAgICogQ2xlYXJzIHVud2FudGVkIGRlZmF1bHQgc3R5bGluZ1xuICAgICAgICovXG4gICAgICAmOjphZnRlcixcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlY2VudGx5IE9wZW5lZCBTZWFyY2ggUmVzdWx0c1xuICAgKiBUZXh0IGNvbG9yIGZvciByZWNlbnQgaXRlbXMgaW4gc2VhcmNoIGRyb3Bkb3duXG4gICAqL1xuICAuc2VhcmNoLXJlc3VsdC1yZWNlbnRseU9wZW5lZCB7XG4gICAgKiB7XG4gICAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggRmllbGRcbiAgICogQ29tYm9ib3ggaW5wdXQgZm9yIGZpbHRlcmluZyBzdG9yaWVzXG4gICAqL1xuICBbcm9sZT1cImNvbWJvYm94XCJdLnNlYXJjaC1maWVsZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCB0aGVtZS4kYm9yZGVyLXN0cm9uZy0wMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kbGF5ZXItMDI7XG4gICAgcGFkZGluZzogMDtcblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCBUZXh0ICYgUGxhY2Vob2xkZXJcbiAgICAgKiBDb2xvciBmb3IgaW5wdXQgdGV4dCBhbmQgcGxhY2Vob2xkZXJcbiAgICAgKi9cbiAgICAqLFxuICAgIDo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb2N1cyBTdGF0ZSBmb3IgU2VhcmNoIElucHV0XG4gICAgICogU2hvd3MgZm9jdXMgd2hlbiB0eXBpbmcgaW4gc2VhcmNoIGZpZWxkXG4gICAgICovXG4gICAgJjpoYXMoaW5wdXQ6Zm9jdXMpIHtcbiAgICAgIEBpbmNsdWRlIG1peGlucy5mb2N1cy1zdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggRmllbGQgQnV0dG9uc1xuICAgICAqIENsZWFyIGJ1dHRvbiBhbmQgb3RoZXIgc2VhcmNoIGNvbnRyb2xzXG4gICAgICovXG4gICAgYnV0dG9uIHtcbiAgICAgIEBpbmNsdWRlIG1peGlucy5idXR0b24oXCJtZFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZ2FwIGZyb20gbGFzdCBjaGlsZFxuICAgICAqIExheW91dCBhZGp1c3RtZW50IGZvciBzZWFyY2ggY29udHJvbHNcbiAgICAgKi9cbiAgICA6bGFzdC1jaGlsZCB7XG4gICAgICBnYXA6IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIFN1Z2dlc3Rpb25zL1Jlc3VsdHMgQnV0dG9uc1xuICAgICAqIEludGVyYWN0aXZlIGVsZW1lbnRzIGluIHNlYXJjaCBkcm9wZG93blxuICAgICAqL1xuICAgICsgZGl2IHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIEBpbmNsdWRlIG1peGlucy5idXR0b24oXCJtZFwiKTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2lkZWJhciBTdWJoZWFkaW5nc1xuICAgKiBDYXRlZ29yeSBoZWFkZXJzIGluIHRoZSBuYXZpZ2F0aW9uIHRyZWVcbiAgICovXG4gIC5zaWRlYmFyLXN1YmhlYWRpbmcge1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG5cbiAgICBidXR0b24ge1xuICAgICAgQGluY2x1ZGUgbWl4aW5zLmJ1dHRvbihcIm1kXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaWRlYmFyIE5hdmlnYXRpb24gSXRlbXNcbiAgICogSW5kaXZpZHVhbCBzdG9yeS9mb2xkZXIgaXRlbXMgaW4gdGhlIHRyZWVcbiAgICovXG4gIC5zaWRlYmFyLWl0ZW0ge1xuICAgIC8vIFVzZSBDU1MgY3VzdG9tIHByb3BlcnR5IGZvciBob3ZlciBzdGF0ZVxuICAgIC0tdHJlZS1ub2RlLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWNkcy1sYXllci1ob3Zlci0wMikgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgLy8gQXBwbHkgYnV0dG9uIHN0eWxlcyB3aXRob3V0IGZvY3VzIChoYW5kbGVkIHNlcGFyYXRlbHkpXG4gICAgQGluY2x1ZGUgbWl4aW5zLmJ1dHRvbihudWxsLCBcImdob3N0XCIsIGZhbHNlKTtcblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gTGlua3NcbiAgICAgKiBTdG9yeSB0aXRsZSBsaW5rc1xuICAgICAqL1xuICAgIGEge1xuICAgICAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4cGFuZGFibGUgSXRlbXNcbiAgICAgKiBGb2xkZXJzIHRoYXQgY2FuIGJlIGV4cGFuZGVkL2NvbGxhcHNlZFxuICAgICAqL1xuICAgICY6aGFzKFthcmlhLWV4cGFuZGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyLTAyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdGVkL0FjdGl2ZSBJdGVtXG4gICAgICogQ3VycmVudGx5IHZpZXdlZCBzdG9yeSB3aXRoIGxlZnQgYm9yZGVyIGluZGljYXRvclxuICAgICAqL1xuICAgICZbZGF0YS1zZWxlY3RlZD1cInRydWVcIl0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGJhY2tncm91bmQtc2VsZWN0ZWQ7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCBsYXlvdXQuJHNwYWNpbmctMDIgMCAwIDAgdGhlbWUuJGJvcmRlci1pbnRlcmFjdGl2ZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsYXllci1ob3Zlci0wMjtcbiAgICAgIH1cblxuICAgICAgc3ZnIHtcbiAgICAgICAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVyYWN0aXZlIFN0YXRlc1xuICAgICAqIEhvdmVyLCBhY3RpdmUsIGFuZCBmb2N1cyBzdGF0ZXMgZm9yIG5hdmlnYXRpb24gaXRlbXNcbiAgICAgKi9cbiAgICAmOmZvY3VzIHtcbiAgICAgIEBpbmNsdWRlIG1peGlucy5mb2N1cy1zdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdXR0b24gVGV4dCBDb2xvclxuICAgICAqIEVuc3VyZXMgcHJvcGVyIHRleHQgY29sb3IgZm9yIG5lc3RlZCBidXR0b25zXG4gICAgICovXG4gICAgPiBidXR0b24ge1xuICAgICAgY29sb3I6IHRoZW1lLiR0ZXh0LXByaW1hcnk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb2RlIGdlbmVyYXRlZCBieSBAY2FyYm9uL3RoZW1lcy4gRE8gTk9UIEVESVQuXG4vL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29uZmlnJztcbkB1c2UgJy4uL3RoZW1lJztcblxuLy8vIEludGVybmFsIGhlbHBlciBmb3IgZ2VuZXJhdGluZyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbkBmdW5jdGlvbiBfZ2V0KCR0b2tlbikge1xuICBAaWYgY29uZmlnLiR1c2UtZmFsbGJhY2stdmFsdWUgPT0gZmFsc2Uge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skdG9rZW59KTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiB2YXIoLS0je2NvbmZpZy4kcHJlZml4fS0jeyR0b2tlbn0sICN7dGhlbWUuZ2V0KCR0b2tlbil9KTtcbiAgfVxufVxuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZGAgdG9rZW5cbiRiYWNrZ3JvdW5kOiBfZ2V0KCdiYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWFjdGl2ZWAgdG9rZW5cbiRiYWNrZ3JvdW5kLWFjdGl2ZTogX2dldCgnYmFja2dyb3VuZC1hY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtc2VsZWN0ZWRgIHRva2VuXG4kYmFja2dyb3VuZC1zZWxlY3RlZDogX2dldCgnYmFja2dyb3VuZC1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLXNlbGVjdGVkLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLXNlbGVjdGVkLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtaG92ZXI6IF9nZXQoJ2JhY2tncm91bmQtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtYnJhbmRgIHRva2VuXG4kYmFja2dyb3VuZC1icmFuZDogX2dldCgnYmFja2dyb3VuZC1icmFuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1pbnZlcnNlYCB0b2tlblxuJGJhY2tncm91bmQtaW52ZXJzZTogX2dldCgnYmFja2dyb3VuZC1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWludmVyc2UtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLWludmVyc2UtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAxYCB0b2tlblxuJGxheWVyLTAxOiBfZ2V0KCdsYXllci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAxYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMTogX2dldCgnbGF5ZXItYWN0aXZlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAxYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDE6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAxYCB0b2tlblxuJGxheWVyLWhvdmVyLTAxOiBfZ2V0KCdsYXllci1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDFgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDE6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMTogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAyYCB0b2tlblxuJGxheWVyLTAyOiBfZ2V0KCdsYXllci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAyYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMjogX2dldCgnbGF5ZXItYWN0aXZlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAyYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDI6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAyYCB0b2tlblxuJGxheWVyLWhvdmVyLTAyOiBfZ2V0KCdsYXllci1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDJgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDI6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMjogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAzYCB0b2tlblxuJGxheWVyLTAzOiBfZ2V0KCdsYXllci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAzYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMzogX2dldCgnbGF5ZXItYWN0aXZlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAzYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDM6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAzYCB0b2tlblxuJGxheWVyLWhvdmVyLTAzOiBfZ2V0KCdsYXllci1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDNgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDM6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMzogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWludmVyc2VgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZTogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtZGlzYWJsZWRgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtZGlzYWJsZWQ6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDFgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAxOiBfZ2V0KCdsYXllci1hY2NlbnQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDFgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMTogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMTogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDJgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAyOiBfZ2V0KCdsYXllci1hY2NlbnQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDJgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMjogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMjogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDNgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAzOiBfZ2V0KCdsYXllci1hY2NlbnQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDNgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMzogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMzogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wMWAgdG9rZW5cbiRmaWVsZC0wMTogX2dldCgnZmllbGQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAxYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAxOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDJgIHRva2VuXG4kZmllbGQtMDI6IF9nZXQoJ2ZpZWxkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wMmAgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMjogX2dldCgnZmllbGQtaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAzYCB0b2tlblxuJGZpZWxkLTAzOiBfZ2V0KCdmaWVsZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDNgIHRva2VuXG4kZmllbGQtaG92ZXItMDM6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpbnRlcmFjdGl2ZWAgdG9rZW5cbiRpbnRlcmFjdGl2ZTogX2dldCgnaW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDBgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMDogX2dldCgnYm9yZGVyLXN1YnRsZS0wMCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wMWAgdG9rZW5cbiRib3JkZXItc3VidGxlLTAxOiBfZ2V0KCdib3JkZXItc3VidGxlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDE6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDJgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMjogX2dldCgnYm9yZGVyLXN1YnRsZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMmAgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAyOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAzYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDM6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDNgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMzogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wMWAgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAxOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAyYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDI6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDNgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMzogX2dldCgnYm9yZGVyLXN0cm9uZy0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDFgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDE6IF9nZXQoJ2JvcmRlci10aWxlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wMmAgdG9rZW5cbiRib3JkZXItdGlsZS0wMjogX2dldCgnYm9yZGVyLXRpbGUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAzYCB0b2tlblxuJGJvcmRlci10aWxlLTAzOiBfZ2V0KCdib3JkZXItdGlsZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWludmVyc2VgIHRva2VuXG4kYm9yZGVyLWludmVyc2U6IF9nZXQoJ2JvcmRlci1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItaW50ZXJhY3RpdmVgIHRva2VuXG4kYm9yZGVyLWludGVyYWN0aXZlOiBfZ2V0KCdib3JkZXItaW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1kaXNhYmxlZGAgdG9rZW5cbiRib3JkZXItZGlzYWJsZWQ6IF9nZXQoJ2JvcmRlci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1wcmltYXJ5YCB0b2tlblxuJHRleHQtcHJpbWFyeTogX2dldCgndGV4dC1wcmltYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXNlY29uZGFyeWAgdG9rZW5cbiR0ZXh0LXNlY29uZGFyeTogX2dldCgndGV4dC1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtcGxhY2Vob2xkZXJgIHRva2VuXG4kdGV4dC1wbGFjZWhvbGRlcjogX2dldCgndGV4dC1wbGFjZWhvbGRlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1oZWxwZXJgIHRva2VuXG4kdGV4dC1oZWxwZXI6IF9nZXQoJ3RleHQtaGVscGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWVycm9yYCB0b2tlblxuJHRleHQtZXJyb3I6IF9nZXQoJ3RleHQtZXJyb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtaW52ZXJzZWAgdG9rZW5cbiR0ZXh0LWludmVyc2U6IF9nZXQoJ3RleHQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1vbi1jb2xvcmAgdG9rZW5cbiR0ZXh0LW9uLWNvbG9yOiBfZ2V0KCd0ZXh0LW9uLWNvbG9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LW9uLWNvbG9yLWRpc2FibGVkYCB0b2tlblxuJHRleHQtb24tY29sb3ItZGlzYWJsZWQ6IF9nZXQoJ3RleHQtb24tY29sb3ItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtZGlzYWJsZWRgIHRva2VuXG4kdGV4dC1kaXNhYmxlZDogX2dldCgndGV4dC1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1wcmltYXJ5YCB0b2tlblxuJGxpbmstcHJpbWFyeTogX2dldCgnbGluay1wcmltYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXByaW1hcnktaG92ZXJgIHRva2VuXG4kbGluay1wcmltYXJ5LWhvdmVyOiBfZ2V0KCdsaW5rLXByaW1hcnktaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstc2Vjb25kYXJ5YCB0b2tlblxuJGxpbmstc2Vjb25kYXJ5OiBfZ2V0KCdsaW5rLXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLXZpc2l0ZWRgIHRva2VuXG4kbGluay1pbnZlcnNlLXZpc2l0ZWQ6IF9nZXQoJ2xpbmstaW52ZXJzZS12aXNpdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXZpc2l0ZWRgIHRva2VuXG4kbGluay12aXNpdGVkOiBfZ2V0KCdsaW5rLXZpc2l0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZWAgdG9rZW5cbiRsaW5rLWludmVyc2U6IF9nZXQoJ2xpbmstaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLWFjdGl2ZWAgdG9rZW5cbiRsaW5rLWludmVyc2UtYWN0aXZlOiBfZ2V0KCdsaW5rLWludmVyc2UtYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2UtaG92ZXJgIHRva2VuXG4kbGluay1pbnZlcnNlLWhvdmVyOiBfZ2V0KCdsaW5rLWludmVyc2UtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tcHJpbWFyeWAgdG9rZW5cbiRpY29uLXByaW1hcnk6IF9nZXQoJ2ljb24tcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1zZWNvbmRhcnlgIHRva2VuXG4kaWNvbi1zZWNvbmRhcnk6IF9nZXQoJ2ljb24tc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWludmVyc2VgIHRva2VuXG4kaWNvbi1pbnZlcnNlOiBfZ2V0KCdpY29uLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tb24tY29sb3JgIHRva2VuXG4kaWNvbi1vbi1jb2xvcjogX2dldCgnaWNvbi1vbi1jb2xvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1vbi1jb2xvci1kaXNhYmxlZGAgdG9rZW5cbiRpY29uLW9uLWNvbG9yLWRpc2FibGVkOiBfZ2V0KCdpY29uLW9uLWNvbG9yLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWRpc2FibGVkYCB0b2tlblxuJGljb24tZGlzYWJsZWQ6IF9nZXQoJ2ljb24tZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24taW50ZXJhY3RpdmVgIHRva2VuXG4kaWNvbi1pbnRlcmFjdGl2ZTogX2dldCgnaWNvbi1pbnRlcmFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1lcnJvcmAgdG9rZW5cbiRzdXBwb3J0LWVycm9yOiBfZ2V0KCdzdXBwb3J0LWVycm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXN1Y2Nlc3NgIHRva2VuXG4kc3VwcG9ydC1zdWNjZXNzOiBfZ2V0KCdzdXBwb3J0LXN1Y2Nlc3MnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtd2FybmluZ2AgdG9rZW5cbiRzdXBwb3J0LXdhcm5pbmc6IF9nZXQoJ3N1cHBvcnQtd2FybmluZycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1pbmZvYCB0b2tlblxuJHN1cHBvcnQtaW5mbzogX2dldCgnc3VwcG9ydC1pbmZvJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWVycm9yLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1lcnJvci1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LWVycm9yLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtc3VjY2Vzcy1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtc3VjY2Vzcy1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC13YXJuaW5nLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC13YXJuaW5nLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtd2FybmluZy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWluZm8taW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LWluZm8taW52ZXJzZTogX2dldCgnc3VwcG9ydC1pbmZvLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi1tYWpvcmAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tbWFqb3I6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi1tYWpvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLW1pbm9yYCB0b2tlblxuJHN1cHBvcnQtY2F1dGlvbi1taW5vcjogX2dldCgnc3VwcG9ydC1jYXV0aW9uLW1pbm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkYCB0b2tlblxuJHN1cHBvcnQtY2F1dGlvbi11bmRlZmluZWQ6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi11bmRlZmluZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1wb3BvdmVyLWJhY2tncm91bmQ6IF9nZXQoJ2FpLXBvcG92ZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDFgIHRva2VuXG4kYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDE6IF9nZXQoJ2FpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMmAgdG9rZW5cbiRhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMjogX2dldCgnYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWlubmVyLXNoYWRvd2AgdG9rZW5cbiRhaS1pbm5lci1zaGFkb3c6IF9nZXQoJ2FpLWlubmVyLXNoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1zdGFydC1zbWAgdG9rZW5cbiRhaS1hdXJhLXN0YXJ0LXNtOiBfZ2V0KCdhaS1hdXJhLXN0YXJ0LXNtJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLXN0YXJ0YCB0b2tlblxuJGFpLWF1cmEtc3RhcnQ6IF9nZXQoJ2FpLWF1cmEtc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtZW5kYCB0b2tlblxuJGFpLWF1cmEtZW5kOiBfZ2V0KCdhaS1hdXJhLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLWF1cmEtaG92ZXItYmFja2dyb3VuZDogX2dldCgnYWktYXVyYS1ob3Zlci1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLXN0YXJ0YCB0b2tlblxuJGFpLWF1cmEtaG92ZXItc3RhcnQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItZW5kYCB0b2tlblxuJGFpLWF1cmEtaG92ZXItZW5kOiBfZ2V0KCdhaS1hdXJhLWhvdmVyLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLXN0cm9uZ2AgdG9rZW5cbiRhaS1ib3JkZXItc3Ryb25nOiBfZ2V0KCdhaS1ib3JkZXItc3Ryb25nJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItc3RhcnRgIHRva2VuXG4kYWktYm9yZGVyLXN0YXJ0OiBfZ2V0KCdhaS1ib3JkZXItc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1lbmRgIHRva2VuXG4kYWktYm9yZGVyLWVuZDogX2dldCgnYWktYm9yZGVyLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktZHJvcC1zaGFkb3dgIHRva2VuXG4kYWktZHJvcC1zaGFkb3c6IF9nZXQoJ2FpLWRyb3Atc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1za2VsZXRvbi1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLXNrZWxldG9uLWJhY2tncm91bmQ6IF9nZXQoJ2FpLXNrZWxldG9uLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXNrZWxldG9uLWVsZW1lbnQtYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmQ6IF9nZXQoXG4gICdhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmQnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktb3ZlcmxheWAgdG9rZW5cbiRhaS1vdmVybGF5OiBfZ2V0KCdhaS1vdmVybGF5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWNlbnRlcmAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWNlbnRlcjogX2dldCgnYWktcG9wb3Zlci1jYXJldC1jZW50ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tOiBfZ2V0KCdhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kOiBfZ2V0KFxuICAnYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZCdcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kLWFjdGlvbnNgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zOiBfZ2V0KFxuICAnYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1wcm9tcHQtYmFja2dyb3VuZDogX2dldCgnY2hhdC1wcm9tcHQtYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYm9yZGVyLXN0YXJ0YCB0b2tlblxuJGNoYXQtcHJvbXB0LWJvcmRlci1zdGFydDogX2dldCgnY2hhdC1wcm9tcHQtYm9yZGVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1ib3JkZXItZW5kYCB0b2tlblxuJGNoYXQtcHJvbXB0LWJvcmRlci1lbmQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJvcmRlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLXVzZXJgIHRva2VuXG4kY2hhdC1idWJibGUtdXNlcjogX2dldCgnY2hhdC1idWJibGUtdXNlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtYWdlbnRgIHRva2VuXG4kY2hhdC1idWJibGUtYWdlbnQ6IF9nZXQoJ2NoYXQtYnViYmxlLWFnZW50JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS1ib3JkZXJgIHRva2VuXG4kY2hhdC1idWJibGUtYm9yZGVyOiBfZ2V0KCdjaGF0LWJ1YmJsZS1ib3JkZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLWJvdGAgdG9rZW5cbiRjaGF0LWF2YXRhci1ib3Q6IF9nZXQoJ2NoYXQtYXZhdGFyLWJvdCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItYWdlbnRgIHRva2VuXG4kY2hhdC1hdmF0YXItYWdlbnQ6IF9nZXQoJ2NoYXQtYXZhdGFyLWFnZW50JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci11c2VyYCB0b2tlblxuJGNoYXQtYXZhdGFyLXVzZXI6IF9nZXQoJ2NoYXQtYXZhdGFyLXVzZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtc2hlbGwtYmFja2dyb3VuZGAgdG9rZW5cbiRjaGF0LXNoZWxsLWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtc2hlbGwtYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1oZWFkZXItYmFja2dyb3VuZGAgdG9rZW5cbiRjaGF0LWhlYWRlci1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LWhlYWRlci1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbmAgdG9rZW5cbiRjaGF0LWJ1dHRvbjogX2dldCgnY2hhdC1idXR0b24nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLWhvdmVyYCB0b2tlblxuJGNoYXQtYnV0dG9uLWhvdmVyOiBfZ2V0KCdjaGF0LWJ1dHRvbi1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tdGV4dC1ob3ZlcmAgdG9rZW5cbiRjaGF0LWJ1dHRvbi10ZXh0LWhvdmVyOiBfZ2V0KCdjaGF0LWJ1dHRvbi10ZXh0LWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1hY3RpdmVgIHRva2VuXG4kY2hhdC1idXR0b24tYWN0aXZlOiBfZ2V0KCdjaGF0LWJ1dHRvbi1hY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXNlbGVjdGVkYCB0b2tlblxuJGNoYXQtYnV0dG9uLXNlbGVjdGVkOiBfZ2V0KCdjaGF0LWJ1dHRvbi1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZGAgdG9rZW5cbiRjaGF0LWJ1dHRvbi10ZXh0LXNlbGVjdGVkOiBfZ2V0KCdjaGF0LWJ1dHRvbi10ZXh0LXNlbGVjdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBoaWdobGlnaHRgIHRva2VuXG4kaGlnaGxpZ2h0OiBfZ2V0KCdoaWdobGlnaHQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYG92ZXJsYXlgIHRva2VuXG4kb3ZlcmxheTogX2dldCgnb3ZlcmxheScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdG9nZ2xlLW9mZmAgdG9rZW5cbiR0b2dnbGUtb2ZmOiBfZ2V0KCd0b2dnbGUtb2ZmJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzaGFkb3dgIHRva2VuXG4kc2hhZG93OiBfZ2V0KCdzaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzYCB0b2tlblxuJGZvY3VzOiBfZ2V0KCdmb2N1cycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXMtaW5zZXRgIHRva2VuXG4kZm9jdXMtaW5zZXQ6IF9nZXQoJ2ZvY3VzLWluc2V0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1cy1pbnZlcnNlYCB0b2tlblxuJGZvY3VzLWludmVyc2U6IF9nZXQoJ2ZvY3VzLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNrZWxldG9uLWJhY2tncm91bmRgIHRva2VuXG4kc2tlbGV0b24tYmFja2dyb3VuZDogX2dldCgnc2tlbGV0b24tYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2tlbGV0b24tZWxlbWVudGAgdG9rZW5cbiRza2VsZXRvbi1lbGVtZW50OiBfZ2V0KCdza2VsZXRvbi1lbGVtZW50JykgIWRlZmF1bHQ7XG4iLCIvL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQHVzZSAnLi4vY29uZmlnJyBhcyAqO1xuQHVzZSAnQGNhcmJvbi90aGVtZXMvc2Nzcy9jb25maWcnIHdpdGggKFxuICAkcHJlZml4OiAkcHJlZml4XG4pO1xuQHVzZSAnLi4vY29tcGF0L3RoZW1lcycgYXMgY29tcGF0O1xuQHVzZSAnLi4vdGhlbWVzJztcblxuQGZvcndhcmQgJ0BjYXJib24vdGhlbWVzL3Njc3MvdGhlbWUnIHdpdGggKFxuICAkZmFsbGJhY2s6IHRoZW1lcy4kd2hpdGUgIWRlZmF1bHQsXG4gICR0aGVtZTogY29tcGF0LiR3aGl0ZSAhZGVmYXVsdFxuKTtcbkBmb3J3YXJkICdAY2FyYm9uL3RoZW1lcy9zY3NzL3Rva2Vucyc7XG5cbkB1c2UgJ0BjYXJib24vdGhlbWVzL3Njc3MvdG9rZW5zJztcbkB1c2UgJ0BjYXJib24vdGhlbWVzL3Njc3MvdGhlbWUnO1xuQHVzZSAnLi4vdXRpbGl0aWVzL2N1c3RvbS1wcm9wZXJ0eSc7XG5cbi8vIExheWVyIHNldHNcbiRsYXllcjogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyJyk7XG4kbGF5ZXItYWN0aXZlOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItYWN0aXZlJyk7XG4kbGF5ZXItYmFja2dyb3VuZDogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLWJhY2tncm91bmQnKTtcbiRsYXllci1ob3ZlcjogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLWhvdmVyJyk7XG4kbGF5ZXItc2VsZWN0ZWQ6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1zZWxlY3RlZCcpO1xuJGxheWVyLXNlbGVjdGVkLWhvdmVyOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItc2VsZWN0ZWQtaG92ZXInKTtcbiRsYXllci1hY2NlbnQ6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1hY2NlbnQnKTtcbiRsYXllci1hY2NlbnQtaG92ZXI6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1hY2NlbnQtaG92ZXInKTtcbiRsYXllci1hY2NlbnQtYWN0aXZlOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItYWNjZW50LWFjdGl2ZScpO1xuXG4kZmllbGQ6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdmaWVsZCcpO1xuJGZpZWxkLWhvdmVyOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignZmllbGQtaG92ZXInKTtcblxuJGJvcmRlci1zdWJ0bGU6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdib3JkZXItc3VidGxlJyk7XG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZDogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQnKTtcbiRib3JkZXItc3Ryb25nOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignYm9yZGVyLXN0cm9uZycpO1xuJGJvcmRlci10aWxlOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignYm9yZGVyLXRpbGUnKTtcbiJdfQ== */`,document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(W))}),E={};B(E,{css:()=>V});var V,j=I(()=>{V=`@charset "UTF-8";
/**
 * Unified Button Mixin
 * Provides comprehensive button styling with all customization options
 *
 * @param {string} $size - Size level: "xs", "sm", "md", "lg", "xl", "2xl", or null to skip sizing (default: "lg")
 * @param {string} $kind - Button kind: "ghost", "primary", "secondary" (default: "ghost")
 * @param {boolean} $focus - Whether to include focus styles (default: true)
 * @param {boolean} $states - Whether to include hover/active states (default: true)
 *
 * @example Basic button with default settings
 *   @include button();
 *
 * @example Button without focus styles
 *   @include button("lg", "ghost", false);
 *
 * @example Primary button with medium size
 *   @include button("md", "primary");
 *
 * @example Button with only reset styles (no states)
 *   @include button(null, "ghost", true, false);
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
 * ArgTable Base
 * Base styling for controls/props tables
 * Used in both docs.scss and panel.scss
 */
/**
 * ArgTable Body Row
 * Standard control rows in argstable
 */
/**
 * ArgTable Type Badge
 * Type information badges (string, number, etc.)
 */
/**
 * ArgTable Required Indicator
 * Shows which props are required
 */
/**
 * ArgTable Item Row
 * Expandable rows for arrays/objects
 */
/**
 * Link Styling
 * Provides consistent anchor tag styling with Carbon theme tokens
 * Includes hover, active, visited, and focus states
 */
/**
 * SHARED PANEL COMPONENT STYLES
 * Reusable styles for buttons, form controls, and common panel elements
 */
/**
 * Standard Panel Button
 * Used throughout panel tabs (Controls, A11y, etc.)
 * @param {string} $size - Button size (default: "sm")
 */
/**
 * Form Control Base Styles
 * Shared styling for inputs, textareas, and selects
 * Combines input field and border bottom styles
 */
/**
 * Form Control Selector
 * Reusable selector for form controls excluding radio and checkbox
 */
/**
 * Form Control Group
 * Styles for button, input, textarea, and select elements
 * Provides consistent styling across all form controls
 */
/**
 * Custom Radio Button
 * Carbon-styled radio input with proper accessibility
 * @example
 *   input[type="radio"] {
 *     @include radio-button;
 *   }
 */
/**
 * Custom Checkbox
 * Carbon-styled checkbox input with proper accessibility
 * @example
 *   input[type="checkbox"] {
 *     @include checkbox;
 *   }
 */
/**
 * Toggle Switch Styles
 * Carbon-styled toggle switch with proper states and animations
 * Matches Carbon Design System toggle component
 */
/**
 * Date/Time Input Color Scheme
 * Adjusts color scheme based on theme
 */
/**
 * Range Input Styles
 * Cross-browser compatible range slider styling with Carbon design tokens
 * Based on CSS-Tricks guide for comprehensive browser support
 * Supports: Chrome, Safari, Firefox, Edge, and IE
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
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 1.5rem;
  min-inline-size: 1.5rem;
}
#panel-tab-content [id=save-from-controls] > div button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content [id=save-from-controls] > div button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content [id=save-from-controls] > div button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content {
  /**
   * Reset Controls Button
   * Button to reset all controls to default values
   */
}
#panel-tab-content button[title="Reset controls"] {
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 1.5rem;
  min-inline-size: 1.5rem;
}
#panel-tab-content button[title="Reset controls"]:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content button[title="Reset controls"]:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content button[title="Reset controls"]:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content {
  /**
   * Controls ArgTable
   * Table showing component props/args with editable controls
   */
}
#panel-tab-content table.docblock-argstable * {
  border-radius: 0;
}
#panel-tab-content table.docblock-argstable > thead.docblock-argstable-head > tr > th > span {
  color: var(--cds-text-primary, #161616);
}
#panel-tab-content table.docblock-argstable > thead.docblock-argstable-head {
  background-color: var(--cds-layer);
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
  color: var(--cds-text-secondary, #525252);
  /**
   * Type Badges
   * Display type information (string, number, etc.)
   * Using attribute selector instead of specific CSS classes
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td [class*=css-] {
  border-radius: 0;
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td [class*=css-] .css-mkjjps,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td [class*=css-] .css-o1d7ko,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td [class*=css-] .css-3qmh2b,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td [class*=css-] .css-6q7sni {
  background-color: var(--cds-layer);
  border: 1px solid var(--cds-border-subtle);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td [class*=css-] {
  border-color: var(--cds-border-subtle-01, #c6c6c6);
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
  color: var(--cds-text-secondary, #525252);
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
   * Checkbox Styling
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=checkbox]:not([role=switch]) {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 1rem;
  height: 1rem;
  border-radius: 0;
  border: 1px solid var(--cds-icon-primary, #161616);
  background-color: var(--cds-background, #ffffff);
  cursor: pointer;
  position: relative;
  transition: border-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9), background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9), box-shadow 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=checkbox]:not([role=switch]):checked {
  background-color: var(--cds-icon-primary, #161616);
  border-color: var(--cds-icon-primary, #161616);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=checkbox]:not([role=switch]):checked::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3px;
  height: 6px;
  border: solid var(--cds-background, #ffffff);
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -60%) rotate(45deg);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=checkbox]:not([role=switch]):focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--cds-focus, #0f62fe);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=checkbox]:not([role=switch]):hover:not(:disabled) {
  border-color: var(--cds-icon-secondary, #525252);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=checkbox]:not([role=switch]):disabled {
  cursor: not-allowed;
  opacity: 0.5;
  border-color: var(--cds-icon-disabled, rgba(22, 22, 22, 0.25));
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=checkbox]:not([role=switch]):disabled:checked {
  background-color: var(--cds-icon-disabled, rgba(22, 22, 22, 0.25));
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
  transition: border-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9), background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9), box-shadow 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
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
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td [aria-label=booleanControl] * {
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td label:has(input[role=switch]) {
  background-color: var(--cds-background, #ffffff);
  border-radius: 1rem;
  display: inline-flex;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  width: 3rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  background-color: var(--cds-toggle-off, #8d8d8d);
  border: none;
  cursor: pointer;
  transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9), box-shadow 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  background-color: var(--cds-icon-on-color, #ffffff);
  transition: transform 70ms cubic-bezier(0.2, 0, 0.38, 0.9), background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:checked {
  background-color: var(--cds-support-success, #24a148);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:checked::before {
  transform: translateX(1.5rem);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:hover:not(:disabled)::before {
  background-color: var(--cds-icon-on-color, #ffffff);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  background-color: var(--cds-button-disabled, #c6c6c6);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:disabled::before {
  background-color: var(--cds-icon-disabled, rgba(22, 22, 22, 0.25));
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td label:has(input[role=switch]) span {
  display: none;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td label:has(input[role=switch]) {
  /* checked \u2192 show TRUE (second span) */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td label:has(input[role=switch]) input[role=switch]:checked + span + span {
  display: inline;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td label:has(input[role=switch]) {
  /* unchecked \u2192 show FALSE (first span) */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td label:has(input[role=switch]) input[role=switch]:not(:checked) + span {
  display: inline;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-secondary, #525252);
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
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td {
  /**
   * Range Inputs
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  background: transparent;
  outline: none;
  cursor: pointer;
  margin: 0.5rem 0;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:focus {
  outline: none;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  background: var(--cds-border-strong-01, #8d8d8d);
  border: none;
  border-radius: 0;
  cursor: pointer;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: var(--cds-icon-primary, #161616);
  border: 2px solid var(--cds-background, #ffffff);
  border-radius: 50%;
  cursor: pointer;
  margin-top: -6px;
  box-shadow: none;
  transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9), box-shadow 70ms cubic-bezier(0.2, 0, 0.38, 0.9), transform 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]::-moz-range-track {
  width: 100%;
  height: 2px;
  background: var(--cds-border-strong-01, #8d8d8d);
  border: none;
  border-radius: 0;
  cursor: pointer;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: var(--cds-icon-primary, #161616);
  border: 2px solid var(--cds-background, #ffffff);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: none;
  transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9), box-shadow 70ms cubic-bezier(0.2, 0, 0.38, 0.9), transform 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]::-moz-range-progress {
  height: 2px;
  background: var(--cds-border-interactive, #0f62fe);
  border-radius: 0;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]::-ms-track {
  width: 100%;
  height: 2px;
  background: transparent;
  border-color: transparent;
  color: transparent;
  cursor: pointer;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]::-ms-fill-lower {
  background: var(--cds-border-interactive, #0f62fe);
  border: none;
  border-radius: 0;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]::-ms-fill-upper {
  background: var(--cds-border-strong-01, #8d8d8d);
  border: none;
  border-radius: 0;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]::-ms-thumb {
  width: 14px;
  height: 14px;
  background: var(--cds-icon-primary, #161616);
  border: 2px solid var(--cds-background, #ffffff);
  border-radius: 50%;
  cursor: pointer;
  margin-top: 0;
  box-shadow: none;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]::-ms-tooltip {
  display: none;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:hover::-webkit-slider-thumb {
  background: var(--cds-icon-secondary, #525252);
  transform: scale(1.1);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:hover::-moz-range-thumb {
  background: var(--cds-icon-secondary, #525252);
  transform: scale(1.1);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:hover::-ms-thumb {
  background: var(--cds-icon-secondary, #525252);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 2px var(--cds-focus, #0f62fe);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 2px var(--cds-focus, #0f62fe);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:focus::-ms-thumb {
  box-shadow: 0 0 0 2px var(--cds-focus, #0f62fe);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:active::-webkit-slider-thumb {
  background: var(--cds-icon-primary, #161616);
  transform: scale(1);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:active::-moz-range-thumb {
  background: var(--cds-icon-primary, #161616);
  transform: scale(1);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:active::-ms-thumb {
  background: var(--cds-icon-primary, #161616);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:disabled::-webkit-slider-runnable-track {
  cursor: not-allowed;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:disabled::-webkit-slider-thumb {
  cursor: not-allowed;
  background: var(--cds-icon-disabled, rgba(22, 22, 22, 0.25));
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:disabled::-moz-range-track {
  cursor: not-allowed;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:disabled::-moz-range-thumb {
  cursor: not-allowed;
  background: var(--cds-icon-disabled, rgba(22, 22, 22, 0.25));
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:disabled::-ms-track {
  cursor: not-allowed;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:disabled::-ms-fill-lower, #panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:disabled::-ms-fill-upper {
  background: var(--cds-border-subtle);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=range]:disabled::-ms-thumb {
  cursor: not-allowed;
  background: var(--cds-icon-disabled, rgba(22, 22, 22, 0.25));
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body {
  /**
   * Array/Object Item Rows
   * Expandable rows for complex control types
   */
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr[title~=items] {
  background: var(--cds-layer-01, #f4f4f4) !important;
  box-shadow: inset 0px 1px 0px 1px var(--cds-border-subtle);
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
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr[title~=items] {
  box-shadow: inset 0 1px 0 0 var(--cds-border-subtle-01, #c6c6c6);
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
#panel-tab-content > div:has(.docblock-source) {
  height: 100%;
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
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button {
  margin: 0;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button[disabled] {
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button[disabled]:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) {
  /**
   * Interactions List
   * List of interaction steps from play function
   */
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) div[aria-label="Interactions list"] div:has(> button[aria-label="Interaction step"]) {
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
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
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
}
#panel-tab-content div:has(> div > [data-type=violations]) button:not([role=tab]):hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) button:not([role=tab]):active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) button:not([role=tab]):focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) {
  /**
   * A11y Tab Buttons
   * Violations, Passes, Incomplete tabs
   */
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab] {
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
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
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
  min-block-size: 1.5rem;
  min-inline-size: 1.5rem;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
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
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tablist] button:hover,
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tabpanel] button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tablist] button:active,
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tabpanel] button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tablist] button:focus,
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tabpanel] button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tablist] button,
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tabpanel] button {
  color: var(--cds-text-secondary, #525252);
  box-shadow: inset 0 0 0 1px var(--cds-border-subtle-01, #c6c6c6);
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbIl9taXhpbnMuc2NzcyIsIl9wYW5lbC1zaGFyZWQuc2NzcyIsInBhbmVsLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi90aGVtZXMvc2Nzcy9nZW5lcmF0ZWQvX3Rva2Vucy5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXJib24vc3R5bGVzL3Njc3MvdGhlbWUvX3RoZW1lLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi9sYXlvdXQvc2Nzcy9nZW5lcmF0ZWQvX3NwYWNpbmcuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3N0eWxlcy9zY3NzL2NvbXBvbmVudHMvYnV0dG9uL190b2tlbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBNENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkJBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUE0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQ3BWQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0hBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQzlWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7RUFDRTtFQUNBO0VBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBR0E7RUFDRSxPQ3VMYTs7QURoTWpCO0FBWUU7QUFBQTtBQUFBO0FBQUE7O0FBS0U7RUFDRSxZQ2tLVzs7QURwTGpCO0FBc0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTs7QUFLRTtFQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFNQSxrQkNQSztFRFFMLGNDdUdhO0VEdEdiLE9Dc0pXOztBRHBKWDtFRlVKO0VBQ0E7RUFJQTtFQUNBO0VBS0UsZ0JBRGE7RUFFYixpQkFGYTs7QUFPYjtFQUNFOztBQUdGO0VBQ0U7O0FBTUY7RUFDRTs7QUVuRk47QUFrREU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUZBQTtFQUNBO0VBSUE7RUFDQTtFQUtFLGdCQURhO0VBRWIsaUJBRmE7O0FBT2I7RUFDRTs7QUFHRjtFQUNFOztBQU1GO0VBQ0U7O0FFbkZOO0FBMERFO0FBQUE7QUFBQTtBQUFBOztBRjJNQTtFQUNFOztBQUdGO0VBQ0UsT0c3RVc7O0FENUhYO0VBQ0Usa0JFdERFOztBRmtETjtBQU9FO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUFDRSxZQ3RFSztFRHVFTCxjQ2dFVztFRC9EWCxPQytHUztBRDdHVDtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtBO0VGcU1OO0VBQ0EsT0c5RmU7O0FIZ0dmO0FBQUE7QUFBQTtBQUFBO0VBS0Usa0JJelJJO0VKMFJKOztBRTlNSTtFQUVFLGNDc0RTOztBRGxFYjtBQWVFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VGOE1OLE9HMUNjOztBRHZMVjtBQXVCRTtBQUFBO0FBQUE7QUFBQTs7QUR0RU47QUFBQTtBQUFBO0FBQUE7RUFJRTtFQUNBO0VBQ0Esa0JFSk87O0FGUVQ7QUFBQTtBQUFBO0VEK0VBO0VDM0VFLE9FbUphOztBRi9JZjtBQUFBO0FBQUE7RUFHRSxPRTRJYTs7QUZ4SWY7QUFBQTtBQUFBO0FBQUE7RUFJRSxrQkVsQmE7O0FGc0JmO0FBQUE7QUFBQTtBQUFBO0VBSUUsa0JFaENjOztBRm9DaEI7QUFBQTtBQUFBO0FBQUE7RUQ2REU7O0FFdkRFO0FBNkJFO0FBQUE7QUFBQTs7QUFHQTtFRG9DTjtFQUNBO0VBQ0E7RUFHQTtFQUNBO0VBQ0E7RUFHQTtFQUNBLGtCRXBKVztFRnVKWDtFQUNBO0VBR0EsWUFDRTs7QUFRRjtFQUNFLGtCRWtFVztFRmpFWCxjRWlFVzs7QUYvRFg7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBS0o7RUFDRTtFQUNBOztBQUlGO0VBQ0UsY0U2Q2E7O0FGekNmO0VBQ0U7RUFDQTtFQUNBLGNFa0RZOztBRmhEWjtFQUNFLGtCRStDVTs7QURqTFY7QUFvQ0U7QUFBQTtBQUFBOztBQUdBO0VEM0JOO0VBQ0E7RUFDQTtFQUdBO0VBQ0E7RUFDQTtFQUdBO0VBQ0Esa0JFNUZXO0VGK0ZYO0VBQ0E7RUFHQSxZQUNFOztBQVFGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxrQkVtSFc7RUZsSFg7O0FBSUY7RUFDRTtFQUNBOztBQ3RERTtBQTJDRTtBQUFBO0FBQUE7O0FEb0dKO0VBQ0UsT0U5Qlc7O0FGbUNmO0VBQ0Usa0JFM05TO0VGNE5ULGVJbk5TO0VKb05UOztBQUlGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxrQkVrTFM7RUZqTFQ7RUFDQTtFQUNBLFlBQ0U7O0FBTUY7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLGtCRVhVO0VGWVYsWUFDRTs7QUFPSjtFQUNFLGtCRU5ZOztBRlFaO0VBQ0U7O0FBS0o7RUFDRTtFQUNBOztBQUtBO0VBQ0Usa0JFckNROztBRjBDWjtFQUNFO0VBQ0E7RUFDQSxrQktzSFk7O0FMcEhaO0VBQ0Usa0JFMUNROztBRmdEWjtFQUNFOztBQUZKO0FBS0U7O0FBQ0E7RUFDRTtFQUNBO0VBQ0E7RUFDQSxPRXhIVzs7QUY4R2Y7QUFhRTs7QUFDQTtFQUNFO0VBQ0E7RUFDQTtFQUNBLE9FaElXOztBRGxIWDtBQWdERTtBQUFBO0FBQUE7O0FENE1OO0FBQUE7RUFFRTs7QUFLQTtBQUFBO0FBQUE7RUFFRTs7QUNyUUE7QUFxREU7QUFBQTtBQUFBOztBRDROTjtFQUVFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBR0E7RUFDRTs7QUFLRjtFQUNFO0VBQ0E7RUFDQSxZRWxOYTtFRm1OYjtFQUNBO0VBQ0E7O0FBSUY7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBLFlFaEpTO0VGaUpUO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxZQUNFOztBQVVKO0VBQ0U7RUFDQTtFQUNBLFlFbFBhO0VGbVBiO0VBQ0E7RUFDQTs7QUFJRjtFQUNFO0VBQ0E7RUFDQSxZRTlLUztFRitLVDtFQUNBO0VBQ0E7RUFDQTtFQUNBLFlBQ0U7O0FBU0o7RUFDRTtFQUNBLFlFeFBlO0VGeVBmOztBQUtGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUlGO0VBQ0UsWUV6UWU7RUYwUWY7RUFDQTs7QUFJRjtFQUNFLFlFclNhO0VGc1NiO0VBQ0E7O0FBSUY7RUFDRTtFQUNBO0VBQ0EsWUVoT1M7RUZpT1Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFJRjtFQUNFOztBQUlGO0VBQ0UsWUU1T1c7RUY2T1g7O0FBR0Y7RUFDRSxZRWpQVztFRmtQWDs7QUFHRjtFQUNFLFlFdFBXOztBRjBQYjtFQUNFOztBQUdGO0VBQ0U7O0FBR0Y7RUFDRTs7QUFJRjtFQUNFLFlFM1FTO0VGNFFUOztBQUdGO0VBQ0UsWUVoUlM7RUZpUlQ7O0FBR0Y7RUFDRSxZRXJSUzs7QUZ5Ulg7RUFDRTtFQUNBOztBQUVBO0VBQ0U7O0FBR0Y7RUFDRTtFQUNBLFlFcFJROztBRnVSVjtFQUNFOztBQUdGO0VBQ0U7RUFDQSxZRTdSUTs7QUZnU1Y7RUFDRTs7QUFHRjtFQUVFLFlHNWdCUTs7QUgrZ0JWO0VBQ0U7RUFDQSxZRTNTUTs7QUR0TFo7QUFnRUU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUYwS0o7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7O0FBR0Y7RUFDRTtFQUNBO0VBQ0EsT0dySVc7O0FIdUlYO0VBQ0UsT0dyRlM7O0FId0ZYO0VBQ0U7O0FFNUxBO0VBRUU7O0FBL0lSO0FBb0pFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0Usa0JDaEpTO0VEaUpUO0VBQ0E7O0FBR0Y7RUFDRTs7QUEvSko7QUFrS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBOztBQUdBO0VBQ0U7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFO0VBQ0E7RUFDQTtFQUNBLFlDckpLOztBRHVKTDtFQUNFLE9DSU87O0FEWFg7QUFVRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFLGdCR2hLSztFSGlLTCxpQkd2Sks7RUh3Skw7RUFDQTs7QUFsQko7QUFxQkU7QUFBQTtBQUFBOztBQUdBO0VBQ0U7O0FBekJKO0FBNEJFO0FBQUE7QUFBQTs7QUFHQTtFRjNKSjtFQUNBO0VBSUE7RUFDQTtFQUtFLGdCQURhO0VBRWIsaUJBRmE7O0FBT2I7RUFDRTs7QUFHRjtFQUNFOztBQU1GO0VBQ0U7O0FFOEhBO0VBRUU7O0FBRUE7RUYvSk47RUFDQTtFQUlBO0VBQ0E7RUFLRSxnQkFEYTtFQUViLGlCQUZhOztBQWtCYjtFQUNFOztBRXdGSjtBQWdERTtBQUFBO0FBQUE7QUFBQTs7QUFLRTtFRjFLSjtFQUNBO0VBSUE7RUFDQTs7QUFXRTtFQUNFOztBQUdGO0VBQ0U7O0FFd0pBO0VBQ0U7O0FBck9SO0FBeU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0Usa0JDcE5PO0VEcU5QO0VBQ0E7RUFDQTs7QUFFQTtFQUNFOztBQVBKO0FBVUU7QUFBQTtBQUFBO0FBQUE7O0FBSUE7RUY1TUY7RUFDQTtFQUlBO0VBQ0E7RUFLRSxnQkFEYTtFQUViLGlCQUZhOztBQU9iO0VBQ0U7O0FBR0Y7RUFDRTs7QUFNRjtFQUNFOztBRWlLSjtBQWtCRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFRnBORjtFQUNBO0VBSUE7RUFDQTtFQUtFLGdCQURhO0VBRWIsaUJBRmE7O0FBT2I7RUFDRTs7QUFHRjtFQUNFOztBRThMRjtFRjNIRjs7QUFFQTtFQWZFO0VBQ0E7RUFnQkE7RUFDQTs7QUVzSEE7QUFHRTtBQUFBO0FBQUE7O0FBR0E7RUZ4R0o7RUFNRSxrQklySlk7RUpzSlosT0dpQmE7O0FEb0RmO0FBaUNFO0FBQUE7QUFBQTs7QUFHQTtFRjNIRjtFQUNBO0VBQ0E7O0FFNEhJO0VGbkhKO0VBR0Usa0JHWWlCO0VIWGpCLE9HbUNZOztBRC9NaEI7QUFpU0U7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFQUNFLGtCQzFRSzs7QUQ0UUw7RUFDRSxPQ3BLTTtFRHFLTixrQkNyUVM7O0FEdVFUO0VBQ0Usa0JDeFFPOztBRDZRVDtFQUNFLE9DeEhPOztBRDRIWDtFQUNFLE9DN0hTOztBRDBHYjtBQXNCRTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtFRjlRSjtFQUNBO0VBSUE7RUFDQTtFQUtFLGdCQURhO0VBRWIsaUJBRmE7O0FBT2I7RUFDRTs7QUFHRjtFQUNFOztBQU1GO0VBQ0U7O0FFa05KO0FBb0NFO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0Usa0JDN1NLO0FEK1NMO0FBQUE7QUFBQTtBQUFBOztBQUlBO0VBQ0UsT0M3SE87O0FEK0hQO0VBQ0U7O0FBRUE7RUFDRSxNQ25JRzs7QUR5SVA7RUFDRSxPQ2xLTzs7QUQ2SWI7QUF5QkU7QUFBQTtBQUFBO0FBQUE7O0FBTUU7QUFBQTtFRnRUTjtFQUNBO0VBSUE7RUFDQTs7QUFXRTtBQUFBO0VBQ0U7O0FBR0Y7QUFBQTtFQUNFOztBQU1GO0FBQUE7RUFDRTs7QUV5UkU7QUFBQTtFQUVFLE9DOUtPO0VEK0tQOztBQTFFUjtBQStFRTtBQUFBO0FBQUE7O0FBSUU7RUFDRTtFQUNBLGNDMU9XIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcInNhc3M6bGlzdFwiO1xuQHVzZSBcInNhc3M6bWFwXCI7XG5AdXNlIFwiQGNhcmJvbi9sYXlvdXRcIjtcbkB1c2UgXCJAY2FyYm9uL3N0eWxlcy9zY3NzL3RoZW1lXCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy9zcGFjaW5nXCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90eXBlXCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy9jb21wb25lbnRzL2J1dHRvbi90b2tlbnNcIiBhcyBidXR0b24tdG9rZW5zO1xuQHVzZSBcImRlZmF1bHRzXCI7XG5cbi8vIEJ1dHRvbiBzaXplIG1hcCBmb3IgRFJZIHByaW5jaXBsZVxuJGJ1dHRvbi1zaXplczogKFxuICBcInhzXCI6IHNwYWNpbmcuJHNwYWNpbmctMDUsXG4gIFwic21cIjogc3BhY2luZy4kc3BhY2luZy0wNixcbiAgXCJtZFwiOiBzcGFjaW5nLiRzcGFjaW5nLTA3LFxuICBcImxnXCI6IHNwYWNpbmcuJHNwYWNpbmctMDgsXG4gIFwieGxcIjogc3BhY2luZy4kc3BhY2luZy0wOSxcbiAgXCIyeGxcIjogc3BhY2luZy4kc3BhY2luZy0xMCxcbik7XG5cbi8vIEJ1dHRvbiBraW5kIGNvbmZpZ3VyYXRpb25zXG4kYnV0dG9uLWtpbmRzOiAoXG4gIFwicHJpbWFyeVwiOiAoXG4gICAgXCJiYWNrZ3JvdW5kXCI6IGJ1dHRvbi10b2tlbnMuJGJ1dHRvbi1wcmltYXJ5LFxuICAgIFwiY29sb3JcIjogdGhlbWUuJHRleHQtb24tY29sb3IsXG4gICAgXCJob3ZlclwiOiBidXR0b24tdG9rZW5zLiRidXR0b24tcHJpbWFyeS1ob3ZlcixcbiAgICBcImFjdGl2ZVwiOiBidXR0b24tdG9rZW5zLiRidXR0b24tcHJpbWFyeS1hY3RpdmUsXG4gICAgXCJmb2N1c1wiOiB0aGVtZS4kZm9jdXMtaW52ZXJzZSxcbiAgKSxcbiAgXCJzZWNvbmRhcnlcIjogKFxuICAgIFwiYmFja2dyb3VuZFwiOiBidXR0b24tdG9rZW5zLiRidXR0b24tc2Vjb25kYXJ5LFxuICAgIFwiY29sb3JcIjogdGhlbWUuJHRleHQtb24tY29sb3IsXG4gICAgXCJob3ZlclwiOiBidXR0b24tdG9rZW5zLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLFxuICAgIFwiYWN0aXZlXCI6IGJ1dHRvbi10b2tlbnMuJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLFxuICAgIFwiZm9jdXNcIjogdGhlbWUuJGZvY3VzLFxuICApLFxuICBcImdob3N0XCI6IChcbiAgICBcImJhY2tncm91bmRcIjogdHJhbnNwYXJlbnQsXG4gICAgXCJjb2xvclwiOiB0aGVtZS4kdGV4dC1wcmltYXJ5LFxuICAgIFwiaG92ZXJcIjogdGhlbWUuJGJhY2tncm91bmQtaG92ZXIsXG4gICAgXCJhY3RpdmVcIjogdGhlbWUuJGJhY2tncm91bmQtYWN0aXZlLFxuICAgIFwiZm9jdXNcIjogdGhlbWUuJGZvY3VzLFxuICApLFxuKTtcblxuLyoqXG4gKiBVbmlmaWVkIEJ1dHRvbiBNaXhpblxuICogUHJvdmlkZXMgY29tcHJlaGVuc2l2ZSBidXR0b24gc3R5bGluZyB3aXRoIGFsbCBjdXN0b21pemF0aW9uIG9wdGlvbnNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gJHNpemUgLSBTaXplIGxldmVsOiBcInhzXCIsIFwic21cIiwgXCJtZFwiLCBcImxnXCIsIFwieGxcIiwgXCIyeGxcIiwgb3IgbnVsbCB0byBza2lwIHNpemluZyAoZGVmYXVsdDogXCJsZ1wiKVxuICogQHBhcmFtIHtzdHJpbmd9ICRraW5kIC0gQnV0dG9uIGtpbmQ6IFwiZ2hvc3RcIiwgXCJwcmltYXJ5XCIsIFwic2Vjb25kYXJ5XCIgKGRlZmF1bHQ6IFwiZ2hvc3RcIilcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gJGZvY3VzIC0gV2hldGhlciB0byBpbmNsdWRlIGZvY3VzIHN0eWxlcyAoZGVmYXVsdDogdHJ1ZSlcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gJHN0YXRlcyAtIFdoZXRoZXIgdG8gaW5jbHVkZSBob3Zlci9hY3RpdmUgc3RhdGVzIChkZWZhdWx0OiB0cnVlKVxuICpcbiAqIEBleGFtcGxlIEJhc2ljIGJ1dHRvbiB3aXRoIGRlZmF1bHQgc2V0dGluZ3NcbiAqICAgQGluY2x1ZGUgYnV0dG9uKCk7XG4gKlxuICogQGV4YW1wbGUgQnV0dG9uIHdpdGhvdXQgZm9jdXMgc3R5bGVzXG4gKiAgIEBpbmNsdWRlIGJ1dHRvbihcImxnXCIsIFwiZ2hvc3RcIiwgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlIFByaW1hcnkgYnV0dG9uIHdpdGggbWVkaXVtIHNpemVcbiAqICAgQGluY2x1ZGUgYnV0dG9uKFwibWRcIiwgXCJwcmltYXJ5XCIpO1xuICpcbiAqIEBleGFtcGxlIEJ1dHRvbiB3aXRoIG9ubHkgcmVzZXQgc3R5bGVzIChubyBzdGF0ZXMpXG4gKiAgIEBpbmNsdWRlIGJ1dHRvbihudWxsLCBcImdob3N0XCIsIHRydWUsIGZhbHNlKTtcbiAqL1xuQG1peGluIGJ1dHRvbigkc2l6ZTogXCJsZ1wiLCAka2luZDogXCJnaG9zdFwiLCAkZm9jdXM6IHRydWUsICRzdGF0ZXM6IHRydWUpIHtcbiAgLy8gQmFzZSByZXNldCBzdHlsZXNcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcblxuICAvLyBBcHBseSBraW5kLXNwZWNpZmljIGJhc2Ugc3R5bGVzXG4gICRraW5kLWNvbmZpZzogbWFwLmdldCgkYnV0dG9uLWtpbmRzLCAka2luZCk7XG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC5nZXQoJGtpbmQtY29uZmlnLCBcImJhY2tncm91bmRcIik7XG4gIGNvbG9yOiBtYXAuZ2V0KCRraW5kLWNvbmZpZywgXCJjb2xvclwiKSAhaW1wb3J0YW50O1xuXG4gIC8vIEFwcGx5IHNpemluZyBpZiBzcGVjaWZpZWRcbiAgQGlmICRzaXplIGFuZCBtYXAuaGFzLWtleSgkYnV0dG9uLXNpemVzLCAkc2l6ZSkge1xuICAgICRzaXplLXZhbHVlOiBtYXAuZ2V0KCRidXR0b24tc2l6ZXMsICRzaXplKTtcbiAgICBtaW4tYmxvY2stc2l6ZTogJHNpemUtdmFsdWU7XG4gICAgbWluLWlubGluZS1zaXplOiAkc2l6ZS12YWx1ZTtcbiAgfVxuXG4gIC8vIEFwcGx5IGludGVyYWN0aXZlIHN0YXRlcyBpZiBzcGVjaWZpZWRcbiAgQGlmICRzdGF0ZXMge1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLmdldCgka2luZC1jb25maWcsIFwiaG92ZXJcIikgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAuZ2V0KCRraW5kLWNvbmZpZywgXCJhY3RpdmVcIikgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAvLyBBcHBseSBmb2N1cyBzdHlsZXMgaWYgc3BlY2lmaWVkXG4gIEBpZiAkZm9jdXMge1xuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IG1hcC5nZXQoJGtpbmQtY29uZmlnLCBcImZvY3VzXCIpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSW5wdXQgRmllbGQgU3R5bGluZ1xuICogUHJvdmlkZXMgY29uc2lzdGVudCBzdHlsaW5nIGZvciBpbnB1dCBlbGVtZW50cyAodGV4dCwgdGV4dGFyZWEsIHNlbGVjdClcbiAqIEBwYXJhbSB7c3RyaW5nfSAkbGF5ZXIgLSBMYXllciBsZXZlbCBmb3IgdGhlIGlucHV0IGJhY2tncm91bmRcbiAqL1xuQG1peGluIGlucHV0LWZpZWxkKCRsYXllcjogXCJsYXllci0wMVwiKSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgQGlmICRsYXllciA9PSBcImxheWVyLTAyXCIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsYXllci0wMjtcbiAgfSBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyLTAxO1xuICB9XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG4gIH1cblxuICAvLyBBcHBseSBpbnRlcmFjdGl2ZSBzdGF0ZXMgdXNpbmcgdW5pZmllZCBidXR0b24gbWl4aW5cbiAgQGluY2x1ZGUgYnV0dG9uKG51bGwsIFwiZ2hvc3RcIiwgZmFsc2UsIHRydWUpO1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCB0aGVtZS4kZm9jdXM7XG4gIH1cbn1cblxuLyoqXG4gKiBCb3JkZXIgQm90dG9tIElucHV0XG4gKiBBZGRzIGJvdHRvbSBib3JkZXIgZm9yIHRleHQgaW5wdXRzIGZvbGxvd2luZyBDYXJib24gZGVzaWduIHBhdHRlcm5cbiAqL1xuQG1peGluIGlucHV0LWJvcmRlci1ib3R0b20ge1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCB0aGVtZS4kYm9yZGVyLXN0cm9uZy0wMTtcbn1cblxuLyoqXG4gKiBGb2N1cyBTdGF0ZVxuICogQXBwbGllcyBjb25zaXN0ZW50IGZvY3VzIHN0eWxpbmcgYWNyb3NzIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSAkdHlwZSAtIFR5cGUgb2YgZm9jdXMgKGluc2V0LCBvdXRsaW5lKVxuICovXG5AbWl4aW4gZm9jdXMtc3RhdGUoJHR5cGU6IFwiaW5zZXRcIikge1xuICBAaWYgJHR5cGUgPT0gXCJvdXRsaW5lXCIge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCB0aGVtZS4kZm9jdXM7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIH0gQGVsc2Uge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCB0aGVtZS4kZm9jdXMgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKipcbiAqIFRhYiBCdXR0b24gU3R5bGluZ1xuICogQ29uc2lzdGVudCBzdHlsaW5nIGZvciB0YWIgYnV0dG9ucyB3aXRoIGFjdGl2ZSBzdGF0ZSBpbmRpY2F0b3JcbiAqL1xuQG1peGluIHRhYi1idXR0b24ge1xuICBAaW5jbHVkZSBidXR0b24oXCJsZ1wiLCBcImdob3N0XCIsIGZhbHNlKTtcbiAgZm9udC13ZWlnaHQ6IHVuc2V0O1xuXG4gICY6Zm9jdXMge1xuICAgIEBpbmNsdWRlIGZvY3VzLXN0YXRlKFwib3V0bGluZVwiKTtcbiAgICBib3JkZXItd2lkdGg6IDJweCAwO1xuICAgIGJvcmRlci1jb2xvcjogdW5zZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBBY3RpdmUgVGFiIEluZGljYXRvclxuICogQXBwbGllcyBib3R0b20gYm9yZGVyIHRvIGluZGljYXRlIGFjdGl2ZSB0YWIgc3RhdGVcbiAqL1xuQG1peGluIHRhYi1hY3RpdmUge1xuICBib3JkZXItd2lkdGg6IDJweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRoZW1lLiRib3JkZXItaW50ZXJhY3RpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKipcbiAqIEJhZGdlL1RhZyBTdHlsaW5nXG4gKiBGb3IgY291bnQgaW5kaWNhdG9ycyBhbmQgdGFnc1xuICogQHBhcmFtIHtib29sZWFufSAkYWN0aXZlIC0gV2hldGhlciB0aGUgYmFkZ2UgaXMgb24gYW4gYWN0aXZlIGVsZW1lbnRcbiAqL1xuQG1peGluIGJhZGdlKCRhY3RpdmU6IGZhbHNlKSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgQGlmICRhY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRib3JkZXItaW50ZXJhY3RpdmU7XG4gICAgY29sb3I6IHRoZW1lLiR0ZXh0LW9uLWNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kYm9yZGVyLXN1YnRsZTtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuICB9XG59XG5cbkBtaXhpbiBsaXN0IHtcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogXCLigJRcIjtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIG1heC1pbmxpbmUtc2l6ZTogZGVmYXVsdHMuJG1heC1pbmxpbmUtc2l6ZTtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuICB9XG5cbiAgdWwgbGkge1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHNwYWNpbmcuJHNwYWNpbmctMDU7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHNwYWNpbmcuJHNwYWNpbmctMDU7XG4gIH1cblxuICB1bCBsaSBwLFxuICBvbCBsaSBwIHtcbiAgICBtYXJnaW4tYmxvY2s6IDA7XG4gIH1cblxuICBvbCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogc3BhY2luZy4kc3BhY2luZy0wNTtcbiAgfVxuXG4gIG9sIGxpIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBzcGFjaW5nLiRzcGFjaW5nLTA1O1xuICB9XG5cbiAgb2wgb2wge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItYWxwaGE7XG4gIH1cblxuICBvbCBvbCBvbCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1yb21hbjtcbiAgfVxufVxuXG5AbWl4aW4gaGVhZGluZyB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNiB7XG4gICAgJHNwYWNpbmdzOiAoXG4gICAgICBzcGFjaW5nLiRzcGFjaW5nLTA3LFxuICAgICAgc3BhY2luZy4kc3BhY2luZy0wNixcbiAgICAgIHNwYWNpbmcuJHNwYWNpbmctMDUsXG4gICAgICBzcGFjaW5nLiRzcGFjaW5nLTA0LFxuICAgICAgc3BhY2luZy4kc3BhY2luZy0wMyxcbiAgICAgIHNwYWNpbmcuJHNwYWNpbmctMDJcbiAgICApO1xuXG4gICAgaCN7JGl9IHtcbiAgICAgIEBpbmNsdWRlIHR5cGUudHlwZS1zdHlsZShcImhlYWRpbmctMCN7NyAtICRpfVwiKTtcbiAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogbGlzdC5udGgoJHNwYWNpbmdzLCAkaSk7XG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiBzcGFjaW5nLiRzcGFjaW5nLTAzO1xuICAgICAgY29sb3I6IHRoZW1lLiR0ZXh0LXByaW1hcnk7XG4gICAgfVxuICB9XG4gIGgyIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG59XG5cbkBtaXhpbiBwYXJhZ3JhcGgge1xuICBwIHtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuICB9XG59XG5cbkBtaXhpbiBob3Jpem9udGFsLXJ1bGUge1xuICBociB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRoZW1lLiRib3JkZXItc3VidGxlO1xuICAgIG1hcmdpbjogc3BhY2luZy4kc3BhY2luZy0wMyAwO1xuICB9XG59XG5cbi8qKlxuICogQXJnVGFibGUgQmFzZVxuICogQmFzZSBzdHlsaW5nIGZvciBjb250cm9scy9wcm9wcyB0YWJsZXNcbiAqIFVzZWQgaW4gYm90aCBkb2NzLnNjc3MgYW5kIHBhbmVsLnNjc3NcbiAqL1xuQG1peGluIGFyZ3N0YWJsZS1iYXNlIHtcbiAgKiB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gID4gdGhlYWQuZG9jYmxvY2stYXJnc3RhYmxlLWhlYWQgPiB0ciA+IHRoID4gc3BhbiB7XG4gICAgY29sb3I6IHRoZW1lLiR0ZXh0LXByaW1hcnk7XG4gIH1cbn1cblxuLyoqXG4gKiBBcmdUYWJsZSBCb2R5IFJvd1xuICogU3RhbmRhcmQgY29udHJvbCByb3dzIGluIGFyZ3N0YWJsZVxuICovXG5AbWl4aW4gYXJnc3RhYmxlLXJvdyB7XG4gIGJhY2tncm91bmQ6IHRoZW1lLiRiYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6IHRoZW1lLiRib3JkZXItc3VidGxlO1xuICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xufVxuXG4vKipcbiAqIEFyZ1RhYmxlIFR5cGUgQmFkZ2VcbiAqIFR5cGUgaW5mb3JtYXRpb24gYmFkZ2VzIChzdHJpbmcsIG51bWJlciwgZXRjLilcbiAqL1xuQG1peGluIGFyZ3N0YWJsZS10eXBlLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeTtcblxuICAuY3NzLW1rampwcyxcbiAgLmNzcy1vMWQ3a28sXG4gIC5jc3MtM3FtaDJiLFxuICAuY3NzLTZxN3NuaSB7XG4gICAgLy8gdG9kbyBjaGVjayBmb3IgYWx0ZXJuYXRpdmVzXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRoZW1lLiRib3JkZXItc3VidGxlO1xuICB9XG59XG5cbi8qKlxuICogQXJnVGFibGUgUmVxdWlyZWQgSW5kaWNhdG9yXG4gKiBTaG93cyB3aGljaCBwcm9wcyBhcmUgcmVxdWlyZWRcbiAqL1xuQG1peGluIGFyZ3N0YWJsZS1yZXF1aXJlZCB7XG4gIGNvbG9yOiB0aGVtZS4kc3VwcG9ydC1lcnJvcjtcbn1cblxuLyoqXG4gKiBBcmdUYWJsZSBJdGVtIFJvd1xuICogRXhwYW5kYWJsZSByb3dzIGZvciBhcnJheXMvb2JqZWN0c1xuICovXG5AbWl4aW4gYXJnc3RhYmxlLWl0ZW0tcm93IHtcbiAgYmFja2dyb3VuZDogdGhlbWUuJGxheWVyLTAxICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDFweCB0aGVtZS4kYm9yZGVyLXN1YnRsZTtcblxuICAmOmhhcyhidXR0b246Zm9jdXMpIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggdGhlbWUuJGZvY3VzICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuJGxheWVyLTAxICFpbXBvcnRhbnQ7XG4gIH1cblxuICA+IHRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtcHJpbWFyeTtcblxuICAgID4gc3BhbiA+IHN2ZyB7XG4gICAgICBjb2xvcjogdGhlbWUuJGljb24tcHJpbWFyeTtcbiAgICB9XG5cbiAgICA+IGJ1dHRvbjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIExpbmsgU3R5bGluZ1xuICogUHJvdmlkZXMgY29uc2lzdGVudCBhbmNob3IgdGFnIHN0eWxpbmcgd2l0aCBDYXJib24gdGhlbWUgdG9rZW5zXG4gKiBJbmNsdWRlcyBob3ZlciwgYWN0aXZlLCB2aXNpdGVkLCBhbmQgZm9jdXMgc3RhdGVzXG4gKi9cbkBtaXhpbiBsaW5rIHtcbiAgYSB7XG4gICAgY29sb3I6IHRoZW1lLiRsaW5rLXByaW1hcnk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdGhlbWUuJGxpbmstcHJpbWFyeS1ob3ZlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGNvbG9yOiB0aGVtZS4kbGluay1wcmltYXJ5O1xuICAgIH1cblxuICAgICY6dmlzaXRlZCB7XG4gICAgICBjb2xvcjogdGhlbWUuJGxpbmstdmlzaXRlZDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCB0aGVtZS4kZm9jdXM7XG4gICAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gY29kZSB7XG4gIGNvZGUge1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1wcmltYXJ5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsYXllci0wMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0aGVtZS4kYm9yZGVyLXN1YnRsZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG4iLCJAdXNlIFwiQGNhcmJvbi9sYXlvdXRcIjtcbkB1c2UgXCJAY2FyYm9uL3N0eWxlcy9zY3NzL3RoZW1lXCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy9zcGFjaW5nXCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy9jb21wb25lbnRzL2J1dHRvbi90b2tlbnNcIiBhcyBidXR0b24tdG9rZW5zO1xuQHVzZSBcIm1peGluc1wiO1xuQHVzZSBcImRlZmF1bHRzXCI7XG5cbi8qKlxuICogU0hBUkVEIFBBTkVMIENPTVBPTkVOVCBTVFlMRVNcbiAqIFJldXNhYmxlIHN0eWxlcyBmb3IgYnV0dG9ucywgZm9ybSBjb250cm9scywgYW5kIGNvbW1vbiBwYW5lbCBlbGVtZW50c1xuICovXG5cbi8qKlxuICogU3RhbmRhcmQgUGFuZWwgQnV0dG9uXG4gKiBVc2VkIHRocm91Z2hvdXQgcGFuZWwgdGFicyAoQ29udHJvbHMsIEExMXksIGV0Yy4pXG4gKiBAcGFyYW0ge3N0cmluZ30gJHNpemUgLSBCdXR0b24gc2l6ZSAoZGVmYXVsdDogXCJzbVwiKVxuICovXG5AbWl4aW4gcGFuZWwtYnV0dG9uKCRzaXplOiBcInNtXCIpIHtcbiAgQGluY2x1ZGUgbWl4aW5zLmJ1dHRvbigkc2l6ZSk7XG59XG5cbi8qKlxuICogRm9ybSBDb250cm9sIEJhc2UgU3R5bGVzXG4gKiBTaGFyZWQgc3R5bGluZyBmb3IgaW5wdXRzLCB0ZXh0YXJlYXMsIGFuZCBzZWxlY3RzXG4gKiBDb21iaW5lcyBpbnB1dCBmaWVsZCBhbmQgYm9yZGVyIGJvdHRvbSBzdHlsZXNcbiAqL1xuQG1peGluIGZvcm0tY29udHJvbC1iYXNlIHtcbiAgQGluY2x1ZGUgbWl4aW5zLmlucHV0LWZpZWxkO1xuICBAaW5jbHVkZSBtaXhpbnMuaW5wdXQtYm9yZGVyLWJvdHRvbTtcbn1cblxuLyoqXG4gKiBGb3JtIENvbnRyb2wgU2VsZWN0b3JcbiAqIFJldXNhYmxlIHNlbGVjdG9yIGZvciBmb3JtIGNvbnRyb2xzIGV4Y2x1ZGluZyByYWRpbyBhbmQgY2hlY2tib3hcbiAqL1xuJGZvcm0tY29udHJvbC1zZWxlY3RvcjogXCJpbnB1dDpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSlcIjtcblxuLyoqXG4gKiBGb3JtIENvbnRyb2wgR3JvdXBcbiAqIFN0eWxlcyBmb3IgYnV0dG9uLCBpbnB1dCwgdGV4dGFyZWEsIGFuZCBzZWxlY3QgZWxlbWVudHNcbiAqIFByb3ZpZGVzIGNvbnNpc3RlbnQgc3R5bGluZyBhY3Jvc3MgYWxsIGZvcm0gY29udHJvbHNcbiAqL1xuQG1peGluIGZvcm0tY29udHJvbHMge1xuICAvLyBCYXNlIHN0eWxlcyBmb3IgYWxsIGZvcm0gY29udHJvbHNcbiAgYnV0dG9uLFxuICAjeyRmb3JtLWNvbnRyb2wtc2VsZWN0b3J9LFxuICB0ZXh0YXJlYSxcbiAgc2VsZWN0IHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyLTAxO1xuICB9XG5cbiAgLy8gVGV4dCBpbnB1dCBzcGVjaWZpYyBzdHlsZXNcbiAgI3skZm9ybS1jb250cm9sLXNlbGVjdG9yfTpub3QoW3R5cGU9XCJyYW5nZVwiXSksXG4gIHRleHRhcmVhLFxuICBzZWxlY3Qge1xuICAgIEBpbmNsdWRlIG1peGlucy5pbnB1dC1ib3JkZXItYm90dG9tO1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG4gIH1cblxuICAvLyBQbGFjZWhvbGRlciBzdHlsZXNcbiAgI3skZm9ybS1jb250cm9sLXNlbGVjdG9yfTo6cGxhY2Vob2xkZXIsXG4gIHRleHRhcmVhOjpwbGFjZWhvbGRlcixcbiAgc2VsZWN0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeTtcbiAgfVxuXG4gIC8vIEhvdmVyIHN0YXRlc1xuICBidXR0b246aG92ZXIsXG4gICN7JGZvcm0tY29udHJvbC1zZWxlY3Rvcn06aG92ZXIsXG4gIHRleHRhcmVhOmhvdmVyLFxuICBzZWxlY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsYXllci1ob3Zlci0wMTtcbiAgfVxuXG4gIC8vIEFjdGl2ZSBzdGF0ZXNcbiAgYnV0dG9uOmFjdGl2ZSxcbiAgI3skZm9ybS1jb250cm9sLXNlbGVjdG9yfTphY3RpdmUsXG4gIHRleHRhcmVhOmFjdGl2ZSxcbiAgc2VsZWN0OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyLWFjdGl2ZS0wMTtcbiAgfVxuXG4gIC8vIEZvY3VzIHN0YXRlc1xuICBidXR0b246Zm9jdXMsXG4gICN7JGZvcm0tY29udHJvbC1zZWxlY3Rvcn06Zm9jdXMsXG4gIHRleHRhcmVhOmZvY3VzLFxuICBzZWxlY3Q6Zm9jdXMge1xuICAgIEBpbmNsdWRlIG1peGlucy5mb2N1cy1zdGF0ZTtcbiAgfVxufVxuXG4vKipcbiAqIEN1c3RvbSBSYWRpbyBCdXR0b25cbiAqIENhcmJvbi1zdHlsZWQgcmFkaW8gaW5wdXQgd2l0aCBwcm9wZXIgYWNjZXNzaWJpbGl0eVxuICogQGV4YW1wbGVcbiAqICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAqICAgICBAaW5jbHVkZSByYWRpby1idXR0b247XG4gKiAgIH1cbiAqL1xuQG1peGluIHJhZGlvLWJ1dHRvbiB7XG4gIC8vIFJlc2V0IGRlZmF1bHQgYXBwZWFyYW5jZVxuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcblxuICAvLyBTaXplIGFuZCBzaGFwZVxuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgLy8gQ29sb3JzIGFuZCBib3JkZXJzXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRoZW1lLiRpY29uLXByaW1hcnk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRiYWNrZ3JvdW5kO1xuXG4gIC8vIEludGVyYWN0aW9uXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC8vIFNtb290aCB0cmFuc2l0aW9ucyB1c2luZyBkZWZhdWx0c1xuICB0cmFuc2l0aW9uOlxuICAgIGJvcmRlci1jb2xvciBkZWZhdWx0cy4kdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICAgZGVmYXVsdHMuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLFxuICAgIGJhY2tncm91bmQtY29sb3IgZGVmYXVsdHMuJHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAgIGRlZmF1bHRzLiR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbixcbiAgICBib3gtc2hhZG93IGRlZmF1bHRzLiR0cmFuc2l0aW9uLWR1cmF0aW9uXG4gICAgICBkZWZhdWx0cy4kdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb247XG5cbiAgLy8gQ2hlY2tlZCBzdGF0ZSBpbmRpY2F0b3JcbiAgJjpjaGVja2VkOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogMC41cmVtO1xuICAgIGhlaWdodDogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kaWNvbi1wcmltYXJ5O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG5cbiAgLy8gRm9jdXMgc3RhdGUgZm9yIGFjY2Vzc2liaWxpdHlcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdGhlbWUuJGZvY3VzO1xuICB9XG59XG5cbi8qKlxuICogQ3VzdG9tIENoZWNrYm94XG4gKiBDYXJib24tc3R5bGVkIGNoZWNrYm94IGlucHV0IHdpdGggcHJvcGVyIGFjY2Vzc2liaWxpdHlcbiAqIEBleGFtcGxlXG4gKiAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gKiAgICAgQGluY2x1ZGUgY2hlY2tib3g7XG4gKiAgIH1cbiAqL1xuQG1peGluIGNoZWNrYm94IHtcbiAgLy8gUmVzZXQgZGVmYXVsdCBhcHBlYXJhbmNlXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuXG4gIC8vIFNpemUgYW5kIHNoYXBlXG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgLy8gQ29sb3JzIGFuZCBib3JkZXJzXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRoZW1lLiRpY29uLXByaW1hcnk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRiYWNrZ3JvdW5kO1xuXG4gIC8vIEludGVyYWN0aW9uXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC8vIFNtb290aCB0cmFuc2l0aW9ucyB1c2luZyBkZWZhdWx0c1xuICB0cmFuc2l0aW9uOlxuICAgIGJvcmRlci1jb2xvciBkZWZhdWx0cy4kdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICAgZGVmYXVsdHMuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLFxuICAgIGJhY2tncm91bmQtY29sb3IgZGVmYXVsdHMuJHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAgIGRlZmF1bHRzLiR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbixcbiAgICBib3gtc2hhZG93IGRlZmF1bHRzLiR0cmFuc2l0aW9uLWR1cmF0aW9uXG4gICAgICBkZWZhdWx0cy4kdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb247XG5cbiAgLy8gQ2hlY2tlZCBzdGF0ZSBpbmRpY2F0b3IgKGNoZWNrbWFyaylcbiAgJjpjaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kaWNvbi1wcmltYXJ5O1xuICAgIGJvcmRlci1jb2xvcjogdGhlbWUuJGljb24tcHJpbWFyeTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB3aWR0aDogM3B4O1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICBib3JkZXI6IHNvbGlkIHRoZW1lLiRiYWNrZ3JvdW5kO1xuICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC02MCUpIHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICB9XG5cbiAgLy8gRm9jdXMgc3RhdGUgZm9yIGFjY2Vzc2liaWxpdHlcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdGhlbWUuJGZvY3VzO1xuICB9XG5cbiAgLy8gSG92ZXIgc3RhdGVcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYm9yZGVyLWNvbG9yOiB0aGVtZS4kaWNvbi1zZWNvbmRhcnk7XG4gIH1cblxuICAvLyBEaXNhYmxlZCBzdGF0ZVxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3JkZXItY29sb3I6IHRoZW1lLiRpY29uLWRpc2FibGVkO1xuXG4gICAgJjpjaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRpY29uLWRpc2FibGVkO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRvZ2dsZSBTd2l0Y2ggU3R5bGVzXG4gKiBDYXJib24tc3R5bGVkIHRvZ2dsZSBzd2l0Y2ggd2l0aCBwcm9wZXIgc3RhdGVzIGFuZCBhbmltYXRpb25zXG4gKiBNYXRjaGVzIENhcmJvbiBEZXNpZ24gU3lzdGVtIHRvZ2dsZSBjb21wb25lbnRcbiAqL1xuQG1peGluIHRvZ2dsZS1zd2l0Y2gge1xuICAvLyBCb29sZWFuIGNvbnRyb2wgY29udGFpbmVyXG4gIFthcmlhLWxhYmVsPVwiYm9vbGVhbkNvbnRyb2xcIl0ge1xuICAgICoge1xuICAgICAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeTtcbiAgICB9XG4gIH1cblxuICAvLyBMYWJlbCBjb250YWluZXIgZm9yIHRoZSB0b2dnbGVcbiAgbGFiZWw6aGFzKGlucHV0W3JvbGU9XCJzd2l0Y2hcIl0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kYmFja2dyb3VuZDtcbiAgICBib3JkZXItcmFkaXVzOiBzcGFjaW5nLiRzcGFjaW5nLTA1O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG5cbiAgLy8gVGhlIGFjdHVhbCB0b2dnbGUgc3dpdGNoIGlucHV0XG4gIGlucHV0W3JvbGU9XCJzd2l0Y2hcIl0ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kdG9nZ2xlLW9mZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yIGRlZmF1bHRzLiR0cmFuc2l0aW9uLWR1cmF0aW9uXG4gICAgICAgIGRlZmF1bHRzLiR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbixcbiAgICAgIGJveC1zaGFkb3cgZGVmYXVsdHMuJHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAgICAgZGVmYXVsdHMuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uO1xuXG4gICAgLy8gVG9nZ2xlIGhhbmRsZSAodGhlIGNpcmNsZSB0aGF0IG1vdmVzKVxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzcHg7XG4gICAgICBsZWZ0OiAzcHg7XG4gICAgICB3aWR0aDogMS4xMjVyZW07XG4gICAgICBoZWlnaHQ6IDEuMTI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGljb24tb24tY29sb3I7XG4gICAgICB0cmFuc2l0aW9uOlxuICAgICAgICB0cmFuc2Zvcm0gZGVmYXVsdHMuJHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAgICAgICBkZWZhdWx0cy4kdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24sXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgZGVmYXVsdHMuJHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAgICAgICBkZWZhdWx0cy4kdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb247XG4gICAgfVxuXG4gICAgLy8gQ2hlY2tlZCBzdGF0ZSAtIHRvZ2dsZSBpcyBPTlxuICAgICY6Y2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kc3VwcG9ydC1zdWNjZXNzO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS41cmVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGb2N1cyBzdGF0ZVxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB0aGVtZS4kZm9jdXMgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAvLyBIb3ZlciBzdGF0ZVxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGljb24tb24tY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZWQgc3RhdGVcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tdG9rZW5zLiRidXR0b24tZGlzYWJsZWQ7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRpY29uLWRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxhYmVsOmhhcyhpbnB1dFtyb2xlPVwic3dpdGNoXCJdKSB7XG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC8qIGNoZWNrZWQg4oaSIHNob3cgVFJVRSAoc2Vjb25kIHNwYW4pICovXG4gICAgaW5wdXRbcm9sZT1cInN3aXRjaFwiXTpjaGVja2VkICsgc3BhbiArIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeTtcbiAgICB9XG5cbiAgICAvKiB1bmNoZWNrZWQg4oaSIHNob3cgRkFMU0UgKGZpcnN0IHNwYW4pICovXG4gICAgaW5wdXRbcm9sZT1cInN3aXRjaFwiXTpub3QoOmNoZWNrZWQpICsgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERhdGUvVGltZSBJbnB1dCBDb2xvciBTY2hlbWVcbiAqIEFkanVzdHMgY29sb3Igc2NoZW1lIGJhc2VkIG9uIHRoZW1lXG4gKi9cbkBtaXhpbiBkYXRlLXRpbWUtaW5wdXRzIHtcbiAgaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4gIGlucHV0W3R5cGU9XCJ0aW1lXCJdIHtcbiAgICBjb2xvci1zY2hlbWU6IGxpZ2h0O1xuICB9XG5cbiAgOnJvb3Rbc3Rvcnlib29rLWNhcmJvbi10aGVtZT1cImc5MFwiXSAmLFxuICA6cm9vdFtzdG9yeWJvb2stY2FyYm9uLXRoZW1lPVwiZzEwMFwiXSAmIHtcbiAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbiAgICBpbnB1dFt0eXBlPVwidGltZVwiXSB7XG4gICAgICBjb2xvci1zY2hlbWU6IGRhcms7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmFuZ2UgSW5wdXQgU3R5bGVzXG4gKiBDcm9zcy1icm93c2VyIGNvbXBhdGlibGUgcmFuZ2Ugc2xpZGVyIHN0eWxpbmcgd2l0aCBDYXJib24gZGVzaWduIHRva2Vuc1xuICogQmFzZWQgb24gQ1NTLVRyaWNrcyBndWlkZSBmb3IgY29tcHJlaGVuc2l2ZSBicm93c2VyIHN1cHBvcnRcbiAqIFN1cHBvcnRzOiBDaHJvbWUsIFNhZmFyaSwgRmlyZWZveCwgRWRnZSwgYW5kIElFXG4gKi9cbkBtaXhpbiByYW5nZS1pbnB1dCB7XG4gIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gICAgLy8gUmVzZXQgZGVmYXVsdCBhcHBlYXJhbmNlIGZvciBhbGwgYnJvd3NlcnNcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiBzcGFjaW5nLiRzcGFjaW5nLTAzIDA7XG5cbiAgICAvLyBSZW1vdmUgZGVmYXVsdCBmb2N1cyBvdXRsaW5lXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIC8vID09PT09IFdFQktJVCAoQ2hyb21lLCBTYWZhcmksIEVkZ2UgQ2hyb21pdW0pID09PT09XG4gICAgLy8gVHJhY2tcbiAgICAmOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuJGJvcmRlci1zdHJvbmctMDE7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC8vIFRodW1iXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuJGljb24tcHJpbWFyeTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRoZW1lLiRiYWNrZ3JvdW5kO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLXRvcDogLTZweDsgLy8gQ2VudGVyIHRodW1iIG9uIHRyYWNrICh0aHVtYiBoZWlnaHQgLSB0cmFjayBoZWlnaHQpIC8gMlxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246XG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgZGVmYXVsdHMuJHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAgICAgICBkZWZhdWx0cy4kdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24sXG4gICAgICAgIGJveC1zaGFkb3cgZGVmYXVsdHMuJHRyYW5zaXRpb24tZHVyYXRpb25cbiAgICAgICAgICBkZWZhdWx0cy4kdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24sXG4gICAgICAgIHRyYW5zZm9ybSBkZWZhdWx0cy4kdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICAgICAgIGRlZmF1bHRzLiR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICB9XG5cbiAgICAvLyA9PT09PSBNT1pJTExBIEZJUkVGT1ggPT09PT1cbiAgICAvLyBUcmFja1xuICAgICY6Oi1tb3otcmFuZ2UtdHJhY2sge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLiRib3JkZXItc3Ryb25nLTAxO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAvLyBUaHVtYlxuICAgICY6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS4kaWNvbi1wcmltYXJ5O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdGhlbWUuJGJhY2tncm91bmQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciBkZWZhdWx0cy4kdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICAgICAgIGRlZmF1bHRzLiR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbixcbiAgICAgICAgYm94LXNoYWRvdyBkZWZhdWx0cy4kdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICAgICAgIGRlZmF1bHRzLiR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbixcbiAgICAgICAgdHJhbnNmb3JtIGRlZmF1bHRzLiR0cmFuc2l0aW9uLWR1cmF0aW9uXG4gICAgICAgICAgZGVmYXVsdHMuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uO1xuICAgIH1cblxuICAgIC8vIFByb2dyZXNzL2xvd2VyIGZpbGwgKEZpcmVmb3ggb25seSlcbiAgICAmOjotbW96LXJhbmdlLXByb2dyZXNzIHtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuJGJvcmRlci1pbnRlcmFjdGl2ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgLy8gPT09PT0gTUlDUk9TT0ZUIEVER0UgKExlZ2FjeSkgJiBJRSA9PT09PVxuICAgIC8vIFRyYWNrXG4gICAgJjo6LW1zLXRyYWNrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLy8gRmlsbC9sb3dlciB0cmFja1xuICAgICY6Oi1tcy1maWxsLWxvd2VyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLiRib3JkZXItaW50ZXJhY3RpdmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC8vIFVwcGVyIHRyYWNrXG4gICAgJjo6LW1zLWZpbGwtdXBwZXIge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuJGJvcmRlci1zdHJvbmctMDE7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC8vIFRodW1iXG4gICAgJjo6LW1zLXRodW1iIHtcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuJGljb24tcHJpbWFyeTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRoZW1lLiRiYWNrZ3JvdW5kO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLXRvcDogMDsgLy8gSUUgZG9lc24ndCBuZWVkIG1hcmdpbiBhZGp1c3RtZW50XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgIC8vIFRvb2x0aXAgKElFIG9ubHkpXG4gICAgJjo6LW1zLXRvb2x0aXAge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAvLyA9PT09PSBIT1ZFUiBTVEFURVMgPT09PT1cbiAgICAmOmhvdmVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS4kaWNvbi1zZWNvbmRhcnk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuXG4gICAgJjpob3Zlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS4kaWNvbi1zZWNvbmRhcnk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxuXG4gICAgJjpob3Zlcjo6LW1zLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLiRpY29uLXNlY29uZGFyeTtcbiAgICB9XG5cbiAgICAvLyA9PT09PSBGT0NVUyBTVEFURVMgPT09PT1cbiAgICAmOmZvY3VzOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdGhlbWUuJGZvY3VzO1xuICAgIH1cblxuICAgICY6Zm9jdXM6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHRoZW1lLiRmb2N1cztcbiAgICB9XG5cbiAgICAmOmZvY3VzOjotbXMtdGh1bWIge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHRoZW1lLiRmb2N1cztcbiAgICB9XG5cbiAgICAvLyA9PT09PSBBQ1RJVkUvUFJFU1NFRCBTVEFURVMgPT09PT1cbiAgICAmOmFjdGl2ZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuJGljb24tcHJpbWFyeTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuXG4gICAgJjphY3RpdmU6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuJGljb24tcHJpbWFyeTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuXG4gICAgJjphY3RpdmU6Oi1tcy10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS4kaWNvbi1wcmltYXJ5O1xuICAgIH1cblxuICAgIC8vID09PT09IERJU0FCTEVEIFNUQVRFID09PT09XG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgb3BhY2l0eTogMC41O1xuXG4gICAgICAmOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG5cbiAgICAgICY6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuJGljb24tZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgICY6Oi1tb3otcmFuZ2UtdHJhY2sge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuXG4gICAgICAmOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuJGljb24tZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgICY6Oi1tcy10cmFjayB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG5cbiAgICAgICY6Oi1tcy1maWxsLWxvd2VyLFxuICAgICAgJjo6LW1zLWZpbGwtdXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS4kYm9yZGVyLXN1YnRsZTtcbiAgICAgIH1cblxuICAgICAgJjo6LW1zLXRodW1iIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuJGljb24tZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAdXNlIFwiQGNhcmJvbi9sYXlvdXRcIjtcbkB1c2UgXCJAY2FyYm9uL3N0eWxlcy9zY3NzL3RoZW1lXCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy9zcGFjaW5nXCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy9jb21wb25lbnRzL2J1dHRvbi90b2tlbnNcIiBhcyBidXR0b24tdG9rZW5zO1xuQHVzZSBcIm1peGluc1wiO1xuQHVzZSBcInBhbmVsLXNoYXJlZFwiO1xuXG4vKipcbiAqIFBBTkVMIFNUWUxFU1xuICogTWFpbiBzdHlsZXMgZm9yIHRoZSBTdG9yeWJvb2sgcGFuZWwgYXJlYSAoYm90dG9tL3JpZ2h0IHBhbmVsKVxuICogSW5jbHVkZXMgQ29udHJvbHMsIEFjdGlvbnMsIEludGVyYWN0aW9ucywgYW5kIEExMXkgYWRkb25zXG4gKi9cblxuI3BhbmVsLXRhYi1jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MXB4KSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdGhlbWUuJGJhY2tncm91bmQgIWltcG9ydGFudDtcblxuICAvKipcbiAgICogUGFyYWdyYXBoIFRleHQgQ29sb3JcbiAgICovXG4gIHAge1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xsYmFyIFN0eWxpbmdcbiAgICogQ3VzdG9tIHNjcm9sbGJhciBmb3IgUmFkaXggVUkgc2Nyb2xsIGFyZWFzXG4gICAqL1xuICBbZGF0YS1yYWRpeC1zY3JvbGwtYXJlYS12aWV3cG9ydF0ge1xuICAgICsgZGl2ID4gZGl2IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLiRib3JkZXItaW52ZXJzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKiBDT05UUk9MUyBBRERPTlxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIC8qKlxuICAgKiBTYXZlIEZyb20gQ29udHJvbHMgQWN0aW9uXG4gICAqIFRvb2xiYXIgYWN0aW9uIHRvIHNhdmUgY29udHJvbCBzdGF0ZVxuICAgKi9cbiAgW2lkPVwic2F2ZS1mcm9tLWNvbnRyb2xzXCJdIHtcbiAgICA+IGRpdiB7XG4gICAgICAtLWhpZ2hsaWdodC1iZy1jb2xvcjogY29sb3ItbWl4KFxuICAgICAgICBpbiBzcmdiLFxuICAgICAgICB2YXIoLS1jZHMtYm9yZGVyLWludGVyYWN0aXZlKSAzMCUsXG4gICAgICAgIHZhcigtLWNkcy1sYXllci0wMSlcbiAgICAgICk7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsYXllci0wMTtcbiAgICAgIGJvcmRlci1jb2xvcjogdGhlbWUuJGJvcmRlci1zdWJ0bGUtMDE7XG4gICAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBAaW5jbHVkZSBwYW5lbC1zaGFyZWQucGFuZWwtYnV0dG9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBDb250cm9scyBCdXR0b25cbiAgICogQnV0dG9uIHRvIHJlc2V0IGFsbCBjb250cm9scyB0byBkZWZhdWx0IHZhbHVlc1xuICAgKi9cbiAgYnV0dG9uW3RpdGxlPVwiUmVzZXQgY29udHJvbHNcIl0ge1xuICAgIEBpbmNsdWRlIHBhbmVsLXNoYXJlZC5wYW5lbC1idXR0b247XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbHMgQXJnVGFibGVcbiAgICogVGFibGUgc2hvd2luZyBjb21wb25lbnQgcHJvcHMvYXJncyB3aXRoIGVkaXRhYmxlIGNvbnRyb2xzXG4gICAqL1xuICB0YWJsZS5kb2NibG9jay1hcmdzdGFibGUge1xuICAgIEBpbmNsdWRlIG1peGlucy5hcmdzdGFibGUtYmFzZTtcblxuICAgID4gdGhlYWQuZG9jYmxvY2stYXJnc3RhYmxlLWhlYWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRhYmxlIEJvZHlcbiAgICAgKiBSb3dzIGNvbnRhaW5pbmcgY29udHJvbCBpbnB1dHNcbiAgICAgKi9cbiAgICA+IHRib2R5LmRvY2Jsb2NrLWFyZ3N0YWJsZS1ib2R5IHtcbiAgICAgIC8qKlxuICAgICAgICogU3RhbmRhcmQgQ29udHJvbCBSb3dzXG4gICAgICAgKiBJbmRpdmlkdWFsIHByb3AvYXJnIHJvd3Mgd2l0aCBjb250cm9sc1xuICAgICAgICovXG4gICAgICA+IHRyOm5vdChbdGl0bGVdKSA+IHRkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuJGJhY2tncm91bmQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdGhlbWUuJGJvcmRlci1zdWJ0bGUtMDE7XG4gICAgICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFR5cGUgQmFkZ2VzXG4gICAgICAgICAqIERpc3BsYXkgdHlwZSBpbmZvcm1hdGlvbiAoc3RyaW5nLCBudW1iZXIsIGV0Yy4pXG4gICAgICAgICAqIFVzaW5nIGF0dHJpYnV0ZSBzZWxlY3RvciBpbnN0ZWFkIG9mIHNwZWNpZmljIENTUyBjbGFzc2VzXG4gICAgICAgICAqL1xuICAgICAgICBbY2xhc3MqPVwiY3NzLVwiXSB7XG4gICAgICAgICAgQGluY2x1ZGUgbWl4aW5zLmFyZ3N0YWJsZS10eXBlLWJhZGdlO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdGhlbWUuJGJvcmRlci1zdWJ0bGUtMDE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVxdWlyZWQgSW5kaWNhdG9yXG4gICAgICAgICAqIFNob3dzIHdoaWNoIHByb3BzIGFyZSByZXF1aXJlZFxuICAgICAgICAgKi9cbiAgICAgICAgc3Bhblt0aXRsZT1cIlJlcXVpcmVkXCJdIHtcbiAgICAgICAgICBAaW5jbHVkZSBtaXhpbnMuYXJnc3RhYmxlLXJlcXVpcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcm0gQ29udHJvbHNcbiAgICAgICAgICogQWxsIGlucHV0IHR5cGVzIHdpdGhpbiB0aGUgY29udHJvbHMgdGFibGVcbiAgICAgICAgICovXG4gICAgICAgIEBpbmNsdWRlIHBhbmVsLXNoYXJlZC5mb3JtLWNvbnRyb2xzO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja2JveCBTdHlsaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KFtyb2xlPVwic3dpdGNoXCJdKSB7XG4gICAgICAgICAgQGluY2x1ZGUgcGFuZWwtc2hhcmVkLmNoZWNrYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJhZGlvIEJ1dHRvbiBTdHlsaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgICAgICAgIEBpbmNsdWRlIHBhbmVsLXNoYXJlZC5yYWRpby1idXR0b247XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVG9nZ2xlIFN3aXRjaCBTdHlsaW5nXG4gICAgICAgICAqL1xuICAgICAgICBAaW5jbHVkZSBwYW5lbC1zaGFyZWQudG9nZ2xlLXN3aXRjaDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGF0ZS9UaW1lIElucHV0c1xuICAgICAgICAgKi9cbiAgICAgICAgQGluY2x1ZGUgcGFuZWwtc2hhcmVkLmRhdGUtdGltZS1pbnB1dHM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJhbmdlIElucHV0c1xuICAgICAgICAgKi9cbiAgICAgICAgQGluY2x1ZGUgcGFuZWwtc2hhcmVkLnJhbmdlLWlucHV0O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFycmF5L09iamVjdCBJdGVtIFJvd3NcbiAgICAgICAqIEV4cGFuZGFibGUgcm93cyBmb3IgY29tcGxleCBjb250cm9sIHR5cGVzXG4gICAgICAgKi9cbiAgICAgID4gdHJbdGl0bGV+PVwiaXRlbXNcIl0ge1xuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuYXJnc3RhYmxlLWl0ZW0tcm93O1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgdGhlbWUuJGJvcmRlci1zdWJ0bGUtMDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvZGUgU291cmNlIEJsb2NrXG4gICAqIFN5bnRheC1oaWdobGlnaHRlZCBjb2RlIGV4YW1wbGVzIGluIGRvY3NcbiAgICovXG4gIC5kb2NibG9jay1zb3VyY2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRiYWNrZ3JvdW5kO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdGhlbWUuJGJvcmRlci1zdWJ0bGUtMDE7XG4gIH1cblxuICA+IGRpdjpoYXMoLmRvY2Jsb2NrLXNvdXJjZSkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC8qKlxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqIElOVEVSQUNUSU9OUyBBRERPTlxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqIFBhbmVsIGZvciBwbGF5IGZ1bmN0aW9uIGludGVyYWN0aW9ucyBhbmQgdGVzdGluZ1xuICAgKi9cbiAgLyoqXG4gICAqIEludGVyYWN0aW9ucyBQYW5lbCBDb250YWluZXJcbiAgICovXG4gIGRpdjpoYXMobmF2W2FyaWEtbGFiZWw9XCJDb21wb25lbnQgdGVzdHMgdG9vbGJhclwiXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNkcy1iYWNrZ3JvdW5kKTtcblxuICAgIC8qKlxuICAgICAqIEludGVyYWN0aW9ucyBUb29sYmFyXG4gICAgICogQ29udHJvbHMgZm9yIHBsYXkgZnVuY3Rpb24gdGVzdGluZyAocGxheSwgcmV3aW5kLCBldGMuKVxuICAgICAqL1xuICAgIG5hdlthcmlhLWxhYmVsPVwiQ29tcG9uZW50IHRlc3RzIHRvb2xiYXJcIl0ge1xuICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdGhlbWUuJGJvcmRlci1zdWJ0bGUtMDE7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuJGxheWVyLTAxO1xuXG4gICAgICA+IGRpdiA+IHAge1xuICAgICAgICBjb2xvcjogdGhlbWUuJHRleHQtcHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBUZXN0IFN0YXR1cyBCYWRnZVxuICAgICAgICogU2hvd3MgcGFzcy9mYWlsL3J1bm5pbmcgc3RhdHVzXG4gICAgICAgKi9cbiAgICAgIGRpdlthcmlhLWxhYmVsPVwiU3RhdHVzIG9mIHRoZSB0ZXN0IHJ1blwiXSB7XG4gICAgICAgIG1pbi1ibG9jay1zaXplOiBzcGFjaW5nLiRzcGFjaW5nLTA4O1xuICAgICAgICBtaW4taW5saW5lLXNpemU6IHNwYWNpbmcuJHNwYWNpbmctMTA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIaWRlIGVtcHR5IHNwYW5zXG4gICAgICAgKi9cbiAgICAgIHNwYW46ZW1wdHkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFRvb2xiYXIgQnV0dG9uc1xuICAgICAgICovXG4gICAgICBidXR0b24ge1xuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuYnV0dG9uKFwibGdcIik7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgQGluY2x1ZGUgbWl4aW5zLmJ1dHRvbihcImxnXCIsIFwiZ2hvc3RcIiwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJhY3Rpb25zIExpc3RcbiAgICAgKiBMaXN0IG9mIGludGVyYWN0aW9uIHN0ZXBzIGZyb20gcGxheSBmdW5jdGlvblxuICAgICAqL1xuICAgIGRpdlthcmlhLWxhYmVsPVwiSW50ZXJhY3Rpb25zIGxpc3RcIl0ge1xuICAgICAgZGl2Omhhcyg+IGJ1dHRvblthcmlhLWxhYmVsPVwiSW50ZXJhY3Rpb24gc3RlcFwiXSkge1xuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuYnV0dG9uKG51bGwsIFwiZ2hvc3RcIiwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICA+IGRpdiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdGhlbWUuJGJvcmRlci1zdWJ0bGUtMDEgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICogQUNDRVNTSUJJTElUWSAoQTExWSkgQURET05cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKiBQYW5lbCBmb3IgYWNjZXNzaWJpbGl0eSB2aW9sYXRpb24gZGV0ZWN0aW9uXG4gICAqL1xuXG4gIC8qKlxuICAgKiBBMTF5IFRhYnMgQ29udGFpbmVyXG4gICAqIFZpb2xhdGlvbnMsIFBhc3NlcywgSW5jb21wbGV0ZSB0YWJzXG4gICAqL1xuICBkaXY6aGFzKD4gZGl2ID4gW2RhdGEtdHlwZT1cInZpb2xhdGlvbnNcIl0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kbGF5ZXItMDE7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItYmxvY2stZW5kOiAxcHggc29saWQgdGhlbWUuJGJvcmRlci1zdWJ0bGUtMDE7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgIGRpdltyb2xlPVwidGFibGlzdFwiXSArIGRpdiB7XG4gICAgICBnYXA6IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm9uLVRhYiBCdXR0b25zIGluIEExMXkgSGVhZGVyXG4gICAgICogU2V0dGluZ3MgYW5kIG90aGVyIGFjdGlvbiBidXR0b25zXG4gICAgICovXG4gICAgYnV0dG9uOm5vdChbcm9sZT1cInRhYlwiXSkge1xuICAgICAgQGluY2x1ZGUgbWl4aW5zLmJ1dHRvbihcImxnXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEExMXkgVGFiIEJ1dHRvbnNcbiAgICAgKiBWaW9sYXRpb25zLCBQYXNzZXMsIEluY29tcGxldGUgdGFic1xuICAgICAqL1xuICAgIGJ1dHRvbltyb2xlPVwidGFiXCJdIHtcbiAgICAgIEBpbmNsdWRlIG1peGlucy50YWItYnV0dG9uO1xuXG4gICAgICAvKipcbiAgICAgICAqIFZpb2xhdGlvbiBDb3VudCBCYWRnZVxuICAgICAgICovXG4gICAgICA+IGRpdiA+IGRpdiB7XG4gICAgICAgIEBpbmNsdWRlIG1peGlucy5iYWRnZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmUgVGFiIFN0YXRlXG4gICAgICovXG4gICAgYnV0dG9uW2RhdGEtYWN0aXZlPVwidHJ1ZVwiXSB7XG4gICAgICBAaW5jbHVkZSBtaXhpbnMudGFiLWFjdGl2ZTtcblxuICAgICAgPiBkaXYgPiBkaXYge1xuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuYmFkZ2UodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEExMXkgVmlvbGF0aW9uIExpc3RcbiAgICogTGlzdCBvZiBhY2Nlc3NpYmlsaXR5IGlzc3VlcyBhbmQgdGhlaXIgZGV0YWlsc1xuICAgKi9cbiAgZGl2Omhhcyg+IGRpdiA+IFtkYXRhLXR5cGU9XCJ2aW9sYXRpb25zXCJdKSArIGRpdiB7XG4gICAgLyoqXG4gICAgICogSW5kaXZpZHVhbCBWaW9sYXRpb24gSXRlbXNcbiAgICAgKiBDbGlja2FibGUgcm93cyBzaG93aW5nIHZpb2xhdGlvbiBzdW1tYXJ5XG4gICAgICovXG4gICAgW2RhdGEtYWN0aXZlXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kbGF5ZXItMDE7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogdGhlbWUuJGludGVyYWN0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kbGF5ZXItaG92ZXItMDE7XG5cbiAgICAgICAgKyBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsYXllci1ob3Zlci0wMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICAgID4gZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgPiA6bnRoLWxhc3QtY2hpbGQoMikge1xuICAgICAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFjdGlvbiBCdXR0b25zIGluIFZpb2xhdGlvbiBSb3dcbiAgICAgICAqIEhpZ2hsaWdodCwgY29weSwgZXRjLlxuICAgICAgICovXG4gICAgICA+IGJ1dHRvbiB7XG4gICAgICAgIEBpbmNsdWRlIHBhbmVsLXNoYXJlZC5wYW5lbC1idXR0b247XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmlvbGF0aW9uIERldGFpbHMgUGFuZWxcbiAgICAgKiBFeHBhbmRlZCB2aWV3IHNob3dpbmcgZnVsbCB2aW9sYXRpb24gaW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBbZGF0YS1hY3RpdmVdICsgW2lkKj1cImRldGFpbHNcIl0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyLTAxO1xuXG4gICAgICAvKipcbiAgICAgICAqIEhlbHAgTGlua3NcbiAgICAgICAqIEV4dGVybmFsIGxpbmtzIHRvIFdDQUcgZ3VpZGVsaW5lc1xuICAgICAgICovXG4gICAgICBwID4gYSA+IHNwYW4ge1xuICAgICAgICBjb2xvcjogdGhlbWUuJGxpbmstcHJpbWFyeTtcblxuICAgICAgICA+IHN2ZyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcblxuICAgICAgICAgID4gcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiB0aGVtZS4kbGluay1wcmltYXJ5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICAgID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRGV0YWlsIFRhYnMgKEhUTUwsIEhpZ2hsaWdodClcbiAgICAgICAqIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdGFicyB3aXRoaW4gdmlvbGF0aW9uIGRldGFpbHNcbiAgICAgICAqL1xuICAgICAgW3JvbGU9XCJ0YWJsaXN0XCJdLFxuICAgICAgW3JvbGU9XCJ0YWJwYW5lbFwiXSB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgQGluY2x1ZGUgbWl4aW5zLmJ1dHRvbihudWxsLCBcImdob3N0XCIsIHRydWUsIHRydWUpO1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHRoZW1lLiRib3JkZXItc3VidGxlLTAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIEFyZWEgQ29udGVudFxuICAgICAqL1xuICAgIFtkYXRhLXJhZGl4LXNjcm9sbC1hcmVhLWNvbnRlbnRdIHtcbiAgICAgID4gZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0aGVtZS4kYm9yZGVyLXN1YnRsZS0wMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvZGUgZ2VuZXJhdGVkIGJ5IEBjYXJib24vdGhlbWVzLiBETyBOT1QgRURJVC5cbi8vXG4vLyBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTgsIDIwMjNcbi8vXG4vLyBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUtMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vL1xuXG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICcuLi9jb25maWcnO1xuQHVzZSAnLi4vdGhlbWUnO1xuXG4vLy8gSW50ZXJuYWwgaGVscGVyIGZvciBnZW5lcmF0aW5nIENTUyBDdXN0b20gUHJvcGVydGllc1xuQGZ1bmN0aW9uIF9nZXQoJHRva2VuKSB7XG4gIEBpZiBjb25maWcuJHVzZS1mYWxsYmFjay12YWx1ZSA9PSBmYWxzZSB7XG4gICAgQHJldHVybiB2YXIoLS0je2NvbmZpZy4kcHJlZml4fS0jeyR0b2tlbn0pO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuIHZhcigtLSN7Y29uZmlnLiRwcmVmaXh9LSN7JHRva2VufSwgI3t0aGVtZS5nZXQoJHRva2VuKX0pO1xuICB9XG59XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kYCB0b2tlblxuJGJhY2tncm91bmQ6IF9nZXQoJ2JhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtYWN0aXZlYCB0b2tlblxuJGJhY2tncm91bmQtYWN0aXZlOiBfZ2V0KCdiYWNrZ3JvdW5kLWFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1zZWxlY3RlZGAgdG9rZW5cbiRiYWNrZ3JvdW5kLXNlbGVjdGVkOiBfZ2V0KCdiYWNrZ3JvdW5kLXNlbGVjdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLXNlbGVjdGVkLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtc2VsZWN0ZWQtaG92ZXI6IF9nZXQoJ2JhY2tncm91bmQtc2VsZWN0ZWQtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1icmFuZGAgdG9rZW5cbiRiYWNrZ3JvdW5kLWJyYW5kOiBfZ2V0KCdiYWNrZ3JvdW5kLWJyYW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWludmVyc2VgIHRva2VuXG4kYmFja2dyb3VuZC1pbnZlcnNlOiBfZ2V0KCdiYWNrZ3JvdW5kLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtaW52ZXJzZS1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLWludmVyc2UtaG92ZXI6IF9nZXQoJ2JhY2tncm91bmQtaW52ZXJzZS1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItMDFgIHRva2VuXG4kbGF5ZXItMDE6IF9nZXQoJ2xheWVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY3RpdmUtMDFgIHRva2VuXG4kbGF5ZXItYWN0aXZlLTAxOiBfZ2V0KCdsYXllci1hY3RpdmUtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWJhY2tncm91bmQtMDFgIHRva2VuXG4kbGF5ZXItYmFja2dyb3VuZC0wMTogX2dldCgnbGF5ZXItYmFja2dyb3VuZC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItaG92ZXItMDFgIHRva2VuXG4kbGF5ZXItaG92ZXItMDE6IF9nZXQoJ2xheWVyLWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC0wMWAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC0wMTogX2dldCgnbGF5ZXItc2VsZWN0ZWQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWhvdmVyLTAxYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWhvdmVyLTAxOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItMDJgIHRva2VuXG4kbGF5ZXItMDI6IF9nZXQoJ2xheWVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY3RpdmUtMDJgIHRva2VuXG4kbGF5ZXItYWN0aXZlLTAyOiBfZ2V0KCdsYXllci1hY3RpdmUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWJhY2tncm91bmQtMDJgIHRva2VuXG4kbGF5ZXItYmFja2dyb3VuZC0wMjogX2dldCgnbGF5ZXItYmFja2dyb3VuZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItaG92ZXItMDJgIHRva2VuXG4kbGF5ZXItaG92ZXItMDI6IF9nZXQoJ2xheWVyLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC0wMmAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC0wMjogX2dldCgnbGF5ZXItc2VsZWN0ZWQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWhvdmVyLTAyYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWhvdmVyLTAyOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItMDNgIHRva2VuXG4kbGF5ZXItMDM6IF9nZXQoJ2xheWVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY3RpdmUtMDNgIHRva2VuXG4kbGF5ZXItYWN0aXZlLTAzOiBfZ2V0KCdsYXllci1hY3RpdmUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWJhY2tncm91bmQtMDNgIHRva2VuXG4kbGF5ZXItYmFja2dyb3VuZC0wMzogX2dldCgnbGF5ZXItYmFja2dyb3VuZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItaG92ZXItMDNgIHRva2VuXG4kbGF5ZXItaG92ZXItMDM6IF9nZXQoJ2xheWVyLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC0wM2AgdG9rZW5cbiRsYXllci1zZWxlY3RlZC0wMzogX2dldCgnbGF5ZXItc2VsZWN0ZWQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWhvdmVyLTAzYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWhvdmVyLTAzOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZWAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1pbnZlcnNlOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1kaXNhYmxlZGAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1kaXNhYmxlZDogX2dldCgnbGF5ZXItc2VsZWN0ZWQtZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC0wMWAgdG9rZW5cbiRsYXllci1hY2NlbnQtMDE6IF9nZXQoJ2xheWVyLWFjY2VudC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWFjdGl2ZS0wMWAgdG9rZW5cbiRsYXllci1hY2NlbnQtYWN0aXZlLTAxOiBfZ2V0KCdsYXllci1hY2NlbnQtYWN0aXZlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtaG92ZXItMDFgIHRva2VuXG4kbGF5ZXItYWNjZW50LWhvdmVyLTAxOiBfZ2V0KCdsYXllci1hY2NlbnQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC0wMmAgdG9rZW5cbiRsYXllci1hY2NlbnQtMDI6IF9nZXQoJ2xheWVyLWFjY2VudC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWFjdGl2ZS0wMmAgdG9rZW5cbiRsYXllci1hY2NlbnQtYWN0aXZlLTAyOiBfZ2V0KCdsYXllci1hY2NlbnQtYWN0aXZlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtaG92ZXItMDJgIHRva2VuXG4kbGF5ZXItYWNjZW50LWhvdmVyLTAyOiBfZ2V0KCdsYXllci1hY2NlbnQtaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC0wM2AgdG9rZW5cbiRsYXllci1hY2NlbnQtMDM6IF9nZXQoJ2xheWVyLWFjY2VudC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWFjdGl2ZS0wM2AgdG9rZW5cbiRsYXllci1hY2NlbnQtYWN0aXZlLTAzOiBfZ2V0KCdsYXllci1hY2NlbnQtYWN0aXZlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtaG92ZXItMDNgIHRva2VuXG4kbGF5ZXItYWNjZW50LWhvdmVyLTAzOiBfZ2V0KCdsYXllci1hY2NlbnQtaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAxYCB0b2tlblxuJGZpZWxkLTAxOiBfZ2V0KCdmaWVsZC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDFgIHRva2VuXG4kZmllbGQtaG92ZXItMDE6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wMmAgdG9rZW5cbiRmaWVsZC0wMjogX2dldCgnZmllbGQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAyYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAyOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDNgIHRva2VuXG4kZmllbGQtMDM6IF9nZXQoJ2ZpZWxkLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wM2AgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMzogX2dldCgnZmllbGQtaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGludGVyYWN0aXZlYCB0b2tlblxuJGludGVyYWN0aXZlOiBfZ2V0KCdpbnRlcmFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wMGAgdG9rZW5cbiRib3JkZXItc3VidGxlLTAwOiBfZ2V0KCdib3JkZXItc3VidGxlLTAwJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAxYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDE6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDFgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMTogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wMmAgdG9rZW5cbiRib3JkZXItc3VidGxlLTAyOiBfZ2V0KCdib3JkZXItc3VidGxlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAyYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDI6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDNgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMzogX2dldCgnYm9yZGVyLXN1YnRsZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wM2AgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAzOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAxYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDE6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDJgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMjogX2dldCgnYm9yZGVyLXN0cm9uZy0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wM2AgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAzOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wMWAgdG9rZW5cbiRib3JkZXItdGlsZS0wMTogX2dldCgnYm9yZGVyLXRpbGUtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAyYCB0b2tlblxuJGJvcmRlci10aWxlLTAyOiBfZ2V0KCdib3JkZXItdGlsZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDNgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDM6IF9nZXQoJ2JvcmRlci10aWxlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItaW52ZXJzZWAgdG9rZW5cbiRib3JkZXItaW52ZXJzZTogX2dldCgnYm9yZGVyLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1pbnRlcmFjdGl2ZWAgdG9rZW5cbiRib3JkZXItaW50ZXJhY3RpdmU6IF9nZXQoJ2JvcmRlci1pbnRlcmFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWRpc2FibGVkYCB0b2tlblxuJGJvcmRlci1kaXNhYmxlZDogX2dldCgnYm9yZGVyLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXByaW1hcnlgIHRva2VuXG4kdGV4dC1wcmltYXJ5OiBfZ2V0KCd0ZXh0LXByaW1hcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtc2Vjb25kYXJ5YCB0b2tlblxuJHRleHQtc2Vjb25kYXJ5OiBfZ2V0KCd0ZXh0LXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1wbGFjZWhvbGRlcmAgdG9rZW5cbiR0ZXh0LXBsYWNlaG9sZGVyOiBfZ2V0KCd0ZXh0LXBsYWNlaG9sZGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWhlbHBlcmAgdG9rZW5cbiR0ZXh0LWhlbHBlcjogX2dldCgndGV4dC1oZWxwZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtZXJyb3JgIHRva2VuXG4kdGV4dC1lcnJvcjogX2dldCgndGV4dC1lcnJvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1pbnZlcnNlYCB0b2tlblxuJHRleHQtaW52ZXJzZTogX2dldCgndGV4dC1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LW9uLWNvbG9yYCB0b2tlblxuJHRleHQtb24tY29sb3I6IF9nZXQoJ3RleHQtb24tY29sb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtb24tY29sb3ItZGlzYWJsZWRgIHRva2VuXG4kdGV4dC1vbi1jb2xvci1kaXNhYmxlZDogX2dldCgndGV4dC1vbi1jb2xvci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1kaXNhYmxlZGAgdG9rZW5cbiR0ZXh0LWRpc2FibGVkOiBfZ2V0KCd0ZXh0LWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXByaW1hcnlgIHRva2VuXG4kbGluay1wcmltYXJ5OiBfZ2V0KCdsaW5rLXByaW1hcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstcHJpbWFyeS1ob3ZlcmAgdG9rZW5cbiRsaW5rLXByaW1hcnktaG92ZXI6IF9nZXQoJ2xpbmstcHJpbWFyeS1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1zZWNvbmRhcnlgIHRva2VuXG4kbGluay1zZWNvbmRhcnk6IF9nZXQoJ2xpbmstc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2UtdmlzaXRlZGAgdG9rZW5cbiRsaW5rLWludmVyc2UtdmlzaXRlZDogX2dldCgnbGluay1pbnZlcnNlLXZpc2l0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstdmlzaXRlZGAgdG9rZW5cbiRsaW5rLXZpc2l0ZWQ6IF9nZXQoJ2xpbmstdmlzaXRlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlYCB0b2tlblxuJGxpbmstaW52ZXJzZTogX2dldCgnbGluay1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2UtYWN0aXZlYCB0b2tlblxuJGxpbmstaW52ZXJzZS1hY3RpdmU6IF9nZXQoJ2xpbmstaW52ZXJzZS1hY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS1ob3ZlcmAgdG9rZW5cbiRsaW5rLWludmVyc2UtaG92ZXI6IF9nZXQoJ2xpbmstaW52ZXJzZS1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1wcmltYXJ5YCB0b2tlblxuJGljb24tcHJpbWFyeTogX2dldCgnaWNvbi1wcmltYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLXNlY29uZGFyeWAgdG9rZW5cbiRpY29uLXNlY29uZGFyeTogX2dldCgnaWNvbi1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24taW52ZXJzZWAgdG9rZW5cbiRpY29uLWludmVyc2U6IF9nZXQoJ2ljb24taW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1vbi1jb2xvcmAgdG9rZW5cbiRpY29uLW9uLWNvbG9yOiBfZ2V0KCdpY29uLW9uLWNvbG9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLW9uLWNvbG9yLWRpc2FibGVkYCB0b2tlblxuJGljb24tb24tY29sb3ItZGlzYWJsZWQ6IF9nZXQoJ2ljb24tb24tY29sb3ItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tZGlzYWJsZWRgIHRva2VuXG4kaWNvbi1kaXNhYmxlZDogX2dldCgnaWNvbi1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1pbnRlcmFjdGl2ZWAgdG9rZW5cbiRpY29uLWludGVyYWN0aXZlOiBfZ2V0KCdpY29uLWludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWVycm9yYCB0b2tlblxuJHN1cHBvcnQtZXJyb3I6IF9nZXQoJ3N1cHBvcnQtZXJyb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtc3VjY2Vzc2AgdG9rZW5cbiRzdXBwb3J0LXN1Y2Nlc3M6IF9nZXQoJ3N1cHBvcnQtc3VjY2VzcycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC13YXJuaW5nYCB0b2tlblxuJHN1cHBvcnQtd2FybmluZzogX2dldCgnc3VwcG9ydC13YXJuaW5nJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWluZm9gIHRva2VuXG4kc3VwcG9ydC1pbmZvOiBfZ2V0KCdzdXBwb3J0LWluZm8nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtZXJyb3ItaW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LWVycm9yLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtZXJyb3ItaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1zdWNjZXNzLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1zdWNjZXNzLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtc3VjY2Vzcy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXdhcm5pbmctaW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LXdhcm5pbmctaW52ZXJzZTogX2dldCgnc3VwcG9ydC13YXJuaW5nLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtaW5mby1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtaW5mby1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LWluZm8taW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLW1ham9yYCB0b2tlblxuJHN1cHBvcnQtY2F1dGlvbi1tYWpvcjogX2dldCgnc3VwcG9ydC1jYXV0aW9uLW1ham9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tbWlub3JgIHRva2VuXG4kc3VwcG9ydC1jYXV0aW9uLW1pbm9yOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tbWlub3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi11bmRlZmluZWRgIHRva2VuXG4kc3VwcG9ydC1jYXV0aW9uLXVuZGVmaW5lZDogX2dldCgnc3VwcG9ydC1jYXV0aW9uLXVuZGVmaW5lZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLXBvcG92ZXItYmFja2dyb3VuZDogX2dldCgnYWktcG9wb3Zlci1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMWAgdG9rZW5cbiRhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMTogX2dldCgnYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAyYCB0b2tlblxuJGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAyOiBfZ2V0KCdhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktaW5uZXItc2hhZG93YCB0b2tlblxuJGFpLWlubmVyLXNoYWRvdzogX2dldCgnYWktaW5uZXItc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLXN0YXJ0LXNtYCB0b2tlblxuJGFpLWF1cmEtc3RhcnQtc206IF9nZXQoJ2FpLWF1cmEtc3RhcnQtc20nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtc3RhcnRgIHRva2VuXG4kYWktYXVyYS1zdGFydDogX2dldCgnYWktYXVyYS1zdGFydCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1lbmRgIHRva2VuXG4kYWktYXVyYS1lbmQ6IF9nZXQoJ2FpLWF1cmEtZW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLWJhY2tncm91bmRgIHRva2VuXG4kYWktYXVyYS1ob3Zlci1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1hdXJhLWhvdmVyLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItc3RhcnRgIHRva2VuXG4kYWktYXVyYS1ob3Zlci1zdGFydDogX2dldCgnYWktYXVyYS1ob3Zlci1zdGFydCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1lbmRgIHRva2VuXG4kYWktYXVyYS1ob3Zlci1lbmQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItZW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItc3Ryb25nYCB0b2tlblxuJGFpLWJvcmRlci1zdHJvbmc6IF9nZXQoJ2FpLWJvcmRlci1zdHJvbmcnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1zdGFydGAgdG9rZW5cbiRhaS1ib3JkZXItc3RhcnQ6IF9nZXQoJ2FpLWJvcmRlci1zdGFydCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLWVuZGAgdG9rZW5cbiRhaS1ib3JkZXItZW5kOiBfZ2V0KCdhaS1ib3JkZXItZW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1kcm9wLXNoYWRvd2AgdG9rZW5cbiRhaS1kcm9wLXNoYWRvdzogX2dldCgnYWktZHJvcC1zaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXNrZWxldG9uLWJhY2tncm91bmRgIHRva2VuXG4kYWktc2tlbGV0b24tYmFja2dyb3VuZDogX2dldCgnYWktc2tlbGV0b24tYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLXNrZWxldG9uLWVsZW1lbnQtYmFja2dyb3VuZDogX2dldChcbiAgJ2FpLXNrZWxldG9uLWVsZW1lbnQtYmFja2dyb3VuZCdcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1vdmVybGF5YCB0b2tlblxuJGFpLW92ZXJsYXk6IF9nZXQoJ2FpLW92ZXJsYXknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtY2VudGVyYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtY2VudGVyOiBfZ2V0KCdhaS1wb3BvdmVyLWNhcmV0LWNlbnRlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b21gIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b206IF9nZXQoJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQ6IF9nZXQoXG4gICdhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9uc2AgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kLWFjdGlvbnM6IF9nZXQoXG4gICdhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kLWFjdGlvbnMnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYmFja2dyb3VuZGAgdG9rZW5cbiRjaGF0LXByb21wdC1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LXByb21wdC1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1ib3JkZXItc3RhcnRgIHRva2VuXG4kY2hhdC1wcm9tcHQtYm9yZGVyLXN0YXJ0OiBfZ2V0KCdjaGF0LXByb21wdC1ib3JkZXItc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJvcmRlci1lbmRgIHRva2VuXG4kY2hhdC1wcm9tcHQtYm9yZGVyLWVuZDogX2dldCgnY2hhdC1wcm9tcHQtYm9yZGVyLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtdXNlcmAgdG9rZW5cbiRjaGF0LWJ1YmJsZS11c2VyOiBfZ2V0KCdjaGF0LWJ1YmJsZS11c2VyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS1hZ2VudGAgdG9rZW5cbiRjaGF0LWJ1YmJsZS1hZ2VudDogX2dldCgnY2hhdC1idWJibGUtYWdlbnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLWJvcmRlcmAgdG9rZW5cbiRjaGF0LWJ1YmJsZS1ib3JkZXI6IF9nZXQoJ2NoYXQtYnViYmxlLWJvcmRlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItYm90YCB0b2tlblxuJGNoYXQtYXZhdGFyLWJvdDogX2dldCgnY2hhdC1hdmF0YXItYm90JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci1hZ2VudGAgdG9rZW5cbiRjaGF0LWF2YXRhci1hZ2VudDogX2dldCgnY2hhdC1hdmF0YXItYWdlbnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLXVzZXJgIHRva2VuXG4kY2hhdC1hdmF0YXItdXNlcjogX2dldCgnY2hhdC1hdmF0YXItdXNlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1zaGVsbC1iYWNrZ3JvdW5kYCB0b2tlblxuJGNoYXQtc2hlbGwtYmFja2dyb3VuZDogX2dldCgnY2hhdC1zaGVsbC1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWhlYWRlci1iYWNrZ3JvdW5kYCB0b2tlblxuJGNoYXQtaGVhZGVyLWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtaGVhZGVyLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uYCB0b2tlblxuJGNoYXQtYnV0dG9uOiBfZ2V0KCdjaGF0LWJ1dHRvbicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24taG92ZXJgIHRva2VuXG4kY2hhdC1idXR0b24taG92ZXI6IF9nZXQoJ2NoYXQtYnV0dG9uLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi10ZXh0LWhvdmVyYCB0b2tlblxuJGNoYXQtYnV0dG9uLXRleHQtaG92ZXI6IF9nZXQoJ2NoYXQtYnV0dG9uLXRleHQtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLWFjdGl2ZWAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1hY3RpdmU6IF9nZXQoJ2NoYXQtYnV0dG9uLWFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tc2VsZWN0ZWRgIHRva2VuXG4kY2hhdC1idXR0b24tc2VsZWN0ZWQ6IF9nZXQoJ2NoYXQtYnV0dG9uLXNlbGVjdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi10ZXh0LXNlbGVjdGVkYCB0b2tlblxuJGNoYXQtYnV0dG9uLXRleHQtc2VsZWN0ZWQ6IF9nZXQoJ2NoYXQtYnV0dG9uLXRleHQtc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGhpZ2hsaWdodGAgdG9rZW5cbiRoaWdobGlnaHQ6IF9nZXQoJ2hpZ2hsaWdodCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgb3ZlcmxheWAgdG9rZW5cbiRvdmVybGF5OiBfZ2V0KCdvdmVybGF5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0b2dnbGUtb2ZmYCB0b2tlblxuJHRvZ2dsZS1vZmY6IF9nZXQoJ3RvZ2dsZS1vZmYnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNoYWRvd2AgdG9rZW5cbiRzaGFkb3c6IF9nZXQoJ3NoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXNgIHRva2VuXG4kZm9jdXM6IF9nZXQoJ2ZvY3VzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1cy1pbnNldGAgdG9rZW5cbiRmb2N1cy1pbnNldDogX2dldCgnZm9jdXMtaW5zZXQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzLWludmVyc2VgIHRva2VuXG4kZm9jdXMtaW52ZXJzZTogX2dldCgnZm9jdXMtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2tlbGV0b24tYmFja2dyb3VuZGAgdG9rZW5cbiRza2VsZXRvbi1iYWNrZ3JvdW5kOiBfZ2V0KCdza2VsZXRvbi1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBza2VsZXRvbi1lbGVtZW50YCB0b2tlblxuJHNrZWxldG9uLWVsZW1lbnQ6IF9nZXQoJ3NrZWxldG9uLWVsZW1lbnQnKSAhZGVmYXVsdDtcbiIsIi8vXG4vLyBDb3B5cmlnaHQgSUJNIENvcnAuIDIwMTgsIDIwMjNcbi8vXG4vLyBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUtMi4wIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4vLyBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4vL1xuXG5AdXNlICcuLi9jb25maWcnIGFzICo7XG5AdXNlICdAY2FyYm9uL3RoZW1lcy9zY3NzL2NvbmZpZycgd2l0aCAoXG4gICRwcmVmaXg6ICRwcmVmaXhcbik7XG5AdXNlICcuLi9jb21wYXQvdGhlbWVzJyBhcyBjb21wYXQ7XG5AdXNlICcuLi90aGVtZXMnO1xuXG5AZm9yd2FyZCAnQGNhcmJvbi90aGVtZXMvc2Nzcy90aGVtZScgd2l0aCAoXG4gICRmYWxsYmFjazogdGhlbWVzLiR3aGl0ZSAhZGVmYXVsdCxcbiAgJHRoZW1lOiBjb21wYXQuJHdoaXRlICFkZWZhdWx0XG4pO1xuQGZvcndhcmQgJ0BjYXJib24vdGhlbWVzL3Njc3MvdG9rZW5zJztcblxuQHVzZSAnQGNhcmJvbi90aGVtZXMvc2Nzcy90b2tlbnMnO1xuQHVzZSAnQGNhcmJvbi90aGVtZXMvc2Nzcy90aGVtZSc7XG5AdXNlICcuLi91dGlsaXRpZXMvY3VzdG9tLXByb3BlcnR5JztcblxuLy8gTGF5ZXIgc2V0c1xuJGxheWVyOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXInKTtcbiRsYXllci1hY3RpdmU6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1hY3RpdmUnKTtcbiRsYXllci1iYWNrZ3JvdW5kOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItYmFja2dyb3VuZCcpO1xuJGxheWVyLWhvdmVyOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignbGF5ZXItaG92ZXInKTtcbiRsYXllci1zZWxlY3RlZDogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLXNlbGVjdGVkJyk7XG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXI6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1zZWxlY3RlZC1ob3ZlcicpO1xuJGxheWVyLWFjY2VudDogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLWFjY2VudCcpO1xuJGxheWVyLWFjY2VudC1ob3ZlcjogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2xheWVyLWFjY2VudC1ob3ZlcicpO1xuJGxheWVyLWFjY2VudC1hY3RpdmU6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdsYXllci1hY2NlbnQtYWN0aXZlJyk7XG5cbiRmaWVsZDogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2ZpZWxkJyk7XG4kZmllbGQtaG92ZXI6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdmaWVsZC1ob3ZlcicpO1xuXG4kYm9yZGVyLXN1YnRsZTogY3VzdG9tLXByb3BlcnR5LmdldC12YXIoJ2JvcmRlci1zdWJ0bGUnKTtcbiRib3JkZXItc3VidGxlLXNlbGVjdGVkOiBjdXN0b20tcHJvcGVydHkuZ2V0LXZhcignYm9yZGVyLXN1YnRsZS1zZWxlY3RlZCcpO1xuJGJvcmRlci1zdHJvbmc6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdib3JkZXItc3Ryb25nJyk7XG4kYm9yZGVyLXRpbGU6IGN1c3RvbS1wcm9wZXJ0eS5nZXQtdmFyKCdib3JkZXItdGlsZScpO1xuIiwiLy8gQ29kZSBnZW5lcmF0ZWQgYnkgQGNhcmJvbi9sYXlvdXQuIERPIE5PVCBFRElULlxuLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDE6IDAuMTI1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTAyOiAwLjI1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTAzOiAwLjVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDQ6IDAuNzVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDY6IDEuNXJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wNzogMnJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wODogMi41cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTA5OiAzcmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEwOiA0cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTExOiA1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEyOiA2cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEzOiAxMHJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE1hcFxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZzogKFxuICBzcGFjaW5nLTAxOiAkc3BhY2luZy0wMSxcbiAgc3BhY2luZy0wMjogJHNwYWNpbmctMDIsXG4gIHNwYWNpbmctMDM6ICRzcGFjaW5nLTAzLFxuICBzcGFjaW5nLTA0OiAkc3BhY2luZy0wNCxcbiAgc3BhY2luZy0wNTogJHNwYWNpbmctMDUsXG4gIHNwYWNpbmctMDY6ICRzcGFjaW5nLTA2LFxuICBzcGFjaW5nLTA3OiAkc3BhY2luZy0wNyxcbiAgc3BhY2luZy0wODogJHNwYWNpbmctMDgsXG4gIHNwYWNpbmctMDk6ICRzcGFjaW5nLTA5LFxuICBzcGFjaW5nLTEwOiAkc3BhY2luZy0xMCxcbiAgc3BhY2luZy0xMTogJHNwYWNpbmctMTEsXG4gIHNwYWNpbmctMTI6ICRzcGFjaW5nLTEyLFxuICBzcGFjaW5nLTEzOiAkc3BhY2luZy0xMyxcbik7XG4iLCIvL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vLi4vY29uZmlnJztcbkB1c2UgJy4uLy4uL3RoZW1lcyc7XG5AdXNlICcuLi8uLi91dGlsaXRpZXMvY29tcG9uZW50LXRva2Vucyc7XG5AdXNlICdAY2FyYm9uL3RoZW1lcy9zY3NzL2NvbXBvbmVudC10b2tlbnMnIGFzIGJ1dHRvbjtcblxuJGJ1dHRvbi1zZXBhcmF0b3I6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZXBhcmF0b3IsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZXBhcmF0b3IsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1wcmltYXJ5OiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1zZWNvbmRhcnk6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnksIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10ZXJ0aWFyeTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItcHJpbWFyeTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1wcmltYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXByaW1hcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5OiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItYWN0aXZlOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItYWN0aXZlLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmU6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItaG92ZXI6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItaG92ZXIsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1wcmltYXJ5LWhvdmVyOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXI6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlcjogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3Zlciwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlciwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlciwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kaXNhYmxlZDogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRpc2FibGVkLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGlzYWJsZWQsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10b2tlbnM6IChcbiAgYnV0dG9uLXNlcGFyYXRvcjogJGJ1dHRvbi1zZXBhcmF0b3IsXG4gIGJ1dHRvbi1wcmltYXJ5OiAkYnV0dG9uLXByaW1hcnksXG4gIGJ1dHRvbi1zZWNvbmRhcnk6ICRidXR0b24tc2Vjb25kYXJ5LFxuICBidXR0b24tdGVydGlhcnk6ICRidXR0b24tdGVydGlhcnksXG4gIGJ1dHRvbi1kYW5nZXItcHJpbWFyeTogJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSxcbiAgYnV0dG9uLWRhbmdlci1zZWNvbmRhcnk6ICRidXR0b24tZGFuZ2VyLXNlY29uZGFyeSxcbiAgYnV0dG9uLWRhbmdlci1hY3RpdmU6ICRidXR0b24tZGFuZ2VyLWFjdGl2ZSxcbiAgYnV0dG9uLXByaW1hcnktYWN0aXZlOiAkYnV0dG9uLXByaW1hcnktYWN0aXZlLFxuICBidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZTogJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLFxuICBidXR0b24tdGVydGlhcnktYWN0aXZlOiAkYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLWRhbmdlci1ob3ZlcjogJGJ1dHRvbi1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1wcmltYXJ5LWhvdmVyOiAkYnV0dG9uLXByaW1hcnktaG92ZXIsXG4gIGJ1dHRvbi1zZWNvbmRhcnktaG92ZXI6ICRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLFxuICBidXR0b24tdGVydGlhcnktaG92ZXI6ICRidXR0b24tdGVydGlhcnktaG92ZXIsXG4gIGJ1dHRvbi1kaXNhYmxlZDogJGJ1dHRvbi1kaXNhYmxlZCxcbik7XG5cbiRidXR0b24tc2VwYXJhdG9yOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2VwYXJhdG9yLFxuICAnYnV0dG9uLXNlcGFyYXRvcidcbik7XG5cbiRidXR0b24tcHJpbWFyeTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKCRidXR0b24tcHJpbWFyeSwgJ2J1dHRvbi1wcmltYXJ5Jyk7XG5cbiRidXR0b24tc2Vjb25kYXJ5OiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2Vjb25kYXJ5LFxuICAnYnV0dG9uLXNlY29uZGFyeSdcbik7XG5cbiRidXR0b24tdGVydGlhcnk6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcigkYnV0dG9uLXRlcnRpYXJ5LCAnYnV0dG9uLXRlcnRpYXJ5Jyk7XG5cbiRidXR0b24tZGFuZ2VyLXByaW1hcnk6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSxcbiAgJ2J1dHRvbi1kYW5nZXItcHJpbWFyeSdcbik7XG5cbiRidXR0b24tZGFuZ2VyLXNlY29uZGFyeTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksXG4gICdidXR0b24tZGFuZ2VyLXNlY29uZGFyeSdcbik7XG5cbiRidXR0b24tZGFuZ2VyLWFjdGl2ZTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLWRhbmdlci1hY3RpdmUsXG4gICdidXR0b24tZGFuZ2VyLWFjdGl2ZSdcbik7XG5cbiRidXR0b24tcHJpbWFyeS1hY3RpdmU6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSxcbiAgJ2J1dHRvbi1wcmltYXJ5LWFjdGl2ZSdcbik7XG5cbiRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsXG4gICdidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZSdcbik7XG5cbiRidXR0b24tdGVydGlhcnktYWN0aXZlOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tdGVydGlhcnktYWN0aXZlLFxuICAnYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSdcbik7XG5cbiRidXR0b24tZGFuZ2VyLWhvdmVyOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tZGFuZ2VyLWhvdmVyLFxuICAnYnV0dG9uLWRhbmdlci1ob3Zlcidcbik7XG5cbiRidXR0b24tcHJpbWFyeS1ob3ZlcjogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXByaW1hcnktaG92ZXIsXG4gICdidXR0b24tcHJpbWFyeS1ob3Zlcidcbik7XG5cbiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLFxuICAnYnV0dG9uLXNlY29uZGFyeS1ob3Zlcidcbik7XG5cbiRidXR0b24tdGVydGlhcnktaG92ZXI6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlcixcbiAgJ2J1dHRvbi10ZXJ0aWFyeS1ob3Zlcidcbik7XG5cbiRidXR0b24tZGlzYWJsZWQ6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcigkYnV0dG9uLWRpc2FibGVkLCAnYnV0dG9uLWRpc2FibGVkJyk7XG4iXX0= */`,document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(V))}),M={};B(M,{css:()=>m});var m,D=I(()=>{m=`/**
 * Unified Button Mixin
 * Provides comprehensive button styling with all customization options
 *
 * @param {string} $size - Size level: "xs", "sm", "md", "lg", "xl", "2xl", or null to skip sizing (default: "lg")
 * @param {string} $kind - Button kind: "ghost", "primary", "secondary" (default: "ghost")
 * @param {boolean} $focus - Whether to include focus styles (default: true)
 * @param {boolean} $states - Whether to include hover/active states (default: true)
 *
 * @example Basic button with default settings
 *   @include button();
 *
 * @example Button without focus styles
 *   @include button("lg", "ghost", false);
 *
 * @example Primary button with medium size
 *   @include button("md", "primary");
 *
 * @example Button with only reset styles (no states)
 *   @include button(null, "ghost", true, false);
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
 * ArgTable Base
 * Base styling for controls/props tables
 * Used in both docs.scss and panel.scss
 */
/**
 * ArgTable Body Row
 * Standard control rows in argstable
 */
/**
 * ArgTable Type Badge
 * Type information badges (string, number, etc.)
 */
/**
 * ArgTable Required Indicator
 * Shows which props are required
 */
/**
 * ArgTable Item Row
 * Expandable rows for arrays/objects
 */
/**
 * Link Styling
 * Provides consistent anchor tag styling with Carbon theme tokens
 * Includes hover, active, visited, and focus states
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
  background-color: var(--cds-background, #ffffff);
}

/**
 * Text Selection
 * Custom selection color using Carbon theme token with transparency
 * Uses focus color for consistency with Carbon Design System
 */
::selection {
  background-color: color-mix(in srgb, var(--cds-focus, #0f62fe) 60%, transparent) !important;
}

::-moz-selection {
  background-color: color-mix(in srgb, var(--cds-focus, #0f62fe) 60%, transparent) !important;
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
  box-shadow: none;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
}
[data-popper-interactive] button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12)) !important;
}
[data-popper-interactive] button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5)) !important;
}
[data-popper-interactive] button span {
  color: var(--cds-text-primary, #161616) !important;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbIl9taXhpbnMuc2NzcyIsImNvbW1vbi5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXJib24vdGhlbWVzL3Njc3MvZ2VuZXJhdGVkL190b2tlbnMuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3N0eWxlcy9zY3NzL2NvbXBvbmVudHMvYnV0dG9uL190b2tlbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQTRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FDdFZBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtFQUNFOzs7QUFHRjtBQUFBO0FBQUE7QUFBQTtBQUlBO0VBQ0U7RUFDQSxrQkNGVzs7O0FES2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0VBQ0U7OztBQU9GO0VBQ0U7OztBQU9GO0FBQUE7QUFBQTtBQUFBO0FBSUE7RUFDRSxjQ3dHaUI7O0FEdEdqQjtFQUNFLGtCQzRJaUI7OztBRHhJckI7QUFBQTtBQUFBO0FBQUE7QUFJQTtFQUNFLGtCRStTaUI7RUY5U2pCO0VBQ0EsT0N5SmM7RUR4SmQ7OztBQUdGO0FBQUE7QUFBQTtBQUFBO0FBSUE7RUFDRTs7QUFFQTtFQUNFLGtCQ2pDTztFRGtDUDtFQUNBOztBQUdGO0VBQ0UsTUNxSFc7O0FEbEhiO0VEckJBO0VBQ0E7RUFJQTtFQUNBOztBQVdFO0VBQ0U7O0FBR0Y7RUFDRTs7QUNFRjtFQUNFIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcInNhc3M6bGlzdFwiO1xuQHVzZSBcInNhc3M6bWFwXCI7XG5AdXNlIFwiQGNhcmJvbi9sYXlvdXRcIjtcbkB1c2UgXCJAY2FyYm9uL3N0eWxlcy9zY3NzL3RoZW1lXCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy9zcGFjaW5nXCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90eXBlXCI7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy9jb21wb25lbnRzL2J1dHRvbi90b2tlbnNcIiBhcyBidXR0b24tdG9rZW5zO1xuQHVzZSBcImRlZmF1bHRzXCI7XG5cbi8vIEJ1dHRvbiBzaXplIG1hcCBmb3IgRFJZIHByaW5jaXBsZVxuJGJ1dHRvbi1zaXplczogKFxuICBcInhzXCI6IHNwYWNpbmcuJHNwYWNpbmctMDUsXG4gIFwic21cIjogc3BhY2luZy4kc3BhY2luZy0wNixcbiAgXCJtZFwiOiBzcGFjaW5nLiRzcGFjaW5nLTA3LFxuICBcImxnXCI6IHNwYWNpbmcuJHNwYWNpbmctMDgsXG4gIFwieGxcIjogc3BhY2luZy4kc3BhY2luZy0wOSxcbiAgXCIyeGxcIjogc3BhY2luZy4kc3BhY2luZy0xMCxcbik7XG5cbi8vIEJ1dHRvbiBraW5kIGNvbmZpZ3VyYXRpb25zXG4kYnV0dG9uLWtpbmRzOiAoXG4gIFwicHJpbWFyeVwiOiAoXG4gICAgXCJiYWNrZ3JvdW5kXCI6IGJ1dHRvbi10b2tlbnMuJGJ1dHRvbi1wcmltYXJ5LFxuICAgIFwiY29sb3JcIjogdGhlbWUuJHRleHQtb24tY29sb3IsXG4gICAgXCJob3ZlclwiOiBidXR0b24tdG9rZW5zLiRidXR0b24tcHJpbWFyeS1ob3ZlcixcbiAgICBcImFjdGl2ZVwiOiBidXR0b24tdG9rZW5zLiRidXR0b24tcHJpbWFyeS1hY3RpdmUsXG4gICAgXCJmb2N1c1wiOiB0aGVtZS4kZm9jdXMtaW52ZXJzZSxcbiAgKSxcbiAgXCJzZWNvbmRhcnlcIjogKFxuICAgIFwiYmFja2dyb3VuZFwiOiBidXR0b24tdG9rZW5zLiRidXR0b24tc2Vjb25kYXJ5LFxuICAgIFwiY29sb3JcIjogdGhlbWUuJHRleHQtb24tY29sb3IsXG4gICAgXCJob3ZlclwiOiBidXR0b24tdG9rZW5zLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLFxuICAgIFwiYWN0aXZlXCI6IGJ1dHRvbi10b2tlbnMuJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLFxuICAgIFwiZm9jdXNcIjogdGhlbWUuJGZvY3VzLFxuICApLFxuICBcImdob3N0XCI6IChcbiAgICBcImJhY2tncm91bmRcIjogdHJhbnNwYXJlbnQsXG4gICAgXCJjb2xvclwiOiB0aGVtZS4kdGV4dC1wcmltYXJ5LFxuICAgIFwiaG92ZXJcIjogdGhlbWUuJGJhY2tncm91bmQtaG92ZXIsXG4gICAgXCJhY3RpdmVcIjogdGhlbWUuJGJhY2tncm91bmQtYWN0aXZlLFxuICAgIFwiZm9jdXNcIjogdGhlbWUuJGZvY3VzLFxuICApLFxuKTtcblxuLyoqXG4gKiBVbmlmaWVkIEJ1dHRvbiBNaXhpblxuICogUHJvdmlkZXMgY29tcHJlaGVuc2l2ZSBidXR0b24gc3R5bGluZyB3aXRoIGFsbCBjdXN0b21pemF0aW9uIG9wdGlvbnNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gJHNpemUgLSBTaXplIGxldmVsOiBcInhzXCIsIFwic21cIiwgXCJtZFwiLCBcImxnXCIsIFwieGxcIiwgXCIyeGxcIiwgb3IgbnVsbCB0byBza2lwIHNpemluZyAoZGVmYXVsdDogXCJsZ1wiKVxuICogQHBhcmFtIHtzdHJpbmd9ICRraW5kIC0gQnV0dG9uIGtpbmQ6IFwiZ2hvc3RcIiwgXCJwcmltYXJ5XCIsIFwic2Vjb25kYXJ5XCIgKGRlZmF1bHQ6IFwiZ2hvc3RcIilcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gJGZvY3VzIC0gV2hldGhlciB0byBpbmNsdWRlIGZvY3VzIHN0eWxlcyAoZGVmYXVsdDogdHJ1ZSlcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gJHN0YXRlcyAtIFdoZXRoZXIgdG8gaW5jbHVkZSBob3Zlci9hY3RpdmUgc3RhdGVzIChkZWZhdWx0OiB0cnVlKVxuICpcbiAqIEBleGFtcGxlIEJhc2ljIGJ1dHRvbiB3aXRoIGRlZmF1bHQgc2V0dGluZ3NcbiAqICAgQGluY2x1ZGUgYnV0dG9uKCk7XG4gKlxuICogQGV4YW1wbGUgQnV0dG9uIHdpdGhvdXQgZm9jdXMgc3R5bGVzXG4gKiAgIEBpbmNsdWRlIGJ1dHRvbihcImxnXCIsIFwiZ2hvc3RcIiwgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlIFByaW1hcnkgYnV0dG9uIHdpdGggbWVkaXVtIHNpemVcbiAqICAgQGluY2x1ZGUgYnV0dG9uKFwibWRcIiwgXCJwcmltYXJ5XCIpO1xuICpcbiAqIEBleGFtcGxlIEJ1dHRvbiB3aXRoIG9ubHkgcmVzZXQgc3R5bGVzIChubyBzdGF0ZXMpXG4gKiAgIEBpbmNsdWRlIGJ1dHRvbihudWxsLCBcImdob3N0XCIsIHRydWUsIGZhbHNlKTtcbiAqL1xuQG1peGluIGJ1dHRvbigkc2l6ZTogXCJsZ1wiLCAka2luZDogXCJnaG9zdFwiLCAkZm9jdXM6IHRydWUsICRzdGF0ZXM6IHRydWUpIHtcbiAgLy8gQmFzZSByZXNldCBzdHlsZXNcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcblxuICAvLyBBcHBseSBraW5kLXNwZWNpZmljIGJhc2Ugc3R5bGVzXG4gICRraW5kLWNvbmZpZzogbWFwLmdldCgkYnV0dG9uLWtpbmRzLCAka2luZCk7XG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC5nZXQoJGtpbmQtY29uZmlnLCBcImJhY2tncm91bmRcIik7XG4gIGNvbG9yOiBtYXAuZ2V0KCRraW5kLWNvbmZpZywgXCJjb2xvclwiKSAhaW1wb3J0YW50O1xuXG4gIC8vIEFwcGx5IHNpemluZyBpZiBzcGVjaWZpZWRcbiAgQGlmICRzaXplIGFuZCBtYXAuaGFzLWtleSgkYnV0dG9uLXNpemVzLCAkc2l6ZSkge1xuICAgICRzaXplLXZhbHVlOiBtYXAuZ2V0KCRidXR0b24tc2l6ZXMsICRzaXplKTtcbiAgICBtaW4tYmxvY2stc2l6ZTogJHNpemUtdmFsdWU7XG4gICAgbWluLWlubGluZS1zaXplOiAkc2l6ZS12YWx1ZTtcbiAgfVxuXG4gIC8vIEFwcGx5IGludGVyYWN0aXZlIHN0YXRlcyBpZiBzcGVjaWZpZWRcbiAgQGlmICRzdGF0ZXMge1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLmdldCgka2luZC1jb25maWcsIFwiaG92ZXJcIikgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAuZ2V0KCRraW5kLWNvbmZpZywgXCJhY3RpdmVcIikgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAvLyBBcHBseSBmb2N1cyBzdHlsZXMgaWYgc3BlY2lmaWVkXG4gIEBpZiAkZm9jdXMge1xuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IG1hcC5nZXQoJGtpbmQtY29uZmlnLCBcImZvY3VzXCIpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSW5wdXQgRmllbGQgU3R5bGluZ1xuICogUHJvdmlkZXMgY29uc2lzdGVudCBzdHlsaW5nIGZvciBpbnB1dCBlbGVtZW50cyAodGV4dCwgdGV4dGFyZWEsIHNlbGVjdClcbiAqIEBwYXJhbSB7c3RyaW5nfSAkbGF5ZXIgLSBMYXllciBsZXZlbCBmb3IgdGhlIGlucHV0IGJhY2tncm91bmRcbiAqL1xuQG1peGluIGlucHV0LWZpZWxkKCRsYXllcjogXCJsYXllci0wMVwiKSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgQGlmICRsYXllciA9PSBcImxheWVyLTAyXCIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsYXllci0wMjtcbiAgfSBAZWxzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyLTAxO1xuICB9XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1zZWNvbmRhcnk7XG4gIH1cblxuICAvLyBBcHBseSBpbnRlcmFjdGl2ZSBzdGF0ZXMgdXNpbmcgdW5pZmllZCBidXR0b24gbWl4aW5cbiAgQGluY2x1ZGUgYnV0dG9uKG51bGwsIFwiZ2hvc3RcIiwgZmFsc2UsIHRydWUpO1xuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCB0aGVtZS4kZm9jdXM7XG4gIH1cbn1cblxuLyoqXG4gKiBCb3JkZXIgQm90dG9tIElucHV0XG4gKiBBZGRzIGJvdHRvbSBib3JkZXIgZm9yIHRleHQgaW5wdXRzIGZvbGxvd2luZyBDYXJib24gZGVzaWduIHBhdHRlcm5cbiAqL1xuQG1peGluIGlucHV0LWJvcmRlci1ib3R0b20ge1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCB0aGVtZS4kYm9yZGVyLXN0cm9uZy0wMTtcbn1cblxuLyoqXG4gKiBGb2N1cyBTdGF0ZVxuICogQXBwbGllcyBjb25zaXN0ZW50IGZvY3VzIHN0eWxpbmcgYWNyb3NzIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSAkdHlwZSAtIFR5cGUgb2YgZm9jdXMgKGluc2V0LCBvdXRsaW5lKVxuICovXG5AbWl4aW4gZm9jdXMtc3RhdGUoJHR5cGU6IFwiaW5zZXRcIikge1xuICBAaWYgJHR5cGUgPT0gXCJvdXRsaW5lXCIge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCB0aGVtZS4kZm9jdXM7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIH0gQGVsc2Uge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCB0aGVtZS4kZm9jdXMgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKipcbiAqIFRhYiBCdXR0b24gU3R5bGluZ1xuICogQ29uc2lzdGVudCBzdHlsaW5nIGZvciB0YWIgYnV0dG9ucyB3aXRoIGFjdGl2ZSBzdGF0ZSBpbmRpY2F0b3JcbiAqL1xuQG1peGluIHRhYi1idXR0b24ge1xuICBAaW5jbHVkZSBidXR0b24oXCJsZ1wiLCBcImdob3N0XCIsIGZhbHNlKTtcbiAgZm9udC13ZWlnaHQ6IHVuc2V0O1xuXG4gICY6Zm9jdXMge1xuICAgIEBpbmNsdWRlIGZvY3VzLXN0YXRlKFwib3V0bGluZVwiKTtcbiAgICBib3JkZXItd2lkdGg6IDJweCAwO1xuICAgIGJvcmRlci1jb2xvcjogdW5zZXQ7XG4gIH1cbn1cblxuLyoqXG4gKiBBY3RpdmUgVGFiIEluZGljYXRvclxuICogQXBwbGllcyBib3R0b20gYm9yZGVyIHRvIGluZGljYXRlIGFjdGl2ZSB0YWIgc3RhdGVcbiAqL1xuQG1peGluIHRhYi1hY3RpdmUge1xuICBib3JkZXItd2lkdGg6IDJweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRoZW1lLiRib3JkZXItaW50ZXJhY3RpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKipcbiAqIEJhZGdlL1RhZyBTdHlsaW5nXG4gKiBGb3IgY291bnQgaW5kaWNhdG9ycyBhbmQgdGFnc1xuICogQHBhcmFtIHtib29sZWFufSAkYWN0aXZlIC0gV2hldGhlciB0aGUgYmFkZ2UgaXMgb24gYW4gYWN0aXZlIGVsZW1lbnRcbiAqL1xuQG1peGluIGJhZGdlKCRhY3RpdmU6IGZhbHNlKSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgQGlmICRhY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRib3JkZXItaW50ZXJhY3RpdmU7XG4gICAgY29sb3I6IHRoZW1lLiR0ZXh0LW9uLWNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kYm9yZGVyLXN1YnRsZTtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuICB9XG59XG5cbkBtaXhpbiBsaXN0IHtcbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogXCLigJRcIjtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIG1heC1pbmxpbmUtc2l6ZTogZGVmYXVsdHMuJG1heC1pbmxpbmUtc2l6ZTtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuICB9XG5cbiAgdWwgbGkge1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHNwYWNpbmcuJHNwYWNpbmctMDU7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHNwYWNpbmcuJHNwYWNpbmctMDU7XG4gIH1cblxuICB1bCBsaSBwLFxuICBvbCBsaSBwIHtcbiAgICBtYXJnaW4tYmxvY2s6IDA7XG4gIH1cblxuICBvbCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogc3BhY2luZy4kc3BhY2luZy0wNTtcbiAgfVxuXG4gIG9sIGxpIHtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBzcGFjaW5nLiRzcGFjaW5nLTA1O1xuICB9XG5cbiAgb2wgb2wge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbG93ZXItYWxwaGE7XG4gIH1cblxuICBvbCBvbCBvbCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1yb21hbjtcbiAgfVxufVxuXG5AbWl4aW4gaGVhZGluZyB7XG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNiB7XG4gICAgJHNwYWNpbmdzOiAoXG4gICAgICBzcGFjaW5nLiRzcGFjaW5nLTA3LFxuICAgICAgc3BhY2luZy4kc3BhY2luZy0wNixcbiAgICAgIHNwYWNpbmcuJHNwYWNpbmctMDUsXG4gICAgICBzcGFjaW5nLiRzcGFjaW5nLTA0LFxuICAgICAgc3BhY2luZy4kc3BhY2luZy0wMyxcbiAgICAgIHNwYWNpbmcuJHNwYWNpbmctMDJcbiAgICApO1xuXG4gICAgaCN7JGl9IHtcbiAgICAgIEBpbmNsdWRlIHR5cGUudHlwZS1zdHlsZShcImhlYWRpbmctMCN7NyAtICRpfVwiKTtcbiAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogbGlzdC5udGgoJHNwYWNpbmdzLCAkaSk7XG4gICAgICBtYXJnaW4tYmxvY2stZW5kOiBzcGFjaW5nLiRzcGFjaW5nLTAzO1xuICAgICAgY29sb3I6IHRoZW1lLiR0ZXh0LXByaW1hcnk7XG4gICAgfVxuICB9XG4gIGgyIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG59XG5cbkBtaXhpbiBwYXJhZ3JhcGgge1xuICBwIHtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xuICB9XG59XG5cbkBtaXhpbiBob3Jpem9udGFsLXJ1bGUge1xuICBociB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRoZW1lLiRib3JkZXItc3VidGxlO1xuICAgIG1hcmdpbjogc3BhY2luZy4kc3BhY2luZy0wMyAwO1xuICB9XG59XG5cbi8qKlxuICogQXJnVGFibGUgQmFzZVxuICogQmFzZSBzdHlsaW5nIGZvciBjb250cm9scy9wcm9wcyB0YWJsZXNcbiAqIFVzZWQgaW4gYm90aCBkb2NzLnNjc3MgYW5kIHBhbmVsLnNjc3NcbiAqL1xuQG1peGluIGFyZ3N0YWJsZS1iYXNlIHtcbiAgKiB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gID4gdGhlYWQuZG9jYmxvY2stYXJnc3RhYmxlLWhlYWQgPiB0ciA+IHRoID4gc3BhbiB7XG4gICAgY29sb3I6IHRoZW1lLiR0ZXh0LXByaW1hcnk7XG4gIH1cbn1cblxuLyoqXG4gKiBBcmdUYWJsZSBCb2R5IFJvd1xuICogU3RhbmRhcmQgY29udHJvbCByb3dzIGluIGFyZ3N0YWJsZVxuICovXG5AbWl4aW4gYXJnc3RhYmxlLXJvdyB7XG4gIGJhY2tncm91bmQ6IHRoZW1lLiRiYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6IHRoZW1lLiRib3JkZXItc3VidGxlO1xuICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5O1xufVxuXG4vKipcbiAqIEFyZ1RhYmxlIFR5cGUgQmFkZ2VcbiAqIFR5cGUgaW5mb3JtYXRpb24gYmFkZ2VzIChzdHJpbmcsIG51bWJlciwgZXRjLilcbiAqL1xuQG1peGluIGFyZ3N0YWJsZS10eXBlLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeTtcblxuICAuY3NzLW1rampwcyxcbiAgLmNzcy1vMWQ3a28sXG4gIC5jc3MtM3FtaDJiLFxuICAuY3NzLTZxN3NuaSB7XG4gICAgLy8gdG9kbyBjaGVjayBmb3IgYWx0ZXJuYXRpdmVzXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRoZW1lLiRib3JkZXItc3VidGxlO1xuICB9XG59XG5cbi8qKlxuICogQXJnVGFibGUgUmVxdWlyZWQgSW5kaWNhdG9yXG4gKiBTaG93cyB3aGljaCBwcm9wcyBhcmUgcmVxdWlyZWRcbiAqL1xuQG1peGluIGFyZ3N0YWJsZS1yZXF1aXJlZCB7XG4gIGNvbG9yOiB0aGVtZS4kc3VwcG9ydC1lcnJvcjtcbn1cblxuLyoqXG4gKiBBcmdUYWJsZSBJdGVtIFJvd1xuICogRXhwYW5kYWJsZSByb3dzIGZvciBhcnJheXMvb2JqZWN0c1xuICovXG5AbWl4aW4gYXJnc3RhYmxlLWl0ZW0tcm93IHtcbiAgYmFja2dyb3VuZDogdGhlbWUuJGxheWVyLTAxICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMHB4IDFweCB0aGVtZS4kYm9yZGVyLXN1YnRsZTtcblxuICAmOmhhcyhidXR0b246Zm9jdXMpIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggdGhlbWUuJGZvY3VzICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuJGxheWVyLTAxICFpbXBvcnRhbnQ7XG4gIH1cblxuICA+IHRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtcHJpbWFyeTtcblxuICAgID4gc3BhbiA+IHN2ZyB7XG4gICAgICBjb2xvcjogdGhlbWUuJGljb24tcHJpbWFyeTtcbiAgICB9XG5cbiAgICA+IGJ1dHRvbjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIExpbmsgU3R5bGluZ1xuICogUHJvdmlkZXMgY29uc2lzdGVudCBhbmNob3IgdGFnIHN0eWxpbmcgd2l0aCBDYXJib24gdGhlbWUgdG9rZW5zXG4gKiBJbmNsdWRlcyBob3ZlciwgYWN0aXZlLCB2aXNpdGVkLCBhbmQgZm9jdXMgc3RhdGVzXG4gKi9cbkBtaXhpbiBsaW5rIHtcbiAgYSB7XG4gICAgY29sb3I6IHRoZW1lLiRsaW5rLXByaW1hcnk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdGhlbWUuJGxpbmstcHJpbWFyeS1ob3ZlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGNvbG9yOiB0aGVtZS4kbGluay1wcmltYXJ5O1xuICAgIH1cblxuICAgICY6dmlzaXRlZCB7XG4gICAgICBjb2xvcjogdGhlbWUuJGxpbmstdmlzaXRlZDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCB0aGVtZS4kZm9jdXM7XG4gICAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gY29kZSB7XG4gIGNvZGUge1xuICAgIGNvbG9yOiB0aGVtZS4kdGV4dC1wcmltYXJ5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRsYXllci0wMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0aGVtZS4kYm9yZGVyLXN1YnRsZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG59XG4iLCJAdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZVwiO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvY29tcG9uZW50cy9idXR0b24vdG9rZW5zXCIgYXMgYnV0dG9uLXRva2VucztcbkB1c2UgXCJtaXhpbnNcIjtcbkB1c2UgXCJkZWZhdWx0c1wiO1xuXG4vKipcbiAqIEdMT0JBTCBTVFlMRVNcbiAqIEJhc2Ugc3R5bGluZyBmb3IgY29tbW9uIGVsZW1lbnRzIGFjcm9zcyB0aGUgU3Rvcnlib29rIGludGVyZmFjZVxuICovXG5cbi8qKlxuICogU2Nyb2xsYmFyIFN0eWxpbmdcbiAqIFVzZXMgQ2FyYm9uIHRoZW1lIHRva2VucyBmb3IgY29uc2lzdGVudCBzY3JvbGxiYXIgY29sb3JzXG4gKi9cbioge1xuICBzY3JvbGxiYXItY29sb3I6IHRoZW1lLiRib3JkZXItaW52ZXJzZSB0aGVtZS4kYm9yZGVyLXN1YnRsZS0wMSAhaW1wb3J0YW50O1xufVxuXG4vKipcbiAqIEJhc2UgQm9keSBUZXh0XG4gKiBTZXRzIGRlZmF1bHQgdGV4dCBjb2xvciB1c2luZyBDYXJib24ncyBzZWNvbmRhcnkgdGV4dCB0b2tlblxuICovXG5ib2R5IHtcbiAgY29sb3I6IHRoZW1lLiR0ZXh0LXNlY29uZGFyeSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGVtZS4kYmFja2dyb3VuZDtcbn1cblxuLyoqXG4gKiBUZXh0IFNlbGVjdGlvblxuICogQ3VzdG9tIHNlbGVjdGlvbiBjb2xvciB1c2luZyBDYXJib24gdGhlbWUgdG9rZW4gd2l0aCB0cmFuc3BhcmVuY3lcbiAqIFVzZXMgZm9jdXMgY29sb3IgZm9yIGNvbnNpc3RlbmN5IHdpdGggQ2FyYm9uIERlc2lnbiBTeXN0ZW1cbiAqL1xuOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoXG4gICAgaW4gc3JnYixcbiAgICB0aGVtZS4kZm9jdXMgNjAlLFxuICAgIHRyYW5zcGFyZW50XG4gICkgIWltcG9ydGFudDtcbn1cblxuOjotbW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChcbiAgICBpbiBzcmdiLFxuICAgIHRoZW1lLiRmb2N1cyA2MCUsXG4gICAgdHJhbnNwYXJlbnRcbiAgKSAhaW1wb3J0YW50O1xufVxuXG4vKipcbiAqIE1haW4gTGF5b3V0IENvbnRhaW5lclxuICogU3R5bGVzIHRoZSByb290IFN0b3J5Ym9vayBsYXlvdXQgc3RydWN0dXJlXG4gKi9cbiNyb290ID4gZGl2ID4gZGl2IHtcbiAgYm9yZGVyLWNvbG9yOiB0aGVtZS4kYm9yZGVyLXN1YnRsZS0wMTtcblxuICA+IGRpdjpmaXJzdC1jaGlsZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRoZW1lLiRib3JkZXItaW50ZXJhY3RpdmU7XG4gIH1cbn1cblxuLyoqXG4gKiBBY2Nlc3NpYmlsaXR5OiBTa2lwIExpbmtcbiAqIEZvY3VzIHN0YXRlIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHNraXAgbGlua1xuICovXG4jc3Rvcnlib29rLXByZXZpZXctd3JhcHBlciBhW3RpdGxlPVwiU2tpcCB0byBzaWRlYmFyXCJdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnV0dG9uLXRva2Vucy4kYnV0dG9uLXNlY29uZGFyeTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjb2xvcjogdGhlbWUuJHRleHQtb24tY29sb3I7XG4gIGJveC1zaGFkb3c6IHRoZW1lLiRmb2N1cyAwcHggMHB4IDBweCAycHggaW5zZXQ7XG59XG5cbi8qKlxuICogUG9wcGVyIEludGVyYWN0aXZlIEVsZW1lbnRzXG4gKiBTdHlsaW5nIGZvciB0b29sdGlwcywgZHJvcGRvd25zLCBhbmQgb3RoZXIgcG9wcGVyLWJhc2VkIGNvbXBvbmVudHNcbiAqL1xuW2RhdGEtcG9wcGVyLWludGVyYWN0aXZlXSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcblxuICA+IGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGhlbWUuJGxheWVyLTAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdGhlbWUuJHRleHQtc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBzdmcgPiBwYXRoIHtcbiAgICBmaWxsOiB0aGVtZS4kdGV4dC1wcmltYXJ5O1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBtaXhpbnMuYnV0dG9uKG51bGwsIFwiZ2hvc3RcIiwgZmFsc2UsIHRydWUpO1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogdGhlbWUuJHRleHQtcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29kZSBnZW5lcmF0ZWQgYnkgQGNhcmJvbi90aGVtZXMuIERPIE5PVCBFRElULlxuLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvbmZpZyc7XG5AdXNlICcuLi90aGVtZSc7XG5cbi8vLyBJbnRlcm5hbCBoZWxwZXIgZm9yIGdlbmVyYXRpbmcgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG5AZnVuY3Rpb24gX2dldCgkdG9rZW4pIHtcbiAgQGlmIGNvbmZpZy4kdXNlLWZhbGxiYWNrLXZhbHVlID09IGZhbHNlIHtcbiAgICBAcmV0dXJuIHZhcigtLSN7Y29uZmlnLiRwcmVmaXh9LSN7JHRva2VufSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skdG9rZW59LCAje3RoZW1lLmdldCgkdG9rZW4pfSk7XG4gIH1cbn1cblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmRgIHRva2VuXG4kYmFja2dyb3VuZDogX2dldCgnYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1hY3RpdmVgIHRva2VuXG4kYmFja2dyb3VuZC1hY3RpdmU6IF9nZXQoJ2JhY2tncm91bmQtYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLXNlbGVjdGVkYCB0b2tlblxuJGJhY2tncm91bmQtc2VsZWN0ZWQ6IF9nZXQoJ2JhY2tncm91bmQtc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtc2VsZWN0ZWQtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWJyYW5kYCB0b2tlblxuJGJhY2tncm91bmQtYnJhbmQ6IF9nZXQoJ2JhY2tncm91bmQtYnJhbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtaW52ZXJzZWAgdG9rZW5cbiRiYWNrZ3JvdW5kLWludmVyc2U6IF9nZXQoJ2JhY2tncm91bmQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtaW52ZXJzZS1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wMWAgdG9rZW5cbiRsYXllci0wMTogX2dldCgnbGF5ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wMWAgdG9rZW5cbiRsYXllci1hY3RpdmUtMDE6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wMWAgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAxOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1ob3Zlci0wMTogX2dldCgnbGF5ZXItaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAxYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAxOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDFgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDE6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wMmAgdG9rZW5cbiRsYXllci0wMjogX2dldCgnbGF5ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wMmAgdG9rZW5cbiRsYXllci1hY3RpdmUtMDI6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wMmAgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAyOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1ob3Zlci0wMjogX2dldCgnbGF5ZXItaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAyYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAyOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDJgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDI6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wM2AgdG9rZW5cbiRsYXllci0wMzogX2dldCgnbGF5ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wM2AgdG9rZW5cbiRsYXllci1hY3RpdmUtMDM6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wM2AgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAzOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1ob3Zlci0wMzogX2dldCgnbGF5ZXItaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAzYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAzOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDNgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDM6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1pbnZlcnNlYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWludmVyc2U6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWRpc2FibGVkYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWRpc2FibGVkOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMTogX2dldCgnbGF5ZXItYWNjZW50LTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDE6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDE6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMjogX2dldCgnbGF5ZXItYWNjZW50LTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDI6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDI6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMzogX2dldCgnbGF5ZXItYWNjZW50LTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDM6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDM6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDFgIHRva2VuXG4kZmllbGQtMDE6IF9nZXQoJ2ZpZWxkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wMWAgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMTogX2dldCgnZmllbGQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAyYCB0b2tlblxuJGZpZWxkLTAyOiBfZ2V0KCdmaWVsZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDJgIHRva2VuXG4kZmllbGQtaG92ZXItMDI6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wM2AgdG9rZW5cbiRmaWVsZC0wMzogX2dldCgnZmllbGQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAzYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAzOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaW50ZXJhY3RpdmVgIHRva2VuXG4kaW50ZXJhY3RpdmU6IF9nZXQoJ2ludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAwYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDA6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDAnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDFgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMTogX2dldCgnYm9yZGVyLXN1YnRsZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMWAgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAyYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDI6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDJgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMjogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wM2AgdG9rZW5cbiRib3JkZXItc3VidGxlLTAzOiBfZ2V0KCdib3JkZXItc3VidGxlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAzYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDM6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDFgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMTogX2dldCgnYm9yZGVyLXN0cm9uZy0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wMmAgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAyOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAzYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDM6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAxYCB0b2tlblxuJGJvcmRlci10aWxlLTAxOiBfZ2V0KCdib3JkZXItdGlsZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDJgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDI6IF9nZXQoJ2JvcmRlci10aWxlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wM2AgdG9rZW5cbiRib3JkZXItdGlsZS0wMzogX2dldCgnYm9yZGVyLXRpbGUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1pbnZlcnNlYCB0b2tlblxuJGJvcmRlci1pbnZlcnNlOiBfZ2V0KCdib3JkZXItaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWludGVyYWN0aXZlYCB0b2tlblxuJGJvcmRlci1pbnRlcmFjdGl2ZTogX2dldCgnYm9yZGVyLWludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItZGlzYWJsZWRgIHRva2VuXG4kYm9yZGVyLWRpc2FibGVkOiBfZ2V0KCdib3JkZXItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtcHJpbWFyeWAgdG9rZW5cbiR0ZXh0LXByaW1hcnk6IF9nZXQoJ3RleHQtcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1zZWNvbmRhcnlgIHRva2VuXG4kdGV4dC1zZWNvbmRhcnk6IF9nZXQoJ3RleHQtc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXBsYWNlaG9sZGVyYCB0b2tlblxuJHRleHQtcGxhY2Vob2xkZXI6IF9nZXQoJ3RleHQtcGxhY2Vob2xkZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtaGVscGVyYCB0b2tlblxuJHRleHQtaGVscGVyOiBfZ2V0KCd0ZXh0LWhlbHBlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1lcnJvcmAgdG9rZW5cbiR0ZXh0LWVycm9yOiBfZ2V0KCd0ZXh0LWVycm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWludmVyc2VgIHRva2VuXG4kdGV4dC1pbnZlcnNlOiBfZ2V0KCd0ZXh0LWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtb24tY29sb3JgIHRva2VuXG4kdGV4dC1vbi1jb2xvcjogX2dldCgndGV4dC1vbi1jb2xvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1vbi1jb2xvci1kaXNhYmxlZGAgdG9rZW5cbiR0ZXh0LW9uLWNvbG9yLWRpc2FibGVkOiBfZ2V0KCd0ZXh0LW9uLWNvbG9yLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWRpc2FibGVkYCB0b2tlblxuJHRleHQtZGlzYWJsZWQ6IF9nZXQoJ3RleHQtZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstcHJpbWFyeWAgdG9rZW5cbiRsaW5rLXByaW1hcnk6IF9nZXQoJ2xpbmstcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1wcmltYXJ5LWhvdmVyYCB0b2tlblxuJGxpbmstcHJpbWFyeS1ob3ZlcjogX2dldCgnbGluay1wcmltYXJ5LWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXNlY29uZGFyeWAgdG9rZW5cbiRsaW5rLXNlY29uZGFyeTogX2dldCgnbGluay1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS12aXNpdGVkYCB0b2tlblxuJGxpbmstaW52ZXJzZS12aXNpdGVkOiBfZ2V0KCdsaW5rLWludmVyc2UtdmlzaXRlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay12aXNpdGVkYCB0b2tlblxuJGxpbmstdmlzaXRlZDogX2dldCgnbGluay12aXNpdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2VgIHRva2VuXG4kbGluay1pbnZlcnNlOiBfZ2V0KCdsaW5rLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS1hY3RpdmVgIHRva2VuXG4kbGluay1pbnZlcnNlLWFjdGl2ZTogX2dldCgnbGluay1pbnZlcnNlLWFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLWhvdmVyYCB0b2tlblxuJGxpbmstaW52ZXJzZS1ob3ZlcjogX2dldCgnbGluay1pbnZlcnNlLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLXByaW1hcnlgIHRva2VuXG4kaWNvbi1wcmltYXJ5OiBfZ2V0KCdpY29uLXByaW1hcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tc2Vjb25kYXJ5YCB0b2tlblxuJGljb24tc2Vjb25kYXJ5OiBfZ2V0KCdpY29uLXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1pbnZlcnNlYCB0b2tlblxuJGljb24taW52ZXJzZTogX2dldCgnaWNvbi1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLW9uLWNvbG9yYCB0b2tlblxuJGljb24tb24tY29sb3I6IF9nZXQoJ2ljb24tb24tY29sb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tb24tY29sb3ItZGlzYWJsZWRgIHRva2VuXG4kaWNvbi1vbi1jb2xvci1kaXNhYmxlZDogX2dldCgnaWNvbi1vbi1jb2xvci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1kaXNhYmxlZGAgdG9rZW5cbiRpY29uLWRpc2FibGVkOiBfZ2V0KCdpY29uLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWludGVyYWN0aXZlYCB0b2tlblxuJGljb24taW50ZXJhY3RpdmU6IF9nZXQoJ2ljb24taW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtZXJyb3JgIHRva2VuXG4kc3VwcG9ydC1lcnJvcjogX2dldCgnc3VwcG9ydC1lcnJvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1zdWNjZXNzYCB0b2tlblxuJHN1cHBvcnQtc3VjY2VzczogX2dldCgnc3VwcG9ydC1zdWNjZXNzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXdhcm5pbmdgIHRva2VuXG4kc3VwcG9ydC13YXJuaW5nOiBfZ2V0KCdzdXBwb3J0LXdhcm5pbmcnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtaW5mb2AgdG9rZW5cbiRzdXBwb3J0LWluZm86IF9nZXQoJ3N1cHBvcnQtaW5mbycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1lcnJvci1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtZXJyb3ItaW52ZXJzZTogX2dldCgnc3VwcG9ydC1lcnJvci1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZTogX2dldCgnc3VwcG9ydC1zdWNjZXNzLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtd2FybmluZy1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtd2FybmluZy1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LXdhcm5pbmctaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1pbmZvLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1pbmZvLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtaW5mby1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tbWFqb3JgIHRva2VuXG4kc3VwcG9ydC1jYXV0aW9uLW1ham9yOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tbWFqb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi1taW5vcmAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tbWlub3I6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi1taW5vcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLXVuZGVmaW5lZGAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWJhY2tncm91bmRgIHRva2VuXG4kYWktcG9wb3Zlci1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1wb3BvdmVyLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxYCB0b2tlblxuJGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxOiBfZ2V0KCdhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDJgIHRva2VuXG4kYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDI6IF9nZXQoJ2FpLXBvcG92ZXItc2hhZG93LW91dGVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1pbm5lci1zaGFkb3dgIHRva2VuXG4kYWktaW5uZXItc2hhZG93OiBfZ2V0KCdhaS1pbm5lci1zaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtc3RhcnQtc21gIHRva2VuXG4kYWktYXVyYS1zdGFydC1zbTogX2dldCgnYWktYXVyYS1zdGFydC1zbScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1zdGFydGAgdG9rZW5cbiRhaS1hdXJhLXN0YXJ0OiBfZ2V0KCdhaS1hdXJhLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWVuZGAgdG9rZW5cbiRhaS1hdXJhLWVuZDogX2dldCgnYWktYXVyYS1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLWJhY2tncm91bmQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1zdGFydGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLXN0YXJ0OiBfZ2V0KCdhaS1hdXJhLWhvdmVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLWVuZGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLWVuZDogX2dldCgnYWktYXVyYS1ob3Zlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1zdHJvbmdgIHRva2VuXG4kYWktYm9yZGVyLXN0cm9uZzogX2dldCgnYWktYm9yZGVyLXN0cm9uZycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLXN0YXJ0YCB0b2tlblxuJGFpLWJvcmRlci1zdGFydDogX2dldCgnYWktYm9yZGVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItZW5kYCB0b2tlblxuJGFpLWJvcmRlci1lbmQ6IF9nZXQoJ2FpLWJvcmRlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWRyb3Atc2hhZG93YCB0b2tlblxuJGFpLWRyb3Atc2hhZG93OiBfZ2V0KCdhaS1kcm9wLXNoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktc2tlbGV0b24tYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1za2VsZXRvbi1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1za2VsZXRvbi1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmRgIHRva2VuXG4kYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kOiBfZ2V0KFxuICAnYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLW92ZXJsYXlgIHRva2VuXG4kYWktb3ZlcmxheTogX2dldCgnYWktb3ZlcmxheScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1jZW50ZXJgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1jZW50ZXI6IF9nZXQoJ2FpLXBvcG92ZXItY2FyZXQtY2VudGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbWAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbTogX2dldCgnYWktcG9wb3Zlci1jYXJldC1ib3R0b20nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmRgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZDogX2dldChcbiAgJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9uczogX2dldChcbiAgJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9ucydcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1iYWNrZ3JvdW5kYCB0b2tlblxuJGNoYXQtcHJvbXB0LWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJvcmRlci1zdGFydGAgdG9rZW5cbiRjaGF0LXByb21wdC1ib3JkZXItc3RhcnQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJvcmRlci1zdGFydCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYm9yZGVyLWVuZGAgdG9rZW5cbiRjaGF0LXByb21wdC1ib3JkZXItZW5kOiBfZ2V0KCdjaGF0LXByb21wdC1ib3JkZXItZW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS11c2VyYCB0b2tlblxuJGNoYXQtYnViYmxlLXVzZXI6IF9nZXQoJ2NoYXQtYnViYmxlLXVzZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLWFnZW50YCB0b2tlblxuJGNoYXQtYnViYmxlLWFnZW50OiBfZ2V0KCdjaGF0LWJ1YmJsZS1hZ2VudCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtYm9yZGVyYCB0b2tlblxuJGNoYXQtYnViYmxlLWJvcmRlcjogX2dldCgnY2hhdC1idWJibGUtYm9yZGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci1ib3RgIHRva2VuXG4kY2hhdC1hdmF0YXItYm90OiBfZ2V0KCdjaGF0LWF2YXRhci1ib3QnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLWFnZW50YCB0b2tlblxuJGNoYXQtYXZhdGFyLWFnZW50OiBfZ2V0KCdjaGF0LWF2YXRhci1hZ2VudCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItdXNlcmAgdG9rZW5cbiRjaGF0LWF2YXRhci11c2VyOiBfZ2V0KCdjaGF0LWF2YXRhci11c2VyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXNoZWxsLWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1zaGVsbC1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LXNoZWxsLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtaGVhZGVyLWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1oZWFkZXItYmFja2dyb3VuZDogX2dldCgnY2hhdC1oZWFkZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b25gIHRva2VuXG4kY2hhdC1idXR0b246IF9nZXQoJ2NoYXQtYnV0dG9uJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1ob3ZlcmAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1ob3ZlcjogX2dldCgnY2hhdC1idXR0b24taG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXRleHQtaG92ZXJgIHRva2VuXG4kY2hhdC1idXR0b24tdGV4dC1ob3ZlcjogX2dldCgnY2hhdC1idXR0b24tdGV4dC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tYWN0aXZlYCB0b2tlblxuJGNoYXQtYnV0dG9uLWFjdGl2ZTogX2dldCgnY2hhdC1idXR0b24tYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1zZWxlY3RlZGAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1zZWxlY3RlZDogX2dldCgnY2hhdC1idXR0b24tc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXRleHQtc2VsZWN0ZWRgIHRva2VuXG4kY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZDogX2dldCgnY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaGlnaGxpZ2h0YCB0b2tlblxuJGhpZ2hsaWdodDogX2dldCgnaGlnaGxpZ2h0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBvdmVybGF5YCB0b2tlblxuJG92ZXJsYXk6IF9nZXQoJ292ZXJsYXknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRvZ2dsZS1vZmZgIHRva2VuXG4kdG9nZ2xlLW9mZjogX2dldCgndG9nZ2xlLW9mZicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2hhZG93YCB0b2tlblxuJHNoYWRvdzogX2dldCgnc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1c2AgdG9rZW5cbiRmb2N1czogX2dldCgnZm9jdXMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzLWluc2V0YCB0b2tlblxuJGZvY3VzLWluc2V0OiBfZ2V0KCdmb2N1cy1pbnNldCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXMtaW52ZXJzZWAgdG9rZW5cbiRmb2N1cy1pbnZlcnNlOiBfZ2V0KCdmb2N1cy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBza2VsZXRvbi1iYWNrZ3JvdW5kYCB0b2tlblxuJHNrZWxldG9uLWJhY2tncm91bmQ6IF9nZXQoJ3NrZWxldG9uLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNrZWxldG9uLWVsZW1lbnRgIHRva2VuXG4kc2tlbGV0b24tZWxlbWVudDogX2dldCgnc2tlbGV0b24tZWxlbWVudCcpICFkZWZhdWx0O1xuIiwiLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uLy4uL2NvbmZpZyc7XG5AdXNlICcuLi8uLi90aGVtZXMnO1xuQHVzZSAnLi4vLi4vdXRpbGl0aWVzL2NvbXBvbmVudC10b2tlbnMnO1xuQHVzZSAnQGNhcmJvbi90aGVtZXMvc2Nzcy9jb21wb25lbnQtdG9rZW5zJyBhcyBidXR0b247XG5cbiRidXR0b24tc2VwYXJhdG9yOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlcGFyYXRvciwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlcGFyYXRvciwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlcGFyYXRvciwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tcHJpbWFyeTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeSwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tc2Vjb25kYXJ5OiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeSwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tdGVydGlhcnk6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnksIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnksIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnksIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tZGFuZ2VyLXByaW1hcnk6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXByaW1hcnksIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXByaW1hcnksIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXByaW1hcnksIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1wcmltYXJ5LCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tZGFuZ2VyLXNlY29uZGFyeTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXNlY29uZGFyeSwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXNlY29uZGFyeSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tZGFuZ2VyLWFjdGl2ZTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWFjdGl2ZSwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWFjdGl2ZSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItYWN0aXZlLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItYWN0aXZlLCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tcHJpbWFyeS1hY3RpdmU6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1hY3RpdmUsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1hY3RpdmUsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktYWN0aXZlLCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZSwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tdGVydGlhcnktYWN0aXZlOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tZGFuZ2VyLWhvdmVyOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1ob3Zlciwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1ob3Zlciwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1ob3ZlciwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tcHJpbWFyeS1ob3ZlcjogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1ob3Zlciwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1ob3ZlciwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1ob3Zlciwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1ob3Zlciwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1ob3ZlciwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tdGVydGlhcnktaG92ZXI6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktaG92ZXIsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3Zlciwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktaG92ZXIsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktaG92ZXIsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWhvdmVyLCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tZGlzYWJsZWQ6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGlzYWJsZWQsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgd2hpdGUtdGhlbWUpLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGlzYWJsZWQsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGlzYWJsZWQsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRpc2FibGVkLCBnLTEwMCksXG4gICAgKSxcbiAgKSxcbikgIWRlZmF1bHQ7XG5cbiRidXR0b24tdG9rZW5zOiAoXG4gIGJ1dHRvbi1zZXBhcmF0b3I6ICRidXR0b24tc2VwYXJhdG9yLFxuICBidXR0b24tcHJpbWFyeTogJGJ1dHRvbi1wcmltYXJ5LFxuICBidXR0b24tc2Vjb25kYXJ5OiAkYnV0dG9uLXNlY29uZGFyeSxcbiAgYnV0dG9uLXRlcnRpYXJ5OiAkYnV0dG9uLXRlcnRpYXJ5LFxuICBidXR0b24tZGFuZ2VyLXByaW1hcnk6ICRidXR0b24tZGFuZ2VyLXByaW1hcnksXG4gIGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5OiAkYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksXG4gIGJ1dHRvbi1kYW5nZXItYWN0aXZlOiAkYnV0dG9uLWRhbmdlci1hY3RpdmUsXG4gIGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZTogJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLXNlY29uZGFyeS1hY3RpdmU6ICRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZTogJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsXG4gIGJ1dHRvbi1kYW5nZXItaG92ZXI6ICRidXR0b24tZGFuZ2VyLWhvdmVyLFxuICBidXR0b24tcHJpbWFyeS1ob3ZlcjogJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLFxuICBidXR0b24tc2Vjb25kYXJ5LWhvdmVyOiAkYnV0dG9uLXNlY29uZGFyeS1ob3ZlcixcbiAgYnV0dG9uLXRlcnRpYXJ5LWhvdmVyOiAkYnV0dG9uLXRlcnRpYXJ5LWhvdmVyLFxuICBidXR0b24tZGlzYWJsZWQ6ICRidXR0b24tZGlzYWJsZWQsXG4pO1xuXG4kYnV0dG9uLXNlcGFyYXRvcjogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXNlcGFyYXRvcixcbiAgJ2J1dHRvbi1zZXBhcmF0b3InXG4pO1xuXG4kYnV0dG9uLXByaW1hcnk6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcigkYnV0dG9uLXByaW1hcnksICdidXR0b24tcHJpbWFyeScpO1xuXG4kYnV0dG9uLXNlY29uZGFyeTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXNlY29uZGFyeSxcbiAgJ2J1dHRvbi1zZWNvbmRhcnknXG4pO1xuXG4kYnV0dG9uLXRlcnRpYXJ5OiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoJGJ1dHRvbi10ZXJ0aWFyeSwgJ2J1dHRvbi10ZXJ0aWFyeScpO1xuXG4kYnV0dG9uLWRhbmdlci1wcmltYXJ5OiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tZGFuZ2VyLXByaW1hcnksXG4gICdidXR0b24tZGFuZ2VyLXByaW1hcnknXG4pO1xuXG4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnk6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LFxuICAnYnV0dG9uLWRhbmdlci1zZWNvbmRhcnknXG4pO1xuXG4kYnV0dG9uLWRhbmdlci1hY3RpdmU6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1kYW5nZXItYWN0aXZlLFxuICAnYnV0dG9uLWRhbmdlci1hY3RpdmUnXG4pO1xuXG4kYnV0dG9uLXByaW1hcnktYWN0aXZlOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tcHJpbWFyeS1hY3RpdmUsXG4gICdidXR0b24tcHJpbWFyeS1hY3RpdmUnXG4pO1xuXG4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmU6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLFxuICAnYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUnXG4pO1xuXG4kYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSxcbiAgJ2J1dHRvbi10ZXJ0aWFyeS1hY3RpdmUnXG4pO1xuXG4kYnV0dG9uLWRhbmdlci1ob3ZlcjogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLWRhbmdlci1ob3ZlcixcbiAgJ2J1dHRvbi1kYW5nZXItaG92ZXInXG4pO1xuXG4kYnV0dG9uLXByaW1hcnktaG92ZXI6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLFxuICAnYnV0dG9uLXByaW1hcnktaG92ZXInXG4pO1xuXG4kYnV0dG9uLXNlY29uZGFyeS1ob3ZlcjogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXNlY29uZGFyeS1ob3ZlcixcbiAgJ2J1dHRvbi1zZWNvbmRhcnktaG92ZXInXG4pO1xuXG4kYnV0dG9uLXRlcnRpYXJ5LWhvdmVyOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tdGVydGlhcnktaG92ZXIsXG4gICdidXR0b24tdGVydGlhcnktaG92ZXInXG4pO1xuXG4kYnV0dG9uLWRpc2FibGVkOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoJGJ1dHRvbi1kaXNhYmxlZCwgJ2J1dHRvbi1kaXNhYmxlZCcpO1xuIl19 */`,document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(m))}),R="Carbon theme",K=`${R}/tool`,q=`${R}/toggle-tool`,u="storybook-carbon-theme",r="carbonize-storybook",P=[{value:"white",title:"White"},{value:"g10",title:"Gray 10"},{value:"g90",title:"Gray 90"},{value:"g100",title:"Gray 100"}],_=["white","g10"],$=c=>["white","g10","g90","g100"].includes(c),C=()=>{let c=localStorage.getItem(u);return c&&$(c)?c:"white"},p=(c,t=window.document)=>{localStorage.setItem(u,c),t.documentElement.setAttribute(u,c)},A=c=>_.includes(c)?"light":"dark",cc=()=>A(C()),o=()=>localStorage.getItem(r)==="true",dc=(c,t=window.document)=>{localStorage.setItem(r,String(c)),t.documentElement.setAttribute(r,String(c))},tc=()=>typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",bc=()=>o()?cc():tc(),J=a(()=>d.createElement("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},d.createElement("circle",{cx:"10",cy:"12",r:"2"}),d.createElement("circle",{cx:"16",cy:"9",r:"2"}),d.createElement("circle",{cx:"22",cy:"12",r:"2"}),d.createElement("circle",{cx:"23",cy:"18",r:"2"}),d.createElement("circle",{cx:"19",cy:"23",r:"2"}),d.createElement("path",{d:"M16.54,2A14,14,0,0,0,2,16a4.82,4.82,0,0,0,6.09,4.65l1.12-.31A3,3,0,0,1,13,23.24V27a3,3,0,0,0,3,3A14,14,0,0,0,30,15.46,14.05,14.05,0,0,0,16.54,2Zm8.11,22.31A11.93,11.93,0,0,1,16,28a1,1,0,0,1-1-1V23.24a5,5,0,0,0-5-5,5.07,5.07,0,0,0-1.33.18l-1.12.31A2.82,2.82,0,0,1,4,16,12,12,0,0,1,16.47,4,12.18,12.18,0,0,1,28,15.53,11.89,11.89,0,0,1,24.65,24.32Z"})));J.displayName="ThemeIcon";var lc=a(function({api:c}){let t=C(),b=n(Z=>{let l=window.parent.document;if(p(Z,l),o()){let N=A(Z);g.setConfig({theme:N==="light"?X.light:X.dark})}},[]);return d.createElement(U,{placement:"top",trigger:"click",closeOnOutsideClick:!0,tooltip:({onHide:Z})=>d.createElement(Q,{links:P.map(l=>({id:l.value,title:l.title,active:t===l.value,onClick:()=>{b(l.value),Z()}}))})},d.createElement(F,{title:"Carbon Theme",active:t==="white"},d.createElement(J,null)))}),Y=!1,gc=()=>{Y||(Promise.resolve().then(()=>T()),Promise.resolve().then(()=>z()),Promise.resolve().then(()=>w()),Promise.resolve().then(()=>j()),Promise.resolve().then(()=>D()),Y=!0)},L=a(()=>d.createElement("svg",{focusable:"false",preserveAspectRatio:"xMidYMid meet",fill:"currentColor",width:"16",height:"16",viewBox:"0 0 32 32","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M24 28H30V30H24z"}),d.createElement("circle",{cx:"21",cy:"29",r:"1"}),d.createElement("circle",{cx:"29",cy:"25",r:"1"}),d.createElement("path",{d:"M20 24H26V26H20z",transform:"matrix(-1 0 0 -1 46 50)"}),d.createElement("path",{d:"M24 20H30V22H24z"}),d.createElement("circle",{cx:"21",cy:"21",r:"1"}),d.createElement("path",{d:"M21.4927,14.1299l-8.5-4.8149c-.3057-.1729-.6797-.1729-.9854,0L3.5073,14.1299c-.3135,.1777-.5073,.5098-.5073,.8701v10c0,.3604,.1938,.6924,.5073,.8701l8.5,4.8149,.9854-1.7402-7.9927-4.5278V15.583l7.5-4.2485,7.5,4.2485v2.417h2v-3c0-.3604-.1938-.6924-.5073-.8701Z"}),d.createElement("path",{d:"M25,15h2V7c0-.3604-.1938-.6924-.5073-.8701L17.9927,1.3149c-.3057-.1729-.6797-.1729-.9854,0L8.5074,6.1299l.9854,1.7402L17.5,3.3345l7.5,4.2485v7.417Z"})));L.displayName="CarbonIcon";var ic=a(function(){let c=o();c&&gc();let t=n(()=>{dc(!c),window.location.reload()},[c]);return d.createElement(F,{title:c?"Decarbonize Storybook":"Carbonize Storybook",active:c,onClick:t},d.createElement(L,null))}),x={version:"0.0.0",repository:{url:"https://github.com/devadula-nandan/storybook-theme-carbon"}},ec=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
    <path fill="#161616" d="M24 28H30V30H24z"/>
    <circle style="fill: var(--cds-text-primary, white)" cx="21" cy="29" r="1"/>
    <circle style="fill: var(--cds-text-primary, white)" cx="29" cy="25" r="1"/>
    <path fill="#161616" d="M20 24H26V26H20z" transform="matrix(-1 0 0 -1 46 50)"/>
    <path fill="#161616" d="M24 20H30V22H24z"/>
    <circle style="fill: var(--cds-text-primary, white)" cx="21" cy="21" r="1"/>
    <path fill="#161616" d="M21.4927,14.1299l-8.5-4.8149c-.3057-.1729-.6797-.1729-.9854,0L3.5073,14.1299c-.3135,.1777-.5073,.5098-.5073,.8701v10c0,.3604,.1938,.6924,.5073,.8701l8.5,4.8149,.9854-1.7402-7.9927-4.5278V15.583l7.5-4.2485,7.5,4.2485v2.417h2v-3c0-.3604-.1938-.6924-.5073-.8701Z"/>
    <path fill="#161616" d="M25,15h2V7c0-.3604-.1938-.6924-.5073-.8701L17.9927,1.3149c-.3057-.1729-.6797-.1729-.9854,0L8.5074,6.1299l.9854,1.7402L17.5,3.3345l7.5,4.2485v7.417Z"/>
  </svg>
`,Gc=`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
    <path fill="#f4f4f4" d="M24 28H30V30H24z"/>
    <circle fill="#78a9ff" cx="21" cy="29" r="1"/>
    <circle fill="#78a9ff" cx="29" cy="25" r="1"/>
    <path fill="#f4f4f4" d="M20 24H26V26H20z" transform="matrix(-1 0 0 -1 46 50)"/>
    <path fill="#f4f4f4" d="M24 20H30V22H24z"/>
    <circle fill="#78a9ff" cx="21" cy="21" r="1"/>
    <path fill="#f4f4f4" d="M21.4927,14.1299l-8.5-4.8149c-.3057-.1729-.6797-.1729-.9854,0L3.5073,14.1299c-.3135,.1777-.5073,.5098-.5073,.8701v10c0,.3604,.1938,.6924,.5073,.8701l8.5,4.8149,.9854-1.7402-7.9927-4.5278V15.583l7.5-4.2485,7.5,4.2485v2.417h2v-3c0-.3604-.1938-.6924-.5073-.8701Z"/>
    <path fill="#f4f4f4" d="M25,15h2V7c0-.3604-.1938-.6924-.5073-.8701L17.9927,1.3149c-.3057-.1729-.6797-.1729-.9854,0L8.5074,6.1299l.9854,1.7402L17.5,3.3345l7.5,4.2485v7.417Z"/>
  </svg>
`,ac=c=>c?Gc:ec,k=bc(),Ic=k==="dark",Bc=v({base:k,fontBase:"'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",fontCode:"'IBM Plex Mono', Menlo, 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",brandTitle:`
    <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
      ${ac(Ic)}
      <span style="color: var(--cds-text-primary); font-size: 14px; font-weight: 400; font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;">
        @carbon/react@${x.version}
      </span>
    </div>
  `,brandUrl:x.repository.url,brandTarget:"_blank"}),Zc=()=>{let c=window.parent.document,t=C();p(t,c);let b=o();c.documentElement.setAttribute("carbonize-storybook",String(b))};Zc();g.register(R,c=>{g.add(K,{type:s.TOOL,title:"Carbon Theme Selector",render:()=>d.createElement(lc,{api:c})}),g.add(q,{type:s.TOOL,title:"Carbonize Storybook",render:()=>d.createElement(ic,null)})});g.setConfig({theme:Bc,toolbar:{"storybook/background":{hidden:!0}}});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
