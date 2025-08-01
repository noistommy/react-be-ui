export const dataSet =
  `//  tree list data set \n` +
  `const treeList = [\n` +
  `   { label: 'Tree Item 1', children: [\n` +
  `           { label: 'Tree Item 1-1', children: [ ... ] },\n` +
  `           { label: 'Tree Item 1-2', children: [ ... ] },\n` +
  `           { label: 'Tree Item 1-3', children: [ ... ] },\n` +
  `       ]\n` +
  `   },\n` +
  `   { label: 'Tree Item 2', children: [\n` +
  `           { label: 'Tree Item 2-1', children: [ ... ] },\n` +
  `           { label: 'Tree Item 2-2', children: [ ... ] },\n` +
  `           { label: 'Tree Item 2-3', children: [ ... ] },\n` +
  `       ]\n` +
  `   },\n` +
  `]\n` +
  `// TreeList item은 label(제목)과 children (하위 목록)으로 구성합니다. \n` +
  `// 하위목록 레벨에 제한은 없습니다. \n` +
  `// 하위목록은 상위 목록과 동일한 구성입니다.`
export const base_component =
  `<!-- script setup -->\n` +
  `<!-- const treeList = [] -->\n` +
  `<BeTree :tree-data="treeList"></BeTree>`
export const use_mark =
  `<!-- @useMark: Boolean -->\n` +
  `<!-- default: true -->\n` +
  `<BeTree :tree-data="treeList" :use-mark="useMark"></BeTree>`
