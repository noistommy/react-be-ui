import {
  BeButton, BeTag, BeBadge, 
  BeInput, BeInputNumber, BeCheckbox,
  BeMessage, BeSwitch, BeButtons, BeCheckboxGroup,
  BeRadios
} from '../../../dist/be-ui.es'
import { useState } from 'react'

import { useFloating, autoUpdate, offset, flip, shift, FloatingPortal} from '@floating-ui/react'
import CodeBlock from './CodeBlock'
const BUTTONS = [
  { contentText: "A" },
  { contentText: "B" },
  { contentText: "C" },
]
const CHECKBOXS = [
  { name: 'spring', label: 'Spring', state: true },
  { name: 'summer', label: 'Summer', state: false },
  { name: 'authum', label: 'Authum', state: false },
  { name: 'winder', label: 'Winter', state: false },
]
const OPTIONS = [
  { name: 'spring1', label: 'Spring'},
  { name: 'summer1', label: 'Summer' },
  { name: 'authum1', label: 'Authum' },
  { name: 'winder1', label: 'Winter' },
]

export default function TestComp () {
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [offset(10), flip(), shift()],
    open: isOpen,
    onOpenChange: setIsOpen
  })

  
  const [selRadio, setSelRadio] = useState('spring1')
  const selectedSeason = (item) => (console.log(item))
  const selectedOneSeason = (item) => {
    setSelRadio(item)
  }
  const onChangeOpen = () => setIsOpen(!isOpen)
  return (
    <div className="page-wrapper">
      <div className="be-segment border round-l">
        <div className="contents">
          <p>button, tag, badge</p>
          <BeButton >
            TEST
            <BeBadge color="red">N</BeBadge>  
          </BeButton>
          <BeTag type="pointing" color="deepblue" className="up">label</BeTag>
        </div>
        <CodeBlock code="const a = 1;" />
      </div>
      <div className="be-segment surface">
        <div className="contents">
          <p>input, input number</p>
          <BeInput />
          <BeInputNumber />
        </div>
      </div>
      <div className="be-segment surface">
        <div className="contents">
          <p>checkbox</p>
          <BeCheckbox name="check1" checked >Checkbox</BeCheckbox>
          <BeCheckbox name="check2" type="radio">Radiobox</BeCheckbox>
          <hr />
          <BeSwitch />
          <BeSwitch type="button" />
        </div>
      </div>
      <div className="be-segment surface">
      </div>
      <BeMessage title="Test 입니다" contents="I don` need explain kkk" state="info" icon />
      <div className="be-segment surface">
        <div className="contents">
          <BeButtons buttons={BUTTONS} />
        </div>
      </div>
      <div className="be-segment surface">
        <div className="contents">
          <BeCheckboxGroup checkboxList={CHECKBOXS} checkedList={['spring']} onChange={selectedSeason}></BeCheckboxGroup>
        </div>
      </div>
      <div className="be-segment surface">
        <div className="contents">
          <BeRadios radioList={OPTIONS} group="season" selectedValue={selRadio} onChange={selectedOneSeason}></BeRadios>
        </div>
      </div>
      <div className="be-segment surface">
        <div className="contents">
          <button className="be-button primary" ref={refs.setReference} onClick={onChangeOpen}>Test</button>
          <FloatingPortal>
            <div ref={refs.setFloating} style={floatingStyles}>
              {isOpen && (
                <div className="be-card border float">
                  <div className="contents">Contents</div>
                </div>
              )}
            </div>
          </FloatingPortal>
        </div>
      </div>
    </div>
  )
} 