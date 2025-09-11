import {useState, useEffect, useMemo, useRef} from 'react'
import createSlots from './slot/createSlots'

interface SSLProps {
  children: react.ReactNode;
  type: string;
  direct?: string;s
  sideWidth?: number;
  minSideWidth?: number;
  isShow: boolean;
  duration?: number;
  current?: string;
}

const SlideSideLayout = ({
  children,
  type = 'push',
  direct = 'left',
  sideWidth = 250,
  minSideWidth = 0,
  isShow = true,
  duration = 500,
  current = ''
}: SSLProps): JSX.Element => {
  const slots = createSlots(children, ['side', 'main'])
  const [stateShow, setStateShow] = useState(isShow)
  const [device, setDevice] = useState('desktop')

  const scrollRef = useRef(null)

  useEffect(() => {
    function detect() {
      const ua = navigator.userAgent
      if (/mobile/i.test(ua)) setDevice('mobile')
      else if (/tablet|ipad|playbook|silk/i.test(ua)) setDevice('tablet')
      else setDevice('desktop')
    }
    detect();
    window.addEventListener('resize', detect)
    return () => window.removeEventListener('resize', detect)
  }, [])

  const slideType = useMemo(() => {
    return device === 'mobile' ? 'overlay' : type
  }, [device, type])

  useEffect(() => {
    setStateShow(isShow)
  }, [isShow])

  useEffect(() => {
    console.log("current:", scrollRef)
    scrollRef.current.scrollTop = 0
  }, [current])

  // useEffect(() => {
  //   const initShow = slideType !== 'overlay'
  //   setStateShow(initShow)
  // }, [slideType])

  const setClass = [
    direct,
  ].filter((item): item is string => Boolean(item)).join(' ')

  return (
    <div 
      className={`slide-side-layout ${setClass} ${slideType} ${device} ${stateShow ? 'show': 'hide'}`} 
      style={{'--dur': duration}} 
    >
      <div className="side-pane" style={{'--side': sideWidth, '--min-side': minSideWidth}}>
        {slots.side || 'Side'}
      </div>
      <div className="main-pane" ref={scrollRef}>
        {slots.main || 'Main'}
      </div>
    </div>
  )
}

export default SlideSideLayout