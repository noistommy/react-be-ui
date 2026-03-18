import {useState, useEffect, useMemo, useRef, createContext, useContext} from 'react'

const SSLContext = createContext()

interface SSLProps {
  children: react.ReactNode;
  onChange: ({e, value: boolean}) => void
  type: string;
  direct?: string;
  isShow: boolean;
  duration?: number;
  current?: string;
}

interface SPProps {
  children: react.ReactNode;
  sideWidth?: number;
  minSideWidth?: number;
}

interface MPProps {
  children: react.ReactNode;
}

const SlideSideLayout = ({
  children,
  onChange = () => {},
  type = 'push',
  direct = 'left',
  isShow = true,
  duration = 500,
  current = ''
}: SSLProps): JSX.Element => {
  const [stateShow, setStateShow] = useState(isShow)
  const [device, setDevice] = useState('desktop')

  

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

  const setClass = [
    direct,
  ].filter((item): item is string => Boolean(item)).join(' ')

  return (
    <SSLContext.Provider value={{current, onChange, device}}>
      <div 
        className={`slide-side-layout ${setClass} ${slideType} ${device} ${stateShow ? 'show': 'hide'}`} 
        style={{'--dur': duration}} 
      >
        {children}
      </div>
    </SSLContext.Provider>
  )
}

const SidePane = ({
  children,
  sideWidth = 250,
  minSideWidth = 0
}: SPProps): JSX.Element => {
  const {onChange, device} = useContext(SSLContext)
  const handleClick = (e) => {
    if (device === 'mobile') onChange(e, false)
  }
  return (
    <div 
      className="side-pane"
      onClick={handleClick}
      style={{'--side': sideWidth, '--min-side': minSideWidth}}
    >
      {children}
    </div>
  )
}
const MainPane = ({children}: MPProps): JSX.Element => {
  const scrollRef = useRef(null)
  const {current} = useContext(SSLContext)

  useEffect(() => {
    scrollRef.current.scrollTop = 0
  }, [current])

  return (
    <div className="main-pane" ref={scrollRef}>
      {children}
    </div>
  )
}
SlideSideLayout.SidePane = SidePane
SlideSideLayout.MainPane = MainPane

export default SlideSideLayout