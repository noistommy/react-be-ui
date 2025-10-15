import { useState, useRef, useEffect, useMemo } from 'react'
import { CSSTransition } from 'react-transition-group'
import BeCalendar from './BeCalendar'
import { 
  useFloating, 
  autoUpdate, 
  offset, 
  flip, 
  shift, 
  FloatingPortal
} from '@floating-ui/react'

import { getDateInfo } from './calendar'


const BeDatePicker = ({
  selectedDate = null,
  updateChange = () => {}
}) => {

  const elRef = useRef()
  const menuRef = useRef()

  const [date, setDate] = useState(selectedDate || new Date())
  const [isShow, setIsShow] = useState(false)

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [offset(10), flip(), shift()],
    open: isShow,
    onOpenChange: setIsShow,
  })

  const dateFormatted = useMemo(() => {
    if (!date) return
    const { year, month, date: day } = getDateInfo(date)
    return `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}` 
  }, [date])


  useEffect(() => {
    const newDate = typeof selectedDate === 'string' ? new Date(selectedDate) : selectedDate
    setDate(newDate) 
  }, [selectedDate])

  useEffect(() => {
    window.addEventListener('click', () => showMenu(false))
    return (
      window.removeEventListener('click', () => showMenu(false))
    )
  })

  const showMenu = (value = true) => {
    if (elRef.current?.contains(event.target) || menuRef.current?.contains(event.target)) return
    if (isShow) value = false
    setIsShow(value)
  }

  const toggleOpen = () => setIsShow(!isShow)
  
  const handleChange = (dateValue) => {
    setDate(dateValue)
    updateChange(dateValue)
  }

  return (
    <div className="be-date-picker" ref={elRef}>
      <div className="default-date-text" ref={refs.setReference} onClick={toggleOpen}>
        <div className="be-button icon small round">
          <i className="icon xi-calendar"></i>
        </div>
        <input type="text" readonly value={dateFormatted} />
        <i class={`icon xi-angle-down ${isShow ? 'xi-rotate-180' : ''}`}></i>
      </div>
      {isShow && (
        <FloatingPortal>
          <div 
            className="be-popper-container" 
            ref={refs.setFloating}
            style={floatingStyles}
          >
            <CSSTransition nodeRef={menuRef} in={isShow} timeout={250} classNames="extend-fade">
              <div className="calender-wrapper be-popper" ref={menuRef}>
                <BeCalendar selectedDate={date} onSelect={handleChange} />
              </div>
            </CSSTransition>
          </div>
        </FloatingPortal>
      )}
    </div>
  )
}

export default BeDatePicker