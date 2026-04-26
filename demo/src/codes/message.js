export const base_html =
`<!-- <div></div> 태그 사용 --> 
<div class="be-message"> 
   <div class="title" >Title</div> 
   <div class="contents" >content...</div> 
</div>`
export const base_component = 
`<BeMessage title="Title" contents="contents ..." :icon="true"></BeMessage>`
export const status =
`// @state: {success | error | info | attention | importance} 
<BeMessage title="Title" contents="contents ..." state="{state}"></BeMessage>`
export const icon =
`// @icon: String   
// state가 적용 되었을떄 각 state에 해당하는 icon이 적용  
<BeMessage title="Title" contents="contents ..." icon="{icon}"></BeMessage>`
export const msg_group =
`// only HTML  
<div class="be-messages"> 
   <BeMessage title="Title1" contents="contents ..." icon="{icon}" selected></BeMessage> 
   <BeMessage title="Title2" contents="contents ..." icon="{icon}"></BeMessage> 
   <BeMessage title="Title3" contents="contents ..." icon="{icon}" disabled></BeMessage> 
</div>`
export const msg_group_list =
`//  only HTML  
<div class="be-messages"> 
   <BeMessage title="Title1" contents="contents ..." icon="{icon}" selected></BeMessage> 
   <BeMessage title="Title2" contents="contents ..." icon="{icon}"></BeMessage> 
   <BeMessage title="Title3" contents="contents ..." icon="{icon}" disabled></BeMessage> 
</div>`
