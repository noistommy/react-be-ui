export const base_html =
`<!-- HTML --> 
<!-- Grid Column: 12 --> 
<div class="be-grid"> 
   <!-- span-1은 생략 가능 --> 
   <div class="column"> column 1 </div> 
   <div class="column"> column 2 </div> 
   <div class="column"> column 3 </div> 
    ...  
   <div class="column"> column 12 </div> 
</div>`
export const base_component =
`// Component  
// Grid Column: 12  
// import {BeGrid, Column} from 'react-be-ui'  
<BeGrid> 
   // span={1}은 생략 가능  
   <Column> column 1 </Column> 
   <Column> column 2 </Column> 
   <Column> column 3 </Column> 
    ...  
   <Column> column 12 </Column> 
</BeGrid>`
export const reponsive =
`// HTML  
// Grid Column: 12  
<div class="be-grid"> 
   // span-{md|sm|xs}-{number}  
   // {md|sm|xs} 각 영역에서만 적용 됩니다.  
   <div class="column span-2 span-md-2 span-sm-4 span-xs-2"> column </div> 
    ...  
</div> 
// Component  
// divide responsive  
<BeGrid divide={number} md={md} sm={sm} xs={xs}> 
   <Column span={a}> column a </Column> 
   ... 
</BeGrid> 
// widths responsive  
<BeGrid> 
   <Column span={a} md={md} sm={sm} xs={xs}> column a </Column> 
   <Column span={b} md={md} sm={sm} xs={xs}> column b </Column> 
   <Column span={c} md={md} sm={sm} xs={xs}> column c </Column> 
   ... 
</BeGrid>`
export const divide =
`// HTML  
// Grid Column: 12  
// number / 12 분할 합니다.  
<div class="be-grid divide-{number}"> 
   <div class="column"> column </div> 
    ...  
</div> 
// Component  
<BeGrid divide={number}> 
   <Column> column </Column> 
    ...  
</BeGrid>`
export const widths =
`// HTML  
// Grid Column: 12  
// 각 number 만큼씩 영역을 분할합니다.  
// 각 넘버의 합은 12입니다. a  b  c = 12  
<div class="be-grid"> 
   <div class="column span-{a}"> column a</div> 
   <div class="column span-{b}"> column b</div> 
   <div class="column span-{c}"> column c</div> 
</div> 
// Component  
<BeGrid> 
   <Column span={a}> column a </Column> 
   <Column span={b}> column b </Column> 
   <Column span={c}> column c </Column> 
</BeGrid>`
export const nested =
`// HTML  
// Grid Column: 12  
<div class="be-grid"> 
   <div class="column span-3"></div> 
   <div class="column span-8"> 
       <div class="ga-grid"> 
           <div class="column span-4"> </div> 
           <div class="column span-4"> </div> 
           <div class="column span-4"> </div> 
       </div> 
   </div> 
   <div class="column"></div> 
</div> 
// Component  
<BeGrid> 
   <Column span={3}> ... </Column> 
   <Column span={8}> 
       <BeGrid> // Nasted BeGrid 
         <Column span={4}></Column> 
         <Column span={4}></Column> 
         <Column span={4}></Column> 
       </BeGrid> 
   </Column> 
   <Column span={1}> ... </Column> 
</BeGrid>`
export const align =
`// justify: {left | center | right | between | around}  
// align: {left | center | right } : test-align  
// HTML  
// Grid Column: 12  
<div class="be-grid justify-{justify} align-{align}" >...</div> 
// HTML  
<BeGrid justify={justify} align={align}>...</BeGrid>
export const offset =
// HTML  
// Grid Column: 12  
// offset number 만큼 영역을 offset 합니다.  
// 각 span과 offset의 합은 12입니다. a  A  b  B = 12  
<div class="be-grid"> 
   <div class="column span-{a} offset-{A}"> column a</div> 
   <div class="column span-{b} offset-{B}"> column b</div> 
</div>  
// Component  
<BeGrid> 
   <Column span={a} offset={A}> column a </Column> 
   <Column span={b} offset={B}> column b </Column> 
</BeGrid>`
export const autofit =
`// HTML  
// direct: {left | right}  
// {left | right}쪽 첫번쨰 column으로 채운다  
<div class="be-grid left-side"> 
   <div class="column"> column side</div> 
   <div class="column span-{a}"> column a</div> 
</div> 
<div class="be-grid right-side"> 
   <div class="column span-{a}"> column a</div> 
   <div class="column"> column side</div> 
</div> 
// Component  
<BeGrid {leftSide | rightSide}> 
   <Column span={a}> column a </Column> 
   <Column span={b}> column b </Column> 
</BeGrid>`