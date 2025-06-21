import { useEffect, useState } from 'react'

interface ScrollDownForMore {
  selector: string
  margin?: number
}

const defaultMargin = 0.2 // 20% viewport

const useScrollDownForMore = ({ selector, margin }: ScrollDownForMore) => {
  const [isVisible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      setVisible(scrollY < (margin || windowHeight * defaultMargin))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [margin])

  const handleScrollDown = () => {
    if (!selector) return
    const element = document.querySelector(selector)
    if (!element) return
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return { isVisible, handleScrollDown }
}

export default useScrollDownForMore
