export const base_html =
  `<!-- <div></div> 태그 사용 -->\n` +
  `<div class="be-card">\n` +
  `   <div class="contents">Contents ... </div>\n` +
  `</div>`
export const base_component =
  `// import {Slot} from 'react-be-ui' \n` +
  `<BeCard>\n` +
  `   <Slot name="contents">{{ contents }}</Slot>\n` +
  `</BeCard>\n` +
  `// or \n` +
  `<BeCard>\n` +
  `   <div className="contents">{{ contents }}</div>\n` +
  `</BeCard>`
export const title =
  `// @title: String \n` +
  `// default: null \n` +
  `<BeCard title={title}>\n` +
  `   <Slot name="contents">{{ contents }}</Slot>\n` +
  `</BeCard>`
export const image =
  `// @image: Boolean, Object \n` +
  `// default: null \n` +
  `// image: { src, alt } \n` +
  `//  slot image \n` +
  `<BeCard >\n` +
  `   <Slot name="image">\n` +
  `       <img src="{src}" alt="{alt}" />\n` +
  `   </Slot>\n` +
  `   ... ...\n` +
  `</BeCard>`
export const extra =
  `// @extra: Boolean \n` +
  `// default: false \n` +
  `//  slot extra \n` +
  `<BeCard>\n` +
  `   ... ...\n` +
  `   <Slot name="extra">\n` +
  `       {extra_contents}\n` +
  `   </Slot>\n` +
  `</BeCard>`
export const attached =
  `// @attached: Boolean \n` +
  `// default: false \n` +
  `//  slot header & footer \n` +
  `<BeCard>\n` +
  `   <Slot name="header">\n` +
  `       {header_contents}\n` +
  `   </Slot>\n` +
  `   ... ...\n` +
  `   <Slot name="footer">\n` +
  `       {footer_contents}\n` +
  `   </Slot>\n` +
  `</BeCard>`
export const border =
  `// @border: Boolean \n` +
  `// default: true \n` +
  `<BeCard border={border}>\n` +
  `   <Slot name="contents">{{ contents }}</Slot>\n` +
  `</BeCard>`
export const float =
  `// @float: Boolean \n` +
  `// default: false \n` +
  `<BeCard float={float}>\n` +
  `   <Slot name="contents">{{ contents }}</Slot>\n` +
  `</BeCard>`
export const round =
  `// @round: String (s | m | l | xl) \n` +
  `// default: m \n` +
  `<BeCard round={round}>\n` +
  `   <Slot name="contents">{{ contents }}</Slot>\n` +
  `</BeCard>`
export const cards =
  `// only html \n` +
  `<div class="be-cards">\n` +
  `   <BeCard >...</BeCard>\n` +
  `   <BeCard >...</BeCard>\n` +
  `   <BeCard >...</BeCard>\n` +
  `</div>`
