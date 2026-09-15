import { useRef, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';
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


export default function ResponsiveView({ 
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
}) {
  const isIframe = window.self === window.top
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const currentUrl = useLocation()

  

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = HOSTNAME +currentUrl.pathname
    }
  }, [currentUrl, currentDevice])

  const computedInfo = useMemo(() => {
    const width = (dWidth && dHeight) ? dWidth : deviceList[currentDevice].width;
    const height = (dWidth && dHeight) ? dHeight :deviceList[currentDevice].height;
    return {
      width: landscape ? height : width,
      height: landscape ? width : height,
    }
  }, [landscape, currentDevice, deviceList, dWidth, dHeight])

  return (
    <>
      {isIframe && (
        <div className={`responsive-view ${currentDevice}`}>
          {currentDevice !== 'desktop' && (
            <iframe 
            ref={iframeRef} 
            frameBorder="0" 
            width={computedInfo.width} 
            height={computedInfo.height}></iframe>
          )}
        </div>
      )}
    </>
  )
}