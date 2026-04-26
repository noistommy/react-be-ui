export const base_html =
`<!-- html --> 
<div class="be-tag label">Tag</div> 
<div class="be-tag line"></div> 
<div class="be-tag dot"></div>`
export const base_component =
`// component  
<BeTag type="label">Tag(Label)</BeTag> 
<BeTag type="line">Tag(Line)</BeTag> 
<BeTag type="dot">Tag(Dot)</BeTag>`
export const type =
`// html  
<div class="be-tag label">Tag</div> 
<div class="be-tag line"></div> 
<div class="be-tag dot"></div> 
// component  
<BeTag type="label">Tag(Label)</BeTag> 
<BeTag type="line">Tag(Line)</BeTag> 
<BeTag type="dot">Tag(Dot)</BeTag>`
export const kbd =
`// html  
<div class="be-tag kbd meta">shift</div> 
<div class="be-tag kbd meta">ctrl</div> 
<div class="be-tag kbd">z</div> 
// component  
<BeTag type="kbd" isMeta>shift</BeTag> 
<BeTag type="kbd" isMeta>ctrl</BeTag> 
<BeTag type="kbd">z</BeTag>`
export const icon =
`// html  
<div class="be-tag label icon"> 
   <i class="xi-icon-name"></i> 
</div> 
<div class="be-tag label"> 
   <i class="icon left xi-icon-name"></i> 
   Left 
</div> 
<div class="be-tag label icon"> 
   Right 
   <i class="icon right xi-icon-name"></i> 
</div> 
// component  
<BeTag type="label" icon="xi-ixcon-name"></BeTag> 
<BeTag type="label" icon="xi-ixcon-name" iconPos="left">Left</BeTag> 
<BeTag type="label" icon="xi-ixcon-name" iconPos="right">Right</BeTag>`
export const round =
`// html  
<div class="be-tag label round">Round</div> 
// component  
<BeTag type="label" round></BeTag>`
export const pointing =
`// @pointing: Boolean  
// @pointingPos: {up | down | left | right}  
// html  
<div class="be-tag label pointing {pointingPos}">Point</div> 
// component  
<BeTag type="pointing" pointDirect="{pointingPos}">Point</BeTag>`
export const prefix_suffix =
`// @prefix: String 
// @suffix: String 
// html  
<div class="be-tag label prefix"> 
   <span class="detail">{{ prefix }}</span> 
   Tag 
</div> 
<div class="be-tag label suffix"> 
   Tag 
   <span class="detail">{{ suffix }}</span> 
</div> 
// component 
<BeTag type="label" prefix="{prefix}">Tag</BeTag> 
<BeTag type="label" suffix="{suffix}">Tag</BeTag>`
export const tags =
`// only html  
<div class="be-tags"> 
   <div class="be-tag label">A</div> 
   <BeTag type="label">B</BeTag> 
   <div class="be-tag label">C</div> 
</div>`
export const attached_tags =
`// only html  
<div class="be-tags attached"> 
   <div class="be-tag label">A</div> 
   <BeTag type="label">B</BeTag> 
   <div class="be-tag label">C</div> 
</div>`
export const effect =
`// only html  
<div class="be-tags one-of-a-kind"> 
   <div class="be-tag label">A</div> 
   <BeTag type="label">B</BeTag> 
   <div class="be-tag label">C</div> 
</div>`
export const color =
`// @color: String  
// html  
<div class="be-tag label {color}">colors</div> 
// component  
<BeTag type="label" color={color}>Colors</BeTag>`
export const color_light =
`// @color: String  
// @light: Boolean  
// html  
<div class="be-tag label {color} light">colors</div> 
// component  
<BeTag type="label" color={color} light>Colors</BeTag>`
