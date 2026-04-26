export const base_html =
`<!-- <button></button> 태그 사용 -->
<button class="be-button">Contents-text</button>
<!-- <div></div> 태그 사용 -->
<div class="be-button">Contents-text</div>`
export const base_component =
`// component
<BeButton content-text="Contents-text"></BeButton>
<BeButton>Contents-text</BeButton>`
export const brand =
`// @brandType: {primary || secondary}
// html
<button class="be-button {brandType}">...</button>
// component
<BeButton brand={brandType}>...</BeButton>`
export const status =
`// @status:{ success || danger || info || attention || importance}
// html
<button class="be-button {status}">...</button>
// component
<BeButton status={status}>...</BeButton>`
export const colors =
`// @colors:{ red || orange || ... || gray}
// html
<button class="be-button {colors}">...</button>
// component
<BeButton color={colors}>...</BeButton>`
export const colors_light =
`// @colorsLight:{ red-light || orange-light || ... || gray-light}
// html
<button class="be-button {colorsLight}">...</button>
// component
<BeButton color={colors} light>...</BeButton>`
export const text =
`// @text: Boolean
// default: false \n
// html
<button class="be-button text">...</button>
// component
<BeButton text>...</BeButton>`
export const border =
`// @border: Boolean
// default: false \n
// html
<button class="be-button border">...</button>
// component
<BeButton border>...</BeButton>`
export const disabled =
`// @disabled: Boolean
// default: false \n
// html
<button class="be-button disabled">...</button>
// component
<BeButton disabled>...</BeButton>`
export const fluid =
`// @fluid: Boolean
// default: false \n
// html
<button class="be-button fluid">...</button>
// component
<BeButton fluid>...</BeButton>`
export const compact =
`// @compact: Boolean
// default: false \n
// html
<button class="be-button compact">...</button>
// component
<BeButton compact>...</BeButton>`
export const outline =
`// @outline: Boolean
// default: false \n
// html
<button class="be-button outline">...</button>
// component
<BeButton outline>...</BeButton>`
export const round =
`// @round: Boolean
// default: false \n
// html
<button class="be-button round">...</button>
// component
<BeButton round>...</BeButton>`
export const icon =
`// @icon: String
// default: null \n
// html
<button class="be-button icon">
    <i class="xi-icon-name" />
</button>
// component
<BeButton icon="xi-icon-name">...</BeButton>
<BeButton icon>
    <i class="xi-icon-name" />
</BeButton>`
export const withIcon =
`// @withIcon: String
// @iconPos: String
// default: null \n
// html
// icon left
<button class="be-button">
    <i class="icon left xi-icon-name" />
    Content-text
</button>
// icon right
<button class="be-button">
    Content-text
    <i class="icon right xi-icon-name" />
</button>
// icon both
<button class="be-button">
    <i class="icon left xi-icon-name" />
    Content-text
    <i class="icon right xi-icon-name" />
</button>
// component
<BeButton withIcon="xi-icon-name" icon-pos="{left || right}">...</BeButton>`

export const size =
`// @size: {tiny || small || medium || large || huge || massive} \n
// html
<button class="be-button {size}">...</button>
// component
<BeButton size={size}>...</BeButton>`

export const badge =
`// @badge: String
// @badgeOption: String
// default: null \n
// html
<button class="be-button badge">
    // reference: Badge 컴포넌트의 속성을 동일하게 적용
    <span class="in-badge {badgeOption}">{badge}</span>
</button>
// component
<BeButton badge={badge} badgeOption={badgeOption}>...</BeButton>`

export const eventClick =
`// emit: onClick <BeButton onClick={handleClick}>...</BeButton>`
export const buttons_html =
`<!-- html -->
<div class="buttons">
    <div class="be-button"></button>
    <div class="be-button"></button>
    ...
    <div class="be-button"></button>
</div>`
export const buttons_component =
`// const buttons = []
// const selected = ref(0)
<BeButtons buttons={buttons} onChange={(index) => selected(index)}></BeButtons>`
export const buttons_round =
`<div class="buttons round">
    <div class="be-button"></button>
    <div class="be-button"></button>
    ...
    <div class="be-button"></button>
</div>
// component
// const buttons = []
<BeButtons buttons={buttons} round></BeButtons>`
export const buttons_border =
`<div class="buttons border">
    <div class="be-button"></button>
    <div class="be-button"></button>
    ...
    <div class="be-button"></button>
</div>
// component
// const buttons = []
<BeButtons buttons={buttons} border></BeButtons>
`