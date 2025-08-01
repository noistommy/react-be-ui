import {  
  BeSegment, BeCard, Slot, BeButton,
  BeList, BePagination, BeSlider, BeSelectbox, BeTabs, BeTree,
  BeCalendar, BeDatePicker
} from '../../../dist/be-ui.es'
import profileImg from '../assets/img/profile_img.png';

import CodeBlock from '../component/CodeBlock'

const OPTIONS = [
  { id: 1, option: 'run', icon: 'xi-run' },
  { id: 2, option: 'bicycle', icon: 'xi-bicycle' },
  { id: 3, option: 'airplane', icon: 'xi-airplane' },
  { id: 4, option: 'car', icon: 'xi-car' },
  { id: 5, option: 'bus', icon: 'xi-bus' },
  { id: 6, option: 'taxi', icon: 'xi-taxi' },
]

const OPTIONS_SUB = [
  { id: 1, option: 'car', icon: 'xi-car', sub: 'public' },
  { id: 2, option: 'bus', icon: 'xi-bus', sub: 'public' },
  { id: 3, option: 'taxi', icon: 'xi-taxi', sub: 'public' },
]
const BOX_OPTIONS = [
  { id: 1, option: 'Run', icon: 'xi-run', val: 'run' },
  { id: 2, option: 'Bicycle', icon: 'xi-bicycle', val: 'bicycle' },
  { id: 3, option: 'Airplane', icon: 'xi-airplane', val: 'airplane' },
  { id: 4, option: 'Public:car', icon: 'xi-car', val: 'car' },
  { id: 5, option: 'Public:bus', icon: 'xi-bus', val: 'bus' },
  { id: 6, option: 'Public:taxi', icon: 'xi-taxi', val: 'taxi' },
]

const TREELIST = [
  {
    label: 'tree item level 1',
    children: [
      {
        label: 'tree item level 1-1',
        children: [
          {
            label: 'tree item level 1-1-1'
          }
        ]
      },
      {
        label: 'tree item level 1-2'
      }
    ]
  },
  {
    label: 'tree item level 2',
    children: [
      {
        label: 'tree item level 2-1',
        children: [
          {
            label: 'tree item level 2-1-1'
          }
        ]
      },
      {
        label: 'tree item level 2-2',
        children: [
          {
            label: 'tree item level 2-2-1'
          },
          {
            label: 'tree item level 2-2-2',
            children: [
              {
                label: 'tree item level 2-2-2-1'
              },
              {
                label: 'tree item level 2-2-2-2'
              },
              {
                label: 'tree item level 2-2-2-3'
              }
            ]
          }
        ]
      }
    ]
  },
]

const code_test = 
`import { BeButton } from 'react-be-ui'\n\n` +
`<div className="be-button">Button</div>\n` +
`<BeButton brand="primary">Button</BeButton>`


export default function GlobalView () {
  return (
    <div className="global-view">
      <BeSegment surf>Surface</BeSegment>
      <div className="be-cards">
        <BeCard>
          <Slot name="image">
            <img src={profileImg} alt="profile" />
          </Slot>
          <Slot name="contents">
            <h3 className="h3 title">Card</h3>
            <BeSegment surf>
              <p>This is Contentes.</p>
            </BeSegment>
          </Slot>
        </BeCard>
        
        <BeCard surf>
          <div>아무것도 없을떄는 Children을 랜더링하세요.</div>
        </BeCard>
      </div>
      <div className="be-segment">
        <BeCalendar />
      </div>
      <BeCard>
        <Slot name="contents">
          <BeList options={OPTIONS} selection border itemClass="user-item"></BeList>
        </Slot>
      </BeCard>
      <BeList options={OPTIONS_SUB} itemClass="user-item" selection 
      onChange={(value) => console.log(value)}></BeList>
      <style jsx>{`
        .user-item {
          padding: 8px 12px;
        }
      `}</style>
      <div className="be-card">
        <div>
          <BeSelectbox options={BOX_OPTIONS}></BeSelectbox>
        </div>
        <div>
          <BeSelectbox options={BOX_OPTIONS} selectedType="mark bg"></BeSelectbox>
        </div>
        <div>
          <BeSelectbox options={BOX_OPTIONS} boxType="float"></BeSelectbox>
        </div>
        <div>
          <BeSelectbox options={BOX_OPTIONS} multiple onSelect={(a, b) => console.log([...a, b])}></BeSelectbox>
        </div>
      </div>
      <div className="be-segment">
        <BeDatePicker selectedDate={new Date()} updateChange={(value) => console.log(value)} />
      </div>
      <div className="be-segment">
        <BePagination pageLength={10} limits={5} ellipsis></BePagination>
        <BePagination pageLength={10}></BePagination>
        <BePagination pageLength={10} type="page"></BePagination>
        <BePagination pageLength={10} round></BePagination>
        <BePagination pageLength={10} border></BePagination>
      </div>
      <div className="be-segment">
        <BeSlider showLabel unitText="개"></BeSlider>
        <BeSlider showTooltip></BeSlider>
        <BeSlider showValue unitText="개"></BeSlider>
        <BeSlider showValue unitText="개"></BeSlider>
        <BeSlider trackType="fat"></BeSlider>
        <BeSlider resultColor="red"></BeSlider>
        <BeSlider resultValue={50} showValue></BeSlider>
        <BeSlider showStep></BeSlider>
      </div>
      <div className="be-segment">
        <BeTabs options={OPTIONS} tabType="browser" onSelectTab={(value) => console.log(value)}>
          <Slot name="contents">

          </Slot>
        </BeTabs>
      </div>
      <div className="be-segment">
        <BeTree treeList={TREELIST}></BeTree>
      </div>
      <div className="be-segment border">
        <div className="contents-wrapper">
          <BeButton brand="primary">Primary</BeButton>
          <BeButton brand="primary" icon>
            <i className="xi-user"></i>
          </BeButton>
        </div>
      </div>
      <CodeBlock code={code_test} language="tsx" theme="github-light"></CodeBlock>
    </div>
  )
}