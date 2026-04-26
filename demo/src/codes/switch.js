export const base_html =
`<!-- html --> 
<div class="be-switch slide"> 
   <input type="checkbox" /> 
   <span class="switch"></span> 
</div> 
<div class="be-switch slide inside"> 
   <input type="checkbox" /> 
   <span class="switch"></span> 
</div>`

export const base_component =
`// component  
<BeSwitch type="slide" checked></BeSwitch> 
<BeSwitch type="slide" inside checked></BeSwitch>`
export const button =
`// html  
<div class="be-switch button"> 
   <input type="checkbox" /> 
   <span class="on active"></span> 
   <span class="off"></span> 
</div> 
// component  
<BeSwitch type="button" onText="A" offText="B"></BeSwitch>`
export const round =
`// html  
<div class="be-switch slide round"> 
   <input type="checkbox" /> 
   <span class="switch"></span> 
</div> 
// component  
<BeSwitch type="slide" round></BeSwitch>`
export const colors =
`// html  
<div class="be-switch slide {color}"> 
   <input type="checkbox" /> 
   <span class="switch"></span> 
</div> 
// component  
<BeSwitch type="slide" color={color}></BeSwitch>`
