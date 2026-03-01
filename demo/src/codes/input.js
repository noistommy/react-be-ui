export const base_html =
  `<!-- <div></div> 태그 사용 -->\n` +
  `<div class="be-input">\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `</div>`
export const base_component =
  `// component \n` +
  `<BeInput value={value} onChange={handleChange}></BeInput>`
export const disabled =
  `// @disabled: Boolean \n` +
  `// default: false \n\n` +
  `// html \n` +
  `<div class="be-input disabled">\n` +
  `   <input type="text" placeholder="입력하세요" disabled />\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput disabled value={value} onChange={handleChange}></BeInput>`
export const readonly =
  `// @readonly: Boolean \n` +
  `// default: false \n\n` +
  `// html \n` +
  `<div class="be-input readonly">\n` +
  `   <input type="text" placeholder="입력하세요" readonly />\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput readonly value={value} onChange={handleChange}></BeInput>`
export const underline =
  `// @underline: Boolean \n` +
  `// default: false \n\n` +
  `// html \n` +
  `<div class="be-input underline">\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput underline value={value} onChange={handleChange}></BeInput>`
export const transparent =
  `// @transparent: Boolean \n` +
  `// default: false \n\n` +
  `// html \n` +
  `<div class="be-input transparent">\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput transparent value={value} onChange={handleChange}></BeInput>`
export const compact =
  `// @compact: Boolean \n` +
  `// default: false \n\n` +
  `// html \n` +
  `<div class="be-input compact">\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput compact value={value} onChange={handleChange}></BeInput>`
export const edit =
  `// @edit: Boolean \n` +
  `// @editMode: Boolean \n` +
  `// default: false \n\n` +
  `// html \n` +
  `<div class="be-input edit {editable}">\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput edit editMode={true || false} value={value} onChange={handleChange}></BeInput>`
export const status =
  `// @status: success || danger || info || attention || importance \n\n` +
  `// html \n` +
  `<div class="be-input {status}">\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput status="{status}" value={value} onChange={handleChange}></BeInput>`
export const fluid =
  `// @fluid: Boolean \n` +
  `// default: false \n\n` +
  `// html \n` +
  `<div class="be-input fluid">\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput fluid value={value} onChange={handleChange}></BeInput>`
export const unit =
  `// @unit: String \n` +
  `// default: false \n\n` +
  `// html \n` +
  `<div class="be-input unit" data-unit="{unit}">\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput unit="{unit}" value={value} onChange={handleChange}></BeInput>`
export const icon =
  `// @icon-left: String \n` +
  `// @icon-right: String \n` +
  `// default: false \n\n` +
  `// html \n` +
  `<div class="be-input icon left">\n` +
  `   <i class="icon xi-icon-left" />\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `</div>\n` +
  `<div class="be-input icon right">\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `   <i class="icon xi-icon-right" />\n` +
  `</div>\n` +
  `<div class="be-input icon both">\n` +
  `   <i class="icon xi-icon-left" />\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `   <i class="icon xi-icon-right" />\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput \n ` +
  `  iconLeft={iconLeft}\n ` +
  `  iconRight={iconRight}\n ` +
  `  value={value} onChange={handleChange}\n ` +
  `></BeInput>`
export const clearIcon =
  `// @clear: Boolean \n` +
  `// default: false \n\n` +
  `//only component \n` +
  `<BeInput clear value={value} onChange={handleChange}></BeInput>`
export const badge =
  `// @badge: String \n` +
  `// @badgeOption: Object \n` +
  `// default: null \n\n` +
  `// html \n` +
  `<div class="be-input badge">\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `   <span class="be-badge {badgeOption}">{badge}</span>\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput\n ` +
  `  badge={badge}\n ` +
  `  badgeOption={badgeOption}\n ` +
  `  value={value} onChange={handleChange}\n ` +
  `></BeInput>`
export const label =
  `// @label: String \n` +
  `// default: null \n\n` +
  `// html \n` +
  `<div class="be-input label left">\n` +
  `   <label>{label}</label>\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `</div>\n` +
  `<div class="be-input label right">\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `   <label>{label}</label>\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput labeled={{\n ` +
  `   pos:{left | right}, \n ` +
  `   contents: {contents} \n ` +
  `}} />\n ` +
  `<BeInput labeled>\n ` +
  `   <label>{label}</label>\n` +
  `   value={value} onChange={handleChange}\n ` +
  `</BeInput>`
export const button =
  `// @button: String \n` +
  `// @buttonOption: Object { pos, option, contents} \n` +
  `// default: null \n\n` +
  `// html \n` +
  `<div class="be-input button left">\n` +
  `   <button class="be-button {buttonOption.option}">{button}</button>\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `</div>\n` +
  `<div class="be-input button right">\n` +
  `   <input type="text" placeholder="입력하세요" />\n` +
  `   <button class="be-button {buttonOption.option}">{button}</button>\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput button={{\n ` +
  `   pos:{left | right}, \n ` +
  `   option: {option}, // 'primary', 'red' \n ` +
  `   contents: {contents} \n ` +
  `}} />\n ` +
  `<BeInput button>\n ` +
  `   <BeButton contentsText={button}></BeButton>\n` +
  `   value={value} onChange={handleChange}\n ` +
  `</BeInput>`
export const textarea =
  `// @type: input || textarea \n` +
  `// default: input \n\n` +
  `// html \n` +
  `<div class="be-input">\n` +
  `   <textarea type="text" placeholder="입력하세요" />\n` +
  `</div>\n` +
  `<div class="be-input short">\n` +
  `   <textarea type="text" placeholder="입력하세요" />\n` +
  `</div>\n` +
  `// component \n` +
  `<BeInput type="textarea" short={true | false} value={value} onChange={handleChange}></BeInput>\n` +
  `<BeInput>\n ` +
  `   <textarea type="text" placeholder="입력하세요" />\n` +
  `   value={value} onChange={handleChange}\n ` +
  `</BeInput>`
