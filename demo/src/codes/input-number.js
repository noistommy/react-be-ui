export const base_component =
  `//   only component \n` +
  `//   const inputValue = 0 \n` +
  `<BeInputNumber value={inputValue} onChange={changeEvent}></BeInputNumber>`
export const disabled =
  `//   @disabled: Boolean \n` +
  `//   default: false \n\n` +
  `<BeInputNumber value={inputValue} disabled></BeInputNumber>`
export const controller =
  `//   @controller: {between | end} \n` +
  `//   default: between \n\n` +
  `<BeInputNumber value={inputValue} controller="{controller}"></BeInputNumber>`
export const min_max =
  `//   @min: Number \n` +
  `//   @max: Number \n` +
  `//   default: null \n\n` +
  `<BeInputNumber value={inputValue} min={min} max={max}></BeInputNumber>`
export const step =
  `//   @step: Number \n` +
  `//   default: null \n\n` +
  `<BeInputNumber value={inputValue} step={step}></BeInputNumber>`
export const userIcon =
  `//   @decIcon: String \n` +
  `//   @incIcon: String \n` +
  `//   default: null \n\n` +
  `<BeInputNumber value={inputValue}\n` +
  ` decIcon={decIcon} incIcon={inc-icon}\n` +
  `></BeInputNumber>`
export const fluid =
  `//   @fluid: Boolean \n` +
  `//   default: false \n\n` +
  `<BeInputNumber value={inputValue} fluid></BeInputNumber>`
export const compact =
  `//   @compact: Boolean \n` +
  `//   default: false \n\n` +
  `<BeInputNumber value={inputValue} compact></BeInputNumber>`
export const setWidth =
  `//   user custom style: width: 150px \n` +
  `<BeInputNumber value={inputValue} :style="{ width: '150px' }"></BeInputNumber>`
