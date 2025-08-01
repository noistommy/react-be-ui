export const base_html =
  `<!-- 반드시 <label></label> 과 input name 작성할것-->\n` +
  `<div class="be-checkbox">\n` +
  `   <input type="checkbox" name="checkbox" />\n` +
  `   <label for="checkbox" type="checkbox" />\n` +
  `</div>`
export const base_component =
  `// script setup \n` +
  `// const inputValue = ref(null) \n` +
  `<BeCheckbox v-model="inputValue" name="checkbox" label-text="{labelText}"></BeCheckbox>`
export const type =
  `// @type: {checkbox | radio} \n` +
  `// default: checkbox \n\n` +
  `<BeCheckbox v-model="inputValue" name="checkbox" type="{type}"></BeCheckbox>`
export const indeter =
  `// @indet: Boolean \n` +
  `// default: false \n\n` +
  `// html \n` +
  `<div class="be-checkbox indeter">\n` +
  `   <input type="checkbox" name="checkbox" />\n` +
  `   <label for="checkbox" type="checkbox" />\n` +
  `</div>\n` +
  `// component \n` +
  `<BeCheckbox v-model="inputValue" name="checkbox" indeter"></BeCheckbox>`

export const checkbox_group =
  `// const checkboxList = [{name, label}] \n` +
  `// const checked = [name] \n` +
  `<BeCheckboxGroup\n ` +
  `   checkList={checkboxList}\n` +
  `   checkedList={checked}\n ` +
  `   onChange={() => handleChange(checkList)}\n ` +
  `></BeCheckboxGroup>`
export const radios =
  `// const radioList = [{name, label}] \n` +
  `// const selected = [name] \n` +
  `<BeRadios\n ` +
  `   radioList={radioList}\n` +
  `   selectedValue={selected}\n ` +
  `   group={group}\n ` +
  `   onChange={() => handleChange(selected)}\n ` +
  `></BeRadios>`
