import { createContext, useContext } from 'react'

type Size = { width: number; height: number }

type ResponsiviewContextValue = {
  device: string
  setDevice: (device: string) => void
  isLandscape: boolean
  setIsLandscape: React.Dispatch<React.SetStateAction<boolean>>
  deviceList: DeviceList
  size: Size
}

export const ResponsiviewContext = createContext<ResponsiviewContextValue | null>(null)

export const useResponsiview = () => {
  const ctx = useContext(ResponsiviewContext)
  if (!ctx) {
    throw new Error('ERROR! Reasponsiview`s child components can use to only <Responsiview>' )
  }
  return ctx
}

