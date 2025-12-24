import { useEffect, useState } from 'react'

const TypingText = ({
  text,
  speed = 40,
  pauseAfterTyping = 3000,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let timeout

    if (index < text.length) {
      const char = text[index]

      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + char)
        setIndex(index + 1)
      }, char === ' ' ? speed * 2 : speed)
    } else {
      // Pause, then restart typing
      timeout = setTimeout(() => {
        setDisplayedText('')
        setIndex(0)
      }, pauseAfterTyping)
    }

    return () => clearTimeout(timeout)
  }, [index, text, speed, pauseAfterTyping])

  return (
    <p className={`text-gray-400 text-lg max-w-xl ${className}`}>
      {displayedText}
      <span className="ml-1 animate-blink">|</span>
    </p>
  )
}

export default TypingText
