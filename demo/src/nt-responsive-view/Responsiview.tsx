import './nt-responsive-view.css';
import { useRef, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';

import { MobileIcon, TabletIcon, DesktopIcon, LandscapeIcon, ResponsiveIcon, ArrowDownIcon, ArrowUpIcon } from './icons'

const HOSTNAME = window.location.origin;
// const DEFAULT_DEVICE_LIST = {
//   desktop: { width: 1920, height: 1080 },
//   tablet: { width: 1024, height: 768 },
//   mobile: { width: 375, height: 667 },
// }

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


interface DeviceInfo {
  width: number;
  height: number;
}

type DeviceList = Record<string, DeviceInfo>


const Responsiview = ({ 
  deviceList = ALL_DEVICE_LIST, 
  currentDevice = 'desktop',
  landscape = false,
  dWidth = null,
  dHeight = null,
}: { 
  deviceList?: DeviceList,
  currentDevice: string,
  landscape: boolean,
  dWidth: number | null,
  dHeight: number | null,
}) => {
  const isTopWindow = window.self === window.top
  
  const { pathname } = useLocation()
  const [device, setDevice] = useState(currentDevice) 
  const [isLandscape, setIsLandscape] = useState(landscape) 

  useEffect(() => {
    
    if (!isTopWindow) return

    const keyControl = (event: KeyboardEvent) => {
      if (event.repeat) return
      // keycode: 27 (Escape) - back to desktop
      // keycode: 49 - 51 (1 - 3)with ctrl (custom, mobile, tablet, desktop)
      
      const target = event.target as HTMLElement
      if (['INPUT', 'TEXTAREA'].includes(target.tagName) || target.isContentEditable) return
      const key = event.key
      if (key === 'Escape') {setDevice('desktop')} 
      else if (key === '!') {setDevice('mobile')}
      else if (key === '@') {setDevice('tablet')}
      else if (key === '#') {setDevice('desktop')}
      else if (key === ' ') {
        setIsLandscape(prev => !prev)
      }
    }

    window.addEventListener('keydown', keyControl)
    return () => (window.removeEventListener('keydown', keyControl))
  }, [])

  const computedInfo = useMemo(() => {
    const width = (dWidth && dHeight) ? dWidth : deviceList[device].width;
    const height = (dWidth && dHeight) ? dHeight :deviceList[device].height;
    return {
      width: isLandscape ? height : width,
      height: isLandscape ? width : height,
    }
  }, [isLandscape, device, deviceList, dWidth, dHeight])

  const changeDevice = (value) => {
    setDevice(value)
  }
  const changeLandscape = (value) => {
    setIsLandscape(value)
  }

  return (
    <div id="Responsiview">
      {isTopWindow && (
        <>
          <Control current={device} handleClick={changeDevice} landscape={isLandscape} handleLandscape={changeLandscape} />
          <div className={['responsive-view', device].join(' ')}>
            {device !== 'desktop' && (
              <iframe 
              src={HOSTNAME + pathname}
              frameBorder="0" 
              width={computedInfo.width} 
              height={computedInfo.height}></iframe>
            )}
          </div>
        </>
      )}
    </div>
  )
}

const Control = ({current = 'desktop', landscape = false, handleClick, handleLandscape}) => {
  const deviceList = Object.keys(ALL_DEVICE_LIST)
  const selectRef = useRef<HTMLHTMLElement>(null)
  const [show, setShow] = useState(false)
  const selectDevie = (device) => {
    handleClick(device)
  }
  const setLandcape = (landscape) => {
    handleLandscape(landscape)
  }

  const closeMenu = (event) => {
    if(selectRef.current?.contains(event.target as Node)) return
    setShow(false)
  }

  const isCustom =  useMemo(() => {
    return (current !== 'desktop' && current !== 'tablet' && current !== 'mobile')
  }, [current])

  useEffect(() => {
    window.addEventListener('click', closeMenu)
    return () => (window.removeEventListener('click', closeMenu))
  }, [])

  return (
    <div ref={selectRef} className={'select-device'}>
      <div className="buttons custom" onClick={() => setShow(!show)}>
        <button className={`button ${isCustom ? 'selected' : '' }`}>
          <ResponsiveIcon width="14" height="14" /></button>
        <button className={`button ${isCustom ? 'selected' : '' }`}
          onClick={() => selectDevie(current)}>
            <span className="current-name">{isCustom ? current : 'Responsive' }</span>
            {show ? <ArrowUpIcon width="14" height="14" /> : <ArrowDownIcon width="14" height="14" />}
        </button>
        {show && (
          <div className="responsive-menu">
            <ul>
              {deviceList.map(item => (
                <li key={item} className={item === current ? 'selected' : ''} onClick={() => selectDevie(item)}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        {ALL_DEVICE_LIST[current].width} x {ALL_DEVICE_LIST[current].height}
      </div>
      <div className={`buttons`}>
        <button className={`button ${current === 'mobile' ? 'selected' : '' }`}
          onClick={() => selectDevie('mobile')}>
          <MobileIcon width="14" height="14" /></button>
        <button className={`button ${current === 'tablet' ? 'selected' : '' }`} 
          onClick={() => selectDevie('tablet')}>
          <TabletIcon  width="14" height="14" /></button>
        <button className={`button ${current === 'desktop' ? 'selected' : '' }`} 
          onClick={() => selectDevie('desktop')}>
          <DesktopIcon  width="14" height="14" /></button>
      </div>
      {current !== 'desktop' && (
        <button className={`button border ${landscape ? 'selected' : '' }`}
          onClick={() => setLandcape(!landscape)}>
          <LandscapeIcon width="14" height="14" /></button>
      )}
    </div>
  )
}

export default Responsiview