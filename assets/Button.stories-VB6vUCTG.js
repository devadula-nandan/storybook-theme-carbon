import{j as k}from"./jsx-runtime-KqR49eEb.js";import"./iframe-sDhm0R2M.js";import"./preload-helper-C1FmrZbK.js";const y=({primary:r=!1,size:l="medium",backgroundColor:n,label:t,...b})=>{const g=r?"storybook-button--primary":"storybook-button--secondary";return k.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${l}`,g].join(" "),style:{backgroundColor:n},...b,children:t})};y.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const{expect:a,fn:h}=__STORYBOOK_MODULE_TEST__,A={title:"Example/Button",component:y,play:async({canvas:r,userEvent:l,args:n})=>{const t=r.getByRole("button");await l.click(t),a(t).toBeInTheDocument(),n.onClick&&a(n.onClick).toHaveBeenCalled()},argTypes:{backgroundColor:{control:"color"}},args:{onClick:h()},tags:["autodocs"],parameters:{myAddonParameter:`
<MyComponent boolProp scalarProp={1} complexProp={{ foo: 1, bar: '2' }}>
  <SomeOtherComponent funcProp={(a) => a.id} />
</MyComponent>
`}},e={args:{primary:!0,label:"Button"}},o={name:"Dummy Controls",argTypes:{label:{control:"text",description:"A simple text input control",table:{category:"Dummy Controls"}},booleanControl:{control:"boolean",description:"A boolean toggle control",table:{category:"Dummy Controls"}},numberControl:{control:"number",description:"A number input control",table:{category:"Dummy Controls"}},rangeControl:{control:{type:"range",min:0,max:100,step:5},description:"A slider (range) control",table:{category:"Dummy Controls"}},colorControl:{control:"color",description:"Color picker control",table:{category:"Dummy Controls"}},selectControl:{control:{type:"select"},options:["Option A","Option B","Option C"],description:"Select dropdown control",table:{category:"Dummy Controls"}},radioControl:{control:{type:"radio"},options:["Radio 1","Radio 2","Radio 3"],description:"Radio button group",table:{category:"Dummy Controls"}},inlineRadioControl:{control:{type:"inline-radio"},options:["Inline 1","Inline 2"],description:"Inline radio button group",table:{category:"Dummy Controls"}},checkControl:{control:{type:"check"},options:["Check A","Check B","Check C"],description:"Multi-select checkbox group",table:{category:"Dummy Controls"}},inlineCheckControl:{control:{type:"inline-check"},options:["Inline A","Inline B"],description:"Inline checkbox group",table:{category:"Dummy Controls"}},dateControl:{control:"date",description:"Date picker control",table:{category:"Dummy Controls"}},fileControl:{control:"file",description:"File upload control (string[] expected)",table:{category:"Dummy Controls"}}},args:{label:"Sample Text",booleanControl:!0,numberControl:42,rangeControl:50,colorControl:"#00ff00",selectControl:"Option B",radioControl:"Radio 2",inlineRadioControl:"Inline 2",checkControl:["Check A","Check C"],inlineCheckControl:["Inline A"],dateControl:new Date,fileControl:[]}};var i,c,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var p,m,u,d,C;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Dummy Controls",
  argTypes: {
    label: {
      control: "text",
      description: "A simple text input control",
      table: {
        category: "Dummy Controls"
      }
    },
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
    label: "Sample Text",
    booleanControl: true,
    numberControl: 42,
    rangeControl: 50,
    colorControl: "#00ff00",
    selectControl: "Option B",
    radioControl: "Radio 2",
    inlineRadioControl: "Inline 2",
    checkControl: ["Check A", "Check C"],
    inlineCheckControl: ["Inline A"],
    dateControl: new Date(),
    fileControl: []
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:`DUMMY CONTROLS
A story showcasing every Storybook control type available.`,...(C=(d=o.parameters)==null?void 0:d.docs)==null?void 0:C.description}}};const I=["Default","DummyControls"];export{e as Default,o as DummyControls,I as __namedExportsOrder,A as default};
