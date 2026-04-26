export const base_html =
`<!-- HTML -->
<div class="be-form">
   <div class="field">
       <label> Label </label>
       <input type="text" />
   </div>
</div>`
export const base_component =
`// Component 
// import {BeForm, Fields, Field} from 'reactr-be-ui
<BeForm> 
   <Field fieldLabel="Label">
       <input type="text" />
   </Field>
</BeForm>`
export const title =
`// HTML 
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
</BeForm>`
export const inline =
`// HTML 
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
</BeForm>`
export const use_label =
`// HTML 
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
</BeForm>`
export const disabled =
`// HTML 
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
</BeForm>`
export const group =
`// HTML 
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
</BeForm>`
export const grid_divide =
`// HTML 
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
</BeForm>`
export const grid_widths =
`// HTML 
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
</BeForm>`
export const textarea =
`// HTML 
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
`