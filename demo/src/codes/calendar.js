export const base_component = `<BeCaledar />`
export const border =
  `<!-- @border: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeCaledar border></BeCaledar>`
export const symmetry =
  `<!-- @symmetry: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeCaledar symmetry></BeCaledar>`
export const today =
  `<!-- @today: Boolean -->\n` +
  `<!-- default: false -->\n\n` +
  `<BeCaledar today></BeCaledar>`
export const datePicker =
  `<!-- @userDate: String (YYYY-MM-DD) -->\n` +
  `<!-- default: null -->\n\n` +
  `<BeDatePicker :selected-date="userDate" @select="selectedDate"></BeDatePicker>`
