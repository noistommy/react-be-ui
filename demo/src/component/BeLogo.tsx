import { useState, useEffect } from 'react'

const WORD_LIST = ['beauty', 'best', 'better', 'bewitch', 'benefit'] as const
const INTERVAL_MS = 5000

export default function BeLogo(): JSX.Element {
  const [word, setWord] = useState<string>('')

  useEffect(() => {
    let count = 0
    const intervalId: number = window.setInterval(() => {
      const nextWord = WORD_LIST[count % WORD_LIST.length]
      setWord(nextWord.slice(2))
      count++
    }, INTERVAL_MS)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="be-logo be flex">
      <span>Be</span>
      <div className="rolling-words be-primary-text">
        <span>{word}</span>
      </div>
      <span>UI</span>
    </div>
  )
}
