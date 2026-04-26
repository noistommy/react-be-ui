export const base_html =
`<!-- Html 태그 사용 --> 
<div class="be-segment"> 
   <div class="contents">Contents ... </div> 
</div>`
export const base_component =
`// @contents: String  
<BeSegment>{ contents }</BeSegment>`
export const collapse =
`//@collapse: Boolean  
//default: false  
<BeSegement collapse> contents ... ...</BeSegement>`
export const surface =
`//@surf: Boolean  
//default: false  
<BeSegement surf> contents ... ...</BeSegement>`
export const border =
`//@border: Boolean  
//default: false  
<BeSegement border> contents ... ...</BeSegement>`
export const float =
`//@float: Boolean  
//default: false  
<BeSegement float> contents ... ...</BeSegement>`
export const title =
`//@title: String  
//default: null  
<BeSegement> 
   <BeSegment.Contents title={title}> 
     {contents} 
   </BeSegment.Contents> 
</BeSegment>`
export const attached =
`//@attached: Boolean  
//default: false  
<BeSegement attached={attached}> 
   <BeSegment.Header> 
     {Header contents} 
   </BeSegment.Header> 
   <BeSegment.Contents> 
     {contents} 
   </BeSegment.Contents> 
   <BeSegment.Footer> 
     {Footer contents} 
   </BeSegment.Footer> 
</BeSegment>`

export const align =
`//@align: {left | center | right}  
//default: left  
<BeSegement align={align}> contents ... ...</BeSegement>
export const round =
//@align: {s | m | l | xl}  
//default: left  
<BeSegement round={round}> contents ... ...</BeSegement>
export const segment_group =
//segment group  
//border 적용  
<div class="be-segments border" > 
   <BeSegement> contents ... ...</BeSegement> 
   <BeSegement surf> contents ... ...</BeSegement> 
   <BeSegement> contents ... ...</BeSegement> 
</div>
`