export const base_html =
  `<!-- HTML -->\n` +
  `<div class="be-form">\n` +
  `   <div class="field">\n` +
  `       <label> Label </label>\n` +
  `       <input type="text" />\n` +
  `   </div>\n` +
  `</div>`
export const base_component =
  `// Component \n` +
  `// import {BeForm, Fields, Field} from 'reactr-be-ui\n` +
  `<BeForm>\n` + 
  `   <Field fieldLabel="Label">\n` +
  `       <input type="text" />\n` +
  `   </Field>\n` +
  `</BeForm>`
export const title =
  `// HTML \n` +
  `<div class="be-form">\n` +
  `   <div class="header">\n` +
  `       <div class="title"> Title </div>\n` +
  `   </div>\n` +
  `   <div class="field">\n` +
  `       <label> Label </label>\n` +
  `       <input type="text" />\n` +
  `   </div>\n` +
  `</div>\n` +
  `// Component \n` +
  `<BeForm>\n` + 
  `   <Field title="Title">\n` +
  `       <input type="text" />\n` +
  `   </Field>\n` +
  `</BeForm>`
export const inline =
  `// HTML \n` +
  `<div class="be-form">\n` +
  `   <div class="field inline">\n` +
  `       <label> Label </label>\n` +
  `       <input type="text" />\n` +
  `   </div>\n` +
  `</div>\n` +
  `// Component \n` +
  `<BeForm>\n` + 
  `   <Field inline>\n` +
  `       <input type="text" />\n` +
  `   </Field>\n` +
  `</BeForm>`
export const use_label =
  `// HTML \n` +
  `// with label \n` +
  `<div class="be-form">\n` +
  `   <div class="field">\n` +
  `       <label> Label </label>\n` +
  `       <input type="text" />\n` +
  `   </div>\n` +
  `// without label \n` +
  `   <div class="field">\n` +
  `       <input type="text" />\n` +
  `   </div>\n` +
  `</div>\n` +
  `// Component \n` +
  `<BeForm>\n` + 
  `   <Field fieldLabel="Label">\n` +
  `       <input type="text" />\n` +
  `   </Field>\n` +
  `</BeForm>`
export const disabled =
  `// HTML \n` +
  `<div class="be-form">\n` +
  `   <div class="field disabled">\n` +
  `       <label> Label </label>\n` +
  `       <input type="text" />\n` +
  `   </div>\n` +
  `</div>\n` +
  `// Component \n` +
  `<BeForm>\n` + 
  `   <Field disabled>\n` +
  `       <input type="text" />\n` +
  `   </Field>\n` +
  `</BeForm>`
export const group =
  `// HTML \n` +
  `<div class="be-form">\n` +
  `   <div class="fields">\n` +
  `       <div class="field">\n` +
  `           <label> Label </label>\n` +
  `           <input type="text" />\n` +
  `       </div>\n` +
  `       <div class="field">\n` +
  `           <label> Label </label>\n` +
  `           <input type="text" />\n` +
  `       </div>\n` +
  `       ...\n` +
  `   </div>\n` +
  `</div>\n` +
  `// Component \n` +
  `<BeForm>\n` + 
  `   <Fields>\n` +
  `       <Field>\n` +
  `           <input type="text" />\n` +
  `       </Field>\n` +
  `       ...\n` +
  `   </Fields>\n` +
  `</BeForm>`
export const grid_divide =
  `// HTML \n` +
  `<div class="be-form">\n` +
  `   <div class="fields divide-{number}">\n` +
  `       <div class="field">\n` +
  `           <label> Label </label>\n` +
  `           <input type="text" />\n` +
  `       </div>\n` +
  `       <div class="field">\n` +
  `           <label> Label </label>\n` +
  `           <input type="text" />\n` +
  `       </div>\n` +
  `       ...\n` +
  `   </div>\n` +
  `</div>\n` +
  `// Component \n` +
  `<BeForm>\n` + 
  `   <Fields divide={number}>\n` +
  `       <Field>\n` +
  `           <Column>\n` +
  `               <input type="text" />\n` +
  `           </Column>\n` +
  `           ...\n` +
  `       </Field>\n` +
  `       ...\n` +
  `   </Fields>\n` +
  `</BeForm>`
export const grid_widths =
  `// HTML \n` +
  `// Grid System과 동일한 스타일이 적용 됩니다. \n` +
  `<div class="be-form">\n` +
  `   <div class="fields">\n` +
  `       <div class="field span-{a}">\n` +
  `           <label> Label </label>\n` +
  `           <input type="text" />\n` +
  `       </div>\n` +
  `       <div class="field span-{b}">\n` +
  `           <label> Label </label>\n` +
  `           <input type="text" />\n` +
  `       </div>\n` +
  `       ...\n` +
  `   </div>\n` +
  `</div>\n` +
  `// Component \n` +
  `<BeForm>\n` + 
  `   <Fields>\n` +
  `       <Field>\n` +
  `           <Column span={a}>\n` +
  `               <input type="text" />\n` +
  `           </Column>\n` +
  `           <Column span={b}>\n` +
  `               <input type="text" />\n` +
  `           </Column>\n` +
  `           <Column span={c}>\n` +
  `               <input type="text" />\n` +
  `           </Column>\n` +
  `       </Field>\n` +
  `       ...\n` +
  `   </Fields>\n` +
  `</BeForm>`
export const textarea =
  `// HTML \n` +
  `<div class="be-form">\n` +
  `   <div class="field">\n` +
  `       <label> Textarea </label>\n` +
  `       <textarea></textarea>\n` +
  `   </div>\n` +
  `   <div class="field short">\n` +
  `       <label> Textarea Short </label>\n` +
  `       <textarea></textarea>\n` +
  `   </div>\n` +
  `</div>\n` +
  `// Component \n` +
  `<BeForm>\n` + 
  `   <Fields>\n` +
  `       <Field>\n` +
  `           <textarea />\n` +
  `       </Field>\n` +
  `       <Field short>\n` +
  `           <textarea />\n` +
  `       </Field>\n` +
  `   </Fields>\n` +
  `</BeForm>`
