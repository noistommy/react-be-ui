export const base_html =
  `<!-- Parent element 내부에 사용 -->\n` +
  `<div class="parent-element">\n` +
  `   ...\n` +
  `   <div class="be-badge">N</div>\n` +
  `</div>`
export const base_component =
  `// Parent element 내부에 사용 \n` +
  `<div class="parent-element">\n` +
  `   ...\n` +
  `   <BeBadge>N</BeBadge>\n` +
  `</div>`
export const mark =
  `// @mark: Boolean \n` +
  `// default: false \n\n` +
  `// html \n` +
  `<div class="parent-element">\n` +
  `   ...\n` +
  `   <div class="be-badge mark"></div>\n` +
  `</div> \n` +
  `// component \n` +
  `<div class="parent-element">\n` +
  `   ...\n` +
  `   <BeBadge mark></BeBadge>\n` +
  `</div>`
export const shadow =
  `// @shadow: Boolean \n` +
  `// default: true \n\n` +
  `// html \n` +
  `<div class="parent-element">\n` +
  `   ...\n` +
  `   <div class="be-badge shadow"></div>\n` +
  `</div> \n` +
  `// component \n` +
  `<div class="parent-element">\n` +
  `   ...\n` +
  `   <BeBadge shadow></BeBadge>\n` +
  `</div>`
export const align =
  `// @align: {left | center | right} \n` +
  `// default: center \n\n` +
  `// html \n` +
  `<div class="parent-element">\n` +
  `   ...\n` +
  `   <div class="be-badge align-{align}"></div>\n` +
  `</div> \n` +
  `// component \n` +
  `<div class="parent-element">\n` +
  `   ...\n` +
  `   <BeBadge align={align}>A</BeBadge>\n` +
  `</div>`
export const color =
  `// @color: String \n` +
  `// default: null \n\n` +
  `// html \n` +
  `<div class="parent-element">\n` +
  `   ...\n` +
  `   <div class="be-badge {color}"></div>\n` +
  `</div> \n` +
  `// component \n` +
  `<div class="parent-element">\n` +
  `   ...\n` +
  `   <BeBadge color={color}>C</BeBadge>\n` +
  `</div>`
