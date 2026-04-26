export const dataSet =
`//  tree list data set  
const treeList = [ 
   { label: 'Tree Item 1', children: [ 
           { label: 'Tree Item 1-1', children: [ ... ] }, 
           { label: 'Tree Item 1-2', children: [ ... ] }, 
           { label: 'Tree Item 1-3', children: [ ... ] }, 
       ] 
   }, 
   { label: 'Tree Item 2', children: [ 
           { label: 'Tree Item 2-1', children: [ ... ] }, 
           { label: 'Tree Item 2-2', children: [ ... ] }, 
           { label: 'Tree Item 2-3', children: [ ... ] }, 
       ] 
   }, 
] 
// TreeList item은 label(제목)과 children (하위 목록)으로 구성합니다.  
// 하위목록 레벨에 제한은 없습니다.  
// 하위목록은 상위 목록과 동일한 구성입니다.`
export const base_component =
`<!-- script setup --> 
<!-- const treeList = [] --> 
<BeTree treeData={treeList}></BeTree>`
export const use_mark =
`<!-- @useMark: Boolean --> 
<!-- default: true --> 
<BeTree treeData={treeList} useMark></BeTree>`
export const files =
`<!-- @useMark: Boolean --> 
<!-- default: true --> 
<BeTree treeData={treeList} files></BeTree>`
