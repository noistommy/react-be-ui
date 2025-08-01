import{j as e,T as t,C as s,e as n}from"./index-HHkmdi8H.js";const a=`<!-- HTML -->
<div class="be-panel">
   <div class="panel-header">
       {header contents}
   </div>
   <div class="panel-contents">
       <div class="contents-wrapper">Contents ...</div>
   </div>
</div>`,c=`// @title: string 
// @contents: string 
<BePanel title={title} contents={contents ...}></BePanel>`,i=`// HTML 
<div class="be-panel">
   <div class="panel-header">
       {header contents}
   </div>
   <div class="panel-content">
       <div class="content-wrapper">
           <div class="content-head">Header</div>
           <div class="content-body">Body ... </div>
           <div class="content-foot">Footer</div>
       </div>
   </div>
</div>
// Component 
<BePanel title="title">
   <div class="content-head">Header</div>
   <div class="content-body">Body ... </div>
   <div class="content-foot">Footer</div>
</BePanel>`,d=`// @border: Boolean 
// default: false 

<BePanel title="title" contents="contents ..." border></BePanel>`,o=`// @collapse: Boolean 
// @open: Boolean 
// default: false 

<BePanel title="title" contents="contents ..."
   toggleIcon="xi-icon-toggle" // default: xi-angle-down
   collapse
   open={open}
   maxLine={number} // default: 5
></BePanel>`,r=`<!-- HTML(details-summary) -->
<details class="be-panel">
   <summary class="panel-header">
       {header contents}
   </summary>
   <div class="panel-content">
       <div class="content -wrapper">Contents ...</div>
   </div>
</details>`,l="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam iste, odio tempore sed maiores illum impedit voluptas, nemo incidunt harum, molestiae enim? Expedita cumque nihil error sit atque. Voluptas.";function h(){return e.jsxs("div",{id:"Panel",className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(t,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-panel border",children:[e.jsx("div",{className:"panel-header",children:e.jsx("div",{className:"title",children:"Title"})}),e.jsx("div",{className:"panel-content",children:e.jsx("div",{className:"content-wrapper",children:"Contents"})})]})}),e.jsx(s,{code:a,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(t,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{title:"Title",contents:"Contents",border:!0})}),e.jsx(s,{code:c,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Border"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{title:"Title",contents:"Contents",border:!0})}),e.jsx(s,{code:d,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Content"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{title:"Title",border:!0,children:[e.jsx("div",{className:"content-head",children:"Header"}),e.jsx("div",{className:"content-body",children:"Body"}),e.jsx("div",{className:"content-foot",children:"Footer"})]})}),e.jsx(s,{code:i,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Collapse"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{title:"Title",border:!0,collapse:!0,maxLine:3,children:[l,l]})}),e.jsx(s,{code:o,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Detail-Summary"}),e.jsx("div",{className:"desc",children:e.jsx(t,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("details",{className:"be-panel border",children:[e.jsx("summary",{className:"panel-header",children:e.jsx("div",{className:"title",children:"Summary"})}),e.jsx("div",{className:"panel-content",children:e.jsx("div",{className:"content-wrapper",children:"Contents"})})]})}),e.jsx(s,{code:r,language:"html"})]})})]})]})]})}export{h as default};
