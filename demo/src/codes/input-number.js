export const base_component =
`//   only component  
//   const inputValue = 0  
<BeInputNumber value={inputValue} onChange={changeEvent}></BeInputNumber>`
export const disabled =
`//   @disabled: Boolean  
//   default: false  
<BeInputNumber value={inputValue} disabled></BeInputNumber>`
export const controller =
`//   @controller: {between | end}  
//   default: between  
<BeInputNumber value={inputValue} controller="{controller}"></BeInputNumber>`
export const min_max =
`//   @min: Number  
//   @max: Number  
//   default: null  
<BeInputNumber value={inputValue} min={min} max={max}></BeInputNumber>`
export const step =
`//   @step: Number  
//   default: null  
<BeInputNumber value={inputValue} step={step}></BeInputNumber>`
export const userIcon =
`//   @decIcon: String  
//   @incIcon: String  
//   default: null  
<BeInputNumber value={inputValue} 
 decIcon={decIcon} incIcon={inc-icon} 
></BeInputNumber>`
export const fluid =
`//   @fluid: Boolean  
//   default: false  
<BeInputNumber value={inputValue} fluid></BeInputNumber>`
export const compact =
`//   @compact: Boolean  
//   default: false  
<BeInputNumber value={inputValue} compact></BeInputNumber>`
export const setWidth =
`//   user custom style: width: 150px  
<BeInputNumber value={inputValue} :style="{ width: '150px' }"></BeInputNumber>`
