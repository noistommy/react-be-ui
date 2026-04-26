export const base_component =
`<!-- Component only --> 
<!-- script setup --> 
<!-- const result = ref() --> 
<BeRate :result-value="result"></BeRate>`
export const rate_length =
`<!--@rateLength: Number --> 
<!--default: 5 --> 
<BeRate :rate-length="rateLength"></BeRate>`
export const use_half =
`<!--@useHalf: Boolean --> 
<!--default: false --> 
<BeRate :use-half="useHalf" :result-value="3.5"></BeRate>`
export const icon =
`<!--@icon: String --> 
<!--default: null --> 
<BeRate icon="xi-icon-name"></BeRate>`
export const size =
`<!--@size: {tiny | small | large | huge | massive} --> 
<!--default: null --> 
<BeRate size="{size}"></BeRate>`
export const color =
`<!--@color: String --> 
<!--default: null --> 
<BeRate color="{color}"></BeRate>`
export const disabled =
`<!--@disabled: Boolean --> 
<!--default: false --> 
<BeRate disabled></BeRate>`
export const border =
`<!--@border: Boolean --> 
<!--default: false --> 
<BeRate border></BeRate>`
export const float = 
`<BeRate :result-value="3.7"></BeRate>`
export const emit = 
`<BeRate @select="setRate"></BeRate>`
