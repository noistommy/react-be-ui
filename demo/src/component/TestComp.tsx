import {
  BeButton, BeTag, BeBadge, 
  BeInput, BeInputNumber, BeCheckbox,
  BeMessage, BeSwitch, BeButtonGroup
} from '../../../dist/be-ui.es'

const BUTTONS = [
  { contentText: "A" },
  { contentText: "B" },
  { contentText: "C" },
]
export default function TestComp () {
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
    </div>
  )
} 