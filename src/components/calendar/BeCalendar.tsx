import {setCalendar, getDateInfo } from './calendar'
import createSlots from '../slot/createSlots'
import * as type from './calendar-contents'

import { useState, useEffect, useMemo } from 'react'

const BeCalendar = ({
  children,
  onSelect = () => {},
  selectedDate = new Date(),
  cellSize = '37px',
  border = false,
  lang = 'EN',
  contentType = 'MIDDLE',
  today = false
}: {
  children: React.ReactNode
  onSelect: (value: Date ) => void;
  selectedDate: string | Date;
  cellSize: string;
  border: boolean;
  lang: string;
  contentType: string;
  today: boolean;
}): JSX.Element => {
  const week: string[] = type[`WEEK_${contentType}_${lang}`]
  const monthText: string[] = type['MONTH_TEXT_LIST']
  const [currentDate, setCurrentDate] = useState(null)
  const [selectDate, setSelectDate] = useState(null)
  const [dayList, setDayList] = useState([])

  const slots = createSlots(children, ['current', 'control', 'extra'])

  const cellRows = useMemo(() => {
    return dayList?.length / 7;
  }, [dayList])

  useEffect(() => {
    const newValue = typeof selectedDate === 'string' ? new Date(selectedDate) : selectedDate
    setCurrentDate(getDateInfo(newValue))
    setSelectDate(getDateInfo(newValue))
  }, [])

  useEffect(() => {
    if(currentDate) {
      const list = setCalendar(currentDate)
      setDayList(list)
    }
  }, [currentDate])


  const prevMonth = () => {
    if (currentDate.month === 1) {
      setCurrentDate({ ...currentDate, year: currentDate.year - 1, month: 12 })
    } else {
      setCurrentDate({ ...currentDate, month: currentDate.month - 1 })
    }
    // setCalendarList()
  }

  const nextMonth = () => {
    if (currentDate.month === 12) {
      setCurrentDate({ ...currentDate, year: currentDate.year + 1, month: 1 })
    } else {
      setCurrentDate({ ...currentDate, month: currentDate.month + 1 })
    }
    // setCalendarList()
  }

  const handleSelectDate = (date) => {
    const { year, month } = currentDate
    setCurrentDate({...currentDate, date: date})
    setSelectDate({
      year: year,
      month: month,
      date: date
    })
    onSelect(new Date(year, month - 1, date))
  }

  const checkSelectDate = (date) => {
    if (currentDate && selectDate) {
      return (
        currentDate.year === selectDate.year &&
        currentDate.month === selectDate.month &&
        currentDate.date === date
      )
    }
  }
    

  const setToday = () => {
    setCurrentDate(setDateInfo())
    setSelectDate(setDateInfo())

    // setCalendarList()
  }

  return (
    <div 
      className={`be-calendar ${border ? 'border' : ''}`} 
      style={{ '--cell-size': cellSize}}
    >
      <div className="calendar-header">
        {slots.current || (
          <div className="current-date">
            <span className="month">
              {monthText[currentDate?.month - 1]}
            </span>
            <span className="year">{currentDate?.year}</span>
          </div>
        )}
        {slots.control || (
          <>
            <div className="prev-month be-button text icon small" onClick={prevMonth}>
              <i className="icon xi-angle-left" />
            </div>
            <div className="next-month be-button text icon small" onClick={nextMonth}>
              <i className="icon xi-angle-right" />
            </div>
          </>
        )}
        {today && (
          <div 
            className="be-button tiny circle outline deepblue"
            onClick={setToday}
          >Today</div>
        )}
      </div>
      <div className="week-wrapper">
        {week.map((day, i) => (
          <div key={`week-${day}-${i}`} className="cell week-cell" data-name={day}></div>
        ))}
      </div>
      <div className="cell-wrapper" style={{ '--cell-rows': cellRows }}>
        {dayList.map((day, i) => (
          <div
            key={`day-${i}`} 
            className={`cell ${day.type} ${checkSelectDate(day.name) ? 'selected' : ''}`}
            style={{'--x': day.position.x, '--y': day.position.y}}q
            data-name={day.name}
            onClick={() => handleSelectDate(day.name)}
          ></div>
        ))}
      </div>
      <div className="calendar-footer">
        {slots.extra}
      </div>
    </div>
  )
}

export default BeCalendar