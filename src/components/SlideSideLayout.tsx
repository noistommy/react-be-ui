import {useState, useEffect} from 'react'
import createSlots from './slot/createSlots'

interface SSLProps {
  children: react.ReactNode;
  type: string;
  direct?: string;
  sideWidth?: number;
  minSideWidth?: number;
  isShow: boolean;
  duration?: number;
}

const SlideSideLayout = ({
  children,
  type = 'push',
  direct = 'left',
  sideWidth = 250,
  minSideWidth = 0,
  isShow = true,
  duration = 500
}: SSLProps): JSX.Element => {
  const slots = createSlots(children, ['side', 'main'])

  const [stateShow, setStateShow] = useState(isShow)

  useEffect(() => {
    setStateShow(isShow)
  }, [isShow])

  const setClass = [
    type,
    direct,
  ].filter((item): item is string => Boolean(item)).join(' ')

  return (
    <div className={`slide-side-layout ${setClass} ${stateShow ? 'show': 'hide'}`} style={{'--dur': duration}} >
      <div className="side-pane" style={{'--side': sideWidth, '--min-side': minSideWidth}}>
        {slots.side || 'Side'}
      </div>
      <div className="main-pane">
        {slots.main || 'Main'}
      </div>
    </div>
  )
}

export default SlideSideLayout