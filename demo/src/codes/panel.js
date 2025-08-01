export const base_html =
  `<!-- HTML -->\n` +
  `<div class="be-panel">\n` +
  `   <div class="panel-header">\n` +
  `       {header contents}\n` +
  `   </div>\n` +
  `   <div class="panel-contents">\n` +
  `       <div class="contents-wrapper">Contents ...</div>\n` +
  `   </div>\n` +
  `</div>`
export const base_component =
  `// @title: string \n` +
  `// @contents: string \n` +
  `<BePanel title={title} contents={contents ...}></BePanel>`
export const contents =
  `// HTML \n` +
  `<div class="be-panel">\n` +
  `   <div class="panel-header">\n` +
  `       {header contents}\n` +
  `   </div>\n` +
  `   <div class="panel-content">\n` +
  `       <div class="content-wrapper">\n` +
  `           <div class="content-head">Header</div>\n` +
  `           <div class="content-body">Body ... </div>\n` +
  `           <div class="content-foot">Footer</div>\n` +
  `       </div>\n` +
  `   </div>\n` +
  `</div>\n` +
  `// Component \n` +
  `<BePanel title="title">\n` +
  `   <div class="content-head">Header</div>\n` +
  `   <div class="content-body">Body ... </div>\n` +
  `   <div class="content-foot">Footer</div>\n` +
  `</BePanel>`
export const border =
  `// @border: Boolean \n` +
  `// default: false \n\n` +
  `<BePanel title="title" contents="contents ..." border></BePanel>`
export const collapse =
  `// @collapse: Boolean \n` +
  `// @open: Boolean \n` +
  `// default: false \n\n` +
  `<BePanel title="title" contents="contents ..."\n` +
  `   toggleIcon="xi-icon-toggle" // default: xi-angle-down\n` +
  `   collapse\n` +
  `   open={open}\n` +
  `   maxLine={number} // default: 5\n` +
  `></BePanel>`
export const special_html =
  `<!-- HTML(details-summary) -->\n` +
  `<details class="be-panel">\n` +
  `   <summary class="panel-header">\n` +
  `       {header contents}\n` +
  `   </summary>\n` +
  `   <div class="panel-content">\n` +
  `       <div class="content -wrapper">Contents ...</div>\n` +
  `   </div>\n` +
  `</details>`
