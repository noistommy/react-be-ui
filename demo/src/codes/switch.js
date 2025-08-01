export const base_html =
  `<!-- html -->\n` +
  `<div class="be-switch slide">\n` +
  `   <input type="checkbox" />\n` +
  `   <span class="switch"></span>\n` +
  `</div>\n` +
  `<div class="be-switch slide inside">\n` +
  `   <input type="checkbox" />\n` +
  `   <span class="switch"></span>\n` +
  `</div>`
  
export const base_component =
  `// component \n` +
  `<BeSwitch type="slide" checked></BeSwitch>\n` +
  `<BeSwitch type="slide" inside checked></BeSwitch>`
export const button =
  `// html \n` +
  `<div class="be-switch button">\n` +
  `   <input type="checkbox" />\n` +
  `   <span class="on active"></span>\n` +
  `   <span class="off"></span>\n` +
  `</div>\n` +
  `// component \n` +
  `<BeSwitch type="button" onText="A" offText="B"></BeSwitch>`
export const round =
  `// html \n` +
  `<div class="be-switch slide round">\n` +
  `   <input type="checkbox" />\n` +
  `   <span class="switch"></span>\n` +
  `</div>\n` +
  `// component \n` +
  `<BeSwitch type="slide" round></BeSwitch>`
export const colors =
  `// html \n` +
  `<div class="be-switch slide {color}">\n` +
  `   <input type="checkbox" />\n` +
  `   <span class="switch"></span>\n` +
  `</div>\n` +
  `// component \n` +
  `<BeSwitch type="slide" color={color}></BeSwitch>`
