export const base_html =
`<!-- HTML --> 
<div class="be-panel"> 
   <div class="panel-header"> 
       {header contents} 
   </div> 
   <div class="panel-contents"> 
       <div class="contents-wrapper">Contents ...</div> 
   </div> 
</div>`
export const base_component =
`// @title: string  
// @contents: string  
<BePanel title={title} contents={contents ...}></BePanel>`
export const contents =
`// HTML  
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
</BePanel>`
export const border =
`// @border: Boolean  
// default: false  
<BePanel title="title" contents="contents ..." border></BePanel>`
export const collapse =
`// @collapse: Boolean  
// @open: Boolean  
// default: false  
<BePanel title="title" contents="contents ..." 
   toggleIcon="xi-icon-toggle" // default: xi-angle-down 
   collapse 
   open={open} 
   maxLine={number} // default: 5 
></BePanel>`
export const collapseToggle =
`// @toggleIcon: String | SVGSVGElement  
// @iconPos: 'left | right | null'  
// default: 'xi-angle-down'  
<!-- xi-icons classname icon --> 
<BePanel toggleIcon="xi-icon-toggle" iconPos={iconPos}>...</BePanel> 
<!-- or --> 
<!-- components icon --> 
<BePanel toggleIcon={<ComponentsIcon />} iconPos={iconPos}>...</BePanel>`

export const special_html =
`<!-- HTML(details-summary) --> 
<details class="be-panel"> 
   <summary class="panel-header"> 
       {header contents} 
   </summary> 
   <div class="panel-content"> 
       <div class="content -wrapper">Contents ...</div> 
   </div> 
</details>`
