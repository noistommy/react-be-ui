export const base_component = 
`<BeCaledar />`
export const border =
`<!-- @border: Boolean -->
<!-- default: false -->
<BeCaledar border></BeCaledar>`
export const symmetry =
`<!-- @symmetry: Boolean -->
<!-- default: false -->
<BeCaledar symmetry></BeCaledar>`
export const today =
`<!-- @today: Boolean -->
<!-- default: false -->
<BeCaledar today></BeCaledar>`
export const datePicker =
`<!-- @userDate: String (YYYY-MM-DD) -->
<!-- default: null -->
<BeDatePicker :selected-date="userDate" @select="selectedDate"></BeDatePicker>
`