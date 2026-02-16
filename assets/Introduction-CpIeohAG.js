import{j as n}from"./jsx-runtime-DUVQktFB.js";import{useMDXComponents as l}from"./index-f5UjHuJn.js";import{M as r}from"./blocks-z-XoCIpS.js";import"./iframe-BQjXFWhs.js";import"./preload-helper-C1FmrZbK.js";import"./index-BLwCSjwu.js";function i(s){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Example/Introduction"}),`
`,n.jsx(e.h1,{id:"markdown-syntax-reference-storybook-safe",children:"Markdown Syntax Reference (Storybook Safe)"}),`
`,n.jsx(e.p,{children:"This document demonstrates Markdown syntax that works safely in Storybook MDX v2."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"headers",children:"Headers"}),`
`,n.jsx(e.h1,{id:"h1-header",children:"H1 Header"}),`
`,n.jsx(e.h2,{id:"h2-header",children:"H2 Header"}),`
`,n.jsx(e.h3,{id:"h3-header",children:"H3 Header"}),`
`,n.jsx(e.h4,{id:"h4-header",children:"H4 Header"}),`
`,n.jsx(e.h5,{id:"h5-header",children:"H5 Header"}),`
`,n.jsx(e.h6,{id:"h6-header",children:"H6 Header"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"emphasis",children:"Emphasis"}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"Italic text"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Bold text"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:n.jsx(e.em,{children:"Bold and italic"})})}),`
`,n.jsx(e.p,{children:"~~Strikethrough~~"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"lists",children:"Lists"}),`
`,n.jsx(e.h3,{id:"unordered",children:"Unordered"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Item 1"}),`
`,n.jsxs(e.li,{children:["Item 2",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Nested item"}),`
`,n.jsx(e.li,{children:"Another nested"}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"Item 3"}),`
`]}),`
`,n.jsx(e.h3,{id:"ordered",children:"Ordered"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"First"}),`
`,n.jsxs(e.li,{children:["Second",`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Nested"}),`
`,n.jsx(e.li,{children:"Nested"}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"Third"}),`
`]}),`
`,n.jsx(e.h3,{id:"task-list",children:"Task List"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"[x] Completed task"}),`
`,n.jsxs(e.li,{children:["[ ] Incomplete task",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"[x] Nested complete"}),`
`,n.jsx(e.li,{children:"[ ] Nested incomplete"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"links",children:"Links"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://example.com",rel:"nofollow",children:"Inline link"})}),`
`,n.jsx(e.p,{children:`Direct URL:
https://example.com`}),`
`,n.jsx(e.p,{children:"Email link using HTML:"}),`
`,n.jsx("a",{href:"mailto:sales@example.com",children:"Contact Sales"}),`
`,n.jsxs(e.p,{children:[`Relative link:
`,n.jsx(e.a,{href:"#headers",children:"Go to Headers"})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"images",children:"Images"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://placehold.co/200",alt:"Placeholder"})}),`
`,n.jsx(e.p,{children:"Image with link:"}),`
`,n.jsx("a",{href:"https://example.com",children:n.jsx("img",{src:"https://placehold.co/200",alt:"Example"})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsxs(e.p,{children:["Inline code example: ",n.jsx(e.code,{children:"const x = 1"})]}),`
`,n.jsx(e.h3,{id:"javascript",children:"JavaScript"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function hello() {
  console.log("Hello, Storybook!");
}
`})}),`
`,n.jsx(e.h3,{id:"typescript",children:"TypeScript"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface User {
  name: string;
  age: number;
}
`})}),`
`,n.jsx(e.h3,{id:"html",children:"HTML"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div>Hello World</div>
`})}),`
`,n.jsx(e.h3,{id:"css",children:"CSS"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.container {
  display: flex;
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"tables",children:"Tables"}),`
`,n.jsx(e.p,{children:`| Feature | Basic |  Pro   |
| ------- | :---: | :----: |
| Users   |   1   |   10   |
| Storage |  1GB  | 100GB  |
| Price   | Free  | $10/mo |`}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"blockquotes",children:"Blockquotes"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"This is a blockquote."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"It can contain lists"}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Bold text"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Code"})}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"horizontal-rule",children:"Horizontal Rule"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"line-breaks",children:"Line Breaks"}),`
`,n.jsx(e.p,{children:`Line one
Line two`}),`
`,n.jsxs(e.p,{children:["Line one",n.jsx("br",{}),`
Line two`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"inline-html",children:"Inline HTML"}),`
`,n.jsx("div",{style:{color:"blue",fontWeight:"bold"},children:n.jsx(e.p,{children:"This is styled HTML inside MDX"})}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Click to expand"}),n.jsx(e.p,{children:"Hidden content works in MDX."}),n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"It supports Markdown"}),`
`,n.jsx(e.li,{children:"And formatting"}),`
`]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"superscript--subscript-html-only",children:"Superscript & Subscript (HTML only)"}),`
`,n.jsxs(e.p,{children:["H",n.jsx("sub",{children:"2"}),"O"]}),`
`,n.jsxs(e.p,{children:["E = mc",n.jsx("sup",{children:"2"})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"emoji",children:"Emoji"}),`
`,n.jsx(e.p,{children:"😀 🎉 🚀 ❤️ 👍"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"jsx-expressions",children:"JSX Expressions"}),`
`,n.jsxs(e.p,{children:["2 + 2 = ",4]}),`
`,n.jsxs(e.p,{children:["Current year: ",new Date().getFullYear()]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"styled-jsx-block",children:"Styled JSX Block"}),`
`,n.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"16px",borderRadius:"8px"},children:n.jsx(e.p,{children:"This is a styled JSX container."})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"complex-combination-example",children:"Complex Combination Example"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.h3,{id:"combined-example",children:"Combined Example"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Bold"})}),`
`,n.jsx(e.li,{children:n.jsx(e.em,{children:"Italic"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Code"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`console.log("Nested code block");
`})}),`
`,n.jsx(e.p,{children:`| Column A | Column B |
| -------- | -------- |
| Cell 1   | Cell 2   |`}),`
`]}),`
`,n.jsx(e.hr,{})]})}function j(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
