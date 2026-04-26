export const base_html =
`<!-- <div></div> 태그 사용 --> 
<div class="be-input"> 
   <input type="text" placeholder="입력하세요" /> 
</div>`
export const base_component =
`// component  
<BeInput value={value} onChange={handleChange}></BeInput>`
export const disabled =
`// @disabled: Boolean  
// default: false  
// html  
<div class="be-input disabled"> 
   <input type="text" placeholder="입력하세요" disabled /> 
</div> 
// component  
<BeInput disabled value={value} onChange={handleChange}></BeInput>`
export const readonly =
`// @readonly: Boolean  
// default: false  
// html  
<div class="be-input readonly"> 
   <input type="text" placeholder="입력하세요" readonly /> 
</div> 
// component  
<BeInput readonly value={value} onChange={handleChange}></BeInput>`
export const underline =
`// @underline: Boolean  
// default: false  
// html  
<div class="be-input underline"> 
   <input type="text" placeholder="입력하세요" /> 
</div> 
// component  
<BeInput underline value={value} onChange={handleChange}></BeInput>`
export const transparent =
`// @transparent: Boolean  
// default: false  
// html  
<div class="be-input transparent"> 
   <input type="text" placeholder="입력하세요" /> 
</div> 
// component  
<BeInput transparent value={value} onChange={handleChange}></BeInput>`
export const compact =
`// @compact: Boolean  
// default: false  
// html  
<div class="be-input compact"> 
   <input type="text" placeholder="입력하세요" /> 
</div> 
// component  
<BeInput compact value={value} onChange={handleChange}></BeInput>`
export const edit =
`// @edit: Boolean  
// @editMode: Boolean  
// default: false  
// html  
<div class="be-input edit {editable}"> 
   <input type="text" placeholder="입력하세요" /> 
</div> 
// component  
<BeInput edit editMode={true || false} value={value} onChange={handleChange}></BeInput>`
export const status =
`// @status: success || danger || info || attention || importance  
// html  
<div class="be-input {status}"> 
   <input type="text" placeholder="입력하세요" /> 
</div> 
// component  
<BeInput status="{status}" value={value} onChange={handleChange}></BeInput>`
export const fluid =
`// @fluid: Boolean  
// default: false  
// html  
<div class="be-input fluid"> 
   <input type="text" placeholder="입력하세요" /> 
</div> 
// component  
<BeInput fluid value={value} onChange={handleChange}></BeInput>`
export const unit =
`// @unit: String  
// default: false  
// html  
<div class="be-input unit" data-unit="{unit}"> 
   <input type="text" placeholder="입력하세요" /> 
</div> 
// component  
<BeInput unit="{unit}" value={value} onChange={handleChange}></BeInput>`
export const icon =
`// @icon-left: String  
// @icon-right: String  
// default: false  
// html  
<div class="be-input icon left"> 
   <i class="icon xi-icon-left" /> 
   <input type="text" placeholder="입력하세요" /> 
</div> 
<div class="be-input icon right"> 
   <input type="text" placeholder="입력하세요" /> 
   <i class="icon xi-icon-right" /> 
</div> 
<div class="be-input icon both"> 
   <i class="icon xi-icon-left" /> 
   <input type="text" placeholder="입력하세요" /> 
   <i class="icon xi-icon-right" /> 
</div> 
// component  
<BeInput   
  iconLeft={iconLeft}  
  iconRight={iconRight}  
  value={value} onChange={handleChange}  
></BeInput>`
export const clearIcon =
`// @clear: Boolean  
// default: false  
//only component  
<BeInput clear value={value} onChange={handleChange}></BeInput>`
export const badge =
`// @badge: String  
// @badgeOption: Object  
// default: null  
// html  
<div class="be-input badge"> 
   <input type="text" placeholder="입력하세요" /> 
   <span class="be-badge {badgeOption}">{badge}</span> 
</div> 
// component  
<BeInput  
  badge={badge}  
  badgeOption={badgeOption}  
  value={value} onChange={handleChange}  
></BeInput>`
export const label =
`// @label: String  
// default: null  
// html  
<div class="be-input label left"> 
   <label>{label}</label> 
   <input type="text" placeholder="입력하세요" /> 
</div> 
<div class="be-input label right"> 
   <input type="text" placeholder="입력하세요" /> 
   <label>{label}</label> 
</div> 
// component  
<BeInput labeled={{  
   pos:{left | right},   
   contents: {contents}   
}} />  
<BeInput labeled>  
   <label>{label}</label> 
   value={value} onChange={handleChange}  
</BeInput>`
export const button =
`// @button: String  
// @buttonOption: Object { pos, option, contents}  
// default: null  
// html  
<div class="be-input button left"> 
   <button class="be-button {buttonOption.option}">{button}</button> 
   <input type="text" placeholder="입력하세요" /> 
</div> 
<div class="be-input button right"> 
   <input type="text" placeholder="입력하세요" /> 
   <button class="be-button {buttonOption.option}">{button}</button> 
</div> 
// component  
<BeInput button={{  
   pos:{left | right},   
   option: {option}, // 'primary', 'red'   
   contents: {contents}   
}} />  
<BeInput button>  
   <BeButton contentsText={button}></BeButton> 
   value={value} onChange={handleChange}  
</BeInput>`
export const textarea =
`// @type: input || textarea  
// default: input  
// html  
<div class="be-input"> 
   <textarea type="text" placeholder="입력하세요" /> 
</div> 
<div class="be-input short"> 
   <textarea type="text" placeholder="입력하세요" /> 
</div> 
// component  
<BeInput type="textarea" short={true | false} value={value} onChange={handleChange}></BeInput> 
<BeInput>  
   <textarea type="text" placeholder="입력하세요" /> 
   value={value} onChange={handleChange}  
</BeInput>
`