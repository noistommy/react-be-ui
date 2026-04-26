export const base_html =
`<!-- <div></div> 태그 사용 --> 
<div class="be-card"> 
   <div class="contents">Contents ... </div> 
</div>`
export const base_component =
`// import {Slot} from 'react-be-ui'  
<BeCard> 
   <Slot name="contents">{{ contents }}</Slot> 
</BeCard> 
// or  
<BeCard> 
   <div className="contents">{{ contents }}</div> 
</BeCard>`
export const title =
`// @title: String  
// default: null  
<BeCard title={title}> 
   <Slot name="contents">{{ contents }}</Slot> 
</BeCard>`
export const image =
`// @image: Boolean, Object  
// default: null  
// image: { src, alt }  
//  slot image  
<BeCard > 
   <Slot name="image"> 
       <img src="{src}" alt="{alt}" /> 
   </Slot> 
   ... ... 
</BeCard>`
export const extra =
`// @extra: Boolean  
// default: false  
//  slot extra  
<BeCard> 
   ... ... 
   <Slot name="extra"> 
       {extra_contents} 
   </Slot> 
</BeCard>`
export const attached =
`// @attached: Boolean  
// default: false  
//  slot header & footer  
<BeCard> 
   <Slot name="header"> 
       {header_contents} 
   </Slot> 
   ... ... 
   <Slot name="footer"> 
       {footer_contents} 
   </Slot> 
</BeCard>
export const border =
// @border: Boolean  
// default: true  
<BeCard border={border}> 
   <Slot name="contents">{{ contents }}</Slot> 
</BeCard>`
export const float =
`// @float: Boolean  
// default: false  
<BeCard float={float}> 
   <Slot name="contents">{{ contents }}</Slot> 
</BeCard>
export const round =
// @round: String (s | m | l | xl)  
// default: m  
<BeCard round={round}> 
   <Slot name="contents">{{ contents }}</Slot> 
</BeCard>`
export const cards =
`// only html  
<div class="be-cards"> 
   <BeCard >...</BeCard> 
   <BeCard >...</BeCard> 
   <BeCard >...</BeCard> 
</div>
`