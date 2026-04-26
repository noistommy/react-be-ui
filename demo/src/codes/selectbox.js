export const dataSet =
`//  options data set  
const optionList = [ 
   { id: 1, option: 'option1', icon: 'xi-icon', val: 'value1' } 
   { id: 2, option: 'option2', icon: 'xi-icon', val: 'value2' } 
   { id: 3, option: 'option3', icon: 'xi-icon', val: 'value3' } 
   ... 
] 
// id는 는 필수값은 아닙니다. 
// option, val는 필수값입니다. 
// key (option)은 기본값입니다. 사용자 데이터에 맞게 지정 가능합니다.`
export const base_component =
`// const optionList = []  
// option: {id, option, icon, val}  
<BeSelectBox options={optionList}></BeSelectBox>`
export const multiple =
`// @multiple: Boolean  
// default: false  
<BeSelectBox multiple></BeSelectBox>`
export const use_all =
`// @isAll: Boolean  
// multiple일때  
// default: false  
<BeSelectBox multiple isAll></BeSelectBox>`
export const filtering =
`// @isSearch: Boolean  
// default: false  
<BeSelectBox isSearch></BeSelectBox>`
export const dropdown_type =
`// @boxType: dropdown  
// default: dropdown  
<BeSelectBox boxType="dropdown"></BeSelectBox>`
export const float_type =
`// @boxType: float  
// default: dropdown  
<BeSelectBox boxType="float"></BeSelectBox>`
export const selected_type =
`// @selectedType: String  
// reference: List Component  
// default: false  
<BeSelectBox selectedType="selectedType"></BeSelectBox>`
export const use_icon =
`// @useIcon: Boolean  
// default: false  
<BeSelectBox useIcon></BeSelectBox>`
export const placeholder =
`// @placeholder: String  
// default: false  
<BeSelectBox placeholder={placeholder}></BeSelectBox>`
export const compact =
`// @compact: String  
// default: false  
<BeSelectBox compact></BeSelectBox>`
export const customHeight =
`// @maxOptHeight: String  
// default: null  
<BeSelectBox maxOptHeight={maxOptHeight}></BeSelectBox>`
export const custom_option =
`// @optionKey: String  
// default: 'option'  
<BeSelectBox optionKey={optionKey}></BeSelectBox>`
export const custom_result =
`// @resultKey: String  
// default: 'null'  
<BeSelectBox resultKey={resultKey}></BeSelectBox>`
export const event =
`// event: onSelect  
<BeSelectBox onSelect="setSelect"></BeSelectBox>`
export const round =
`// @round: Boolean  
// default: false  
<BeSelectBox round></BeSelectBox>`
export const fluid =
`// @fluid: Boolean  
// default: false  
<BeSelectBox fluid></BeSelectBox>`
export const disabled =  
`// @disabled: Boolean  
// default: false  
<BeSelectBox disabled></BeSelectBox> `