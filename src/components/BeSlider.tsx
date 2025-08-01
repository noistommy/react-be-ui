import { useState, useRef, useMemo, useEffect, useCallback } from 'react'

const BeSlider = ({
  onChange = () => {},
  resultValue = null,
  ...props
}) => {
  const {
    // id = null,
    trackType = 'normal',
    min = 0,
    max = 100,
    unitText = null,
    showStep = false,
    stepSize = 10,
    showLabel = false,
    showValue = false,
    showTooltip = false,
    // titleText = null,
    disabled = false,
    color = null
  } = props

  const sliderRef = useRef(null)
  const resultRef = useRef(null)

  const [result, setResult] = useState(0)
  const [isCatch, setIsCatch] = useState(false)
  const [initialX, setInitialX] = useState(null)
  const [initialW, setInitialW] = useState(null)
  const [container, setContainer] = useState(500)

  const setResultStyle = useMemo(() => ({ width: `${result}px`, left: `0%`}), [result])
  const setPositionStyle = useMemo(() => ({ left: `${result}px`}), [result])

  const setResultValue = useMemo(() => {
    return Math.ceil((max - min) * (result / container)) + min + unitText
  }, [max, min, result, container, unitText])

  const stepLevel = useMemo(() => ((max - min) / stepSize), [min, max, stepSize])
  const unitSize = useMemo(() => (100 / stepLevel), [stepLevel])

  const convertPercent = useCallback((value) => {
    return (value - min) / (max - min)
  }, [min, max])
  const convertPixel = useCallback((value) => {
    return container * convertPercent(value)
  }, [container, convertPercent])

  const initValue = useCallback(() => {
    if (resultValue > max) {
      setResult(convertPixel(max))
    } else if (resultValue < min) {
      setResult(convertPixel(min))
    } else {
      setResult(convertPixel(resultValue))
    }
  }, [resultValue, max, min, convertPixel])

  const updatePos = (distance) => {
    const offset = initialW + distance
    return offset < 0 ? 0 : offset > container ? container : offset
  }

  const handleMouseDown = ({target: control, pageX}) => {
    if (control.classList.contains('control-btn')) {
      setInitialX(pageX)
      setInitialW(resultRef.current.offsetWidth)
      setIsCatch(true)
      window.addEventListener('mousemove', changeValue)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      setResult(updatePos(pageX - initialX))
    }
  }
  const handleMouseUp = ({target: control, pageX}) => {
    if (control.classList.contains('control-btn')) {
      setResult(updatePos(pageX - initialX))
    }
    onChange(setResultValue)
    setIsCatch(false)
    window.removeEventListener('mousemove', changeValue)
    window.removeEventListener('mouseup', handleMouseUp)
  }

  const changeValue = ({pageX}) => {
    setResult(updatePos(pageX - initialX))
  }

  const selectStep = ({target: step}) => {
    console.log(step)
  }
  useEffect(() => {
    let slider_obs
    if(sliderRef.current) {
      const sliderInfo = sliderRef.current.getBoundingClientRect()
      setContainer(sliderInfo.width)
      setInitialX(sliderInfo.left)
      initValue()
      slider_obs = new ResizeObserver((entries) => {
        for(const entry of entries) {
          const entInfo = entry.contentRect
          setContainer(entInfo.width)
          initValue()
        }
      })
      slider_obs.observe(sliderRef.current)
    }
    return () => {
      if (slider_obs && sliderRef.current) slider_obs.disconnect()
    }
  }, [sliderRef, initValue])

  useEffect(() => {
    initValue()
  }, [initValue])

  const setClass = [
    trackType,
    disabled && 'disabled',
    showLabel && 'labeled'
  ].filter((item): item is string => Boolean(item)).join(' ')

  return (
    <div 
      className={`be-slider ${setClass}`} ref={sliderRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
    >
      <div 
        className={`result-slider primary ${color && `be-${color}`}`} 
        ref={resultRef}
        style={setResultStyle}
      ></div>
      {showStep && (
        Array.from({length:stepLevel}).map((point, i) => (
          <div 
            key={i} 
            className="break-point" 
            style={{left: `${(i + 1) * unitSize}%`}}
            onClick={(e) => {
              e.stopPropagation();
              selectStep()
            }} 
          ></div>
        ))
      )}
      <div className={`control-btn ${isCatch && 'catching'}`} style={setPositionStyle}>
        {showTooltip && (
          <div className="tooltip">{setResultValue}</div>
        )}
      </div>
      {showValue && (
        <div className="label-text">
          <div className="current-label" style={{left: `${result}px`}}>
            {setResultValue}{unitText}
          </div>
        </div>
      )}
      {showLabel && (
        <div className="label-text">
          <div className="start-label">{min}{unitText}</div>
          <div className="end-label">{max}{unitText}</div>
        </div>
      )}
    </div>
  )
}

export default BeSlider        