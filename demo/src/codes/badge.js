export const base_html =
`<!-- Parent element 내부에 사용 --> 
<div class="parent-element"> 
   ... 
   <div class="be-badge">N</div> 
</div>`
export const base_component =
`// Parent element 내부에 사용  
<div class="parent-element"> 
   ... 
   <BeBadge>N</BeBadge> 
</div>`
export const mark =
`// @mark: Boolean  
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
</div>`
export const shadow =
`// @shadow: Boolean  
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
</div>`
export const align =
`// @align: {left | center | right}  
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
</div>`
export const color =
`// @color: String  
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
</div>`
