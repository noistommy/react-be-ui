export const base_html =
  `<!-- HTML -->\n` +
  `<!-- Grid Column: 12 -->\n` +
  `<div class="be-grid">\n` +
  `   <!-- span-1은 생략 가능 -->\n` +
  `   <div class="column"> column 1 </div>\n` +
  `   <div class="column"> column 2 </div>\n` +
  `   <div class="column"> column 3 </div>\n` +
  `    ... \n` +
  `   <div class="column"> column 12 </div>\n` +
  `</div>`
export const base_component =
  `// Component \n` +
  `// Grid Column: 12 \n` +
  `// import {BeGrid, Column} from 'react-be-ui' \n` +
  `<BeGrid>\n` +
  `   // span={1}은 생략 가능 \n` +
  `   <Column> column 1 </Column>\n` +
  `   <Column> column 2 </Column>\n` +
  `   <Column> column 3 </Column>\n` +
  `    ... \n` +
  `   <Column> column 12 </Column>\n` +
  `</BeGrid>`
export const reponsive =
  `// HTML \n` +
  `// Grid Column: 12 \n` +
  `<div class="be-grid">\n` +
  `   // span-{md|sm|xs}-{number} \n` +
  `   // {md|sm|xs} 각 영역에서만 적용 됩니다. \n` +
  `   <div class="column span-2 span-md-2 span-sm-4 span-xs-2"> column </div>\n` +
  `    ... \n` +
  `</div>\n` +
  `// Component \n` +
  `// divide responsive \n` +
  `<BeGrid divide={number} md={md} sm={sm} xs={xs}>\n` +
  `   <Column span={a}> column a </Column>\n` +
  `   ...\n` +
  `</BeGrid>\n` +
  `// widths responsive \n` +
  `<BeGrid>\n` +
  `   <Column span={a} md={md} sm={sm} xs={xs}> column a </Column>\n` +
  `   <Column span={b} md={md} sm={sm} xs={xs}> column b </Column>\n` +
  `   <Column span={c} md={md} sm={sm} xs={xs}> column c </Column>\n` +
  `   ...\n` +
  `</BeGrid>`
export const divide =
  `// HTML \n` +
  `// Grid Column: 12 \n` +
  `// number / 12 분할 합니다. \n` +
  `<div class="be-grid divide-{number}">\n` +
  `   <div class="column"> column </div>\n` +
  `    ... \n` +
  `</div>\n` +
  `// Component \n` +
  `<BeGrid divide={number}>\n` +
  `   <Column> column </Column>\n` +
  `    ... \n` +
  `</BeGrid>`
export const widths =
  `// HTML \n` +
  `// Grid Column: 12 \n` +
  `// 각 number 만큼씩 영역을 분할합니다. \n` +
  `// 각 넘버의 합은 12입니다. a + b + c = 12 \n` +
  `<div class="be-grid">\n` +
  `   <div class="column span-{a}"> column a</div>\n` +
  `   <div class="column span-{b}"> column b</div>\n` +
  `   <div class="column span-{c}"> column c</div>\n` +
  `</div>\n` +
  `// Component \n` +
  `<BeGrid>\n` +
  `   <Column span={a}> column a </Column>\n` +
  `   <Column span={b}> column b </Column>\n` +
  `   <Column span={c}> column c </Column>\n` +
  `</BeGrid>`
export const nested =
  `// HTML \n` +
  `// Grid Column: 12 \n` +
  `<div class="be-grid">\n` +
  `   <div class="column span-3"></div>\n` +
  `   <div class="column span-8">\n` +
  `       <div class="ga-grid">\n` +
  `           <div class="column span-4"> </div>\n` +
  `           <div class="column span-4"> </div>\n` +
  `           <div class="column span-4"> </div>\n` +
  `       </div>\n` +
  `   </div>\n` +
  `   <div class="column"></div>\n` +
  `</div>\n` +
  `// Component \n` +
  `<BeGrid>\n` +
  `   <Column span={3}> ... </Column>\n` +
  `   <Column span={8}>\n` +
  `       <BeGrid> // Nasted BeGrid\n` +
  `         <Column span={4}></Column>\n` +
  `         <Column span={4}></Column>\n` +
  `         <Column span={4}></Column>\n` +
  `       </BeGrid>\n` +
  `   </Column>\n` +
  `   <Column span={1}> ... </Column>\n` +
  `</BeGrid>`
export const align =
  `// justify: {left | center | right | between | around} \n` +
  `// align: {left | center | right } : test-align \n` +
  `// HTML \n` +
  `// Grid Column: 12 \n` +
  `<div class="be-grid justify-{justify} align-{align}" >...</div>\n` +
  `// HTML \n` +
  `<BeGrid justify={justify} align={align}>...</BeGrid>`
export const offset =
  `// HTML \n` +
  `// Grid Column: 12 \n` +
  `// offset number 만큼 영역을 offset 합니다. \n` +
  `// 각 span과 offset의 합은 12입니다. a + A + b + B = 12 \n` +
  `<div class="be-grid">\n` +
  `   <div class="column span-{a} offset-{A}"> column a</div>\n` +
  `   <div class="column span-{b} offset-{B}"> column b</div>\n` +
  `</div> \n` +
  `// Component \n` +
  `<BeGrid>\n` +
  `   <Column span={a} offset={A}> column a </Column>\n` +
  `   <Column span={b} offset={B}> column b </Column>\n` +
  `</BeGrid>`
export const autofit =
  `// HTML \n` +
  `// direct: {left | right} \n` +
  `// {left | right}쪽 첫번쨰 column으로 채운다 \n` +
  `<div class="be-grid left-side">\n` +
  `   <div class="column"> column side</div>\n` +
  `   <div class="column span-{a}"> column a</div>\n` +
  `</div>\n` +
  `<div class="be-grid right-side">\n` +
  `   <div class="column span-{a}"> column a</div>\n` +
  `   <div class="column"> column side</div>\n` +
  `</div>\n` +
  `// Component \n` +
  `<BeGrid {leftSide | rightSide}>\n` +
  `   <Column span={a}> column a </Column>\n` +
  `   <Column span={b}> column b </Column>\n` +
  `</BeGrid>`