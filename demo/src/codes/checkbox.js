export const base_html =
`<!-- 반드시 <label></label> 과 input name 작성할것-->
<label for="checkbox" class="be-checkbox">
  <input type="checkbox" name="checkbox" />
</label>`
export const base_component =
`// Component
<BeCheckbox>
   name="checkbox"
   type={type}
   checkText={checkText}
   checked={inputValue}>
</BeCheckbox>`
export const type =
`// @type: {checkbox | radio} 
// default: checkbox 
<BeCheckbox name="checkbox" type={type}></BeCheckbox>`
export const event =
`// handleChange: onChange() 
// return: name, value 
<BeCheckbox name="checkbox" onChange={handleChange}></BeCheckbox>`
export const indeter =
`// @indeter: Boolean 
// default: false 
// html 
<div class="be-checkbox indeter">
    <input type="checkbox" name="checkbox" />
    <label for="checkbox" type="checkbox" />
</div>
// component 
<BeCheckbox name="checkbox" indeter></BeCheckbox>`

export const checkbox_group =
`// const checkboxList = [{name, label}] 
// const checked = [name] 
<BeCheckboxGroup 
    checkList={checkboxList}
    checkedList={checked} 
    onChange={() => handleChange(checkList)} 
></BeCheckboxGroup>`
export const radios =
`// const radioList = [{name, label}] 
// const selected = [name] 
<BeRadios 
    radioList={radioList}
    selectedValue={selected} 
    group={group} 
    onChange={() => handleChange(selected)} 
></BeRadios>`
