import{j as e,T as a,C as s,v as i,x as n,u as t,i as d,h as l}from"./index-HHkmdi8H.js";const c=`<!-- HTML -->
<div class="be-form">
   <div class="field">
       <label> Label </label>
       <input type="text" />
   </div>
</div>`,x=`// Component 
// import {BeForm, Fields, Field} from 'reactr-be-ui
<BeForm>
   <Field fieldLabel="Label">
       <input type="text" />
   </Field>
</BeForm>`,r=`// HTML 
<div class="be-form">
   <div class="header">
       <div class="title"> Title </div>
   </div>
   <div class="field">
       <label> Label </label>
       <input type="text" />
   </div>
</div>
// Component 
<BeForm>
   <Field title="Title">
       <input type="text" />
   </Field>
</BeForm>`,o=`// HTML 
<div class="be-form">
   <div class="field inline">
       <label> Label </label>
       <input type="text" />
   </div>
</div>
// Component 
<BeForm>
   <Field inline>
       <input type="text" />
   </Field>
</BeForm>`,j=`// HTML 
// with label 
<div class="be-form">
   <div class="field">
       <label> Label </label>
       <input type="text" />
   </div>
// without label 
   <div class="field">
       <input type="text" />
   </div>
</div>
// Component 
<BeForm>
   <Field fieldLabel="Label">
       <input type="text" />
   </Field>
</BeForm>`,b=`// HTML 
<div class="be-form">
   <div class="field disabled">
       <label> Label </label>
       <input type="text" />
   </div>
</div>
// Component 
<BeForm>
   <Field disabled>
       <input type="text" />
   </Field>
</BeForm>`,h=`// HTML 
<div class="be-form">
   <div class="fields">
       <div class="field">
           <label> Label </label>
           <input type="text" />
       </div>
       <div class="field">
           <label> Label </label>
           <input type="text" />
       </div>
       ...
   </div>
</div>
// Component 
<BeForm>
   <Fields>
       <Field>
           <input type="text" />
       </Field>
       ...
   </Fields>
</BeForm>`,v=`// HTML 
<div class="be-form">
   <div class="fields divide-{number}">
       <div class="field">
           <label> Label </label>
           <input type="text" />
       </div>
       <div class="field">
           <label> Label </label>
           <input type="text" />
       </div>
       ...
   </div>
</div>
// Component 
<BeForm>
   <Fields divide={number}>
       <Field>
           <Column>
               <input type="text" />
           </Column>
           ...
       </Field>
       ...
   </Fields>
</BeForm>`,m=`// HTML 
// Grid System과 동일한 스타일이 적용 됩니다. 
<div class="be-form">
   <div class="fields">
       <div class="field span-{a}">
           <label> Label </label>
           <input type="text" />
       </div>
       <div class="field span-{b}">
           <label> Label </label>
           <input type="text" />
       </div>
       ...
   </div>
</div>
// Component 
<BeForm>
   <Fields>
       <Field>
           <Column span={a}>
               <input type="text" />
           </Column>
           <Column span={b}>
               <input type="text" />
           </Column>
           <Column span={c}>
               <input type="text" />
           </Column>
       </Field>
       ...
   </Fields>
</BeForm>`,p=`// HTML 
<div class="be-form">
   <div class="field">
       <label> Textarea </label>
       <textarea></textarea>
   </div>
   <div class="field short">
       <label> Textarea Short </label>
       <textarea></textarea>
   </div>
</div>
// Component 
<BeForm>
   <Fields>
       <Field>
           <textarea />
       </Field>
       <Field short>
           <textarea />
       </Field>
   </Fields>
</BeForm>`;function F(){return e.jsxs("div",{id:"FormView",className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(a,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx("div",{className:"be-form",children:e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Label"}),e.jsx("input",{type:"text"})]})})}),e.jsx(s,{code:c,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(a,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{children:e.jsx(n,{fieldLabel:"Label",children:e.jsx(t,{})})})}),e.jsx(s,{code:x,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Title"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{title:"Form Title",children:e.jsxs(n,{children:[e.jsx("label",{children:"Label"}),e.jsx("input",{type:"text"})]})})}),e.jsx(s,{code:r,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Inline"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{children:e.jsxs(n,{inline:!0,children:[e.jsx("label",{children:"Label"}),e.jsx("input",{type:"text"})]})})}),e.jsx(s,{code:o,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Use Label"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{children:e.jsx(n,{fieldLabel:"Label",children:e.jsx("input",{type:"text"})})})}),e.jsx(s,{code:j,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Disabled"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{children:e.jsx(n,{fieldLabel:"Label",disabled:!0,children:e.jsx("input",{type:"text"})})})}),e.jsx(s,{code:b,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Field Group"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(n,{fieldLabel:"Label1",children:e.jsx("input",{type:"text"})}),e.jsx(n,{fieldLabel:"Label2",children:e.jsx("input",{type:"text"})}),e.jsx(n,{fieldLabel:"Label3",children:e.jsx("input",{type:"text"})})]})})}),e.jsx(s,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Field Divide"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsxs(i,{children:[e.jsx(d,{divide:3,children:e.jsxs(n,{children:[e.jsx(l,{children:e.jsx("input",{type:"text",value:"col 4"})}),e.jsx(l,{children:e.jsx("input",{type:"text",value:"col 4"})}),e.jsx(l,{children:e.jsx("input",{type:"text",value:"col 4"})})]})}),e.jsx(d,{divide:2,children:e.jsxs(n,{children:[e.jsx(l,{children:e.jsx("input",{type:"text",value:"col 6"})}),e.jsx(l,{children:e.jsx("input",{type:"text",value:"col 6"})})]})})]})}),e.jsx(s,{code:v,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Field Widths"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{span:2,children:e.jsx("input",{type:"text",value:"col 2"})}),e.jsx(l,{span:5,children:e.jsx("input",{type:"text",value:"col 5"})}),e.jsx(l,{span:5,children:e.jsx("input",{type:"text",value:"col 5"})})]})}),e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{span:3,children:e.jsx("input",{type:"text",value:"col 3"})}),e.jsx(l,{span:9,children:e.jsx("input",{type:"text",value:"col 9"})})]})})]})}),e.jsx(s,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Textarea"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(n,{fieldLabel:"Label Textarea",children:e.jsx(t,{type:"textarea"})}),e.jsx(n,{fieldLabel:"Label Textarea short",short:!0,children:e.jsx(t,{type:"textarea"})})]})})}),e.jsx(s,{code:p,language:"tsx"})]})})]})]}),e.jsx("style",{jsx:"true",children:`
          #FormView .contents .block {
            display: block;
          }
        `})]})}export{F as default};
