// BeList data
export const optionList = [
  { id: 1, option: 'run', icon: 'xi-run' },
  { id: 2, option: 'bicycle', icon: 'xi-bicycle' },
  { id: 3, option: 'airplane', icon: 'xi-airplane' },
  { id: 4, option: 'car', icon: 'xi-car' },
  { id: 5, option: 'bus', icon: 'xi-bus' },
  { id: 6, option: 'taxi', icon: 'xi-taxi' },
]
// BeList data
export const optionSubList = [
  { id: 1, option: 'car', icon: 'xi-car', sub: 'public' },
  { id: 2, option: 'bus', icon: 'xi-bus', sub: 'public' },
  { id: 3, option: 'taxi', icon: 'xi-taxi', sub: 'public' },
]
// BeSelectbox data
export const menuList = [
  { id: 1, option: 'Run', icon: 'xi-run', val: 'run' },
  { id: 2, option: 'Bicycle', icon: 'xi-bicycle', val: 'bicycle' },
  { id: 3, option: 'Airplane', icon: 'xi-airplane', val: 'airplane' },
  { id: 4, option: 'Public:car', icon: 'xi-car', val: 'car' },
  { id: 5, option: 'Public:bus', icon: 'xi-bus', val: 'bus' },
  { id: 6, option: 'Public:taxi', icon: 'xi-taxi', val: 'taxi' },
]


export const treeList = [
  {
    label: 'tree item level 1',
    children: [
      {
        label: 'tree item level 1-1',
        children: [
          {
            label: 'tree item level 1-1-1',
          },
        ],
      },
      {
        label: 'tree item level 1-2',
      },
    ],
  },
  {
    label: 'tree item level 2',
    children: [
      {
        label: 'tree item level 2-1',
        children: [
          {
            label: 'tree item level 2-1-1',
          },
        ],
      },
      {
        label: 'tree item level 2-2',
        children: [
          {
            label: 'tree item level 2-2-1',
          },
          {
            label: 'tree item level 2-2-2',
            children: [
              {
                label: 'tree item level 2-2-2-1',
              },
              {
                label: 'tree item level 2-2-2-2',
              },
              {
                label: 'tree item level 2-2-2-3',
              },
            ],
          },
        ],
      },
    ],
  },
]
export const fileList = [
  {
    label: 'src',
    children: [
      {
        label: 'assets',
        children: [
          {
            label: 'style.css',
          },
        ],
      },
      {
        label: 'index.tsx',
      },
    ],
  },
  {
    label: 'demo',
    children: [
      {
        label: 'public',
        children: [
          {
            label: 'index.html',
          },
        ],
      },
      {
        label: 'src',
        children: [
          {
            label: 'main.tsx',
          },
          {
            label: 'pages',
            children: [
              {
                label: 'page1.tsx',
              },
              {
                label: 'page2.tsx',
              },
              {
                label: 'page3.tsx',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'README.md',
  }
]