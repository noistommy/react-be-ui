export const base_html =
`<div class="be-tabs"> 
   <div class="tab-menu"> 
       <div class="tab-item">tab1</div> 
       <div class="tab-item">tab2</div> 
       <div class="tab-item">...</div> 
   </div> 
   <div class="tab-contants"> 
       tab contents 
   </div> 
</div>`
export const base_component =
`// const tabList = [{option, ...}]  
// import {Slot} from 'react-be-ui'  
//   
<BeTabs tabList={tabList} > 
   <Slot name="contents">{selectedTab}</Slot> 
</BeTabs>`
export const vertical =
`// @vertical: Boolean  
// default: false  
<BeTabs tabList={tabList}  vertical>...</BeTabs>`
export const tab_type_line =
`// @tabType: { line | button | browser }  
// tabType: line  
<BeTabs tabList={tabList} tabType="line">...</BeTabs>`
export const tab_type_button =
`// @tabType: { line | button | browser }  
// tabType: button  
<BeTabs tabList={tabList} tabType="button">{{ tabContants }}</BeTabs>`