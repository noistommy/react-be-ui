import{j as e,P as d,T as s}from"./index-BG_3_bTz.js";import{C as n}from"./CodeBlock-BLlm0AS2.js";import{c as l}from"./index-CkuhuPNf.js";const c=`<!-- Parent element 내부에 사용 -->
<div class="parent-element">
   ...
   <div class="be-badge">N</div>
</div>`,i=`// Parent element 내부에 사용 
<div class="parent-element">
   ...
   <BeBadge>N</BeBadge>
</div>`,r=`// @mark: Boolean 
// default: false 

// html 
<div class="parent-element">
   ...
   <div class="be-badge mark"></div>
</div> 
// component 
<div class="parent-element">
   ...
   <BeBadge mark></BeBadge>
</div>`,t=`// @shadow: Boolean 
// default: true 

// html 
<div class="parent-element">
   ...
   <div class="be-badge shadow"></div>
</div> 
// component 
<div class="parent-element">
   ...
   <BeBadge shadow></BeBadge>
</div>`,o=`// @align: {left | center | right} 
// default: center 

// html 
<div class="parent-element">
   ...
   <div class="be-badge align-{align}"></div>
</div> 
// component 
<div class="parent-element">
   ...
   <BeBadge align={align}>A</BeBadge>
</div>`,m=`// @color: String 
// default: null 

// html 
<div class="parent-element">
   ...
   <div class="be-badge {color}"></div>
</div> 
// component 
<div class="parent-element">
   ...
   <BeBadge color={color}>C</BeBadge>
</div>`;function v(){return e.jsxs("div",{className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(d,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsxs("div",{className:"be-button",children:["Badge(0)",e.jsx("div",{className:"be-badge",children:"0"})]}),e.jsxs("div",{className:"be-button",children:["Badge(10)",e.jsx("div",{className:"be-badge primary",children:"0"})]}),e.jsxs("div",{className:"be-button",children:["Badge(N)",e.jsx("div",{className:"be-badge red",children:"N"})]}),e.jsxs("div",{className:"be-button",children:["Badge(Icon)",e.jsx("div",{className:"be-badge blue",children:e.jsx("i",{className:"xi-upload"})})]})]}),e.jsx(n,{code:c,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(d,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-button",children:["Badge(C)",e.jsx(s,{color:"red",children:"C"})]})}),e.jsx(n,{code:i,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Mark"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsxs("div",{className:"be-button",children:["Float",e.jsx(s,{brand:"secondary",children:"F"})]}),e.jsxs("div",{className:"be-button",children:["Mark",e.jsx(s,{brand:"secondary",mark:!0})]})]}),e.jsx(n,{code:r,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Shadow"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsxs("div",{className:"be-button",children:["Shadow On",e.jsx(s,{brand:"secondary",children:"O"})]}),e.jsxs("div",{className:"be-button",children:["Shadow Off",e.jsx(s,{brand:"secondary",shadow:!1,children:"X"})]})]}),e.jsx(n,{code:t,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Align"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsxs("div",{className:"be-button",children:["Align Left",e.jsx(s,{brand:"primary",align:"left",children:"300O"})]}),e.jsxs("div",{className:"be-button",children:["Align Center",e.jsx(s,{brand:"primary",children:"3000"})]}),e.jsxs("div",{className:"be-button",children:["Align Right",e.jsx(s,{brand:"primary",align:"right",children:"3000"})]})]}),e.jsx(n,{code:o,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Color"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:l.map(a=>e.jsxs("div",{className:"be-button",children:[a,e.jsx(s,{brand:"primary",color:a,children:e.jsx("i",{className:"xi-tint"})})]},a))}),e.jsx(n,{code:m,language:"tsx"})]})})]})]})]})}export{v as default};
