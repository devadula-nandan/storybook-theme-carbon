import{j as t}from"./jsx-runtime-Dt95Dmtr.js";import{r as a}from"./iframe-D9xWNIN8.js";const T=["--cds-ai-aura-end","--cds-ai-aura-hover-background","--cds-ai-aura-hover-end","--cds-ai-aura-hover-start","--cds-ai-aura-start","--cds-ai-aura-start-sm","--cds-ai-border-end","--cds-ai-border-start","--cds-ai-border-strong","--cds-ai-drop-shadow","--cds-ai-inner-shadow","--cds-ai-overlay","--cds-ai-popover-background","--cds-ai-popover-caret-bottom","--cds-ai-popover-caret-bottom-background","--cds-ai-popover-caret-bottom-background-actions","--cds-ai-popover-caret-center","--cds-ai-popover-shadow-outer-01","--cds-ai-popover-shadow-outer-02","--cds-ai-skeleton-background","--cds-ai-skeleton-element-background","--cds-background","--cds-background-active","--cds-background-brand","--cds-background-hover","--cds-background-inverse","--cds-background-inverse-hover","--cds-background-selected","--cds-background-selected-hover","--cds-border-disabled","--cds-border-interactive","--cds-border-inverse","--cds-border-strong-01","--cds-border-strong-02","--cds-border-strong-03","--cds-border-subtle-00","--cds-border-subtle-01","--cds-border-subtle-02","--cds-border-subtle-03","--cds-border-subtle-selected-01","--cds-border-subtle-selected-02","--cds-border-subtle-selected-03","--cds-border-tile-01","--cds-border-tile-02","--cds-border-tile-03","--cds-chat-avatar-agent","--cds-chat-avatar-bot","--cds-chat-avatar-user","--cds-chat-bubble-agent","--cds-chat-bubble-border","--cds-chat-bubble-user","--cds-chat-button","--cds-chat-button-active","--cds-chat-button-hover","--cds-chat-button-selected","--cds-chat-button-text-hover","--cds-chat-button-text-selected","--cds-chat-header-background","--cds-chat-prompt-background","--cds-chat-prompt-border-end","--cds-chat-prompt-border-start","--cds-chat-shell-background","--cds-field-01","--cds-field-02","--cds-field-03","--cds-field-hover-01","--cds-field-hover-02","--cds-field-hover-03","--cds-focus","--cds-focus-inset","--cds-focus-inverse","--cds-highlight","--cds-icon-disabled","--cds-icon-interactive","--cds-icon-inverse","--cds-icon-on-color","--cds-icon-on-color-disabled","--cds-icon-primary","--cds-icon-secondary","--cds-interactive","--cds-layer-01","--cds-layer-02","--cds-layer-03","--cds-layer-accent-01","--cds-layer-accent-02","--cds-layer-accent-03","--cds-layer-accent-active-01","--cds-layer-accent-active-02","--cds-layer-accent-active-03","--cds-layer-accent-hover-01","--cds-layer-accent-hover-02","--cds-layer-accent-hover-03","--cds-layer-active-01","--cds-layer-active-02","--cds-layer-active-03","--cds-layer-background-01","--cds-layer-background-02","--cds-layer-background-03","--cds-layer-hover-01","--cds-layer-hover-02","--cds-layer-hover-03","--cds-layer-selected-01","--cds-layer-selected-02","--cds-layer-selected-03","--cds-layer-selected-disabled","--cds-layer-selected-hover-01","--cds-layer-selected-hover-02","--cds-layer-selected-hover-03","--cds-layer-selected-inverse","--cds-link-inverse","--cds-link-inverse-active","--cds-link-inverse-hover","--cds-link-inverse-visited","--cds-link-primary","--cds-link-primary-hover","--cds-link-secondary","--cds-link-visited","--cds-overlay","--cds-shadow","--cds-skeleton-background","--cds-skeleton-element","--cds-support-caution-major","--cds-support-caution-minor","--cds-support-caution-undefined","--cds-support-error","--cds-support-error-inverse","--cds-support-info","--cds-support-info-inverse","--cds-support-success","--cds-support-success-inverse","--cds-support-warning","--cds-support-warning-inverse","--cds-text-disabled","--cds-text-error","--cds-text-helper","--cds-text-inverse","--cds-text-on-color","--cds-text-on-color-disabled","--cds-text-placeholder","--cds-text-primary","--cds-text-secondary","--cds-toggle-off"],{expect:S,within:R}=__STORYBOOK_MODULE_TEST__,I=()=>{const[o,c]=a.useState(()=>parseInt(localStorage.getItem("render-count-story")||"0"));return a.useEffect(()=>{const s=o+1;c(s),localStorage.setItem("render-count-story",String(s))},[]),t.jsxs("button",{onClick:()=>{c(0),localStorage.setItem("render-count-story","0")},style:{cursor:"pointer"},children:["Renders: ",o," - Reset"]})},O={title:"Example/Demo",tags:["autodocs"]},e={argTypes:{colorToken:{control:{type:"select"},options:T,description:"Select a Carbon Design System color token",table:{category:"Color Tokens"}}},args:{colorToken:"--cds-layer-01"},play:async({canvasElement:o,args:c})=>{const D=await R(o).findByText(c.colorToken);await S(D).toBeInTheDocument()},render:o=>t.jsx("div",{style:{aspectRatio:"1",height:"min(70vh, 200px)",backgroundColor:`var(${o.colorToken})`},children:t.jsx("p",{style:{background:"var(--cds-background-inverse)",color:"var(--cds-background)",fontFamily:"IBM Plex Sans",fontSize:"14px",paddingInline:"0.4rem",margin:"0"},children:o.colorToken})})},n={argTypes:{booleanControl:{control:"boolean",description:"A boolean toggle control",table:{category:"Dummy Controls"}},numberControl:{control:"number",description:"A number input control",table:{category:"Dummy Controls"}},rangeControl:{control:{type:"range",min:0,max:100,step:5},description:"A slider (range) control",table:{category:"Dummy Controls"}},colorControl:{control:"color",description:"Color picker control",table:{category:"Dummy Controls"}},textControl:{control:"text",description:"Text input control",table:{category:"Dummy Controls"}},selectControl:{control:{type:"select"},options:["Option A","Option B","Option C"],description:"Select dropdown control",table:{category:"Dummy Controls"}},radioControl:{control:{type:"radio"},options:["Radio 1","Radio 2","Radio 3"],description:"Radio button group",table:{category:"Dummy Controls"}},inlineRadioControl:{control:{type:"inline-radio"},options:["Inline 1","Inline 2"],description:"Inline radio button group",table:{category:"Dummy Controls"}},checkControl:{control:{type:"check"},options:["Check A","Check B","Check C"],description:"Multi-select checkbox group",table:{category:"Dummy Controls"}},inlineCheckControl:{control:{type:"inline-check"},options:["Inline A","Inline B"],description:"Inline checkbox group",table:{category:"Dummy Controls"}},dateControl:{control:"date",description:"Date picker control",table:{category:"Dummy Controls"}},fileControl:{control:"file",description:"File upload control (string[] expected)",table:{category:"Dummy Controls"}}},args:{booleanControl:!0,numberControl:42,rangeControl:50,colorControl:"#00ff00",textControl:"Sample text",selectControl:"Option B",radioControl:"Radio 2",inlineRadioControl:"Inline 2",checkControl:["Check A","Check C"],inlineCheckControl:["Inline A"],dateControl:new Date,fileControl:[]},render:o=>t.jsx("pre",{style:{color:"var(--cds-text-primary)"},children:JSON.stringify(o,null,2)})},r={render:()=>t.jsx(I,{})};var l,d,i,p,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  argTypes: {
    colorToken: {
      control: {
        type: "select"
      },
      options: colorCustomProperties,
      description: "Select a Carbon Design System color token",
      table: {
        category: "Color Tokens"
      }
    }
  },
  args: {
    colorToken: "--cds-layer-01"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Check that the selected color token is rendered in the paragraph
    const tokenText = await canvas.findByText(args.colorToken);
    await expect(tokenText).toBeInTheDocument();
  },
  render: args => {
    return <div style={{
      aspectRatio: "1",
      height: "min(70vh, 200px)",
      backgroundColor: \`var(\${args.colorToken})\`
      // border: "1px solid var(--cds-background-inverse",
    }}>
        <p style={{
        background: "var(--cds-background-inverse)",
        color: "var(--cds-background)",
        fontFamily: "IBM Plex Sans",
        fontSize: "14px",
        // display: "inline-block",
        paddingInline: "0.4rem",
        margin: "0"
      }}>
          {args.colorToken}
        </p>
      </div>;
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source},description:{story:`COLOR TOKEN
A simple div showing the background color of Carbon Design System color tokens`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.description}}};var y,b,m,g,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  argTypes: {
    booleanControl: {
      control: "boolean",
      description: "A boolean toggle control",
      table: {
        category: "Dummy Controls"
      }
    },
    numberControl: {
      control: "number",
      description: "A number input control",
      table: {
        category: "Dummy Controls"
      }
    },
    rangeControl: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 5
      },
      description: "A slider (range) control",
      table: {
        category: "Dummy Controls"
      }
    },
    colorControl: {
      control: "color",
      description: "Color picker control",
      table: {
        category: "Dummy Controls"
      }
    },
    textControl: {
      control: "text",
      description: "Text input control",
      table: {
        category: "Dummy Controls"
      }
    },
    selectControl: {
      control: {
        type: "select"
      },
      options: ["Option A", "Option B", "Option C"],
      description: "Select dropdown control",
      table: {
        category: "Dummy Controls"
      }
    },
    radioControl: {
      control: {
        type: "radio"
      },
      options: ["Radio 1", "Radio 2", "Radio 3"],
      description: "Radio button group",
      table: {
        category: "Dummy Controls"
      }
    },
    inlineRadioControl: {
      control: {
        type: "inline-radio"
      },
      options: ["Inline 1", "Inline 2"],
      description: "Inline radio button group",
      table: {
        category: "Dummy Controls"
      }
    },
    checkControl: {
      control: {
        type: "check"
      },
      options: ["Check A", "Check B", "Check C"],
      description: "Multi-select checkbox group",
      table: {
        category: "Dummy Controls"
      }
    },
    inlineCheckControl: {
      control: {
        type: "inline-check"
      },
      options: ["Inline A", "Inline B"],
      description: "Inline checkbox group",
      table: {
        category: "Dummy Controls"
      }
    },
    dateControl: {
      control: "date",
      description: "Date picker control",
      table: {
        category: "Dummy Controls"
      }
    },
    fileControl: {
      control: "file",
      description: "File upload control (string[] expected)",
      table: {
        category: "Dummy Controls"
      }
    }
  },
  args: {
    booleanControl: true,
    numberControl: 42,
    rangeControl: 50,
    colorControl: "#00ff00",
    textControl: "Sample text",
    selectControl: "Option B",
    radioControl: "Radio 2",
    inlineRadioControl: "Inline 2",
    checkControl: ["Check A", "Check C"],
    inlineCheckControl: ["Inline A"],
    dateControl: new Date(),
    fileControl: []
  },
  render: args => {
    return <pre style={{
      color: "var(--cds-text-primary)"
    }}>
        {JSON.stringify(args, null, 2)}
      </pre>;
  }
}`,...(m=(b=n.parameters)==null?void 0:b.docs)==null?void 0:m.source},description:{story:`DUMMY CONTROLS
A story showcasing every Storybook control type available.`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.description}}};var h,k,v,x,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <RenderCounter />
}`,...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.source},description:{story:`RENDER COUNTER
A component that tracks how many times it has rendered`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};const w=["ColorToken","DummyControls","RenderCounterStory"],E=Object.freeze(Object.defineProperty({__proto__:null,ColorToken:e,DummyControls:n,RenderCounterStory:r,__namedExportsOrder:w,default:O},Symbol.toStringTag,{value:"Module"}));export{e as C,n as D,E,r as R};
