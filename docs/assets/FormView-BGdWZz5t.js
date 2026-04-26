import{j as e}from"./index-BNgkG8B6.js";import{M as a,C as l,N as i,O as s,T as t,j as d}from"./CodeBlock-CNKhYZn_.js";const n=`<!-- HTML -->
<div class="be-form">
   <div class="field">
       <label> Label </label>
       <input type="text" />
   </div>
</div>`,c=`// Component 
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
</BeForm>`,x=`// HTML 
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
</BeForm>`,o=`// HTML 
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
</BeForm>`,j=`// HTML 
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
</BeForm>`,m=`// HTML 
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
</BeForm>`,h=`// HTML 
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
</BeForm>`,p=`// HTML 
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
</BeForm>`,b=`// HTML 
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
</BeForm>
`;function N(){return e.jsxs("div",{id:"FormView",className:"page-wrapper be container",children:[e.jsxs("div",{className:"base",children:[e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(a,{color:"lightblue",children:"HTML"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsxs("div",{className:"be-form",children:[e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"title",children:"Form Title"}),e.jsx("div",{className:"desc",children:"Form Discription"})]}),e.jsxs("div",{className:"fields",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Label 1"}),e.jsx("div",{className:"be-input",children:e.jsx("input",{type:"text"})})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{children:"Label 2"}),e.jsx("div",{className:"be-input",children:e.jsx("input",{type:"text"})})]})]}),e.jsx("div",{className:"divider"}),e.jsxs("div",{className:"fields",children:[e.jsxs("div",{className:"field inline",children:[e.jsx("label",{children:"Label 1"}),e.jsx("div",{className:"be-input",children:e.jsx("input",{type:"text"})})]}),e.jsxs("div",{className:"field inline",children:[e.jsx("label",{children:"Label 2"}),e.jsx("div",{className:"be-input",children:e.jsx("input",{type:"text"})})]})]})]})}),e.jsx(l,{code:n,language:"html"})]})})]}),e.jsxs("section",{children:[e.jsx("div",{className:"desc",children:e.jsx(a,{color:"deepblue",children:"Component"})}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{children:e.jsx(s,{fieldLabel:"Label",children:e.jsx(t,{})})})}),e.jsx(l,{code:c,language:"tsx"})]})})]})]}),e.jsxs("div",{className:"variants",children:[e.jsx("h1",{className:"title",children:"Variants"}),e.jsxs("section",{children:[e.jsx("h4",{children:"Form Header"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{title:"Form Title"})}),e.jsx(l,{code:r,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Inline"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{children:e.jsxs(s,{inline:!0,children:[e.jsx("label",{children:"Label"}),e.jsx("input",{type:"text"})]})})}),e.jsx(l,{code:x,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Use Label"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{children:e.jsx(s,{fieldLabel:"Label",children:e.jsx("input",{type:"text"})})})}),e.jsx(l,{code:o,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Disabled"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{children:e.jsx(s,{fieldLabel:"Label",disabled:!0,children:e.jsx("input",{type:"text"})})})}),e.jsx(l,{code:j,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Field Group"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(s,{fieldLabel:"Label1",children:e.jsx("input",{type:"text"})}),e.jsx(s,{fieldLabel:"Label2",children:e.jsx("input",{type:"text"})}),e.jsx(s,{fieldLabel:"Label3",children:e.jsx("input",{type:"text"})})]})})}),e.jsx(l,{code:m,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Field Divide"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsxs(i,{children:[e.jsxs(d,{grid:!0,divide:3,children:[e.jsx(s,{column:!0,children:e.jsx("input",{type:"text",placeholder:"col 4"})}),e.jsx(s,{column:!0,children:e.jsx("input",{type:"text",placeholder:"col 4"})}),e.jsx(s,{column:!0,children:e.jsx("input",{type:"text",placeholder:"col 4"})})]}),e.jsxs(d,{grid:!0,divide:2,children:[e.jsx(s,{column:!0,children:e.jsx("input",{type:"text",placeholder:"col 6"})}),e.jsx(s,{column:!0,children:e.jsx("input",{type:"text",placeholder:"col 6"})})]})]})}),e.jsx(l,{code:h,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Field Widths"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsxs(i,{children:[e.jsxs(d,{grid:!0,children:[e.jsx(s,{column:!0,span:2,children:e.jsx("input",{type:"text",placeholder:"col 2"})}),e.jsx(s,{column:!0,span:5,children:e.jsx("input",{type:"text",placeholder:"col 5"})}),e.jsx(s,{column:!0,span:5,children:e.jsx("input",{type:"text",placeholder:"col 5"})})]}),e.jsxs(d,{grid:!0,children:[e.jsx(s,{column:!0,span:3,children:e.jsx("input",{type:"text",placeholder:"col 3"})}),e.jsx(s,{column:!0,span:9,children:e.jsx("input",{type:"text",placeholder:"col 9"})})]})]})}),e.jsx(l,{code:p,language:"tsx"})]})})]}),e.jsxs("section",{children:[e.jsx("h4",{children:"Textarea"}),e.jsx("div",{className:"desc"}),e.jsx("div",{className:"contents",children:e.jsxs("div",{className:"be-segment border",children:[e.jsx("div",{className:"contents block",children:e.jsx(i,{children:e.jsxs(d,{children:[e.jsx(s,{fieldLabel:"Label Textarea",children:e.jsx(t,{type:"textarea",fluid:!0})}),e.jsx(s,{fieldLabel:"Label Textarea short",short:!0,children:e.jsx(t,{type:"textarea",fluid:!0})})]})})}),e.jsx(l,{code:b,language:"tsx"})]})})]})]}),e.jsx("style",{jsx:"true",children:`
          #FormView .contents .block {
            display: block;
          }
        `})]})}export{N as default};
