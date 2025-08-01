export const base_component =
  `<!-- Component only -->\n` +
  `<!-- script setup -->\n` +
  `<!-- const result = ref() -->\n` +
  `<BeRate :result-value="result"></BeRate>`
export const rate_length =
  `<!--@rateLength: Number -->\n` +
  `<!--default: 5 -->\n\n` +
  `<BeRate :rate-length="rateLength"></BeRate>`
export const use_half =
  `<!--@useHalf: Boolean -->\n` +
  `<!--default: false -->\n\n` +
  `<BeRate :use-half="useHalf" :result-value="3.5"></BeRate>`
export const icon =
  `<!--@icon: String -->\n` +
  `<!--default: null -->\n\n` +
  `<BeRate icon="xi-icon-name"></BeRate>`
export const size =
  `<!--@size: {tiny | small | large | huge | massive} -->\n` +
  `<!--default: null -->\n\n` +
  `<BeRate size="{size}"></BeRate>`
export const color =
  `<!--@color: String -->\n` +
  `<!--default: null -->\n\n` +
  `<BeRate color="{color}"></BeRate>`
export const disabled =
  `<!--@disabled: Boolean -->\n` +
  `<!--default: false -->\n\n` +
  `<BeRate disabled></BeRate>`
export const border =
  `<!--@border: Boolean -->\n` +
  `<!--default: false -->\n\n` +
  `<BeRate border></BeRate>`
export const float = `<BeRate :result-value="3.7"></BeRate>`
export const emit = `<BeRate @select="setRate"></BeRate>`
