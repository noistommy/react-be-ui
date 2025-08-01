import { useState, useRef, useEffect, useMemo } from 'react'

const BePagination = ({
  onChange = () => {},
  type = 'number',
  ...props
}): JSX.Element => {
  const {
    round = false,
    compact = false,
    border = false,
    align = 'left',
    limits = 5,
    currentPage = 1,
    pageLength = 1,
    itemClass = '',
    ellipsis = false,
    color = null
  } = props

  const pageRef = useRef(null)
  const [current, setCurrent] = useState(currentPage)
  const [last, setLast] = useState(pageLength)

  const offLimits = useMemo(() => {
    return (pageLength <= limits) || !limits
  }, [pageLength, limits])

  const findStart = useMemo(() => {
    return Math.max(current - Math.ceil(limits * 0.5) + 1, 1)
  }, [current, limits])

  const isPrevPoint = useMemo(() => {
    return current > Math.floor(limits / 2) + 2 && limits < last
  }, [current, limits, last])

  const isNextPoint = useMemo(() => {
    return current <= (last - limits) && limits < last
  }, [current, limits, last])

  const isDisabledPrev = useMemo(() => {
    return current - 1 <= 0
  }, [current])

  const isDisabledNext = useMemo(() => {
    return current + 1 > last
  }, [current, last])

  const pageList = useMemo(() => {
    let start
    let list
    if (offLimits) {
      list = new Array(pageLength).fill(1).map((n, i) => n + i)
    } else if (ellipsis) {
      start = 2
      const half = Math.floor(limits / 2)
      if (isPrevPoint) {
        start = current - half
      }
      if (!isNextPoint && isPrevPoint) {
        start = last - limits
      }
      list = new Array(limits).fill(start).map((n, i) => n + i)
    } else {
      start = Math.min(findStart, pageLength - limits + 1)
      list = new Array(limits).fill(start).map((n, i) => n + i)
    }
    return list
  }, [offLimits, pageLength, ellipsis, limits, last, current, isPrevPoint, isNextPoint, findStart])

  useEffect(() => {
    pageRef.current.focus()
    setLast(pageLength)
  }, [pageLength])

  const handleSetCurrent = (num) => {
    if (num > last || num <= 0) return
    setCurrent(num)
    onChange(num)
  }

  const setPrev = () => {
    if (isDisabledPrev) return
    handleSetCurrent(current - 1)
  }

  const setNext = () => {
    if (isDisabledNext) return
    handleSetCurrent(current + 1)
  }

  const setPrevBlock = () => {
    const preNum = current - limits <= 0 ? current - 1 : current - limits
    handleSetCurrent(preNum)
  }

  const setNextBlock = () => {
    const nextNum = current + limits > last ? current + 1 : current + limits
    handleSetCurrent(nextNum)
  }
  const setClass = [
    type,
    border && 'border',
    round && 'round',
    compact && 'compact',
    align && `align-${align}`,
    color
  ].filter((item): item is string => Boolean(item)).join(' ')

  return (
    <div className={`be-pagination ${setClass}`} ref={pageRef} tabIndex={-1}>
      {(!ellipsis && !offLimits) && (
        <div className={`${itemClass} pagination-nav first ${isDisabledPrev && 'disabled'}`}
          onClick={() => handleSetCurrent(1)}
        >
          F
        </div>
      )}
      <div className={`${itemClass} pagination-nav prev ${isDisabledPrev && 'disabled'}`}
        onClick={setPrev}
      >
        <i className="xi-angle-left" />
      </div>
      {ellipsis && (
        <>
          <div 
            className={`${itemClass} pagination-num ${current === 1 && 'active'}`}
            onClick={() => handleSetCurrent(1)}
          >
            1
          </div>
          {isPrevPoint && (
            <div 
              className={`${itemClass} pagination-num`}
              onClick={setPrevBlock}
            >
              <i className="xi-ellipsis-h" />
            </div>
          ) }
        </>
      )}
      <div className="pagination-page-wrapper">
        <PaginationList 
        type={type}
        itemClass={itemClass}
        pageList={pageList}
        current={current}
        last={last}
        onClick={handleSetCurrent} />
      </div>
      {ellipsis && limits < pageLength && (
        <>
          {isNextPoint && (
            <div 
              className={`${itemClass} pagination-nav`}
              onClick={setNextBlock}
            >
              <i className="xi-ellipsis-h" />
            </div>
          )}
          <div 
            className={`${itemClass} pagination-num ${last === current && 'active'}`}
            onClick={() => handleSetCurrent(last)}
          >
            {last}
          </div>
        </>
      )}
      <div
        className={`${itemClass} pagination-nav next ${isDisabledNext && 'disabled'}`}
        onClick={setNext}
      >
        <i className="xi-angle-right" />
      </div>
      {(!ellipsis && !offLimits) && (
        <div 
          className={`${itemClass} pagination-nav last ${isDisabledNext && 'disabled'}`}
          onClick={() => handleSetCurrent(last)}
        >
          L
        </div>
      )}
    </div>
  )
}

function PaginationList ({type, itemClass, pageList, current, onClick, last}) {
  if (type === 'page') {
    return (
      <div className="pagination-info">
        <div className="pagination-nav current">{current}</div>
        <span className="slash">/</span>
        <div className="pagination-nav last">{last}</div>
      </div>
    )
  } else {
    return pageList && (
      pageList.map(page => (
        <div
          key={page}
          className={`${itemClass} pagination-num ${page === current && 'active'}`}
          onClick={() => onClick(page)}
        >
          {page}
        </div>
      ))
    )
  }
}

export default BePagination