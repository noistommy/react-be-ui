const e=`<!-- 반드시 <label></label> 과 input name 작성할것-->
<div class="be-checkbox">
   <input type="checkbox" name="checkbox" />
   <label for="checkbox" type="checkbox" />
</div>`,n=`// script setup 
// const inputValue = ref(null) 
<BeCheckbox v-model="inputValue" name="checkbox" label-text="{labelText}"></BeCheckbox>`,c=`// @type: {checkbox | radio} 
// default: checkbox 

<BeCheckbox v-model="inputValue" name="checkbox" type="{type}"></BeCheckbox>`,o=`// @indet: Boolean 
// default: false 

// html 
<div class="be-checkbox indeter">
   <input type="checkbox" name="checkbox" />
   <label for="checkbox" type="checkbox" />
</div>
// component 
<BeCheckbox v-model="inputValue" name="checkbox" indeter"></BeCheckbox>`,t=`// const checkboxList = [{name, label}] 
// const checked = [name] 
<BeCheckboxGroup
    checkList={checkboxList}
   checkedList={checked}
    onChange={() => handleChange(checkList)}
 ></BeCheckboxGroup>`,a=`// const radioList = [{name, label}] 
// const selected = [name] 
<BeRadios
    radioList={radioList}
   selectedValue={selected}
    group={group}
    onChange={() => handleChange(selected)}
 ></BeRadios>`;export{n as a,e as b,t as c,o as i,a as r,c as t};
