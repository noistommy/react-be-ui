export const dataSet =
`//  options data set 
const optionList = [
   { id: 1, option: 'option1', icon: 'xi-icon' }
   { id: 2, option: 'option2', icon: 'xi-icon' }
   { id: 3, option: 'option3', icon: 'xi-icon' }
   ...
]
//option (+sub) data set 
const optionSubList = [
   { id: 1, option: 'option1', icon: 'xi-icon', sub: 'sub-option1' }
   { id: 2, option: 'option2', icon: 'xi-icon', sub: 'sub-option2' }
   { ... ... }
]
// id는 는 필수값은 아닙니다.
// key (option)은 기본값입니다. 사용자 데이터에 맞게 지정 가능합니다.`
export const base_component =
`// script setup 
// const optionList = [] 
<BeList options={optionList}></BeList>`
export const selection =
`// @selection: Boolean 
// @selectedType: {mark | bg | mark bg | bg text | bg text mark} 
// default: false \n
<BeList options={optionList} selection selectedType={selectedType}></BeList>`
export const sub_title =
`// script setup 
// const optionSubList = [] 
//  optionItem: { id: 1, option: 'option1', sub: 'sub-option1' } 
<BeList options={optionSubList}></BeList>`
export const icon =
`// @icon: Boolean 
// default: false \n
// optionItem: { id: 1, option: 'option1', icon: 'xi-icon-name' } 
<BeList options={optionList} icon></BeList>`
export const border =
`// @border: Boolean 
// default: false \n
<BeList options={optionList} border></BeList>`
export const image =
`// @image: Boolean 
//  optionItem: { id: 1, option: 'option1', image: 'img_url' } 
// default: false \n
<BeList options={optionList} image></BeList>`
