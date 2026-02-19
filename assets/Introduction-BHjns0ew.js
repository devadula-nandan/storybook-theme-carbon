import{j as e}from"./jsx-runtime-Dt95Dmtr.js";import{useMDXComponents as p}from"./index-DOYvDQWr.js";import{M as m,T as u,S as g,D as y,U as v,C as c,a as t,P as b,b as C,A as f,c as l,d as k,e as i,f as h,I as S,g as r,h as w}from"./blocks-mY2lTnv4.js";import{r as a}from"./iframe-D9xWNIN8.js";import{E as M,R as L,C as T,D as o}from"./Example.stories-vgHMDTTo.js";import"./preload-helper-C1FmrZbK.js";import"./index-Mi0RhJkJ.js";const x=()=>{const[s,n]=a.useState(()=>parseInt(localStorage.getItem("render-count")||"0"));return a.useEffect(()=>{const d=s+1;n(d),localStorage.setItem("render-count",String(d))},[]),e.jsxs("button",{onClick:()=>{n(0),localStorage.setItem("render-count","0")},style:{cursor:"pointer"},children:["Renders: ",s," - Reset"]})};function j(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:M}),`
`,e.jsx(u,{children:"Comprehensive Storybook MDX Documentation"}),`
`,e.jsx(g,{children:e.jsx(n.p,{children:"A complete reference for Markdown syntax and Storybook Doc Blocks"})}),`
`,e.jsx(y,{children:e.jsx(n.p,{children:`This document demonstrates all Markdown syntax that works safely in Storybook
MDX v2, plus comprehensive examples of Storybook-specific Doc Blocks for
creating rich documentation.`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"headers",children:"Headers"}),`
`,e.jsx(n.h1,{id:"h1-header",children:"H1 Header"}),`
`,e.jsx(n.h2,{id:"h2-header",children:"H2 Header"}),`
`,e.jsx(n.h3,{id:"h3-header",children:"H3 Header"}),`
`,e.jsx(n.h4,{id:"h4-header",children:"H4 Header"}),`
`,e.jsx(n.h5,{id:"h5-header",children:"H5 Header"}),`
`,e.jsx(n.h6,{id:"h6-header",children:"H6 Header"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"emphasis",children:"Emphasis"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Italic text"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Bold text"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.em,{children:"Bold and italic"})})}),`
`,e.jsx(n.p,{children:"~~Strikethrough~~"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"lists",children:"Lists"}),`
`,e.jsx(n.h3,{id:"unordered",children:"Unordered"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Item 1"}),`
`,e.jsxs(n.li,{children:["Item 2",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Nested item"}),`
`,e.jsx(n.li,{children:"Another nested"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Item 3"}),`
`]}),`
`,e.jsx(n.h3,{id:"ordered",children:"Ordered"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"First"}),`
`,e.jsxs(n.li,{children:["Second",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Nested"}),`
`,e.jsx(n.li,{children:"Nested"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Third"}),`
`]}),`
`,e.jsx(n.h3,{id:"task-list",children:"Task List"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"[x] Completed task"}),`
`,e.jsxs(n.li,{children:["[ ] Incomplete task",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"[x] Nested complete"}),`
`,e.jsx(n.li,{children:"[ ] Nested incomplete"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"links",children:"Links"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://example.com",rel:"nofollow",children:"Inline link"})}),`
`,e.jsx(n.p,{children:`Direct URL:
https://example.com`}),`
`,e.jsx(n.p,{children:"Email link using HTML:"}),`
`,e.jsx("a",{href:"mailto:sales@example.com",children:"Contact Sales"}),`
`,e.jsxs(n.p,{children:[`Relative link:
`,e.jsx(n.a,{href:"#headers",children:"Go to Headers"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"images",children:"Images"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://placehold.co/200",alt:"Placeholder"})}),`
`,e.jsx(n.p,{children:"Image with link:"}),`
`,e.jsx("a",{href:"https://example.com",children:e.jsx("img",{src:"https://placehold.co/200",alt:"Example"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsxs(n.p,{children:["Inline code example: ",e.jsx(n.code,{children:"const x = 1"})]}),`
`,e.jsx(n.h3,{id:"javascript",children:"JavaScript"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function hello() {
  console.log("Hello, Storybook!");
}
`})}),`
`,e.jsx(n.h3,{id:"typescript",children:"TypeScript"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface User {
  name: string;
  age: number;
}
`})}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div>Hello World</div>
`})}),`
`,e.jsx(n.h3,{id:"css",children:"CSS"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.container {
  display: flex;
}
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tables",children:"Tables"}),`
`,e.jsx(n.p,{children:`| Feature | Basic |  Pro   |
| ------- | :---: | :----: |
| Users   |   1   |   10   |
| Storage |  1GB  | 100GB  |
| Price   | Free  | $10/mo |`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"blockquotes",children:"Blockquotes"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This is a blockquote."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"It can contain lists"}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Bold text"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Code"})}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"horizontal-rule",children:"Horizontal Rule"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"line-breaks",children:"Line Breaks"}),`
`,e.jsx(n.p,{children:`Line one
Line two`}),`
`,e.jsxs(n.p,{children:["Line one",e.jsx("br",{}),`
Line two`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"inline-html",children:"Inline HTML"}),`
`,e.jsx("div",{style:{color:"blue",fontWeight:"bold"},children:e.jsx(n.p,{children:"This is styled HTML inside MDX"})}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Click to expand"}),e.jsx(n.p,{children:"Hidden content works in MDX."}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"It supports Markdown"}),`
`,e.jsx(n.li,{children:"And formatting"}),`
`]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"superscript--subscript-html-only",children:"Superscript & Subscript (HTML only)"}),`
`,e.jsxs(n.p,{children:["H",e.jsx("sub",{children:"2"}),"O"]}),`
`,e.jsxs(n.p,{children:["E = mc",e.jsx("sup",{children:"2"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"emoji",children:"Emoji"}),`
`,e.jsx(n.p,{children:"😀 🎉 🚀 ❤️ 👍"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"jsx-expressions",children:"JSX Expressions"}),`
`,e.jsxs(n.p,{children:["2 + 2 = ",4]}),`
`,e.jsxs(n.p,{children:["Current year: ",new Date().getFullYear()]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"styled-jsx-block",children:"Styled JSX Block"}),`
`,e.jsx("div",{style:{backgroundColor:"var(--cds-layer)",color:"var(--cds-text-primary)",padding:"16px"},children:e.jsx(n.p,{children:"This is a styled JSX container."})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"unstyled",children:"Unstyled"}),`
`,e.jsx(v,{children:e.jsx("div",{style:{backgroundColor:"var(--cds-layer)",color:"var(--cds-text-primary)",padding:"16px"},children:e.jsxs("ul",{children:[e.jsx("li",{children:"List item 1"}),e.jsx("li",{children:"List item 2"}),e.jsx("li",{children:"List item 3"})]})})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"complex-combination-example",children:"Complex Combination Example"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.h3,{id:"combined-example",children:"Combined Example"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Bold"})}),`
`,e.jsx(n.li,{children:e.jsx(n.em,{children:"Italic"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Code"})}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`console.log("Nested code block");
`})}),`
`,e.jsx(n.p,{children:`| Column A | Column B |
| -------- | -------- |
| Cell 1   | Cell 2   |`}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(x,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"storybook-doc-blocks",children:"Storybook Doc Blocks"}),`
`,e.jsx(n.h3,{id:"canvas-component",children:"Canvas Component"}),`
`,e.jsx(n.p,{children:"The Canvas component displays stories in an isolated preview with controls."}),`
`,e.jsx(c,{of:L}),`
`,e.jsx(n.h3,{id:"multiple-stories-in-canvas",children:"Multiple Stories in Canvas"}),`
`,e.jsxs(c,{children:[e.jsx(t,{of:T}),e.jsx(t,{of:o})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"primary-story",children:"Primary Story"}),`
`,e.jsx(n.p,{children:"The Primary block shows the first story with controls:"}),`
`,e.jsx(b,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"controls-table",children:"Controls Table"}),`
`,e.jsx(n.p,{children:"The Controls block displays all the args for a story:"}),`
`,e.jsx(C,{of:o}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"argtypes-table",children:"ArgTypes Table"}),`
`,e.jsx(n.p,{children:"Display argument types documentation:"}),`
`,e.jsx(f,{of:o}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"source-code-display",children:"Source Code Display"}),`
`,e.jsx(n.p,{children:"Show the source code of a story:"}),`
`,e.jsx(l,{code:`
function ExampleComponent() {
return <div>Hello Storybook!</div>;
}
`,language:"jsx",dark:!0}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"color-palette",children:"Color Palette"}),`
`,e.jsx(n.p,{children:"Display color swatches for design systems:"}),`
`,e.jsxs(k,{children:[e.jsx(i,{title:"Primary Colors",subtitle:"Main brand colors",colors:{Blue:"#0f62fe","Blue Hover":"#0353e9","Blue Active":"#002d9c"}}),e.jsx(i,{title:"Secondary Colors",subtitle:"Supporting colors",colors:{Gray:"#525252","Gray Hover":"#393939","Gray Active":"#161616"}}),e.jsx(i,{title:"Status Colors",subtitle:"Feedback colors",colors:{Success:"#24a148",Warning:"#f1c21b",Error:"#da1e28",Info:"#0043ce"}})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"typography-scale",children:"Typography Scale"}),`
`,e.jsx(n.p,{children:"Display typography specimens:"}),`
`,e.jsx(h,{fontSizes:[12,14,16,20,24,32,40,48],fontWeight:400,sampleText:"The quick brown fox jumps over the lazy dog",fontFamily:"IBM Plex Sans, sans-serif"}),`
`,e.jsx(h,{fontSizes:[16,20,24,32],fontWeight:600,sampleText:"Bold Typography Example",fontFamily:"IBM Plex Sans, sans-serif"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"icon-gallery",children:"Icon Gallery"}),`
`,e.jsx(n.p,{children:"Display icon collections:"}),`
`,e.jsxs(S,{children:[e.jsx(r,{name:"Add",children:e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",children:e.jsx("path",{d:"M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"})})}),e.jsx(r,{name:"Close",children:e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",children:e.jsx("path",{d:"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6L24 9.4z"})})}),e.jsx(r,{name:"Check",children:e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",children:e.jsx("path",{d:"M13 24l-9-9 1.414-1.414L13 21.171 26.586 7.586 28 9 13 24z"})})}),e.jsx(r,{name:"Search",children:e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",children:e.jsx("path",{d:"M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9z"})})}),e.jsx(r,{name:"Settings",children:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",children:[e.jsx("path",{d:"M27 16.76v-1.53l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1 2 2 0 0 0-.64.1l-2.43.82a11.35 11.35 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.48 11.48 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1 2 2 0 0 0 .64-.1l2.43-.82a11.35 11.35 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.48 11.48 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1 2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51zM25.21 24l-3.43-1.16a8.86 8.86 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.36 9.36 0 0 1-2.7-1.57L6.79 24l-2.36-4 2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4 3.43 1.16a8.86 8.86 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.36 9.36 0 0 1 2.7 1.57L25.21 8l2.36 4-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20z"}),e.jsx("path",{d:"M16 22a6 6 0 1 1 6-6 5.94 5.94 0 0 1-6 6zm0-10a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4z"})]})}),e.jsx(r,{name:"Download",children:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",children:[e.jsx("path",{d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4z"}),e.jsx("path",{d:"M26 14l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10 10-10z"})]})})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"all-stories",children:"All Stories"}),`
`,e.jsx(n.p,{children:"Display all stories from this file:"}),`
`,e.jsx(w,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"advanced-mdx-features",children:"Advanced MDX Features"}),`
`,e.jsx(n.h3,{id:"interactive-components",children:"Interactive Components"}),`
`,e.jsx(n.p,{children:"You can embed interactive React components directly:"}),`
`,e.jsx("div",{style:{padding:"20px",backgroundColor:"var(--cds-layer-01)",borderRadius:"4px",marginBottom:"20px"},children:e.jsx(x,{})}),`
`,e.jsx(n.h3,{id:"dynamic-content",children:"Dynamic Content"}),`
`,e.jsxs(n.p,{children:["Current year: ",new Date().getFullYear()]}),`
`,e.jsx("div",{style:{padding:"16px",backgroundColor:"var(--cds-support-success)",color:"var(--cds-text-on-color)",borderRadius:"4px",marginTop:"16px"},children:e.jsx(n.p,{children:"✓ Interactive MDX content"})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"code-examples-with-syntax-highlighting",children:"Code Examples with Syntax Highlighting"}),`
`,e.jsx(n.h3,{id:"react-component",children:"React Component"}),`
`,e.jsx(l,{code:`
import React from 'react';
import { Button } from '@carbon/react';

export const MyComponent = ({ label, onClick }) => {
return (
  <Button onClick={onClick}>
    {label}
  </Button>
);
};
`,language:"tsx",dark:!0}),`
`,e.jsx(n.h3,{id:"css-with-carbon-tokens",children:"CSS with Carbon Tokens"}),`
`,e.jsx(l,{code:`
.my-component {
background-color: var(--cds-layer-01);
color: var(--cds-text-primary);
padding: var(--cds-spacing-05);
border-radius: 4px;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.my-component:hover {
background-color: var(--cds-layer-hover-01);
}
`,language:"css",dark:!0}),`
`,e.jsx(n.h3,{id:"json-configuration",children:"JSON Configuration"}),`
`,e.jsx(l,{code:`
{
"name": "storybook-theme-carbon",
"version": "1.0.0",
"description": "Carbon Design System theme for Storybook",
"main": "dist/index.js",
"types": "dist/index.d.ts"
}
`,language:"json",dark:!0}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("div",{style:{paddingInline:"1rem",display:"flex",backgroundColor:"var(--cds-layer-accent-01)",borderLeft:"4px solid var(--cds-border-interactive)",marginTop:"40px"},children:e.jsx(n.p,{children:`This page demonstrates all major Markdown features and Storybook Doc Blocks.
Use this as a reference when creating your own documentation pages.`})})]})}function R(s={}){const{wrapper:n}={...p(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(j,{...s})}):j(s)}export{x as RenderCounter,R as default};
