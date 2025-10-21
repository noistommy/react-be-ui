const e=`<!-- 반드시 <label></label> 과 input name 작성할것-->
<div class="be-checkbox">
   <input type="checkbox" name="checkbox" />
   <label for="checkbox" type="checkbox" />
</div>`,n=`// Component
<BeCheckbox>
   name="checkbox"
   type={type}
   checkText={checkText}
   checked={inputValue}>
</BeCheckbox>`,c=`// @type: {checkbox | radio} 
// default: checkbox 

<BeCheckbox name="checkbox" type={type}></BeCheckbox>`,o=`// handleChange: onChange() 
// return: name, value 

<BeCheckbox name="checkbox" onChange={handleChange}></BeCheckbox>`,a=`// @indeter: Boolean 
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
 ></BeRadios>`;export{n as a,e as b,t as c,o as e,a as i,h as r,c as t};
