export const dataSet =
  `//  options data set \n` +
  `const optionList = [\n` +
  `   { id: 1, option: 'option1', icon: 'xi-icon', val: 'value1' }\n` +
  `   { id: 2, option: 'option2', icon: 'xi-icon', val: 'value2' }\n` +
  `   { id: 3, option: 'option3', icon: 'xi-icon', val: 'value3' }\n` +
  `   ...\n` +
  `]\n` +
  `// id는 는 필수값은 아닙니다.\n` +
  `// option, val는 필수값입니다.\n` +
  `// key (option)은 기본값입니다. 사용자 데이터에 맞게 지정 가능합니다.`
export const base_component =
  `// const optionList = [] \n` +
  `// option: {id, option, icon, val} \n\n` +
  `<BeSelectBox options={optionList}></BeSelectBox>`
export const multiple =
  `// @multiple: Boolean \n` +
  `// default: false \n\n` +
  `<BeSelectBox multiple></BeSelectBox>`
export const use_all =
  `// @isAll: Boolean \n` +
  `// multiple일때 \n` +
  `// default: false \n\n` +
  `<BeSelectBox multiple isAll></BeSelectBox>`
export const filtering =
  `// @isSearch: Boolean \n` +
  `// default: false \n\n` +
  `<BeSelectBox isSearch></BeSelectBox>`
export const dropdown_type =
  `// @boxType: dropdown \n` +
  `// default: dropdown \n\n` +
  `<BeSelectBox boxType="dropdown"></BeSelectBox>`
export const float_type =
  `// @boxType: float \n` +
  `// default: dropdown \n\n` +
  `<BeSelectBox boxType="float"></BeSelectBox>`
export const selected_type =
  `// @selectedType: String \n` +
  `// reference: List Component \n` +
  `// default: false \n\n` +
  `<BeSelectBox selectedType="selectedType"></BeSelectBox>`
export const use_icon =
  `// @useIcon: Boolean \n` +
  `// default: false \n\n` +
  `<BeSelectBox useIcon></BeSelectBox>`
export const placeholder =
  `// @placeholder: String \n` +
  `// default: false \n\n` +
  `<BeSelectBox placeholder={placeholder}></BeSelectBox>`
export const compact =
  `// @compact: String \n` +
  `// default: false \n\n` +
  `<BeSelectBox compact></BeSelectBox>`
export const customHeight =
  `// @maxOptHeight: String \n` +
  `// default: null \n\n` +
  `<BeSelectBox maxOptHeight={maxOptHeight}></BeSelectBox>`
export const custom_option =
  `// @optionKey: String \n` +
  `// default: 'option' \n\n` +
  `<BeSelectBox optionKey={optionKey}></BeSelectBox>`
export const custom_result =
  `// @resultKey: String \n` +
  `// default: 'null' \n\n` +
  `<BeSelectBox resultKey={resultKey}></BeSelectBox>`
export const event =
  `// event: onSelect \n` +
  `<BeSelectBox onSelect="setSelect"></BeSelectBox>`
export const round =
  `// @round: Boolean \n` +
  `// default: false \n\n` +
  `<BeSelectBox round></BeSelectBox>`
export const fluid =
  `// @fluid: Boolean \n` +
  `// default: false \n\n` +
  `<BeSelectBox fluid></BeSelectBox>`
export const disabled =  
  `// @disabled: Boolean \n` +
  `// default: false \n\n` +
  `<BeSelectBox disabled></BeSelectBox>` 