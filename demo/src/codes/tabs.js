export const base_html =
  `<div class="be-tabs">\n` +
  `   <div class="tab-menu">\n` +
  `       <div class="tab-item">tab1</div>\n` +
  `       <div class="tab-item">tab2</div>\n` +
  `       <div class="tab-item">...</div>\n` +
  `   </div>\n` +
  `   <div class="tab-contants">\n` +
  `       tab contents\n` +
  `   </div>\n` +
  `</div>`
export const base_component =
  `// const tabList = [{option, ...}] \n` +
  `// import {Slot} from 'react-be-ui' \n` +
  `//  \n` +
  `<BeTabs tabList={tabList} >\n` +
  `   <Slot name="contents">{selectedTab}</Slot>\n` +
  `</BeTabs>`
export const vertical =
  `// @vertical: Boolean \n` +
  `// default: false \n` +
  `<BeTabs tabList={tabList}  vertical>...</BeTabs>`
export const tab_type_line =
  `// @tabType: { line | button | browser } \n` +
  `// tabType: line \n` +
  `<BeTabs tabList={tabList} tabType="line">...</BeTabs>`
export const tab_type_button =
  `// @tabType: { line | button | browser } \n` +
  `// tabType: button \n` +
  `<BeTabs tabList={tabList} tabType="button">{{ tabContants }}</BeTabs>`