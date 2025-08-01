const n=`<!-- <button></button> 태그 사용 --> 
<button class="be-button">Contents-text</button>
<!-- <div></div> 태그 사용 --> 
<div class="be-button">Contents-text</div>`,t=`// component 
<BeButton content-text="Contents-text"></BeButton>
<BeButton>Contents-text</BeButton>`,o=`// @brandType: {primary || secondary} 
// html 
<button class="be-button {brandType}">...</button>
// component 
<BeButton brand={brandType}>...</BeButton>`,e=`// @status:{ success || danger || info || attention || importance} 
// html 
<button class="be-button {status}">...</button>
// component 
<BeButton status={status}>...</BeButton>`,s=`// @colors:{ red || orange || ... || gray} 
// html 
<button class="be-button {colors}">...</button>
// component 
<BeButton color={colors}>...</BeButton>`,u=`// @colorsLight:{ red-light || orange-light || ... || gray-light} 
// html 
<button class="be-button {colorsLight}">...</button>
// component 
<BeButton color={colors} light>...</BeButton>`,a=`// @text: Boolean 
// default: false 

// html 
<button class="be-button text">...</button>
// component 
<BeButton text>...</BeButton>`,b=`// @border: Boolean 
// default: false 

// html 
<button class="be-button border">...</button>
// component 
<BeButton border>...</BeButton>`,c=`// @disabled: Boolean 
// default: false 

// html 
<button class="be-button disabled">...</button>
// component 
<BeButton disabled>...</BeButton>`,l=`// @fluid: Boolean 
// default: false 

// html 
<button class="be-button fluid">...</button>
// component 
<BeButton fluid>...</BeButton>`,i=`// @compact: Boolean 
// default: false 

// html 
<button class="be-button compact">...</button>
// component 
<BeButton compact>...</BeButton>`,B=`// @outline: Boolean 
// default: false 

// html 
<button class="be-button outline">...</button>
// component 
<BeButton outline>...</BeButton>`,d=`// @round: Boolean 
// default: false 

// html 
<button class="be-button round">...</button>
// component 
<BeButton round>...</BeButton>`,r=`// @icon: String 
// default: null 

// html 
<button class="be-button icon">
   <i class="xi-icon-name" />
</button>
// component 
<BeButton icon="xi-icon-name">...</BeButton>
<BeButton icon>
   <i class="xi-icon-name" />
</BeButton>`,m=`// @withIcon: String 
// @iconPos: String 
// default: null 

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
<BeButton withIcon="xi-icon-name" icon-pos="{left || right}">...</BeButton>`,g=`// @size: {tiny || small || medium || large || huge || massive} 

// html 
<button class="be-button {size}">...</button>
// component 
<BeButton size={size}>...</BeButton>`,h=`// @badge: String 
// @badgeOption: String 
// default: null 

// html 
<button class="be-button badge">
   // reference: Badge 컴포넌트의 속성을 동일하게 적용 
   <span class="in-badge {badgeOption}">{badge}</span>
</button>
// component 
<BeButton badge={badge} badgeOption={badgeOption}>...</BeButton>`,p=`// emit: onClick 
<BeButton onClick={handleClick}>...</BeButton>`,f=`<!-- html -->
<div class="buttons">
   <div class="be-button"></button>
   <div class="be-button"></button>
   ...
   <div class="be-button"></button>
</div>`,x=`// const buttons = [] 
// const selected = ref(0) 
<BeButtons buttons={buttons} onChange={(index) => selected(index)}></BeButtons>`,v=`<div class="buttons border">
   <div class="be-button"></button>
   <div class="be-button"></button>
   ...
   <div class="be-button"></button>
</div>
// component 
// const buttons = [] 
<BeButtons buttons={buttons} border></BeButtons>`;export{t as a,n as b,o as c,s as d,u as e,c as f,b as g,l as h,i,r as j,g as k,h as l,p as m,f as n,B as o,x as p,v as q,d as r,e as s,a as t,m as w};
