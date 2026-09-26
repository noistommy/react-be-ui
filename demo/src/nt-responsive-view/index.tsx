import './nt-responsive-view.css';

import { useRef, useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useResponsiview, ResponsiviewContext } from './context';
import { MobileIcon, TabletIcon, DesktopIcon, LandscapeIcon, ResponsiveIcon, ArrowDownIcon, ArrowUpIcon } from './icons'


const ALL_DEVICE_LIST = {
  // Desktop
  desktopLarge: { width: 2560, height: 1440 },
  desktop: { width: 1920, height: 1080 },
  desktopSmall: { width: 1440, height: 900 },
  laptop: { width: 1366, height: 768 },

  // Tablet
  ipadPro: { width: 1024, height: 1366 },
  ipadAir: { width: 820, height: 1180 },
  tablet: { width: 1024, height: 768 },

  // Mobile - Large
  iphone15ProMax: { width: 430, height: 932 },
  iphone14Plus: { width: 428, height: 926 },
  galaxyS23Ultra: { width: 412, height: 915 },

  // Mobile - Medium
  iphone15: { width: 393, height: 852 },
  iphone13: { width: 390, height: 844 },
  pixel7: { width: 412, height: 892 },

  // Mobile - Small
  mobile: { width: 375, height: 667 },
  iphoneSE: { width: 375, height: 667 },
  galaxyS8: { width: 360, height: 740 },

  // Foldable
  galaxyZFold: { width: 344, height: 882 },
  galaxyZFoldUltra: { width: 674, height: 691 },
  iphoneDuo: { width: 626, height: 890 },
} as const;


type DeviceInfo = {
  width: number
  height: number
}

type DeviceList = Record<string, DeviceInfo>

type RootProps = {
  children: React.ReactNode
  deviceList?: DeviceList
  currentDevice?: string
  landscape?: boolean 
  dWidth?: number | null 
  dHeight?: number | null
}

const Root = ({
  children,
  deviceList = ALL_DEVICE_LIST,
  currentDevice = 'desktop',
  landscape = false,
  dWidth = null,
  dHeight = null
}: RootProps) => {
  const [isTopWindow, setIsTopWindoow] = useState(false)
  const [device, setDevice] = useState(currentDevice)
  const [isLandscape, setIsLandscape] = useState(landscape)

  useEffect(() => {
    setIsTopWindoow(window.self === window.top)
  }, [])

  useEffect(() => {
    if (!isTopWindow) return

    const keyControl = (event: KeyboardEvent) => {
      if (event.repeat) return
      const target = event.target as HTMLElement
      if (['INPUT', 'TEXTAREA'].includes(target.tagName) || target.isContentEditable) return

      if (event.key === 'Escape') setDevice('desktop')
      else if (event.key === '!') setDevice('mobile')
      else if (event.key === '@') setDevice('tablet')
      else if (event.key === '#') setDevice('desktop')
      else if (event.key === ' ') setIsLandscape(prev => !prev)
    }

    window.addEventListener('keydown', keyControl)
    return () => window.removeEventListener('keydown', keyControl)
  }, [isTopWindow])

  const size = useMemo<Size>(() => {
    const base = deviceList[device] ?? deviceList.desktop
    const width = dWidth && dHeight ? dWidth : base.width
    const height = dWidth && dHeight ? dHeight : base.height
    return isLandscape ? { width: height, height: width } : { width, height }
  }, [isLandscape, device, deviceList, dWidth, dHeight])

  const value = useMemo(() =>({
    device, setDevice, isLandscape, setIsLandscape, deviceList, size, isTopWindow
  }),[device, isLandscape, deviceList, size, isTopWindow])

  return (
    <ResponsiviewContext.Provider value={value}>
      {children}
    </ResponsiviewContext.Provider>
  )
}

// type ControlProps = {

// }

const Control = ({
  className = null,
  showSize = true,
  showLandscape = true
}: {
  className?: string | null
  showSize?: boolean
  showLandscape?: boolean
}) => {
  const { device, isTopWindow } = useResponsiview()

  if (!isTopWindow) return null
  return (
    <div className={['responsiview-control', className, device].join(' ')}>
      <DeviceSelector />
      <DeviceTypeSelector />
      {showSize && (<SizeLabel />)}
      {showLandscape && (<Lanscape />)}
    </div>
  )
}
const DeviceTypeSelector = () => {
  const { device, setDevice } = useResponsiview()
  const deviceType = [
    { key: 'mobile', Icon: MobileIcon },
    { key: 'tablet', Icon: TabletIcon },
    { key: 'desktop', Icon: DesktopIcon },
  ]

  return (
    <div className="buttons">
      {deviceType.map(({key, Icon}) => (
        <button key={key} className={`button ${device === key ? 'selected' : ''}`}
        onClick={() => setDevice(key)}>
          <Icon width="14" height="14" />
        </button>
      ))}
    </div>
  )
}

const DeviceSelector = () => {
  const { device, setDevice, deviceList } = useResponsiview()
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  const isCustom = device !== 'desktop' && device !== 'tablet' && device !== 'mobile'

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (ref.current?.contains(event.target as Node)) return
      setShow(false)
    }
    window.addEventListener('click', closeMenu)
    return () => window.removeEventListener('click', closeMenu)
  }, [])
  if (device === 'desktop') return null
  return (
    <>
      <div  ref={ref} className="buttons custom" onClick={() => setShow(prev => !prev)}>
        <button className={`button ${isCustom ? 'selected' : ''}`}>
          <ResponsiveIcon width="14" height="14" />
        </button>
        <button className={`button ${isCustom ? 'selected' : ''}`} onClick={() => setDevice(device)}>
          <span className="current-name">{isCustom ? device : 'Responsive'}</span>
          {show ? <ArrowUpIcon width="14" height="14" /> : <ArrowDownIcon width="14" height="14" />}
        </button>
      </div>
      {show && (
        <div className="responsive-menu">
          <ul>
            {Object.keys(deviceList).map(item => (
              <li key="item" className={item === device ? 'selected' : ''}
                onClick={() => setDevice(item)}
              >{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}


const SizeLabel = () => {
  const { device, size } = useResponsiview()
  if (device === 'desktop') return null
  return <button className="button border">{size.width} x {size.height}</button>
}

const Lanscape = () => {
  const { device, isLandscape, setIsLandscape } = useResponsiview()
  if (device === 'desktop') return null

  return (
    <button className={`button border ${isLandscape ? 'selected' : ''}`}
    onClick={() => setIsLandscape(prev => !prev)}>
      <LandscapeIcon width="14" height="14" />
    </button>
  )
}

const Viewport = () => {
  const { isTopWindow, device, size } = useResponsiview()
  const { pathname } = useLocation()

  if (!isTopWindow) return null
  const HOSTNAME = window.location.origin
  return (
    <div id="ResponsiveView" className={['responsive-view', device].join(' ')}>
      {device !== 'desktop' && (
        <iframe 
          src={HOSTNAME + pathname} 
          frameBorder="0" 
          width={size.width} 
          height={size.height} 
        />
      )}
    </div>
  )
}

export const Responsiview = Object.assign(Root, { Control, Viewport})

