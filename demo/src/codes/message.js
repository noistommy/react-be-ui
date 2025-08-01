export const base_html =
  `<!-- <div></div> 태그 사용 -->\n` +
  `<div class="be-message">\n` +
  `   <div class="title" >Title</div>\n` +
  `   <div class="contents" >content...</div>\n` +
  `</div>`
export const base_component = `<BeMessage title="Title" contents="contents ..." :icon="true"></BeMessage>`
export const status =
  `// @state: {success | error | info | attention | importance}\n\n` +
  `<BeMessage title="Title" contents="contents ..." state="{state}"></BeMessage>`
export const icon =
  `// @icon: String  \n` +
  `// state가 적용 되었을떄 각 state에 해당하는 icon이 적용 \n\n` +
  `<BeMessage title="Title" contents="contents ..." icon="{icon}"></BeMessage>`
export const msg_group =
  `// only HTML \n` +
  `<div class="be-messages">\n` +
  `   <BeMessage title="Title1" contents="contents ..." icon="{icon}" selected></BeMessage>\n` +
  `   <BeMessage title="Title2" contents="contents ..." icon="{icon}"></BeMessage>\n` +
  `   <BeMessage title="Title3" contents="contents ..." icon="{icon}" disabled></BeMessage>\n` +
  `</div>`
export const msg_group_list =
  `//  only HTML \n` +
  `<div class="be-messages">\n` +
  `   <BeMessage title="Title1" contents="contents ..." icon="{icon}" selected></BeMessage>\n` +
  `   <BeMessage title="Title2" contents="contents ..." icon="{icon}"></BeMessage>\n` +
  `   <BeMessage title="Title3" contents="contents ..." icon="{icon}" disabled></BeMessage>\n` +
  `</div>`
