export const dataSet =
  `//  options data set \n` +
  `const optionList = [\n` +
  `   { id: 1, option: 'option1', icon: 'xi-icon' }\n` +
  `   { id: 2, option: 'option2', icon: 'xi-icon' }\n` +
  `   { id: 3, option: 'option3', icon: 'xi-icon' }\n` +
  `   ...\n` +
  `]\n` +
  `//option (+sub) data set \n` +
  `const optionSubList = [\n` +
  `   { id: 1, option: 'option1', icon: 'xi-icon', sub: 'sub-option1' }\n` +
  `   { id: 2, option: 'option2', icon: 'xi-icon', sub: 'sub-option2' }\n` +
  `   { ... ... }\n` +
  `]\n` +
  `// id는 는 필수값은 아닙니다.\n` +
  `// key (option)은 기본값입니다. 사용자 데이터에 맞게 지정 가능합니다.`
export const base_component =
  `// script setup \n` +
  `// const optionList = [] \n` +
  `<BeList options={optionList}></BeList>`
export const selection =
  `// @selection: Boolean \n` +
  `// @selectedType: {mark | bg | mark bg | bg text | bg text mark} \n` +
  `// default: false \n\n` +
  `<BeList options={optionList} selection selectedType={selectedType}></BeList>`
export const sub_title =
  `// script setup \n` +
  `// const optionSubList = [] \n` +
  `//  optionItem: { id: 1, option: 'option1', sub: 'sub-option1' } \n` +
  `<BeList options={optionSubList}></BeList>`
export const icon =
  `// @icon: Boolean \n` +
  `// default: false \n\n` +
  `// optionItem: { id: 1, option: 'option1', icon: 'xi-icon-name' } \n` +
  `<BeList options={optionList} icon></BeList>`
export const border =
  `// @border: Boolean \n` +
  `// default: false \n\n` +
  `<BeList options={optionList} border></BeList>`
export const image =
  `// @image: Boolean \n` +
  `//  optionItem: { id: 1, option: 'option1', image: 'img_url' } \n` +
  `// default: false \n\n` +
  `<BeList options={optionList} image></BeList>`
