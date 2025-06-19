import {
  BeButton, BeTag, BeBadge, 
  BeInput, BeInputNumber, BeCheckbox,
  BeMessage, BeSwitch, BeButtonGroup, BeCheckboxGroup,
  BeRadios
} from '../../../dist/be-ui.es'
import { useState } from 'react'

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

  const [selRadio, setSelRadio] = useState('spring1')
  const selectedSeason = (item) => (console.log(item))
  const selectedOneSeason = (item) => {
    setSelRadio(item)
  }
  return (
    <div className="page-wrapper">
      <div className="be-segment surface">
        <p>button, tag, badge</p>
        <BeButton >
          TEST
          <BeBadge color="red">N</BeBadge>  
        </BeButton>
        <BeTag type="pointing" color="deepblue" className="up">label</BeTag>

      </div>
      <div className="be-segment surface">
        <p>input, input number</p>
        <BeInput />
        <BeInputNumber />
      </div>
      <div className="be-segment surface">
        <p>checkbox</p>
        <BeCheckbox name="check1" checked >Checkbox</BeCheckbox>
        <BeCheckbox name="check2" type="radio">Radiobox</BeCheckbox>
        <hr />
        <BeSwitch />
        <BeSwitch type="button" />
      </div>
      <div className="be-segment surface">
        <BeMessage title="Test 입니다" contents="I don` need explain kkk" state="info" icon />
      </div>
      <div className="be-segment surface">
        <BeButtonGroup buttons={BUTTONS}>
        </BeButtonGroup>
      </div>
      <div className="be-segment surface">
        <BeCheckboxGroup checkboxList={CHECKBOXS} checkedList={['spring']} onChange={selectedSeason}></BeCheckboxGroup>
      </div>
      <div className="be-segment surface">
        <BeRadios optionsList={OPTIONS} group="season" selectedValue={selRadio} onChange={selectedOneSeason}></BeRadios>
      </div>
    </div>
  )
} 