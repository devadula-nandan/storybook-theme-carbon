try{
(()=>{var d=__REACT__,{Children:S,Component:O,Fragment:z,Profiler:w,PureComponent:E,StrictMode:M,Suspense:j,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:D,act:K,cloneElement:P,createContext:q,createElement:_,createFactory:$,createRef:dd,forwardRef:cd,isValidElement:td,lazy:bd,memo:Z,startTransition:ed,unstable_act:id,useCallback:s,useContext:gd,useDebugValue:ld,useDeferredValue:Gd,useEffect:ad,useId:Id,useImperativeHandle:Zd,useInsertionEffect:sd,useLayoutEffect:Bd,useMemo:nd,useReducer:od,useRef:Xd,useState:Fd,useSyncExternalStore:hd,useTransition:Vd,version:yd}=__REACT__;var md=__STORYBOOK_API__,{ActiveTabs:vd,Consumer:ud,ManagerContext:Qd,Provider:Ud,RequestResponseError:Yd,addons:l,combineParameters:Ad,controlOrMetaKey:xd,controlOrMetaSymbol:Ld,eventMatchesShortcut:Jd,eventToShortcut:pd,experimental_MockUniversalStore:kd,experimental_UniversalStore:Nd,experimental_getStatusStore:Hd,experimental_getTestProviderStore:fd,experimental_requestResponse:Td,experimental_useStatusStore:Sd,experimental_useTestProviderStore:Od,experimental_useUniversalStore:zd,internal_fullStatusStore:wd,internal_fullTestProviderStore:Ed,internal_universalStatusStore:Md,internal_universalTestProviderStore:jd,isMacLike:Dd,isShortcutTaken:Kd,keyToSymbol:Pd,merge:qd,mockChannel:_d,optionOrAltSymbol:$d,shortcutMatchesShortcut:dc,shortcutToHumanString:cc,types:B,useAddonState:tc,useArgTypes:bc,useArgs:ec,useChannel:ic,useGlobalTypes:gc,useGlobals:n,useParameter:lc,useSharedState:Gc,useStoryPrepared:ac,useStorybookApi:Ic,useStorybookState:Zc}=__STORYBOOK_API__;var Xc=__STORYBOOK_THEMING__,{CacheProvider:Fc,ClassNames:hc,Global:Vc,ThemeProvider:yc,background:Wc,color:rc,convert:Rc,create:Cc,createCache:mc,createGlobal:vc,createReset:uc,css:Qc,darken:Uc,ensure:Yc,ignoreSsrWarning:Ac,isPropValid:xc,jsx:Lc,keyframes:Jc,lighten:pc,styled:kc,themes:a,typography:Nc,useTheme:Hc,withTheme:fc}=__STORYBOOK_THEMING__;var wc=__STORYBOOK_COMPONENTS__,{A:Ec,ActionBar:Mc,AddonPanel:jc,Badge:Dc,Bar:Kc,Blockquote:Pc,Button:qc,ClipboardCode:_c,Code:$c,DL:dt,Div:ct,DocumentWrapper:tt,EmptyTabContent:bt,ErrorFormatter:et,FlexBar:it,Form:gt,H1:lt,H2:Gt,H3:at,H4:It,H5:Zt,H6:st,HR:Bt,IconButton:o,Img:nt,LI:ot,Link:Xt,ListItem:Ft,Loader:ht,Modal:Vt,OL:yt,P:Wt,Placeholder:rt,Pre:Rt,ProgressSpinner:Ct,ResetWrapper:mt,ScrollArea:vt,Separator:ut,Spaced:Qt,Span:Ut,StorybookIcon:Yt,StorybookLogo:At,SyntaxHighlighter:xt,TT:Lt,TabBar:Jt,TabButton:pt,TabWrapper:kt,Table:Nt,Tabs:Ht,TabsState:ft,TooltipLinkList:X,TooltipMessage:Tt,TooltipNote:St,UL:Ot,WithTooltip:F,WithTooltipPure:zt,Zoom:wt,codeCommon:Et,components:Mt,createCopyToClipboardFunction:jt,getStoryHref:Dt,interleaveSeparators:Kt,nameSpaceClassNames:Pt,resetComponents:qt,withReset:_t}=__STORYBOOK_COMPONENTS__;var V="Carbon theme",C=`${V}/tool`,h="carbonTheme",m=[{value:"white",title:"White"},{value:"g10",title:"Gray 10"},{value:"g90",title:"Gray 90"},{value:"g100",title:"Gray 100"}],v=`:root {
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbInRoZW1lLWJhc2Uuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3RoZW1lcy9zY3NzL190aGVtZS5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXJib24vc3R5bGVzL3Njc3MvX3RoZW1lLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi9zdHlsZXMvc2Nzcy91dGlsaXRpZXMvX2N1c3RvbS1wcm9wZXJ0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDa0hJO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTs7QUM5RkY7RUZwQkY7SUdtREU7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTs7O0FIbkRGO0VHbURFO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTs7O0FIL0NGO0VDOEdJO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTs7QUM5RkY7RUZoQkY7SUcrQ0U7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTs7O0FIL0NGO0VHK0NFO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTs7O0FIM0NGO0VDMEdJO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTs7QUM5RkY7RUZaRjtJRzJDRTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBOzs7QUgzQ0Y7RUcyQ0U7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBOzs7QUh2Q0Y7RUNzR0k7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBOztBQzlGRjtFRlJGO0lHdUNFO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7OztBSHZDRjtFR3VDRTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7OztBSG5DRjtFQ2tHSTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7O0FDOUZGO0VGSkY7SUdtQ0U7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTs7O0FIbkNGO0VHbUNFO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQSIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ0BjYXJib24vc3R5bGVzL3Njc3MvdGhlbWUnIGFzICo7XG5AdXNlICdAY2FyYm9uL3N0eWxlcy9zY3NzL3RoZW1lcyc7XG5cbjpyb290IHtcbiAgQGluY2x1ZGUgdGhlbWUodGhlbWVzLiR3aGl0ZSk7XG59XG5cbjpyb290W3N0b3J5Ym9vay1jYXJib24tdGhlbWU9J3doaXRlJ10ge1xuICBAaW5jbHVkZSB0aGVtZSh0aGVtZXMuJHdoaXRlKTtcbn1cblxuOnJvb3Rbc3Rvcnlib29rLWNhcmJvbi10aGVtZT0nZzEwJ10ge1xuICBAaW5jbHVkZSB0aGVtZSh0aGVtZXMuJGcxMCk7XG59XG5cbjpyb290W3N0b3J5Ym9vay1jYXJib24tdGhlbWU9J2c5MCddIHtcbiAgQGluY2x1ZGUgdGhlbWUodGhlbWVzLiRnOTApO1xufVxuXG46cm9vdFtzdG9yeWJvb2stY2FyYm9uLXRoZW1lPSdnMTAwJ10ge1xuICBAaW5jbHVkZSB0aGVtZSh0aGVtZXMuJGcxMDApO1xufVxuIiwiLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICdjb25maWcnO1xuQHVzZSAndGhlbWVzJztcblxuLy8vIFNwZWNpZnkgdGhlIGZhbGxiYWNrIHRoZW1lLCB1c2VkIGFzIGEgY2F0Y2gtYWxsIGZvciB0b2tlbnMgdGhhdCB5b3UgbWF5IG5vdFxuLy8vIGhhdmUgZGVmaW5lZCBpbiB5b3VyIGN1c3RvbSB0aGVtZVxuJGZhbGxiYWNrOiB0aGVtZXMuJHdoaXRlICFkZWZhdWx0O1xuXG4vLy8gU3BlY2lmeSB0aGUgY3VycmVudCB0aGVtZS4gVGhpcyBjYW4gb3ZlcnJpZGUgZXhpc3RpbmcgdG9rZW5zLCBvciBhZGQgbmV3XG4vLy8gdG9rZW5zLiBJZiB5b3UgYXJlIGFkZGluZyBuZXcgdG9rZW5zLCBpdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IHNldCB0aGVcbi8vLyBmYWxsYmFjayBmb3IgeW91ciBjdXJyZW50IHRoZW1lXG4kdGhlbWU6ICgpICFkZWZhdWx0O1xuJHRoZW1lOiBtYXAubWVyZ2UoJGZhbGxiYWNrLCAkdGhlbWUpO1xuXG4vLy8gTG9jYWwgY29tcG9uZW50IHRva2VucyB0aGF0IGNhbiBiZSB1cGRhdGVkIHdpdGggYEBtaXhpbiBhZGQtY29tcG9uZW50LXRva2Vuc2AuXG4kLWNvbXBvbmVudC10b2tlbnM6ICgpO1xuXG4vLy8gSW5jbHVkZSB0aGUgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzIGZvciB0aGUgYWN0aXZlIHRoZW1lIG9yIGEgZ2l2ZW4gdGhlbWUgb25cbi8vLyBhIHNlbGVjdG9yXG5AbWl4aW4gdGhlbWUoJGFjdGl2ZS10aGVtZTogJHRoZW1lLCAkY29tcG9uZW50LXRva2Vucy4uLikge1xuICBAZWFjaCAkdG9rZW4sICR2YWx1ZSBpbiAkYWN0aXZlLXRoZW1lIHtcbiAgICBAaW5jbHVkZSAtY3VzdG9tLXByb3BlcnR5KCR0b2tlbiwgJHZhbHVlKTtcbiAgfVxuXG4gIEBlYWNoICRncm91cCBpbiAkY29tcG9uZW50LXRva2VucyB7XG4gICAgQGVhY2ggJHRva2VuLCAkdmFsdWUgaW4gJGdyb3VwIHtcbiAgICAgIEBpbmNsdWRlIC1jdXN0b20tcHJvcGVydHkoJHRva2VuLCAkdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIEBlYWNoICR0b2tlbiwgJHZhbHVlIGluICQtY29tcG9uZW50LXRva2VucyB7XG4gICAgQGluY2x1ZGUgLWN1c3RvbS1wcm9wZXJ0eShcbiAgICAgICR0b2tlbixcbiAgICAgIC1yZXNvbHZlLXRva2VuLXZhbHVlKCRhY3RpdmUtdGhlbWUsICR2YWx1ZSlcbiAgICApO1xuICB9XG59XG5cbi8vLyBSZXRyaWV2ZSB0aGUgdmFsdWUgZm9yIHRoZSBnaXZlbiAkdG9rZW4gZnJvbSB0aGUgY3VycmVudCAkdGhlbWVcbi8vLyBAcGFyYW0ge1N0cmluZ30gJHRva2VuXG5AZnVuY3Rpb24gZ2V0KCR0b2tlbikge1xuICBAaWYgbWFwLmhhcy1rZXkoJHRoZW1lLCAkdG9rZW4pIHtcbiAgICBAcmV0dXJuIG1hcC5nZXQoJHRoZW1lLCAkdG9rZW4pO1xuICB9XG4gIEBlcnJvciBcIlVuYWJsZSB0byBmaW5kIHRva2VuOiAjeyR0b2tlbn0gaW4gY3VycmVudCAkdGhlbWVcIjtcbn1cblxuLy8vIENvbXBhcmUgdHdvIHRoZW1lcyB0byBzZWUgaWYgdGhlIHNlY29uZCB0aGVtZSBpcyBhIHN1cGVyc2V0IG9mIHRoZSBmaXJzdFxuLy8vIHRoZW1lLiBJbiBvdGhlciB3b3JkcywgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiB0cnVlIGlmIGV2ZXJ5IHRva2VuIGluIHRoZVxuLy8vIGZpcnN0IHRoZW1lIGlzIGF2YWlsYWJsZSBpbiB0aGUgc2Vjb25kIHRoZW1lIGFuZCBoYXMgdGhlIHNhbWUgdmFsdWUuIFRoZVxuLy8vIHNlY29uZCB0aGVtZSBpcyBhbGxvd2VkIHRvIGhhdmUgYWRkaXRpb25hbCB2YWx1ZXMgYW5kIGl0IHdpbGwgc3RpbGwgbWF0Y2guXG4vLy8gQHBhcmFtIHtNYXB9ICRhXG4vLy8gQHBhcmFtIHtNYXB9ICRiXG4vLy8gQHJldHVybnMge0Jvb2xlYW59XG5AZnVuY3Rpb24gbWF0Y2hlcygkYSwgJGIpIHtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICRhIHtcbiAgICBAaWYgbWFwLmhhcy1rZXkoJGIsICRrZXkpID09IGZhbHNlIHtcbiAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgQGlmIG1hcC5nZXQoJGIsICRrZXkpICE9ICR2YWx1ZSB7XG4gICAgICBAcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gdHJ1ZTtcbn1cblxuLy8vIEFkZCBjb21wb25lbnQgdG9rZW5zIHdoaWNoIHdpbGwgYmUgaW5jbHVkZWQgYW55IHRpbWUgdGhlIHRoZW1lIG1peGluIGlzXG4vLy8gY2FsbGVkXG5AbWl4aW4gYWRkLWNvbXBvbmVudC10b2tlbnMoJHRva2VuLW1hcCkge1xuICAkLWNvbXBvbmVudC10b2tlbnM6IG1hcC5tZXJnZSgkLWNvbXBvbmVudC10b2tlbnMsICR0b2tlbi1tYXApICFnbG9iYWw7XG59XG5cbi8vLyBEZXRlcm1pbmUgdGhlIHZhbHVlIGZyb20gYSBjb21wb25lbnQgdG9rZW4gdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiB0aGVtZS5cbi8vLyBUaGlzIGlzIGhlbHBmdWwgd2hlbiBhIGNvbXBvbmVudCB0b2tlbiBtYXkgY2hhbmdlIGRlcGVuZGluZyBvbiB3aGF0IHRoZW1lIHRoZVxuLy8vIGNvbXBvbmVudCBpcyBiZWluZyByZW5kZXJlZCBpbi5cbkBmdW5jdGlvbiAtcmVzb2x2ZS10b2tlbi12YWx1ZSgkYWN0aXZlLXRoZW1lOiAkdGhlbWUsICR0b2tlbi12YWx1ZSkge1xuICBAaWYgbWV0YS50eXBlLW9mKCR0b2tlbi12YWx1ZSkgPT0gbWFwIGFuZCBtYXAuaGFzLWtleSgkdG9rZW4tdmFsdWUsIHZhbHVlcykge1xuICAgICRmYWxsYmFjazogbWFwLmdldCgkdG9rZW4tdmFsdWUsIGZhbGxiYWNrKTtcbiAgICAkdGhlbWUtdmFsdWVzOiBtYXAuZ2V0KCR0b2tlbi12YWx1ZSwgdmFsdWVzKTtcblxuICAgIEBlYWNoICR0aGVtZS12YWx1ZSBpbiAkdGhlbWUtdmFsdWVzIHtcbiAgICAgICR0aGVtZS10by1tYXRjaDogbWFwLmdldCgkdGhlbWUtdmFsdWUsIHRoZW1lKTtcbiAgICAgICR2YWx1ZTogbWFwLmdldCgkdGhlbWUtdmFsdWUsIHZhbHVlKTtcblxuICAgICAgQGlmIG1hdGNoZXMoJHRoZW1lLXRvLW1hdGNoLCAkYWN0aXZlLXRoZW1lKSB7XG4gICAgICAgIEByZXR1cm4gJHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEByZXR1cm4gJGZhbGxiYWNrO1xuICB9XG5cbiAgQHJldHVybiAkdG9rZW4tdmFsdWU7XG59XG5cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLyBAZ3JvdXAgQGNhcmJvbi90aGVtZXNcbkBtaXhpbiAtY3VzdG9tLXByb3BlcnR5KCRuYW1lLCAkdmFsdWUpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdmFsdWUpID09IG1hcCB7XG4gICAgQGVhY2ggJHByb3BlcnR5LCAkcHJvcGVydHktdmFsdWUgaW4gJHZhbHVlIHtcbiAgICAgIC8vIE9ubHkgc3VwcG9ydCBvbmUtbGV2ZWwgb2YgZGVwdGggZm9yIHZhbHVlcyB0aGF0IGFyZSBtYXBzLiBUaGlzIGlzIHRvXG4gICAgICAvLyBhdm9pZCBicmluZ2luZyBwcm9wZXJ0aWVzIGxpa2UgYGJyZWFrcG9pbnRzYCBvbiB0eXBlIHRva2Vuc1xuICAgICAgQGlmIHR5cGUtb2YoJHByb3BlcnR5LXZhbHVlKSAhPSBtYXAge1xuICAgICAgICBAaW5jbHVkZSAtY3VzdG9tLXByb3BlcnR5KCcjeyRuYW1lfS0jeyRwcm9wZXJ0eX0nLCAkcHJvcGVydHktdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgLS0je2NvbmZpZy4kcHJlZml4fS0jeyRuYW1lfTogI3skdmFsdWV9O1xuICB9XG59XG4iLCIvL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQGZvcndhcmQgJy4vdGhlbWUvdGhlbWUnIGhpZGUgdGhlbWU7XG5AdXNlICcuL3RoZW1lL3RoZW1lJztcbkB1c2UgJy4vbGF5ZXIvbGF5ZXItdG9rZW5zJztcbkB1c2UgJy4vdXRpbGl0aWVzL2N1c3RvbS1wcm9wZXJ0eSc7XG5cbi8vLyBJbmNsdWRlIHRoZSBDU1MgQ3VzdG9tIFByb3BlcnRpZXMgZm9yIHRoZSBhY3RpdmUgdGhlbWUgb3IgYSBnaXZlbiB0aGVtZSBvblxuLy8vIGEgc2VsZWN0b3JcbkBtaXhpbiB0aGVtZSgkYXJncy4uLikge1xuICBAaW5jbHVkZSB0aGVtZS50aGVtZSgkYXJncy4uLik7XG5cbiAgLy8gSWYgdGhlIHN5c3RlbSBpcyBpbiBoaWdoLWNvbnRyYXN0IG1vZGUsIHVzZSB0aGUgc3lzdGVtIGRlZmluZWQgY29sb3JzLiAgVGhpcyBtb3N0bHkgaGFwcGVucyBhdXRvbWF0aWNhbGx5LCBidXRcbiAgLy8gd2UgbmVlZCB0byBkbyBpdCBtYW51YWxseSBmb3IgaWNvbnMgYW5kIHNlbGVjdGVkIGJhY2tncm91bmRzLiAgSW1wb3J0YW50bHksIHRoZSBjdXN0b20gcHJvcGVydGllcyB3ZSBzZXQgaGVyZVxuICAvLyBuZWVkIHRvIG92ZXJyaWRlIHRoZSBDU1MgY3VzdG9tIHByb3BlcnRpZXMgc2V0IGFib3ZlLiAgU2VlOlxuICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXJib24tZGVzaWduLXN5c3RlbS9jYXJib24vaXNzdWVzLzE5MDE1XG4gIC8vIC0gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3N5c3RlbS1jb2xvci5cbiAgLy8gLSBodHRwczovL2NhcmJvbmRlc2lnbnN5c3RlbS5jb20vZWxlbWVudHMvY29sb3IvdG9rZW5zLyNpY29uXG4gIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSwgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSkge1xuICAgIC8vIEljb24gY29sb3JzIHNwZWNpZmllZCBieSBcImZpbGxcIi5cbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2ljb24tcHJpbWFyeScsIEJ1dHRvblRleHQpO1xuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignaWNvbi1zZWNvbmRhcnknLCBCdXR0b25UZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2ljb24taW50ZXJhY3RpdmUnLCBCdXR0b25UZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2ljb24tZGlzYWJsZWQnLCBHcmF5VGV4dCk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdpY29uLW9uLWNvbG9yLWRpc2FibGVkJywgR3JheVRleHQpO1xuXG4gICAgLy8gU2luY2UgaWNvbi1pbnZlcnNlIGFuZCBpY29uLW9uLWNvbG9yIGFyZSBnZW5lcmFsbHkgdXNlZCB0byBpbmRpY2F0ZWQgc2VsZWN0ZWQgaWNvbnMsIHVzZSBTZWxlY3RlZEl0ZW1UZXh0LlxuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignaWNvbi1pbnZlcnNlJywgU2VsZWN0ZWRJdGVtVGV4dCk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdpY29uLW9uLWNvbG9yJywgU2VsZWN0ZWRJdGVtVGV4dCk7XG5cbiAgICAvLyBTb21lIGNvbXBvbmVudHMgY3VycmVudGx5IHNldCB0aGVzZSB2YWx1ZXMgZm9yIGZpbGwsIGFsdGhvdWdoIHVuY2xlYXIgaWYgdGhhdCdzIHZhbGlkLlxuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignYnV0dG9uLWRpc2FibGVkJywgR3JheVRleHQpO1xuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignaW50ZXJhY3RpdmUnLCBCdXR0b25UZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2xpbmstcHJpbWFyeScsIExpbmtUZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2xpbmstcHJpbWFyeS1ob3ZlcicsIExpbmtUZXh0KTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oJ2xpbmstc2Vjb25kYXJ5JywgTGlua1RleHQpO1xuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignbGluay1pbnZlcnNlJywgU2VsZWN0ZWRJdGVtVGV4dCk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKFxuICAgICAgJ2xpbmstaW52ZXJzZS1ob3ZlcicsXG4gICAgICBTZWxlY3RlZEl0ZW1UZXh0XG4gICAgKTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oXG4gICAgICAnbGluay1pbnZlcnNlLXZpc2l0ZWQnLFxuICAgICAgU2VsZWN0ZWRJdGVtVGV4dFxuICAgICk7XG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdsaW5rLXZpc2l0ZWQnLCBWaXNpdGVkVGV4dCk7XG5cbiAgICAvLyBGb3JjZSBhIGJhY2tncm91bmQtY29sb3IgZm9yIHNlbGVjdGVkIGJ1dHRvbnMgZXRjLiwgb3RoZXJ3aXNlIHRoZSB1c2VyIHdvbid0IGtub3cgdGhleSBhcmUgc2VsZWN0ZWQuXG4gICAgQGluY2x1ZGUgY3VzdG9tLXByb3BlcnR5LmRlY2xhcmF0aW9uKCdiYWNrZ3JvdW5kLXNlbGVjdGVkJywgU2VsZWN0ZWRJdGVtKTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oXG4gICAgICAnYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcicsXG4gICAgICBTZWxlY3RlZEl0ZW1cbiAgICApO1xuICAgIEBpbmNsdWRlIGN1c3RvbS1wcm9wZXJ0eS5kZWNsYXJhdGlvbignYmFja2dyb3VuZC1pbnZlcnNlJywgU2VsZWN0ZWRJdGVtKTtcbiAgICBAaW5jbHVkZSBjdXN0b20tcHJvcGVydHkuZGVjbGFyYXRpb24oXG4gICAgICAnbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZScsXG4gICAgICBTZWxlY3RlZEl0ZW1cbiAgICApO1xuICB9XG5cbiAgLy8gTm90ZTogd2UgbmVlZCB0byByZS1lbWl0IHRoZSBjb250ZXh0dWFsIGxheWVyIHRva2VucyBhcyBwYXJ0IG9mIHRoZSB0aGVtZVxuICAvLyBtaXhpbi4gT3RoZXJ3aXNlLCB0aGUgbGF5ZXIgdG9rZW5zIGFyZSBkZWZpbmVkIGF0IHRoZSA6cm9vdCBsZXZlbCBhbmQgd2lsbFxuICAvLyBub3QgcGljayB1cCB0aGUgdGhlbWUtc3BlY2lmaWMsIG9yIHpvbmUtc3BlY2lmaWMsIHZhbHVlIGZyb20gdGhlIGZpcnN0XG4gIC8vIGxheWVyLlxuICAvL1xuICAvLyBGb3IgZXhhbXBsZSwgaW4gdGhpcyBzaXR1YXRpb246XG4gIC8vXG4gIC8vIGBgYFxuICAvLyA6cm9vdCB7XG4gIC8vICAgLS1sYXllci1vbmU6ICMwMDAwMDA7XG4gIC8vICAgLS1sYXllcjogdmFyKC0tbGF5ZXItb25lKTtcbiAgLy8gfVxuICAvLyBgYGBcbiAgLy9cbiAgLy8gVGhpcyB3aWxsIGFsd2F5cyBldmFsdWF0ZSB0byB0aGUgdmFsdWUgb2YgYC0tbGF5ZXItb25lYCBhdCB0aGUgYDpyb290YFxuICAvLyBzZWxlY3RvciwgZXZlbiBpZiBgLS1sYXllci1vbmVgIGlzIHJlZGVmaW5lZCBsYXllciBvbiBpbiB0aGUgY2FzY2FkZS5cbiAgLy9cbiAgLy8gYGBgXG4gIC8vIC56b25lIHtcbiAgLy8gICAtLWxheWVyLW9uZTogI2ZmZmZmZjtcbiAgLy8gfVxuICAvLyBgYGBcbiAgLy9cbiAgLy8gRXZlbiB0aG91Z2ggeW91IHdvdWxkIGV4cGVjdCBgLS1sYXllcmAgdG8gYmUgcmVkZWZpbmVkLCBpdCB3aWxsIGtlZXAgdGhlXG4gIC8vIHZhbHVlIGRlZmluZWQgYXQgdGhlIGA6cm9vdGAgbGV2ZWwuXG4gIC8vXG4gIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2NhcmJvbi1kZXNpZ24tc3lzdGVtL2NhcmJvbi9pc3N1ZXMvMTExMzhcbiAgQGluY2x1ZGUgbGF5ZXItdG9rZW5zLmVtaXQtbGF5ZXItdG9rZW5zKDEpO1xufVxuIiwiLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkB1c2UgJy4uL2NvbmZpZyc7XG5cbi8vIFNvbWUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSB0ZXJtaW5vbG9neVxuLy8gQHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXZhcmlhYmxlcy0xL1xuLy9cbi8vIDxjdXN0b20tcHJvcGVydHktbmFtZT46XG4vLyAgIEFueSB2YWxpZCBpZGVudGlmZXIgdGhhdCBzdGFydHMgd2l0aCB0d28gZGFzaGVzICgtLSlcbi8vXG4vLyBBIGRlY2xhcmF0aW9uOlxuLy8gICBDU1MgQ3VzdG9tIFByb3BlcnRpZXMgY2FuIGJlIHVzZWQgYXMgZGVjbGFyYXRpb25zIGluIGEgQ1NTIHNlbGVjdG9yLiBUaGV5XG4vLyAgIHRha2Ugb24gdGhlIGZvcm0gb2Y6XG4vL1xuLy8gICA8Y3VzdG9tLXByb3BlcnR5LW5hbWU+OiA8ZGVjbGFyYXRpb24tdmFsdWU+O1xuLy9cbi8vIFRoZSB2YXIoKSBub3RhdGlvbjpcbi8vICAgWW91IGNhbiB1c2UgYSBDU1MgQ3VzdG9tIFByb3BlcnR5IGFzIGEgc3Vic3RpdHV0ZSBmb3IgYSB2YWx1ZSBvZiBhbm90aGVyXG4vLyAgIHByb3BlcnR5IHVzaW5nIHRoZSB2YXIoKSBmdW5jdGlvbi4gVGhpcyBmdW5jdGlvbiBoYXMgdGhlIGZvbGxvd2luZyBzeW50YXg6XG4vL1xuLy8gICB2YXIoIDxjdXN0b20tcHJvcGVydHktbmFtZT4gWywgPGRlY2xhcmF0aXZlLXZhbHVlPiBdPyApXG4vL1xuLy8gICBUaGlzIGZ1bmN0aW9uIHRha2VzIGluIGFuIG9wdGlvbmFsIGZhbGxiYWNrIHZhbHVlIGlmIHRoZSBDU1MgQ3VzdG9tXG4vLyAgIFByb3BlcnR5IGhhcyBub3QgYmVlbiBwcmV2aW91c2x5IGRlZmluZWRcblxuLy8vIEdldCB0aGUgPGN1c3RvbS1wcm9wZXJ0eS1uYW1lPiBmb3IgYSBnaXZlbiBzdHJpbmdcbi8vLyBAcGFyYW0ge1N0cmluZ30gJG5hbWVcbi8vLyBAcmV0dXJucyB7U3RyaW5nfVxuQGZ1bmN0aW9uIGdldC1uYW1lKCRuYW1lKSB7XG4gIEByZXR1cm4gLS0je2NvbmZpZy4kcHJlZml4fS0jeyRuYW1lfTtcbn1cblxuLy8vIEdldCB0aGUgdmFyKCkgcmVwcmVzZW50YXRpb24gZm9yIGEgZ2l2ZW4gdG9rZW5cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG5hbWVcbi8vLyBAcGFyYW0ge0FueX0gJGZhbGxiYWNrXG4vLy8gQHJldHVybnMgdmFyKClcbkBmdW5jdGlvbiBnZXQtdmFyKCRuYW1lLCAkZmFsbGJhY2s6IGZhbHNlKSB7XG4gIEBpZiAkZmFsbGJhY2sge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skbmFtZX0sICN7JGZhbGxiYWNrfSk7XG4gIH1cbiAgQHJldHVybiB2YXIoLS0je2NvbmZpZy4kcHJlZml4fS0jeyRuYW1lfSk7XG59XG5cbi8vLyBFbWl0IGEgZGVjbGFyYXRpb24gd2hpY2ggc2V0cyB0aGUgdmFsdWUgb2YgYSBDU1MgQ3VzdG9tIFByb3BlcnR5IHVzaW5nIHRoZVxuLy8vICRuYW1lIGFzIHRoZSA8Y3VzdG9tLXByb3BlcnR5LW5hbWU+IGFuZCB0aGUgJHZhbHVlIGFzIHRoZVxuLy8vIDxkZWNsYXJhdGlvbi12YWx1ZT5cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG5hbWVcbi8vLyBAcGFyYW0ge2FueX0gJHZhbHVlXG5AbWl4aW4gZGVjbGFyYXRpb24oJG5hbWUsICR2YWx1ZSkge1xuICAje2dldC1uYW1lKCRuYW1lKX06ICN7JHZhbHVlfTtcbn1cbiJdfQ== */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(v));var u=`.sb-bar {
  background-color: var(--cds-layer-01, #f4f4f4) !important;
  border-bottom: 1px solid var(--cds-border-subtle-01, #c6c6c6);
  box-shadow: none !important;
}
.sb-bar div {
  margin: 0 !important;
  width: unset;
}
.sb-bar div [title="Viewport width"],
.sb-bar div [title="Viewport height"] {
  color: var(--cds-text-secondary, #525252);
}
.sb-bar :has(> button),
.sb-bar :has(> a) {
  gap: 0;
}
.sb-bar :has(> button) button + span:not(.addon-collapsible-icon):has(+ button),
.sb-bar :has(> a) button + span:not(.addon-collapsible-icon):has(+ button) {
  background-color: var(--cds-border-subtle-01, #c6c6c6);
  margin: 0;
  block-size: 100%;
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
.sb-bar button.css-n2j2tx:not([role=tab]) {
  background-color: var(--cds-background-selected, rgba(141, 141, 141, 0.2));
}
.sb-bar button[role=tab] {
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616);
  font-weight: unset;
}
.sb-bar button[role=tab] > div > div {
  box-shadow: none;
  color: var(--cds-text-on-color, #ffffff);
  background-color: var(--cds-button-secondary, #393939);
}
.sb-bar button[role=tab] .addon-collapsible-icon {
  color: var(--cds-text-primary, #161616);
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  border-top: 6px solid;
}
.sb-bar button[role=tab]:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12));
}
.sb-bar button[role=tab]:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5));
}
.sb-bar button[role=tab]:focus {
  outline: 2px solid var(--cds-focus, #0f62fe);
  outline-offset: -2px;
  border-width: 2px 0;
  border-color: unset;
}
.sb-bar button.tabbutton-active {
  border-width: 2px 0;
  border-color: transparent transparent var(--cds-border-interactive, #0f62fe);
  font-weight: bold;
}
.sb-bar button.tabbutton-active > div > div {
  color: var(--cds-text-on-color, #ffffff);
  background-color: var(--cds-border-interactive, #0f62fe);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbInRvb2xiYXIuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3RoZW1lcy9zY3NzL2dlbmVyYXRlZC9fdG9rZW5zLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi9sYXlvdXQvc2Nzcy9nZW5lcmF0ZWQvX3NwYWNpbmcuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3N0eWxlcy9zY3NzL2NvbXBvbmVudHMvYnV0dG9uL190b2tlbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFO0VBQ0E7RUFDQTs7QUFFQTtFQUNFO0VBQ0E7O0FBRUE7QUFBQTtFQUVFLE9DOExXOztBRDFMZjtBQUFBO0VBRUU7O0FBRUE7QUFBQTtFQUNFLGtCQ3FJYTtFRHBJYjtFQUNBOztBQUdGO0FBQUE7QUFBQTtBQUFBO0VBRUUsZ0JFZU87RUZkUCxpQkVjTztFRmJQO0VBQ0E7RUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtFQUNFOztBQUdGO0FBQUE7QUFBQTtBQUFBO0VBQ0U7O0FBR0Y7QUFBQTtBQUFBO0FBQUE7RUFDRTs7QUFLTjtFQUNFLGtCQ3hCa0I7O0FEMkJwQjtFQUNFLGdCRVZTO0VGV1QsaUJFWFM7RUZZVDtFQUNBO0VBQ0EsT0M4SVc7RUQ3SVg7O0FBRUE7RUFDRTtFQUNBLE9DMkpVO0VEMUpWLGtCRzhTYTs7QUgzU2Y7RUFDRSxPQ29JUztFRG5JVDtFQUNBO0VBQ0E7O0FBR0Y7RUFDRSxrQkMzQ2E7O0FEOENmO0VBQ0Usa0JDeERjOztBRDJEaEI7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFJSjtFQUNFO0VBQ0E7RUFDQTs7QUFFQTtFQUNFLE9DMEhVO0VEekhWLGtCQ2lHZSIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJAY2FyYm9uL2xheW91dFwiIGFzICo7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZVwiIGFzICo7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy9jb21wb25lbnRzL2J1dHRvbi90b2tlbnNcIiBhcyBidXR0b24tdG9rZW5zO1xuXG4uc2ItYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLTAxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLXN1YnRsZS0wMTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuXG4gIGRpdiB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IHVuc2V0O1xuXG4gICAgW3RpdGxlPVwiVmlld3BvcnQgd2lkdGhcIl0sXG4gICAgW3RpdGxlPVwiVmlld3BvcnQgaGVpZ2h0XCJdIHtcbiAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gICAgfVxuICB9XG5cbiAgOmhhcyg+IGJ1dHRvbiksXG4gIDpoYXMoPiBhKSB7XG4gICAgZ2FwOiAwO1xuXG4gICAgYnV0dG9uICsgc3Bhbjpub3QoLmFkZG9uLWNvbGxhcHNpYmxlLWljb24pOmhhcygrIGJ1dHRvbikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlci1zdWJ0bGUtMDE7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBibG9jay1zaXplOiAxMDAlO1xuICAgIH1cblxuICAgIGJ1dHRvbjpub3QoW3JvbGU9XCJ0YWJcIl0pLFxuICAgIGEge1xuICAgICAgbWluLWJsb2NrLXNpemU6ICRzcGFjaW5nLTA4O1xuICAgICAgbWluLWlubGluZS1zaXplOiAkc3BhY2luZy0wODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAkdGV4dC1wcmltYXJ5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1ob3ZlciAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWFjdGl2ZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICRmb2N1cyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbi5jc3MtbjJqMnR4Om5vdChbcm9sZT1cInRhYlwiXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXNlbGVjdGVkO1xuICB9XG5cbiAgYnV0dG9uW3JvbGU9XCJ0YWJcIl0ge1xuICAgIG1pbi1ibG9jay1zaXplOiAkc3BhY2luZy0wODtcbiAgICBtaW4taW5saW5lLXNpemU6ICRzcGFjaW5nLTA4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICR0ZXh0LXByaW1hcnk7XG4gICAgZm9udC13ZWlnaHQ6IHVuc2V0O1xuXG4gICAgPiBkaXYgPiBkaXYge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGNvbG9yOiAkdGV4dC1vbi1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJ1dHRvbi10b2tlbnMuJGJ1dHRvbi1zZWNvbmRhcnk7XG4gICAgfVxuXG4gICAgLmFkZG9uLWNvbGxhcHNpYmxlLWljb24ge1xuICAgICAgY29sb3I6ICR0ZXh0LXByaW1hcnk7XG4gICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wOiA2cHggc29saWQ7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1ob3ZlcjtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1hY3RpdmU7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAycHggc29saWQgJGZvY3VzO1xuICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gICAgICBib3JkZXItd2lkdGg6IDJweCAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiB1bnNldDtcbiAgICB9XG4gIH1cblxuICBidXR0b24udGFiYnV0dG9uLWFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiAycHggMDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRib3JkZXItaW50ZXJhY3RpdmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICA+IGRpdiA+IGRpdiB7XG4gICAgICBjb2xvcjogJHRleHQtb24tY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWludGVyYWN0aXZlO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29kZSBnZW5lcmF0ZWQgYnkgQGNhcmJvbi90aGVtZXMuIERPIE5PVCBFRElULlxuLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvbmZpZyc7XG5AdXNlICcuLi90aGVtZSc7XG5cbi8vLyBJbnRlcm5hbCBoZWxwZXIgZm9yIGdlbmVyYXRpbmcgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG5AZnVuY3Rpb24gX2dldCgkdG9rZW4pIHtcbiAgQGlmIGNvbmZpZy4kdXNlLWZhbGxiYWNrLXZhbHVlID09IGZhbHNlIHtcbiAgICBAcmV0dXJuIHZhcigtLSN7Y29uZmlnLiRwcmVmaXh9LSN7JHRva2VufSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skdG9rZW59LCAje3RoZW1lLmdldCgkdG9rZW4pfSk7XG4gIH1cbn1cblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmRgIHRva2VuXG4kYmFja2dyb3VuZDogX2dldCgnYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1hY3RpdmVgIHRva2VuXG4kYmFja2dyb3VuZC1hY3RpdmU6IF9nZXQoJ2JhY2tncm91bmQtYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLXNlbGVjdGVkYCB0b2tlblxuJGJhY2tncm91bmQtc2VsZWN0ZWQ6IF9nZXQoJ2JhY2tncm91bmQtc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtc2VsZWN0ZWQtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWJyYW5kYCB0b2tlblxuJGJhY2tncm91bmQtYnJhbmQ6IF9nZXQoJ2JhY2tncm91bmQtYnJhbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtaW52ZXJzZWAgdG9rZW5cbiRiYWNrZ3JvdW5kLWludmVyc2U6IF9nZXQoJ2JhY2tncm91bmQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtaW52ZXJzZS1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wMWAgdG9rZW5cbiRsYXllci0wMTogX2dldCgnbGF5ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wMWAgdG9rZW5cbiRsYXllci1hY3RpdmUtMDE6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wMWAgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAxOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1ob3Zlci0wMTogX2dldCgnbGF5ZXItaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAxYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAxOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDFgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDE6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wMmAgdG9rZW5cbiRsYXllci0wMjogX2dldCgnbGF5ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wMmAgdG9rZW5cbiRsYXllci1hY3RpdmUtMDI6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wMmAgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAyOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1ob3Zlci0wMjogX2dldCgnbGF5ZXItaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAyYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAyOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDJgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDI6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wM2AgdG9rZW5cbiRsYXllci0wMzogX2dldCgnbGF5ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wM2AgdG9rZW5cbiRsYXllci1hY3RpdmUtMDM6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wM2AgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAzOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1ob3Zlci0wMzogX2dldCgnbGF5ZXItaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAzYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAzOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDNgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDM6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1pbnZlcnNlYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWludmVyc2U6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWRpc2FibGVkYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWRpc2FibGVkOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMTogX2dldCgnbGF5ZXItYWNjZW50LTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDE6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDE6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMjogX2dldCgnbGF5ZXItYWNjZW50LTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDI6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDI6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMzogX2dldCgnbGF5ZXItYWNjZW50LTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDM6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDM6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDFgIHRva2VuXG4kZmllbGQtMDE6IF9nZXQoJ2ZpZWxkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wMWAgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMTogX2dldCgnZmllbGQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAyYCB0b2tlblxuJGZpZWxkLTAyOiBfZ2V0KCdmaWVsZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDJgIHRva2VuXG4kZmllbGQtaG92ZXItMDI6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wM2AgdG9rZW5cbiRmaWVsZC0wMzogX2dldCgnZmllbGQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAzYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAzOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaW50ZXJhY3RpdmVgIHRva2VuXG4kaW50ZXJhY3RpdmU6IF9nZXQoJ2ludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAwYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDA6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDAnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDFgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMTogX2dldCgnYm9yZGVyLXN1YnRsZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMWAgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAyYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDI6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDJgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMjogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wM2AgdG9rZW5cbiRib3JkZXItc3VidGxlLTAzOiBfZ2V0KCdib3JkZXItc3VidGxlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAzYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDM6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDFgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMTogX2dldCgnYm9yZGVyLXN0cm9uZy0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wMmAgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAyOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAzYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDM6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAxYCB0b2tlblxuJGJvcmRlci10aWxlLTAxOiBfZ2V0KCdib3JkZXItdGlsZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDJgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDI6IF9nZXQoJ2JvcmRlci10aWxlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wM2AgdG9rZW5cbiRib3JkZXItdGlsZS0wMzogX2dldCgnYm9yZGVyLXRpbGUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1pbnZlcnNlYCB0b2tlblxuJGJvcmRlci1pbnZlcnNlOiBfZ2V0KCdib3JkZXItaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWludGVyYWN0aXZlYCB0b2tlblxuJGJvcmRlci1pbnRlcmFjdGl2ZTogX2dldCgnYm9yZGVyLWludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItZGlzYWJsZWRgIHRva2VuXG4kYm9yZGVyLWRpc2FibGVkOiBfZ2V0KCdib3JkZXItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtcHJpbWFyeWAgdG9rZW5cbiR0ZXh0LXByaW1hcnk6IF9nZXQoJ3RleHQtcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1zZWNvbmRhcnlgIHRva2VuXG4kdGV4dC1zZWNvbmRhcnk6IF9nZXQoJ3RleHQtc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXBsYWNlaG9sZGVyYCB0b2tlblxuJHRleHQtcGxhY2Vob2xkZXI6IF9nZXQoJ3RleHQtcGxhY2Vob2xkZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtaGVscGVyYCB0b2tlblxuJHRleHQtaGVscGVyOiBfZ2V0KCd0ZXh0LWhlbHBlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1lcnJvcmAgdG9rZW5cbiR0ZXh0LWVycm9yOiBfZ2V0KCd0ZXh0LWVycm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWludmVyc2VgIHRva2VuXG4kdGV4dC1pbnZlcnNlOiBfZ2V0KCd0ZXh0LWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtb24tY29sb3JgIHRva2VuXG4kdGV4dC1vbi1jb2xvcjogX2dldCgndGV4dC1vbi1jb2xvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1vbi1jb2xvci1kaXNhYmxlZGAgdG9rZW5cbiR0ZXh0LW9uLWNvbG9yLWRpc2FibGVkOiBfZ2V0KCd0ZXh0LW9uLWNvbG9yLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWRpc2FibGVkYCB0b2tlblxuJHRleHQtZGlzYWJsZWQ6IF9nZXQoJ3RleHQtZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstcHJpbWFyeWAgdG9rZW5cbiRsaW5rLXByaW1hcnk6IF9nZXQoJ2xpbmstcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1wcmltYXJ5LWhvdmVyYCB0b2tlblxuJGxpbmstcHJpbWFyeS1ob3ZlcjogX2dldCgnbGluay1wcmltYXJ5LWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXNlY29uZGFyeWAgdG9rZW5cbiRsaW5rLXNlY29uZGFyeTogX2dldCgnbGluay1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS12aXNpdGVkYCB0b2tlblxuJGxpbmstaW52ZXJzZS12aXNpdGVkOiBfZ2V0KCdsaW5rLWludmVyc2UtdmlzaXRlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay12aXNpdGVkYCB0b2tlblxuJGxpbmstdmlzaXRlZDogX2dldCgnbGluay12aXNpdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2VgIHRva2VuXG4kbGluay1pbnZlcnNlOiBfZ2V0KCdsaW5rLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS1hY3RpdmVgIHRva2VuXG4kbGluay1pbnZlcnNlLWFjdGl2ZTogX2dldCgnbGluay1pbnZlcnNlLWFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLWhvdmVyYCB0b2tlblxuJGxpbmstaW52ZXJzZS1ob3ZlcjogX2dldCgnbGluay1pbnZlcnNlLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLXByaW1hcnlgIHRva2VuXG4kaWNvbi1wcmltYXJ5OiBfZ2V0KCdpY29uLXByaW1hcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tc2Vjb25kYXJ5YCB0b2tlblxuJGljb24tc2Vjb25kYXJ5OiBfZ2V0KCdpY29uLXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1pbnZlcnNlYCB0b2tlblxuJGljb24taW52ZXJzZTogX2dldCgnaWNvbi1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLW9uLWNvbG9yYCB0b2tlblxuJGljb24tb24tY29sb3I6IF9nZXQoJ2ljb24tb24tY29sb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tb24tY29sb3ItZGlzYWJsZWRgIHRva2VuXG4kaWNvbi1vbi1jb2xvci1kaXNhYmxlZDogX2dldCgnaWNvbi1vbi1jb2xvci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1kaXNhYmxlZGAgdG9rZW5cbiRpY29uLWRpc2FibGVkOiBfZ2V0KCdpY29uLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWludGVyYWN0aXZlYCB0b2tlblxuJGljb24taW50ZXJhY3RpdmU6IF9nZXQoJ2ljb24taW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtZXJyb3JgIHRva2VuXG4kc3VwcG9ydC1lcnJvcjogX2dldCgnc3VwcG9ydC1lcnJvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1zdWNjZXNzYCB0b2tlblxuJHN1cHBvcnQtc3VjY2VzczogX2dldCgnc3VwcG9ydC1zdWNjZXNzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXdhcm5pbmdgIHRva2VuXG4kc3VwcG9ydC13YXJuaW5nOiBfZ2V0KCdzdXBwb3J0LXdhcm5pbmcnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtaW5mb2AgdG9rZW5cbiRzdXBwb3J0LWluZm86IF9nZXQoJ3N1cHBvcnQtaW5mbycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1lcnJvci1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtZXJyb3ItaW52ZXJzZTogX2dldCgnc3VwcG9ydC1lcnJvci1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZTogX2dldCgnc3VwcG9ydC1zdWNjZXNzLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtd2FybmluZy1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtd2FybmluZy1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LXdhcm5pbmctaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1pbmZvLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1pbmZvLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtaW5mby1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tbWFqb3JgIHRva2VuXG4kc3VwcG9ydC1jYXV0aW9uLW1ham9yOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tbWFqb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi1taW5vcmAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tbWlub3I6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi1taW5vcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLXVuZGVmaW5lZGAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWJhY2tncm91bmRgIHRva2VuXG4kYWktcG9wb3Zlci1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1wb3BvdmVyLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxYCB0b2tlblxuJGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxOiBfZ2V0KCdhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDJgIHRva2VuXG4kYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDI6IF9nZXQoJ2FpLXBvcG92ZXItc2hhZG93LW91dGVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1pbm5lci1zaGFkb3dgIHRva2VuXG4kYWktaW5uZXItc2hhZG93OiBfZ2V0KCdhaS1pbm5lci1zaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtc3RhcnQtc21gIHRva2VuXG4kYWktYXVyYS1zdGFydC1zbTogX2dldCgnYWktYXVyYS1zdGFydC1zbScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1zdGFydGAgdG9rZW5cbiRhaS1hdXJhLXN0YXJ0OiBfZ2V0KCdhaS1hdXJhLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWVuZGAgdG9rZW5cbiRhaS1hdXJhLWVuZDogX2dldCgnYWktYXVyYS1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLWJhY2tncm91bmQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1zdGFydGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLXN0YXJ0OiBfZ2V0KCdhaS1hdXJhLWhvdmVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLWVuZGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLWVuZDogX2dldCgnYWktYXVyYS1ob3Zlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1zdHJvbmdgIHRva2VuXG4kYWktYm9yZGVyLXN0cm9uZzogX2dldCgnYWktYm9yZGVyLXN0cm9uZycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLXN0YXJ0YCB0b2tlblxuJGFpLWJvcmRlci1zdGFydDogX2dldCgnYWktYm9yZGVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItZW5kYCB0b2tlblxuJGFpLWJvcmRlci1lbmQ6IF9nZXQoJ2FpLWJvcmRlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWRyb3Atc2hhZG93YCB0b2tlblxuJGFpLWRyb3Atc2hhZG93OiBfZ2V0KCdhaS1kcm9wLXNoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktc2tlbGV0b24tYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1za2VsZXRvbi1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1za2VsZXRvbi1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmRgIHRva2VuXG4kYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kOiBfZ2V0KFxuICAnYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLW92ZXJsYXlgIHRva2VuXG4kYWktb3ZlcmxheTogX2dldCgnYWktb3ZlcmxheScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1jZW50ZXJgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1jZW50ZXI6IF9nZXQoJ2FpLXBvcG92ZXItY2FyZXQtY2VudGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbWAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbTogX2dldCgnYWktcG9wb3Zlci1jYXJldC1ib3R0b20nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmRgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZDogX2dldChcbiAgJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9uczogX2dldChcbiAgJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9ucydcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1iYWNrZ3JvdW5kYCB0b2tlblxuJGNoYXQtcHJvbXB0LWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJvcmRlci1zdGFydGAgdG9rZW5cbiRjaGF0LXByb21wdC1ib3JkZXItc3RhcnQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJvcmRlci1zdGFydCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYm9yZGVyLWVuZGAgdG9rZW5cbiRjaGF0LXByb21wdC1ib3JkZXItZW5kOiBfZ2V0KCdjaGF0LXByb21wdC1ib3JkZXItZW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS11c2VyYCB0b2tlblxuJGNoYXQtYnViYmxlLXVzZXI6IF9nZXQoJ2NoYXQtYnViYmxlLXVzZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLWFnZW50YCB0b2tlblxuJGNoYXQtYnViYmxlLWFnZW50OiBfZ2V0KCdjaGF0LWJ1YmJsZS1hZ2VudCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtYm9yZGVyYCB0b2tlblxuJGNoYXQtYnViYmxlLWJvcmRlcjogX2dldCgnY2hhdC1idWJibGUtYm9yZGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci1ib3RgIHRva2VuXG4kY2hhdC1hdmF0YXItYm90OiBfZ2V0KCdjaGF0LWF2YXRhci1ib3QnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLWFnZW50YCB0b2tlblxuJGNoYXQtYXZhdGFyLWFnZW50OiBfZ2V0KCdjaGF0LWF2YXRhci1hZ2VudCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItdXNlcmAgdG9rZW5cbiRjaGF0LWF2YXRhci11c2VyOiBfZ2V0KCdjaGF0LWF2YXRhci11c2VyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXNoZWxsLWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1zaGVsbC1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LXNoZWxsLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtaGVhZGVyLWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1oZWFkZXItYmFja2dyb3VuZDogX2dldCgnY2hhdC1oZWFkZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b25gIHRva2VuXG4kY2hhdC1idXR0b246IF9nZXQoJ2NoYXQtYnV0dG9uJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1ob3ZlcmAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1ob3ZlcjogX2dldCgnY2hhdC1idXR0b24taG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXRleHQtaG92ZXJgIHRva2VuXG4kY2hhdC1idXR0b24tdGV4dC1ob3ZlcjogX2dldCgnY2hhdC1idXR0b24tdGV4dC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tYWN0aXZlYCB0b2tlblxuJGNoYXQtYnV0dG9uLWFjdGl2ZTogX2dldCgnY2hhdC1idXR0b24tYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1zZWxlY3RlZGAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1zZWxlY3RlZDogX2dldCgnY2hhdC1idXR0b24tc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXRleHQtc2VsZWN0ZWRgIHRva2VuXG4kY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZDogX2dldCgnY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaGlnaGxpZ2h0YCB0b2tlblxuJGhpZ2hsaWdodDogX2dldCgnaGlnaGxpZ2h0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBvdmVybGF5YCB0b2tlblxuJG92ZXJsYXk6IF9nZXQoJ292ZXJsYXknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRvZ2dsZS1vZmZgIHRva2VuXG4kdG9nZ2xlLW9mZjogX2dldCgndG9nZ2xlLW9mZicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2hhZG93YCB0b2tlblxuJHNoYWRvdzogX2dldCgnc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1c2AgdG9rZW5cbiRmb2N1czogX2dldCgnZm9jdXMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzLWluc2V0YCB0b2tlblxuJGZvY3VzLWluc2V0OiBfZ2V0KCdmb2N1cy1pbnNldCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXMtaW52ZXJzZWAgdG9rZW5cbiRmb2N1cy1pbnZlcnNlOiBfZ2V0KCdmb2N1cy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBza2VsZXRvbi1iYWNrZ3JvdW5kYCB0b2tlblxuJHNrZWxldG9uLWJhY2tncm91bmQ6IF9nZXQoJ3NrZWxldG9uLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNrZWxldG9uLWVsZW1lbnRgIHRva2VuXG4kc2tlbGV0b24tZWxlbWVudDogX2dldCgnc2tlbGV0b24tZWxlbWVudCcpICFkZWZhdWx0O1xuIiwiLy8gQ29kZSBnZW5lcmF0ZWQgYnkgQGNhcmJvbi9sYXlvdXQuIERPIE5PVCBFRElULlxuLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDE6IDAuMTI1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTAyOiAwLjI1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTAzOiAwLjVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDQ6IDAuNzVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDY6IDEuNXJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wNzogMnJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wODogMi41cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTA5OiAzcmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEwOiA0cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTExOiA1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEyOiA2cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEzOiAxMHJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE1hcFxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZzogKFxuICBzcGFjaW5nLTAxOiAkc3BhY2luZy0wMSxcbiAgc3BhY2luZy0wMjogJHNwYWNpbmctMDIsXG4gIHNwYWNpbmctMDM6ICRzcGFjaW5nLTAzLFxuICBzcGFjaW5nLTA0OiAkc3BhY2luZy0wNCxcbiAgc3BhY2luZy0wNTogJHNwYWNpbmctMDUsXG4gIHNwYWNpbmctMDY6ICRzcGFjaW5nLTA2LFxuICBzcGFjaW5nLTA3OiAkc3BhY2luZy0wNyxcbiAgc3BhY2luZy0wODogJHNwYWNpbmctMDgsXG4gIHNwYWNpbmctMDk6ICRzcGFjaW5nLTA5LFxuICBzcGFjaW5nLTEwOiAkc3BhY2luZy0xMCxcbiAgc3BhY2luZy0xMTogJHNwYWNpbmctMTEsXG4gIHNwYWNpbmctMTI6ICRzcGFjaW5nLTEyLFxuICBzcGFjaW5nLTEzOiAkc3BhY2luZy0xMyxcbik7XG4iLCIvL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vLi4vY29uZmlnJztcbkB1c2UgJy4uLy4uL3RoZW1lcyc7XG5AdXNlICcuLi8uLi91dGlsaXRpZXMvY29tcG9uZW50LXRva2Vucyc7XG5AdXNlICdAY2FyYm9uL3RoZW1lcy9zY3NzL2NvbXBvbmVudC10b2tlbnMnIGFzIGJ1dHRvbjtcblxuJGJ1dHRvbi1zZXBhcmF0b3I6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZXBhcmF0b3IsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZXBhcmF0b3IsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1wcmltYXJ5OiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1zZWNvbmRhcnk6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnksIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10ZXJ0aWFyeTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItcHJpbWFyeTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1wcmltYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXByaW1hcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5OiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItYWN0aXZlOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItYWN0aXZlLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmU6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItaG92ZXI6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItaG92ZXIsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1wcmltYXJ5LWhvdmVyOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXI6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlcjogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3Zlciwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlciwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlciwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kaXNhYmxlZDogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRpc2FibGVkLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGlzYWJsZWQsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10b2tlbnM6IChcbiAgYnV0dG9uLXNlcGFyYXRvcjogJGJ1dHRvbi1zZXBhcmF0b3IsXG4gIGJ1dHRvbi1wcmltYXJ5OiAkYnV0dG9uLXByaW1hcnksXG4gIGJ1dHRvbi1zZWNvbmRhcnk6ICRidXR0b24tc2Vjb25kYXJ5LFxuICBidXR0b24tdGVydGlhcnk6ICRidXR0b24tdGVydGlhcnksXG4gIGJ1dHRvbi1kYW5nZXItcHJpbWFyeTogJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSxcbiAgYnV0dG9uLWRhbmdlci1zZWNvbmRhcnk6ICRidXR0b24tZGFuZ2VyLXNlY29uZGFyeSxcbiAgYnV0dG9uLWRhbmdlci1hY3RpdmU6ICRidXR0b24tZGFuZ2VyLWFjdGl2ZSxcbiAgYnV0dG9uLXByaW1hcnktYWN0aXZlOiAkYnV0dG9uLXByaW1hcnktYWN0aXZlLFxuICBidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZTogJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLFxuICBidXR0b24tdGVydGlhcnktYWN0aXZlOiAkYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLWRhbmdlci1ob3ZlcjogJGJ1dHRvbi1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1wcmltYXJ5LWhvdmVyOiAkYnV0dG9uLXByaW1hcnktaG92ZXIsXG4gIGJ1dHRvbi1zZWNvbmRhcnktaG92ZXI6ICRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLFxuICBidXR0b24tdGVydGlhcnktaG92ZXI6ICRidXR0b24tdGVydGlhcnktaG92ZXIsXG4gIGJ1dHRvbi1kaXNhYmxlZDogJGJ1dHRvbi1kaXNhYmxlZCxcbik7XG5cbiRidXR0b24tc2VwYXJhdG9yOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2VwYXJhdG9yLFxuICAnYnV0dG9uLXNlcGFyYXRvcidcbik7XG5cbiRidXR0b24tcHJpbWFyeTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKCRidXR0b24tcHJpbWFyeSwgJ2J1dHRvbi1wcmltYXJ5Jyk7XG5cbiRidXR0b24tc2Vjb25kYXJ5OiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2Vjb25kYXJ5LFxuICAnYnV0dG9uLXNlY29uZGFyeSdcbik7XG5cbiRidXR0b24tdGVydGlhcnk6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcigkYnV0dG9uLXRlcnRpYXJ5LCAnYnV0dG9uLXRlcnRpYXJ5Jyk7XG5cbiRidXR0b24tZGFuZ2VyLXByaW1hcnk6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSxcbiAgJ2J1dHRvbi1kYW5nZXItcHJpbWFyeSdcbik7XG5cbiRidXR0b24tZGFuZ2VyLXNlY29uZGFyeTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksXG4gICdidXR0b24tZGFuZ2VyLXNlY29uZGFyeSdcbik7XG5cbiRidXR0b24tZGFuZ2VyLWFjdGl2ZTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLWRhbmdlci1hY3RpdmUsXG4gICdidXR0b24tZGFuZ2VyLWFjdGl2ZSdcbik7XG5cbiRidXR0b24tcHJpbWFyeS1hY3RpdmU6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSxcbiAgJ2J1dHRvbi1wcmltYXJ5LWFjdGl2ZSdcbik7XG5cbiRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsXG4gICdidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZSdcbik7XG5cbiRidXR0b24tdGVydGlhcnktYWN0aXZlOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tdGVydGlhcnktYWN0aXZlLFxuICAnYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSdcbik7XG5cbiRidXR0b24tZGFuZ2VyLWhvdmVyOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tZGFuZ2VyLWhvdmVyLFxuICAnYnV0dG9uLWRhbmdlci1ob3Zlcidcbik7XG5cbiRidXR0b24tcHJpbWFyeS1ob3ZlcjogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXByaW1hcnktaG92ZXIsXG4gICdidXR0b24tcHJpbWFyeS1ob3Zlcidcbik7XG5cbiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLFxuICAnYnV0dG9uLXNlY29uZGFyeS1ob3Zlcidcbik7XG5cbiRidXR0b24tdGVydGlhcnktaG92ZXI6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlcixcbiAgJ2J1dHRvbi10ZXJ0aWFyeS1ob3Zlcidcbik7XG5cbiRidXR0b24tZGlzYWJsZWQ6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcigkYnV0dG9uLWRpc2FibGVkLCAnYnV0dG9uLWRpc2FibGVkJyk7XG4iXX0= */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(u));var Q=`nav.sidebar-container {
  background-color: var(--cds-layer-01, #f4f4f4);
}
nav.sidebar-container svg > path {
  fill: var(--cds-text-secondary, #525252);
}
nav.sidebar-container .sidebar-header button {
  min-block-size: 2rem;
  min-inline-size: 2rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
}
nav.sidebar-container .sidebar-header button::after, nav.sidebar-container .sidebar-header button::before {
  box-shadow: none;
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
nav.sidebar-container .search-result-recentlyOpened * {
  color: var(--cds-text-secondary, #525252);
}
nav.sidebar-container [role=combobox].search-field {
  border-radius: 0;
  box-shadow: inset 0 -1px 0 var(--cds-border-strong-01, #8d8d8d);
  background-color: var(--cds-layer-02, #ffffff);
  padding: 0;
}
nav.sidebar-container [role=combobox].search-field *, nav.sidebar-container [role=combobox].search-field ::placeholder {
  color: var(--cds-text-secondary, #525252);
}
nav.sidebar-container [role=combobox].search-field:has(input:focus) {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe);
}
nav.sidebar-container [role=combobox].search-field button {
  min-block-size: 2rem;
  min-inline-size: 2rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
}
nav.sidebar-container [role=combobox].search-field button:hover {
  background-color: var(--cds-layer-hover-02, #e8e8e8) !important;
}
nav.sidebar-container [role=combobox].search-field button:active {
  background-color: var(--cds-layer-active-02, #c6c6c6) !important;
}
nav.sidebar-container [role=combobox].search-field button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
nav.sidebar-container [role=combobox].search-field :last-child {
  gap: 0;
}
nav.sidebar-container [role=combobox].search-field + div button {
  min-block-size: 2rem;
  min-inline-size: 2rem;
  box-shadow: none;
  border-radius: 0;
  background-color: var(--cds-layer-02, #ffffff);
  color: var(--cds-text-primary, #161616) !important;
}
nav.sidebar-container [role=combobox].search-field + div button:hover {
  background-color: var(--cds-layer-hover-02, #e8e8e8) !important;
}
nav.sidebar-container [role=combobox].search-field + div button:active {
  background-color: var(--cds-layer-active-02, #c6c6c6) !important;
}
nav.sidebar-container [role=combobox].search-field + div button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
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
nav.sidebar-container .sidebar-item {
  --tree-node-background-hover: var(--cds-layer-hover-02) !important;
  border-radius: 0;
}
nav.sidebar-container .sidebar-item a {
  color: var(--cds-text-secondary, #525252) !important;
}
nav.sidebar-container .sidebar-item:has([aria-expanded]) {
  background-color: var(--cds-layer-02, #ffffff);
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
nav.sidebar-container .sidebar-item:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
nav.sidebar-container .sidebar-item:hover {
  background-color: var(--cds-layer-hover-02, #e8e8e8);
}
nav.sidebar-container .sidebar-item:active {
  background-color: var(--cds-layer-active-02, #c6c6c6);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbInNpZGVuYXYuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3RoZW1lcy9zY3NzL2dlbmVyYXRlZC9fdG9rZW5zLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi9sYXlvdXQvc2Nzcy9nZW5lcmF0ZWQvX3NwYWNpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGtCQ3lDUzs7QUR2Q0w7RUFDQSxNQ3FNVzs7QURqTWI7RUFDRSxnQkU0Qk87RUYzQlAsaUJFMkJPO0VGMUJQO0VBQ0E7RUFDQTs7QUFDQTtFQUNFOztBQUdGO0VBQ0U7O0FBR0Y7RUFDRTs7QUFHRjtFQUNFOztBQU1KO0VBQ0UsT0N1S1c7O0FEbktmO0VBQ0U7RUFDQTtFQUNBLGtCQ21CTztFRGxCUDs7QUFFQTtFQUNFLE9DNEpXOztBRDFKYjtFQUNFOztBQUdGO0VBQ0UsZ0JFZk87RUZnQlAsaUJFaEJPO0VGaUJQO0VBQ0E7RUFDQTs7QUFFQTtFQUNFOztBQUdGO0VBQ0U7O0FBR0Y7RUFDRTs7QUFJSjtFQUNFOztBQUlBO0VBQ0UsZ0JFeENLO0VGeUNMLGlCRXpDSztFRjBDTDtFQUNBO0VBQ0Esa0JDckJHO0VEc0JIOztBQUVBO0VBQ0U7O0FBR0Y7RUFDRTs7QUFHRjtFQUNFOztBQU1SO0VBQ0UsT0NxR2E7O0FEbkdiO0VBQ0UsZ0JFbEVPO0VGbUVQLGlCRW5FTztFRm9FUDtFQUNBO0VBQ0E7O0FBRUE7RUFDRTs7QUFHRjtFQUNFOztBQUdGO0VBQ0U7O0FBS047RUFDRTtFQUNBOztBQUNBO0VBQ0U7O0FBR0Y7RUFDRSxrQkN2RUs7O0FEMEVQO0VBQ0Usa0JDL0dnQjtFRGdIaEI7O0FBQ0E7RUFDRSxrQkNyRVM7O0FEdUVYO0VBQ0Y7O0FBR0E7RUFDRTs7QUFFRjtFQUNFLGtCQy9FVzs7QURpRmI7RUFDRSxrQkN4RlkiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiQGNhcmJvbi9sYXlvdXRcIiBhcyAqO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvdGhlbWVcIiBhcyAqO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvY29tcG9uZW50cy9idXR0b24vdG9rZW5zXCIgYXMgYnV0dG9uLXRva2VucztcblxubmF2LnNpZGViYXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLTAxO1xuXG4gICAgICBzdmcgPiBwYXRoIHtcbiAgICAgIGZpbGw6ICR0ZXh0LXNlY29uZGFyeTtcbiAgICB9XG5cbiAgLnNpZGViYXItaGVhZGVyIHtcbiAgICBidXR0b24ge1xuICAgICAgbWluLWJsb2NrLXNpemU6ICRzcGFjaW5nLTA3O1xuICAgICAgbWluLWlubGluZS1zaXplOiAkc3BhY2luZy0wNztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAkdGV4dC1wcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICAmOjphZnRlciwgJjo6YmVmb3Jle1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtaG92ZXIgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1hY3RpdmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAkZm9jdXMgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLXJlc3VsdC1yZWNlbnRseU9wZW5lZHtcbiAgICAqe1xuICAgICAgY29sb3I6JHRleHQtc2Vjb25kYXJ5O1xuICAgIH1cbiAgfVxuXG4gIFtyb2xlPVwiY29tYm9ib3hcIl0uc2VhcmNoLWZpZWxkIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwICRib3JkZXItc3Ryb25nLTAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci0wMjtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgKiwgOjpwbGFjZWhvbGRlcntcbiAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gICAgfVxuICAgICY6aGFzKGlucHV0OmZvY3VzKSB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggJGZvY3VzO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMDc7XG4gICAgICBtaW4taW5saW5lLXNpemU6ICRzcGFjaW5nLTA3O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICR0ZXh0LXByaW1hcnkgIWltcG9ydGFudDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1ob3Zlci0wMiAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1hY3RpdmUtMDIgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAkZm9jdXMgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6bGFzdC1jaGlsZCB7XG4gICAgICBnYXA6IDA7XG4gICAgfVxuXG4gICAgKyBkaXYge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWluLWJsb2NrLXNpemU6ICRzcGFjaW5nLTA3O1xuICAgICAgICBtaW4taW5saW5lLXNpemU6ICRzcGFjaW5nLTA3O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItMDI7XG4gICAgICAgIGNvbG9yOiAkdGV4dC1wcmltYXJ5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLWhvdmVyLTAyICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLWFjdGl2ZS0wMiAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICRmb2N1cyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNpZGViYXItc3ViaGVhZGluZyB7XG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMDc7XG4gICAgICBtaW4taW5saW5lLXNpemU6ICRzcGFjaW5nLTA3O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICR0ZXh0LXByaW1hcnkgIWltcG9ydGFudDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWhvdmVyICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtYWN0aXZlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggJGZvY3VzICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNpZGViYXItaXRlbSB7XG4gICAgLS10cmVlLW5vZGUtYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0tY2RzLWxheWVyLWhvdmVyLTAyKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYXtcbiAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmOmhhcyhbYXJpYS1leHBhbmRlZF0pe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLTAyO1xuICAgIH1cblxuICAgICZbZGF0YS1zZWxlY3RlZD1cInRydWVcIl0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtc2VsZWN0ZWQ7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAkc3BhY2luZy0wMiAwIDAgMCAkYm9yZGVyLWludGVyYWN0aXZlO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1ob3Zlci0wMjtcbiAgICAgIH1cbiAgICAgIHN2ZyB7XG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeSAhaW1wb3J0YW50O1xufVxuICAgIH1cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAkZm9jdXMgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItaG92ZXItMDI7XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1hY3RpdmUtMDI7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb2RlIGdlbmVyYXRlZCBieSBAY2FyYm9uL3RoZW1lcy4gRE8gTk9UIEVESVQuXG4vL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29uZmlnJztcbkB1c2UgJy4uL3RoZW1lJztcblxuLy8vIEludGVybmFsIGhlbHBlciBmb3IgZ2VuZXJhdGluZyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbkBmdW5jdGlvbiBfZ2V0KCR0b2tlbikge1xuICBAaWYgY29uZmlnLiR1c2UtZmFsbGJhY2stdmFsdWUgPT0gZmFsc2Uge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skdG9rZW59KTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiB2YXIoLS0je2NvbmZpZy4kcHJlZml4fS0jeyR0b2tlbn0sICN7dGhlbWUuZ2V0KCR0b2tlbil9KTtcbiAgfVxufVxuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZGAgdG9rZW5cbiRiYWNrZ3JvdW5kOiBfZ2V0KCdiYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWFjdGl2ZWAgdG9rZW5cbiRiYWNrZ3JvdW5kLWFjdGl2ZTogX2dldCgnYmFja2dyb3VuZC1hY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtc2VsZWN0ZWRgIHRva2VuXG4kYmFja2dyb3VuZC1zZWxlY3RlZDogX2dldCgnYmFja2dyb3VuZC1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLXNlbGVjdGVkLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLXNlbGVjdGVkLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtaG92ZXI6IF9nZXQoJ2JhY2tncm91bmQtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtYnJhbmRgIHRva2VuXG4kYmFja2dyb3VuZC1icmFuZDogX2dldCgnYmFja2dyb3VuZC1icmFuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1pbnZlcnNlYCB0b2tlblxuJGJhY2tncm91bmQtaW52ZXJzZTogX2dldCgnYmFja2dyb3VuZC1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWludmVyc2UtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLWludmVyc2UtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAxYCB0b2tlblxuJGxheWVyLTAxOiBfZ2V0KCdsYXllci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAxYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMTogX2dldCgnbGF5ZXItYWN0aXZlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAxYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDE6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAxYCB0b2tlblxuJGxheWVyLWhvdmVyLTAxOiBfZ2V0KCdsYXllci1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDFgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDE6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMTogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAyYCB0b2tlblxuJGxheWVyLTAyOiBfZ2V0KCdsYXllci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAyYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMjogX2dldCgnbGF5ZXItYWN0aXZlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAyYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDI6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAyYCB0b2tlblxuJGxheWVyLWhvdmVyLTAyOiBfZ2V0KCdsYXllci1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDJgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDI6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMjogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAzYCB0b2tlblxuJGxheWVyLTAzOiBfZ2V0KCdsYXllci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAzYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMzogX2dldCgnbGF5ZXItYWN0aXZlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAzYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDM6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAzYCB0b2tlblxuJGxheWVyLWhvdmVyLTAzOiBfZ2V0KCdsYXllci1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDNgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDM6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMzogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWludmVyc2VgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZTogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtZGlzYWJsZWRgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtZGlzYWJsZWQ6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDFgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAxOiBfZ2V0KCdsYXllci1hY2NlbnQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDFgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMTogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMTogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDJgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAyOiBfZ2V0KCdsYXllci1hY2NlbnQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDJgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMjogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMjogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDNgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAzOiBfZ2V0KCdsYXllci1hY2NlbnQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDNgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMzogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMzogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wMWAgdG9rZW5cbiRmaWVsZC0wMTogX2dldCgnZmllbGQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAxYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAxOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDJgIHRva2VuXG4kZmllbGQtMDI6IF9nZXQoJ2ZpZWxkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wMmAgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMjogX2dldCgnZmllbGQtaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAzYCB0b2tlblxuJGZpZWxkLTAzOiBfZ2V0KCdmaWVsZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDNgIHRva2VuXG4kZmllbGQtaG92ZXItMDM6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpbnRlcmFjdGl2ZWAgdG9rZW5cbiRpbnRlcmFjdGl2ZTogX2dldCgnaW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDBgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMDogX2dldCgnYm9yZGVyLXN1YnRsZS0wMCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wMWAgdG9rZW5cbiRib3JkZXItc3VidGxlLTAxOiBfZ2V0KCdib3JkZXItc3VidGxlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDE6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDJgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMjogX2dldCgnYm9yZGVyLXN1YnRsZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMmAgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAyOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAzYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDM6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDNgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMzogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wMWAgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAxOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAyYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDI6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDNgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMzogX2dldCgnYm9yZGVyLXN0cm9uZy0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDFgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDE6IF9nZXQoJ2JvcmRlci10aWxlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wMmAgdG9rZW5cbiRib3JkZXItdGlsZS0wMjogX2dldCgnYm9yZGVyLXRpbGUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAzYCB0b2tlblxuJGJvcmRlci10aWxlLTAzOiBfZ2V0KCdib3JkZXItdGlsZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWludmVyc2VgIHRva2VuXG4kYm9yZGVyLWludmVyc2U6IF9nZXQoJ2JvcmRlci1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItaW50ZXJhY3RpdmVgIHRva2VuXG4kYm9yZGVyLWludGVyYWN0aXZlOiBfZ2V0KCdib3JkZXItaW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1kaXNhYmxlZGAgdG9rZW5cbiRib3JkZXItZGlzYWJsZWQ6IF9nZXQoJ2JvcmRlci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1wcmltYXJ5YCB0b2tlblxuJHRleHQtcHJpbWFyeTogX2dldCgndGV4dC1wcmltYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXNlY29uZGFyeWAgdG9rZW5cbiR0ZXh0LXNlY29uZGFyeTogX2dldCgndGV4dC1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtcGxhY2Vob2xkZXJgIHRva2VuXG4kdGV4dC1wbGFjZWhvbGRlcjogX2dldCgndGV4dC1wbGFjZWhvbGRlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1oZWxwZXJgIHRva2VuXG4kdGV4dC1oZWxwZXI6IF9nZXQoJ3RleHQtaGVscGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWVycm9yYCB0b2tlblxuJHRleHQtZXJyb3I6IF9nZXQoJ3RleHQtZXJyb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtaW52ZXJzZWAgdG9rZW5cbiR0ZXh0LWludmVyc2U6IF9nZXQoJ3RleHQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1vbi1jb2xvcmAgdG9rZW5cbiR0ZXh0LW9uLWNvbG9yOiBfZ2V0KCd0ZXh0LW9uLWNvbG9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LW9uLWNvbG9yLWRpc2FibGVkYCB0b2tlblxuJHRleHQtb24tY29sb3ItZGlzYWJsZWQ6IF9nZXQoJ3RleHQtb24tY29sb3ItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtZGlzYWJsZWRgIHRva2VuXG4kdGV4dC1kaXNhYmxlZDogX2dldCgndGV4dC1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1wcmltYXJ5YCB0b2tlblxuJGxpbmstcHJpbWFyeTogX2dldCgnbGluay1wcmltYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXByaW1hcnktaG92ZXJgIHRva2VuXG4kbGluay1wcmltYXJ5LWhvdmVyOiBfZ2V0KCdsaW5rLXByaW1hcnktaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstc2Vjb25kYXJ5YCB0b2tlblxuJGxpbmstc2Vjb25kYXJ5OiBfZ2V0KCdsaW5rLXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLXZpc2l0ZWRgIHRva2VuXG4kbGluay1pbnZlcnNlLXZpc2l0ZWQ6IF9nZXQoJ2xpbmstaW52ZXJzZS12aXNpdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXZpc2l0ZWRgIHRva2VuXG4kbGluay12aXNpdGVkOiBfZ2V0KCdsaW5rLXZpc2l0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZWAgdG9rZW5cbiRsaW5rLWludmVyc2U6IF9nZXQoJ2xpbmstaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLWFjdGl2ZWAgdG9rZW5cbiRsaW5rLWludmVyc2UtYWN0aXZlOiBfZ2V0KCdsaW5rLWludmVyc2UtYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2UtaG92ZXJgIHRva2VuXG4kbGluay1pbnZlcnNlLWhvdmVyOiBfZ2V0KCdsaW5rLWludmVyc2UtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tcHJpbWFyeWAgdG9rZW5cbiRpY29uLXByaW1hcnk6IF9nZXQoJ2ljb24tcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1zZWNvbmRhcnlgIHRva2VuXG4kaWNvbi1zZWNvbmRhcnk6IF9nZXQoJ2ljb24tc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWludmVyc2VgIHRva2VuXG4kaWNvbi1pbnZlcnNlOiBfZ2V0KCdpY29uLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tb24tY29sb3JgIHRva2VuXG4kaWNvbi1vbi1jb2xvcjogX2dldCgnaWNvbi1vbi1jb2xvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1vbi1jb2xvci1kaXNhYmxlZGAgdG9rZW5cbiRpY29uLW9uLWNvbG9yLWRpc2FibGVkOiBfZ2V0KCdpY29uLW9uLWNvbG9yLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWRpc2FibGVkYCB0b2tlblxuJGljb24tZGlzYWJsZWQ6IF9nZXQoJ2ljb24tZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24taW50ZXJhY3RpdmVgIHRva2VuXG4kaWNvbi1pbnRlcmFjdGl2ZTogX2dldCgnaWNvbi1pbnRlcmFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1lcnJvcmAgdG9rZW5cbiRzdXBwb3J0LWVycm9yOiBfZ2V0KCdzdXBwb3J0LWVycm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXN1Y2Nlc3NgIHRva2VuXG4kc3VwcG9ydC1zdWNjZXNzOiBfZ2V0KCdzdXBwb3J0LXN1Y2Nlc3MnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtd2FybmluZ2AgdG9rZW5cbiRzdXBwb3J0LXdhcm5pbmc6IF9nZXQoJ3N1cHBvcnQtd2FybmluZycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1pbmZvYCB0b2tlblxuJHN1cHBvcnQtaW5mbzogX2dldCgnc3VwcG9ydC1pbmZvJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWVycm9yLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1lcnJvci1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LWVycm9yLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtc3VjY2Vzcy1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtc3VjY2Vzcy1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC13YXJuaW5nLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC13YXJuaW5nLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtd2FybmluZy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWluZm8taW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LWluZm8taW52ZXJzZTogX2dldCgnc3VwcG9ydC1pbmZvLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi1tYWpvcmAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tbWFqb3I6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi1tYWpvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLW1pbm9yYCB0b2tlblxuJHN1cHBvcnQtY2F1dGlvbi1taW5vcjogX2dldCgnc3VwcG9ydC1jYXV0aW9uLW1pbm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkYCB0b2tlblxuJHN1cHBvcnQtY2F1dGlvbi11bmRlZmluZWQ6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi11bmRlZmluZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1wb3BvdmVyLWJhY2tncm91bmQ6IF9nZXQoJ2FpLXBvcG92ZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDFgIHRva2VuXG4kYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDE6IF9nZXQoJ2FpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMmAgdG9rZW5cbiRhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMjogX2dldCgnYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWlubmVyLXNoYWRvd2AgdG9rZW5cbiRhaS1pbm5lci1zaGFkb3c6IF9nZXQoJ2FpLWlubmVyLXNoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1zdGFydC1zbWAgdG9rZW5cbiRhaS1hdXJhLXN0YXJ0LXNtOiBfZ2V0KCdhaS1hdXJhLXN0YXJ0LXNtJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLXN0YXJ0YCB0b2tlblxuJGFpLWF1cmEtc3RhcnQ6IF9nZXQoJ2FpLWF1cmEtc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtZW5kYCB0b2tlblxuJGFpLWF1cmEtZW5kOiBfZ2V0KCdhaS1hdXJhLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLWF1cmEtaG92ZXItYmFja2dyb3VuZDogX2dldCgnYWktYXVyYS1ob3Zlci1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLXN0YXJ0YCB0b2tlblxuJGFpLWF1cmEtaG92ZXItc3RhcnQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItZW5kYCB0b2tlblxuJGFpLWF1cmEtaG92ZXItZW5kOiBfZ2V0KCdhaS1hdXJhLWhvdmVyLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLXN0cm9uZ2AgdG9rZW5cbiRhaS1ib3JkZXItc3Ryb25nOiBfZ2V0KCdhaS1ib3JkZXItc3Ryb25nJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItc3RhcnRgIHRva2VuXG4kYWktYm9yZGVyLXN0YXJ0OiBfZ2V0KCdhaS1ib3JkZXItc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1lbmRgIHRva2VuXG4kYWktYm9yZGVyLWVuZDogX2dldCgnYWktYm9yZGVyLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktZHJvcC1zaGFkb3dgIHRva2VuXG4kYWktZHJvcC1zaGFkb3c6IF9nZXQoJ2FpLWRyb3Atc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1za2VsZXRvbi1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLXNrZWxldG9uLWJhY2tncm91bmQ6IF9nZXQoJ2FpLXNrZWxldG9uLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXNrZWxldG9uLWVsZW1lbnQtYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmQ6IF9nZXQoXG4gICdhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmQnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktb3ZlcmxheWAgdG9rZW5cbiRhaS1vdmVybGF5OiBfZ2V0KCdhaS1vdmVybGF5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWNlbnRlcmAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWNlbnRlcjogX2dldCgnYWktcG9wb3Zlci1jYXJldC1jZW50ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tOiBfZ2V0KCdhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kOiBfZ2V0KFxuICAnYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZCdcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kLWFjdGlvbnNgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zOiBfZ2V0KFxuICAnYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1wcm9tcHQtYmFja2dyb3VuZDogX2dldCgnY2hhdC1wcm9tcHQtYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYm9yZGVyLXN0YXJ0YCB0b2tlblxuJGNoYXQtcHJvbXB0LWJvcmRlci1zdGFydDogX2dldCgnY2hhdC1wcm9tcHQtYm9yZGVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1ib3JkZXItZW5kYCB0b2tlblxuJGNoYXQtcHJvbXB0LWJvcmRlci1lbmQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJvcmRlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLXVzZXJgIHRva2VuXG4kY2hhdC1idWJibGUtdXNlcjogX2dldCgnY2hhdC1idWJibGUtdXNlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtYWdlbnRgIHRva2VuXG4kY2hhdC1idWJibGUtYWdlbnQ6IF9nZXQoJ2NoYXQtYnViYmxlLWFnZW50JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS1ib3JkZXJgIHRva2VuXG4kY2hhdC1idWJibGUtYm9yZGVyOiBfZ2V0KCdjaGF0LWJ1YmJsZS1ib3JkZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLWJvdGAgdG9rZW5cbiRjaGF0LWF2YXRhci1ib3Q6IF9nZXQoJ2NoYXQtYXZhdGFyLWJvdCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItYWdlbnRgIHRva2VuXG4kY2hhdC1hdmF0YXItYWdlbnQ6IF9nZXQoJ2NoYXQtYXZhdGFyLWFnZW50JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci11c2VyYCB0b2tlblxuJGNoYXQtYXZhdGFyLXVzZXI6IF9nZXQoJ2NoYXQtYXZhdGFyLXVzZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtc2hlbGwtYmFja2dyb3VuZGAgdG9rZW5cbiRjaGF0LXNoZWxsLWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtc2hlbGwtYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1oZWFkZXItYmFja2dyb3VuZGAgdG9rZW5cbiRjaGF0LWhlYWRlci1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LWhlYWRlci1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbmAgdG9rZW5cbiRjaGF0LWJ1dHRvbjogX2dldCgnY2hhdC1idXR0b24nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLWhvdmVyYCB0b2tlblxuJGNoYXQtYnV0dG9uLWhvdmVyOiBfZ2V0KCdjaGF0LWJ1dHRvbi1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tdGV4dC1ob3ZlcmAgdG9rZW5cbiRjaGF0LWJ1dHRvbi10ZXh0LWhvdmVyOiBfZ2V0KCdjaGF0LWJ1dHRvbi10ZXh0LWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1hY3RpdmVgIHRva2VuXG4kY2hhdC1idXR0b24tYWN0aXZlOiBfZ2V0KCdjaGF0LWJ1dHRvbi1hY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXNlbGVjdGVkYCB0b2tlblxuJGNoYXQtYnV0dG9uLXNlbGVjdGVkOiBfZ2V0KCdjaGF0LWJ1dHRvbi1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZGAgdG9rZW5cbiRjaGF0LWJ1dHRvbi10ZXh0LXNlbGVjdGVkOiBfZ2V0KCdjaGF0LWJ1dHRvbi10ZXh0LXNlbGVjdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBoaWdobGlnaHRgIHRva2VuXG4kaGlnaGxpZ2h0OiBfZ2V0KCdoaWdobGlnaHQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYG92ZXJsYXlgIHRva2VuXG4kb3ZlcmxheTogX2dldCgnb3ZlcmxheScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdG9nZ2xlLW9mZmAgdG9rZW5cbiR0b2dnbGUtb2ZmOiBfZ2V0KCd0b2dnbGUtb2ZmJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzaGFkb3dgIHRva2VuXG4kc2hhZG93OiBfZ2V0KCdzaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzYCB0b2tlblxuJGZvY3VzOiBfZ2V0KCdmb2N1cycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXMtaW5zZXRgIHRva2VuXG4kZm9jdXMtaW5zZXQ6IF9nZXQoJ2ZvY3VzLWluc2V0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1cy1pbnZlcnNlYCB0b2tlblxuJGZvY3VzLWludmVyc2U6IF9nZXQoJ2ZvY3VzLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNrZWxldG9uLWJhY2tncm91bmRgIHRva2VuXG4kc2tlbGV0b24tYmFja2dyb3VuZDogX2dldCgnc2tlbGV0b24tYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2tlbGV0b24tZWxlbWVudGAgdG9rZW5cbiRza2VsZXRvbi1lbGVtZW50OiBfZ2V0KCdza2VsZXRvbi1lbGVtZW50JykgIWRlZmF1bHQ7XG4iLCIvLyBDb2RlIGdlbmVyYXRlZCBieSBAY2FyYm9uL2xheW91dC4gRE8gTk9UIEVESVQuXG4vL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wMTogMC4xMjVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDI6IDAuMjVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDM6IDAuNXJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wNDogMC43NXJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wNTogMXJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wNjogMS41cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTA3OiAycmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTA4OiAyLjVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDk6IDNyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMTA6IDRyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMTE6IDVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMTI6IDZyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMTM6IDEwcmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTWFwXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nOiAoXG4gIHNwYWNpbmctMDE6ICRzcGFjaW5nLTAxLFxuICBzcGFjaW5nLTAyOiAkc3BhY2luZy0wMixcbiAgc3BhY2luZy0wMzogJHNwYWNpbmctMDMsXG4gIHNwYWNpbmctMDQ6ICRzcGFjaW5nLTA0LFxuICBzcGFjaW5nLTA1OiAkc3BhY2luZy0wNSxcbiAgc3BhY2luZy0wNjogJHNwYWNpbmctMDYsXG4gIHNwYWNpbmctMDc6ICRzcGFjaW5nLTA3LFxuICBzcGFjaW5nLTA4OiAkc3BhY2luZy0wOCxcbiAgc3BhY2luZy0wOTogJHNwYWNpbmctMDksXG4gIHNwYWNpbmctMTA6ICRzcGFjaW5nLTEwLFxuICBzcGFjaW5nLTExOiAkc3BhY2luZy0xMSxcbiAgc3BhY2luZy0xMjogJHNwYWNpbmctMTIsXG4gIHNwYWNpbmctMTM6ICRzcGFjaW5nLTEzLFxuKTtcbiJdfQ== */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Q));var U=`#panel-tab-content {
  height: calc(100% - 41px) !important;
  margin-top: 1px !important;
  background: var(--cds-background, #ffffff) !important;
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
#panel-tab-content p {
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content [data-radix-scroll-area-viewport] + div > div {
  background: var(--cds-border-inverse, #161616);
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
  min-block-size: 1.5rem !important;
  min-inline-size: 1.5rem !important;
  border-radius: 0 !important;
  background: transparent !important;
  color: var(--cds-text-primary, #161616) !important;
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
#panel-tab-content button[title="Reset controls"] {
  min-block-size: 1.5rem !important;
  min-inline-size: 1.5rem !important;
  border-radius: 0 !important;
  background: transparent !important;
  color: var(--cds-text-primary, #161616) !important;
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
#panel-tab-content table.docblock-argstable > thead.docblock-argstable-head > tr > th > span {
  color: var(--cds-text-primary, #161616);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td {
  background: var(--cds-background, #ffffff);
  border-color: var(--cds-border-subtle-01, #c6c6c6);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td .css-mkjjps,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td .css-o1d7ko {
  background: var(--cds-layer-01, #f4f4f4);
  border: 1px solid var(--cds-border-subtle-01, #c6c6c6);
  border-radius: 0;
  color: var(--cds-text-secondary, #525252);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td span[title=Required] {
  color: var(--cds-support-error, #da1e28);
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
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe);
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
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:checked ~ span:last-of-type,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:not(:checked) ~ span:first-of-type {
  background-color: var(--cds-layer-01, #f4f4f4);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td label:has(input[role=switch]) {
  background-color: var(--cds-background, #ffffff);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:focus {
  box-shadow: 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:checked ~ span:last-of-type,
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[role=switch]:not(:checked) ~ span:first-of-type {
  box-shadow: inset 0 0 0 1px var(--cds-border-strong-01, #8d8d8d);
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=date],
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td input[type=time] {
  color-scheme: light;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td :root[storybook-carbon-theme=g90] input[type=date],
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td :root[storybook-carbon-theme=g100] input[type=date],
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td :root[storybook-carbon-theme=g90] input[type=time],
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr:not([title]) > td :root[storybook-carbon-theme=g100] input[type=time] {
  color-scheme: dark;
}
#panel-tab-content table.docblock-argstable > tbody.docblock-argstable-body > tr[title~=items] {
  background: var(--cds-layer-01, #f4f4f4) !important;
  box-shadow: inset 0 1px 0 0 var(--cds-border-subtle-01, #c6c6c6);
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
#panel-tab-content .docblock-source {
  background-color: var(--cds-background, #ffffff);
  border-radius: 0;
  border: 1px solid var(--cds-border-subtle-01, #c6c6c6);
}
#panel-tab-content {
  /* ==================================================
     INTERACTIONS PANEL
     ================================================== */
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) {
  background-color: var(--cds-background);
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
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] div[aria-label="Status of the test run"] {
  min-block-size: 2.5rem;
  min-inline-size: 4rem;
  border-radius: 0;
  align-content: center;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] span:empty {
  display: none;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button {
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
  border-radius: 0;
  background: transparent;
  color: var(--cds-text-primary, #161616);
  margin: 0;
  box-shadow: none;
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button:not([disabled]):hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12));
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button:not([disabled]):active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5));
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) nav[aria-label="Component tests toolbar"] button:not([disabled]):focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe);
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) div[aria-label="Interactions list"] div:has(> button[aria-label="Interaction step"]):hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12));
}
#panel-tab-content div:has(nav[aria-label="Component tests toolbar"]) div[aria-label="Interactions list"] div:has(> button[aria-label="Interaction step"]):active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5));
}
#panel-tab-content {
  /* ==================================================
     A11Y PANEL
     ================================================== */
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
#panel-tab-content div:has(> div > [data-type=violations]) button:not([role=tab]) {
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) button:not([role=tab]):hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12));
}
#panel-tab-content div:has(> div > [data-type=violations]) button:not([role=tab]):active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5));
}
#panel-tab-content div:has(> div > [data-type=violations]) button:not([role=tab]):focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab] {
  min-block-size: 2.5rem;
  min-inline-size: 2.5rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616);
  font-weight: unset;
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab] > div > div {
  box-shadow: none;
  color: var(--cds-text-on-color, #ffffff);
  background-color: var(--cds-button-secondary, #393939);
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab]:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12));
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab]:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5));
}
#panel-tab-content div:has(> div > [data-type=violations]) button[role=tab]:focus {
  outline: 2px solid var(--cds-focus, #0f62fe);
  outline-offset: -2px;
  border-width: 2px 0;
  border-color: unset;
}
#panel-tab-content div:has(> div > [data-type=violations]) button[data-active=true] {
  border-width: 2px 0;
  border-color: transparent transparent var(--cds-border-interactive, #0f62fe);
  font-weight: bold;
}
#panel-tab-content div:has(> div > [data-type=violations]) button[data-active=true] > div > div {
  color: var(--cds-text-on-color, #ffffff);
  background-color: var(--cds-border-interactive, #0f62fe);
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
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > button {
  min-block-size: 1.5rem;
  min-inline-size: 1.5rem;
  border-radius: 0;
  background-color: transparent;
  color: var(--cds-text-primary, #161616) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > button:hover {
  background-color: var(--cds-background-hover, rgba(141, 141, 141, 0.12));
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > button:active {
  background-color: var(--cds-background-active, rgba(141, 141, 141, 0.5));
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] > button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] {
  background-color: var(--cds-layer-01, #f4f4f4);
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
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tablist] button,
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tabpanel] button {
  border-radius: 0;
  color: var(--cds-text-secondary, #525252);
  background-color: var(--cds-layer-02, #ffffff);
  box-shadow: inset 0 0 0 1px var(--cds-border-subtle-01, #c6c6c6);
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tablist] button:hover,
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tabpanel] button:hover {
  background-color: var(--cds-layer-hover-02, #e8e8e8);
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tablist] button:active,
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tabpanel] button:active {
  background-color: var(--cds-layer-active-02, #c6c6c6);
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tablist] button:focus,
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-active] + [id*=details] [role=tabpanel] button:focus {
  box-shadow: inset 0 0 0 2px var(--cds-focus, #0f62fe) !important;
}
#panel-tab-content div:has(> div > [data-type=violations]) + div [data-radix-scroll-area-content] > div {
  background-color: inherit;
  border-color: var(--cds-border-subtle-01, #c6c6c6);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbInBhbmVsLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi90aGVtZXMvc2Nzcy9nZW5lcmF0ZWQvX3Rva2Vucy5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXJib24vbGF5b3V0L3Njc3MvZ2VuZXJhdGVkL19zcGFjaW5nLnNjc3MiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcmJvbi9zdHlsZXMvc2Nzcy9jb21wb25lbnRzL2J1dHRvbi9fdG9rZW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRTtFQUNBO0VBQ0E7O0FBR0E7QUFBQTtBQUFBO0VBR0U7O0FBQ0E7QUFBQTtBQUFBO0VBQ0U7O0FBSUo7RUFDRSxPQ3lMYTs7QURyTGI7RUFDRSxZQ3dLVzs7QURuS2I7RUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBTUEsa0JDU0s7RURSTCxjQ3VIYTtFRHRIYixPQ3NLVzs7QURwS1g7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7O0FBR0Y7RUFDRTs7QUFHRjtFQUNFOztBQU1SO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFOztBQUdGO0VBQ0U7O0FBR0Y7RUFDRTs7QUFLRjtFQUNFLE9DcUhTOztBRGpIVDtFQUNFLFlDcEVLO0VEcUVMLGNDa0VXOztBRGhFWDtBQUFBO0VBRUUsWUNqREM7RURrREQ7RUFDQTtFQUNBLE9DMkdPOztBRHhHVDtFQUNFLE9DNEtNOztBRHpLUjtBQUFBO0FBQUE7QUFBQTtFQUlFO0VBQ0E7RUFDQSxrQkNqRUM7O0FEb0VIO0FBQUE7QUFBQTtFQUdFOztBQUdGO0FBQUE7QUFBQTtFQUdFLE9Da0ZPOztBRC9FVDtBQUFBO0FBQUE7QUFBQTtFQUlFLGtCQzNFTzs7QUQ4RVQ7QUFBQTtBQUFBO0FBQUE7RUFJRSxrQkN4RlE7O0FEMkZWO0FBQUE7QUFBQTtBQUFBO0VBSUU7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLGtCQ3JJRztFRHNJSDtFQUNBO0VBQ0EsWUFDRTs7QUFJRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0Esa0JDa0ZHO0VEakZIOztBQUdGO0VBQ0U7RUFDQTs7QUFJSjtBQUFBO0VBRUUsa0JDeklDOztBRDRJSDtFQUNFLGtCQ3JLRzs7QUR3S0w7RUFDRTs7QUFHRjtBQUFBO0VBRUU7O0FBR0Y7QUFBQTtFQUVFOztBQUdGO0FBQUE7QUFBQTtBQUFBO0VBSUU7O0FBSUo7RUFDRTtFQUNBOztBQUVBO0VBQ0U7RUFDQTs7QUFHRjtFQUNFO0VBQ0E7RUFDQSxPQ3RCSzs7QUR3Qkw7RUFDRSxPQzBCRzs7QUR2Qkw7RUFDRTs7QUFPVjtFQUNFLGtCQ3pOUztFRDBOVDtFQUNBOztBQTdPSjtBQWdQRTtBQUFBO0FBQUE7O0FBR0E7RUFDRTs7QUFFQTtFQUNFO0VBQ0E7RUFDQTtFQUNBLFlDaE5LOztBRGtOTDtFQUNFLE9DdkRPOztBRDBEVDtFQUNFLGdCRXZOSztFRndOTCxpQkU5TUs7RUYrTUw7RUFDQTs7QUFHRjtFQUNFOztBQUdGO0VBQ0UsZ0JFbE9LO0VGbU9MLGlCRW5PSztFRm9PTDtFQUNBO0VBQ0EsT0MxRU87RUQyRVA7RUFDQTs7QUFFQTtFQUNFLGtCQ3ZQUzs7QUR5UFg7RUFDRSxrQkNuUVU7O0FEcVFaO0VBQ0U7O0FBT0Y7RUFDRSxrQkNyUVM7O0FEdVFYO0VBQ0Usa0JDalJVOztBRHJCcEI7QUEyU0U7QUFBQTtBQUFBOztBQUlBO0VBQ0Usa0JDdFFPO0VEdVFQO0VBQ0E7RUFDQTs7QUFDQTtFQUNFOztBQUVGO0VBQ0UsZ0JFOVFPO0VGK1FQLGlCRS9RTztFRmdSUDtFQUNBO0VBQ0E7O0FBRUE7RUFDRSxrQkNqU1c7O0FEb1NiO0VBQ0Usa0JDOVNZOztBRGlUZDtFQUNFOztBQUdKO0VBQ0UsZ0JFalNPO0VGa1NQLGlCRWxTTztFRm1TUDtFQUNBO0VBQ0EsT0N6SVM7RUQwSVQ7O0FBR0E7RUFDRTtFQUNBLE9DN0hRO0VEOEhSLGtCR3NCVzs7QUhuQmI7RUFDRSxrQkM1VFc7O0FEK1RiO0VBQ0Usa0JDelVZOztBRDRVZDtFQUNFO0VBQ0E7RUFDQTtFQUNBOztBQUlKO0VBQ0U7RUFDQTtFQUNBOztBQUVBO0VBQ0UsT0N2SlE7RUR3SlIsa0JDaExhOztBRHNMakI7RUFDRSxrQkM3VUs7O0FEK1VMO0VBQ0UsT0N2T007RUR3T04sa0JDeFVTOztBRHlVVDtFQUNFLGtCQzFVTzs7QUQrVVQ7RUFDRSxPQzFMTzs7QUQ4TFg7RUFDRSxPQy9MUzs7QURpTVg7RUFDRSxnQkUzV0s7RUY0V0wsaUJFNVdLO0VGNldMO0VBQ0E7RUFDQTs7QUFFQTtFQUNFLGtCQ3BYUzs7QUR1WFg7RUFDRSxrQkNqWVU7O0FEb1laO0VBQ0U7O0FBSU47RUFDRSxrQkNyWEs7O0FEc1hMO0VBQ0UsT0NoTU87O0FEaU1QO0VBQ0U7O0FBRUE7RUFDRSxNQ3JNRzs7QUQyTVA7RUFDRSxPQ3BPTzs7QUR5T1Q7QUFBQTtFQUNFO0VBQ0EsT0MzT087RUQ0T1Asa0JDelhDO0VEMFhEOztBQUVBO0FBQUE7RUFDRSxrQkNwWEs7O0FEc1hQO0FBQUE7RUFDRSxrQkM3WE07O0FEK1hSO0FBQUE7RUFDRTs7QUFPTjtFQUNFO0VBQ0EsY0MvU1ciLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiQGNhcmJvbi9sYXlvdXRcIiBhcyAqO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvdGhlbWVcIiBhcyAqO1xuQHVzZSBcIkBjYXJib24vc3R5bGVzL3Njc3MvY29tcG9uZW50cy9idXR0b24vdG9rZW5zXCIgYXMgYnV0dG9uLXRva2VucztcblxuI3BhbmVsLXRhYi1jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MXB4KSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogJGJhY2tncm91bmQgIWltcG9ydGFudDtcblxuICAvLyBsb2FkaW5nIHN0YXRlIHNjcmVlbnMgYmFja2dyb3VuZHNcbiAgLmNzcy15NnNkNnUsXG4gIC5jc3MtMTQwMGFpdyxcbiAgPiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgPiBkaXYge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xuICB9XG5cbiAgW2RhdGEtcmFkaXgtc2Nyb2xsLWFyZWEtdmlld3BvcnRdIHtcbiAgICArIGRpdiA+IGRpdiB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWludmVyc2U7XG4gICAgfVxuICB9XG5cbiAgW2lkPVwic2F2ZS1mcm9tLWNvbnRyb2xzXCJdIHtcbiAgICA+IGRpdiB7XG4gICAgICAtLWhpZ2hsaWdodC1iZy1jb2xvcjogY29sb3ItbWl4KFxuICAgICAgICBpbiBzcmdiLFxuICAgICAgICB2YXIoLS1jZHMtYm9yZGVyLWludGVyYWN0aXZlKSAzMCUsXG4gICAgICAgIHZhcigtLWNkcy1sYXllci0wMSlcbiAgICAgICk7XG5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci0wMTtcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1zdWJ0bGUtMDE7XG4gICAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMDYgIWltcG9ydGFudDtcbiAgICAgICAgbWluLWlubGluZS1zaXplOiAkc3BhY2luZy0wNiAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAkdGV4dC1wcmltYXJ5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICRmb2N1cyAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtaG92ZXIgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1hY3RpdmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJ1dHRvblt0aXRsZT1cIlJlc2V0IGNvbnRyb2xzXCJdIHtcbiAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMDYgIWltcG9ydGFudDtcbiAgICBtaW4taW5saW5lLXNpemU6ICRzcGFjaW5nLTA2ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICR0ZXh0LXByaW1hcnkgIWltcG9ydGFudDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICRmb2N1cyAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtaG92ZXIgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1hY3RpdmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICB0YWJsZS5kb2NibG9jay1hcmdzdGFibGUge1xuICAgID4gdGhlYWQuZG9jYmxvY2stYXJnc3RhYmxlLWhlYWQgPiB0ciA+IHRoID4gc3BhbiB7XG4gICAgICBjb2xvcjogJHRleHQtcHJpbWFyeTtcbiAgICB9XG5cbiAgICA+IHRib2R5LmRvY2Jsb2NrLWFyZ3N0YWJsZS1ib2R5IHtcbiAgICAgID4gdHI6bm90KFt0aXRsZV0pID4gdGQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLXN1YnRsZS0wMTtcblxuICAgICAgICAuY3NzLW1rampwcyxcbiAgICAgICAgLmNzcy1vMWQ3a28ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICRsYXllci0wMTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLXN1YnRsZS0wMTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuW3RpdGxlPVwiUmVxdWlyZWRcIl0ge1xuICAgICAgICAgIGNvbG9yOiAkc3VwcG9ydC1lcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbixcbiAgICAgICAgaW5wdXQ6bm90KFt0eXBlPVwicmFkaW9cIl0pOm5vdChbdHlwZT1cImNoZWNrYm94XCJdKSxcbiAgICAgICAgdGV4dGFyZWEsXG4gICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci0wMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0Om5vdChbdHlwZT1cInJhZGlvXCJdKTpub3QoW3R5cGU9XCJjaGVja2JveFwiXSk6bm90KFt0eXBlPVwicmFuZ2VcIl0pLFxuICAgICAgICB0ZXh0YXJlYSxcbiAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAkYm9yZGVyLXN0cm9uZy0wMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0Om5vdChbdHlwZT1cInJhZGlvXCJdKTpub3QoW3R5cGU9XCJjaGVja2JveFwiXSk6OnBsYWNlaG9sZGVyLFxuICAgICAgICB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIsXG4gICAgICAgIHNlbGVjdDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246aG92ZXIsXG4gICAgICAgIGlucHV0Om5vdChbdHlwZT1cInJhZGlvXCJdKTpub3QoW3R5cGU9XCJjaGVja2JveFwiXSk6aG92ZXIsXG4gICAgICAgIHRleHRhcmVhOmhvdmVyLFxuICAgICAgICBzZWxlY3Q6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1ob3Zlci0wMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjphY3RpdmUsXG4gICAgICAgIGlucHV0Om5vdChbdHlwZT1cInJhZGlvXCJdKTpub3QoW3R5cGU9XCJjaGVja2JveFwiXSk6YWN0aXZlLFxuICAgICAgICB0ZXh0YXJlYTphY3RpdmUsXG4gICAgICAgIHNlbGVjdDphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1hY3RpdmUtMDE7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246Zm9jdXMsXG4gICAgICAgIGlucHV0Om5vdChbdHlwZT1cInJhZGlvXCJdKTpub3QoW3R5cGU9XCJjaGVja2JveFwiXSk6Zm9jdXMsXG4gICAgICAgIHRleHRhcmVhOmZvY3VzLFxuICAgICAgICBzZWxlY3Q6Zm9jdXMge1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAkZm9jdXM7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRpY29uLXByaW1hcnk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yIDAuMTVzLFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjE1cyxcbiAgICAgICAgICAgIGJveC1zaGFkb3cgMC4xNXM7XG5cbiAgICAgICAgICAmOmNoZWNrZWQ6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaWNvbi1wcmltYXJ5O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRmb2N1cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFtyb2xlPVwic3dpdGNoXCJdOmNoZWNrZWQgfiBzcGFuOmxhc3Qtb2YtdHlwZSxcbiAgICAgICAgaW5wdXRbcm9sZT1cInN3aXRjaFwiXTpub3QoOmNoZWNrZWQpIH4gc3BhbjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItMDE7XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbDpoYXMoaW5wdXRbcm9sZT1cInN3aXRjaFwiXSkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRbcm9sZT1cInN3aXRjaFwiXTpmb2N1cyB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRmb2N1cyAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRbcm9sZT1cInN3aXRjaFwiXTpjaGVja2VkIH4gc3BhbjpsYXN0LW9mLXR5cGUsXG4gICAgICAgIGlucHV0W3JvbGU9XCJzd2l0Y2hcIl06bm90KDpjaGVja2VkKSB+IHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICRib3JkZXItc3Ryb25nLTAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4gICAgICAgIGlucHV0W3R5cGU9XCJ0aW1lXCJdIHtcbiAgICAgICAgICBjb2xvci1zY2hlbWU6IGxpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgOnJvb3Rbc3Rvcnlib29rLWNhcmJvbi10aGVtZT1cImc5MFwiXSBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbiAgICAgICAgOnJvb3Rbc3Rvcnlib29rLWNhcmJvbi10aGVtZT1cImcxMDBcIl0gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4gICAgICAgIDpyb290W3N0b3J5Ym9vay1jYXJib24tdGhlbWU9XCJnOTBcIl0gaW5wdXRbdHlwZT1cInRpbWVcIl0sXG4gICAgICAgIDpyb290W3N0b3J5Ym9vay1jYXJib24tdGhlbWU9XCJnMTAwXCJdIGlucHV0W3R5cGU9XCJ0aW1lXCJdIHtcbiAgICAgICAgICBjb2xvci1zY2hlbWU6IGRhcms7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgPiB0clt0aXRsZX49XCJpdGVtc1wiXSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRsYXllci0wMSAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgJGJvcmRlci1zdWJ0bGUtMDE7XG5cbiAgICAgICAgJjpoYXMoYnV0dG9uOmZvY3VzKSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICRmb2N1cyAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICRsYXllci0wMSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgPiB0ZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICR0ZXh0LXByaW1hcnk7XG5cbiAgICAgICAgICA+IHNwYW4gPiBzdmcge1xuICAgICAgICAgICAgY29sb3I6ICRpY29uLXByaW1hcnk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPiBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZG9jYmxvY2stc291cmNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItc3VidGxlLTAxO1xuICB9XG5cbiAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgSU5URVJBQ1RJT05TIFBBTkVMXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIGRpdjpoYXMobmF2W2FyaWEtbGFiZWw9XCJDb21wb25lbnQgdGVzdHMgdG9vbGJhclwiXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNkcy1iYWNrZ3JvdW5kKTtcblxuICAgIG5hdlthcmlhLWxhYmVsPVwiQ29tcG9uZW50IHRlc3RzIHRvb2xiYXJcIl0ge1xuICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1zdWJ0bGUtMDE7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYmFja2dyb3VuZDogJGxheWVyLTAxO1xuXG4gICAgICA+IGRpdiA+IHAge1xuICAgICAgICBjb2xvcjogJHRleHQtcHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgZGl2W2FyaWEtbGFiZWw9XCJTdGF0dXMgb2YgdGhlIHRlc3QgcnVuXCJdIHtcbiAgICAgICAgbWluLWJsb2NrLXNpemU6ICRzcGFjaW5nLTA4O1xuICAgICAgICBtaW4taW5saW5lLXNpemU6ICRzcGFjaW5nLTEwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHNwYW46ZW1wdHkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMDg7XG4gICAgICAgIG1pbi1pbmxpbmUtc2l6ZTogJHNwYWNpbmctMDg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogJHRleHQtcHJpbWFyeTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgICAgICY6bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgfVxuICAgICAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWFjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAmOm5vdChbZGlzYWJsZWRdKTpmb2N1cyB7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICRmb2N1cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpdlthcmlhLWxhYmVsPVwiSW50ZXJhY3Rpb25zIGxpc3RcIl0ge1xuICAgICAgZGl2Omhhcyg+IGJ1dHRvblthcmlhLWxhYmVsPVwiSW50ZXJhY3Rpb24gc3RlcFwiXSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtYWN0aXZlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIEExMVkgUEFORUxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgLy8gVGFic1xuICBkaXY6aGFzKD4gZGl2ID4gW2RhdGEtdHlwZT1cInZpb2xhdGlvbnNcIl0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItMDE7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItYmxvY2stZW5kOiAxcHggc29saWQgJGJvcmRlci1zdWJ0bGUtMDE7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBkaXZbcm9sZT1cInRhYmxpc3RcIl0gKyBkaXYge1xuICAgICAgZ2FwOiAwO1xuICAgIH1cbiAgICBidXR0b246bm90KFtyb2xlPVwidGFiXCJdKSB7XG4gICAgICBtaW4tYmxvY2stc2l6ZTogJHNwYWNpbmctMDg7XG4gICAgICBtaW4taW5saW5lLXNpemU6ICRzcGFjaW5nLTA4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICR0ZXh0LXByaW1hcnkgIWltcG9ydGFudDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWFjdGl2ZTtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAkZm9jdXMgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9uW3JvbGU9XCJ0YWJcIl0ge1xuICAgICAgbWluLWJsb2NrLXNpemU6ICRzcGFjaW5nLTA4O1xuICAgICAgbWluLWlubGluZS1zaXplOiAkc3BhY2luZy0wODtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAkdGV4dC1wcmltYXJ5O1xuICAgICAgZm9udC13ZWlnaHQ6IHVuc2V0O1xuXG4gICAgICAvLyBjb3VudCB0YWdcbiAgICAgID4gZGl2ID4gZGl2IHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgY29sb3I6ICR0ZXh0LW9uLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tdG9rZW5zLiRidXR0b24tc2Vjb25kYXJ5O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtaG92ZXI7XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtYWN0aXZlO1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkICRmb2N1cztcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4IDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdW5zZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uW2RhdGEtYWN0aXZlPVwidHJ1ZVwiXSB7XG4gICAgICBib3JkZXItd2lkdGg6IDJweCAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkYm9yZGVyLWludGVyYWN0aXZlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgID4gZGl2ID4gZGl2IHtcbiAgICAgICAgY29sb3I6ICR0ZXh0LW9uLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWludGVyYWN0aXZlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRpdjpoYXMoPiBkaXYgPiBbZGF0YS10eXBlPVwidmlvbGF0aW9uc1wiXSkgKyBkaXYge1xuICAgIFtkYXRhLWFjdGl2ZV0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLTAxO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRpbnRlcmFjdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLWhvdmVyLTAxO1xuICAgICAgICArIGRpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLWhvdmVyLTAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA+IDpudGgtbGFzdC1jaGlsZCgyKSB7XG4gICAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XG4gICAgICB9XG4gICAgICA+IGJ1dHRvbiB7XG4gICAgICAgIG1pbi1ibG9jay1zaXplOiAkc3BhY2luZy0wNjtcbiAgICAgICAgbWluLWlubGluZS1zaXplOiAkc3BhY2luZy0wNjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAkdGV4dC1wcmltYXJ5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtYWN0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICRmb2N1cyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFtkYXRhLWFjdGl2ZV0gKyBbaWQqPVwiZGV0YWlsc1wiXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF5ZXItMDE7XG4gICAgICBwID4gYSA+IHNwYW4ge1xuICAgICAgICBjb2xvcjogJGxpbmstcHJpbWFyeTtcbiAgICAgICAgPiBzdmcge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG5cbiAgICAgICAgICA+IHBhdGgge1xuICAgICAgICAgICAgZmlsbDogJGxpbmstcHJpbWFyeTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgICA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgW3JvbGU9XCJ0YWJsaXN0XCJdLFxuICAgICAgW3JvbGU9XCJ0YWJwYW5lbFwiXSB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci0wMjtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggJGJvcmRlci1zdWJ0bGUtMDE7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci1ob3Zlci0wMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxheWVyLWFjdGl2ZS0wMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggJGZvY3VzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2RhdGEtcmFkaXgtc2Nyb2xsLWFyZWEtY29udGVudF0ge1xuICAgICAgPiBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItc3VidGxlLTAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29kZSBnZW5lcmF0ZWQgYnkgQGNhcmJvbi90aGVtZXMuIERPIE5PVCBFRElULlxuLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJy4uL2NvbmZpZyc7XG5AdXNlICcuLi90aGVtZSc7XG5cbi8vLyBJbnRlcm5hbCBoZWxwZXIgZm9yIGdlbmVyYXRpbmcgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG5AZnVuY3Rpb24gX2dldCgkdG9rZW4pIHtcbiAgQGlmIGNvbmZpZy4kdXNlLWZhbGxiYWNrLXZhbHVlID09IGZhbHNlIHtcbiAgICBAcmV0dXJuIHZhcigtLSN7Y29uZmlnLiRwcmVmaXh9LSN7JHRva2VufSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skdG9rZW59LCAje3RoZW1lLmdldCgkdG9rZW4pfSk7XG4gIH1cbn1cblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmRgIHRva2VuXG4kYmFja2dyb3VuZDogX2dldCgnYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1hY3RpdmVgIHRva2VuXG4kYmFja2dyb3VuZC1hY3RpdmU6IF9nZXQoJ2JhY2tncm91bmQtYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLXNlbGVjdGVkYCB0b2tlblxuJGJhY2tncm91bmQtc2VsZWN0ZWQ6IF9nZXQoJ2JhY2tncm91bmQtc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtc2VsZWN0ZWQtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWJyYW5kYCB0b2tlblxuJGJhY2tncm91bmQtYnJhbmQ6IF9nZXQoJ2JhY2tncm91bmQtYnJhbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtaW52ZXJzZWAgdG9rZW5cbiRiYWNrZ3JvdW5kLWludmVyc2U6IF9nZXQoJ2JhY2tncm91bmQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtaW52ZXJzZS1ob3ZlcjogX2dldCgnYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wMWAgdG9rZW5cbiRsYXllci0wMTogX2dldCgnbGF5ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wMWAgdG9rZW5cbiRsYXllci1hY3RpdmUtMDE6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wMWAgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAxOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1ob3Zlci0wMTogX2dldCgnbGF5ZXItaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAxYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAxOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDFgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDE6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wMmAgdG9rZW5cbiRsYXllci0wMjogX2dldCgnbGF5ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wMmAgdG9rZW5cbiRsYXllci1hY3RpdmUtMDI6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wMmAgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAyOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1ob3Zlci0wMjogX2dldCgnbGF5ZXItaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAyYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAyOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDJgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDI6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci0wM2AgdG9rZW5cbiRsYXllci0wMzogX2dldCgnbGF5ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjdGl2ZS0wM2AgdG9rZW5cbiRsYXllci1hY3RpdmUtMDM6IF9nZXQoJ2xheWVyLWFjdGl2ZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYmFja2dyb3VuZC0wM2AgdG9rZW5cbiRsYXllci1iYWNrZ3JvdW5kLTAzOiBfZ2V0KCdsYXllci1iYWNrZ3JvdW5kLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1ob3Zlci0wMzogX2dldCgnbGF5ZXItaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLTAzYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLTAzOiBfZ2V0KCdsYXllci1zZWxlY3RlZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDNgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDM6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1pbnZlcnNlYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWludmVyc2U6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWRpc2FibGVkYCB0b2tlblxuJGxheWVyLXNlbGVjdGVkLWRpc2FibGVkOiBfZ2V0KCdsYXllci1zZWxlY3RlZC1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMTogX2dldCgnbGF5ZXItYWNjZW50LTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDE6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDE6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMjogX2dldCgnbGF5ZXItYWNjZW50LTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDI6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDI6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC0wMzogX2dldCgnbGF5ZXItYWNjZW50LTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtYWN0aXZlLTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC1hY3RpdmUtMDM6IF9nZXQoJ2xheWVyLWFjY2VudC1hY3RpdmUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1hY2NlbnQtaG92ZXItMDM6IF9nZXQoJ2xheWVyLWFjY2VudC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDFgIHRva2VuXG4kZmllbGQtMDE6IF9nZXQoJ2ZpZWxkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wMWAgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMTogX2dldCgnZmllbGQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAyYCB0b2tlblxuJGZpZWxkLTAyOiBfZ2V0KCdmaWVsZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDJgIHRva2VuXG4kZmllbGQtaG92ZXItMDI6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wM2AgdG9rZW5cbiRmaWVsZC0wMzogX2dldCgnZmllbGQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAzYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAzOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaW50ZXJhY3RpdmVgIHRva2VuXG4kaW50ZXJhY3RpdmU6IF9nZXQoJ2ludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAwYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDA6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDAnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDFgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMTogX2dldCgnYm9yZGVyLXN1YnRsZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMWAgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAyYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDI6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDJgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMjogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wM2AgdG9rZW5cbiRib3JkZXItc3VidGxlLTAzOiBfZ2V0KCdib3JkZXItc3VidGxlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAzYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDM6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDFgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMTogX2dldCgnYm9yZGVyLXN0cm9uZy0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wMmAgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAyOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAzYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDM6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAxYCB0b2tlblxuJGJvcmRlci10aWxlLTAxOiBfZ2V0KCdib3JkZXItdGlsZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDJgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDI6IF9nZXQoJ2JvcmRlci10aWxlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wM2AgdG9rZW5cbiRib3JkZXItdGlsZS0wMzogX2dldCgnYm9yZGVyLXRpbGUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1pbnZlcnNlYCB0b2tlblxuJGJvcmRlci1pbnZlcnNlOiBfZ2V0KCdib3JkZXItaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWludGVyYWN0aXZlYCB0b2tlblxuJGJvcmRlci1pbnRlcmFjdGl2ZTogX2dldCgnYm9yZGVyLWludGVyYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItZGlzYWJsZWRgIHRva2VuXG4kYm9yZGVyLWRpc2FibGVkOiBfZ2V0KCdib3JkZXItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtcHJpbWFyeWAgdG9rZW5cbiR0ZXh0LXByaW1hcnk6IF9nZXQoJ3RleHQtcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1zZWNvbmRhcnlgIHRva2VuXG4kdGV4dC1zZWNvbmRhcnk6IF9nZXQoJ3RleHQtc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXBsYWNlaG9sZGVyYCB0b2tlblxuJHRleHQtcGxhY2Vob2xkZXI6IF9nZXQoJ3RleHQtcGxhY2Vob2xkZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtaGVscGVyYCB0b2tlblxuJHRleHQtaGVscGVyOiBfZ2V0KCd0ZXh0LWhlbHBlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1lcnJvcmAgdG9rZW5cbiR0ZXh0LWVycm9yOiBfZ2V0KCd0ZXh0LWVycm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWludmVyc2VgIHRva2VuXG4kdGV4dC1pbnZlcnNlOiBfZ2V0KCd0ZXh0LWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtb24tY29sb3JgIHRva2VuXG4kdGV4dC1vbi1jb2xvcjogX2dldCgndGV4dC1vbi1jb2xvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1vbi1jb2xvci1kaXNhYmxlZGAgdG9rZW5cbiR0ZXh0LW9uLWNvbG9yLWRpc2FibGVkOiBfZ2V0KCd0ZXh0LW9uLWNvbG9yLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWRpc2FibGVkYCB0b2tlblxuJHRleHQtZGlzYWJsZWQ6IF9nZXQoJ3RleHQtZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstcHJpbWFyeWAgdG9rZW5cbiRsaW5rLXByaW1hcnk6IF9nZXQoJ2xpbmstcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1wcmltYXJ5LWhvdmVyYCB0b2tlblxuJGxpbmstcHJpbWFyeS1ob3ZlcjogX2dldCgnbGluay1wcmltYXJ5LWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXNlY29uZGFyeWAgdG9rZW5cbiRsaW5rLXNlY29uZGFyeTogX2dldCgnbGluay1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS12aXNpdGVkYCB0b2tlblxuJGxpbmstaW52ZXJzZS12aXNpdGVkOiBfZ2V0KCdsaW5rLWludmVyc2UtdmlzaXRlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay12aXNpdGVkYCB0b2tlblxuJGxpbmstdmlzaXRlZDogX2dldCgnbGluay12aXNpdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2VgIHRva2VuXG4kbGluay1pbnZlcnNlOiBfZ2V0KCdsaW5rLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZS1hY3RpdmVgIHRva2VuXG4kbGluay1pbnZlcnNlLWFjdGl2ZTogX2dldCgnbGluay1pbnZlcnNlLWFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLWhvdmVyYCB0b2tlblxuJGxpbmstaW52ZXJzZS1ob3ZlcjogX2dldCgnbGluay1pbnZlcnNlLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLXByaW1hcnlgIHRva2VuXG4kaWNvbi1wcmltYXJ5OiBfZ2V0KCdpY29uLXByaW1hcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tc2Vjb25kYXJ5YCB0b2tlblxuJGljb24tc2Vjb25kYXJ5OiBfZ2V0KCdpY29uLXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1pbnZlcnNlYCB0b2tlblxuJGljb24taW52ZXJzZTogX2dldCgnaWNvbi1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLW9uLWNvbG9yYCB0b2tlblxuJGljb24tb24tY29sb3I6IF9nZXQoJ2ljb24tb24tY29sb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tb24tY29sb3ItZGlzYWJsZWRgIHRva2VuXG4kaWNvbi1vbi1jb2xvci1kaXNhYmxlZDogX2dldCgnaWNvbi1vbi1jb2xvci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1kaXNhYmxlZGAgdG9rZW5cbiRpY29uLWRpc2FibGVkOiBfZ2V0KCdpY29uLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWludGVyYWN0aXZlYCB0b2tlblxuJGljb24taW50ZXJhY3RpdmU6IF9nZXQoJ2ljb24taW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtZXJyb3JgIHRva2VuXG4kc3VwcG9ydC1lcnJvcjogX2dldCgnc3VwcG9ydC1lcnJvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1zdWNjZXNzYCB0b2tlblxuJHN1cHBvcnQtc3VjY2VzczogX2dldCgnc3VwcG9ydC1zdWNjZXNzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXdhcm5pbmdgIHRva2VuXG4kc3VwcG9ydC13YXJuaW5nOiBfZ2V0KCdzdXBwb3J0LXdhcm5pbmcnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtaW5mb2AgdG9rZW5cbiRzdXBwb3J0LWluZm86IF9nZXQoJ3N1cHBvcnQtaW5mbycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1lcnJvci1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtZXJyb3ItaW52ZXJzZTogX2dldCgnc3VwcG9ydC1lcnJvci1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZTogX2dldCgnc3VwcG9ydC1zdWNjZXNzLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtd2FybmluZy1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtd2FybmluZy1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LXdhcm5pbmctaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1pbmZvLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1pbmZvLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtaW5mby1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tbWFqb3JgIHRva2VuXG4kc3VwcG9ydC1jYXV0aW9uLW1ham9yOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tbWFqb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi1taW5vcmAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tbWlub3I6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi1taW5vcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLXVuZGVmaW5lZGAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkOiBfZ2V0KCdzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWJhY2tncm91bmRgIHRva2VuXG4kYWktcG9wb3Zlci1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1wb3BvdmVyLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxYCB0b2tlblxuJGFpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxOiBfZ2V0KCdhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDJgIHRva2VuXG4kYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDI6IF9nZXQoJ2FpLXBvcG92ZXItc2hhZG93LW91dGVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1pbm5lci1zaGFkb3dgIHRva2VuXG4kYWktaW5uZXItc2hhZG93OiBfZ2V0KCdhaS1pbm5lci1zaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtc3RhcnQtc21gIHRva2VuXG4kYWktYXVyYS1zdGFydC1zbTogX2dldCgnYWktYXVyYS1zdGFydC1zbScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1zdGFydGAgdG9rZW5cbiRhaS1hdXJhLXN0YXJ0OiBfZ2V0KCdhaS1hdXJhLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWVuZGAgdG9rZW5cbiRhaS1hdXJhLWVuZDogX2dldCgnYWktYXVyYS1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLWJhY2tncm91bmQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1zdGFydGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLXN0YXJ0OiBfZ2V0KCdhaS1hdXJhLWhvdmVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLWVuZGAgdG9rZW5cbiRhaS1hdXJhLWhvdmVyLWVuZDogX2dldCgnYWktYXVyYS1ob3Zlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1zdHJvbmdgIHRva2VuXG4kYWktYm9yZGVyLXN0cm9uZzogX2dldCgnYWktYm9yZGVyLXN0cm9uZycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLXN0YXJ0YCB0b2tlblxuJGFpLWJvcmRlci1zdGFydDogX2dldCgnYWktYm9yZGVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItZW5kYCB0b2tlblxuJGFpLWJvcmRlci1lbmQ6IF9nZXQoJ2FpLWJvcmRlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWRyb3Atc2hhZG93YCB0b2tlblxuJGFpLWRyb3Atc2hhZG93OiBfZ2V0KCdhaS1kcm9wLXNoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktc2tlbGV0b24tYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1za2VsZXRvbi1iYWNrZ3JvdW5kOiBfZ2V0KCdhaS1za2VsZXRvbi1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmRgIHRva2VuXG4kYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kOiBfZ2V0KFxuICAnYWktc2tlbGV0b24tZWxlbWVudC1iYWNrZ3JvdW5kJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLW92ZXJsYXlgIHRva2VuXG4kYWktb3ZlcmxheTogX2dldCgnYWktb3ZlcmxheScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1jZW50ZXJgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1jZW50ZXI6IF9nZXQoJ2FpLXBvcG92ZXItY2FyZXQtY2VudGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbWAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbTogX2dldCgnYWktcG9wb3Zlci1jYXJldC1ib3R0b20nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmRgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZDogX2dldChcbiAgJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9uczogX2dldChcbiAgJ2FpLXBvcG92ZXItY2FyZXQtYm90dG9tLWJhY2tncm91bmQtYWN0aW9ucydcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1iYWNrZ3JvdW5kYCB0b2tlblxuJGNoYXQtcHJvbXB0LWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJvcmRlci1zdGFydGAgdG9rZW5cbiRjaGF0LXByb21wdC1ib3JkZXItc3RhcnQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJvcmRlci1zdGFydCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYm9yZGVyLWVuZGAgdG9rZW5cbiRjaGF0LXByb21wdC1ib3JkZXItZW5kOiBfZ2V0KCdjaGF0LXByb21wdC1ib3JkZXItZW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS11c2VyYCB0b2tlblxuJGNoYXQtYnViYmxlLXVzZXI6IF9nZXQoJ2NoYXQtYnViYmxlLXVzZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLWFnZW50YCB0b2tlblxuJGNoYXQtYnViYmxlLWFnZW50OiBfZ2V0KCdjaGF0LWJ1YmJsZS1hZ2VudCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtYm9yZGVyYCB0b2tlblxuJGNoYXQtYnViYmxlLWJvcmRlcjogX2dldCgnY2hhdC1idWJibGUtYm9yZGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci1ib3RgIHRva2VuXG4kY2hhdC1hdmF0YXItYm90OiBfZ2V0KCdjaGF0LWF2YXRhci1ib3QnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLWFnZW50YCB0b2tlblxuJGNoYXQtYXZhdGFyLWFnZW50OiBfZ2V0KCdjaGF0LWF2YXRhci1hZ2VudCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItdXNlcmAgdG9rZW5cbiRjaGF0LWF2YXRhci11c2VyOiBfZ2V0KCdjaGF0LWF2YXRhci11c2VyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXNoZWxsLWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1zaGVsbC1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LXNoZWxsLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtaGVhZGVyLWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1oZWFkZXItYmFja2dyb3VuZDogX2dldCgnY2hhdC1oZWFkZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b25gIHRva2VuXG4kY2hhdC1idXR0b246IF9nZXQoJ2NoYXQtYnV0dG9uJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1ob3ZlcmAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1ob3ZlcjogX2dldCgnY2hhdC1idXR0b24taG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXRleHQtaG92ZXJgIHRva2VuXG4kY2hhdC1idXR0b24tdGV4dC1ob3ZlcjogX2dldCgnY2hhdC1idXR0b24tdGV4dC1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tYWN0aXZlYCB0b2tlblxuJGNoYXQtYnV0dG9uLWFjdGl2ZTogX2dldCgnY2hhdC1idXR0b24tYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1zZWxlY3RlZGAgdG9rZW5cbiRjaGF0LWJ1dHRvbi1zZWxlY3RlZDogX2dldCgnY2hhdC1idXR0b24tc2VsZWN0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXRleHQtc2VsZWN0ZWRgIHRva2VuXG4kY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZDogX2dldCgnY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaGlnaGxpZ2h0YCB0b2tlblxuJGhpZ2hsaWdodDogX2dldCgnaGlnaGxpZ2h0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBvdmVybGF5YCB0b2tlblxuJG92ZXJsYXk6IF9nZXQoJ292ZXJsYXknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRvZ2dsZS1vZmZgIHRva2VuXG4kdG9nZ2xlLW9mZjogX2dldCgndG9nZ2xlLW9mZicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2hhZG93YCB0b2tlblxuJHNoYWRvdzogX2dldCgnc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1c2AgdG9rZW5cbiRmb2N1czogX2dldCgnZm9jdXMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzLWluc2V0YCB0b2tlblxuJGZvY3VzLWluc2V0OiBfZ2V0KCdmb2N1cy1pbnNldCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXMtaW52ZXJzZWAgdG9rZW5cbiRmb2N1cy1pbnZlcnNlOiBfZ2V0KCdmb2N1cy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBza2VsZXRvbi1iYWNrZ3JvdW5kYCB0b2tlblxuJHNrZWxldG9uLWJhY2tncm91bmQ6IF9nZXQoJ3NrZWxldG9uLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNrZWxldG9uLWVsZW1lbnRgIHRva2VuXG4kc2tlbGV0b24tZWxlbWVudDogX2dldCgnc2tlbGV0b24tZWxlbWVudCcpICFkZWZhdWx0O1xuIiwiLy8gQ29kZSBnZW5lcmF0ZWQgYnkgQGNhcmJvbi9sYXlvdXQuIERPIE5PVCBFRElULlxuLy9cbi8vIENvcHlyaWdodCBJQk0gQ29ycC4gMjAxOCwgMjAyM1xuLy9cbi8vIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZS0yLjAgbGljZW5zZSBmb3VuZCBpbiB0aGVcbi8vIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbi8vXG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDE6IDAuMTI1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTAyOiAwLjI1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTAzOiAwLjVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDQ6IDAuNzVyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vLyBAdHlwZSBOdW1iZXJcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBncm91cCBAY2FyYm9uL2xheW91dFxuJHNwYWNpbmctMDY6IDEuNXJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wNzogMnJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE51bWJlclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZy0wODogMi41cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTA5OiAzcmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEwOiA0cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTExOiA1cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEyOiA2cmVtICFkZWZhdWx0O1xuXG4vLy8gQHR5cGUgTnVtYmVyXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAZ3JvdXAgQGNhcmJvbi9sYXlvdXRcbiRzcGFjaW5nLTEzOiAxMHJlbSAhZGVmYXVsdDtcblxuLy8vIEB0eXBlIE1hcFxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQGdyb3VwIEBjYXJib24vbGF5b3V0XG4kc3BhY2luZzogKFxuICBzcGFjaW5nLTAxOiAkc3BhY2luZy0wMSxcbiAgc3BhY2luZy0wMjogJHNwYWNpbmctMDIsXG4gIHNwYWNpbmctMDM6ICRzcGFjaW5nLTAzLFxuICBzcGFjaW5nLTA0OiAkc3BhY2luZy0wNCxcbiAgc3BhY2luZy0wNTogJHNwYWNpbmctMDUsXG4gIHNwYWNpbmctMDY6ICRzcGFjaW5nLTA2LFxuICBzcGFjaW5nLTA3OiAkc3BhY2luZy0wNyxcbiAgc3BhY2luZy0wODogJHNwYWNpbmctMDgsXG4gIHNwYWNpbmctMDk6ICRzcGFjaW5nLTA5LFxuICBzcGFjaW5nLTEwOiAkc3BhY2luZy0xMCxcbiAgc3BhY2luZy0xMTogJHNwYWNpbmctMTEsXG4gIHNwYWNpbmctMTI6ICRzcGFjaW5nLTEyLFxuICBzcGFjaW5nLTEzOiAkc3BhY2luZy0xMyxcbik7XG4iLCIvL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vLi4vY29uZmlnJztcbkB1c2UgJy4uLy4uL3RoZW1lcyc7XG5AdXNlICcuLi8uLi91dGlsaXRpZXMvY29tcG9uZW50LXRva2Vucyc7XG5AdXNlICdAY2FyYm9uL3RoZW1lcy9zY3NzL2NvbXBvbmVudC10b2tlbnMnIGFzIGJ1dHRvbjtcblxuJGJ1dHRvbi1zZXBhcmF0b3I6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZXBhcmF0b3IsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZXBhcmF0b3IsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1wcmltYXJ5OiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1zZWNvbmRhcnk6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnksIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10ZXJ0aWFyeTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItcHJpbWFyeTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1wcmltYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXByaW1hcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5OiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItYWN0aXZlOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItYWN0aXZlLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmU6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItaG92ZXI6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItaG92ZXIsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1wcmltYXJ5LWhvdmVyOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXI6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlcjogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3Zlciwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlciwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlciwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kaXNhYmxlZDogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRpc2FibGVkLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGlzYWJsZWQsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10b2tlbnM6IChcbiAgYnV0dG9uLXNlcGFyYXRvcjogJGJ1dHRvbi1zZXBhcmF0b3IsXG4gIGJ1dHRvbi1wcmltYXJ5OiAkYnV0dG9uLXByaW1hcnksXG4gIGJ1dHRvbi1zZWNvbmRhcnk6ICRidXR0b24tc2Vjb25kYXJ5LFxuICBidXR0b24tdGVydGlhcnk6ICRidXR0b24tdGVydGlhcnksXG4gIGJ1dHRvbi1kYW5nZXItcHJpbWFyeTogJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSxcbiAgYnV0dG9uLWRhbmdlci1zZWNvbmRhcnk6ICRidXR0b24tZGFuZ2VyLXNlY29uZGFyeSxcbiAgYnV0dG9uLWRhbmdlci1hY3RpdmU6ICRidXR0b24tZGFuZ2VyLWFjdGl2ZSxcbiAgYnV0dG9uLXByaW1hcnktYWN0aXZlOiAkYnV0dG9uLXByaW1hcnktYWN0aXZlLFxuICBidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZTogJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLFxuICBidXR0b24tdGVydGlhcnktYWN0aXZlOiAkYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLWRhbmdlci1ob3ZlcjogJGJ1dHRvbi1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1wcmltYXJ5LWhvdmVyOiAkYnV0dG9uLXByaW1hcnktaG92ZXIsXG4gIGJ1dHRvbi1zZWNvbmRhcnktaG92ZXI6ICRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLFxuICBidXR0b24tdGVydGlhcnktaG92ZXI6ICRidXR0b24tdGVydGlhcnktaG92ZXIsXG4gIGJ1dHRvbi1kaXNhYmxlZDogJGJ1dHRvbi1kaXNhYmxlZCxcbik7XG5cbiRidXR0b24tc2VwYXJhdG9yOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2VwYXJhdG9yLFxuICAnYnV0dG9uLXNlcGFyYXRvcidcbik7XG5cbiRidXR0b24tcHJpbWFyeTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKCRidXR0b24tcHJpbWFyeSwgJ2J1dHRvbi1wcmltYXJ5Jyk7XG5cbiRidXR0b24tc2Vjb25kYXJ5OiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2Vjb25kYXJ5LFxuICAnYnV0dG9uLXNlY29uZGFyeSdcbik7XG5cbiRidXR0b24tdGVydGlhcnk6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcigkYnV0dG9uLXRlcnRpYXJ5LCAnYnV0dG9uLXRlcnRpYXJ5Jyk7XG5cbiRidXR0b24tZGFuZ2VyLXByaW1hcnk6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSxcbiAgJ2J1dHRvbi1kYW5nZXItcHJpbWFyeSdcbik7XG5cbiRidXR0b24tZGFuZ2VyLXNlY29uZGFyeTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksXG4gICdidXR0b24tZGFuZ2VyLXNlY29uZGFyeSdcbik7XG5cbiRidXR0b24tZGFuZ2VyLWFjdGl2ZTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLWRhbmdlci1hY3RpdmUsXG4gICdidXR0b24tZGFuZ2VyLWFjdGl2ZSdcbik7XG5cbiRidXR0b24tcHJpbWFyeS1hY3RpdmU6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSxcbiAgJ2J1dHRvbi1wcmltYXJ5LWFjdGl2ZSdcbik7XG5cbiRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsXG4gICdidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZSdcbik7XG5cbiRidXR0b24tdGVydGlhcnktYWN0aXZlOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tdGVydGlhcnktYWN0aXZlLFxuICAnYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSdcbik7XG5cbiRidXR0b24tZGFuZ2VyLWhvdmVyOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tZGFuZ2VyLWhvdmVyLFxuICAnYnV0dG9uLWRhbmdlci1ob3Zlcidcbik7XG5cbiRidXR0b24tcHJpbWFyeS1ob3ZlcjogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXByaW1hcnktaG92ZXIsXG4gICdidXR0b24tcHJpbWFyeS1ob3Zlcidcbik7XG5cbiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLFxuICAnYnV0dG9uLXNlY29uZGFyeS1ob3Zlcidcbik7XG5cbiRidXR0b24tdGVydGlhcnktaG92ZXI6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlcixcbiAgJ2J1dHRvbi10ZXJ0aWFyeS1ob3Zlcidcbik7XG5cbiRidXR0b24tZGlzYWJsZWQ6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcigkYnV0dG9uLWRpc2FibGVkLCAnYnV0dG9uLWRpc2FibGVkJyk7XG4iXX0= */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(U));var Y=`* {
  scrollbar-color: var(--cds-border-inverse, #161616) var(--cds-border-subtle-01, #c6c6c6) !important;
}

body {
  color: var(--cds-text-secondary, #525252) !important;
}

::selection {
  background-color: rgba(15, 98, 254, 0.3764705882) !important;
}

::-moz-selection {
  background-color: rgba(15, 98, 254, 0.3764705882) !important;
}

#root > div > div {
  border-color: var(--cds-border-subtle-01, #c6c6c6);
}
#root > div > div > div:first-child::after {
  background-color: var(--cds-border-interactive, #0f62fe);
}

#storybook-preview-wrapper a[title="Skip to sidebar"]:focus {
  background-color: var(--cds-button-secondary, #393939);
  border-radius: 0px;
  color: var(--cds-text-on-color, #ffffff);
  box-shadow: var(--cds-focus, #0f62fe) 0px 0px 0px 2px inset;
}

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
  background: var(--cds-layer-hover-01, #e8e8e8);
}
[data-popper-interactive] button:active {
  background: var(--cds-layer-active-01, #c6c6c6);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL25hbmRhbmRldmFkdWxhL1NvdXJjZS9zdG9yeWJvb2stdGhlbWUtY2FyYm9uL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbImNvbW1vbi5zY3NzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXJib24vdGhlbWVzL3Njc3MvZ2VuZXJhdGVkL190b2tlbnMuc2NzcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FyYm9uL3N0eWxlcy9zY3NzL2NvbXBvbmVudHMvYnV0dG9uL190b2tlbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFOzs7QUFHRjtFQUNFOzs7QUFHRjtFQUNFOzs7QUFHRjtFQUNFOzs7QUFHRjtFQUNFLGNDeUlpQjs7QUR2SWpCO0VBQ0Usa0JDNktpQjs7O0FEektyQjtFQUNFLGtCRW9WaUI7RUZuVmpCO0VBQ0EsT0M4TGM7RUQ3TGQ7OztBQUdGO0VBQ0U7O0FBR0E7RUFDRSxrQkNPTztFRE5QO0VBQ0E7O0FBRUY7RUFDRSxNQzhKVzs7QUQ1SmI7RUFDRTs7QUFDQTtFQUNFOztBQUVGO0VBQ0UsWUNHVzs7QUREYjtFQUNFLFlDTlkiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy90aGVtZVwiIGFzICo7XG5AdXNlIFwiQGNhcmJvbi9zdHlsZXMvc2Nzcy9jb21wb25lbnRzL2J1dHRvbi90b2tlbnNcIiBhcyBidXR0b24tdG9rZW5zO1xuXG4qIHtcbiAgc2Nyb2xsYmFyLWNvbG9yOiAkYm9yZGVyLWludmVyc2UgJGJvcmRlci1zdWJ0bGUtMDEgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnkgIWltcG9ydGFudDtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY2MmZlNjAgIWltcG9ydGFudDtcbn1cblxuOjotbW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjYyZmU2MCAhaW1wb3J0YW50O1xufVxuXG4jcm9vdCA+IGRpdiA+IGRpdiB7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlci1zdWJ0bGUtMDE7XG5cbiAgPiBkaXY6Zmlyc3QtY2hpbGQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLWludGVyYWN0aXZlO1xuICB9XG59XG5cbiNzdG9yeWJvb2stcHJldmlldy13cmFwcGVyIGFbdGl0bGU9XCJTa2lwIHRvIHNpZGViYXJcIl06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tdG9rZW5zLiRidXR0b24tc2Vjb25kYXJ5O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGNvbG9yOiAkdGV4dC1vbi1jb2xvcjtcbiAgYm94LXNoYWRvdzogJGZvY3VzIDBweCAwcHggMHB4IDJweCBpbnNldDtcbn1cblxuW2RhdGEtcG9wcGVyLWludGVyYWN0aXZlXSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgXG5cbiAgPiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXllci0wMTtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeSAhaW1wb3J0YW50O1xuICB9XG4gIHN2ZyA+IHBhdGgge1xuICAgIGZpbGw6ICR0ZXh0LXByaW1hcnk7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICR0ZXh0LXByaW1hcnkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbGF5ZXItaG92ZXItMDE7XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICRsYXllci1hY3RpdmUtMDE7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb2RlIGdlbmVyYXRlZCBieSBAY2FyYm9uL3RoZW1lcy4gRE8gTk9UIEVESVQuXG4vL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vY29uZmlnJztcbkB1c2UgJy4uL3RoZW1lJztcblxuLy8vIEludGVybmFsIGhlbHBlciBmb3IgZ2VuZXJhdGluZyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbkBmdW5jdGlvbiBfZ2V0KCR0b2tlbikge1xuICBAaWYgY29uZmlnLiR1c2UtZmFsbGJhY2stdmFsdWUgPT0gZmFsc2Uge1xuICAgIEByZXR1cm4gdmFyKC0tI3tjb25maWcuJHByZWZpeH0tI3skdG9rZW59KTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiB2YXIoLS0je2NvbmZpZy4kcHJlZml4fS0jeyR0b2tlbn0sICN7dGhlbWUuZ2V0KCR0b2tlbil9KTtcbiAgfVxufVxuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZGAgdG9rZW5cbiRiYWNrZ3JvdW5kOiBfZ2V0KCdiYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWFjdGl2ZWAgdG9rZW5cbiRiYWNrZ3JvdW5kLWFjdGl2ZTogX2dldCgnYmFja2dyb3VuZC1hY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtc2VsZWN0ZWRgIHRva2VuXG4kYmFja2dyb3VuZC1zZWxlY3RlZDogX2dldCgnYmFja2dyb3VuZC1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1zZWxlY3RlZC1ob3ZlcmAgdG9rZW5cbiRiYWNrZ3JvdW5kLXNlbGVjdGVkLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLXNlbGVjdGVkLWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWhvdmVyYCB0b2tlblxuJGJhY2tncm91bmQtaG92ZXI6IF9nZXQoJ2JhY2tncm91bmQtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJhY2tncm91bmQtYnJhbmRgIHRva2VuXG4kYmFja2dyb3VuZC1icmFuZDogX2dldCgnYmFja2dyb3VuZC1icmFuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYmFja2dyb3VuZC1pbnZlcnNlYCB0b2tlblxuJGJhY2tncm91bmQtaW52ZXJzZTogX2dldCgnYmFja2dyb3VuZC1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBiYWNrZ3JvdW5kLWludmVyc2UtaG92ZXJgIHRva2VuXG4kYmFja2dyb3VuZC1pbnZlcnNlLWhvdmVyOiBfZ2V0KCdiYWNrZ3JvdW5kLWludmVyc2UtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAxYCB0b2tlblxuJGxheWVyLTAxOiBfZ2V0KCdsYXllci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAxYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMTogX2dldCgnbGF5ZXItYWN0aXZlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAxYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDE6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAxYCB0b2tlblxuJGxheWVyLWhvdmVyLTAxOiBfZ2V0KCdsYXllci1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDFgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDE6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wMWAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMTogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAyYCB0b2tlblxuJGxheWVyLTAyOiBfZ2V0KCdsYXllci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAyYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMjogX2dldCgnbGF5ZXItYWN0aXZlLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAyYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDI6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAyYCB0b2tlblxuJGxheWVyLWhvdmVyLTAyOiBfZ2V0KCdsYXllci1ob3Zlci0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDJgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDI6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wMmAgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMjogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLTAzYCB0b2tlblxuJGxheWVyLTAzOiBfZ2V0KCdsYXllci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWN0aXZlLTAzYCB0b2tlblxuJGxheWVyLWFjdGl2ZS0wMzogX2dldCgnbGF5ZXItYWN0aXZlLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1iYWNrZ3JvdW5kLTAzYCB0b2tlblxuJGxheWVyLWJhY2tncm91bmQtMDM6IF9nZXQoJ2xheWVyLWJhY2tncm91bmQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWhvdmVyLTAzYCB0b2tlblxuJGxheWVyLWhvdmVyLTAzOiBfZ2V0KCdsYXllci1ob3Zlci0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtMDNgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtMDM6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1zZWxlY3RlZC1ob3Zlci0wM2AgdG9rZW5cbiRsYXllci1zZWxlY3RlZC1ob3Zlci0wMzogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaG92ZXItMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLXNlbGVjdGVkLWludmVyc2VgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZTogX2dldCgnbGF5ZXItc2VsZWN0ZWQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItc2VsZWN0ZWQtZGlzYWJsZWRgIHRva2VuXG4kbGF5ZXItc2VsZWN0ZWQtZGlzYWJsZWQ6IF9nZXQoJ2xheWVyLXNlbGVjdGVkLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDFgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAxOiBfZ2V0KCdsYXllci1hY2NlbnQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDFgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMTogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAxYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMTogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDJgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAyOiBfZ2V0KCdsYXllci1hY2NlbnQtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDJgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMjogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAyYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMjogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsYXllci1hY2NlbnQtMDNgIHRva2VuXG4kbGF5ZXItYWNjZW50LTAzOiBfZ2V0KCdsYXllci1hY2NlbnQtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxheWVyLWFjY2VudC1hY3RpdmUtMDNgIHRva2VuXG4kbGF5ZXItYWNjZW50LWFjdGl2ZS0wMzogX2dldCgnbGF5ZXItYWNjZW50LWFjdGl2ZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGF5ZXItYWNjZW50LWhvdmVyLTAzYCB0b2tlblxuJGxheWVyLWFjY2VudC1ob3Zlci0wMzogX2dldCgnbGF5ZXItYWNjZW50LWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC0wMWAgdG9rZW5cbiRmaWVsZC0wMTogX2dldCgnZmllbGQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLWhvdmVyLTAxYCB0b2tlblxuJGZpZWxkLWhvdmVyLTAxOiBfZ2V0KCdmaWVsZC1ob3Zlci0wMScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtMDJgIHRva2VuXG4kZmllbGQtMDI6IF9nZXQoJ2ZpZWxkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmaWVsZC1ob3Zlci0wMmAgdG9rZW5cbiRmaWVsZC1ob3Zlci0wMjogX2dldCgnZmllbGQtaG92ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZpZWxkLTAzYCB0b2tlblxuJGZpZWxkLTAzOiBfZ2V0KCdmaWVsZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZmllbGQtaG92ZXItMDNgIHRva2VuXG4kZmllbGQtaG92ZXItMDM6IF9nZXQoJ2ZpZWxkLWhvdmVyLTAzJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpbnRlcmFjdGl2ZWAgdG9rZW5cbiRpbnRlcmFjdGl2ZTogX2dldCgnaW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDBgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMDogX2dldCgnYm9yZGVyLXN1YnRsZS0wMCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS0wMWAgdG9rZW5cbiRib3JkZXItc3VidGxlLTAxOiBfZ2V0KCdib3JkZXItc3VidGxlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLXNlbGVjdGVkLTAxYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDE6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDEnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtMDJgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS0wMjogX2dldCgnYm9yZGVyLXN1YnRsZS0wMicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMmAgdG9rZW5cbiRib3JkZXItc3VidGxlLXNlbGVjdGVkLTAyOiBfZ2V0KCdib3JkZXItc3VidGxlLXNlbGVjdGVkLTAyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3VidGxlLTAzYCB0b2tlblxuJGJvcmRlci1zdWJ0bGUtMDM6IF9nZXQoJ2JvcmRlci1zdWJ0bGUtMDMnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdWJ0bGUtc2VsZWN0ZWQtMDNgIHRva2VuXG4kYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMzogX2dldCgnYm9yZGVyLXN1YnRsZS1zZWxlY3RlZC0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXN0cm9uZy0wMWAgdG9rZW5cbiRib3JkZXItc3Ryb25nLTAxOiBfZ2V0KCdib3JkZXItc3Ryb25nLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItc3Ryb25nLTAyYCB0b2tlblxuJGJvcmRlci1zdHJvbmctMDI6IF9nZXQoJ2JvcmRlci1zdHJvbmctMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1zdHJvbmctMDNgIHRva2VuXG4kYm9yZGVyLXN0cm9uZy0wMzogX2dldCgnYm9yZGVyLXN0cm9uZy0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLXRpbGUtMDFgIHRva2VuXG4kYm9yZGVyLXRpbGUtMDE6IF9nZXQoJ2JvcmRlci10aWxlLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItdGlsZS0wMmAgdG9rZW5cbiRib3JkZXItdGlsZS0wMjogX2dldCgnYm9yZGVyLXRpbGUtMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci10aWxlLTAzYCB0b2tlblxuJGJvcmRlci10aWxlLTAzOiBfZ2V0KCdib3JkZXItdGlsZS0wMycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYm9yZGVyLWludmVyc2VgIHRva2VuXG4kYm9yZGVyLWludmVyc2U6IF9nZXQoJ2JvcmRlci1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBib3JkZXItaW50ZXJhY3RpdmVgIHRva2VuXG4kYm9yZGVyLWludGVyYWN0aXZlOiBfZ2V0KCdib3JkZXItaW50ZXJhY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGJvcmRlci1kaXNhYmxlZGAgdG9rZW5cbiRib3JkZXItZGlzYWJsZWQ6IF9nZXQoJ2JvcmRlci1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1wcmltYXJ5YCB0b2tlblxuJHRleHQtcHJpbWFyeTogX2dldCgndGV4dC1wcmltYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LXNlY29uZGFyeWAgdG9rZW5cbiR0ZXh0LXNlY29uZGFyeTogX2dldCgndGV4dC1zZWNvbmRhcnknKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtcGxhY2Vob2xkZXJgIHRva2VuXG4kdGV4dC1wbGFjZWhvbGRlcjogX2dldCgndGV4dC1wbGFjZWhvbGRlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1oZWxwZXJgIHRva2VuXG4kdGV4dC1oZWxwZXI6IF9nZXQoJ3RleHQtaGVscGVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LWVycm9yYCB0b2tlblxuJHRleHQtZXJyb3I6IF9nZXQoJ3RleHQtZXJyb3InKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtaW52ZXJzZWAgdG9rZW5cbiR0ZXh0LWludmVyc2U6IF9nZXQoJ3RleHQtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdGV4dC1vbi1jb2xvcmAgdG9rZW5cbiR0ZXh0LW9uLWNvbG9yOiBfZ2V0KCd0ZXh0LW9uLWNvbG9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGB0ZXh0LW9uLWNvbG9yLWRpc2FibGVkYCB0b2tlblxuJHRleHQtb24tY29sb3ItZGlzYWJsZWQ6IF9nZXQoJ3RleHQtb24tY29sb3ItZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHRleHQtZGlzYWJsZWRgIHRva2VuXG4kdGV4dC1kaXNhYmxlZDogX2dldCgndGV4dC1kaXNhYmxlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1wcmltYXJ5YCB0b2tlblxuJGxpbmstcHJpbWFyeTogX2dldCgnbGluay1wcmltYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXByaW1hcnktaG92ZXJgIHRva2VuXG4kbGluay1wcmltYXJ5LWhvdmVyOiBfZ2V0KCdsaW5rLXByaW1hcnktaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstc2Vjb25kYXJ5YCB0b2tlblxuJGxpbmstc2Vjb25kYXJ5OiBfZ2V0KCdsaW5rLXNlY29uZGFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLXZpc2l0ZWRgIHRva2VuXG4kbGluay1pbnZlcnNlLXZpc2l0ZWQ6IF9nZXQoJ2xpbmstaW52ZXJzZS12aXNpdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLXZpc2l0ZWRgIHRva2VuXG4kbGluay12aXNpdGVkOiBfZ2V0KCdsaW5rLXZpc2l0ZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGxpbmstaW52ZXJzZWAgdG9rZW5cbiRsaW5rLWludmVyc2U6IF9nZXQoJ2xpbmstaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgbGluay1pbnZlcnNlLWFjdGl2ZWAgdG9rZW5cbiRsaW5rLWludmVyc2UtYWN0aXZlOiBfZ2V0KCdsaW5rLWludmVyc2UtYWN0aXZlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBsaW5rLWludmVyc2UtaG92ZXJgIHRva2VuXG4kbGluay1pbnZlcnNlLWhvdmVyOiBfZ2V0KCdsaW5rLWludmVyc2UtaG92ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tcHJpbWFyeWAgdG9rZW5cbiRpY29uLXByaW1hcnk6IF9nZXQoJ2ljb24tcHJpbWFyeScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1zZWNvbmRhcnlgIHRva2VuXG4kaWNvbi1zZWNvbmRhcnk6IF9nZXQoJ2ljb24tc2Vjb25kYXJ5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWludmVyc2VgIHRva2VuXG4kaWNvbi1pbnZlcnNlOiBfZ2V0KCdpY29uLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24tb24tY29sb3JgIHRva2VuXG4kaWNvbi1vbi1jb2xvcjogX2dldCgnaWNvbi1vbi1jb2xvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgaWNvbi1vbi1jb2xvci1kaXNhYmxlZGAgdG9rZW5cbiRpY29uLW9uLWNvbG9yLWRpc2FibGVkOiBfZ2V0KCdpY29uLW9uLWNvbG9yLWRpc2FibGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBpY29uLWRpc2FibGVkYCB0b2tlblxuJGljb24tZGlzYWJsZWQ6IF9nZXQoJ2ljb24tZGlzYWJsZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGljb24taW50ZXJhY3RpdmVgIHRva2VuXG4kaWNvbi1pbnRlcmFjdGl2ZTogX2dldCgnaWNvbi1pbnRlcmFjdGl2ZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1lcnJvcmAgdG9rZW5cbiRzdXBwb3J0LWVycm9yOiBfZ2V0KCdzdXBwb3J0LWVycm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LXN1Y2Nlc3NgIHRva2VuXG4kc3VwcG9ydC1zdWNjZXNzOiBfZ2V0KCdzdXBwb3J0LXN1Y2Nlc3MnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtd2FybmluZ2AgdG9rZW5cbiRzdXBwb3J0LXdhcm5pbmc6IF9nZXQoJ3N1cHBvcnQtd2FybmluZycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1pbmZvYCB0b2tlblxuJHN1cHBvcnQtaW5mbzogX2dldCgnc3VwcG9ydC1pbmZvJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWVycm9yLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC1lcnJvci1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LWVycm9yLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtc3VjY2Vzcy1pbnZlcnNlYCB0b2tlblxuJHN1cHBvcnQtc3VjY2Vzcy1pbnZlcnNlOiBfZ2V0KCdzdXBwb3J0LXN1Y2Nlc3MtaW52ZXJzZScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC13YXJuaW5nLWludmVyc2VgIHRva2VuXG4kc3VwcG9ydC13YXJuaW5nLWludmVyc2U6IF9nZXQoJ3N1cHBvcnQtd2FybmluZy1pbnZlcnNlJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWluZm8taW52ZXJzZWAgdG9rZW5cbiRzdXBwb3J0LWluZm8taW52ZXJzZTogX2dldCgnc3VwcG9ydC1pbmZvLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHN1cHBvcnQtY2F1dGlvbi1tYWpvcmAgdG9rZW5cbiRzdXBwb3J0LWNhdXRpb24tbWFqb3I6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi1tYWpvcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc3VwcG9ydC1jYXV0aW9uLW1pbm9yYCB0b2tlblxuJHN1cHBvcnQtY2F1dGlvbi1taW5vcjogX2dldCgnc3VwcG9ydC1jYXV0aW9uLW1pbm9yJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzdXBwb3J0LWNhdXRpb24tdW5kZWZpbmVkYCB0b2tlblxuJHN1cHBvcnQtY2F1dGlvbi11bmRlZmluZWQ6IF9nZXQoJ3N1cHBvcnQtY2F1dGlvbi11bmRlZmluZWQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1wb3BvdmVyLWJhY2tncm91bmQ6IF9nZXQoJ2FpLXBvcG92ZXItYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDFgIHRva2VuXG4kYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDE6IF9nZXQoJ2FpLXBvcG92ZXItc2hhZG93LW91dGVyLTAxJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMmAgdG9rZW5cbiRhaS1wb3BvdmVyLXNoYWRvdy1vdXRlci0wMjogX2dldCgnYWktcG9wb3Zlci1zaGFkb3ctb3V0ZXItMDInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWlubmVyLXNoYWRvd2AgdG9rZW5cbiRhaS1pbm5lci1zaGFkb3c6IF9nZXQoJ2FpLWlubmVyLXNoYWRvdycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1zdGFydC1zbWAgdG9rZW5cbiRhaS1hdXJhLXN0YXJ0LXNtOiBfZ2V0KCdhaS1hdXJhLXN0YXJ0LXNtJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLXN0YXJ0YCB0b2tlblxuJGFpLWF1cmEtc3RhcnQ6IF9nZXQoJ2FpLWF1cmEtc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtZW5kYCB0b2tlblxuJGFpLWF1cmEtZW5kOiBfZ2V0KCdhaS1hdXJhLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYXVyYS1ob3Zlci1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLWF1cmEtaG92ZXItYmFja2dyb3VuZDogX2dldCgnYWktYXVyYS1ob3Zlci1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1hdXJhLWhvdmVyLXN0YXJ0YCB0b2tlblxuJGFpLWF1cmEtaG92ZXItc3RhcnQ6IF9nZXQoJ2FpLWF1cmEtaG92ZXItc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWF1cmEtaG92ZXItZW5kYCB0b2tlblxuJGFpLWF1cmEtaG92ZXItZW5kOiBfZ2V0KCdhaS1hdXJhLWhvdmVyLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktYm9yZGVyLXN0cm9uZ2AgdG9rZW5cbiRhaS1ib3JkZXItc3Ryb25nOiBfZ2V0KCdhaS1ib3JkZXItc3Ryb25nJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1ib3JkZXItc3RhcnRgIHRva2VuXG4kYWktYm9yZGVyLXN0YXJ0OiBfZ2V0KCdhaS1ib3JkZXItc3RhcnQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLWJvcmRlci1lbmRgIHRva2VuXG4kYWktYm9yZGVyLWVuZDogX2dldCgnYWktYm9yZGVyLWVuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktZHJvcC1zaGFkb3dgIHRva2VuXG4kYWktZHJvcC1zaGFkb3c6IF9nZXQoJ2FpLWRyb3Atc2hhZG93JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1za2VsZXRvbi1iYWNrZ3JvdW5kYCB0b2tlblxuJGFpLXNrZWxldG9uLWJhY2tncm91bmQ6IF9nZXQoJ2FpLXNrZWxldG9uLWJhY2tncm91bmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXNrZWxldG9uLWVsZW1lbnQtYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmQ6IF9nZXQoXG4gICdhaS1za2VsZXRvbi1lbGVtZW50LWJhY2tncm91bmQnXG4pICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktb3ZlcmxheWAgdG9rZW5cbiRhaS1vdmVybGF5OiBfZ2V0KCdhaS1vdmVybGF5JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWNlbnRlcmAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWNlbnRlcjogX2dldCgnYWktcG9wb3Zlci1jYXJldC1jZW50ZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGFpLXBvcG92ZXItY2FyZXQtYm90dG9tYCB0b2tlblxuJGFpLXBvcG92ZXItY2FyZXQtYm90dG9tOiBfZ2V0KCdhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZGAgdG9rZW5cbiRhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kOiBfZ2V0KFxuICAnYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZCdcbikgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBhaS1wb3BvdmVyLWNhcmV0LWJvdHRvbS1iYWNrZ3JvdW5kLWFjdGlvbnNgIHRva2VuXG4kYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zOiBfZ2V0KFxuICAnYWktcG9wb3Zlci1jYXJldC1ib3R0b20tYmFja2dyb3VuZC1hY3Rpb25zJ1xuKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtcHJvbXB0LWJhY2tncm91bmRgIHRva2VuXG4kY2hhdC1wcm9tcHQtYmFja2dyb3VuZDogX2dldCgnY2hhdC1wcm9tcHQtYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1wcm9tcHQtYm9yZGVyLXN0YXJ0YCB0b2tlblxuJGNoYXQtcHJvbXB0LWJvcmRlci1zdGFydDogX2dldCgnY2hhdC1wcm9tcHQtYm9yZGVyLXN0YXJ0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LXByb21wdC1ib3JkZXItZW5kYCB0b2tlblxuJGNoYXQtcHJvbXB0LWJvcmRlci1lbmQ6IF9nZXQoJ2NoYXQtcHJvbXB0LWJvcmRlci1lbmQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnViYmxlLXVzZXJgIHRva2VuXG4kY2hhdC1idWJibGUtdXNlcjogX2dldCgnY2hhdC1idWJibGUtdXNlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idWJibGUtYWdlbnRgIHRva2VuXG4kY2hhdC1idWJibGUtYWdlbnQ6IF9nZXQoJ2NoYXQtYnViYmxlLWFnZW50JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1YmJsZS1ib3JkZXJgIHRva2VuXG4kY2hhdC1idWJibGUtYm9yZGVyOiBfZ2V0KCdjaGF0LWJ1YmJsZS1ib3JkZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYXZhdGFyLWJvdGAgdG9rZW5cbiRjaGF0LWF2YXRhci1ib3Q6IF9nZXQoJ2NoYXQtYXZhdGFyLWJvdCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1hdmF0YXItYWdlbnRgIHRva2VuXG4kY2hhdC1hdmF0YXItYWdlbnQ6IF9nZXQoJ2NoYXQtYXZhdGFyLWFnZW50JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWF2YXRhci11c2VyYCB0b2tlblxuJGNoYXQtYXZhdGFyLXVzZXI6IF9nZXQoJ2NoYXQtYXZhdGFyLXVzZXInKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtc2hlbGwtYmFja2dyb3VuZGAgdG9rZW5cbiRjaGF0LXNoZWxsLWJhY2tncm91bmQ6IF9nZXQoJ2NoYXQtc2hlbGwtYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1oZWFkZXItYmFja2dyb3VuZGAgdG9rZW5cbiRjaGF0LWhlYWRlci1iYWNrZ3JvdW5kOiBfZ2V0KCdjaGF0LWhlYWRlci1iYWNrZ3JvdW5kJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbmAgdG9rZW5cbiRjaGF0LWJ1dHRvbjogX2dldCgnY2hhdC1idXR0b24nKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLWhvdmVyYCB0b2tlblxuJGNoYXQtYnV0dG9uLWhvdmVyOiBfZ2V0KCdjaGF0LWJ1dHRvbi1ob3ZlcicpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tdGV4dC1ob3ZlcmAgdG9rZW5cbiRjaGF0LWJ1dHRvbi10ZXh0LWhvdmVyOiBfZ2V0KCdjaGF0LWJ1dHRvbi10ZXh0LWhvdmVyJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBjaGF0LWJ1dHRvbi1hY3RpdmVgIHRva2VuXG4kY2hhdC1idXR0b24tYWN0aXZlOiBfZ2V0KCdjaGF0LWJ1dHRvbi1hY3RpdmUnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGNoYXQtYnV0dG9uLXNlbGVjdGVkYCB0b2tlblxuJGNoYXQtYnV0dG9uLXNlbGVjdGVkOiBfZ2V0KCdjaGF0LWJ1dHRvbi1zZWxlY3RlZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgY2hhdC1idXR0b24tdGV4dC1zZWxlY3RlZGAgdG9rZW5cbiRjaGF0LWJ1dHRvbi10ZXh0LXNlbGVjdGVkOiBfZ2V0KCdjaGF0LWJ1dHRvbi10ZXh0LXNlbGVjdGVkJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBoaWdobGlnaHRgIHRva2VuXG4kaGlnaGxpZ2h0OiBfZ2V0KCdoaWdobGlnaHQnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYG92ZXJsYXlgIHRva2VuXG4kb3ZlcmxheTogX2dldCgnb3ZlcmxheScpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgdG9nZ2xlLW9mZmAgdG9rZW5cbiR0b2dnbGUtb2ZmOiBfZ2V0KCd0b2dnbGUtb2ZmJykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBzaGFkb3dgIHRva2VuXG4kc2hhZG93OiBfZ2V0KCdzaGFkb3cnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYGZvY3VzYCB0b2tlblxuJGZvY3VzOiBfZ2V0KCdmb2N1cycpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgZm9jdXMtaW5zZXRgIHRva2VuXG4kZm9jdXMtaW5zZXQ6IF9nZXQoJ2ZvY3VzLWluc2V0JykgIWRlZmF1bHQ7XG5cbi8vLyBUaGUgQ1NTIEN1c3RvbSBQcm9wZXJ0eSBmb3IgdGhlIGBmb2N1cy1pbnZlcnNlYCB0b2tlblxuJGZvY3VzLWludmVyc2U6IF9nZXQoJ2ZvY3VzLWludmVyc2UnKSAhZGVmYXVsdDtcblxuLy8vIFRoZSBDU1MgQ3VzdG9tIFByb3BlcnR5IGZvciB0aGUgYHNrZWxldG9uLWJhY2tncm91bmRgIHRva2VuXG4kc2tlbGV0b24tYmFja2dyb3VuZDogX2dldCgnc2tlbGV0b24tYmFja2dyb3VuZCcpICFkZWZhdWx0O1xuXG4vLy8gVGhlIENTUyBDdXN0b20gUHJvcGVydHkgZm9yIHRoZSBgc2tlbGV0b24tZWxlbWVudGAgdG9rZW5cbiRza2VsZXRvbi1lbGVtZW50OiBfZ2V0KCdza2VsZXRvbi1lbGVtZW50JykgIWRlZmF1bHQ7XG4iLCIvL1xuLy8gQ29weXJpZ2h0IElCTSBDb3JwLiAyMDE4LCAyMDIzXG4vL1xuLy8gVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlLTIuMCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuLy8gTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuLy9cblxuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnLi4vLi4vY29uZmlnJztcbkB1c2UgJy4uLy4uL3RoZW1lcyc7XG5AdXNlICcuLi8uLi91dGlsaXRpZXMvY29tcG9uZW50LXRva2Vucyc7XG5AdXNlICdAY2FyYm9uL3RoZW1lcy9zY3NzL2NvbXBvbmVudC10b2tlbnMnIGFzIGJ1dHRvbjtcblxuJGJ1dHRvbi1zZXBhcmF0b3I6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZXBhcmF0b3IsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2VwYXJhdG9yLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZXBhcmF0b3IsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1wcmltYXJ5OiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1zZWNvbmRhcnk6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnksIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10ZXJ0aWFyeTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItcHJpbWFyeTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1wcmltYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLXByaW1hcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5OiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItc2Vjb25kYXJ5LCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItYWN0aXZlOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItYWN0aXZlLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRhbmdlci1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZTogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tcHJpbWFyeS1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmU6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktYWN0aXZlLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1hY3RpdmUsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kYW5nZXItaG92ZXI6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItaG92ZXIsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGFuZ2VyLWhvdmVyLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kYW5nZXItaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1wcmltYXJ5LWhvdmVyOiAoXG4gIGZhbGxiYWNrOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIHdoaXRlLXRoZW1lKSxcbiAgdmFsdWVzOiAoXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kd2hpdGUsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1wcmltYXJ5LWhvdmVyLCBnLTEwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGc5MCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIGctOTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzEwMCxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXByaW1hcnktaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXI6IChcbiAgZmFsbGJhY2s6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gIHZhbHVlczogKFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJHdoaXRlLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsIGctMTApLFxuICAgICksXG4gICAgKFxuICAgICAgdGhlbWU6IHRoZW1lcy4kZzkwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLCBnLTkwKSxcbiAgICApLFxuICAgIChcbiAgICAgIHRoZW1lOiB0aGVtZXMuJGcxMDAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1zZWNvbmRhcnktaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlcjogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3Zlciwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLXRlcnRpYXJ5LWhvdmVyLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlciwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlciwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tdGVydGlhcnktaG92ZXIsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi1kaXNhYmxlZDogKFxuICBmYWxsYmFjazogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgd2hpdGUtdGhlbWUpLFxuICB2YWx1ZXM6IChcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiR3aGl0ZSxcbiAgICAgIHZhbHVlOiBtYXAuZ2V0KGJ1dHRvbi4kYnV0dG9uLWRpc2FibGVkLCB3aGl0ZS10aGVtZSksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgZy0xMCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnOTAsXG4gICAgICB2YWx1ZTogbWFwLmdldChidXR0b24uJGJ1dHRvbi1kaXNhYmxlZCwgZy05MCksXG4gICAgKSxcbiAgICAoXG4gICAgICB0aGVtZTogdGhlbWVzLiRnMTAwLFxuICAgICAgdmFsdWU6IG1hcC5nZXQoYnV0dG9uLiRidXR0b24tZGlzYWJsZWQsIGctMTAwKSxcbiAgICApLFxuICApLFxuKSAhZGVmYXVsdDtcblxuJGJ1dHRvbi10b2tlbnM6IChcbiAgYnV0dG9uLXNlcGFyYXRvcjogJGJ1dHRvbi1zZXBhcmF0b3IsXG4gIGJ1dHRvbi1wcmltYXJ5OiAkYnV0dG9uLXByaW1hcnksXG4gIGJ1dHRvbi1zZWNvbmRhcnk6ICRidXR0b24tc2Vjb25kYXJ5LFxuICBidXR0b24tdGVydGlhcnk6ICRidXR0b24tdGVydGlhcnksXG4gIGJ1dHRvbi1kYW5nZXItcHJpbWFyeTogJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSxcbiAgYnV0dG9uLWRhbmdlci1zZWNvbmRhcnk6ICRidXR0b24tZGFuZ2VyLXNlY29uZGFyeSxcbiAgYnV0dG9uLWRhbmdlci1hY3RpdmU6ICRidXR0b24tZGFuZ2VyLWFjdGl2ZSxcbiAgYnV0dG9uLXByaW1hcnktYWN0aXZlOiAkYnV0dG9uLXByaW1hcnktYWN0aXZlLFxuICBidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZTogJGJ1dHRvbi1zZWNvbmRhcnktYWN0aXZlLFxuICBidXR0b24tdGVydGlhcnktYWN0aXZlOiAkYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLWRhbmdlci1ob3ZlcjogJGJ1dHRvbi1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1wcmltYXJ5LWhvdmVyOiAkYnV0dG9uLXByaW1hcnktaG92ZXIsXG4gIGJ1dHRvbi1zZWNvbmRhcnktaG92ZXI6ICRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLFxuICBidXR0b24tdGVydGlhcnktaG92ZXI6ICRidXR0b24tdGVydGlhcnktaG92ZXIsXG4gIGJ1dHRvbi1kaXNhYmxlZDogJGJ1dHRvbi1kaXNhYmxlZCxcbik7XG5cbiRidXR0b24tc2VwYXJhdG9yOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2VwYXJhdG9yLFxuICAnYnV0dG9uLXNlcGFyYXRvcidcbik7XG5cbiRidXR0b24tcHJpbWFyeTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKCRidXR0b24tcHJpbWFyeSwgJ2J1dHRvbi1wcmltYXJ5Jyk7XG5cbiRidXR0b24tc2Vjb25kYXJ5OiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2Vjb25kYXJ5LFxuICAnYnV0dG9uLXNlY29uZGFyeSdcbik7XG5cbiRidXR0b24tdGVydGlhcnk6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcigkYnV0dG9uLXRlcnRpYXJ5LCAnYnV0dG9uLXRlcnRpYXJ5Jyk7XG5cbiRidXR0b24tZGFuZ2VyLXByaW1hcnk6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1kYW5nZXItcHJpbWFyeSxcbiAgJ2J1dHRvbi1kYW5nZXItcHJpbWFyeSdcbik7XG5cbiRidXR0b24tZGFuZ2VyLXNlY29uZGFyeTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLWRhbmdlci1zZWNvbmRhcnksXG4gICdidXR0b24tZGFuZ2VyLXNlY29uZGFyeSdcbik7XG5cbiRidXR0b24tZGFuZ2VyLWFjdGl2ZTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLWRhbmdlci1hY3RpdmUsXG4gICdidXR0b24tZGFuZ2VyLWFjdGl2ZSdcbik7XG5cbiRidXR0b24tcHJpbWFyeS1hY3RpdmU6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi1wcmltYXJ5LWFjdGl2ZSxcbiAgJ2J1dHRvbi1wcmltYXJ5LWFjdGl2ZSdcbik7XG5cbiRidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZTogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXNlY29uZGFyeS1hY3RpdmUsXG4gICdidXR0b24tc2Vjb25kYXJ5LWFjdGl2ZSdcbik7XG5cbiRidXR0b24tdGVydGlhcnktYWN0aXZlOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tdGVydGlhcnktYWN0aXZlLFxuICAnYnV0dG9uLXRlcnRpYXJ5LWFjdGl2ZSdcbik7XG5cbiRidXR0b24tZGFuZ2VyLWhvdmVyOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tZGFuZ2VyLWhvdmVyLFxuICAnYnV0dG9uLWRhbmdlci1ob3Zlcidcbik7XG5cbiRidXR0b24tcHJpbWFyeS1ob3ZlcjogY29tcG9uZW50LXRva2Vucy5nZXQtdmFyKFxuICAkYnV0dG9uLXByaW1hcnktaG92ZXIsXG4gICdidXR0b24tcHJpbWFyeS1ob3Zlcidcbik7XG5cbiRidXR0b24tc2Vjb25kYXJ5LWhvdmVyOiBjb21wb25lbnQtdG9rZW5zLmdldC12YXIoXG4gICRidXR0b24tc2Vjb25kYXJ5LWhvdmVyLFxuICAnYnV0dG9uLXNlY29uZGFyeS1ob3Zlcidcbik7XG5cbiRidXR0b24tdGVydGlhcnktaG92ZXI6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcihcbiAgJGJ1dHRvbi10ZXJ0aWFyeS1ob3ZlcixcbiAgJ2J1dHRvbi10ZXJ0aWFyeS1ob3Zlcidcbik7XG5cbiRidXR0b24tZGlzYWJsZWQ6IGNvbXBvbmVudC10b2tlbnMuZ2V0LXZhcigkYnV0dG9uLWRpc2FibGVkLCAnYnV0dG9uLWRpc2FibGVkJyk7XG4iXX0= */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Y));var A=()=>d.createElement("svg",{width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},d.createElement("circle",{cx:"10",cy:"12",r:"2"}),d.createElement("circle",{cx:"16",cy:"9",r:"2"}),d.createElement("circle",{cx:"22",cy:"12",r:"2"}),d.createElement("circle",{cx:"23",cy:"18",r:"2"}),d.createElement("circle",{cx:"19",cy:"23",r:"2"}),d.createElement("path",{d:"M16.54,2A14,14,0,0,0,2,16a4.82,4.82,0,0,0,6.09,4.65l1.12-.31A3,3,0,0,1,13,23.24V27a3,3,0,0,0,3,3A14,14,0,0,0,30,15.46,14.05,14.05,0,0,0,16.54,2Zm8.11,22.31A11.93,11.93,0,0,1,16,28a1,1,0,0,1-1-1V23.24a5,5,0,0,0-5-5,5.07,5.07,0,0,0-1.33.18l-1.12.31A2.82,2.82,0,0,1,4,16,12,12,0,0,1,16.47,4,12.18,12.18,0,0,1,28,15.53,11.89,11.89,0,0,1,24.65,24.32Z"})),x=()=>{let c=localStorage.getItem("storybook-carbon-theme");return c||(c=window.matchMedia?.("(prefers-color-scheme: dark)")?.matches?"g90":"white",localStorage.setItem("storybook-carbon-theme",c)),c},y=c=>{let G=["white","g10"].includes(c);document.documentElement.setAttribute("storybook-carbon-theme",c),localStorage.setItem("storybook-carbon-theme",c),window.selectedTheme=c,l.setConfig({theme:G?a.light:a.dark})},L=x();y(L);var J=Z(function({api:G}){let[W,I]=n(),r=W[h],R=s(i=>{I({[h]:i}),y(i)},[I]);return d.createElement(F,{placement:"top",trigger:"click",closeOnOutsideClick:!0,tooltip:({onHide:i})=>d.createElement(X,{links:m.map(g=>({id:g.value,title:g.title,active:r===g.value,onClick:()=>{R(g.value),i()}}))})},d.createElement(o,{title:"Theme"},d.createElement(A,null)))});l.register(V,c=>{l.add(C,{type:B.TOOL,title:"My addon",render:()=>d.createElement(J,{api:c})})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
