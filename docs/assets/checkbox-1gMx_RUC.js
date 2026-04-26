const e=`<!-- 반드시 <label></label> 과 input name 작성할것-->
<label for="checkbox" class="be-checkbox">
  <input type="checkbox" name="checkbox" />
</label>`,c=`// Component
<BeCheckbox>
   name="checkbox"
   type={type}
   checkText={checkText}
   checked={inputValue}>
</BeCheckbox>`,o=`// @type: {checkbox | radio} 
// default: checkbox 
<BeCheckbox name="checkbox" type={type}></BeCheckbox>`,a=`// handleChange: onChange() 
// return: name, value 
<BeCheckbox name="checkbox" onChange={handleChange}></BeCheckbox>`,n=`// @indeter: Boolean 
// default: false 
// html 
<div class="be-checkbox indeter">
    <input type="checkbox" name="checkbox" />
    <label for="checkbox" type="checkbox" />
</div>
// component 
<BeCheckbox name="checkbox" indeter></BeCheckbox>`,t=`// const checkboxList = [{name, label}] 
// const checked = [name] 
<BeCheckboxGroup 
    checkList={checkboxList}
    checkedList={checked} 
    onChange={() => handleChange(checkList)} 
></BeCheckboxGroup>`,h=`// const radioList = [{name, label}] 
// const selected = [name] 
<BeRadios 
    radioList={radioList}
    selectedValue={selected} 
    group={group} 
    onChange={() => handleChange(selected)} 
></BeRadios>`;export{c as a,e as b,t as c,a as e,n as i,h as r,o as t};
