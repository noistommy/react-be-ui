import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router';
const HOSTNAME = window.location.origin;
const DEFAULT_DEVICE_LIST = {
  desktop: { width: 1920, height: 1080 },
  tablet: { width: 1024, height: 768 },
  mobile: { width: 375, height: 667 },
}

interface DeviceInfo {
  width: number;
  height: number;
}

type DeviceList = Record<'desktop' | 'tablet' | 'mobile', DeviceInfo>


export default function ResponsiveView({ deviceList = DEFAULT_DEVICE_LIST, currentDevice = 'desktop' }: { children: React.ReactNode, deviceList?: DeviceList, currentDevice: string }) {
  const isIframe = window.self === window.top
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const currentUrl = useLocation()

  

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = HOSTNAME +currentUrl.pathname
    }
  }, [currentUrl, currentDevice])

  return (
    <>
      {isIframe && (
        <div className={`responsive-view ${currentDevice}`}>
          {currentDevice !== 'desktop' && (
            <iframe ref={iframeRef} frameBorder="0" width={deviceList[currentDevice].width} height={deviceList[currentDevice].height}></iframe>
          )}
        </div>
      )}
    </>
  )
}