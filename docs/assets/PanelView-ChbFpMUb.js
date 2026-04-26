import{j as e}from"./index-BNgkG8B6.js";import{M as c,C as l,a as n}from"./CodeBlock-CNKhYZn_.js";import{G as i}from"./iconBase-BMjx0fp5.js";function a(t){return i({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"},child:[]}]})(t)}function o(t){return i({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"},child:[]}]})(t)}const d=`<!-- HTML --> 
<div class="be-panel"> 
   <div class="panel-header"> 
       {header contents} 
   </div> 
   <div class="panel-contents"> 
       <div class="contents-wrapper">Contents ...</div> 
   </div> 
</div>`,r=`// @title: string  
// @contents: string  
<BePanel title={title} contents={contents ...}></BePanel>`,x=`// HTML  
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
</BePanel>`,m=`// @border: Boolean  
// default: false  
<BePanel title="title" contents="contents ..." border></BePanel>`,h=`// @collapse: Boolean  
// @open: Boolean  
// default: false  
<BePanel title="title" contents="contents ..." 
   toggleIcon="xi-icon-toggle" // default: xi-angle-down 
   collapse 
   open={open} 
   maxLine={number} // default: 5 
></BePanel>`,j=`// @toggleIcon: String | SVGSVGElement  
// @iconPos: 'left | right | null'  
// default: 'xi-angle-down'  
<!-- xi-icons classname icon --> 
<BePanel toggleIcon="xi-icon-toggle" iconPos={iconPos}>...</BePanel> 
<!-- or --> 
<!-- components icon --> 
<BePanel toggleIcon={<ComponentsIcon />} iconPos={iconPos}>...</BePanel>`,v=`<!-- HTML(details-summary) --> 
<details class="be-panel"> 
   <summary class="panel-header"> 
       {header contents} 
   </summary> 
   <div class="panel-content"> 
       <div class="content -wrapper">Contents ...</div> 
   </div> 
</details>`,s="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam iste, odio tempore sed maiores illum impedit voluptas, nemo incidunt harum, molestiae enim? Expedita cumque nihil error sit atque. Voluptas.";function N(){return e.jsxs("div",{id:"Panel",className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(c,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-panel border",children:[e.jsx("div",{className:"panel-header",children:e.jsx("div",{className:"title",children:"Title"})}),e.jsx("div",{className:"panel-content",children:e.jsx("div",{className:"content-wrapper",children:s})})]})}),e.jsx(l,{code:d,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(c,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{title:"Title",contents:s,border:!0})}),e.jsx(l,{code:r,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Border"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsx(n,{title:"Title",contents:s,border:!0})}),e.jsx(l,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Content"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{title:"Title",border:!0,children:[e.jsx("div",{className:"header",children:"Header"}),e.jsx("div",{className:"body",children:s}),e.jsx("div",{className:"footer",children:"Footer"})]})}),e.jsx(l,{code:x,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Collapse"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs(n,{title:"Title",border:!0,collapse:!0,maxLine:3,toggleIcon:"xi-caret-down",iconPos:"right",children:[s,s]})}),e.jsx(l,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Collapse - Toggle Icon"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsxs("div",{className:"contents",children:[e.jsx("h5",{children:"xi-icon"}),e.jsxs(n,{title:"Toggle icon on left",border:!0,collapse:!0,maxLine:3,toggleIcon:"xi-caret-down",iconPos:"left",children:[s,s]}),e.jsxs(n,{title:"Toggle icon on right",border:!0,collapse:!0,maxLine:3,toggleIcon:"xi-caret-down",iconPos:"right",children:[s,s]}),e.jsx("h5",{children:"component icon(react-icon)"}),e.jsxs(n,{title:"Toggle icon on left",border:!0,collapse:!0,maxLine:3,toggleIcon:e.jsx(a,{}),iconPos:"left",children:[s,s]}),e.jsxs(n,{title:"Toggle icon on right",border:!0,collapse:!0,maxLine:3,toggleIcon:e.jsx(o,{}),children:[s,s]})]}),e.jsx(l,{code:j,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Detail-Summary"}),e.jsx("div",{className:"desc",children:e.jsx(c,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents",children:e.jsxs("details",{className:"be-panel border",children:[e.jsx("summary",{className:"panel-header",children:e.jsx("div",{className:"title",children:"Summary"})}),e.jsx("div",{className:"panel-content",children:e.jsx("div",{className:"content-wrapper",children:"Contents"})})]})}),e.jsx(l,{code:v,language:"html"})]})})]})]})]})}export{N as default};
